// ═══════════════════════════════════════════════════════════════════
//  ✏️  THIS IS THE ONLY FILE YOU NEED TO EDIT.
//  Change the text between the quotes, save, and the page updates.
//  Images go in the /public folder (photo.jpg, cv.pdf, projects/xxx.png)
// ═══════════════════════════════════════════════════════════════════

export interface Project {
  title: string;
  description: string; // 1–2 sentences: what it does + what YOU built
  tags: string[]; // technologies (also used for the filter buttons)
  image?: string; // e.g. '/projects/shop.png'  (optional, 16:10 screenshot looks best)
  live?: string; // demo link
  repo?: string; // GitHub link
  featured?: boolean; // true = shown with a "Featured" badge
}
export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
}
export interface Education {
  period: string;
  degree: string;
  field: string;
  school: string;
  location: string;
}

export const profile = {
  name: "Ould Belaid Oussama",
  role: "Software engineer",
  // Recruiters look at this first: say clearly that you want a PFE and when.
  availability: {
    open: true,
    text: "Available for a PFE internship · January 2027 · 4–6 months",
  },
  headline:
    "Software Engineer delivering reliable software, from code to cloud.",
  intro:
    "Final-year engineering student. I enjoy turning real problems into fast and clean products .",
  about: [
    "I’m a final-year engineering student in Casablanca, passionate about full stack development.",
    "I’ve built and deployed several projects end to end: design, API, database and Docker deployment. I learn fast, write readable code and like working in a team.",
    "I’m looking for a PFE where I can contribute to a real product and grow with experienced developers.",
  ],
  location: "Casablanca, Morocco",
  email: "ousama.o.belaid@gmail.com",
  photo: "/photo.jpg", // put YOUR photo at public/photo.jpg (portrait)
  cv: "/cv.pdf", // put your CV at public/cv.pdf  ('' hides the button)
  socials: [
    { label: "GitHub", href: "https://github.com/OBUSSAMA" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/oussama-o-belaid/",
    },
  ],
  // Optional working contact form: create a free form at formspree.io and paste its URL here.
  // Leave '' to show only an email button.
  formEndpoint: "",
  // Quick numbers under the hero (delete lines you don't want)
  stats: [
    { value: "6+", label: "projects shipped" },
    { value: "2", label: "internships" },
    { value: "3 yrs", label: "coding" },
  ],
};

export const skills = [
  {
    group: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Spring Data",
      "Spring Security",
      "Spring Batch",
      "JPA / Hibernate",
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "LINQ",
    ],
  },
  { group: "Frontend", items: ["HTML", "CSS", "TypeScript", "ReactJS"] },
  {
    group: "API & Architecture",
    items: [
      "REST / OpenAPI",
      "Microservices",
      "Clean Architecture",
      "OAuth2 / JWT",
      "Kafka",
      "RabbitMQ",
    ],
  },
  {
    group: "Databases",
    items: ["Oracle", "SQL Server", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    group: "Testing & Quality",
    items: ["JUnit", "Mockito", "xUnit", "Moq", "Jest", "SonarQube"],
  },
  {
    group: "Cloud & DevOps",
    items: ["Docker", "Kubernetes", "GitLab CI/CD", "Azure DevOps"],
  },
  { group: "Systems", items: ["Linux", "Unix"] },
  {
    group: "Tools & Methods",
    items: ["Agile / Scrum", "Git / GitLab", "JIRA", "Confluence"],
  },
];

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "Booking platform with payments and an admin dashboard. I built the API, the database schema and the React front end.",
    tags: ["React", "Node.js", "PostgreSQL"],
    live: "https://example.com",
    repo: "https://github.com/your-username/project-one",
    featured: true,
  },
  {
    title: "Project Two",
    description:
      "Real-time analytics dashboard that turns raw events into live charts. Deployed with Docker.",
    tags: ["Next.js", "Redis", "Docker"],
    repo: "https://github.com/your-username/project-two",
  },
  {
    title: "Project Three",
    description:
      "Multi-language e-commerce store with inventory sync and Stripe checkout.",
    tags: ["Laravel", "MySQL", "Stripe"],
    live: "https://example.com",
  },
];

export const experience: Experience[] = [
  {
    period: "Aug 2025 – Present",
    role: "Full Stack Developer (MERN / MEAN)",
    company: "Freelance",
    location: "Casablanca",
    summary: "Independent developer delivering web applications for clients.",
    highlights: [
      "Built full-stack applications with React, Angular, Node.js and MongoDB, adapting quickly to client feedback.",
      "Set up testing and deployment workflows with Docker and cloud integration.",
      "Built side projects in Java and .NET and integrated LLM APIs into web application features.",
    ],
  },
  {
    period: "May – Jul 2025",
    role: "Full Stack Developer (Laravel / PHP)",
    company: "S4U Services For You",
    location: "Rabat",
    summary:
      "Internal platform to manage client relations and event scheduling.",
    highlights: [
      "Built the Laravel backend for client profiles and event lifecycles, with role-based access control (RBAC).",
      "Designed the relational database schema linking clients, events and users for fast data retrieval.",
      "Delivered a responsive interface for scheduling, client history and real-time reports.",
      "Wrote PHPUnit tests for core CRUD operations and took part in production deployments.",
    ],
  },
  {
    period: "Jul 2023 – Jan 2024",
    role: "Full Stack Developer (MERN)",
    company: "ARK-X Talent Factory",
    location: "Casablanca",
    summary: "Auction e-commerce platform, built in an on-site Agile team.",
    highlights: [
      "Built the React.js interface for real-time auction features.",
      "Developed RESTful APIs with Node.js and Express.js.",
      "Designed MongoDB schemas for scalable product listings and user data.",
    ],
  },
  {
    period: "Jan – May 2016",
    role: "Mobile Developer Intern (React Native)",
    company: "SubliMaroc",
    location: "Casablanca",
    summary: "Cross-platform mobile app, published for iOS and Android.",
    highlights: [
      "Built reusable React Native components for iOS and Android.",
      "Improved screen load times on low-end devices with local caching.",
      "Worked with QA and backend teams to fix bugs and prepare App Store and Google Play builds.",
    ],
  },
];

export const education: Education[] = [
  {
    period: "Expected 2027",
    degree:
      "Ingénieur d’état en Sciences de Données et Développement Informatique",
    field: "Option Génie Logiciel",
    school:
      "École Supérieure en Ingénierie de l’Information et Télécommunication et Management",
    location: "Casablanca, Maroc",
  },
  {
    period: "2016",
    degree: "Licence professionnelle universitaire",
    field: "Option Développement Mobile",
    school: "Université Hassan II",
    location: "Casablanca, Maroc",
  },
  {
    period: "2015",
    degree: "Diplôme de Technicien Spécialisé",
    field: "Développement Informatique",
    school: "Institut Spécialisé de Technologie Appliquée NTIC 1",
    location: "Casablanca, Maroc",
  },
];
