import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const serviceItems = [
  {
    icon: "lucide:bar-chart-2",
    title: "Business Strategy",
    description: "Develop comprehensive business strategies to achieve your goals and maximize growth potential.",
  },
  {
    icon: "lucide:globe",
    title: "Global Expansion",
    description: "Navigate international markets with our expertise in global business development and localization.",
  },
  {
    icon: "lucide:code",
    title: "Digital Transformation",
    description: "Modernize your business with cutting-edge digital solutions tailored to your specific needs.",
  },
  {
    icon: "lucide:users",
    title: "Talent Management",
    description: "Optimize your workforce with our strategic recruitment and employee development programs.",
  },
  {
    icon: "lucide:trending-up",
    title: "Market Analysis",
    description: "Gain valuable insights with our in-depth market research and competitive analysis services.",
  },
  {
    icon: "lucide:shield",
    title: "Risk Management",
    description: "Identify and mitigate potential risks with our comprehensive risk assessment strategies.",
  },
];

export const Services = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">{t('services.title')}</h2>
        <p className="text-default-600 max-w-2xl mx-auto">
          {t('services.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(t('services.items', { returnObjects: true }) as any[]).map((service: any, index: number) => (
          <Card 
            key={index} 
            className="border border-divider"
            shadow="sm"
            isHoverable
          >
            <CardBody className="p-8">
              <div className="p-3 rounded-full bg-primary/10 w-fit mb-6">
                <Icon icon={serviceItems[index].icon} className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-default-600 mb-6">{service.description}</p>
              <Button 
                color="primary" 
                variant="light" 
                endContent={<Icon icon="lucide:arrow-right" />}
                className="px-0"
              >
                {t('services.learnMore')}
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button 
          color="primary" 
          size="lg" 
          href="#contact"
          as="a"
        >
          {t('services.discussProject')}
        </Button>
      </div>
    </div>
  );
};