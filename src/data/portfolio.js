// ---------------------------------------------------------------------------
// Single source of truth for every piece of content on the site.
// Components only read from this file — edit here, the UI follows.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Md. Mehraz Howlader',
  shortName: 'Mehraz',
  role: 'Aspiring Software Engineer',
  photo: '/profile.jpg',
  coverPhoto: '/useascover.jpeg',
  sidePhoto: '/sideprofile.jpg',
  initials: 'MH',
  headline: ['Building Software', 'That Solves Real Problems'],
  tagline:
    'Computer Science & Engineering student at United International University, focused on full-stack and backend development, software engineering practice and AI-enabled applications.',
  location: 'Dhaka, Bangladesh',
  availability: 'Open to internships & collaboration',
  // Put your CV at `public/resume.pdf` — the Resume section links to it.
  resumeUrl: '/resume.pdf',
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const links = {
  github: 'https://github.com/mehrazhowlader',
  linkedin: 'https://www.linkedin.com/in/md-mehraz-howlader/',
}

export const about = {
  eyebrow: 'About Me',
  title: 'A student developer learning by building',
  paragraphs: [
    'I am an undergraduate Computer Science & Engineering student at United International University, expected to graduate in 2027. Most of what I know comes from building things end to end — designing the requirements, drawing the interface, writing the backend and wiring the database underneath.',
    'My interests sit across full-stack development, backend engineering, software engineering practice and web technologies, with a growing focus on AI-enabled software. I enjoy the part of a project where a messy real-world process has to be turned into a clear system that people can actually use.',
    'Alongside coursework I serve as an Undergraduate Assistant for the Database Management Systems Laboratory, which keeps me close to fundamentals and to explaining them clearly.',
  ],
  highlights: [
    'Full-Stack Development',
    'Backend Development',
    'Software Engineering',
    'Web Technologies',
    'AI-enabled Software',
  ],
}

// Icon keys map to the inline SVGs in `src/components/Icons.jsx`.
export const skillGroups = [
  {
    icon: 'code',
    title: 'Programming',
    description:
      'Core languages I write day to day, from systems coursework through to scripting and application logic.',
    items: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'PHP'],
  },
  {
    icon: 'layout',
    title: 'Frontend',
    description:
      'Turning interface designs into responsive, accessible pages and component-driven React applications.',
    items: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    icon: 'server',
    title: 'Backend',
    description:
      'Building the routes, business logic and services that sit behind an interface and keep data honest.',
    items: ['Node.js', 'Express.js', 'PHP'],
  },
  {
    icon: 'database',
    title: 'Database',
    description:
      'Designing schemas, writing queries and modelling relational and document data for real applications.',
    items: ['MySQL', 'MongoDB'],
  },
  {
    icon: 'tools',
    title: 'Tools',
    description:
      'Version control, collaboration and the design tooling I use to plan an interface before writing code.',
    items: ['Git', 'GitHub', 'Figma'],
  },
  {
    icon: 'compass',
    title: 'Practice',
    description:
      'How I approach a build: system analysis, requirement writing, and interface design before implementation.',
    items: ['Software Engineering', 'UI/UX'],
  },
]

export const projects = [
  {
    name: 'ArchAxis',
    kicker: 'AI-Enhanced Platform',
    summary:
      'A construction project management platform enhanced with AI-driven functionality, built to coordinate the people, phases and paperwork of a construction project in one place.',
    contributions: [
      'System analysis and software requirements specification',
      'UI/UX design in Figma before implementation',
      'Role-based dashboards for the different project stakeholders',
      'AI-enhanced functionality layered over the management workflow',
    ],
    tech: ['System Analysis', 'Software Requirements', 'UI/UX', 'Figma'],
    award: 'Champion — UIU CSE Project Showcase',
  },
  {
    name: 'Aquafonic',
    kicker: 'IoT & Automation',
    summary:
      'An IoT-based smart automated farming and aquaponics system that monitors its own environment and reacts without manual intervention.',
    contributions: [
      'ESP32-based controller for the automation logic',
      'Sensor integration for continuous environment readings',
      'Automated monitoring of the aquaponics cycle',
    ],
    tech: ['ESP32', 'Sensors', 'Automated Monitoring', 'IoT'],
    award: '3rd Runner-Up — UIU CSE Project Showcase',
  },
  {
    name: 'NeoPort',
    kicker: 'Full-Stack System',
    summary:
      'A full-stack port management system covering the operational chain of a working port, from an incoming shipping request through to customs clearance.',
    contributions: [
      'Shipping requests, berth scheduling and cargo assignment',
      'Customs workflows and logistics coordination',
      'Role-based dashboards per operational role',
      'Ship and location tracking across the port',
    ],
    tech: ['PHP', 'MySQL'],
    award: null,
  },
]

export const experience = [
  {
    role: 'Undergraduate Assistant — DBMS Laboratory',
    org: 'United International University',
    meta: 'CSE 3522 — Database Management Systems Laboratory',
    points: [
      'Assist students during laboratory sessions as they work through database exercises.',
      'Support course-related activities alongside the laboratory instructor.',
    ],
  },
]

export const education = [
  {
    degree: 'BSc in Computer Science & Engineering',
    org: 'United International University (UIU)',
    meta: 'Expected graduation: 2027',
    points: [
      'Coursework across programming, software engineering, databases and web technologies.',
      'Project-based learning through the CSE Project Showcase.',
    ],
  },
]

export const achievements = [
  {
    title: 'Champion',
    event: 'UIU CSE Project Showcase',
    project: 'ArchAxis — AI-Enhanced Construction Project Management Platform',
    image: '/awardwithme.jfif',
    caption: 'Mehraz with Champion Trophy — ArchAxis Team',
    badge: 'Champion'
  },
  {
    title: '3rd Runner-Up',
    event: 'UIU CSE Project Showcase',
    project: 'Aquafonic — IoT-Based Smart Automated Farming System',
    image: '/award.jfif',
    caption: 'UIU CSE Project Showcase Award Trophy',
    badge: '3rd Runner-Up'
  },
]

// Nothing to list yet — the section renders a placeholder instead of
// inventing credentials. Add objects as `{ name, issuer, year, url }`.
export const certifications = []

export const contact = {
  eyebrow: 'Contact',
  title: "Let's build something together",
  text: 'I am open to internships, junior developer roles and student collaborations. The quickest way to reach me is through LinkedIn, or take a look at what I am building on GitHub.',
}
