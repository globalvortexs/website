import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

export const ProductNotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <Card className="border border-divider max-w-2xl mx-auto" shadow="md">
          <CardBody className="p-8 md:p-12 text-center">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6 mx-auto">
              <Icon icon="lucide:package-x" className="text-primary text-3xl md:text-4xl" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-3">{t("products.notFound.title")}</h1>
            <p className="text-default-600 text-base md:text-lg mb-8 max-w-md mx-auto">
              {t("products.notFound.description")}
            </p>
            <Button
              color="primary"
              variant="shadow"
              size="lg"
              startContent={<Icon icon="lucide:arrow-left" />}
              className="font-medium"
              as="a"
              href="#products"
            >
              {t("products.notFound.back")}
            </Button>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default ProductNotFoundPage;
