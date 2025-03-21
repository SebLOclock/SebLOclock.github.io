document.addEventListener("DOMContentLoaded", function() {
    // Récupération de la liste des articles
    const url = 'https://blog.sebastienlemoine.fr/wp-json/wp/v2/posts?_embed&per_page=100';

    fetch(url).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response.status);
        }
    }).then(data => {
        const blogList = document.querySelector('.blog-list');
        
        data.forEach(post => {
            const article = document.createElement('article');
            article.classList.add('blog-list__item');

            const articleImage = document.createElement('img');
            articleImage.src = post._embedded['wp:featuredmedia'][0].source_url;
            articleImage.alt = post.title.rendered;
            articleImage.classList.add('blog-list__image');
            article.appendChild(articleImage);

            const articleContent = document.createElement('div');
            articleContent.classList.add('blog-list__content');

            const articleTitle = document.createElement('h3');
            articleTitle.textContent = DOMPurify.sanitize(post.title.rendered);
            articleTitle.classList.add('blog-list__title');
            articleContent.appendChild(articleTitle);

            const articleDescription = document.createElement('p');
            articleDescription.innerHTML = DOMPurify.sanitize(post.excerpt.rendered);
            articleDescription.classList.add('blog-list__description');
            articleContent.appendChild(articleDescription);

            const articleMeta = document.createElement('div');
            articleMeta.classList.add('blog-list__meta');

            const articleDate = document.createElement('span');
            articleDate.textContent = new Date(post.date).toLocaleDateString();
            articleDate.classList.add('blog-list__date');
            articleMeta.appendChild(articleDate);

            const articleAuthor = document.createElement('span');
            articleAuthor.textContent = post._embedded.author[0].name;
            articleAuthor.classList.add('blog-list__author');
            articleMeta.appendChild(articleAuthor);

            articleContent.appendChild(articleMeta);

            const articleLink = document.createElement('a');
            articleLink.textContent = 'Lire la suite';
            articleLink.href = `./article.html?slug=${post.slug}`;
            articleLink.classList.add('blog-list__link');
            articleContent.appendChild(articleLink);

            article.appendChild(articleContent);
            blogList.appendChild(article);
        });
    }).catch(error => {
        console.error('Erreur :', error);
    });
}); 