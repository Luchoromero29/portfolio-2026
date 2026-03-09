import type en from "./en.json";
import enTranslations from "./en.json";
import esTranslations from "./es.json";

export type Language = "en" | "es";
export type TranslationKey = string;

// Type-safe translation resource shape derived from English keys
export type Translations = typeof en;

const translationCache: Record<Language, Translations> = {
  en: enTranslations as Translations,
  es: esTranslations as unknown as Translations,
};

/**
 * Returns a synchronous `t()` helper for a given language.
 * Falls back to the key string if a translation is missing.
 */
export function createTranslator(translations: Translations) {
  return function t(key: string, fallback?: string): string {
    const parts = key.split(".");
    let current: unknown = translations;
    for (const part of parts) {
      if (current && typeof current === "object") {
        current = (current as Record<string, unknown>)[part];
      } else {
        return fallback ?? key;
      }
    }
    return typeof current === "string" ? current : (fallback ?? key);
  };
}

/**
 * Load translations and return a `t()` helper — use in Astro SSR/SSG frontmatter.
 *
 * @example
 * const { t } = await useTranslations('en');
 * t('hero.title') // → "Software Engineer"
 */
export async function useTranslations(lang: Language = "en") {
  const translations = translationCache[lang] ?? translationCache.en;
  return { t: createTranslator(translations), translations, lang };
}

/**
 * Detect language from a URL or cookie string.
 * Returns 'en' as default.
 */
export function detectLang(input?: string | null): Language {
  if (input === "es") return "es";
  return "es";
}

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇦🇷" },
];
