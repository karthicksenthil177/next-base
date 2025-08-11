"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const tabs = [
  { href: "/", key: "home" as const },
  { href: "/innovation", key: "innovation" as const },
  { href: "/operations", key: "operations" as const },
  { href: "/bundles", key: "bundles" as const },
  { href: "/pillars", key: "pillars" as const },
  { href: "/bundle", key: "bundle" as const },
  { href: "/solution", key: "solution" as const },
  { href: "/resource", key: "resource" as const },
  { href: "/support", key: "support" as const },
];

export default function TabNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <div className="mt-2 border-b border-black/10 dark:border-white/10">
      <nav className="flex gap-4" aria-label="Tabs">
        {tabs.map(({ href, key }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={
                "px-3 py-2 -mb-px border-b-2 " +
                (isActive
                  ? "border-foreground font-semibold"
                  : "border-transparent text-foreground/70 hover:text-foreground/90")
              }
            >
              {t.nav.tabs[key]}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}