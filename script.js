// ===== NAVIGATION & ROUTING =====

// Gestion du menu hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

function closeMenu() {
  if (hamburger && navMenu) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
}

// Fermer le menu en cliquant sur un lien
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

// Gestion du hash dans l'URL au chargement (pour la section contact)
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.substring(1);
  if (hash === 'contact') {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      setTimeout(() => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
  
  // Initialiser l'année dans le footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Animer les barres de compétences (seulement sur la page d'accueil)
  const skillsSection = document.querySelector('.skills-section');
  if (skillsSection) {
    animateSkillBars();
  }
  
  // Charger les projets (seulement sur les pages concernées)
  if (document.getElementById('devFeaturedProjects') || document.getElementById('devProjectsGrid')) {
    loadDeveloperProjects();
  }
  if (document.getElementById('designFeaturedProjects') || document.getElementById('designProjectsGrid')) {
    loadDesignerProjects();
  }
});

// Observer pour animer les barres de compétences quand visibles
function animateSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll('.skill-progress-bar');
        progressBars.forEach(bar => {
          const level = bar.getAttribute('data-level');
          bar.style.setProperty('--skill-width', `${level}%`);
          bar.classList.add('animated');
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const skillsSection = document.querySelector('.skills-section');
  if (skillsSection) {
    observer.observe(skillsSection);
  }
}

// ===== DEVELOPER PROJECTS =====

const developerProjects = [
  {
    title: 'Accessibilité Numérique - Digital Factory MMA',
    description: 'Participe à l\'optimisation de l\'accessibilité numérique des sites MMA',
    image: 'assets/img/mma.png',
    link: 'https://www.mma.fr/',
    technologies: ['Jahia CMS', 'HTML', 'CSS', 'JavaScript'],
    category: 'web'
  },
  {
    title: 'Ultimate Stage Stricker',
    description: 'Site web pour assité les joueurs dans la phase de pick/ban de stage sur le jeu Super Smash Bros. Ultimate',
    image: 'assets/img/USS.png',
    link: 'https://ikalamar.github.io/Ultimate-Stage-Stricker/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'web'
  },
  {
    title: 'Page de redirection Espace Gestion Flottes - MMA',
    description: 'Page de redirection pour l\'Espace Gestion Flottes de MMA',
    image: 'assets/img/egf.png',
    link: 'https://www.mma.fr/',
    technologies: ['Angular', 'CSS', 'TypeScript'],
    category: 'web'
  },
];

let currentDevFilter = 'all';

function loadDeveloperProjects() {
  // Charger les projets featured
  const featuredContainer = document.getElementById('devFeaturedProjects');
  if (featuredContainer) {
    const featuredProjects = developerProjects.slice(0, 2);
    featuredContainer.innerHTML = featuredProjects.map(project => createFeaturedCard(project)).join('');
  }

  // Charger tous les projets
  renderDeveloperProjects();

  // Ajouter les événements aux boutons de filtre
  const filterButtons = document.querySelectorAll('#devFilterButtons .filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Mettre à jour le filtre actif
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      currentDevFilter = btn.getAttribute('data-filter');
      renderDeveloperProjects();
    });
  });
}

function renderDeveloperProjects() {
  const projectsContainer = document.getElementById('devProjectsGrid');
  if (!projectsContainer) return;

  const filteredProjects = currentDevFilter === 'all' 
    ? developerProjects 
    : developerProjects.filter(p => p.category === currentDevFilter);

  projectsContainer.innerHTML = filteredProjects.map(project => createProjectCard(project)).join('');
}

// ===== DESIGNER PROJECTS =====

const designerProjects = [
  {
    title: 'Equipe Versus - eSport Line 2025-26',
    description: 'Graphiste pour la création des visuels de l\'équipe Versus eSport Line 2026',
    image: 'assets/img/eLine26.jpg',
    tools: ['Photoshop', 'Affinity', 'Blender'],
    category: 'illustration'
  },
  {
    title: 'Equipe Smash - eSport Line 2023-24',
    description: 'Graphiste pour la création des visuels de l\'équipe Smash eSport Line 2024-25',
    image: 'assets/img/eLine23.jpg',
    tools: ['Photoshop', 'Blender'],
    category: 'illustration'
  },
  {
    title: 'Bagarre 2 Bar',
    description: 'Graphiste pour les communications des tournois hebdomadaires Bagarre 2 Bar',
    image: 'assets/img/Bagarre2Bar.png',
    tools: ['Photoshop'],
    category: 'illustration'
  },
    {
    title: 'DragonFeu Luna Cup',
    description: 'Graphiste pour le tournoi DragonFeu Luna Cup sur Super Smash Bros. Ultimate',
    image: 'assets/img/DFLC.png',
    tools: ['Photoshop', 'Blender'],
    category: 'illustration'
  },
  {
    title: 'Very SUS Arena',
    description: 'Graphiste pour le tournoi Very SUS Arena sur Super Smash Bros. Ultimate',
    image: 'assets/img/VSA.jpg',
    tools: ['Photoshop', 'Blender'],
    category: 'illustration'
  },
  {
    title: 'DragonFeu Bastos Cup',
    description: 'Graphiste pour le tournoi DragonFeu Bastos Cup sur Super Smash Bros. Ultimate',
    image: 'assets/img/DFBC.png',
    tools: ['Photoshop'],
    category: 'illustration'
  },
];

let currentDesignFilter = 'all';

function loadDesignerProjects() {
  // Charger les projets featured
  const featuredContainer = document.getElementById('designFeaturedProjects');
  if (featuredContainer) {
    const featuredProjects = designerProjects.slice(0, 2);
    featuredContainer.innerHTML = featuredProjects.map(project => createFeaturedCard(project, true)).join('');
  }

  // Charger tous les projets
  renderDesignerProjects();

  // Ajouter les événements aux boutons de filtre
  const filterButtons = document.querySelectorAll('#designFilterButtons .filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Mettre à jour le filtre actif
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      currentDesignFilter = btn.getAttribute('data-filter');
      renderDesignerProjects();
    });
  });
}

function renderDesignerProjects() {
  const projectsContainer = document.getElementById('designProjectsGrid');
  if (!projectsContainer) return;

  const filteredProjects = currentDesignFilter === 'all' 
    ? designerProjects 
    : designerProjects.filter(p => p.category === currentDesignFilter);

  projectsContainer.innerHTML = filteredProjects.map(project => createProjectCard(project, true)).join('');
}

// ===== CARD TEMPLATES =====

function createFeaturedCard(project, isDesign = false) {
  const tags = isDesign ? project.tools : project.technologies;
  const placeholderImage = isDesign ? 'assets/img/placeholder_graph.png' : 'assets/img/placeholder_dev.png';
  const onerrorHandler = `onerror="this.onerror=null; this.src='${placeholderImage}'"`;
  return `.Date
    <a class="featured-card" href="${project.link}" target="_blank">
      <div class="featured-card-image">
        <img src="${project.image}" alt="${project.title}" ${onerrorHandler} loading="lazy">
      </div>
      <div class="featured-card-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech-tags">
          ${tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </a>
  `;
}

function createProjectCard(project, isDesign = false) {
  const tags = isDesign ? project.tools : project.technologies;
  const placeholderImage = isDesign ? 'assets/img/placeholder_graph.png' : 'assets/img/placeholder_dev.png';
  const onerrorHandler = `onerror="this.onerror=null; this.src='${placeholderImage}'"`;
  return `
    <a class="project-card" href="${project.link}" target="_blank">
      <div class="project-card-image">
        <img src="${project.image}" alt="${project.title}" ${onerrorHandler} loading="lazy">
      </div>
      <div class="project-card-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech-tags">
          ${tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </a>
  `;
}

// ===== CONTACT FORM =====

// function handleContactForm(event) {
//   event.preventDefault();
  
//   const formData = {
//     name: document.getElementById('name').value,
//     email: document.getElementById('email').value,
//     subject: document.getElementById('subject').value,
//     message: document.getElementById('message').value
//   };
  
//   // Simuler l'envoi du formulaire
//   console.log('Form submitted:', formData);
  
//   alert('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
  
//   // Réinitialiser le formulaire
//   event.target.reset();
// }

// ===== SCROLL EFFECTS =====

// Effet de transparence sur la navbar au scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.boxShadow = '0 5px 20px rgba(128, 182, 127, 0.2)';
  } else {
    navbar.style.boxShadow = '0 5px 15px rgba(128, 182, 127, 0.1)';
  }

  lastScroll = currentScroll;
});

// ===== SMOOTH SCROLL FOR LINKS =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href.length > 1) {
      e.preventDefault();
      const sectionId = href.substring(1);
      navigateTo(sectionId);
    }
  });
});

// ===== UTILITY FUNCTIONS =====

// Fonction pour détecter si un élément est visible
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Animation des éléments au scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.project-card, .featured-card, .stat-card');
  elements.forEach((el, index) => {
    if (isElementInViewport(el)) {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 50);
    }
  });
};

// Initialiser l'animation au scroll
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ===== KEYBOARD NAVIGATION =====

// Support de la navigation au clavier
document.addEventListener('keydown', (e) => {
  // Echap pour fermer le menu mobile
  if (e.key === 'Escape') {
    closeMenu();
  }
});

console.log('Portfolio loaded successfully! 🚀');
