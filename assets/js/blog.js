import { fetchPosts } from './modules/api.js';
import { createBlogListItem } from './modules/dom.js';

document.addEventListener("DOMContentLoaded", async function() {
    try {
        const posts = await fetchPosts(100);
        const blogList = document.querySelector('.blog-list');
        
        posts.forEach(post => {
            const article = createBlogListItem(post);
            blogList.appendChild(article);
        });
    } catch (error) {
        console.error('Erreur lors du chargement des articles :', error);
    }
}); 