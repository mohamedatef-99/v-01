export const CONTACT = {
  email: 'mohammed.atef.saif@gmail.com',
  github: 'https://github.com/mohamedatef-99',
  linkedin: 'https://www.linkedin.com/in/mohamed-atef-/',
  whatsapp: 'https://wa.me/201114239411',
  resume: 'assets/resume/Mohamed_Atef_Full_Stack_CV.pdf',
} as const;

export const PROJECT_NOTES = [
  {
    id: 'ndc-back-office',
    title: 'NDC Back Office',
    category: 'IATA NDC / flight distribution & booking',
    headline: 'From the interface to the business behind it.',
    description:
      'An airline distribution and booking platform where I contributed to the Angular frontend and .NET 8 backend as part of the development team.',
    role: 'Frontend & backend contributor',
    stack: ['Angular', '.NET 8', 'ASP.NET Core', 'EF Core', 'MySQL', 'Redis'],
    details: [
      'Implemented assigned features and resolved defects within a Clean Architecture and CQRS/MediatR codebase.',
      'Worked on REST APIs, validation, and NDC workflows spanning offer search, revalidation, booking, hold, ticketing, voiding, and refunds.',
      'Added and maintained unit and integration tests for backend behavior.',
    ],
    keywords: ['ANGULAR + .NET', 'NDC WORKFLOWS', 'TESTED BEHAVIOR'],
    annotation: 'connect the interface to the whole journey.',
  },
  {
    id: 'money-collector',
    title: 'Money Collector',
    category: 'Real-time operations',
    headline: 'A moving operation. One clear picture.',
    description:
      'An agency management dashboard bringing balances, wallets, top-ups, and field agents into one responsive workspace.',
    role: 'Frontend delivery lead',
    stack: ['Angular 18', 'Tailwind CSS', 'SignalR', 'Google Maps API'],
    details: [
      'Live updates over SignalR keep the interface connected to the operation.',
      'Google Maps integration supports live field-agent tracking.',
      'Delivered reports, wallet workflows, OTP, activation codes, roles and permissions, and commenting modules.',
    ],
    keywords: ['LIVE UPDATES', 'FIELD OPERATIONS', 'ONE WORKSPACE'],
    annotation: 'keep the whole picture in view.',
  },
  {
    id: 'ndc-uplift',
    title: 'NDC Uplift',
    category: 'B2B travel / front-end rebuild',
    headline: 'A familiar product. A stronger foundation.',
    description:
      'A complete Angular front-end rebuild for Wonder Travel B2B, modernizing the interface and architecture while preserving the existing workflows.',
    role: 'Front-end rebuild',
    stack: ['Angular 16', 'TypeScript', 'Reusable UI components'],
    details: [
      'Rebuilt the front end from scratch with functional parity as a constraint.',
      'Introduced reusable interface patterns and a clearer component architecture.',
      'Migrated legacy AngularJS functionality to maintainable modern Angular components.',
    ],
    keywords: ['RETHINK', 'REBUILD', 'KEEP IT FAMILIAR'],
    annotation: 'better foundations, familiar journeys.',
  },
  {
    id: 'elzatoonah',
    title: 'ElZatoonah',
    category: 'Ionic / mobile price comparison',
    headline: 'A better comparison. A smoother mobile experience.',
    description:
      'A mobile price-comparison application where I contributed to feature development, critical bug fixes, and interface improvements.',
    role: 'Mobile frontend contributor',
    stack: ['Ionic', 'Mobile UI', 'Backend service integration'],
    details: [
      'Developed features and resolved critical issues in the Ionic mobile experience.',
      'Improved the interface around product requirements and existing backend services.',
      'Worked on maintainable mobile features as part of the development team.',
    ],
    keywords: ['COMPARE', 'REFINE', 'KEEP IT USABLE'],
    annotation: 'make everyday decisions a little easier.',
  },
  {
    id: 'price-hunter',
    title: 'Price Hunter',
    category: 'Ionic / product management',
    headline: 'A growing catalogue. Less friction.',
    description:
      'An Ionic product-management application built to support product creation, editing, synchronization, and administration.',
    role: 'End-to-end front-end development',
    stack: ['Ionic', 'Angular', 'Reusable UI components'],
    details: [
      'Designed the add, edit, and synchronization workflows.',
      'Built reusable components for a growing product catalogue.',
      'Designed reusable interface components for data-heavy product workflows.',
    ],
    keywords: ['ADD', 'EDIT', 'SYNC'],
    annotation: 'make the everyday work feel lighter.',
  },
] as const;
