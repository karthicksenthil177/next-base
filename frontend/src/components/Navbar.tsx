"use client";

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { SUPPORTED_LOCALES, type SupportedLocale } from '@/lib/i18n/locales';

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <nav className="w-full flex items-center justify-between py-4">
      <div className="font-semibold">{t.nav.home}</div>
      <div className="flex items-center gap-3">
        <label htmlFor="language" className="text-sm opacity-75">
          {t.nav.language}
        </label>
        <select
          id="language"
          className="border rounded px-2 py-1 bg-background text-foreground"
          value={locale}
          onChange={(e) => setLocale(e.target.value as SupportedLocale)}
        >
          {SUPPORTED_LOCALES.map((code) => (
            <option key={code} value={code}>
              {code.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}