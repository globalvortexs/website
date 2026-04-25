import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { About, ContactInfo, Hero, Products, Services } from "../components/sections";
import { SectionHeader } from "../components/ui";

/**
 * Página inicial. Empilha as seções principais e, ao montar vinda de uma
 * rota de produto, restaura o scroll para a âncora indicada no hash
 * (ex.: voltar de `#/produto/...` para `#products`).
 */
export const HomePage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.startsWith("#/")) return;
    const id = hash.slice(1);
    const element = document.getElementById(id);
    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="services" className="py-20 bg-background">
        <Services />
      </section>

      <section id="products" className="py-20 bg-content1">
        <Products />
      </section>

      <section id="about" className="py-20 bg-background">
        <About />
      </section>

      <section id="contact" className="py-16 md:py-20 bg-content1">
        <div className="container mx-auto px-4">
          <SectionHeader title={t("contact.title")} subtitle={t("contact.subtitle")} />
          <div className="max-w-2xl mx-auto">
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
