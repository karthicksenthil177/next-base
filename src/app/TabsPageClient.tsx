"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

type PageKey = "home" | "innovation" | "operations" | "bundles" | "pillars" | "bundle" | "solution" | "resource" | "support";

export default function TabsPageClient({ pageKey }: { pageKey: PageKey }) {
  const { t } = useLanguage();
  const content = t.pages[pageKey];

  return (
    <section className="py-10">
      <h1 className="text-3xl font-bold">{content.title}</h1>
      {content.description ? (
        <p className="mt-2 text-lg opacity-80">{content.description}</p>
      ) : null}
    </section>
  );
}