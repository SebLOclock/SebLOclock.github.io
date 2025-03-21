export const initSmoothScroll = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link--ancor');
    const headerHeight = document.querySelector('.header').offsetHeight;

    // Fonction pour mettre à jour la classe active
    const updateActiveLink = (sectionId) => {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `/#${sectionId}`) {
                link.classList.add('active');
            }
        });
    };

    // Fonction pour trouver la section active
    const getActiveSection = () => {
        let currentSection = null;
        const scrollPosition = window.scrollY + headerHeight;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight;
            const sectionHeight = section.offsetHeight;

            // Pour la dernière section, on considère qu'elle est active si on est proche du bas de la page
            if (section === sections[sections.length - 1]) {
                if (scrollPosition + windowHeight >= documentHeight - 100) {
                    currentSection = section;
                }
            } else if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section;
            }
        });

        return currentSection;
    };

    // Gestion du défilement fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const sectionId = targetId.replace('/#', '');
                updateActiveLink(sectionId);

                const targetPosition = targetElement.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Écouteur de scroll pour mettre à jour la classe active
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }

        scrollTimeout = window.requestAnimationFrame(() => {
            const activeSection = getActiveSection();
            if (activeSection) {
                updateActiveLink(activeSection.id);
            }
        });
    });

    // Mise à jour initiale de la classe active
    const initialSection = getActiveSection();
    if (initialSection) {
        updateActiveLink(initialSection.id);
    }
}; 