import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  companies = signal([
    {
      id: 1,
      name: 'Tilde Technology',
      title: 'Software Developer ',
      company: ' @Tilde Technology',
      link: 'https://tildetech.ae/',
      date: 'Oct 2024 – Present',
      duties: [
        'At Tilde, I worked on mission-critical Angular applications used by Wonder Travel — a leading tourism company established in 1980.',
        'Key Projects:',
        'Money Collector: Real-time dashboard built for NDC to manage agency balances, wallets, and top-ups. ',
        'NDC Uplift: A modern reimplementation of the NDC Core with a new UI/UX and updated architecture. ',
        'NDC Core: Online sales channel B2B for Wonder travel. ',
        'Core Contributions:',
        'Built reusable Angular components and services using modern architecture and DRY principles.',
        'Migrated AngularJS codebases to Angular 16+, enhancing performance and maintainability.',
        'Created a generic HTTP service adopted across projects for consistent API handling.',
        'Utilized Nx for monorepo management and multi-project organization.',
        'Collaborated with Java and .NET backend teams in a fully Agile setup.',
      ],
    },
    {
      id: 2,
      name: 'Shura Solutions',
      title: 'Software Developer ',
      company: ' @Shura Solutions',
      link: '',
      date: 'Aug 2023 – Oct 2024',
      duties: [
        'Shura Solutions is a product-based company focused on e-commerce and price discovery platforms.',
        'At Shura, I contributed to two mobile-first apps targeting price tracking and product management.',
        'Key Projects:',
        'ElZatoonah App:Price comparison mobile app that helps users discover and compare prices and offers across different markets.',
        'Price Hunter:A product management system, enabling admins to add, edit, and sync product data.',
        'Core Contributions:',
        'Developed scalable, mobile-first front-end features using Angular and Ionic.',
        'Integrated RESTful APIs and Firebase services for real-time data syncing.',
        'Focused on performance optimization and responsive design across devices.',
        'Worked closely with product managers and QA teams in an Agile environment.',
      ],
    },
  ]);

  selectedCompany = signal(this.companies()[0]);

  selectCompany(company: any) {
    this.selectedCompany.set(company);
  }
}
