// Récupérer le slug en pramamêtre de l'url article.html?slug=creation-dune-extension-vs-code-pour-la-gestion-de-taches
const slug = window.location.search.split('=')[1];
console.log(slug);

// On récupère l'article en fonction du slug
const url = `https://blog.sebastienlemoine.fr/wp-json/wp/v2/posts?slug=${slug}&_embed`;

fetch(url).then(response => {
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(response.status);
    }
}).then(data => {
    const article = data[0];
    console.log(article);
    const articleContainer = document.querySelector('#article');

    const articleTitle = document.createElement('h1');
    articleTitle.innerHTML = DOMPurify.sanitize(article.title.rendered);
    articleTitle.classList.add('section__title');
    articleContainer.appendChild(articleTitle);

    const articleDate = document.createElement('p');
    articleDate.textContent = new Date(article.date).toLocaleDateString();
    articleDate.classList.add('article__date');
    articleContainer.appendChild(articleDate);

    // On récupère l'image de l'article
    const articleImage = article._embedded['wp:featuredmedia'][0].source_url;
    const articleImageElement = document.createElement('img');
    articleImageElement.src = articleImage;
    articleImageElement.alt = article.title.rendered;
    articleImageElement.classList.add('article__image');
    articleContainer.appendChild(articleImageElement);
    
    const articleContent = document.createElement('div');
    // Pour le contenu HTML de WordPress, on utilise DOMPurify pour nettoyer le HTML
    articleContent.innerHTML = DOMPurify.sanitize(article.content.rendered);
    articleContent.classList.add('article__content');
    articleContainer.appendChild(articleContent);

    const articleAuthor = document.createElement('p');
    articleAuthor.textContent = article._embedded.author[0].name;
    articleAuthor.classList.add('article__author');
    articleContainer.appendChild(articleAuthor);

});


