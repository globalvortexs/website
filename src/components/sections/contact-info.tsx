import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { SOCIAL_LINKS } from "../../lib";

export const ContactInfo = () => {
  const { t } = useTranslation();
    const contactItems = [
    {
      icon: "lucide:phone",
      label: t('contact.info.phone.label'),
      value: t('contact.info.phone.value'),
      link: `tel:${t('contact.info.phone.value').replace(/\D/g, '')}`
    },
    {
      icon: "lucide:mail",
      label: t('contact.info.email.label'),
      value: t('contact.info.email.value'),
      link: `mailto:${t('contact.info.email.value')}`
    }
  ];
  
  return (
    <Card shadow="md">
      <CardBody className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold mb-6">{t('contact.info.title')}</h3>
        
        <div className="space-y-6 md:space-y-8">
          {contactItems.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="p-2 rounded-md bg-primary/10 h-fit">
                <Icon icon={item.icon} className="text-primary text-lg" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{item.label}</h4>
                {item.link ? (
                  <a 
                    href={item.link} 
                    className="text-primary hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-default-600">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:mt-10">
          <h4 className="font-semibold mb-4">{t('contact.info.followUs')}</h4>
          <div className="flex gap-4">
            <Button isIconOnly variant="flat" aria-label="LinkedIn" size="sm" className="rounded-full" as="a" href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              <Icon icon="lucide:linkedin" className="text-lg" />
            </Button>
            <Button isIconOnly variant="flat" aria-label="Twitter" size="sm" className="rounded-full" as="a" href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
              <Icon icon="lucide:twitter" className="text-lg" />
            </Button>
            <Button isIconOnly variant="flat" aria-label="Facebook" size="sm" className="rounded-full" as="a" href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer">
              <Icon icon="lucide:facebook" className="text-lg" />
            </Button>
            <Button isIconOnly variant="flat" aria-label="Instagram" size="sm" className="rounded-full" as="a" href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
              <Icon icon="lucide:instagram" className="text-lg" />
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};