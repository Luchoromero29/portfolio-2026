export interface Project {
  title: string;
  slug: string;
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
    shortDescription:
      "Aplicacion mobile con IA que promueve habitos saludables y pausas activas en el trabajo.",
    description:
      "ACTIV-AR es una aplicacion mobile inteligente disenada para mejorar el bienestar fisico y mental en entornos laborales mediante pausas activas y habitos saludables. La app fue desarrollada como una solucion cross-platform para iOS y Android usando React Native y TypeScript. Como unico desarrollador del proyecto, fui responsable de todo el ciclo de desarrollo: arquitectura del sistema, backend con Node.js y Sequelize, gestion de base de datos con MySQL, integracion de funcionalidades con IA y despliegue en Google Play Store y Apple App Store.",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Sequelize",
      "MySQL",
      "Expo",
      "REST API",
    ],
    images: [
      "/assets/proyect-img/activ-ar/screenshot-1.png",
      "/assets/proyect-img/activ-ar/screenshot-2.png",
      "/assets/proyect-img/activ-ar/screenshot-3.png",
      "/assets/proyect-img/activ-ar/screenshot-4.png",
      "/assets/proyect-img/activ-ar/screenshot-5.png",
      "/assets/proyect-img/activ-ar/screenshot-6.png",
    ],
    thumbnail: "/assets/proyect-img/activ-ar/thumbnail.png",
    github: "",
    liveDemo: "https://activ-ar.com.au/corporate-wellness-software",
    featured: true,
  },

  {
    title: "Turnar",
    slug: "turnar",
    shortDescription:
      "Plataforma flexible de gestion de turnos pensada para multiples rubros.",
    description:
      "Turnar es una plataforma web de gestion de turnos y reservas disenada con una arquitectura generica y flexible para adaptarse a distintos rubros como salud, belleza y consultoria profesional. El sistema prioriza escalabilidad y facilidad de uso, permitiendo a negocios administrar agendas, turnos y disponibilidad desde una plataforma centralizada. Actualmente se encuentra en desarrollo activo y esta construida con Next.js y Supabase.",
    technologies: [
      "Next.js",
      "Supabase",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    images: [
      "/assets/proyect-img/turnar/screenshot-1.png",
      "/assets/proyect-img/turnar/screenshot-2.png",
      "/assets/proyect-img/turnar/screenshot-3.png",
    ],
    thumbnail: "/assets/proyect-img/turnar/thumbnail.png",
    github: "",
    liveDemo: "",
    featured: true,
  },

  {
    title: "Cenumen Website",
    slug: "cenumen",
    shortDescription:
      "Sitio oficial de evento con venta de entradas, validacion QR y mapa interactivo de stands.",
    description:
      "Desarrollo del sitio oficial para Cenumen, una institucion de numismatica y coleccionismo en Mendoza. La plataforma fue creada para gestionar la venta de entradas del evento de coleccionistas mas importante del pais en 2025. El sistema incluye pagos online con Mercado Pago, verificacion manual de transferencias bancarias, generacion y validacion en tiempo real de entradas con QR, y un mapa interactivo donde los expositores podian elegir y comprar sus espacios de stand. Fui responsable del desarrollo full stack, implementacion de APIs, configuracion de seguridad, despliegue y dominio.",
    technologies: [
      "Node.js",
      "JavaScript",
      "MySQL",
      "Mercado Pago API",
      "QR Code",
      "HTML",
      "CSS",
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
    shortDescription:
      "Plataforma que conecta inversores con emprendedores de impacto ecologico.",
    description:
      "Ubuntu es una plataforma desarrollada durante un proyecto de bootcamp enfocada en conectar inversores con emprendedores orientados al cuidado del ambiente. Trabaje como Lead Frontend Developer, coordinando un equipo de tres desarrolladores bajo metodologia Scrum con sprints de dos semanas. El frontend se desarrollo con React y Tailwind CSS e integrado con un backend en Java con Spring Boot. Fui responsable de estructurar la arquitectura frontend, implementar integraciones con APIs y optimizar el rendimiento de la UI con herramientas como Cloudinary para imagenes.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Cloudinary",
      "REST API",
      "Spring Boot",
    ],
    images: [
      "/assets/proyect-img/ubuntu/screenshot-1.png",
      "/assets/proyect-img/ubuntu/screenshot-2.png",
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
