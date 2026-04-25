# Global Vortex Website

Site institucional da **Global Vortex Solutions** — uma single-page application multilíngue (PT/EN/ES) que apresenta a empresa, os serviços e o produto Nucleus, com página de detalhe dedicada.

> **Stack:** React 18 · Vite 6 · TypeScript · HeroUI · TailwindCSS · framer-motion · i18next

---

## Sumário

- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Como rodar localmente](#como-rodar-localmente)
- [Scripts disponíveis](#scripts-disponíveis)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Decisões arquiteturais](#decisões-arquiteturais)
- [Boas práticas aplicadas](#boas-práticas-aplicadas)
- [Performance](#performance)
- [Segurança](#segurança)
- [Acessibilidade](#acessibilidade)
- [Internacionalização](#internacionalização)
- [Adicionando um novo produto](#adicionando-um-novo-produto)
- [Possíveis melhorias futuras](#possíveis-melhorias-futuras)

---

## Tecnologias

| Categoria        | Pacote                                       | Uso                                       |
| ---------------- | -------------------------------------------- | ----------------------------------------- |
| Build            | `vite` 6                                     | Dev server + bundler                      |
| Linguagem        | `typescript` 5                               | Tipagem estática                          |
| UI framework     | `react` 18 / `react-dom` 18                  | Renderização                              |
| Design system    | `@heroui/react` + `@heroui/use-theme`        | Componentes acessíveis e tema light/dark  |
| Estilo           | `tailwindcss` 3 + `autoprefixer` + `postcss` | Utility-first CSS                         |
| Ícones           | `@iconify/react` (`@iconify/json`)           | Lucide + Heroicons sob demanda            |
| Animação         | `framer-motion` 11                           | Carrossel e transições                    |
| i18n             | `i18next` + `react-i18next` + detector       | Traduções PT/EN/ES                        |
| Lint             | `eslint` 8 + `@typescript-eslint`            | Linting                                   |
| Deploy           | `gh-pages`                                   | Publicação no GitHub Pages                |

---

## Estrutura do projeto

```
src/
├── App.tsx                      # router por hash + Suspense + ErrorBoundary
├── main.tsx                     # bootstrap do React + providers
│
├── components/
│   ├── common/                  # widgets reutilizáveis em qualquer página
│   │   ├── language-switcher.tsx
│   │   ├── social-links.tsx     # botões de redes sociais (deduplicado)
│   │   └── theme-switcher.tsx
│   ├── layout/                  # componentes que aparecem em toda página
│   │   ├── error-boundary.tsx   # captura erros de render e mostra fallback
│   │   ├── footer.tsx
│   │   ├── navbar.tsx
│   │   └── page-loader.tsx      # fallback do Suspense
│   ├── sections/                # blocos grandes da home + cards de listas
│   │   ├── about.tsx
│   │   ├── contact-info.tsx
│   │   ├── hero.tsx
│   │   ├── product-card.tsx     # card individual (memoizado)
│   │   ├── products.tsx         # lista, itera PRODUCTS
│   │   ├── service-card.tsx     # card de serviço (memoizado)
│   │   └── services.tsx         # carrossel
│   └── ui/                      # primitivos visuais
│       ├── icon-badge.tsx
│       └── section-header.tsx
│
├── config/
│   └── i18n.ts                  # bootstrap do i18next (DEV-aware)
│
├── data/
│   └── products.ts              # catálogo + helper findProductBySlug
│
├── hooks/                       # lógica reutilizável (separada da UI)
│   ├── use-carousel.ts
│   ├── use-hash-route.ts
│   ├── use-language-image.ts
│   └── use-swipe.ts
│
├── locales/                     # traduções (en, pt, es)
│   ├── en.json
│   ├── es.json
│   └── pt.json
│
├── pages/                       # uma rota = um arquivo
│   ├── home.tsx
│   ├── product-detail.tsx       # lazy
│   └── product-not-found.tsx    # lazy
│
├── styles/
│   └── index.css                # tailwind + globals + skip-link
│
└── utils/
    ├── constants.ts             # COMPANY_NAME, SOCIAL_LINKS, lang config
    └── scroll.ts                # scrollToAnchor (pages + home âncoras)
```

| Pasta         | Papel                                                                |
| ------------- | -------------------------------------------------------------------- |
| `components/` | Componentes visuais (sem rota dedicada). Subdividido por escopo.     |
| `pages/`      | Páginas alcançáveis via roteador. Cada arquivo é um chunk potencial. |
| `hooks/`      | Lógica reutilizável que retorna estado/handlers, sem JSX.            |
| `data/`       | Dados estáticos do domínio (catálogo, listagens).                    |
| `config/`     | Setup de bibliotecas (i18n, etc).                                    |
| `utils/`      | Helpers puros e constantes.                                          |
| `locales/`    | Recursos de tradução (carregados estaticamente).                     |
| `styles/`     | CSS global (`@tailwind` + reset + tipografia).                       |

---

## Pré-requisitos

- **Node.js** ≥ 18
- **npm** ≥ 9 (ou pnpm/yarn equivalentes)

---

## Como rodar localmente

```bash
# 1. Clonar
git clone https://github.com/globalvortexs/website.git
cd website

# 2. Instalar dependências
npm install

# 3. Rodar em modo desenvolvimento
npm run dev
# Vite sobe em http://localhost:5173

# 4. Build de produção
npm run build

# 5. Pré-visualizar o build
npm run preview
```

---

## Scripts disponíveis

| Script             | O que faz                                                    |
| ------------------ | ------------------------------------------------------------ |
| `npm run dev`      | Sobe o dev server com HMR (Vite).                            |
| `npm run build`    | Roda `tsc` + `vite build` em `dist/`.                        |
| `npm run preview`  | Serve o build estático para inspeção local.                  |
| `npm run lint`     | Rodar ESLint com `--max-warnings 0`.                         |
| `npm run cleanup`  | `npm prune` para remover dependências não usadas.            |
| `npm run deploy`   | Faz o build e publica no GitHub Pages com domínio custom.    |

---

## Variáveis de ambiente

O projeto **não exige variáveis de ambiente** para rodar — todo o conteúdo é estático e os textos vêm dos arquivos em `src/locales/`. Caso novas integrações sejam adicionadas:

1. Crie um arquivo `.env.local` na raiz (já está em `.gitignore`).
2. Use o prefixo `VITE_` para qualquer variável que precise estar disponível no client (Vite exige isso por segurança).
3. Acesse via `import.meta.env.VITE_MINHA_VAR`.

> ⚠️ **Nunca** coloque secrets/API keys no código frontend ou em variáveis com prefixo `VITE_` — elas vão para o bundle público. Secrets pertencem ao backend.

Variáveis built-in do Vite:

- `import.meta.env.DEV` — `true` em desenvolvimento.
- `import.meta.env.PROD` — `true` em produção.
- `import.meta.env.MODE` — `"development"` | `"production"`.

---

## Decisões arquiteturais

### Roteamento por hash, sem `react-router`

A aplicação possui poucas páginas e é hospedada em GitHub Pages (que não suporta history API sem fallback). Adotamos um roteador caseiro baseado em hash (`useHashRoute`). Convenção:

- `#home`, `#products`, `#contact`, … → âncoras dentro da Home (rolagem suave).
- `#/produto/:slug` → rota de página (renderiza componente diferente).

A distinção é o prefixo `#/`. Isso evita adicionar uma dependência (~35 kB minified de `react-router`) para um caso de uso simples e mantém compatibilidade com o GH Pages.

### Componentização em quatro camadas

- **`ui/`**: primitivos visuais sem domínio (ex.: `SectionHeader`, `IconBadge`).
- **`common/`**: widgets reutilizáveis com comportamento (`SocialLinks`, `ThemeSwitcher`).
- **`sections/`**: blocos grandes específicos da Home e cards de listas (`ProductCard`, `ServiceCard`).
- **`layout/`**: aparece em todas as páginas (`Navbar`, `Footer`, `ErrorBoundary`, `PageLoader`).

### Separação lógica × UI via hooks

Toda lógica complexa fica em hooks dedicados:

- `useCarousel` — estado, autoplay e índice circular do carrossel de Services.
- `useSwipe` — detecção de gesto horizontal em touch devices.
- `useHashRoute` — roteamento.
- `useLanguageImage` — resolve o caminho de uma imagem traduzida.

A UI (`Services`, `ProductCard`, etc.) só consome os hooks, ficando declarativa e fácil de ler.

### Fonte única de verdade para produtos

`src/data/products.ts` é o único lugar onde se declara um produto. Qualquer card, página de detalhe ou helper deriva dali. Adicionar um novo produto é adicionar um item no array (ver [Adicionando um novo produto](#adicionando-um-novo-produto)).

### i18n por chaves, não por componentes

Todo conteúdo textual vem de `t('chave')`. Não há strings hard-coded em componentes — facilita auditoria, troca de tom e tradução para novos idiomas.

---

## Boas práticas aplicadas

- ✅ **Separação UI / lógica** via hooks customizados.
- ✅ **Barrel exports** por pasta (`index.ts`) para imports limpos.
- ✅ **Memoização** em componentes de listas (`ProductCard`, `ServiceCard`, `SocialLinks`).
- ✅ **Code splitting** das páginas secundárias com `React.lazy` + `Suspense`.
- ✅ **ErrorBoundary** envolvendo as rotas para capturar erros de render.
- ✅ **Skip-link** para usuários de teclado.
- ✅ **Imports ordenados**: externos → internos absolutos → relativos.
- ✅ **Constantes centralizadas** em `utils/constants.ts`.
- ✅ **Sem código morto**: removidos `axios`, formulário com API key vazada e placeholders não utilizados.
- ✅ **TypeScript estrito** (`strict`, `noUnusedLocals`, `noUnusedParameters`).

---

## Performance

| Otimização                    | Onde                                        | Por quê                                                                                  |
| ----------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Lazy loading de páginas**   | `App.tsx`                                   | `ProductDetailPage` e `ProductNotFoundPage` viram chunks separados. Bundle inicial menor. |
| **Suspense + PageLoader**     | `App.tsx`                                   | Evita tela em branco durante o carregamento dos chunks.                                  |
| **`React.memo`**              | `ProductCard`, `ServiceCard`, `SocialLinks` | Cards renderizados em listas não re-renderizam quando o pai atualiza por outro motivo.   |
| **`useCallback` em handlers** | `Navbar`, `Services`                        | Handlers passados a botões mantêm identidade estável → memoização funciona.              |
| **`useMemo` em derivados**    | `useLanguageImage`                          | Recalcula path apenas quando idioma muda.                                                |
| **Iconify on-demand**         | `@iconify/react`                            | Apenas os ícones realmente usados são incluídos no bundle.                               |

Bundle final (após refactor): **666 kB / 207 kB gzip** + 5 kB (lazy product detail) + 1 kB (lazy not-found).

---

## Segurança

- 🔒 **Sem chaves de API no código frontend.** O formulário antigo com API key SMTP2GO embutida foi removido.
- 🔒 **`i18next` com `escapeValue: true`**: toda interpolação é HTML-escaped → seguro contra XSS via tradução.
- 🔒 **Sem `dangerouslySetInnerHTML`** em nenhum componente.
- 🔒 **`rel="noopener noreferrer"`** em todos os `target="_blank"` (links sociais).
- 🔒 **Content Security Policy** declarada em `index.html` restringe origens de script/style/font/img/connect.
- 🔒 **Variáveis de ambiente:** apenas `import.meta.env.*` (Vite). Nada de `process.env` no client. Variáveis públicas devem ter prefixo `VITE_`.
- 🔒 **ErrorBoundary** evita que erros vazem stack traces para o usuário em produção.
- 🔒 **Logs de dev gated por `import.meta.env.DEV`** — produção não loga estado interno.

> **Recomendações futuras:** adicionar Subresource Integrity (SRI) ao script externo `cdn.jsdelivr.net` em `index.html`, ou removê-lo se não for usado.

---

## Acessibilidade

- ✅ Skip-link "Pular para o conteúdo" no início do `<body>`.
- ✅ `aria-label` em todos os botões com ícone-only.
- ✅ `aria-roledescription="carousel"` + `aria-live="polite"` no carrossel.
- ✅ `aria-current` no indicador ativo do carrossel.
- ✅ `aria-hidden="true"` em decorações puramente visuais (gradientes, blurs).
- ✅ Foco visível com `*:focus-visible` ring no tema HeroUI.
- ✅ `scroll-padding-top` para que âncoras não fiquem cobertas pelo header sticky.
- ✅ Hierarquia de headings consistente (`h1` por página, `h2` por seção).

---

## Internacionalização

- Idiomas suportados: **pt**, **en**, **es** (definidos em `utils/constants.ts`).
- Detecção automática: `localStorage` → `navigator.language` → fallback `en`.
- Trocador de idioma no Navbar (desktop + mobile).
- Imagens com texto traduzido seguem a convenção `/assets/language-img/<lang>/<basename>-<lang>.jpg` e são resolvidas pelo hook `useLanguageImage`.

Adicionar um novo idioma:

1. Criar `src/locales/<code>.json` espelhando a estrutura dos arquivos existentes.
2. Importar e registrar em `src/config/i18n.ts`.
3. Adicionar o code em `SUPPORTED_LANGUAGES` (`utils/constants.ts`).
4. Adicionar a opção no array `languages` do `language-switcher.tsx`.
5. Subir as imagens traduzidas em `public/assets/language-img/<code>/`.

---

## Adicionando um novo produto

1. **Criar metadata** em `src/data/products.ts`:

   ```ts
   export const PRODUCTS: Product[] = [
     // ...nucleus,
     {
       slug: "atlas",
       i18nKey: "atlas",
       icon: "heroicons:globe-alt",
       logo: "/assets/logo-atlas-branca.png",
       image: "/assets/product/product-atlas.jpg",
       accentBg: "#1f3b3a",
       features: [
         { key: "scaling", icon: "lucide:trending-up" },
         { key: "regions", icon: "lucide:map-pin" },
       ],
     },
   ];
   ```

2. **Adicionar traduções** em `src/locales/{en,pt,es}.json` sob `products.atlas`:

   ```json
   "atlas": {
     "slogan": "...",
     "description": "...",
     "features": { "scaling": "...", "regions": "..." },
     "featuresDescription": { "scaling": "...", "regions": "..." }
   }
   ```

3. **Subir os assets** em `public/assets/`.

Pronto — o card aparece automaticamente na home (`/`) e a rota `#/produto/atlas` renderiza a página de detalhe sem código adicional.

---

## Possíveis melhorias futuras

- 📈 **Pré-renderização estática** (SSG via `vite-plugin-ssr` ou Astro) para melhorar SEO e LCP.
- 📈 **`manualChunks`** no Vite para separar `framer-motion`, `@heroui/react` e `i18next` do chunk principal.
- 📈 **Image optimization** com `vite-imagetools` (avif/webp + responsive srcset).
- 🧪 **Testes**: adicionar Vitest + Testing Library para hooks (`useCarousel`, `useHashRoute`) e componentes críticos.
- 🧪 **Playwright/Cypress** para um smoke test E2E (home → produto → contato).
- 🌐 **Sitemap.xml + robots.txt** dinâmicos.
- 📊 **Web Vitals** (RUM via web-vitals + endpoint próprio) para monitorar performance real.
- 🎨 **Storybook** para documentar componentes em `ui/` e `common/`.
- 🔁 **CI**: GitHub Actions com `npm ci && npm run lint && npm run build`.

---

## Licença

Veja [LICENSE](./LICENSE).
