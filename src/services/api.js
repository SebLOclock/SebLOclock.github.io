const API_BASE_URL = 'https://blog.sebastienlemoine.fr/wp-json/wp/v2'

export const fetchPosts = async (perPage = 10) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts?_embed&per_page=${perPage}`)
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Erreur lors de la récupération des articles :', error)
    throw error
  }
}

export const fetchPostBySlug = async (slug) => {
  try {
    console.log(`Tentative de récupération de l'article avec le slug: ${slug}`)
    const response = await fetch(`${API_BASE_URL}/posts?slug=${slug}&_embed`)
    
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`)
    }
    
    const data = await response.json()
    console.log(`Réponse de l'API pour le slug ${slug}:`, data)
    
    if (!data || data.length === 0) {
      throw new Error(`Aucun article trouvé avec le slug: ${slug}`)
    }
    
    return data[0]
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article :', error)
    throw error
  }
} 