import {
  AfterRenderRef,
  Component,
  ElementRef,
  Injector,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import type { gsap as Gsap } from 'gsap';
import { PROJECT_NOTES } from '../../../portfolio/content';
import { usePortfolioMotion } from '../../../portfolio/motion';

@Component({
  selector: 'app-project-notebook',
  standalone: true,
  templateUrl: './project-notebook.component.html',
  styleUrl: './project-notebook.component.css',
})
export class ProjectNotebookComponent {
  readonly projects = PROJECT_NOTES;
  readonly selected = signal(0);
  private readonly element =
    inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private motion?: typeof Gsap;
  private pageTurn?: gsap.core.Tween;
  private readonly injector = inject(Injector);
  private nextPageRender?: AfterRenderRef;
  private refresh?: () => void;

  constructor() {
    usePortfolioMotion(({ gsap, ScrollTrigger }) => {
      this.motion = gsap;
      this.refresh = () => ScrollTrigger.refresh();
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.notebook-desk', {
          y: 60,
          rotation: 2,
          autoAlpha: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.notebook-desk',
            start: 'top 91%',
            once: true,
          },
        });
        return () => {
          this.pageTurn?.revert();
          this.pageTurn = undefined;
        };
      });
      return () => {
        this.nextPageRender?.destroy();
        this.pageTurn?.revert();
        media.revert();
      };
    });
  }

  selectProject(index: number): void {
    if (index === this.selected()) return;
    this.nextPageRender?.destroy();
    this.pageTurn?.revert();
    this.selected.set(index);
    this.nextPageRender = afterNextRender(
      () => {
        if (
          this.motion &&
          !window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
          const panel = this.element.querySelector('#project-page-' + index);
          this.pageTurn = this.motion.fromTo(
            panel,
            { rotateY: -7, x: 12 },
            {
              rotateY: 0,
              x: 0,
              duration: 0.55,
              ease: 'power2.out',
              clearProps: 'transform',
            },
          );
        }
        this.refresh?.();
      },
      { injector: this.injector },
    );
  }

  onTabKey(event: KeyboardEvent, index: number): void {
    const last = this.projects.length - 1;
    let next = index;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight')
      next = (index + 1) % this.projects.length;
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft')
      next = (index + last) % this.projects.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = last;
    else return;
    event.preventDefault();
    this.selectProject(next);
    this.element
      .querySelector<HTMLButtonElement>('#project-tab-' + next)
      ?.focus();
  }
}
