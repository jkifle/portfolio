
// ─── EDUCATION ───────────────────────────────────────────────────────────────
export const EDUCATION = {
  school: 'The University of Tennessee, Knoxville',
  college: 'Tickle College of Engineering',
  degree: 'Bachelor of Science in Computer Science',
  minor: 'Business Administration',
  gpa: '3.68',
  honors: 'Cook Grand Challenge; Deloitte Foundation Scholarship (2×); James Moreland Scholarship; Global Citizens Scholar',
  expected: 'Graduation: May 2028',
  coursework: ['C++', 'Data Structures & Algorithms', 'Computer Organization', 'Discrete Structures', 'Linear Algebra', 'Probability & Random Variables'],
};

// ─── PERSONAL ────────────────────────────────────────────────────────────────
export const PERSONAL = {
  name: 'Joseph Kifle',
  location: 'Clarksville, TN',
  email: 'kifle.joe@gmail.com',
  phone: '(931) 539-0384',
  linkedin: 'http://www.linkedin.com/in/josephkifle',
  website: 'https://josephkifle.onrender.com',
  github: 'https://github.com/jkifle',
  title: 'Software Engineer & Researcher',
  tagline: '',
  bio1: `Computer Science student at the University of Tennessee, Knoxville with hands-on production experience shipping features at Nexus, conducting research with UTK, and building civic tech through Hack4Impact.`,
  bio2: `I specialize in full-stack web development, data pipelines, and applied ML — with a track record of turning ambiguous problems into clean, measurable solutions.`,
};


// ─── CERTIFICATIONS ──────────────────────────────────────────────────────────
export const CERTIFICATIONS = [
  { label: 'Google IT Automation with Python', status: 'Completed' },
  { label: 'Google Project Management', status: 'Completed' },
  { label: 'IBM Machine Learning (Summer 2026)', status: 'Completed' },
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const SKILL_CATEGORIES = [
  {
    id: 'S01',
    label: 'Languages',
    accent: 'var(--coral)',
    skills: ['Java', 'C++', 'Python', 'JavaScript', 'C', 'SQL', 'Lua'],
    level: 90,
  },
  {
    id: 'S02',
    label: 'Frameworks & Tools',
    accent: 'var(--mint)',
    skills: ['Firebase', 'MongoDB', 'Firestore', 'Node.js', 'Scikit-Learn', 'PyTorch', 'Tailwind', 'Flask', 'Render', 'PostgreSQL'],
    level: 88,
  },
  {
    id: 'S03',
    label: 'Developer Tooling',
    accent: 'var(--gold)',
    skills: ['Jira', 'GitHub', 'VS Code', 'Jupyter', 'VIM', 'AutoCAD', 'Azure DevOps'],
    level: 82,
  },
  {
    id: 'S04',
    label: 'Soft Skills',
    accent: 'var(--forest)',
    skills: ['Agile / Scrum', 'Troubleshooting', 'Process Improvement', 'Leadership', 'Collaboration', 'Communication'],
    level: 95,
  },
];

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    year: '2026',
    role: 'IT Retail Systems Intern',
    company: 'Tractor Supply Co.',
    location: 'Brentwood, TN',
    type: 'work',
    current: true,
    period: 'June 2026 – Present',
    bullets: [
      'Reduced annual operational effort by an estimated ~469 hours (~$45.9K in recurring labor savings).',
      'Developed an internal tool automating a manual SQL-based deployment process, decreasing activation time by 99.7%.',
      'Implemented a PL/SQL-based cron job to standardize data formatting, eliminating failures and improving reliability across a 2,400+ store network.',
    ],
  },
  {
    year: '2026',
    role: 'Software Engineering Intern',
    company: 'Nexus',
    location: 'Knoxville, TN',
    type: 'work',
    current: false,
    period: 'January 2026 – May 2026',
    bullets: [
      'Collaborated with senior engineers to submit 25+ Pull Requests focused on feature parity and bug resolution, and ensured 100% documentation of new installation procedures.',
      'Engineered and deployed a live Merged Dashboards feature using JavaScript and a decoupled parent-bridge architecture to streamline data visualization for thousands of active users.',
      'Architected a multi-model LLM execution engine, replacing OpenAI Assistants API with multi-model routing, cutting annual enterprise API overhead by $30K across a product line serving 1,000+ schools.',
    ],
  },
  {
    year: '2026',
    role: 'Research Assistant',
    company: 'University of Tennessee, Knoxville',
    location: 'Knoxville, TN',
    type: 'research',
    current: false,
    period: 'February 2026 – May 2026',
    bullets: [
      'Building an interactive web dashboard using React and D3.js to visualize 3D performance trade-offs (power, speed, leakage) for cryogenic workloads.',
      'Architecting a Firebase/MongoDB backend to store and retrieve large-scale simulation results to facilitate comparative analyses.',
      'Selected to present research findings at the EUReCA Exhibition and contributing to a forthcoming paper on SPICE-derived models for cooling strategies in high-performance computing.',
    ],
  },
];

// ─── TIMELINE (flattened for About section) ──────────────────────────────────
export const TIMELINE = [
  { year: '2026', role: 'Software Engineering Intern', company: 'Nexus', type: 'work' },
  { year: '2026', role: 'Research Assistant', company: 'UTK — HPC / Cryogenics', type: 'research' },
  { year: '2025', role: 'Software Developer', company: 'Hack4Impact', type: 'work' },
  { year: '2025', role: 'Research Assistant', company: 'MTSU — Plasma Physics', type: 'research' },
  { year: '2024', role: 'B.Sc. Computer Science', company: 'University of Tennessee', type: 'edu' },
];

// ─── PROJECTS ────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 'P01',
    title: 'Retail Item Locator',
    description: 'Full-stack inventory locator deployed in a live retail environment, managing 5,000+ unique SKUs with real-time shelf-location mapping and measurably reduced AHT.',
    tech: ['React', 'PostgreSQL', 'Python', 'Flask', 'Render', 'Git'],
    accent: 'var(--coral)',
    status: 'Production',
    year: '2025',
    link: "https://retail-item-locator.onrender.com/",
    mockup: {
      lines: [
        { label: 'SKUs Indexed', value: '5,000+', color: 'var(--mint)' },
        { label: 'AHT Reduction', value: 'Confirmed', color: 'var(--gold)' },
        { label: 'DB Schema', value: 'PostgreSQL', color: 'var(--coral)' },
        { label: 'Hosting', value: 'Render Cloud', color: 'var(--mint)' },
      ],
    },
  },
  {
    id: 'P02',
    title: 'PocketWatch',
    description: 'Full-stack personal finance tracker integrating Plaid for bank connections, automated transaction categorization, and Chart.js spending visualizations with Firebase auth.',
    tech: ['React', 'Firebase', 'Firestore', 'Tailwind CSS', 'Chart.js', 'Plaid API'],
    accent: 'var(--mint)',
    status: 'Live',
    year: '2025',
    link: 'https://pocket-watch-expense-tracker-git-main-jkifles-projects.vercel.app/',
    mockup: {
      lines: [
        { label: 'Auth Provider', value: 'Firebase', color: 'var(--gold)' },
        { label: 'Bank Sync', value: 'Plaid API', color: 'var(--mint)' },
        { label: 'Charts', value: 'Chart.js', color: 'var(--coral)' },
        { label: 'Data Sync', value: 'Real-time', color: 'var(--mint)' },
      ],
    },
  },
  {
    id: 'P03',
    title: 'Pixel-Based Irradiance Estimator',
    description: 'Python application analyzing video frames to extract light intensity patterns and estimate plasma surface temperature using Stefan–Boltzmann and custom power-conversion equations.',
    tech: ['Python', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib', 'Tkinter'],
    accent: 'var(--gold)',
    status: 'Research',
    year: '2025',
    link: 'https://github.com/jkifle/frame-light-intensity-analyzer',
    mockup: {
      lines: [
        { label: 'Accuracy', value: '>95%', color: 'var(--mint)' },
        { label: 'Analysis', value: 'RGB / Thermal', color: 'var(--gold)' },
        { label: 'Storage Cut', value: '8TB+ saved', color: 'var(--coral)' },
        { label: 'Model', value: 'Stefan-Boltzmann', color: 'var(--mint)' },
      ],
    },
  },
  {
    id: 'P04',
    title: 'Symptom Diagnostic Tool',
    description: 'Interactive CLI tool using a decision-tree classifier to predict possible diseases from user-reported symptoms, built as an early exploration into applied ML.',
    tech: ['Python', 'Scikit-Learn', 'Decision Tree', 'CLI'],
    accent: 'var(--coral)',
    status: 'Open Source',
    year: '2024',
    link: 'https://github.com/jkifle/symptom-diagnostic-tool',
    mockup: {
      lines: [
        { label: 'Model', value: 'Decision Tree', color: 'var(--mint)' },
        { label: 'Input', value: 'CLI / Symptoms', color: 'var(--gold)' },
        { label: 'Output', value: 'Disease Pred.', color: 'var(--coral)' },
        { label: 'Library', value: 'Scikit-Learn', color: 'var(--mint)' },
      ],
    },
  },
];

// ─── HONORS ──────────────────────────────────────────────────────────────────
export const HONORS = [
  { award: 'Cook Grand Challenge', org: 'Tickle College of Engineering' },
  { award: 'Deloitte Foundation Scholarship (2×)', org: 'Deloitte Foundation' },
  { award: 'James Moreland Scholarship', org: 'Tickle College of Engineering' },
  { award: 'Global Citizens Scholar', org: 'University of Tennessee' },
];

// ─── LEADERSHIP ──────────────────────────────────────────────────────────────
export const LEADERSHIP = [
  { role: 'Career Prep Fellow', org: 'Management Leadership for Tomorrow', period: 'Jan 2026 – Present' },
  { role: 'Founder & President', org: 'Students of East Africa', period: 'Oct 2025 – May 2026' },
  { role: 'Region III Secretary & Public Relations Chair', org: 'National Society of Black Engineers', period: 'Jun 2025 – May 2026' },
];
