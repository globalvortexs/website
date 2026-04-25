/**
 * Constantes globais consumidas em vários pontos da UI.
 * Mantido enxuto: tudo aqui é estável e público (não há dados sensíveis).
 */

export const COMPANY_NAME = "Global Vortex";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/globalvortexs",
  twitter: "https://twitter.com/globalvortexs",
  facebook: "https://facebook.com/globalvortexs",
  instagram: "https://instagram.com/globalvortexs",
} as const;

export const SUPPORTED_LANGUAGES = ["en", "pt", "es"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANGUAGE: SupportedLanguage = "en";
