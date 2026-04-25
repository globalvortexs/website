import { useEffect } from "react";
import type { MouseEvent } from "react";
import { Button, Card, CardBody, Image, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { findProductBySlug } from "../data/products";
import { SectionHeader } from "../components/ui";
import { scrollToAnchor } from "../utils/scroll";
import { ProductNotFoundPage } from "./product-not-found";

interface ProductDetailPageProps {
  slug: string;
}

export const ProductDetailPage = ({ slug }: ProductDetailPageProps) => {
  const { t } = useTranslation();
  const product = findProductBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!product) {
    return <ProductNotFoundPage />;
  }

  const handleContactClick = (event: MouseEvent) => {
    event.preventDefault();
    scrollToAnchor("contact");
  };

  const baseKey = `products.${product.i18nKey}`;
  const productName = product.slug;

  return (
    <>
      <section className="relative bg-background pt-12 pb-12 md:pt-16 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl" />
          <div className="absolute top-40 -left-20 w-60 h-60 bg-primary/5 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <Link
            href="#products"
            color="foreground"
            className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:text-primary"
          >
            <Icon icon="lucide:arrow-left" className="text-base" />
            {t("products.backToProducts")}
          </Link>

          <Card className="border border-divider overflow-hidden" shadow="md">
            <div
              className="flex flex-col md:flex-row items-stretch"
              style={{ backgroundColor: product.accentBg }}
            >
              <div className="flex-1 p-6 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-white/10 text-white text-xs md:text-sm font-medium w-fit">
                  <Icon icon="lucide:tag" className="mr-2 text-base" />
                  {t("products.category")}
                </div>
                <div className="flex items-center mb-3">
                  <Image
                    alt={`${productName} logo`}
                    className="w-7 md:w-8 mr-3"
                    src={product.logo}
                  />
                  <h1 className="text-3xl md:text-4xl font-bold text-white capitalize">
                    {productName}
                  </h1>
                </div>
                <p className="text-white/90 text-base md:text-lg mb-6 max-w-xl">
                  {t(`${baseKey}.slogan`)}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    color="primary"
                    variant="shadow"
                    size="lg"
                    startContent={<Icon icon="lucide:message-circle" />}
                    className="font-medium"
                    as="a"
                    href="#contact"
                    onClick={handleContactClick}
                  >
                    {t("products.ctaButton")}
                  </Button>
                  <Button
                    variant="bordered"
                    size="lg"
                    className="font-medium text-white border-white/40 hover:bg-white/10"
                    as="a"
                    href="#products"
                    startContent={<Icon icon="lucide:arrow-left" />}
                  >
                    {t("products.backToProducts")}
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center p-6 md:p-8 md:max-w-[45%]">
                <Image
                  alt={t(`${baseKey}.slogan`)}
                  className="object-contain max-h-[220px] md:max-h-[260px]"
                  src={product.image}
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-content1">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t("products.overviewTitle")}
            tagline={t("products.tagline")}
            taglineIcon="lucide:package"
          />
          <div className="max-w-3xl mx-auto">
            <p className="text-default-600 text-base md:text-lg leading-relaxed text-center">
              {t(`${baseKey}.description`)}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={t("products.featuresTitle")}
            tagline={t("products.tagline")}
            taglineIcon="lucide:sparkles"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
            {product.features.map((feature) => (
              <Card
                key={feature.key}
                className="border border-divider bg-content1"
                shadow="sm"
                isHoverable
              >
                <CardBody className="p-5 md:p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                      <Icon icon={feature.icon} className="text-primary text-xl md:text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold mb-1">
                        {t(`${baseKey}.features.${feature.key}`)}
                      </h3>
                      <p className="text-default-600 text-sm md:text-base">
                        {t(`${baseKey}.featuresDescription.${feature.key}`, {
                          defaultValue: t(`${baseKey}.features.${feature.key}`),
                        })}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-content1">
        <div className="container mx-auto px-4">
          <Card className="border border-divider bg-background" shadow="md">
            <CardBody className="p-8 md:p-12 text-center">
              <div className="inline-flex p-3 rounded-2xl bg-primary/10 mb-4 mx-auto">
                <Icon icon={product.icon} className="text-primary text-2xl md:text-3xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{t("products.ctaTitle")}</h2>
              <p className="text-default-600 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                {t("products.ctaSubtitle")}
              </p>
              <Button
                color="primary"
                variant="shadow"
                size="lg"
                startContent={<Icon icon="lucide:message-circle" />}
                className="font-medium"
                as="a"
                href="#contact"
                onClick={handleContactClick}
              >
                {t("products.ctaButton")}
              </Button>
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
