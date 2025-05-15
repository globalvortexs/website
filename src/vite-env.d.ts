/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SMTP2GO_API_URL: string
  readonly VITE_SMTP2GO_API_KEY: string
  readonly VITE_EMAIL_CONTACT: string
  // outras variáveis de ambiente...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
