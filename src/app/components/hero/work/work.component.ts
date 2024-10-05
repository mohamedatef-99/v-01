import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent {
  projects = signal([
    {
      id: 1,
      title: 'E-commerce Website',
      description:
        'Built a complete e-commerce platform allowing users to browse, add products to carts, and proceed to checkout. Implemented a secure authentication system allowing users to log in with Google credentials and maintain authenticated sessions.',
      stack: ['Next Js', 'Node Js', 'Express Js', 'MongoDB'],
      githubLink: 'https://github.com/mohamedatef-99/Next-JS-Ecommerce',
      externalLink: 'https://nextjs-ecommerce-ma.netlify.app/',
    },
    {
      id: 2,
      title: 'Golds Gym',
      description:
        'Golds Gym is a React-based web application designed to assist fitness enthusiasts in exploring various exercises, accessing detailed information about them, and viewing associated instructional videos.',
      stack: ['React', 'Tailwaind', 'RapidApi'],
      githubLink: 'https://github.com/mohamedatef-99/Golds-Gym-using-React',
      externalLink: 'https://mt-goldgym.netlify.app/',
    },
    {
      id: 3,
      title: 'My Store',
      description:
        'MyStore is an Angular-based e-commerce application integrated with APIs to provide a user-friendly interface for browsing products, viewing product details, managing a shopping cart, and incorporating a form for data insertion.',
      stack: ['Angular', 'Bootstrap'],
      githubLink: 'https://github.com/mohamedatef-99/MyStore-app-using-angular',
      externalLink:
        'https://mohamedatef-99.github.io/MyStore-app-using-angular/',
    },
    {
      id: 4,
      title: 'Grill Restaurant',
      description:
        'Creating restaurant website using HTML, CSS and JavaScript. the website has some sections like About us, Menu, Upcoming events and Form for reservation. Moreover the website has some features like a slider, auto slider and it has a scroll up button.',
      stack: ['HTML', 'CSS', 'Javascript'],
      githubLink: 'https://github.com/mohamedatef-99/Restaurant-Website',
      externalLink: 'https://mohamedatef-99.github.io/Restaurant-Website/',
    },
    {
      id: 5,
      title: 'Hospital System',
      description:
        'Developed to streamline patient care and improve administrative processes using Angular, Angular Material, and Firebase. Optimizing code reusability and maintainability.',
      stack: ['Angular', 'Angular Material', 'Firebase'],
      githubLink: 'https://github.com/mohamedatef-99/Hospital-Management-System',
      externalLink: 'https://hospital-management-779ee.web.app/',
    },
    {
      id: 6,
      title: 'Multi Step Form',
      description:
        'It is a form has four steps info, plan, add-ons and summary each step include validations and it developed by using Angular.',
      stack: ['Angular', 'CSS',],
      githubLink: 'https://github.com/mohamedatef-99/Multi-Step-Form',
      externalLink: 'https://multistepformangular.netlify.app/',
    },
  ]);
}
