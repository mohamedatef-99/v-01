import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  companies = signal([
    {
      id: 1,
      name: 'Tilde Technology',
      title: 'Software Developer ',
      company: '@ Tilde Technology',
      link: 'https://tildetech.ae/',
      date: 'Jan 2024 – Present',
      duties: [
        'Developed reusable UI components and services, adhering to DRY principles and ensuring consistency across the application.',
        'Collaborated with backend developers to integrate APIs, ensuring seamless data flow and efficient API consumption through RxJS and HttpClient.',
        'Leveraged Nx workspace for monorepo management and multi-project Angular architecture.',
        'Migrating legacy AngularJS applications to modern Angular 16+, ensuring smoother performance, improved maintainability, and adherence to best practices.',
        'Implemented a generic HTTP service across multiple projects, reducing redundant code and improving API handling consistency.',
        'Followed Agile methodologies and worked with cross-functional teams in sprints, actively contributing to stand-up meetings, code reviews, and retrospectives.',
      ],
    },
  ]);

  selectedCompany = signal(this.companies()[0]);

  selectCompany(company: any) {
    this.selectedCompany.set(company);
  }
}
