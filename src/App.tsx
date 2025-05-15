import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Card, CardBody, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { Hero, Products, About, Services, ContactForm, ContactInfo } from "./components/sections";
import { Footer } from "./components/layout";
import { ThemeSwitcher, LanguageSwitcher } from "./components/common";
import { SectionHeader } from "./components/ui";

export default function App() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar 
        maxWidth="xl" 
        className="bg-background/95 backdrop-blur-md border-b border-divider sticky top-0 z-40"
        onMenuOpenChange={setIsMenuOpen}
        isBordered
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg">
              <img src="/assets/icon-vortex.png" alt="Logo" className="w-10" />
            </div>
            <div>
              <p className="font-bold text-xl text-inherit tracking-tight">Global Vortex</p>
              <p className="text-xs text-default-500">Solutions</p>
            </div>
          </div>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem>
            <Link 
              color="foreground" 
              href="#home" 
              underline="hover"
              className="font-medium flex items-center gap-1.5"
            >
              <Icon icon="lucide:home" className="text-default-500 text-lg" />
              {t('nav.home')}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              color="foreground" 
              href="#services" 
              underline="hover"
              className="font-medium flex items-center gap-1.5"
            >
              <Icon icon="lucide:settings" className="text-default-500 text-lg" />
              {t('nav.services')}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              color="foreground" 
              href="#products" 
              underline="hover"
              className="font-medium flex items-center gap-1.5"
            >
              <Icon icon="lucide:layers" className="text-default-500 text-lg" />
              {t('nav.products')}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              color="foreground" 
              href="#about" 
              underline="hover"
              className="font-medium flex items-center gap-1.5"
            >
              <Icon icon="lucide:info" className="text-default-500 text-lg" />
              {t('nav.about')}
            </Link>
          </NavbarItem>
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
              startContent={<Icon icon="lucide:message-circle" className="text-lg" />}
              className="font-medium"
            >
              {t('nav.contactUs')}
            </Button>
          </NavbarItem>
        </NavbarContent>
        
        <NavbarMenu className="pt-6">
          <NavbarMenuItem>
            <Link 
              color="foreground" 
              href="#home" 
              className="w-full flex items-center gap-2 py-2"
              size="lg"
            >
              <Icon icon="lucide:home" className="text-default-500 text-lg" />
              {t('nav.home')}
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link 
              color="foreground" 
              href="#services" 
              className="w-full flex items-center gap-2 py-2"
              size="lg"
            >
              <Icon icon="lucide:settings" className="text-default-500 text-lg" />
              {t('nav.services')}
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link 
              color="foreground" 
              href="#products" 
              className="w-full flex items-center gap-2 py-2"
              size="lg"
            >
              <Icon icon="lucide:layers" className="text-default-500 text-lg" />
              {t('nav.products')}
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link 
              color="foreground" 
              href="#about" 
              className="w-full flex items-center gap-2 py-2"
              size="lg"
            >
              <Icon icon="lucide:info" className="text-default-500 text-lg" />
              {t('nav.about')}
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="mt-5">
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>

      {/* Main Content */}
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-background">
          <Services />
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-content1">
          <Products />
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-background">
          <About />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-20 bg-content1">
          <div className="container mx-auto px-4">
            <SectionHeader
              title={t('contact.title')}
              subtitle={t('contact.subtitle')}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
              <Card shadow="md">
                <CardBody className="p-6 md:p-8">
                  <ContactForm />
                </CardBody>
              </Card>

              <ContactInfo />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}