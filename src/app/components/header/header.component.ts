import {
  Component,
  ElementRef,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { CONTACT } from '../../portfolio/content';
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  readonly contact = CONTACT;
  readonly menuOpen = signal(false);
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  @HostListener('document:click', ['$event'])
  closeOutside(event: MouseEvent): void {
    if (
      !this.element.nativeElement
        .querySelector('.connect-wrap')
        ?.contains(event.target as Node)
    )
      this.menuOpen.set(false);
  }
  @HostListener('document:focusin', ['$event'])
  closeOnFocusOutside(event: FocusEvent): void {
    if (
      !this.element.nativeElement
        .querySelector('.connect-wrap')
        ?.contains(event.target as Node)
    )
      this.menuOpen.set(false);
  }
  @HostListener('document:keydown.escape')
  closeMenu(): void {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
      this.element.nativeElement
        .querySelector<HTMLButtonElement>('#connect')
        ?.focus();
    }
  }
}
