import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('Portfolio application', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('renders the real portfolio and section navigation before motion loads', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;
    expect(
      page.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim(),
    ).toContain('MOHAMED');
    for (const id of [
      'top',
      'work',
      'projects',
      'about',
      'experience',
      'contact',
    ]) {
      expect(page.querySelector('#' + id))
        .withContext(id)
        .not.toBeNull();
    }
    expect(page.textContent).toContain('Fly WT');
    expect(page.textContent).toContain('Money Collector');
    expect(page.textContent).toContain('NDC Back Office');
    expect(page.textContent).toContain('Full-stack development.');
    expect(page.textContent).toContain('Mid Software Developer');
    expect(page.querySelectorAll('img[src=""]').length).toBe(0);
    expect(
      page.querySelector(
        'a[href="assets/resume/Mohamed_Atef_Full_Stack_CV.pdf"]',
      ),
    ).not.toBeNull();
  });
});
