export const profile = {
  name: 'Kevin V.',
  role: 'Software Developer',
  tagline: 'Construyo productos web rápidos, accesibles y con carácter.',
  email: 'codekvcode@outlook.com',
  photo: '/foto.jpg', // colocar la foto en public/foto.jpg
  github: 'https://github.com/kevinv7',
  linkedin: 'https://www.linkedin.com/',
  cv: '/cv.pdf',
}

export const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: '.NET', icon: '🟣' },
  { name: 'Tailwind CSS', icon: '🌊' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Git', icon: '🌿' },
]

export const projects = [
  {
    title: 'Async Landing',
    description:
      'Landing page para una plataforma de trabajo asíncrono, con foco en rendimiento y SEO.',
    tags: ['React', 'Tailwind', 'Vite'],
    color: 'yellow',
    repo: 'https://github.com/kevinv7/async-landing-page',
    demo: 'https://example.com',
  },
  {
    title: 'TaskFlow API',
    description:
      'API REST de gestión de tareas con autenticación JWT, tests y despliegue en contenedores.',
    tags: ['.NET', 'PostgreSQL', 'Docker'],
    color: 'pink',
    repo: 'https://github.com/kevinv7',
    demo: null,
  },
  {
    title: 'DataViz Dashboard',
    description:
      'Dashboard interactivo de métricas en tiempo real con gráficas accesibles y modo oscuro.',
    tags: ['React', 'TypeScript', 'D3'],
    color: 'cyan',
    repo: 'https://github.com/kevinv7',
    demo: 'https://example.com',
  },
  {
    title: 'PyScraper CLI',
    description:
      'Herramienta de línea de comandos para extraer y normalizar datos públicos de forma ética.',
    tags: ['Python', 'CLI', 'SQLite'],
    color: 'cyan',
    repo: 'https://github.com/kevinv7',
    demo: null,
  },
  {
    title: 'ShopLite',
    description:
      'E-commerce minimalista con carrito persistente, pagos simulados y panel de administración.',
    tags: ['Next.js', 'Stripe', 'Prisma'],
    color: 'yellow',
    repo: 'https://github.com/kevinv7',
    demo: 'https://example.com',
  },
  {
    title: 'DevNotes',
    description:
      'App de notas para desarrolladores con resaltado de código, búsqueda y sincronización local.',
    tags: ['React', 'IndexedDB', 'PWA'],
    color: 'pink',
    repo: 'https://github.com/kevinv7',
    demo: null,
  },
]

export const experience = [
  {
    period: '2024 — Presente',
    role: 'Software Developer',
    company: 'Freelance',
    summary:
      'Desarrollo de aplicaciones web a medida para startups: desde el diseño de la API hasta el despliegue.',
  },
  {
    period: '2022 — 2024',
    role: 'Frontend Developer',
    company: 'Tech Studio',
    summary:
      'Interfaces en React para productos SaaS, con foco en accesibilidad y rendimiento (Core Web Vitals).',
  },
  {
    period: '2021 — 2022',
    role: 'Junior Developer',
    company: 'Agencia Digital',
    summary:
      'Maquetación y desarrollo de sitios corporativos; automatización de flujos internos con Python.',
  },
]
