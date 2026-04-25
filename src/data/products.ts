/**
 * Catálogo de produtos da Global Vortex.
 *
 * Os textos (nome, slogan, descrição, features) ficam nos arquivos de i18n
 * sob a chave `products.<i18nKey>.*`. Aqui mantemos apenas os metadados
 * que NÃO são traduzíveis (slug, ícones, imagens, paleta).
 */
export interface ProductFeature {
  /** Chave dentro de `products.<i18nKey>.features` no arquivo de locale. */
  key: string;
  icon: string;
}

export interface Product {
  slug: string;
  i18nKey: string;
  icon: string;
  /** Logo bitmap. Quando ausente, o card usa o `icon` como fallback. */
  logo?: string;
  /** Imagem de destaque do card. Quando ausente, o card mostra um preview por ícone. */
  image?: string;
  /** Nome exibido. Quando ausente, o slug é usado (capitalizado). */
  displayName?: string;
  accentBg: string;
  features: ProductFeature[];
}

export const PRODUCTS: Product[] = [
  {
    slug: "nucleus",
    i18nKey: "nucleus",
    icon: "heroicons:cube-transparent",
    logo: "/assets/logo-nucleus-branca.png",
    image: "/assets/product/product-nucleus.jpg",
    accentBg: "#202c46",
    features: [
      { key: "registration", icon: "lucide:plug" },
      { key: "proxy", icon: "lucide:shield-check" },
      { key: "monitoring", icon: "lucide:activity" },
      { key: "panel", icon: "lucide:layout-dashboard" },
    ],
  },
  {
    slug: "cnab240",
    i18nKey: "cnab240",
    displayName: "Mapper240",
    icon: "lucide:landmark",
    accentBg: "#0d2840",
    features: [
      { key: "upload", icon: "lucide:upload-cloud" },
      { key: "largeFiles", icon: "lucide:database" },
      { key: "metadata", icon: "lucide:file-search" },
      { key: "dashboard", icon: "lucide:layout-dashboard" },
    ],
  },
];

export const findProductBySlug = (slug: string): Product | undefined =>
  PRODUCTS.find((product) => product.slug === slug);

export const productDetailHref = (slug: string) => `#/produto/${slug}`;
