import type { SupportedLocale, Translations } from '@/lib/i18n/locales';
import { TRANSLATIONS } from '@/lib/i18n/locales';
import { fetchHomeContent } from '@/services/homeService';

export type ResolvedHomeContent = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  source: 'cms' | 'local';
};

export async function resolveHomeContent(locale: SupportedLocale): Promise<ResolvedHomeContent> {
  const cms = await fetchHomeContent(locale);
  if (cms) {
    return { ...cms, source: 'cms' };
  }
  const t: Translations = TRANSLATIONS[locale];
  return {
    title: t.home.title,
    subtitle: t.home.subtitle,
    ctaLabel: t.home.cta,
    source: 'local'
  };
}