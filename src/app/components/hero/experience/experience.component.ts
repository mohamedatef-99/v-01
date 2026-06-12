import { Component, signal } from '@angular/core';
import { RevealDirective } from '../../../directives/reveal.directive';

interface Company {
  id: number;
  name: string;
  title: string;
  company: string;
  link: string;
  date: string;
  duties: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  companies = signal<Company[]>([
    {
      id: 1,
      name: 'Sheen IT',
      title: 'Front-End Developer (Angular)',
      company: '@Sheen Information Technology',
      link: '',
      date: 'Oct 2024 – Present',
      duties: [
        'Led front-end development of Fly WT, a full-scale bilingual flight booking platform built from scratch — flight search, seat selection, booking management, and local payment gateway integration.',
        'Architected reusable Angular component libraries and services following DRY principles, adopted across multiple product lines for consistent design and faster feature delivery.',
        'Spearheaded migration from legacy AngularJS to Angular 16+, improving performance and maintainability while directly reducing bug rates in migrated modules.',
        'Implemented full bilingual support (Arabic & English) with RTL layout switching, plus CMS integration and SEO best practices.',
        'Contributed to Agile ceremonies — sprint planning, code reviews, retrospectives — consistently delivering features on schedule.',
      ],
    },
    {
      id: 2,
      name: 'Tilde Technology',
      title: 'Front-End Developer (Angular)',
      company: '@Tilde Technology',
      link: 'https://tildetech.ae/',
      date: 'Aug 2023 – Oct 2024',
      duties: [
        'Developed and maintained multiple Angular applications for e-commerce and product management, with a strong focus on mobile-first UI and performance optimization.',
        'Built and shipped ElZatoonah, a price-comparison mobile app (Ionic) — feature development, critical bug fixes, and UI enhancements that improved user experience.',
        'Designed and built Price Hunter from scratch using Ionic: a scalable admin tool managing thousands of product records with add, edit, and sync functionality.',
        'Maintained and extended legacy AngularJS codebases, fixing critical bugs and shipping client-requested features with minimal disruption.',
        'Collaborated directly with designers and backend engineers to translate business requirements into clean, maintainable front-end code.',
      ],
    },
  ]);

  selectedCompany = signal<Company>(this.companies()[0]);

  selectCompany(company: Company) {
    this.selectedCompany.set(company);
  }
}
