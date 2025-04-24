import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Card, CardBody, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { About } from "./components/about";
import { Footer } from "./components/footer";
import { ContactForm } from "./components/contact-form";
import { ThemeSwitcher } from "./components/theme-switcher";
import { LanguageSwitcher } from "./components/language-switcher";
import { useTranslation } from "react-i18next";
import IconVortex from "./assets/icon-vortex.png";
import "./i18n";

export default function App() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar 
        maxWidth="xl" 
        className="bg-background/80 backdrop-blur-md border-b border-divider"
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
              <img src={IconVortex} alt="Logo" className="w-10" />
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
              <Icon icon="lucide:home" className="text-default-500" width={18} height={18} />
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
              <Icon icon="lucide:briefcase" className="text-default-500" width={18} height={18} />
              {t('nav.services')}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link 
              color="foreground" 
              href="#about" 
              underline="hover"
              className="font-medium flex items-center gap-1.5"
            >
              <Icon icon="lucide:info" className="text-default-500" width={18} height={18} />
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
              href="#contact" 
              variant="shadow"
              startContent={<Icon icon="lucide:message-circle" width={18} height={18} />}
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
              <Icon icon="lucide:home" className="text-default-500" width={18} height={18} />
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
              <Icon icon="lucide:briefcase" className="text-default-500" width={18} height={18} />
              {t('nav.services')}
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link 
              color="foreground" 
              href="#about" 
              className="w-full flex items-center gap-2 py-2"
              size="lg"
            >
              <Icon icon="lucide:info" className="text-default-500" width={18} height={18} />
              {t('nav.about')}
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link 
              color="foreground" 
              href="#testimonials" 
              className="w-full flex items-center gap-2 py-2"
              size="lg"
            >
              <Icon icon="lucide:message-square-quote" className="text-default-500" width={18} height={18} />
              {t('nav.testimonials')}
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
      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-content1">
          <Services />
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <About />
        </section>

        {/* Testimonials Section */}
        {/* <section id="testimonials" className="py-20 bg-content1">
          <Testimonials />
        </section> */}

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{t('contact.title')}</h2>
              <p className="text-default-600 max-w-2xl mx-auto">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
              <Card shadow="md">
                <CardBody className="p-8">
                  <ContactForm />
                </CardBody>
              </Card>

              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {/* <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon icon="lucide:map-pin" className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-default-600">
                        1234 Business Avenue, Suite 500<br />
                        São Paulo, SP 01234-567
                      </p>
                    </div>
                  </div> */}
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon icon="lucide:phone" className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-default-600">+55 (11) 1234-5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon icon="lucide:mail" className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-default-600">contact@globalvortex.com</p>
                    </div>
                  </div>
                  
                  {/* <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon icon="lucide:clock" className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Business Hours</h4>
                      <p className="text-default-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div> */}
                </div>
                
                <div className="mt-10">
                  <h4 className="font-semibold mb-3">Follow Us</h4>
                  <div className="flex gap-4">
                    <Button isIconOnly variant="light" aria-label="LinkedIn">
                      <Icon icon="lucide:linkedin" className="text-xl" />
                    </Button>
                    <Button isIconOnly variant="light" aria-label="Twitter">
                      <Icon icon="lucide:twitter" className="text-xl" />
                    </Button>
                    <Button isIconOnly variant="light" aria-label="Facebook">
                      <Icon icon="lucide:facebook" className="text-xl" />
                    </Button>
                    <Button isIconOnly variant="light" aria-label="Instagram">
                      <Icon icon="lucide:instagram" className="text-xl" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}