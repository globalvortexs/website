import { memo } from "react";
import { Button, Card, CardBody, CardHeader, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { productDetailHref, type Product } from "../../data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCardImpl = ({ product }: ProductCardProps) => {
  const { t } = useTranslation();
  const baseKey = `products.${product.i18nKey}`;
  const displayName = product.displayName ?? product.slug;

  return (
    <Card
      className="border border-divider w-full max-w-md bg-content1 overflow-hidden h-full flex flex-col"
      shadow="md"
      isHoverable
    >
      <CardHeader
        className="flex flex-row justify-between overflow-hidden p-0 h-48 md:h-52 shrink-0"
        style={{ backgroundColor: product.accentBg }}
      >
        <div className="p-5 md:p-6 flex flex-col items-start w-[55%]">
          <div className="flex items-center gap-2 mb-3 h-9 md:h-10">
            <div className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-md bg-white/10 shrink-0">
              {product.logo ? (
                <Image
                  alt={`${displayName} logo`}
                  classNames={{ wrapper: "!max-w-none", img: "object-contain max-h-6 md:max-h-7" }}
                  src={product.logo}
                />
              ) : (
                <Icon icon={product.icon} className="text-white text-lg md:text-xl" />
              )}
            </div>
            <h3
              className={`text-xl md:text-2xl font-bold text-white truncate ${
                product.displayName ? "" : "capitalize"
              }`}
            >
              {displayName}
            </h3>
          </div>
          <p className="text-white text-sm line-clamp-3">
            {t(`${baseKey}.slogan`)}
          </p>
        </div>
        <div className="flex items-center justify-center w-[45%] p-3">
          {product.image ? (
            <Image
              alt={`${displayName} preview`}
              classNames={{
                wrapper: "!max-w-none w-full h-full flex items-center justify-center",
                img: "object-contain max-h-full max-w-full",
              }}
              src={product.image}
            />
          ) : (
            <ProductCardFallbackArt icon={product.icon} />
          )}
        </div>
      </CardHeader>

      <CardBody className="p-4 md:p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
          <div className="p-1.5 md:p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
            <Icon icon={product.icon} className="text-primary text-base md:text-xl" />
          </div>
          <h3
            className={`text-lg md:text-xl font-bold ${
              product.displayName ? "" : "capitalize"
            }`}
          >
            {displayName}
          </h3>
        </div>

        <p className="text-default-600 text-xs md:text-sm mb-4 line-clamp-3 min-h-[3.75rem]">
          {t(`${baseKey}.description`)}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-3 mb-4">
          {product.features.map((feature) => (
            <div key={feature.key} className="flex items-start gap-2">
              <Icon
                icon="heroicons:check-circle"
                className="text-primary mt-0.5 flex-shrink-0 text-lg"
              />
              <p className="text-default-600 text-xs md:text-sm">
                {t(`${baseKey}.features.${feature.key}`)}
              </p>
            </div>
          ))}
        </div>

        <Button
          color="primary"
          variant="shadow"
          className="w-full mt-auto"
          size="md"
          endContent={<Icon icon="heroicons:arrow-right" />}
          as="a"
          href={productDetailHref(product.slug)}
        >
          {t("products.learnMore")}
        </Button>
      </CardBody>
    </Card>
  );
};

export const ProductCard = memo(ProductCardImpl);
ProductCard.displayName = "ProductCard";

const ProductCardFallbackArt = ({ icon }: { icon: string }) => (
  <div
    className="flex items-center justify-center w-full h-full"
    aria-hidden="true"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full" />
      <div className="relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
        <Icon icon={icon} className="text-white text-4xl md:text-5xl" />
      </div>
    </div>
  </div>
);
