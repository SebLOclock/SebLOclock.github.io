document.addEventListener("DOMContentLoaded", function() {
    // Animation d'entrée pour les sections
    const sections = document.querySelectorAll('.section');
    
    // Observer d'intersection pour déclencher les animations au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    // Observer chaque section
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Navigation active au défilement
    const navLinks = document.querySelectorAll('.nav__link');
    
    // Fonction pour surligner le lien de navigation actif
    function highlightActiveNav() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Écouter le défilement pour la navigation active
    window.addEventListener('scroll', highlightActiveNav);
    
    // Navigation fluide
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation des compétences au survol
    const competenceItems = document.querySelectorAll('.competence-list li');
    
    competenceItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
    
    // Ajout de la date actuelle dans le footer
    const footerYear = document.querySelector('.footer p');
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `© ${currentYear} Sébastien LEMOINE. Tous droits réservés.`;


    // Récupération de la liste des articles

    const url = 'https://blog.sebastienlemoine.fr/wp-json/wp/v2/posts?_embed';

    fetch(url).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response.status);
        }
    }).then(data => {
        const articles = document.querySelector('.blog-container');
        
        data.forEach(post => {
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

            articles.appendChild(article);
        });
    }).catch(error => {
        console.error('Erreur :', error);
    });
});