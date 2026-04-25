import { useTranslation } from "react-i18next";
import { PRODUCTS } from "../../data/products";
import { SectionHeader } from "../ui";
import { ProductCard } from "./product-card";

export const Products = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <SectionHeader
        title={t("products.title")}
        subtitle={t("products.subtitle")}
        tagline={t("products.tagline")}
        taglineIcon="lucide:package"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto justify-items-center">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
};
