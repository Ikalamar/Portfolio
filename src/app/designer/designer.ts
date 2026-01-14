import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface DesignProject {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tools: string[];
  featured: boolean;
}

@Component({
  selector: 'app-designer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './designer.html',
  styleUrl: './designer.css',
})
export class DesignerComponent implements OnInit {
  projects: DesignProject[] = [];
  selectedCategory: string = 'all';

  categories = ['all', 'branding', 'ui-design', 'graphic', 'illustration', 'web-design'];

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projects = [
      {
        id: 1,
        title: 'Digital Factory MMA - Brand Identity',
        description: 'Création d\'une identité visuelle complète pour Digital Factory MMA incluant logo, couleurs et guidelines',
        image: 'assets/design-1.jpg',
        category: 'branding',
        tools: ['Photoshop', 'Illustrator', 'Figma'],
        featured: true,
      },
      {
        id: 2,
        title: 'E-Sports Line - Team Design',
        description: 'Design graphique et branding pour équipe d\'e-sports incluant logo, uniformes et matériel promotionnel',
        image: 'assets/design-2.jpg',
        category: 'branding',
        tools: ['Photoshop', 'Illustrator'],
        featured: true,
      },
      {
        id: 3,
        title: 'Mobile App UI Design',
        description: 'Conception d\'interface utilisateur pour application mobile de gestion de tâches',
        image: 'assets/design-3.jpg',
        category: 'ui-design',
        tools: ['Figma', 'Adobe XD'],
        featured: false,
      },
      {
        id: 4,
        title: 'Website Design System',
        description: 'Création d\'un système de design complet pour site web e-commerce',
        image: 'assets/design-4.jpg',
        category: 'ui-design',
        tools: ['Figma', 'Photoshop'],
        featured: false,
      },
      {
        id: 5,
        title: 'Social Media Graphics',
        description: 'Collection de designs graphiques pour campagnes de réseaux sociaux',
        image: 'assets/design-5.jpg',
        category: 'graphic',
        tools: ['Photoshop', 'Illustrator'],
        featured: false,
      },
      {
        id: 6,
        title: 'Illustration Series',
        description: 'Série d\'illustrations originales pour projet de storytelling digital',
        image: 'assets/design-6.jpg',
        category: 'illustration',
        tools: ['Photoshop', 'Procreate'],
        featured: false,
      },
      {
        id: 7,
        title: 'Restaurant Menu Design',
        description: 'Design de menus imprimés pour restaurant avec mise en page créative',
        image: 'assets/design-7.jpg',
        category: 'graphic',
        tools: ['InDesign', 'Photoshop'],
        featured: false,
      },
      {
        id: 8,
        title: 'Corporate Website Design',
        description: 'Design complet d\'un site web corporate avec prototypes interactifs',
        image: 'assets/design-8.jpg',
        category: 'web-design',
        tools: ['Figma', 'Photoshop', 'Illustrator'],
        featured: false,
      },
    ];
  }

  filterProjects(): DesignProject[] {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedCategory);
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }

  getFeaturedProjects(): DesignProject[] {
    return this.projects.filter(p => p.featured);
  }
}
