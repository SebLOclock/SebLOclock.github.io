import { initAnimations } from './modules/animations.js';
import { initSmoothScroll } from './modules/navigation.js';
import { fetchPosts } from './modules/api.js';
import { createBlogPost, createCompetenceItem } from './modules/dom.js';
import { updateFooterYear } from './modules/utils.js';

document.addEventListener("DOMContentLoaded", async function() {
    // Initialisation des animations
    initAnimations();
    
    // Initialisation du défilement fluide
    initSmoothScroll();
    
    // Mise à jour de l'année dans le footer
    updateFooterYear();

    // Initialisation des compétences
    const competenceLists = document.querySelectorAll('.competence-list');
    competenceLists.forEach(list => {
        const competences = Array.from(list.children).map(li => li.textContent);
        list.innerHTML = '';
        competences.forEach(competence => {
            list.appendChild(createCompetenceItem(competence));
        });
    });

    // Récupération et affichage des articles
    try {
        const blogContainer = document.querySelector('.blog-container');
        if (blogContainer) {
            const posts = await fetchPosts(3);
            posts.forEach(post => {
                const preview = createBlogPost(post);
                blogContainer.appendChild(preview);
            });
        }
    } catch (error) {
        console.error('Erreur lors du chargement des articles :', error);
    }
});