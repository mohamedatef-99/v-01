import {
  Component,
  ElementRef,
  NgZone,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import type { gsap as Gsap } from 'gsap';
import { usePortfolioMotion } from '../../../portfolio/motion';

@Component({
  selector: 'app-flight-story',
  standalone: true,
  templateUrl: './flight-story.component.html',
  styleUrl: './flight-story.component.css',
})
export class FlightStoryComponent {
  @ViewChild('screenshotDialog') private dialog!: ElementRef<HTMLDialogElement>;
  readonly phaseIndex = signal(0);
  readonly playing = signal(false);
  readonly screenshotLoaded = signal(false);
  readonly phases = [
    {
      title: 'Every journey starts somewhere.',
      description:
        'A bilingual flight-booking platform. From finding a flight to completing the booking, one connected experience.',
    },
    {
      title: 'A booking flow that flows.',
      description:
        'Flight search, seat selection, and booking management. The moving parts, brought together in one front end.',
    },
    {
      title: 'The details make the difference.',
      description:
        'Payment integration, Arabic and English, and layouts that work in both directions. Built into the complete journey.',
    },
  ];
  private readonly host =
    inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly zone = inject(NgZone);
  private gsap?: typeof Gsap;
  private timeline?: gsap.core.Timeline;
  private scrollTween?: gsap.core.Tween;

  constructor() {
    usePortfolioMotion(({ gsap }) => {
      this.gsap = gsap;
      const media = gsap.matchMedia();
      media.add(
        {
          desktop: '(min-width: 900px) and (min-height: 650px)',
          reduce: '(prefers-reduced-motion: reduce)',
          all: 'all',
        },
        (context) => {
          const desktop = context.conditions?.['desktop'];
          const reduce = context.conditions?.['reduce'];
          this.updatePhase(0);
          if (desktop && !reduce) {
            gsap.set('.product-sheet', {
              x: 140,
              y: 100,
              rotation: 10,
              scale: 0.82,
            });
            gsap.set('.backing-sheet', { autoAlpha: 0.3, rotation: 14, y: 60 });
            gsap.set('.boarding-note', {
              autoAlpha: 0,
              x: 160,
              y: 85,
              rotation: 16,
            });
            gsap.set('.language-note', { autoAlpha: 0, y: 30, rotation: -18 });
            gsap.set('.build-note', { autoAlpha: 0, y: 80, rotation: -6 });
            gsap.set('.payment-stamp', {
              autoAlpha: 0,
              scale: 1.7,
              rotation: 32,
            });
            gsap.set('.search-note', { autoAlpha: 0, y: 30 });
            gsap.set('.story-plane', { x: 80, y: 50, rotation: 1 });
            this.timeline = gsap.timeline({
              scrollTrigger: {
                trigger: '.work-stage',
                start: 'top top',
                end: () => '+=' + Math.round(innerHeight * 3.6),
                pin: true,
                scrub: 0.8,
                invalidateOnRefresh: true,
                onUpdate: (self) =>
                  this.updatePhase(
                    self.progress < 0.32 ? 0 : self.progress < 0.68 ? 1 : 2,
                  ),
              },
            });
            this.timeline
              .to(
                '.product-sheet',
                {
                  x: 0,
                  y: 0,
                  rotation: -5,
                  scale: 1,
                  duration: 1.05,
                  ease: 'power2.out',
                },
                0,
              )
              .to(
                '.backing-sheet',
                { autoAlpha: 1, y: 0, rotation: 5, duration: 1 },
                0,
              )
              .to('.search-note', { autoAlpha: 1, y: 0, duration: 0.45 }, 0.25)
              .to(
                '.route-ink',
                { strokeDashoffset: 0, duration: 2.6, ease: 'none' },
                0.2,
              )
              .to(
                '.story-plane',
                {
                  x: -60,
                  y: -20,
                  rotation: -9,
                  duration: 1.1,
                  ease: 'power1.inOut',
                },
                0,
              )
              .to(
                '.boarding-note',
                {
                  autoAlpha: 1,
                  x: 0,
                  y: 0,
                  rotation: 5,
                  duration: 0.8,
                  ease: 'power2.out',
                },
                1.05,
              )
              .to(
                '.product-sheet',
                {
                  y: -35,
                  rotation: 1,
                  scale: 1.015,
                  duration: 0.95,
                  ease: 'power1.inOut',
                },
                1.1,
              )
              .to('.search-note', { autoAlpha: 0, y: -20, duration: 0.4 }, 1.25)
              .to(
                '.story-plane',
                {
                  x: 220,
                  y: -140,
                  autoAlpha: 0,
                  duration: 0.95,
                  ease: 'power2.in',
                },
                1.1,
              )
              .to(
                '.language-note',
                { autoAlpha: 1, y: 0, rotation: -8, duration: 0.6 },
                1.7,
              )
              .to(
                '.build-note',
                {
                  autoAlpha: 1,
                  y: 0,
                  rotation: -2,
                  duration: 0.75,
                  ease: 'power2.out',
                },
                2.15,
              )
              .to(
                '.product-sheet',
                { x: -25, y: -55, rotation: -2, scale: 0.94, duration: 0.8 },
                2.2,
              )
              .to(
                '.boarding-note',
                { x: -15, y: 12, rotation: 2, duration: 0.8 },
                2.2,
              )
              .to(
                '.payment-stamp',
                {
                  autoAlpha: 1,
                  scale: 1,
                  rotation: 14,
                  duration: 0.3,
                  ease: 'power2.in',
                },
                2.8,
              )
              .to({}, { duration: 0.5 });
          } else if (!reduce) {
            gsap.utils
              .toArray<HTMLElement>(
                '.project-intro, .product-sheet, .boarding-note, .language-note, .build-note, .payment-stamp',
              )
              .forEach((element) =>
                gsap.from(element, {
                  autoAlpha: 0,
                  y: 28,
                  duration: 0.7,
                  ease: 'power2.out',
                  scrollTrigger: {
                    trigger: element,
                    start: 'top 95%',
                    once: true,
                  },
                }),
              );
          }
          return () => {
            this.stopPlayback();
            this.timeline = undefined;
          };
        },
      );
      const interrupt = () => this.stopPlayback();
      const interruptKeys = (event: KeyboardEvent) => {
        if (
          [
            'ArrowDown',
            'ArrowUp',
            'PageDown',
            'PageUp',
            'Home',
            'End',
            ' ',
            'Escape',
            'Tab',
          ].includes(event.key)
        )
          interrupt();
      };
      window.addEventListener('wheel', interrupt, { passive: true });
      window.addEventListener('touchstart', interrupt, { passive: true });
      document.addEventListener('keydown', interruptKeys);
      return () => {
        this.stopPlayback();
        media.revert();
        window.removeEventListener('wheel', interrupt);
        window.removeEventListener('touchstart', interrupt);
        document.removeEventListener('keydown', interruptKeys);
      };
    });
  }

  jumpTo(index: number): void {
    this.stopPlayback();
    const trigger = this.timeline?.scrollTrigger;
    if (trigger) {
      const progress = [0.1, 0.47, 0.94][index];
      this.animateScroll(
        trigger.start + (trigger.end - trigger.start) * progress,
        1.2,
      );
    } else {
      const target = ['.product-sheet', '.boarding-note', '.build-note'][index];
      this.host
        .querySelector(target)
        ?.scrollIntoView({
          behavior: this.reducedMotion() ? 'instant' : 'smooth',
          block: 'center',
        });
      this.updatePhase(index);
    }
  }

  togglePlayback(): void {
    if (this.playing()) {
      this.stopPlayback();
      return;
    }
    const trigger = this.timeline?.scrollTrigger;
    if (!trigger) return;
    this.stopPlayback();
    this.playing.set(true);
    window.scrollTo({ top: trigger.start, behavior: 'instant' });
    this.animateScroll(trigger.end, 13);
  }

  openScreenshot(): void {
    this.stopPlayback();
    this.screenshotLoaded.set(true);
    this.dialog.nativeElement.showModal();
  }
  closeScreenshot(): void {
    this.dialog.nativeElement.close();
  }

  dismissBackdrop(event: MouseEvent): void {
    if (event.target !== this.dialog.nativeElement) return;
    const rect = this.dialog.nativeElement.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      this.closeScreenshot();
  }

  private updatePhase(index: number): void {
    if (this.phaseIndex() !== index)
      this.zone.run(() => this.phaseIndex.set(index));
  }

  private stopPlayback(): void {
    this.scrollTween?.kill();
    this.scrollTween = undefined;
    if (this.playing()) this.zone.run(() => this.playing.set(false));
  }

  private animateScroll(y: number, duration: number): void {
    if (!this.gsap) return;
    this.zone.runOutsideAngular(() => {
      const proxy = { y: window.scrollY };
      this.scrollTween = this.gsap!.to(proxy, {
        y,
        duration: this.reducedMotion() ? 0 : duration,
        ease: 'power2.inOut',
        onUpdate: () => window.scrollTo({ top: proxy.y, behavior: 'instant' }),
        onComplete: () => {
          this.scrollTween = undefined;
          this.zone.run(() => this.playing.set(false));
        },
      });
    });
  }

  private reducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
