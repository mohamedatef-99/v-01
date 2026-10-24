import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('Portfolio navigation', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let page: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    page = fixture.nativeElement;
  });

  it('opens the contact menu, exposes links, and closes on Escape', () => {
    const toggle = page.querySelector<HTMLButtonElement>('#connect')!;
    const menu = page.querySelector<HTMLElement>('#connect-menu')!;
    expect(menu.hidden).toBeTrue();
    toggle.click();
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(menu.hidden).toBeFalse();
    expect(menu.querySelector('a[href^="mailto:"]')).not.toBeNull();
    document.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
    );
    fixture.detectChanges();
    expect(menu.hidden).toBeTrue();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });

  it('closes on an outside click', () => {
    page.querySelector<HTMLButtonElement>('#connect')!.click();
    fixture.detectChanges();
    document.body.click();
    fixture.detectChanges();
    expect(page.querySelector<HTMLElement>('#connect-menu')!.hidden).toBeTrue();
  });
});
