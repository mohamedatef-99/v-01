import { Component, DestroyRef, inject, signal } from '@angular/core';
import { CONTACT } from '../../../portfolio/content';
import { usePortfolioMotion } from '../../../portfolio/motion';
@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  readonly contact = CONTACT;
  readonly year = new Date().getFullYear();
  readonly copyStatus = signal('');
  private timer?: ReturnType<typeof setTimeout>;
  constructor() {
    inject(DestroyRef).onDestroy(() => {
      if (this.timer) clearTimeout(this.timer);
    });
    usePortfolioMotion(({ gsap }) => {
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.contact-title', {
          y: 40,
          autoAlpha: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-title',
            start: 'top 93%',
            once: true,
          },
        });
        gsap.from('.contact-note', {
          rotation: 3,
          y: 30,
          autoAlpha: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.contact-note',
            start: 'top 94%',
            once: true,
          },
        });
      });
      return () => media.revert();
    });
  }
  async copyEmail(): Promise<void> {
    if (this.timer) clearTimeout(this.timer);
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(this.contact.email);
      this.copyStatus.set('Email copied.');
    } catch {
      this.copyStatus.set('Select the email above to copy it.');
    }
    this.timer = setTimeout(() => this.copyStatus.set(''), 5000);
  }
}
