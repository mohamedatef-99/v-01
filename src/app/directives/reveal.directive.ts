import {
  Directive,
  ElementRef,
  Renderer2,
  afterNextRender,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective {
  @Input() revealDelay = 0;

  constructor(el: ElementRef, renderer: Renderer2) {
    afterNextRender(() => {
      const node = el.nativeElement as HTMLElement;
      renderer.addClass(node, 'reveal');
      if (this.revealDelay) {
        node.style.transitionDelay = `${this.revealDelay}ms`;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              renderer.addClass(node, 'visible');
              observer.unobserve(node);
            }
          });
        },
        { threshold: 0.12 }
      );
      observer.observe(node);
    });
  }
}
