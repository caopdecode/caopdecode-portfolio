// Shared (language-independent) project + skill data.
// Per-language copy lives in `content` below, keyed by the same ids.

export const PROJECTS = [
  {
    id: "starsystem",
    tech: ["React", "Spring Boot", "PostgreSQL", "AWS"],
    status: "screens",
    link: null,
    images: [
      "/ProjectsPics/starsystem_1.webp",
      "/ProjectsPics/starsystem_2.webp",
    ],
  },
  {
    id: "insursuite",
    tech: ["TypeScript", "NestJS", "Next.js", "PostgreSQL", "Redis", "n8n"],
    status: "screens",
    link: null,
    images: [
      "/ProjectsPics/insursuite_1.webp",
      "/ProjectsPics/insursuite_2.webp",
      "/ProjectsPics/insursuite_3.webp",
      "/ProjectsPics/insursuite_4.webp",
      "/ProjectsPics/insursuite_5.webp",
      "/ProjectsPics/insursuite_6.webp",
      "/ProjectsPics/insursuite_7.webp",
    ],
  },
  {
    id: "vacualert",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    status: "screens",
    link: null,
    images: ["/ProjectsPics/vacualert_1.webp"],
  },
  {
    id: "reparto",
    tech: ["JavaScript", "HTML5", "CSS3"],
    status: "live",
    link: "https://reparto-caopdecode.netlify.app",
    images: ["/ProjectsPics/reparto_1.webp"],
  },
];

export const SKILL_GROUPS = [
  {
    id: "frontend",
    icons: ["React", "TypeScript", "Next.js"],
  },
  {
    id: "backend",
    icons: ["Node.js", "NestJS", "Java", "Spring Boot", "Python"],
  },
  {
    id: "data",
    icons: ["PostgreSQL", "AWS"],
  },
  {
    id: "automation",
    icons: ["n8n", "Claude"],
  },
];

export const CONTACT_EMAIL = "caosoriop31@gmail.com";

export const SOCIALS = [
  { id: "github", href: "https://github.com/caopdecode" },
  { id: "linkedin", href: "https://www.linkedin.com/in/caopdecode" },
  { id: "x", href: "https://x.com/caopdecode" },
];

export const content = {
  es: {
    lang: "es",
    nav: {
      brand: "Camilo Osorio Páez",
      brandTag: "caopdecode",
      links: [
        { to: "about", label: "Sobre mí" },
        { to: "projects", label: "Proyectos" },
        { to: "skills", label: "Stack" },
        { to: "contact", label: "Contacto" },
      ],
      langToggle: "EN",
    },
    hero: {
      status: "disponible para nuevas oportunidades",
      name: "Camilo Osorio Páez",
      role: "Full Stack Developer & Automatización con IA",
      description:
        "Construyo productos reales y automatizo procesos con inteligencia artificial generativa, dando siempre lo mejor de mí para crear soluciones con propósito.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Hablemos",
      signature: "caopdecode",
    },
    about: {
      eyebrow: "~/sobre-mi",
      title: "Sobre mí",
      paragraphs: [
        "Full Stack Developer e Ingeniero Multimedia, enfocado en construir productos reales y automatizar procesos con inteligencia artificial generativa.",
        "He desarrollado InsurSuite, un SaaS multi-tenant para gestión de pólizas de seguros construido con NestJS, PostgreSQL y Next.js; VacuAlert, una herramienta que automatiza reportes de campañas de vacunación; y Reparto, una app de finanzas personales. También construyo automatizaciones con n8n, como un generador automático de certificados para la Cruz Roja Colombiana que redujo el procesamiento manual en ~70%.",
        "Aplico la suite de Claude (Claude Code, Claude Cowork) como parte activa de mi flujo de desarrollo, no como un experimento aparte.",
        "Mi forma de trabajar es dar siempre lo mejor de mí: no me conformo con que algo funcione, busco construir soluciones con propósito, que resuelvan un problema real para quien las usa.",
      ],
      focusAreas: ["Producto real", "Automatización", "IA aplicada"],
      imageAlt: "Foto de perfil de Camilo Osorio Páez",
    },
    projects: {
      eyebrow: "~/proyectos",
      title: "Proyectos",
      viewProject: "Ver proyecto ↗",
      close: "Cerrar",
      techLabel: "Stack",
      statusLabels: {
        screens: "Capturas del funcionamiento",
        local: "Pendiente de despliegue",
        live: "Demo en vivo",
      },
      items: {
        starsystem: {
          title: "StarSystem",
          tagline: "Sistema de gestión de clientes y pólizas a la medida de StarAsegurados",
          description:
            "Sistema de gestión de clientes y pólizas construido a la medida para StarAsegurados, una aseguradora colombiana — mi primer proyecto full stack en producción real. Es el mismo concepto que más adelante generalicé en InsurSuite, aquí adaptado a las necesidades puntuales de este cliente. Administra clientes, pólizas y el flujo operativo diario de los asesores.",
        },
        insursuite: {
          title: "InsurSuite",
          tagline: "SaaS multi-tenant de gestión de pólizas de seguros",
          description:
            "SaaS multi-tenant de gestión de pólizas para asesores y agencias de seguros en LATAM — la evolución generalizada del sistema que construí a la medida para StarAsegurados (ver StarSystem). Panel de gestión con alertas automáticas de renovación, portal independiente (PWA) para clientes finales, pagos con Wompi y más de 100 tests automatizados.",
        },
        vacualert: {
          title: "VacuAlert",
          tagline: "Automatización de reportes de campañas de vacunación",
          description:
            "Aplicación 100% client-side que procesa archivos Excel de vacunación y genera automáticamente reportes de pacientes con dosis pendientes — sin backend ni base de datos. Normaliza datos sucios de campo (cédulas, teléfonos, fechas) y calcula la próxima dosis por paciente según un esquema configurable por vacuna.",
        },
        reparto: {
          title: "Reparto",
          tagline: "Automatización de finanzas personales con la regla 50/30/20",
          description:
            "Aplicación web de finanzas personales que automatiza la distribución de ingresos según la regla 50/30/20 (necesidades, deseos, ahorro). Incluye validación de saldos por categoría, historial filtrable de movimientos y porcentajes configurables. JavaScript vanilla, sin frameworks ni backend — persistencia 100% en el navegador.",
        },
      },
    },
    skills: {
      eyebrow: "~/stack",
      title: "Stack",
      groups: {
        frontend: "frontend/",
        backend: "backend/",
        data: "datos & infra/",
        automation: "automatización & ia/",
      },
    },
    contact: {
      eyebrow: "~/contacto",
      title: "Contacto",
      description:
        "Siempre estoy abierto a nuevas oportunidades y colaboraciones. Hablemos y construyamos algo juntos.",
      ctaLabel: "Escríbeme →",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    lang: "en",
    nav: {
      brand: "Camilo Osorio Páez",
      brandTag: "caopdecode",
      links: [
        { to: "about", label: "About" },
        { to: "projects", label: "Projects" },
        { to: "skills", label: "Stack" },
        { to: "contact", label: "Contact" },
      ],
      langToggle: "ES",
    },
    hero: {
      status: "available for new opportunities",
      name: "Camilo Osorio Páez",
      role: "Full Stack Developer & AI Automation",
      description:
        "I build real products and automate processes with generative AI, always giving my best to create solutions with purpose.",
      ctaPrimary: "View projects",
      ctaSecondary: "Let's talk",
      signature: "caopdecode",
    },
    about: {
      eyebrow: "~/about",
      title: "About",
      paragraphs: [
        "Full Stack Developer and Multimedia Engineer, focused on building real products and automating processes with generative AI.",
        "I've built InsurSuite, a multi-tenant SaaS for insurance policy management using NestJS, PostgreSQL and Next.js; VacuAlert, a tool that automates vaccination-campaign reporting; and Reparto, a personal finance app. I also build automations with n8n, including an automatic certificate generator for the Colombian Red Cross that cut manual processing by ~70%.",
        "I use the Claude suite (Claude Code, Claude Cowork) as an active part of my development workflow, not a side experiment.",
        "My way of working is to always give my best: I don't settle for something that just works, I aim to build solutions with purpose, ones that solve a real problem for the people who use them.",
      ],
      focusAreas: ["Real product", "Automation", "Applied AI"],
      imageAlt: "Profile photo of Camilo Osorio Páez",
    },
    projects: {
      eyebrow: "~/projects",
      title: "Projects",
      viewProject: "View project ↗",
      close: "Close",
      techLabel: "Stack",
      statusLabels: {
        screens: "Real screenshots",
        local: "Deployment pending",
        live: "Live demo",
      },
      items: {
        starsystem: {
          title: "StarSystem",
          tagline: "Client and policy management system built for StarAsegurados",
          description:
            "Client and policy management system built to order for StarAsegurados, a Colombian insurance company — my first full-stack project running in production. It's the same concept I later generalized into InsurSuite, here tailored to this client's specific needs. Handles clients, policies and the advisors' day-to-day operations.",
        },
        insursuite: {
          title: "InsurSuite",
          tagline: "Multi-tenant SaaS for insurance policy management",
          description:
            "Multi-tenant SaaS for insurance policy management, built for advisors and agencies across LATAM — the generalized evolution of the system I built to order for StarAsegurados (see StarSystem). Management dashboard with automatic renewal alerts, an independent PWA portal for end clients, Wompi payments, and 100+ automated tests.",
        },
        vacualert: {
          title: "VacuAlert",
          tagline: "Automated reporting for vaccination campaigns",
          description:
            "Fully client-side app that processes vaccination Excel files and automatically generates reports of patients with pending doses — no backend, no database. Normalizes messy real-world field data (IDs, phone numbers, dates) and calculates each patient's next dose from a configurable per-vaccine schedule.",
        },
        reparto: {
          title: "Reparto",
          tagline: "Personal finance automation using the 50/30/20 rule",
          description:
            "Personal finance web app that automates income distribution using the 50/30/20 rule (needs, wants, savings). Includes per-category balance validation, a filterable transaction history, and configurable percentages. Vanilla JavaScript, no frameworks or backend — persistence lives entirely in the browser.",
        },
      },
    },
    skills: {
      eyebrow: "~/stack",
      title: "Stack",
      groups: {
        frontend: "frontend/",
        backend: "backend/",
        data: "data & infra/",
        automation: "automation & ai/",
      },
    },
    contact: {
      eyebrow: "~/contact",
      title: "Contact",
      description:
        "I'm always open to new opportunities and collaborations. Let's talk and build something together.",
      ctaLabel: "Email me →",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};
