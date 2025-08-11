"use client";

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, TRANSLATIONS, type SupportedLocale, type Translations } from './locales';

export type LanguageContextValue = {
  locale: SupportedLocale;
  t: Translations;
  setLocale: (locale: SupportedLocale) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLocale(): SupportedLocale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  const stored = window.localStorage.getItem('locale') as SupportedLocale | null;
  if (stored && SUPPORTED_LOCALES.includes(stored)) return stored;
  const browser = navigator.language?.split('-')[0] as SupportedLocale | undefined;
  if (browser && SUPPORTED_LOCALES.includes(browser)) return browser;
  return DEFAULT_LOCALE;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<SupportedLocale>(getInitialLocale);

  useEffect(() => {
    try {
      window.localStorage.setItem('locale', locale);
      document.documentElement.lang = locale;
    } catch {}
  }, [locale]);

  const setLocale = (next: SupportedLocale) => {
    if (!SUPPORTED_LOCALES.includes(next)) return;
    setLocaleState(next);
  };

  const t = useMemo(() => TRANSLATIONS[locale], [locale]);

  const value = useMemo<LanguageContextValue>(() => ({ locale, t, setLocale }), [locale, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}