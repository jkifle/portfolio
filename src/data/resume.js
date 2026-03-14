
// ─── EDUCATION ───────────────────────────────────────────────────────────────
export const EDUCATION = {
  school: 'University of Tennessee, Knoxville',
  college: 'Tickle College of Engineering',
  degree: 'B.Sc. Computer Science',
  minor: 'Data Science',
  gpa: '3.73',
  honors: "Dean's List: 2x",
  expected: 'Expected May 2028',
  coursework: ['C++', 'Data Structures & Algorithms', 'Computer Organization', 'Discrete Structures', 'Linear Algebra', 'Probability & Random Variables'],
};

// ─── PERSONAL ────────────────────────────────────────────────────────────────
export const PERSONAL = {
  name: 'Joseph Kifle',
  location: 'Clarksville, TN',
  email: 'kifle.joe@gmail.com',
  phone: '(931) 539-0384',
  linkedin: 'https://www.linkedin.com/in/josephkifle',
  github: 'https://github.com/jkifle',
  title: 'Software Engineer & Researcher',
  tagline: 'EXCITED FOR #NSBE2026',
  bio1: `Computer Science student at the University of Tennessee, Knoxville with hands-on production experience shipping features at Nexus, conducting research with UTK, and building civic tech through Hack4Impact.`,
  bio2: `I specialize in full-stack web development, data pipelines, and applied ML — with a track record of turning ambiguous problems into clean, measurable solutions.`,
};


// ─── CERTIFICATIONS ──────────────────────────────────────────────────────────
export const CERTIFICATIONS = [
  { label: 'Google IT Automation with Python', status: 'Completed' },
  { label: 'IBM Machine Learning', status: 'In Progress' },
  { label: 'Google Project Management', status: 'In Progress' },
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const SKILL_CATEGORIES = [
  {
    id: 'S01',
    label: 'Languages',
    accent: 'var(--coral)',
    skills: ['Python', 'JavaScript', 'C++', 'C#', 'SQL', 'Assembly', 'Lua', 'HTML'],
    level: 90,
  },
  {
    id: 'S02',
    label: 'Frameworks & Tools',
    accent: 'var(--mint)',
    skills: ['React', 'Node.js', 'Firebase', 'MongoDB', 'PyTorch', 'Scikit-Learn', 'Tailwind', 'Flask'],
    level: 88,
  },
  {
    id: 'S03',
    label: 'Developer Tooling',
    accent: 'var(--gold)',
    skills: ['GitHub', 'VS Code', 'Jira', 'AutoCAD', 'Jupyter', 'VIM', 'Linux', 'Bash'],
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
    role: 'Software Engineering Intern',
    company: 'Nexus',
    location: 'Knoxville, TN',
    type: 'work',
    current: true,
    bullets: [
      "Submitted 15+ PRs in a high-velocity Agile environment, achieving 100% documentation coverage for new installation procedures.",
      "Engineered a Merged Dashboards feature using JavaScript and a decoupled parent-bridge architecture for thousands of users.",
      "Architected an in-house LiteLLM middleware in Python, reducing annual enterprise AI API overhead by $30,000.",
    ],
  },
  {
    year: '2026',
    role: 'Research Assistant',
    company: 'University of Tennessee, Knoxville',
    location: 'Knoxville, TN',
    type: 'research',
    current: true,
    bullets: [
      "Building a React + D3.js dashboard to visualize 3D performance trade-offs (power, speed, leakage) for cryogenic workloads.",
      "Architecting a Firebase/MongoDB backend for large-scale SPICE simulation results.",
      "Selected to present at EUReCA Exhibition; contributing to a forthcoming HPC paper.",
    ],
  },
  {
    year: '2025',
    role: 'Software Developer',
    company: 'Hack4Impact',
    location: 'Knoxville, TN',
    type: 'work',
    current: true,
    bullets: [
      "Built a web app for Thrive in Knoxville using Python/Django and React to support youth mentoring programs.",
      "Delivered scalable backend systems and user-friendly interfaces, improving engagement and program efficiency.",
    ],
  },
  {
    year: '2025',
    role: 'Research Assistant',
    company: 'Middle Tennessee State University',
    location: 'Murfreesboro, TN',
    type: 'research',
    current: false,
    bullets: [
      "Built a Python RGB pixel intensity pipeline with OpenCV/NumPy, achieving >95% accuracy estimating plasma surface temperature.",
      "Reduced manual analysis time by 70% via automated validation scripts and an 8TB+ file compression pipeline.",
      "Applied Stefan–Boltzmann and Wien's Displacement Laws to translate raw experimental data into quantifiable insights.",
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
  { award: 'Above and Beyond Award', org: 'NSBE' },
  { award: 'Deloitte Foundation Scholarship (2×)', org: 'Deloitte Foundation' },
  { award: 'Rocky Top Presidents Institute', org: 'University of Tennessee' },
  { award: 'Cook Grand Challenge Honors Program', org: 'Tickle College of Engineering' },
  { award: 'James Moreland Scholarship', org: 'Tickle College of Engineering' },
  { award: 'Intellichoice Scholarship', org: 'Intellichoice Inc.' },
];

// ─── LEADERSHIP ──────────────────────────────────────────────────────────────
export const LEADERSHIP = [
  { role: 'Founder', org: 'Students of East Africa (SEA)', period: 'Oct 2025 – Present' },
  { role: 'Region III Secretary & PR Chair', org: 'NSBE', period: 'Jun 2025 – Present' },
  { role: 'Programs Chair', org: 'NSBE UTK Chapter', period: 'Mar 2025 – Present' },
  { role: 'Treasurer', org: 'NAACP UTK', period: 'May 2025 – Present' },
  { role: 'Events Planning Chair', org: 'Brothers United for Excellence', period: 'May 2025 – Present' },
  // { role: 'Freshman Liaison & Comms Chair', org: 'NSBE UTK', period: 'Aug 2024 – May 2025' },
];
