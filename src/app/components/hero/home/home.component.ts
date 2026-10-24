import { Component } from '@angular/core';
import { usePortfolioMotion } from '../../../portfolio/motion';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor() {
    usePortfolioMotion(({ gsap }) => {
      const media = gsap.matchMedia();
      media.add(
        {
          desktop: '(min-width: 900px)',
          motion: '(prefers-reduced-motion: no-preference)',
        },
        (context) => {
          if (!context.conditions?.['motion']) return;
          gsap
            .timeline({ defaults: { ease: 'power3.out', duration: 1 } })
            .from('.name-line > span', { yPercent: 112, stagger: 0.11 }, 0.08)
            .from(
              '.portrait-float',
              { y: 90, rotation: 6, autoAlpha: 0, duration: 1.15 },
              0.2,
            )
            .from(
              '.red-print',
              { scale: 0.7, autoAlpha: 0, rotation: -24 },
              0.15,
            )
            .from(
              '.hero-scribble',
              { autoAlpha: 0, y: 12, duration: 0.55 },
              0.7,
            )
            .from('.hero-intro', { autoAlpha: 0, y: 20, duration: 0.6 }, 0.5)
            .from(
              '.project-polaroid',
              { autoAlpha: 0, y: 55, rotation: -15, duration: 0.9 },
              0.6,
            )
            .from(
              '.hero-flight',
              { autoAlpha: 0, x: 60, y: 30, duration: 0.9 },
              0.8,
            )
            .from(
              '.care-stamp',
              {
                scale: 1.5,
                autoAlpha: 0,
                rotation: 32,
                duration: 0.3,
                ease: 'power2.in',
              },
              1,
            )
            .from(
              '.maker-ticket, .hero-side-note',
              { autoAlpha: 0, y: 15, duration: 0.6, stagger: 0.1 },
              1,
            );
          if (context.conditions?.['desktop']) {
            const trigger = {
              trigger: '.hero',
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            };
            gsap.to('.portrait-cutout', {
              y: -65,
              rotation: -3,
              ease: 'none',
              scrollTrigger: trigger,
            });
            gsap.to('.project-polaroid', {
              y: -55,
              rotation: 1,
              ease: 'none',
              scrollTrigger: trigger,
            });
            gsap.to('.hero-flight', {
              x: 50,
              y: -110,
              rotation: -5,
              ease: 'none',
              scrollTrigger: trigger,
            });
          }
        },
      );
      return () => media.revert();
    });
  }
}
