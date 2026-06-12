import { Component, signal } from '@angular/core';
import { RevealDirective } from '../../../directives/reveal.directive';

interface FeaturedProject {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stack: string[];
  liveLink: string;
  image: string; // path under assets/projects/ — drop screenshots in later
}

interface MiniProject {
  id: number;
  title: string;
  description: string;
  stack: string[];
  githubLink: string;
  externalLink: string;
}

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent {
  featured = signal<FeaturedProject[]>([
    {
      id: 1,
      title: 'Fly WT',
      subtitle: 'Bilingual flight booking platform',
      description:
        'A full-scale, production flight booking platform built from scratch — flight search, seat selection, booking management, and an integrated local Egyptian payment gateway handling the complete transactional flow.',
      highlights: [
        'Full Arabic & English support with RTL layout switching',
        'End-to-end payment integration inside the Angular app',
        'CMS integration and SEO best practices',
      ],
      stack: ['Angular', 'TypeScript', 'Tailwind CSS', 'CMS', 'i18n/RTL'],
      liveLink: '',
      image: '',
    },
    {
      id: 2,
      title: 'Money Collector',
      subtitle: 'Real-time agency management dashboard',
      description:
        'A modern responsive dashboard managing agency balances, wallets, and top-ups for distributed field operations — with live agent tracking on Google Maps and instant updates over SignalR.',
      highlights: [
        'Real-time communication via SignalR',
        'Live agent tracking with Google Maps integration',
        'Dashboards, reports, wallets, OTP, roles & permissions',
      ],
      stack: ['Angular 18', 'Tailwind CSS', 'SignalR', 'Google Maps API'],
      liveLink: '',
      image: 'assets/projects/money-collector.png',
    },
    {
      id: 3,
      title: 'NDC Uplift',
      subtitle: 'Full front-end rebuild — B2B travel platform',
      description:
        'Rebuilt the entire NDC front-end from scratch in Angular 16 for Wonder Travel B2B — modernizing the UI/UX and architecture while keeping full functional parity with the legacy platform.',
      highlights: [
        'Significant technical-debt reduction and faster load times',
        'Modern Angular design-system patterns',
        'Full functional parity with the legacy system',
      ],
      stack: ['Angular 16', 'TypeScript', 'Nx', 'Design Systems'],
      liveLink: '',
      image: 'assets/projects/ndc-uplift.png',
    },
    {
      id: 4,
      title: 'Price Hunter',
      subtitle: 'Ionic product management app',
      description:
        'Designed and built from scratch: a scalable admin tool managing thousands of product records with add, edit, and sync functionality — engineered with a reusable component architecture that holds up under high data volumes.',
      highlights: [
        'Handles thousands of records without performance degradation',
        'Reusable component architecture',
        'Built and shipped end-to-end',
      ],
      stack: ['Ionic', 'Angular', 'REST APIs', 'Firebase'],
      liveLink: '',
      image: 'assets/projects/price-hunter.png',
    },
  ]);

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    img.parentElement?.classList.add('placeholder');
  }

  others = signal<MiniProject[]>([
    {
      id: 1,
      title: 'E-commerce Website',
      description:
        'Complete e-commerce platform with cart, checkout, and Google authentication with persistent sessions.',
      stack: ['Next.js', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/mohamedatef-99/Next-JS-Ecommerce',
      externalLink: 'https://nextjs-ecommerce-ma.netlify.app/',
    },
    {
      id: 2,
      title: 'Hospital System',
      description:
        'Hospital management system streamlining patient care and admin workflows, with reusable, maintainable components.',
      stack: ['Angular', 'Angular Material', 'Firebase'],
      githubLink: 'https://github.com/mohamedatef-99/Hospital-Management-System',
      externalLink: 'https://hospital-management-779ee.web.app/',
    },
    {
      id: 3,
      title: 'Golds Gym',
      description:
        'Fitness app for exploring exercises with detailed info and instructional videos, powered by RapidAPI.',
      stack: ['React', 'Tailwind CSS', 'RapidAPI'],
      githubLink: 'https://github.com/mohamedatef-99/Golds-Gym-using-React',
      externalLink: 'https://mt-goldgym.netlify.app/',
    },
  ]);
}
