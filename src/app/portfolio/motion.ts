import {
  DestroyRef,
  ElementRef,
  NgZone,
  afterNextRender,
  inject,
} from '@angular/core';
import type { gsap as Gsap } from 'gsap';
import type { ScrollTrigger as ScrollTriggerType } from 'gsap/ScrollTrigger';

export interface MotionScope {
  gsap: typeof Gsap;
  ScrollTrigger: typeof ScrollTriggerType;
  host: HTMLElement;
}

let motionModules: Promise<Omit<MotionScope, 'host'>> | undefined;

function loadMotion(): Promise<Omit<MotionScope, 'host'>> {
  return (motionModules ??= Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
  ]).then(([{ gsap }, { ScrollTrigger }]) => {
    gsap.registerPlugin(ScrollTrigger);
    return { gsap, ScrollTrigger };
  }));
}

/** Lazy browser-only motion, with selectors and teardown scoped to the component. */
export function usePortfolioMotion(
  setup: (scope: MotionScope) => void | (() => void),
): void {
  const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  const zone = inject(NgZone);
  const destroyRef = inject(DestroyRef);
  let disposed = false;
  let context: gsap.Context | undefined;
  let cleanup: void | (() => void);

  destroyRef.onDestroy(() => {
    disposed = true;
    cleanup?.();
    context?.revert();
  });

  afterNextRender(() => {
    zone.runOutsideAngular(async () => {
      try {
        const { gsap, ScrollTrigger } = await loadMotion();
        if (disposed) return;
        context = gsap.context(() => {}, host);
        context.add(() => {
          cleanup = setup({ gsap, ScrollTrigger, host });
        });
        const refresh = () => {
          if (!disposed) ScrollTrigger.refresh();
        };
        document.fonts.ready.then(refresh);
        Promise.all(
          Array.from(host.querySelectorAll('img'))
            .filter((image) => image.loading !== 'lazy')
            .map((image) => image.decode().catch(() => {})),
        ).then(refresh);
      } catch (error) {
        context?.revert();
        // The page is already rendered and usable if motion cannot load.
        console.warn(
          'Portfolio motion is unavailable; displaying the static layout.',
          error,
        );
      }
    });
  });
}
