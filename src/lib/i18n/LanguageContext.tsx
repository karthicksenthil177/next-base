"use client";

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { SUPPORTED_LOCALES, TRANSLATIONS, type SupportedLocale, type Translations } from './locales';

export type LanguageContextValue = {
  locale: SupportedLocale;
  t: Translations;
  setLocale: (locale: SupportedLocale) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);


export function LanguageProvider({ children, initialLocale }: { children: React.ReactNode; initialLocale: SupportedLocale }) {
  const [locale, setLocaleState] = useState<SupportedLocale>(initialLocale);

  // After hydration, reconcile with localStorage/browser preference without causing hydration mismatch
  useEffect(() => {
    const stored = (typeof window !== 'undefined'
      ? (window.localStorage.getItem('locale') as SupportedLocale | null)
      : null);
    const next = stored && SUPPORTED_LOCALES.includes(stored) ? stored : initialLocale;
    if (next !== locale) setLocaleState(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('locale', locale);
        document.documentElement.lang = locale;
        document.cookie = `locale=${locale}; Path=/; Max-Age=${60 * 60 * 24 * 365}`;
      }
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