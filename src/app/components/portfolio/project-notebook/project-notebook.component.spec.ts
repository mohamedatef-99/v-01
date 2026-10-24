import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectNotebookComponent } from './project-notebook.component';

describe('Project notebook', () => {
  let fixture: ComponentFixture<ProjectNotebookComponent>;
  let page: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectNotebookComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ProjectNotebookComponent);
    fixture.detectChanges();
    page = fixture.nativeElement;
  });

  it('switches the visible project and keeps one keyboard tab stop', () => {
    const tabs = Array.from(
      page.querySelectorAll<HTMLButtonElement>('[role="tab"]'),
    );
    tabs[1].click();
    fixture.detectChanges();
    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
    expect(tabs.filter((tab) => tab.tabIndex === 0).length).toBe(1);
    const panels = Array.from(
      page.querySelectorAll<HTMLElement>('[role="tabpanel"]'),
    );
    expect(panels.filter((panel) => !panel.hidden).length).toBe(1);
    expect(panels[1].textContent).toContain('Money Collector');
    expect(panels[0].hidden).toBeTrue();
  });

  it('supports keyboard wrapping and Home/End selection', () => {
    const tabs = Array.from(
      page.querySelectorAll<HTMLButtonElement>('[role="tab"]'),
    );
    tabs[0].dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }),
    );
    fixture.detectChanges();
    expect(tabs[tabs.length - 1].getAttribute('aria-selected')).toBe('true');
    tabs[tabs.length - 1].dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Home', bubbles: true }),
    );
    fixture.detectChanges();
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
    tabs[0].dispatchEvent(
      new KeyboardEvent('keydown', { key: 'End', bubbles: true }),
    );
    fixture.detectChanges();
    expect(tabs[tabs.length - 1].getAttribute('aria-selected')).toBe('true');
  });
});
