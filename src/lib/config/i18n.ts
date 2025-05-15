import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from '../../locales/en.json';
import ptTranslation from '../../locales/pt.json';
import esTranslation from '../../locales/es.json'; // Importando tradução em espanhol

/**
 * Initialize i18n configuration
 * - Uses language detector to automatically detect user's language
 * - Supports English, Portuguese and Spanish
 * - Fallbacks to English when a translation is missing
 * - Caches language preference in localStorage
 */
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      pt: {
        translation: ptTranslation
      },
      es: {
        translation: esTranslation
      }
    },
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    // Ensure consistent pluralization and formatting
    pluralSeparator: '_',
    keySeparator: '.',
    // Missing key handling
    saveMissing: process.env.NODE_ENV === 'development',
    missingKeyHandler: (lng, ns, key) => {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Missing translation key: ${key} for language: ${lng} in namespace: ${ns}`);
      }
    }
  });

export default i18n;