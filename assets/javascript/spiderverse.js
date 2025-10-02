const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

document.addEventListener('DOMContentLoaded', function() {
    console.log('Spider-Verse JavaScript inicializado!');
    
    if (isMoviePage()) {
        initializeMoviePage();
    } else {
        initializeNavigation();
        initializeAnimations();
        initializeParallax();
        initializeMovieButtons();
        initializeBackButtons();
        initializeCastCards();
        initializeSceneCards();
        initializeFactCards();
        initializeTimelineItems();
        initializeFeatureCards();
        initializeDetailCards();
        initializeLogo();
        initializeFooterLinks();
        initializeScrollEffects();
        initializeMCUBadges();
        initializeHighlightElements();
        initializeCharacterCards();
    }
    
    highlightActiveNav();
});

function initializeNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }
            
            navTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function initializeAnimations() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

function initializeParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const speed = 0.5;
        
        const movieHero = document.querySelector('.movie-hero');
        const characterHero = document.querySelector('.character-hero');
        
        if (movieHero) {
            movieHero.style.transform = `translateY(${scrolled * speed}px)`;
        }
        
        if (characterHero) {
            characterHero.style.transform = `translateY(${scrolled * speed}px)`;
        }
    });
}

function initializeMovieButtons() {
    const movieButtons = document.querySelectorAll('.movie-button');
    movieButtons.forEach(button => {
        button.addEventListener('click', function() {
            const movieTitle = this.closest('.movie-overlay').querySelector('.movie-title').textContent;
            navigateToMovie(movieTitle);
        });
    });
}

function initializeCharacterCards() {
    const characterCards = document.querySelectorAll('.character-card');
    characterCards.forEach(card => {
        card.addEventListener('click', function() {
            const actorKey = this.getAttribute('data-actor');
            const actorRoutes = {
                'tobey-maguire': './pages/tobey-maguire/index.html',
                'andrew-garfield': './pages/andrew-garfield/index.html',
                'tom-holland': './pages/tom-holland/index.html',
                'miles-morales': './pages/miles-morales/index.html'
            };
            
            if (actorRoutes[actorKey]) {
                window.location.href = actorRoutes[actorKey];
            }
        });
    });
}

function navigateToActor(actorName) {
    const actorRoutes = {
        'Tobey Maguire': './pages/tobey-maguire/index.html',
        'Andrew Garfield': './pages/andrew-garfield/index.html',
        'Tom Holland': './pages/tom-holland/index.html',
        'Shameik Moore': './pages/miles-morales/index.html'
    };
    
    if (actorRoutes[actorName]) {
        window.location.href = actorRoutes[actorName];
    }
}

function navigateToMovie(movieTitle) {
    const movieRoutes = {
        'De Volta ao Lar': '/pages/tom-holland/de-volta-ao-lar.html',
        'Longe de Casa': '/pages/tom-holland/longe-de-casa.html',
        'Sem Volta para Casa': '/pages/tom-holland/sem-volta-para-casa.html',
        'Homem-Aranha': '/pages/tobey-maguire/homem-aranha-2002.html',
        'Homem-Aranha 2': '/pages/tobey-maguire/homem-aranha-2004.html',
        'Homem-Aranha 3': '/pages/tobey-maguire/homem-aranha-2007.html',
        'Homem-Aranha no Aranhaverso': '/pages/miles-morales/homem-aranha-no-aranhaverso.html',
        'Através do Aranhaverso': '/pages/miles-morales/atraves-do-aranhaverso.html',
        'Além do Aranhaverso': '/pages/miles-morales/alem-do-aranhaverso.html',
        'O Espetacular Homem-Aranha': '/pages/andrew-garfield/o-espetacular-homem-aranha-2012.html',
        'O Espetacular Homem-Aranha 2': '/pages/andrew-garfield/o-espetacular-homem-aranha-2-2014.html'
    };
    
    if (movieRoutes[movieTitle]) {
        window.location.href = movieRoutes[movieTitle];
    }
}

function initializeBackButtons() {
    const backButtons = document.querySelectorAll('.back-button');
    backButtons.forEach(button => {
        if (button.textContent.includes('Mais Informações')) {
            button.addEventListener('click', function() {
                const movieTitle = document.querySelector('.movie-title')?.textContent || 'Homem-Aranha';
                alert(`Mostrando mais informações sobre ${movieTitle}...`);
            });
        }
    });
}

function initializeCastCards() {
    const castCards = document.querySelectorAll('.cast-card');
    castCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
    });
}

function initializeSceneCards() {
    const sceneCards = document.querySelectorAll('.scene-card');
    sceneCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.scene-overlay');
            if (overlay) {
                overlay.style.opacity = '1';
                overlay.style.transition = 'opacity 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.scene-overlay');
            if (overlay) {
                overlay.style.opacity = '0';
            }
        });
    });
}

function initializeFactCards() {
    const factCards = document.querySelectorAll('.fact-card');
    factCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                this.style.transform = 'scale(1.05)';
                this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
            } else {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
            }
        });
    });
}

function initializeTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            const movie = this.querySelector('.timeline-movie')?.textContent || 'Filme';
            const year = this.querySelector('.timeline-year')?.textContent || 'Ano';
            alert(`${movie} (${year})`);
        });
    });
}

function initializeFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.feature-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
}

function initializeDetailCards() {
    const detailCards = document.querySelectorAll('.detail-card');
    detailCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, var(--primary-red, #e62429), var(--primary-blue, #1d4f91))';
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = '';
            this.style.transform = 'translateY(0)';
        });
    });
}

function initializeLogo() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            if (!window.location.pathname.includes('index.html')) {
                e.preventDefault();
                window.location.href = 'index.html';
            }
        });
    }
}

function initializeFooterLinks() {
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                alert('Funcionalidade em desenvolvimento!');
            }
        });
    });
}

function initializeScrollEffects() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(21, 21, 21, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
                header.style.transition = 'all 0.3s ease';
            } else {
                header.style.background = '';
                header.style.backdropFilter = 'none';
            }
        }
    });
}

function initializeMCUBadges() {
    const mcuBadges = document.querySelectorAll('.mcu-badge');
    mcuBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.5s ease-in-out';
        });
        
        badge.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
}

function initializeHighlightElements() {
    const highlightElements = document.querySelectorAll('.highlight');
    highlightElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.color = 'var(--accent-yellow, #f5c518)';
            this.style.transition = 'color 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.color = '';
        });
    });
}

function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();
    const navTabs = document.querySelectorAll('.nav-tab');
    
    navTabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    if (currentPage.includes('index') || currentPage === '' || currentPage.includes('tom-holland')) {
        const homeTab = document.querySelector('.nav-tab[href="index.html"]');
        if (homeTab) homeTab.classList.add('active');
    } else if (currentPage.includes('de-volta-ao-lar')) {
        const filmsTab = document.querySelector('.nav-tab[href="#"]');
        if (filmsTab) filmsTab.classList.add('active');
    } else if (currentPage.includes('longe-de-casa')) {
        const filmsTab = document.querySelector('.nav-tab[href="#"]');
        if (filmsTab) filmsTab.classList.add('active');
    } else if (currentPage.includes('sem-volta-para-casa')) {
        const filmsTab = document.querySelector('.nav-tab[href="#"]');
        if (filmsTab) filmsTab.classList.add('active');
    } else if (currentPage.includes('homem-aranha-2002')) {
        const filmsTab = document.querySelector('.nav-tab[href="#"]');
        if (filmsTab) filmsTab.classList.add('active');
    } else if (currentPage.includes('homem-aranha-2004')) {
        const filmsTab = document.querySelector('.nav-tab[href="#"]');
        if (filmsTab) filmsTab.classList.add('active');
    } else if (currentPage.includes('homem-aranha-2007')) {
        const filmsTab = document.querySelector('.nav-tab[href="#"]');
        if (filmsTab) filmsTab.classList.add('active');
    } else if (currentPage.includes('homem-aranha-no-aranhaverso')) {
        const filmsTab = document.querySelector('.nav-tab[href="#"]');
        if (filmsTab) filmsTab.classList.add('active');
    } else if (currentPage.includes('atraves-do-aranhaverso')) {
        const filmsTab = document.querySelector('.nav-tab[href="#"]');
        if (filmsTab) filmsTab.classList.add('active');
    } else if (currentPage.includes('alem-do-aranhaverso')) {
        const filmsTab = document.querySelector('.nav-tab[href="#"]');
        if (filmsTab) filmsTab.classList.add('active');
    } else if (currentPage.includes('o-espetacular-homem-aranha')) {
        const filmsTab = document.querySelector('.nav-tab[href="#"]');
        if (filmsTab) filmsTab.classList.add('active');
    }
}

function initializeMoviePage() {
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            navTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.movie-hero');
        const speed = 0.5;
        if (hero) {
            hero.style.transform = `translateY(${scrolled * speed}px)`;
        }
    });
}

function isMoviePage() {
    return document.querySelector('.movie-hero') !== null;
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const activeModals = document.querySelectorAll('.modal.active');
        if (activeModals.length > 0) {
            activeModals.forEach(modal => modal.classList.remove('active'));
        }
    }
});

window.addEventListener('load', function() {
    console.log('Página Spider-Verse totalmente carregada!');
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .cast-card, .scene-card, .fact-card, .feature-card, .detail-card {
            transition: all 0.3s ease;
        }
        
        .scene-overlay {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .character-card {
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
});