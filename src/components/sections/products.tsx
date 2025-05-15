import { Card, CardBody, Button, CardHeader, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../ui";
// Use public assets with absolute paths
const nucleusLogoImage = "/assets/logo-nucleus-branca.png";
const nucleusProductImage = "/assets/product/product-nucleus.jpg";

export const Products = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <SectionHeader
        title={t('products.title')}
        subtitle={t('products.subtitle')}
        tagline={t('products.tagline')}
        taglineIcon="lucide:package"
      />

      <div className="flex justify-center">
        <Card
          className="border border-divider max-w-md w-full bg-content1 overflow-hidden"
          shadow="md"
          isHoverable
        >
          <CardHeader className="flex flex-row justify-between overflow-hidden p-0 bg-[#202c46]">
            <div className="p-5 md:p-6 flex flex-col items-start max-w-[55%]">
              <div className="flex items-center mb-3">
                <Image
                  alt="Nucleus Product Logo"
                  className="w-6 md:w-7 mr-2"
                  src={nucleusLogoImage}
                />
                <h3 className="text-xl md:text-2xl font-bold text-white">Nucleus</h3>
              </div>
              <p className="text-white text-sm mb-3 md:mb-4 line-clamp-3">
                {t('products.nucleus.slogan')}
              </p>
            </div>
            <div className="flex items-center justify-center flex-1">
              <Image
                alt="Nucleus Product"
                className="object-contain h-auto max-h-[160px] md:max-h-[180px]"
                src={nucleusProductImage}
              />
            </div>
          </CardHeader>
          <CardBody className="p-4 md:p-6">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <div className="p-1.5 md:p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <Icon icon="heroicons:cube-transparent" className="text-primary text-base md:text-xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold">Nucleus</h3>
            </div>
            <p className="text-default-600 text-xs md:text-sm mb-3 md:mb-4 min-h-[40px]">
              {t('products.nucleus.description')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-3 mb-4">
              <div className="flex items-start gap-2">
                <Icon icon="heroicons:check-circle" className="text-primary mt-0.5 flex-shrink-0 text-lg" />
                <p className="text-default-600 text-xs md:text-sm">{t('products.nucleus.features.integration')}</p>
              </div>
              <div className="flex items-start gap-2">
                <Icon icon="heroicons:check-circle" className="text-primary mt-0.5 flex-shrink-0 text-lg" />
                <p className="text-default-600 text-xs md:text-sm">{t('products.nucleus.features.monitoring')}</p>
              </div>
              <div className="flex items-start gap-2">
                <Icon icon="heroicons:check-circle" className="text-primary mt-0.5 flex-shrink-0 text-lg" />
                <p className="text-default-600 text-xs md:text-sm">{t('products.nucleus.features.dashboard')}</p>
              </div>
              <div className="flex items-start gap-2">
                <Icon icon="heroicons:check-circle" className="text-primary mt-0.5 flex-shrink-0 text-lg" />
                <p className="text-default-600 text-xs md:text-sm">{t('products.nucleus.features.reports')}</p>
              </div>
            </div>
            <Button
              color="primary"
              variant="shadow"
              className="w-full"
              size="md"
              endContent={<Icon icon="heroicons:arrow-right" />}
              as="a"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('products.learnMore')}
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};