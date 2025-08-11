export type SupportedLocale = 'en' | 'es';

export const SUPPORTED_LOCALES: SupportedLocale[] = ['en', 'es'];

export const DEFAULT_LOCALE: SupportedLocale = 'en';

export type Translations = {
  nav: {
    home: string;
    about: string;
    contact: string;
    language: string;
    tabs: {
      home: string;
      innovation: string;
      operations: string;
      bundles: string;
      pillars: string;
      bundle: string;
      solution: string;
      resource: string;
      support: string;
    };
  };
  home: {
    title: string;
    subtitle: string;
    cta: string;
  };
  pages: Record<"home" | "innovation" | "operations" | "bundles" | "pillars" | "bundle" | "solution" | "resource" | "support", { title: string; description?: string }>;
};

export const TRANSLATIONS: Record<SupportedLocale, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      language: 'Language',
      tabs: {
        home: 'Home',
        innovation: 'Innovation',
        operations: 'Operations',
        bundles: 'Bundles',
        pillars: 'Pillars',
        bundle: 'Bundle',
        solution: 'Solution',
        resource: 'Resource',
        support: 'Support',
      },
    },
    home: {
      title: 'Welcome to our site',
      subtitle: 'This content switches by language',
      cta: 'Learn more'
    },
    pages: {
      home: { title: 'Home', description: 'Welcome to the home page.' },
      innovation: { title: 'Innovation', description: 'Explore innovative ideas, features, and experiments.' },
      operations: { title: 'Operations', description: 'Operational processes, workflows, and best practices.' },
      bundles: { title: 'Bundles', description: 'Overview of product and service bundles.' },
      pillars: { title: 'Pillars', description: 'Key pillars and principles of our platform.' },
      bundle: { title: 'Bundle', description: 'Specific bundle details and configurations.' },
      solution: { title: 'Solution', description: 'End-to-end solutions and use cases.' },
      resource: { title: 'Resource', description: 'Documentation, downloads, and assets.' },
      support: { title: 'Support', description: 'Get help, FAQs, and contact support.' },
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      contact: 'Contacto',
      language: 'Idioma',
      tabs: {
        home: 'Inicio',
        innovation: 'Innovación',
        operations: 'Operaciones',
        bundles: 'Paquetes',
        pillars: 'Pilares',
        bundle: 'Paquete',
        solution: 'Solución',
        resource: 'Recurso',
        support: 'Soporte',
      },
    },
    home: {
      title: 'Bienvenido a nuestro sitio',
      subtitle: 'Este contenido cambia por idioma',
      cta: 'Aprende más'
    },
    pages: {
      home: { title: 'Inicio', description: 'Bienvenido a la página de inicio.' },
      innovation: { title: 'Innovación', description: 'Explora ideas, funciones y experimentos innovadores.' },
      operations: { title: 'Operaciones', description: 'Procesos operativos, flujos de trabajo y buenas prácticas.' },
      bundles: { title: 'Paquetes', description: 'Resumen de paquetes de productos y servicios.' },
      pillars: { title: 'Pilares', description: 'Pilares y principios clave de nuestra plataforma.' },
      bundle: { title: 'Paquete', description: 'Detalles y configuraciones de un paquete específico.' },
      solution: { title: 'Solución', description: 'Soluciones integrales y casos de uso.' },
      resource: { title: 'Recurso', description: 'Documentación, descargas y recursos.' },
      support: { title: 'Soporte', description: 'Obtén ayuda, preguntas frecuentes y contacto.' },
    },
  }
};