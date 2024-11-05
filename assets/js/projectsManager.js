const projectsManager = {
    projects: [],
    init: function (projects) {
        this.projects = projects;

        projects.forEach(project => {
            this.constructProject(project);
        });
    },
    stylizeTags: function () {
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
    },


    constructDescription: function (container, project) {
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
            this.hideElement('description');
        });

        const actions = document.createElement('div');
        actions.classList.add('actions');
        actions.appendChild(link);
        actions.appendChild(button);


        container.appendChild(title);
        container.appendChild(description);
        container.appendChild(technologies);
        container.appendChild(actions);

        this.stylizeTags();
    },

    showElement: function (id, project) {
        const element = document.getElementById(id);

        // vérivier si l'élément est déjà affiché
        if (element.classList.contains('show')) {
            this.hideElement(element.id);
        }

        // Modifier le contenu de la div
        this.constructDescription(element, project);

        // Supprimer la classe hidden et ajouter la classe show pour démarrer l'animation
        element.classList.remove('hidden', 'hide');
        element.classList.add('show');
    },

    hideElement: function (id) {
        const element = document.getElementById(id);

        element.textContent = '';
        // Supprimer la classe show et ajouter la classe hidden pour démarrer l'animation
        element.classList.remove('show');
        element.classList.add('hide');

        element.addEventListener('animationend', () => {
            element.classList.add('hidden');
        }, { once: true });
    },

    constructProject: function (project) {
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
        projectTitle.classList.add('project-title');

        const projectIcon = document.createElement('img');
        projectIcon.src = project.image;
        projectIcon.alt = project.title;
        projectIcon.classList.add('icon');

        const projectLink = document.createElement('div');
        projectLink.classList.add('project-element');
        projectLink.addEventListener('click', (e) => {
            this.showElement('description', project);
        });

        projectLink.id = `project-${project.id}`;

        projectLink.appendChild(projectIcon);
        projectLink.appendChild(projectTitle);

        document.getElementById('projects-list').appendChild(projectLink);
    }

}