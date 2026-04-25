import { Divider } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { COMPANY_NAME } from "../../utils/constants";
import { SocialLinks } from "../common";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-content2 pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-10 md:mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5 md:mb-6">
              <div className="p-1.5 rounded-lg">
                <img src="/assets/icon-vortex.png" alt="" className="w-5" />
              </div>
              <p className="font-bold text-lg md:text-xl">{COMPANY_NAME}</p>
            </div>
            <p className="text-default-600 text-sm md:text-base mb-5 md:mb-6 max-w-md">
              {t("footer.description")}
            </p>
            <SocialLinks />
          </div>
        </div>

        <Divider className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-default-500 text-xs md:text-sm">
            © {currentYear} {COMPANY_NAME}. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};
