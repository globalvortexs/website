# Global Vortex Solutions

<div align="center">
  <img src="./public/assets/icon-vortex.png" alt="Global Vortex Logo" width="120" />
  <h3>Website Corporativo Profissional</h3>
  <p>Uma plataforma moderna, responsiva e multilíngue</p>

  ![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
  ![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss)
</div>

## Visão Geral

O website corporativo da Global Vortex Solutions foi projetado com arquitetura escalável e modular, implementando as melhores práticas de desenvolvimento web moderno. Construído com React 18, TypeScript 5 e HeroUI (framework baseado em Tailwind CSS), o projeto oferece excelente experiência do usuário com design responsivo e temático.

### Principais características

- **Design moderno e responsivo** adaptado para todos os dispositivos
- **Suporte multilíngue** para Português, Inglês e Espanhol
- **Modo claro/escuro** com detecção automática de preferências do sistema
- **Formulário de contato integrado** com validação e envio de emails
- **Organização modular** com componentes reutilizáveis
- **Animações fluidas** para experiência de usuário agradável

## Tecnologias

O projeto utiliza um conjunto de tecnologias modernas e bem estabelecidas:

| Tecnologia | Versão | Função |
|------------|--------|--------|
| [React](https://reactjs.org/) | 18.3.1 | Framework principal para UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.7.3 | Linguagem de desenvolvimento com tipagem estática |
| [Vite](https://vitejs.dev/) | 6.0.11 | Build tool e servidor de desenvolvimento |
| [HeroUI](https://heroui.com/) | 2.7.8 | Framework de componentes UI |
| [TailwindCSS](https://tailwindcss.com/) | 3.4.17 | Framework CSS utilitário |
| [i18next](https://www.i18next.com/) | 23.10.0 | Internacionalização |
| [Framer Motion](https://www.framer.com/motion/) | 11.18.2 | Biblioteca de animações |
| [Axios](https://axios-http.com/) | 1.9.0 | Cliente HTTP para API REST |

## Arquitetura e Estrutura do Projeto

O projeto segue princípios SOLID e Clean Architecture, com separação clara de responsabilidades:

```
src/
├── components/             # Componentes de interface organizados por domínio
│   ├── common/             # Componentes compartilhados (ThemeSwitcher, LanguageSwitcher)
│   ├── layout/             # Componentes estruturais (Footer)
│   ├── sections/           # Seções da página principal (Hero, Products, etc)
│   └── ui/                 # Componentes de UI reutilizáveis (SectionHeader)
├── lib/                    # Código de infraestrutura e utilitários
│   ├── config/             # Configurações de sistemas (i18n)
│   ├── hooks/              # React hooks personalizados (useFormValidation)
│   ├── services/           # Serviços externos (API de email)
│   └── utils/              # Utilitários e constantes
├── locales/                # Arquivos de tradução JSON
├── App.tsx                 # Componente raiz da aplicação
└── main.tsx                # Ponto de entrada da aplicação
```

## Internacionalização

O sistema de internacionalização implementa:

- **Detecção automática** do idioma preferencial do navegador
- **Persistência de preferências** via localStorage
- **Conteúdo localizado** incluindo:
  - Textos e descrições (via arquivo JSON)
  - Imagens específicas por idioma
  - Formatação apropriada para cada cultura

Idiomas suportados:
- 🇧🇷 **Português** (Brasil)
- 🇺🇸 **Inglês** (EUA)
- 🇪🇸 **Espanhol** (ES)

## Instalação e Configuração

### Pré-requisitos

- Node.js (v18+)
- npm (v9+)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/global-vortex/website.git
cd website

# Instale as dependências
npm install
```

### Variáveis de Ambiente

Configure as variáveis de ambiente criando um arquivo `.env.local`:

```
# API de Email
VITE_SMTP2GO_API_KEY=sua_chave_api
VITE_SMTP2GO_API_URL=https://api.smtp2go.com/v3
VITE_EMAIL_CONTACT=contact@globalvortexs.com
```

## Comandos disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão otimizada de produção |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Executa verificação de lint no código |
| `npm run cleanup` | Remove dependências não utilizadas |
| `npm run deploy` | Faz deploy da aplicação para GitHub Pages |

## Sistema de Formulário de Contato

O formulário de contato implementa:

- **Validações em tempo real** dos campos de entrada
- **Suporte multilíngue** para mensagens de erro e sucesso
- **Integração direta** com a API REST do SMTP2Go
- **Tratamento de erros** com feedback visual apropriado
- **Design responsivo** adaptado a dispositivos móveis

### Configuração da Integração de Email

1. Crie uma conta no [SMTP2Go](https://www.smtp2go.com/)
2. Gere uma chave API com permissões de envio de email
3. Adicione a chave ao arquivo `.env.local`
4. Configure um template de email na plataforma SMTP2Go (opcional)

## Deploy e CI/CD

O projeto utiliza GitHub Actions para CI/CD com:

- **Build e testes automáticos** para cada Pull Request
- **Deploy automático** para GitHub Pages após merge na branch main
- **Configuração de domínio personalizado** via arquivo CNAME

### Processo de Deploy Manual

```bash
# Gere o build de produção
npm run build

# Faça o deploy para GitHub Pages
npm run deploy
```

## Padrões e Convenções de Código

O projeto segue padrões estritos de qualidade de código:

- **ESLint e TypeScript** para garantir qualidade e consistência
- **Componentes funcionais** com React Hooks
- **Tipagem estrita** em todos os componentes e funções
- **Testes de componentes** para garantir estabilidade 
- **Nomes descritivos** seguindo convenções estabelecidas
- **Documentação inline** para código complexo

### Convenções de nomeação:

- **Componentes React:** PascalCase (ex: `SectionHeader.tsx`)
- **Hooks personalizados:** camelCase com prefixo "use" (ex: `useFormValidation.ts`)
- **Arquivos de utilitários:** camelCase (ex: `constants.ts`)
- **Constantes:** UPPER_SNAKE_CASE (ex: `COMPANY_NAME`)

## Acessibilidade e Performance

O projeto prioriza:

- **Acessibilidade WCAG 2.1** com semântica apropriada
- **Otimização de carregamento** com Code Splitting e Lazy Loading
- **SEO otimizado** com meta tags apropriadas
- **Performance** com bundle size otimizado

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Implemente suas mudanças com testes apropriados
4. Certifique-se de que o código está em conformidade com padrões do projeto
5. Envie um Pull Request detalhando as mudanças realizadas

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](./LICENSE) para detalhes.

## Contato e Suporte

Para suporte técnico ou dúvidas sobre o projeto:
- Email: suporte@globalvortexs.com

---

<div align="center">
  <p>Desenvolvido com ❤️ pela equipe Global Vortex Solutions</p>
  <p>© 2025 Global Vortex Solutions. Todos os direitos reservados.</p>
</div>