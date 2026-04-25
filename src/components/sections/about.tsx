import { Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useLanguageImage } from "../../hooks/use-language-image";

const FEATURE_INDICES = [0, 1, 2, 3] as const;

export const About = () => {
  const { t } = useTranslation();
  const mainImage = useLanguageImage("custom-built-solutions");
  const topImage = useLanguageImage("smart-integration");
  const bottomImage = useLanguageImage("real-time");

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Icon icon="lucide:info" className="mr-2 text-base" />
            {t("about.tagline")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 md:mb-6">{t("about.title")}</h2>
          <p className="text-default-600 mb-4 md:mb-6 leading-relaxed">{t("about.paragraph1")}</p>
          <p className="text-default-600 mb-4 md:mb-6 leading-relaxed">{t("about.paragraph2")}</p>

          <div className="space-y-4 md:space-y-5 mt-6 md:mt-8">
            {FEATURE_INDICES.map((index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-primary/10 mt-1">
                  <Icon icon="lucide:check" className="text-primary text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold">{t(`about.features.${index}.title`)}</h4>
                  <p className="text-default-600 text-sm md:text-base">
                    {t(`about.features.${index}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-10 lg:mt-0 hidden md:block">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <Image
              src={mainImage}
              alt={t("about.images.office")}
              className="rounded-xl w-full object-cover shadow-md md:mt-4 lg:mt-20"
            />
            <div className="grid grid-rows-2 gap-4 md:gap-6">
              <Image
                src={topImage}
                alt={t("about.images.teamMeeting")}
                className="rounded-xl h-full object-cover shadow-md"
              />
              <Image
                src={bottomImage}
                alt={t("about.images.officeSpace")}
                className="rounded-xl h-full object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
