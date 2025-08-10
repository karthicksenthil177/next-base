import groq from 'groq';
import { sanityClient } from './sanityClient';
import type { SupportedLocale } from '@/lib/i18n/locales';

export type HomeContent = {
  title: string;
  subtitle: string;
  ctaLabel: string;
};

const HOME_QUERY = groq`*[_type == "home" && language == $lang][0]{
  title,
  subtitle,
  "ctaLabel": cta
}`;

export async function fetchHomeContent(lang: SupportedLocale): Promise<HomeContent | null> {
  if (!sanityClient) return null;
  try {
    const data = await sanityClient.fetch(HOME_QUERY, { lang });
    if (!data) return null;
    return data as HomeContent;
  } catch (error) {
    console.error('Failed to fetch home content', error);
    return null;
  }
}