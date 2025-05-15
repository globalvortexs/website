import { Divider, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { COMPANY_NAME, SOCIAL_LINKS } from "../../lib/utils/constants";

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
                <img src="/assets/icon-vortex.png" alt="Logo" className="w-5" />
              </div>
              <p className="font-bold text-lg md:text-xl">{COMPANY_NAME}</p>
            </div>
            <p className="text-default-600 text-sm md:text-base mb-5 md:mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex gap-4 md:gap-5">
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
        </div>

        <Divider className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-default-500 text-xs md:text-sm">
            © {currentYear} {COMPANY_NAME}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};