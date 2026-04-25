import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { SocialLinks } from "../common";

export const ContactInfo = () => {
  const { t } = useTranslation();

  const phoneValue = t("contact.info.phone.value");
  const emailValue = t("contact.info.email.value");

  const contactItems = [
    {
      icon: "lucide:phone",
      label: t("contact.info.phone.label"),
      value: phoneValue,
      link: `tel:${phoneValue.replace(/\D/g, "")}`,
    },
    {
      icon: "lucide:mail",
      label: t("contact.info.email.label"),
      value: emailValue,
      link: `mailto:${emailValue}`,
    },
  ];

  return (
    <Card shadow="md">
      <CardBody className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-6">{t("contact.info.title")}</h3>

        <div className="space-y-6 md:space-y-8">
          {contactItems.map((item) => (
            <div key={item.icon} className="flex gap-4">
              <div className="p-2 rounded-md bg-primary/10 h-fit">
                <Icon icon={item.icon} className="text-primary text-lg" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{item.label}</h4>
                <a href={item.link} className="text-primary hover:underline">
                  {item.value}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-10">
          <h4 className="font-semibold mb-4">{t("contact.info.followUs")}</h4>
          <SocialLinks />
        </div>
      </CardBody>
    </Card>
  );
};
