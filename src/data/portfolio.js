export const profile = {
  name: "Kevin Valladares",
  role: {
    es: "Desarollador de software",
    en: "Software Developer",
  },
  tagline: {
    es: "Con experiencia real en desarrollo empresarial (APIs, sistemas, integraciones) — también construyo landing pages rápidas y modernas para negocios que quieren vender más.",
    en: "With real experience in enterprise development (APIs, systems, integrations) — I also build fast, modern landing pages for businesses that want to sell more.",
  },
  email: "kavs0195@gmail.com",
  github: "https://github.com/KevinV7",
  linkedin: "https://www.linkedin.com/in/kevin-valladares-a0a278195/",
  tiktok: "https://www.tiktok.com/@kavsdev95",
  cv: "/Kevin_Valladares_CV.docx",
};

export const techStack = [
  { name: 'C# / .NET Core', icon: 'dotnet' },
  { name: 'Python', icon: 'python' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'React', icon: 'react' },
  { name: 'HTML / CSS', icon: 'html-css' },
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'ASP.NET MVC', icon: 'dotnet' },
  { name: 'SQL Server', icon: 'sqlserver' },
  { name: 'Claude & IA', icon: 'anthropic' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Git & GitHub', icon: 'github' },
  { name: 'Jira', icon: 'jira' },
]

export const projects = [
  {
    id: 'asistencia-vial',
    title: {
      es: "Web para una empresa de Asistencia Vial",
      en: "Website for a roadside assistance company",
    },
    description: {
      es: "Landing page para una empresa que ofrece servicios de asistencia vial.",
      en: "Landing page for a company that offers roadside assistance services.",
    },
    tags: ["React", "Tailwind", "Vite"],
    color: "yellow",
    emoji: "🚨",
    repo: "https://github.com/KevinV7/AsistenciaVial_LandingPage",
    demo: "https://reymachn.com",
  },
  {
    id: 'restaurante',
    title: {
      es: "Web para un restaurante",
      en: "Website for a restaurant",
    },
    description: {
      es: "Landing page que convierte prospectos por medio de whatsapp para un restaurante",
      en: "Landing page that converts leads via WhatsApp for a restaurant",
    },
    tags: ["React", "Tailwind", "Vite"],
    color: "pink",
    emoji: "🍽️",
    repo: "https://github.com/KevinV7/WidomRestaurant---Webpage",
    demo: "https://www.restaurantewidom.com",
  },
  {
    id: 'periodico-simpson',
    title: {
      es: "Periódico interactivo estilo Los Simpson",
      en: "Interactive Simpsons-style newspaper",
    },
    description: {
      es: "Réplica interactiva de un periódico de Los Simpson construida con HTML, CSS y JavaScript. Incluye diseño responsive, animaciones y un generador de noticias dinámico..",
      en: "Interactive replica of a Simpsons newspaper built with HTML, CSS, and JavaScript. Includes responsive design, animations, and a dynamic news generator.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    color: "cyan",
    emoji: "🍩",
    repo: "https://github.com/KevinV7/PeriodicoSimpson-CSS",
    demo: "https://periodico-simpson-css.vercel.app",
  },
  {
    id: 'forecast-api',
    title: {
      es: "API de Pronóstico de Ventas",
      en: "Sales Forecasting API",
    },
    description: {
      es: "Sistema de ML en FastAPI (LightGBM, XGBoost, SARIMA, Holt-Winters) que genera pronósticos de ventas mensuales a 12 meses por SKU y cliente.",
      en: "ML system in FastAPI (LightGBM, XGBoost, SARIMA, Holt-Winters) that generates 12-month monthly sales forecasts by SKU and customer.",
    },
    tags: ["Python", "FastAPI", "LightGBM", "XGBoost"],
    color: "yellow",
    emoji: "📈",
    repo: null,
    demo: null,
  },
  {
    id: 'api-etiquetas',
    title: {
      es: "ApiEtiquetas — Middleware de Impresión Zebra",
      en: "ApiEtiquetas — Zebra Printing Middleware",
    },
    description: {
      es: "API REST en ASP.NET Core que conecta el inventario de Microsoft Dynamics GP con impresoras Zebra vía sockets TCP",
      en: "REST API in ASP.NET Core that connects Microsoft Dynamics GP inventory to Zebra printers via TCP sockets",
    },
    tags: [".NET Core", "Dynamics GP", "TCP", "ZPL"],
    color: "cyan",
    emoji: "🏷️",
    repo: null,
    demo: null,
  },
  {
    id: 'kronos',
    title: {
      es: "Kronos — Convocatorias de Empleados",
      en: "Kronos — Employee Call-in System",
    },
    description: {
      es: "Sistema de programación en ASP.NET Core MVC para gestionar convocatorias y citaciones de empleados, con autenticación por roles y flujos de autorización.",
      en: "Scheduling system in ASP.NET Core MVC to manage employee call-ins and notices, with role-based authentication and approval workflows.",
    },
    tags: ["ASP.NET MVC", "SQL Server"],
    color: "pink",
    emoji: "⏰",
    repo: null,
    demo: null,
  },
];

export const experience = [
  {
    period: {
      es: 'Oct 2025 — Presente',
      en: 'Oct 2025 — Present',
    },
    role: {
      es: 'Desarrollador de Software',
      en: 'Software Developer',
    },
    company: 'Químicas Handal de Centroamérica',
    summary: {
      es: 'Desarrollé middleware REST API (ASP.NET Core) que integra Microsoft Dynamics GP con impresoras Zebra, y una API de Pronóstico de Ventas en Python/FastAPI con un ensamble de 6 modelos ML que genera forecasts SKU a 12 meses para 2 empresas distribuidoras. Integré OpenAI en un sistema legacy VB.NET para transcripción médica asistida por IA.',
      en: 'I built a REST API middleware (ASP.NET Core) that integrates Microsoft Dynamics GP with Zebra printers, and a Sales Forecasting API in Python/FastAPI with a 6-model ML ensemble that generates 12-month SKU forecasts for 2 distribution companies. I integrated OpenAI into a legacy VB.NET system for AI-assisted medical transcription.',
    },
  },
  {
    period: {
      es: 'Jun 2025 — Oct 2025',
      en: 'Jun 2025 — Oct 2025',
    },
    role: {
      es: 'Desarrollador de Software',
      en: 'Software Developer',
    },
    company: 'Grupo Carrión',
    summary: {
      es: 'Construí una aplicación ASP.NET Core MVC para gestión centralizada de reclutamiento con autenticación por roles, y procedimientos SQL Server que generan archivos XML ISO pain.001 para transferencias bancarias de nómina. Brindé soporte regional al ERP Evolution en Honduras y Guatemala.',
      en: 'I built an ASP.NET Core MVC application for centralized recruitment management with role-based authentication, and SQL Server procedures that generate ISO pain.001 XML files for payroll bank transfers. I provided regional support for the Evolution ERP in Honduras and Guatemala.',
    },
  },
  {
    period: {
      es: 'Jul 2022 — Oct 2024',
      en: 'Jul 2022 — Oct 2024',
    },
    role: {
      es: 'Desarrollador de Software',
      en: 'Software Developer',
    },
    company: 'Fruit of the Loom',
    summary: {
      es: 'Reduje el tiempo de gestión de nómina en 30% y el de aprobación de manufactura en 25% mediante mejoras de UX y automatización de flujos. Construí reportes de utilización multioperador y estandaricé procesos de control de asistencia, colaborando con equipos de Honduras, El Salvador, México y Haití.',
      en: 'I reduced payroll management time by 30% and manufacturing approval time by 25% through UX improvements and workflow automation. I built multi-operator utilization reports and standardized attendance control processes, collaborating with teams in Honduras, El Salvador, Mexico, and Haiti.',
    },
  },
]
