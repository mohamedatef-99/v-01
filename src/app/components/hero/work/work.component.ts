import { Component } from '@angular/core';
import { FlightStoryComponent } from '../../portfolio/flight-story/flight-story.component';
import { ProjectNotebookComponent } from '../../portfolio/project-notebook/project-notebook.component';
@Component({
  selector: 'app-work',
  standalone: true,
  imports: [FlightStoryComponent, ProjectNotebookComponent],
  template: '<app-flight-story /><app-project-notebook />',
  styles: ':host { display: block; }',
})
export class WorkComponent {}
