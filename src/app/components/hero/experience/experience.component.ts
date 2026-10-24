import { Component } from '@angular/core';
import { CONTACT } from '../../../portfolio/content';
import { usePortfolioMotion } from '../../../portfolio/motion';
@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  readonly contact = CONTACT;
  readonly companies = [
    {
      name: 'Sheen IT',
      fullName: 'Sheen Information Technology',
      title: 'Mid Software Developer',
      date: 'OCT 2024 — PRESENT',
      duties: [
        'Drive frontend delivery across production Angular applications for flight booking, airline distribution, and agency operations.',
        'Contribute to .NET backend tasks, feature development, troubleshooting, and reusable frontend components.',
        'Collaborate with frontend, backend, QA/QC, Product Owner, and Scrum roles through delivery, code reviews, and technical decisions.',
      ],
    },
    {
      name: 'Tilde Technology',
      fullName: 'Tilde Technology',
      title: 'Front-End Developer (Angular)',
      date: 'AUG 2023 — OCT 2024',
      duties: [
        'Developed Angular applications for e-commerce, product management, and internal business workflows.',
        'Built and maintained Ionic mobile experiences, reusable components, interface improvements, and critical fixes.',
        'Maintained legacy AngularJS applications and collaborated with designers and backend engineers across concurrent projects.',
      ],
    },
  ];
  constructor() {
    usePortfolioMotion(({ gsap }) => {
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils
          .toArray<HTMLElement>('.experience-entry')
          .forEach((element) =>
            gsap.from(element, {
              autoAlpha: 0,
              y: 35,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: { trigger: element, start: 'top 92%', once: true },
            }),
          );
      });
      return () => media.revert();
    });
  }
}
