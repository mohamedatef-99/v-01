
import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]',
  standalone: true
})
export class ScrollDirective {

  private lastScrollTop = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      // Scroll down
      this.renderer.addClass(this.el.nativeElement, 'hidden');
    } else {
      // Scroll up
      this.renderer.removeClass(this.el.nativeElement, 'hidden');
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

}