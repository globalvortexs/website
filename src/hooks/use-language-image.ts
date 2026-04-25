import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, type SupportedLanguage } from "../utils/constants";

const normalizeLanguage = (lang: string): SupportedLanguage => {
  const code = lang.substring(0, 2).toLowerCase() as SupportedLanguage;
  return SUPPORTED_LANGUAGES.includes(code) ? code : DEFAULT_LANGUAGE;
};

/**
 * Resolve o caminho de uma imagem traduzida em `/assets/language-img/<lang>/<basename>-<lang>.jpg`.
 * Faz fallback para o idioma padrão quando o atual não está suportado.
 */
export const useLanguageImage = (basename: string) => {
  const { i18n } = useTranslation();
  return useMemo(() => {
    const lang = normalizeLanguage(i18n.language);
    return `/assets/language-img/${lang}/${basename}-${lang}.jpg`;
  }, [i18n.language, basename]);
};
