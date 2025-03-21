import { fetchPostBySlug } from './modules/api.js';
import { createArticleContent } from './modules/dom.js';
import { getSlugFromUrl } from './modules/utils.js';

document.addEventListener("DOMContentLoaded", async function() {
    const slug = getSlugFromUrl();
    
    try {
        const article = await fetchPostBySlug(slug);
        createArticleContent(article);
    } catch (error) {
        console.error('Erreur lors du chargement de l\'article :', error);
    }
});


