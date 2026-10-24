import { Component } from '@angular/core';
import { CONTACT } from '../../../portfolio/content';
import { usePortfolioMotion } from '../../../portfolio/motion';
@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  readonly contact = CONTACT;
  readonly skillGroups = [
    {
      label: 'FRONTEND',
      skills: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'RxJS',
        'Angular Signals',
        'HTML5 / CSS3',
        'Tailwind CSS',
        'Bootstrap',
        'Ionic',
        'Responsive Design',
        'RTL / i18n',
      ],
    },
    {
      label: 'BACKEND',
      skills: [
        'C#',
        '.NET 8',
        'ASP.NET Core',
        'REST APIs',
        'Entity Framework Core',
        'LINQ',
      ],
    },
    {
      label: 'ARCHITECTURE & DATA',
      skills: [
        'Clean Architecture',
        'CQRS',
        'MediatR',
        'MySQL',
        'Redis',
        'FluentValidation',
      ],
    },
    {
      label: 'ENGINEERING WORKFLOW',
      skills: [
        'Unit & integration tests',
        'Specification-driven workflows',
        'Claude Code',
        'Codex',
        'Cursor',
      ],
    },
  ];
  constructor() {
    usePortfolioMotion(({ gsap }) => {
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.about-title', {
          y: 40,
          autoAlpha: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.about-title',
            start: 'top 92%',
            once: true,
          },
        });
        gsap.fromTo(
          '.open-book',
          { rotateX: 8, rotateZ: -2, y: 35 },
          {
            rotateX: 0,
            rotateZ: 0.5,
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: '.book-scene',
              start: 'top 95%',
              end: 'center 55%',
              scrub: 1,
            },
          },
        );
      });
      return () => media.revert();
    });
  }
}
