import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title').replace(/(Global Success|Sucesso Global)/, '')}
              <span className="text-primary">{t('hero.title').includes('Global Success') ? 'Global Success' : 'Sucesso Global'}</span>
            </h1>
            <p className="text-default-600 text-lg mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                color="primary" 
                size="lg" 
                className="font-medium"
                endContent={<Icon icon="lucide:arrow-right" />}
                href="#contact"
                as="a"
              >
                {t('hero.getStarted')}
              </Button>
              <Button 
                variant="bordered" 
                size="lg" 
                className="font-medium"
                href="#services"
                as="a"
              >
                {t('hero.ourServices')}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full filter blur-3xl opacity-50"></div>
            <img 
              src="https://img.heroui.chat/image/dashboard?w=600&h=500&u=1" 
              alt="Global Vortex Solutions" 
              className="w-full h-auto rounded-xl shadow-xl relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};