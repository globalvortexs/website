import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import customBuild from "../assets/language-img/en/custom-built-solutions-en.png";
import realTime from "../assets/language-img/en/real-time-en.png";
import smartIntegration from "../assets/language-img/en/smart-integration-en.png";

export const About = () => {
  const { t } = useTranslation();

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
          <p className="text-default-600 mb-6 leading-relaxed">
            {t('about.paragraph3')}
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
              src={customBuild}
              alt="Office"
              className="rounded-xl object-cover w-auto h-auto custom-built"
            />
            <div className="grid grid-rows-2 gap-6">
              <img
                src={realTime}
                alt="Team meeting"
                className="rounded-xl object-cover"
              />
              <img
                src={smartIntegration}
                alt="Office space"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};