import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-content2 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Icon icon="lucide:vortex" className="text-primary text-2xl" />
              <p className="font-bold text-lg">Global Vortex</p>
            </div>
            <p className="text-default-600 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="LinkedIn">
                <Icon icon="lucide:linkedin" className="text-default-500 hover:text-primary text-xl" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Icon icon="lucide:twitter" className="text-default-500 hover:text-primary text-xl" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Icon icon="lucide:facebook" className="text-default-500 hover:text-primary text-xl" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Icon icon="lucide:instagram" className="text-default-500 hover:text-primary text-xl" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" color="foreground" underline="hover" className="text-default-600">
                  {t('services.items.0.title')}
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground" underline="hover" className="text-default-600">
                  {t('services.items.1.title')}
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground" underline="hover" className="text-default-600">
                  {t('services.items.2.title')}
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground" underline="hover" className="text-default-600">
                  {t('services.items.3.title')}
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground" underline="hover" className="text-default-600">
                  {t('services.items.4.title')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">{t('footer.company')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" color="foreground" underline="hover" className="text-default-600">
                  {t('footer.links.about')}
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground" underline="hover" className="text-default-600">
                  {t('footer.links.team')}
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground" underline="hover" className="text-default-600">
                  {t('footer.links.careers')}
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground" underline="hover" className="text-default-600">
                  {t('footer.links.blog')}
                </Link>
              </li>
              <li>
                <Link href="#contact" color="foreground" underline="hover" className="text-default-600">
                  {t('footer.links.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" color="foreground" underline="hover" className="text-default-600">
                  {t('footer.links.terms')}
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground" underline="hover" className="text-default-600">
                  {t('footer.links.privacy')}
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground" underline="hover" className="text-default-600">
                  {t('footer.links.cookies')}
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground" underline="hover" className="text-default-600">
                  {t('footer.links.gdpr')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <Divider className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-default-500 text-sm">
            © {currentYear} Global Vortex. {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <Link href="#" color="foreground" underline="hover" className="text-default-500 text-sm">
              {t('footer.links.privacy')}
            </Link>
            <Link href="#" color="foreground" underline="hover" className="text-default-500 text-sm">
              {t('footer.links.terms')}
            </Link>
            <Link href="#" color="foreground" underline="hover" className="text-default-500 text-sm">
              {t('footer.links.cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};