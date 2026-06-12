import { Component, signal } from '@angular/core';
import { RevealDirective } from '../../../directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  skillGroups = signal([
    {
      label: 'Core',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Ionic'],
    },
    {
      label: 'Also work with',
      skills: ['React', 'Next.js', 'Bootstrap', 'Material UI'],
    },
    {
      label: 'Back-end',
      skills: ['C# / .NET Core', 'REST APIs', 'SQL', 'Node.js', 'MongoDB'],
    },
    {
      label: 'Other',
      skills: ['SignalR', 'Google Maps API', 'RTL / i18n', 'SEO', 'Nx', 'Git', 'Agile'],
    },
  ]);
}
