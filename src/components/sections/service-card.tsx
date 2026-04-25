import { memo } from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

export type ServiceCardVariant = "main" | "ghost";

interface ServiceCardProps {
  icon: string;
  index: number;
  variant?: ServiceCardVariant;
}

const ServiceCardImpl = ({ icon, index, variant = "main" }: ServiceCardProps) => {
  const { t } = useTranslation();
  const isMain = variant === "main";

  return (
    <Card
      className={
        isMain
          ? "border border-divider bg-content1 backdrop-blur-md relative"
          : "border border-divider bg-content2/50 backdrop-blur-sm opacity-70 transition-all duration-300"
      }
      shadow={isMain ? "lg" : "sm"}
      isHoverable={isMain}
    >
      <CardBody className={isMain ? "p-6 md:p-8" : "p-4 md:p-6"}>
        <div className={isMain ? "p-4 rounded-2xl bg-primary/10 w-fit mb-6" : "p-3 rounded-xl bg-primary/10 w-fit mb-4"}>
          <Icon
            icon={icon}
            className={isMain ? "text-primary text-2xl md:text-3xl" : "text-primary text-xl md:text-2xl"}
          />
        </div>
        <h3
          className={
            isMain
              ? "text-lg md:text-2xl font-bold mb-3"
              : "text-base md:text-lg font-bold mb-2 line-clamp-1"
          }
        >
          {t(`services.items.${index}.title`)}
        </h3>
        <p
          className={
            isMain
              ? "text-default-600 text-sm md:text-base mb-6"
              : "text-default-600 text-xs md:text-sm line-clamp-2"
          }
        >
          {t(`services.items.${index}.description`)}
        </p>
        {isMain && (
          <Button
            color="primary"
            variant="shadow"
            startContent={<Icon icon="lucide:arrow-right" className="text-lg" />}
            size="md"
            className="w-full font-medium"
          >
            {t("services.learnMore")}
          </Button>
        )}
      </CardBody>
    </Card>
  );
};

export const ServiceCard = memo(ServiceCardImpl);
ServiceCard.displayName = "ServiceCard";
