# Frontend

This app is a Next.js (App Router) frontend with SOLID-friendly separation:

- Services (`src/services/*`): external data access (Sanity)
- Logic (`src/logic/*`): business rules and fallbacks
- UI components (`src/components/*`): presentation only
- i18n (`src/lib/i18n/*`): language context, translations, and constants

## Local development

1. Copy `.env.local.example` to `.env.local` and fill in your Sanity project values.
2. Install deps and run dev:

```bash
npm install
npm run dev
```

## Language switching

- The navbar exposes a language selector (EN/ES)
- The choice persists in `localStorage` and updates `<html lang>`
- Home content is resolved via logic layer: Sanity first, then local translations in `src/lib/i18n/locales.ts`

## Sanity schema expectation

`home` document with fields: `language` (string code), `title`, `subtitle`, `cta`.

You can adjust GROQ in `src/services/homeService.ts` to match your studio schema.
