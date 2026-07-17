export const profile = {
  name: "Kevin Valladares",
  role: "Desarollador de software",
  tagline:
    "Con experiencia real en desarrollo empresarial (APIs, sistemas, integraciones) — también construyo landing pages rápidas y modernas para negocios que quieren vender más.",
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
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'ASP.NET MVC', icon: 'dotnet' },
  { name: 'SQL Server', icon: 'sqlserver' },
  { name: 'Claude & IA', icon: 'anthropic' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Git & GitHub', icon: 'github' },
]

export const projects = [
  {
    title: "Web para una empresa de Asistencia Vial",
    description:
      "Landing page para una empresa que ofrece servicios de asistencia vial.",
    tags: ["React", "Tailwind", "Vite"],
    color: "yellow",
    emoji: "🚨",
    repo: "https://github.com/KevinV7/AsistenciaVial_LandingPage",
    demo: "https://reymachn.com",
  },
  {
    title: "Web para un restaurante",
    description:
      "Landing page que convierte prospectos por medio de whatsapp para un restaurante",
    tags: ["React", "Tailwind", "Vite"],
    color: "pink",
    emoji: "🍽️",
    repo: "https://github.com/KevinV7/WidomRestaurant---Webpage",
    demo: "https://www.restaurantewidom.com",
  },
  {
    title: "Periódico interactivo estilo Los Simpson",
    description:
      "Réplica interactiva de un periódico de Los Simpson construida con HTML, CSS y JavaScript. Incluye diseño responsive, animaciones y un generador de noticias dinámico..",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "cyan",
    emoji: "🍩",
    repo: "https://github.com/KevinV7/PeriodicoSimpson-CSS",
    demo: "https://periodico-simpson-css.vercel.app",
  },
  {
    title: "API de Pronóstico de Ventas",
    description:
      "Sistema de ML en FastAPI (LightGBM, XGBoost, SARIMA, Holt-Winters) que genera pronósticos de ventas mensuales a 12 meses por SKU y cliente.",
       tags: ["Python", "FastAPI", "LightGBM", "XGBoost"],
    color: "yellow",
    emoji: "📈",
    repo: null,
    demo: null,
  },
  {
    title: "ApiEtiquetas — Middleware de Impresión Zebra",
    description:
      "API REST en ASP.NET Core que conecta el inventario de Microsoft Dynamics GP con impresoras Zebra vía sockets TCP",
      tags: [".NET Core", "Dynamics GP", "TCP", "ZPL"],
    color: "cyan",
    emoji: "🏷️",
    repo: null,
    demo: null,
  },
  {
    title: "Kronos — Convocatorias de Empleados",
    description:
      "Sistema de programación en ASP.NET Core MVC para gestionar convocatorias y citaciones de empleados, con autenticación por roles y flujos de autorización.",
    tags: ["ASP.NET MVC", "SQL Server"],
    color: "pink",
    emoji: "⏰",
    repo: null,
    demo: null,
  },
];

export const experience = [
  {
    period: 'Oct 2025 — Presente',
    role: 'Desarrollador de Software',
    company: 'Químicas Handal de Centroamérica',
    summary:
      'Desarrollé middleware REST API (ASP.NET Core) que integra Microsoft Dynamics GP con impresoras Zebra, y una API de Pronóstico de Ventas en Python/FastAPI con un ensamble de 6 modelos ML que genera forecasts SKU a 12 meses para 2 empresas distribuidoras. Integré OpenAI en un sistema legacy VB.NET para transcripción médica asistida por IA.',
  },
  {
    period: 'Jun 2025 — Oct 2025',
    role: 'Desarrollador de Software',
    company: 'Grupo Carrión',
    summary:
      'Construí una aplicación ASP.NET Core MVC para gestión centralizada de reclutamiento con autenticación por roles, y procedimientos SQL Server que generan archivos XML ISO pain.001 para transferencias bancarias de nómina. Brindé soporte regional al ERP Evolution en Honduras y Guatemala.',
  },
  {
    period: 'Jul 2022 — Oct 2024',
    role: 'Desarrollador de Software',
    company: 'Fruit of the Loom',
    summary:
      'Reduje el tiempo de gestión de nómina en 30% y el de aprobación de manufactura en 25% mediante mejoras de UX y automatización de flujos. Construí reportes de utilización multioperador y estandaricé procesos de control de asistencia, colaborando con equipos de Honduras, El Salvador, México y Haití.',
  },
]
