projects.forEach(project => {
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
        showElement('description', project);
    });

    projectLink.id = `project-${project.id}`;

    projectLink.appendChild(projectIcon);
    projectLink.appendChild(projectTitle);

    document.getElementById('projects-list').appendChild(projectLink);
});