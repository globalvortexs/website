import { useCallback, useState } from "react";
import {
  Button,
  Link,
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { scrollToAnchor } from "../../utils/scroll";
import { LanguageSwitcher, ThemeSwitcher } from "../common";

const NAV_ITEMS = [
  { id: "home", icon: "lucide:home", labelKey: "nav.home" },
  { id: "services", icon: "lucide:settings", labelKey: "nav.services" },
  { id: "products", icon: "lucide:layers", labelKey: "nav.products" },
  { id: "about", icon: "lucide:info", labelKey: "nav.about" },
] as const;

export const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAnchor = useCallback((id: string) => {
    setIsMenuOpen(false);
    scrollToAnchor(id);
  }, []);

  return (
    <HeroNavbar
      maxWidth="xl"
      className="bg-background/95 backdrop-blur-md border-b border-divider sticky top-0 z-40"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBordered
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
        className="sm:hidden"
      />

      <NavbarBrand>
        <Link href="#home" color="foreground" onPress={() => setIsMenuOpen(false)}>
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg">
              <img src="/assets/icon-vortex.png" alt="" className="w-10" />
            </div>
            <div>
              <p className="font-bold text-xl text-inherit tracking-tight">Global Vortex</p>
              <p className="text-xs text-default-500">Solutions</p>
            </div>
          </div>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {NAV_ITEMS.map((item) => (
          <NavbarItem key={item.id}>
            <Link
              color="foreground"
              href={`#${item.id}`}
              underline="hover"
              className="font-medium flex items-center gap-1.5 cursor-pointer"
              onPress={() => handleAnchor(item.id)}
            >
              <Icon icon={item.icon} className="text-default-500 text-lg" />
              {t(item.labelKey)}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <div className="flex items-center gap-3 border-r border-divider pr-3 mr-3">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            variant="shadow"
            href="#contact"
            onPress={() => handleAnchor("contact")}
            startContent={<Icon icon="lucide:message-circle" className="text-lg" />}
            className="font-medium"
          >
            {t("nav.contactUs")}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-6">
        {NAV_ITEMS.map((item) => (
          <NavbarMenuItem key={item.id}>
            <Link
              color="foreground"
              href={`#${item.id}`}
              className="w-full flex items-center gap-2 py-2 cursor-pointer"
              size="lg"
              onPress={() => handleAnchor(item.id)}
            >
              <Icon icon={item.icon} className="text-default-500 text-lg" />
              {t(item.labelKey)}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="mt-5">
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroNavbar>
  );
};
