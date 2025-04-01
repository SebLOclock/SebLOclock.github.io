<template>
  <section class="recent-articles">
    <h2 class="recent-articles__title">Articles récents</h2>
    <div v-if="loading" class="recent-articles__loading">
      Chargement des articles récents...
    </div>
    <div v-else-if="error" class="recent-articles__error">
      {{ error }}
    </div>
    <div v-else-if="filteredArticles.length === 0" class="recent-articles__empty">
      Aucun autre article récent disponible
    </div>
    <div v-else class="recent-articles__grid">
      <article v-for="article in filteredArticles" :key="article.id" class="recent-article">
        <router-link :to="{ name: 'article', params: { slug: article.slug }}" class="recent-article__link">
          <div class="recent-article__image-container">
            <img 
              :src="article._embedded['wp:featuredmedia'][0].source_url" 
              :alt="article.title.rendered"
              class="recent-article__image"
            >
          </div>
          <div class="recent-article__content">
            <h3 class="recent-article__title" v-html="article.title.rendered"></h3>
            <p class="recent-article__date">{{ formatDate(article.date) }}</p>
          </div>
        </router-link>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { fetchPosts } from '@/services/api'

const route = useRoute()
const articles = ref([])
const loading = ref(true)
const error = ref(null)

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Filtrer les articles pour exclure l'article actuel
const filteredArticles = computed(() => {
  return articles.value.filter(article => article.slug !== route.params.slug)
})

const loadArticles = async () => {
  try {
    loading.value = true
    error.value = null
    articles.value = await fetchPosts(4) // Récupérer 4 articles pour avoir 3 après filtrage
  } catch (err) {
    error.value = err.message
    console.error('Erreur lors du chargement des articles récents :', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadArticles()
})

// Recharger les articles quand la route change
watch(
  () => route.params.slug,
  () => {
    loadArticles()
  }
)
</script>

<style scoped>
.recent-articles {
  margin-top: 4rem;
  padding-top: 4rem;
  border-top: 1px solid #eee;
}

.recent-articles__title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
}

.recent-articles__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

.recent-article {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.recent-article:hover {
  transform: translateY(-5px);
}

.recent-article__link {
  text-decoration: none;
  color: inherit;
}

.recent-article__image-container {
  position: relative;
  padding-top: 56.25%; /* Ratio 16:9 */
  overflow: hidden;
}

.recent-article__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recent-article__content {
  padding: 1.5rem;
}

.recent-article__title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
  line-height: 1.4;
}

.recent-article__date {
  font-size: 0.9rem;
  color: #666;
}

.recent-articles__loading,
.recent-articles__error,
.recent-articles__empty {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.recent-articles__error {
  color: #dc3545;
}

@media (max-width: 768px) {
  .recent-articles__grid {
    grid-template-columns: 1fr;
  }
}
</style> 