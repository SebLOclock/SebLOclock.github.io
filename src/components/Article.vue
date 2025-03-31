<template>
  <article id="article" class="section">
    <div v-if="loading" class="loading">
      Chargement de l'article...
    </div>
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    <template v-else-if="article._embedded">
      <div class="article__image-container">
        <img 
          :src="article._embedded['wp:featuredmedia'][0].source_url" 
          :alt="article.title.rendered"
          class="article__image"
        >
      </div>
      
      <div class="article__meta">
        <h1 class="article__title" v-html="article.title.rendered"></h1>
        <div class="article__meta-info">
          <p class="article__date">{{ formatDate(article.date) }}</p>
          <p class="article__author">{{ article._embedded.author[0].name }}</p>
        </div>
      </div>
      
      <div class="article__content-container">
        <div class="article__content" v-html="article.content.rendered"></div>
      </div>
    </template>
    <div v-else class="error">
      Article non trouvé
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchPostBySlug } from '@/services/api'
import DOMPurify from 'dompurify'

const route = useRoute()
const article = ref({})
const loading = ref(true)
const error = ref(null)

const formatDate = (date) => {
  return new Date(date).toLocaleDateString()
}

onMounted(async () => {
  try {
    loading.value = true
    error.value = null
    const slug = route.params.slug
    
    console.log('Route actuelle:', route.fullPath)
    console.log('Slug extrait:', slug)
    
    if (!slug) {
      throw new Error('Slug non fourni')
    }
    
    // Vérifier si l'URL est correcte
    const expectedUrl = `/article/${slug}`
    if (route.fullPath !== expectedUrl) {
      console.warn('URL non standard détectée:', route.fullPath)
    }
    
    article.value = await fetchPostBySlug(slug)
    if (!article.value) {
      throw new Error('Article non trouvé')
    }
    
    console.log('Article chargé avec succès:', article.value)
  } catch (err) {
    error.value = err.message
    console.error('Erreur lors du chargement de l\'article :', err)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.loading {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
}

.error {
  text-align: center;
  padding: 2rem;
  color: #dc3545;
  font-size: 1.2rem;
}
</style> 