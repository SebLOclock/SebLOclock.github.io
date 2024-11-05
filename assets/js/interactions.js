function stylizeTags() {
    // get technology elements
    const technologies = document.querySelectorAll('.technologies li');
    technologies.forEach(technology => {

        // background black for shell

        if (technology.textContent === 'Shell') {
            technology.classList.add('shell');
        }

        if (technology.textContent === 'HTML') {
            technology.classList.add('html');
        }

        if (technology.textContent === 'CSS') {
            technology.classList.add('css');
        }

        if (technology.textContent === 'JavaScript') {
            technology.classList.add('javascript');
        }

        if (technology.textContent === 'linux') {
            technology.classList.add('linux');
        }

        if (technology.textContent === 'wordpress') {
            technology.classList.add('wordpress');
        }

        if (technology.textContent === 'docker') {
            technology.classList.add('docker');
        }
    });
}


function constructDescription(container, project) {
    const title = document.createElement('h3');
    title.textContent = project.title;
    title.classList.add('project-title');

    const description = document.createElement('p');
    description.textContent = project.description;
    description.classList.add('project-description');

    const technologies = document.createElement('ul');
    technologies.classList.add('technologies');
    project.technologies.forEach(technology => {
        const li = document.createElement('li');
        li.classList.add('technology');
        li.textContent = technology;
        technologies.appendChild(li);
    });

    const link = document.createElement('a');
    link.href = project.url;
    link.target = '_blank';
    link.textContent = 'Voir le projet';
    link.classList.add('project-link');
    const button = document.createElement('button');
    button.textContent = 'Fermer';
    button.classList.add('close');
    button.addEventListener('click', () => {
        hideElement('description');
    });

    const actions = document.createElement('div');
    actions.classList.add('actions');
    actions.appendChild(link);
    actions.appendChild(button);


    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(technologies);
    container.appendChild(actions);

    stylizeTags();
}

function showElement(id, project) {
    const element = document.getElementById(id);

    // vérivier si l'élément est déjà affiché
    if (element.classList.contains('show')) {
        hideElement(element.id);
    }

    // Modifier le contenu de la div
    constructDescription(element, project);

    // Supprimer la classe hidden et ajouter la classe show pour démarrer l'animation
    element.classList.remove('hidden', 'hide');
    element.classList.add('show');
}

function hideElement(id) {
    const element = document.getElementById(id);

    element.textContent = '';
    // Supprimer la classe show et ajouter la classe hidden pour démarrer l'animation
    element.classList.remove('show');
    element.classList.add('hide');

    element.addEventListener('animationend', () => {
        element.classList.add('hidden');
    }, { once: true });
}

// get all elements with projet-link class
const projectLinks = document.querySelectorAll('.project-link');

// add event listener to each element
projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const project = projects.find((project) => {
            return project.id === parseInt(e.target.id.replace('project-', ''));
        });
        if (!project) {
            return;
        }
        showElement('description', project)
    });

});

