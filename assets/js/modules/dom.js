export const createBlogPost = (post) => {
    const article = document.createElement('article');
    article.classList.add('blog-post');

    const articleImage = document.createElement('img');
    articleImage.src = post._embedded['wp:featuredmedia'][0].source_url;
    articleImage.alt = post.title.rendered;
    articleImage.classList.add('blog-post__image');
    article.appendChild(articleImage);

    const articleTitle = document.createElement('h3');
    articleTitle.textContent = post.title.rendered;
    articleTitle.classList.add('blog-post__title');
    article.appendChild(articleTitle);

    const articleDescription = document.createElement('p');
    articleDescription.innerHTML = DOMPurify.sanitize(post.excerpt.rendered);
    articleDescription.classList.add('blog-post__description');
    article.appendChild(articleDescription);

    const articleDate = document.createElement('p');
    articleDate.textContent = new Date(post.date).toLocaleDateString();
    articleDate.classList.add('blog-post__date');
    article.appendChild(articleDate);

    const articleLink = document.createElement('a');
    articleLink.innerText = 'Lire la suite';
    articleLink.href = `./article.html?slug=${post.slug}`;
    articleLink.classList.add('blog-post__link');
    article.appendChild(articleLink);

    return article;
};

export const createBlogListItem = (post) => {
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
    return article;
};

export const createArticleContent = (article) => {
    const articleContainer = document.querySelector('#article');

    // Image container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('article__image-container');
    articleContainer.appendChild(imageContainer);

    const articleImage = article._embedded['wp:featuredmedia'][0].source_url;
    const articleImageElement = document.createElement('img');
    articleImageElement.src = articleImage;
    articleImageElement.alt = article.title.rendered;
    articleImageElement.classList.add('article__image');
    imageContainer.appendChild(articleImageElement);

    // Meta container
    const metaContainer = document.createElement('div');
    metaContainer.classList.add('article__meta');
    articleContainer.appendChild(metaContainer);

    const articleTitle = document.createElement('h1');
    articleTitle.innerHTML = DOMPurify.sanitize(article.title.rendered);
    articleTitle.classList.add('article__title');
    metaContainer.appendChild(articleTitle);

    const metaInfo = document.createElement('div');
    metaInfo.classList.add('article__meta-info');
    metaContainer.appendChild(metaInfo);

    const articleDate = document.createElement('p');
    articleDate.textContent = new Date(article.date).toLocaleDateString();
    articleDate.classList.add('article__date');
    metaInfo.appendChild(articleDate);

    const articleAuthor = document.createElement('p');
    articleAuthor.textContent = article._embedded.author[0].name;
    articleAuthor.classList.add('article__author');
    metaInfo.appendChild(articleAuthor);
    
    // Content container
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('article__content-container');
    articleContainer.appendChild(contentContainer);
    
    const articleContent = document.createElement('div');
    articleContent.innerHTML = DOMPurify.sanitize(article.content.rendered);
    articleContent.classList.add('article__content');
    contentContainer.appendChild(articleContent);
};

export const createCompetenceItem = (competence) => {
    const li = document.createElement('li');
    li.className = 'competence-item';
    
    // Mapping des icônes Font Awesome pour chaque compétence
    const competenceIcons = {
        'Gestion d\'équipe': 'fa-users',
        'Leadership situationnel': 'fa-star',
        'Gestion de projets': 'fa-tasks',
        'Intelligence collective': 'fa-brain',
        'Stratégie Éducative': 'fa-graduation-cap',
        'Transformation Digitale': 'fa-digital-tachograph',
        'Innovation pédagogique': 'fa-lightbulb',
        'Veille technologique': 'fa-magnifying-glass-chart',
        'Architecture logicielle': 'fa-code',
        'Développement web': 'fa-code-branch',
        'Méthodes agiles': 'fa-sync',
        'Intelligence artificielle': 'fa-robot'
    };

    const icon = document.createElement('i');
    icon.className = `fas ${competenceIcons[competence] || 'fa-check'} competence-icon`;
    
    const text = document.createElement('span');
    text.className = 'competence-text';
    text.textContent = competence;
    
    li.appendChild(icon);
    li.appendChild(text);
    
    return li;
}; 