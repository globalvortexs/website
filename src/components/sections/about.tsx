import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

export const About = () => {
  const { t, i18n } = useTranslation();

  // Definindo os índices para os recursos
  const featureIndices = [0, 1, 2, 3]; // Agora temos 4 características
  // Usando caminhos baseados na linguagem atual
  const getImagePath = (lang: string, imageName: string) => {
    return `/assets/language-img/${lang}/${imageName}-${lang}.jpg`;
  };
    const images = {
    en: {
      main: getImagePath('en', 'custom-built-solutions'),
      top: getImagePath('en', 'smart-integration'),
      bottom: getImagePath('en', 'real-time')
    },
    pt: {
      main: getImagePath('pt', 'custom-built-solutions'),
      top: getImagePath('pt', 'smart-integration'),
      bottom: getImagePath('pt', 'real-time')
    },
    es: {
      main: getImagePath('es', 'custom-built-solutions'),
      top: getImagePath('es', 'smart-integration'),
      bottom: getImagePath('es', 'real-time')
    }
  };

  const currentImages = useMemo(() => {
    const currentLang = i18n.language.substring(0, 2);
    // Verificando se o idioma existe no objeto images, senão usa 'en' como fallback
    const selectedImages = images[currentLang as keyof typeof images] || images.en;
    return selectedImages;
  }, [i18n.language]);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Icon icon="lucide:info" className="mr-2 text-base" />
            {t('about.tagline')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 md:mb-6">{t('about.title')}</h2>
          <p className="text-default-600 mb-4 md:mb-6 leading-relaxed">
            {t('about.paragraph1')}
          </p>
          <p className="text-default-600 mb-4 md:mb-6 leading-relaxed">
            {t('about.paragraph2')}
          </p>
          
          <div className="space-y-4 md:space-y-5 mt-6 md:mt-8">
            {featureIndices.map((index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-primary/10 mt-1">
                  <Icon icon="lucide:check" className="text-primary text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold">{t(`about.features.${index}.title`)}</h4>
                  <p className="text-default-600 text-sm md:text-base">{t(`about.features.${index}.description`)}</p>
                </div>
              </div>
            ))}
          </div>        </div>
        <div className="relative mt-10 lg:mt-0 hidden md:block">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <img 
              src={currentImages.main} 
              alt={t('about.images.office')} 
              className="rounded-xl h-80% w-full custom-built object-cover shadow-md"
            />
            <div className="grid grid-rows-2 gap-4 md:gap-6">
              <img 
                src={currentImages.top} 
                alt={t('about.images.teamMeeting')} 
                className="rounded-xl h-full object-cover shadow-md"
              />
              <img 
                src={currentImages.bottom} 
                alt={t('about.images.officeSpace')} 
                className="rounded-xl h-full object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};