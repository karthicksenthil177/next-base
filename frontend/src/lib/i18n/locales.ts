export type SupportedLocale = 'en' | 'es';

export const SUPPORTED_LOCALES: SupportedLocale[] = ['en', 'es'];

export const DEFAULT_LOCALE: SupportedLocale = 'en';

export type Translations = {
  nav: {
    home: string;
    about: string;
    contact: string;
    language: string;
  };
  home: {
    title: string;
    subtitle: string;
    cta: string;
  };
};

export const TRANSLATIONS: Record<SupportedLocale, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      language: 'Language'
    },
    home: {
      title: 'Welcome to our site',
      subtitle: 'This content switches by language',
      cta: 'Learn more'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca de',
      contact: 'Contacto',
      language: 'Idioma'
    },
    home: {
      title: 'Bienvenido a nuestro sitio',
      subtitle: 'Este contenido cambia por idioma',
      cta: 'Aprende más'
    }
  }
};