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
  'I am an undergraduate Computer Science & Engineering student at United International University, expected to graduate in 2027, passionate about building meaningful software solutions and exploring how technology can solve real-world problems. I enjoy working across the software development lifecycle — from analyzing requirements and designing intuitive interfaces to developing backend systems, integrating databases, and turning ideas into functional products.',
  'My technical interests include Software Engineering, Full-Stack Development, Backend Engineering, Artificial Intelligence, Machine Learning, and Data-Driven Applications. I have worked on projects such as ArchAxis, an AI-enhanced construction project management platform, which earned the Champion position in the System Analysis & Design category at the UIU CSE Project Showcase. I have also explored IoT-based automation through Aquafonic, which received 3rd Runner-Up in the Electronics Project category. These experiences have strengthened my problem-solving, system design, teamwork, and project development skills.',
  'Beyond development, I serve as an Undergraduate Assistant at United International University, supporting laboratory activities and helping students understand technical concepts. With a strong interest in continuous learning, I am currently expanding my knowledge in AI and Machine Learning while developing my research skills. I am open to software engineering internships, research opportunities, collaborative projects, and opportunities where I can contribute, learn, and grow as an engineer.'
],
 highlights: [
  'Full-Stack Development',
  'Backend Engineering',
  'Software Engineering',
  'Web Application Development',
  'Artificial Intelligence',
  'Machine Learning',
  'Research & Innovation',
  'Problem Solving',
],
}

// Icon keys map to the inline SVGs in `src/components/Icons.jsx`.
export const skillGroups = [
  {
    icon: 'code',
    title: 'Programming',
   description:
  'Programming languages I use across academic coursework, problem-solving, and software development, from low-level programming to scripting and application logic.',
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
   tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Leaflet.js'],
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
 {
    role: 'Undergraduate Assistant — Microprocessors Laboratory',
    org: 'United International University',
    meta: 'CSE 4326 — Microprocessors and Microcontrollers Laboratory',
    points: [
       'Assist students during laboratory sessions with experiment procedures, circuit connections, and practical implementations.',
  'Support students in understanding microprocessor and microcontroller concepts, troubleshooting basic hardware issues, and executing lab tasks.',
  'Coordinate with the course instructor to support laboratory activities and ensure smooth session operations.',
    ],
  },
  {
  role: 'Organizing Secretary',
  org: 'SGCD Science Club',
  meta: 'Sabujbagh Govt. College| [2020 – 2022]',
  points: [
    'Coordinated the planning and organization of science-related events, activities, and club initiatives.',
    'Collaborated with club members to manage event arrangements, communication, and operational activities.',
    'Encouraged student participation in scientific exploration, teamwork, and extracurricular learning.',
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
  {
  degree: 'Higher Secondary Certificate (HSC)',
  org: 'Sabujbagh Govt. College, Dhaka ',
  meta: 'Science | GPA:5.00',
  points: [
    'Completed higher secondary education with a focus on Physics, Chemistry, Mathematics, and ICT.',
    'Developed foundational knowledge in analytical thinking, mathematics, and scientific problem-solving.',
  ],
},
{
  degree: 'Secondary School Certificate (SSC)',
  org: 'Madartek Abdul Aziz High School & College',
  meta: 'Science | GPA: 5.00',
  points: [
    'Completed secondary education with a foundation in Mathematics, Physics, Chemistry, and ICT.',
    'Developed analytical thinking, problem-solving abilities, and an interest in science and technology.',
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
export const certifications = [
  {
    name: 'AI Fluency: AI Capabilities & Limitations',
    issuer: 'Anthropic Education',
    date: 'August 12, 2026',
    credentialUrl: 'https://verify.skilljar.com/c/2ojbafkup9vq',
  },
  {
    name: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic Education',
    date: 'August 10, 2026',
    credentialUrl: 'https://verify.skilljar.com/c/ucfhda2p6rzu',
  },
];

export const contact = {
  eyebrow: 'Contact',
  title: "Let's build something together",
  text: 'I am open to internships, junior developer roles and student collaborations. The quickest way to reach me is through LinkedIn, or take a look at what I am building on GitHub.',
}
