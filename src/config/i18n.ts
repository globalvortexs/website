import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "../locales/en.json";
import ptTranslation from "../locales/pt.json";
import esTranslation from "../locales/es.json";

const isDev = import.meta.env.DEV;

/**
 * Configuração do i18n.
 *  - Detecta idioma do navegador / localStorage
 *  - Suporta en, pt, es (fallback en)
 *  - i18next escapa interpolação por padrão -> seguro contra XSS
 *  - Logs de chave faltante apenas em dev
 */
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      pt: { translation: ptTranslation },
      es: { translation: esTranslation },
    },
    fallbackLng: "en",
    debug: isDev,
    interpolation: {
      escapeValue: true,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    pluralSeparator: "_",
    keySeparator: ".",
    saveMissing: isDev,
    missingKeyHandler: (lng, ns, key) => {
      if (isDev) {
        // eslint-disable-next-line no-console
        console.warn(`[i18n] Missing key: ${key} (lng=${lng}, ns=${ns})`);
      }
    },
  });

export default i18n;
