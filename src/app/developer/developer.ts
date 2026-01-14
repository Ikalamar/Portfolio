import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured: boolean;
}

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './developer.html',
  styleUrl: './developer.css',
})
export class DeveloperComponent implements OnInit {
  projects: Project[] = [];
  selectedCategory: string = 'all';

  categories = ['all', 'web', 'full-stack', 'frontend', 'backend'];

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projects = [
      {
        id: 1,
        title: 'Accessibility Awareness Website',
        description: 'Site web de sensibilisation à l\'accessibilité numérique développé avec Jahia CMS pour Digital Factory MMA',
        image: 'assets/project-1.jpg',
        technologies: ['Jahia CMS', 'HTML', 'CSS', 'JavaScript'],
        featured: true,
      },
      {
        id: 2,
        title: 'Restaurant Management System',
        description: 'Site vitrine de restaurant avec gestion des menus et réservations intégrées',
        image: 'assets/project-2.jpg',
        technologies: ['PHP', 'MVC', 'MySQL', 'Bootstrap'],
        featured: true,
      },
      {
        id: 3,
        title: 'E-Commerce Platform',
        description: 'Plateforme e-commerce complète avec panier, paiement et gestion d\'inventaire',
        image: 'assets/project-3.jpg',
        technologies: ['Node.js', 'React', 'MongoDB', 'Stripe'],
        featured: false,
      },
      {
        id: 4,
        title: 'Task Management App',
        description: 'Application Angular de gestion de tâches avec synchronisation en temps réel',
        image: 'assets/project-4.jpg',
        technologies: ['Angular', 'TypeScript', 'Firebase', 'Material Design'],
        featured: false,
      },
      {
        id: 5,
        title: 'Social Media Dashboard',
        description: 'Tableau de bord pour gérer plusieurs comptes de réseaux sociaux',
        image: 'assets/project-5.jpg',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Scrum'],
        featured: false,
      },
      {
        id: 6,
        title: 'Real Estate Portal',
        description: 'Portail immobilier avec recherche avancée et visualisation des propriétés en 3D',
        image: 'assets/project-6.jpg',
        technologies: ['Angular', 'C#', 'SQL Server', 'Three.js'],
        featured: false,
      },
    ];
  }

  filterProjects(): Project[] {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(p =>
      p.technologies.some(t =>
        t.toLowerCase().includes(this.selectedCategory)
      )
    );
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(p => p.featured);
  }
}
