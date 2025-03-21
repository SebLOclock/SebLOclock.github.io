const API_BASE_URL = 'https://blog.sebastienlemoine.fr/wp-json/wp/v2';

export const fetchPosts = async (perPage = 10) => {
    try {
        const response = await fetch(`${API_BASE_URL}/posts?_embed&per_page=${perPage}`);
        if (!response.ok) {
            throw new Error(response.status);
        }
        return await response.json();
    } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
        throw error;
    }
};

export const fetchPostBySlug = async (slug) => {
    try {
        const response = await fetch(`${API_BASE_URL}/posts?slug=${slug}&_embed`);
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'article :', error);
        throw error;
    }
}; 