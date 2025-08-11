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
      a: string;
      b: string;
      c: string;
      d: string;
    };
  };
  home: {
    title: string;
    subtitle: string;
    cta: string;
  };
  pages: Record<"home" | "a" | "b" | "c" | "d", { title: string; description?: string }>;
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
        a: 'Page A',
        b: 'Page B',
        c: 'Page C',
        d: 'Page D',
      },
    },
    home: {
      title: 'Welcome to our site',
      subtitle: 'This content switches by language',
      cta: 'Learn more'
    },
    pages: {
      home: { title: 'Home', description: 'This is the home page.' },
      a: { title: 'Page A', description: 'Content for A.' },
      b: { title: 'Page B', description: 'Content for B.' },
      c: { title: 'Page C', description: 'Content for C.' },
      d: { title: 'Page D', description: 'Content for D.' },
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
        a: 'Página A',
        b: 'Página B',
        c: 'Página C',
        d: 'Página D',
      },
    },
    home: {
      title: 'Bienvenido a nuestro sitio',
      subtitle: 'Este contenido cambia por idioma',
      cta: 'Aprende más'
    },
    pages: {
      home: { title: 'Inicio', description: 'Esta es la página de inicio.' },
      a: { title: 'Página A', description: 'Contenido de A.' },
      b: { title: 'Página B', description: 'Contenido de B.' },
      c: { title: 'Página C', description: 'Contenido de C.' },
      d: { title: 'Página D', description: 'Contenido de D.' },
    },
  }
};