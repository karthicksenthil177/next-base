"use client";

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { resolveHomeContent, type ResolvedHomeContent } from '@/logic/homeLogic';

export default function HomeClient() {
  const { locale } = useLanguage();
  const [content, setContent] = useState<ResolvedHomeContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isActive = true;
    setLoading(true);
    resolveHomeContent(locale)
      .then((data) => {
        if (isActive) setContent(data);
      })
      .finally(() => {
        if (isActive) setLoading(false);
      });
    return () => {
      isActive = false;
    };
  }, [locale]);

  if (loading || !content) {
    return <div className="py-16">Loading…</div>;
  }

  return (
    <section className="flex flex-col gap-6 py-10">
      <h1 className="text-3xl font-bold">{content.title}</h1>
      <p className="text-lg opacity-80">{content.subtitle}</p>
      <button className="self-start rounded bg-foreground text-background px-4 py-2">
        {content.ctaLabel}
      </button>
      <p className="text-xs opacity-60">Source: {content.source === 'cms' ? 'Sanity' : 'Local'}</p>
    </section>
  );
}