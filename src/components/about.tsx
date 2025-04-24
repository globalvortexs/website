import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

//const stats = [
//  { value: "10+", label: "Years of Experience" },
//  { value: "500+", label: "Clients Worldwide" },
//  { value: "98%", label: "Client Satisfaction" },
//  { value: "50+", label: "Expert Consultants" },
//];

export const About = () => {
  const { t } = useTranslation();
  
  const stats = [
    { value: "10+", label: t('about.stats.experience') },
    { value: "500+", label: t('about.stats.clients') },
    { value: "98%", label: t('about.stats.satisfaction') },
    { value: "50+", label: t('about.stats.experts') },
  ];
  
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">{t('about.title')}</h2>
          <p className="text-default-600 mb-6 leading-relaxed">
            {t('about.paragraph1')}
          </p>
          <p className="text-default-600 mb-6 leading-relaxed">
            {t('about.paragraph2')}
          </p>
          
          <div className="space-y-4 mt-8">
            {(t('about.features', { returnObjects: true }) as any[]).map((feature: any, index: number) => (
              <div key={index} className="flex items-start gap-3">
                <Icon icon="lucide:check-circle" className="text-primary text-xl mt-1" />
                <div>
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="text-default-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-2 gap-6">
            <img 
              src="https://img.heroui.chat/image/places?w=300&h=400&u=1" 
              alt="Office" 
              className="rounded-xl h-full object-cover"
            />
            <div className="grid grid-rows-2 gap-6">
              <img 
                src="https://img.heroui.chat/image/places?w=300&h=200&u=2" 
                alt="Team meeting" 
                className="rounded-xl h-full object-cover"
              />
              <img 
                src="https://img.heroui.chat/image/places?w=300&h=200&u=3" 
                alt="Office space" 
                className="rounded-xl h-full object-cover"
              />
            </div>
          </div>
          
          <Card className="absolute -bottom-10 -left-10 max-w-xs shadow-lg">
            <CardBody className="p-6">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-default-600 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};