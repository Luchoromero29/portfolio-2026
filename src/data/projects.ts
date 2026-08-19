export interface Project {
  title: string;
  slug: string;
  category: "mobile-ai" | "saas-fullstack" | "web-api";
  categoryKey: string;
  roleKey: string;
  statusKey: string;
  year: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  images: string[];
  thumbnail: string;
  github: string;
  liveDemo: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "ACTIV-AR",
    slug: "activ-ar",
    category: "mobile-ai",
    categoryKey: "projectItems.activ-ar.category",
    roleKey: "projectItems.activ-ar.role",
    statusKey: "projectItems.activ-ar.status",
    year: "2025 - Presente",
    shortDescription:
      "Aplicación móvil en producción con IA para salud corporativa, hábitos saludables y análisis biométrico.",
    description:
      "Lead Software Engineer en ACTIV-AR, una plataforma de salud laboral y bienestar corporativo con IA. Diseñé y desarrollé la app móvil cross-platform en producción para Android e iOS con React Native y TypeScript. Implementé una capa desacoplada para múltiples proveedores de IA usando los patrones Adapter y Strategy, generación de entrenamientos personalizados basados en datos biométricos, análisis nutricional con procesamiento de imágenes, e integración nativa con pose detection, Health Connect y Apple Health. Gestión integral de entornos Docker y pipelines de CI/CD para producción.",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "AI Multi-provider",
      "Expo",
      "Apple Health",
      "Health Connect",
      "Docker CI/CD",
    ],
    images: [
      "/assets/proyect-img/activ-ar/landing.png",
      "/assets/proyect-img/activ-ar/challenges.png",
      "/assets/proyect-img/activ-ar/features.png",
      "/assets/proyect-img/activ-ar/portada.png",
      "/assets/proyect-img/activ-ar/2-Corporate-Fitness-Programs.png",
      "/assets/proyect-img/activ-ar/3-Corporate-Fitness-Challenges.png",
      "/assets/proyect-img/activ-ar/4-Corporate-Fitness-Classes.png",
      "/assets/proyect-img/activ-ar/5-Dayly-Meal-Tracker-Nutrition.png",
      "/assets/proyect-img/activ-ar/6-Events-and-Updates.png",
      "/assets/proyect-img/activ-ar/7-Mindfullness.png",
      "/assets/proyect-img/activ-ar/8-Corporate-Wellness-Programs.png",
    ],
    thumbnail: "/assets/proyect-img/activ-ar/features.png",
    github: "",
    liveDemo: "https://activ-ar.com.au",
    featured: true,
  },

  {
    title: "Turnar",
    slug: "turnar",
    category: "saas-fullstack",
    categoryKey: "projectItems.turnar.category",
    roleKey: "projectItems.turnar.role",
    statusKey: "projectItems.turnar.status",
    year: "2026 - Presente",
    shortDescription:
      "Plataforma SaaS de gestión de turnos, agenda y cobros con arquitectura desacoplada y automatizaciones.",
    description:
      "Technical Founder & Software Engineer en Turnar. Plataforma SaaS de gestión de turnos desarrollada desde cero con Next.js, Node.js, PostgreSQL y TypeScript. Lideré la evolución de la arquitectura migrando hacia una API desacoplada en Node.js con Feature-based Architecture para maximizar la mantenibilidad y el rendimiento. Integración de procesamiento de pagos con Mercado Pago, automatizaciones de WhatsApp para recordatorios, y arquitectura modular lista para capacidades de IA. Administración de infraestructura y base de datos en producción.",
    technologies: [
      "Next.js",
      "Node.js API",
      "PostgreSQL",
      "TypeScript",
      "Mercado Pago API",
      "WhatsApp Automation",
      "Tailwind CSS",
    ],
    images: [
      "/assets/proyect-img/turnar/landing.png",
      "/assets/proyect-img/turnar/reservas.png",
      "/assets/proyect-img/turnar/servicios.png",
      "/assets/proyect-img/turnar/caja.png",
      "/assets/proyect-img/turnar/stats.png",
      "/assets/proyect-img/turnar/personalizacion.png",
      "/assets/proyect-img/turnar/recursos.png",
    ],
    thumbnail: "/assets/proyect-img/turnar/landing.png",
    github: "",
    liveDemo: "https://turnar.ar",
    featured: true,
  },

  {
    title: "Cenumen Website",
    slug: "cenumen",
    category: "web-api",
    categoryKey: "projectItems.cenumen.category",
    roleKey: "projectItems.cenumen.role",
    statusKey: "projectItems.cenumen.status",
    year: "2025",
    shortDescription:
      "Sitio oficial de evento nacional con venta de entradas, validación QR y mapa interactivo de stands.",
    description:
      "Desarrollo del sitio oficial para Cenumen, institución de numismática y coleccionismo en Mendoza. Plataforma integral para la gestión y venta de entradas del mayor evento nacional de coleccionismo 2025. Incluye pasarela de pagos con Mercado Pago, validación en tiempo real de entradas con QR, mapa interactivo de stands para expositores y panel administrativo. Desarrollo full stack, seguridad, despliegue y administración de dominio.",
    technologies: [
      "Node.js",
      "JavaScript",
      "MySQL",
      "Mercado Pago API",
      "QR Validation",
      "Interactive Map",
    ],
    images: [
      "/assets/proyect-img/cenumen/screenshot-1.png",
      "/assets/proyect-img/cenumen/screenshot-2.png",
      "/assets/proyect-img/cenumen/screenshot-3.png",
    ],
    thumbnail: "/assets/proyect-img/cenumen/thumbnail.png",
    github: "",
    liveDemo: "https://www.cenumen.com.ar/home",
    featured: true,
  },

  {
    title: "Ubuntu Platform",
    slug: "ubuntu-platform",
    category: "web-api",
    categoryKey: "projectItems.ubuntu-platform.category",
    roleKey: "projectItems.ubuntu-platform.role",
    statusKey: "projectItems.ubuntu-platform.status",
    year: "2024",
    shortDescription:
      "Plataforma que conecta inversores de impacto con emprendimientos ecológicos sostenibles.",
    description:
      "Plataforma orientada a conectar inversores con emprendedores sustentables. Como Lead Frontend Developer coordiné un equipo de tres desarrolladores bajo metodología Scrum con sprints iterativos. Desarrollado con React, Tailwind CSS e integraciones con backend Java / Spring Boot y optimización de assets con Cloudinary.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Cloudinary",
      "Java / Spring Boot",
      "Scrum",
    ],
    images: [
      "/assets/proyect-img/ubuntu/screenshot-1.png",
      "/assets/proyect-img/ubuntu/screenshot-2.png",
      "/assets/proyect-img/ubuntu/screenshot-3.png",
    ],
    thumbnail: "/assets/proyect-img/ubuntu/screenshot-1.png",
    github: "",
    liveDemo: "",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
