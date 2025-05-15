import { Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="relative bg-background pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left max-w-xl">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Icon icon="lucide:zap" className="mr-2 text-base" />
              {t('hero.tagline', 'Enterprise Solutions')}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
              {t('hero.title', 'Transforming Ideas into')} 
              <span className="text-primary block"> {t('hero.titleHighlight', 'Global Success')}</span>
            </h1>
            
            <p className="text-default-600 text-lg md:text-xl mb-8 md:mb-10">
              {t('hero.subtitle', 'Global Vortex helps businesses navigate the complexities of today\'s market with innovative solutions and strategic expertise. Partner with us to elevate your business to new heights.')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                color="primary" 
                size="lg" 
                variant="shadow"
                startContent={<Icon icon="lucide:package" />}
                className="font-medium"
                as="a"
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('hero.ourProducts', 'Our Products')}
              </Button>
              <Button 
                variant="bordered" 
                size="lg"
                startContent={<Icon icon="lucide:message-circle" />}
                className="font-medium"
                as="a"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('hero.contactUs', 'Contact Us')}
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:block lg:mt-0">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full filter blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full filter blur-2xl"></div>
            
            <Image
              src={`/assets/language-img/${i18n.language.substring(0, 2) || 'en'}/banner-${i18n.language.substring(0, 2) || 'en'}.jpg`}
              alt={t('hero.dashboardImage')}
              className="rounded-xl shadow-xl border border-divider w-full"
              width={750}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};