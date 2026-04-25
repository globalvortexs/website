import { useEffect } from "react";
import type { MouseEvent } from "react";
import { Button, Card, CardBody, Chip, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../components/ui";
import { scrollToAnchor } from "../utils/scroll";

const FEATURES = [
  { key: "upload", icon: "lucide:upload-cloud" },
  { key: "largeFiles", icon: "lucide:database" },
  { key: "metadata", icon: "lucide:file-search" },
  { key: "dashboard", icon: "lucide:layout-dashboard" },
  { key: "reprocess", icon: "lucide:refresh-cw" },
  { key: "export", icon: "lucide:download" },
] as const;

const DIFFERENTIALS = [
  { key: "noLimit", icon: "lucide:infinity" },
  { key: "brazilianBanks", icon: "lucide:landmark" },
  { key: "performance", icon: "lucide:zap" },
  { key: "modernUx", icon: "lucide:sparkles" },
] as const;

const SECURITY = [
  { key: "license", icon: "lucide:key-round" },
  { key: "signing", icon: "lucide:badge-check" },
  { key: "localData", icon: "lucide:hard-drive" },
  { key: "logging", icon: "lucide:scroll-text" },
  { key: "distribution", icon: "lucide:package-check" },
] as const;

const TECHNOLOGIES = [
  { name: "Java 21", icon: "logos:java" },
  { name: "Spring Boot", icon: "logos:spring-icon" },
  { name: "Spring Batch", icon: "simple-icons:springboot" },
  { name: "React 19", icon: "logos:react" },
  { name: "Vite", icon: "logos:vitejs" },
  { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
  { name: "JCEF", icon: "logos:chrome" },
  { name: "Apache POI", icon: "vscode-icons:file-type-excel" },
  { name: "Gradle", icon: "logos:gradle" },
  { name: "H2 Database", icon: "lucide:database" },
] as const;

const PLATFORMS = [
  { key: "windows", icon: "lucide:monitor" },
  { key: "linux", icon: "lucide:terminal" },
] as const;

const SUPPORTED_BANKS = [
  "Banco do Brasil",
  "Itaú",
  "Bradesco",
  "Caixa Econômica",
  "Santander",
] as const;

const ACCENT_BG = "#0d2840";

export const ProductCNAB240Page = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleContactClick = (event: MouseEvent) => {
    event.preventDefault();
    scrollToAnchor("contact");
  };

  const baseKey = "products.cnab240";

  return (
    <>
      {/* HERO ----------------------------------------------------------- */}
      <section className="relative bg-background pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
          <div className="absolute top-40 -left-20 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container mx-auto px-4">
          <Link
            href="#home"
            color="foreground"
            className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:text-primary"
          >
            <Icon icon="lucide:arrow-left" className="text-base" />
            {t(`${baseKey}.backToHome`)}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Icon icon="lucide:landmark" className="mr-2 text-base" />
                {t(`${baseKey}.hero.tagline`)}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
                {t(`${baseKey}.hero.title`)}
                <span className="text-primary block">{t(`${baseKey}.hero.titleHighlight`)}</span>
              </h1>

              <p className="text-default-600 text-lg md:text-xl mb-8 md:mb-10">
                {t(`${baseKey}.hero.subtitle`)}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  color="primary"
                  size="lg"
                  variant="shadow"
                  startContent={<Icon icon="lucide:rocket" />}
                  className="font-medium"
                  as="a"
                  href="#contact"
                  onClick={handleContactClick}
                >
                  {t(`${baseKey}.hero.primaryCta`)}
                </Button>
                <Button
                  variant="bordered"
                  size="lg"
                  startContent={<Icon icon="lucide:message-circle" />}
                  className="font-medium"
                  as="a"
                  href="#contact"
                  onClick={handleContactClick}
                >
                  {t(`${baseKey}.hero.secondaryCta`)}
                </Button>
              </div>
            </div>

            <HeroPreview />
          </div>
        </div>
      </section>

      {/* SOBRE ---------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-content1">
        <div className="container mx-auto px-4">
          <SectionHeader
            tagline={t(`${baseKey}.about.tagline`)}
            taglineIcon="lucide:info"
            title={t(`${baseKey}.about.title`)}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
            {(["what", "who", "problem"] as const).map((key, index) => (
              <Card
                key={key}
                className="border border-divider bg-background h-full"
                shadow="sm"
                isHoverable
              >
                <CardBody className="p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-primary/10">
                      <Icon
                        icon={
                          ["lucide:file-text", "lucide:users", "lucide:target"][index]
                        }
                        className="text-primary text-2xl"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold">
                      {t(`${baseKey}.about.${key}.title`)}
                    </h3>
                  </div>
                  <p className="text-default-600 text-sm md:text-base leading-relaxed">
                    {t(`${baseKey}.about.${key}.description`)}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES ----------------------------------------------- */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            tagline={t(`${baseKey}.features.tagline`)}
            taglineIcon="lucide:sparkles"
            title={t(`${baseKey}.features.title`)}
            subtitle={t(`${baseKey}.features.subtitle`)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
            {FEATURES.map((feature) => (
              <Card
                key={feature.key}
                className="border border-divider bg-content1 h-full"
                shadow="sm"
                isHoverable
              >
                <CardBody className="p-6">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                    <Icon icon={feature.icon} className="text-primary text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    {t(`${baseKey}.features.items.${feature.key}.title`)}
                  </h3>
                  <p className="text-default-600 text-sm md:text-base leading-relaxed">
                    {t(`${baseKey}.features.items.${feature.key}.description`)}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS -------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-content1">
        <div className="container mx-auto px-4">
          <SectionHeader
            tagline={t(`${baseKey}.differentials.tagline`)}
            taglineIcon="lucide:trophy"
            title={t(`${baseKey}.differentials.title`)}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto">
            {DIFFERENTIALS.map((item) => (
              <div
                key={item.key}
                className="flex flex-col items-start gap-3 p-5 md:p-6 rounded-xl border border-divider bg-background hover:border-primary/40 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <Icon icon={item.icon} className="text-primary text-xl md:text-2xl" />
                </div>
                <h3 className="text-base md:text-lg font-bold">
                  {t(`${baseKey}.differentials.items.${item.key}.title`)}
                </h3>
                <p className="text-default-600 text-sm leading-relaxed">
                  {t(`${baseKey}.differentials.items.${item.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGURANÇA ----------------------------------------------------- */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{ backgroundColor: ACCENT_BG }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -left-20 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl" />
          <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-white/10 text-white text-sm font-medium">
              <Icon icon="lucide:shield" className="mr-2 text-base" />
              {t(`${baseKey}.security.tagline`)}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {t(`${baseKey}.security.title`)}
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-3xl mx-auto">
              {t(`${baseKey}.security.subtitle`)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto">
            {SECURITY.map((item) => (
              <div
                key={item.key}
                className="flex items-start gap-4 p-5 md:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="p-2.5 rounded-lg bg-primary/20 shrink-0">
                  <Icon icon={item.icon} className="text-white text-xl md:text-2xl" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">
                    {t(`${baseKey}.security.items.${item.key}.title`)}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base">
                    {t(`${baseKey}.security.items.${item.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECNOLOGIAS --------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            tagline={t(`${baseKey}.tech.tagline`)}
            taglineIcon="lucide:cpu"
            title={t(`${baseKey}.tech.title`)}
            subtitle={t(`${baseKey}.tech.subtitle`)}
          />

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {TECHNOLOGIES.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2.5 px-4 py-3 md:px-5 md:py-3.5 rounded-xl border border-divider bg-content1 hover:border-primary/40 hover:shadow-md transition-all"
              >
                <Icon icon={tech.icon} className="text-2xl md:text-3xl" />
                <span className="font-semibold text-sm md:text-base">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPATIBILIDADE ---------------------------------------------- */}
      <section className="py-16 md:py-24 bg-content1">
        <div className="container mx-auto px-4">
          <SectionHeader
            tagline={t(`${baseKey}.compatibility.tagline`)}
            taglineIcon="lucide:check-circle-2"
            title={t(`${baseKey}.compatibility.title`)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
            <Card className="border border-divider bg-background h-full" shadow="sm">
              <CardBody className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <Icon icon="lucide:landmark" className="text-primary text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold">
                    {t(`${baseKey}.compatibility.banks.title`)}
                  </h3>
                </div>
                <p className="text-default-600 text-sm md:text-base mb-5">
                  {t(`${baseKey}.compatibility.banks.subtitle`)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {SUPPORTED_BANKS.map((bank) => (
                    <Chip
                      key={bank}
                      variant="flat"
                      color="primary"
                      startContent={
                        <Icon icon="lucide:building-2" className="text-base ml-1" />
                      }
                      className="font-medium"
                    >
                      {bank}
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card className="border border-divider bg-background h-full" shadow="sm">
              <CardBody className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <Icon icon="lucide:package" className="text-primary text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold">
                    {t(`${baseKey}.compatibility.platforms.title`)}
                  </h3>
                </div>
                <p className="text-default-600 text-sm md:text-base mb-5">
                  {t(`${baseKey}.compatibility.platforms.subtitle`)}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {PLATFORMS.map((platform) => (
                    <PlatformTile
                      key={platform.key}
                      icon={platform.icon}
                      label={t(`${baseKey}.compatibility.platforms.${platform.key}`)}
                      description={t(
                        `${baseKey}.compatibility.platforms.${platform.key}Description`
                      )}
                    />
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA FINAL ---------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <Card
            className="border border-divider overflow-hidden max-w-5xl mx-auto"
            shadow="md"
          >
            <div
              className="relative px-6 py-12 md:px-12 md:py-16 text-center"
              style={{ backgroundColor: ACCENT_BG }}
            >
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute -top-20 -left-10 w-60 h-60 bg-primary/20 rounded-full filter blur-3xl" />
                <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-primary/15 rounded-full filter blur-3xl" />
              </div>

              <div className="relative">
                <div className="inline-flex p-3 rounded-2xl bg-white/10 mb-5 mx-auto">
                  <Icon icon="lucide:rocket" className="text-white text-2xl md:text-3xl" />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                  {t(`${baseKey}.cta.title`)}
                </h2>
                <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                  {t(`${baseKey}.cta.subtitle`)}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    color="primary"
                    variant="shadow"
                    size="lg"
                    startContent={<Icon icon="lucide:rocket" />}
                    className="font-medium"
                    as="a"
                    href="#contact"
                    onClick={handleContactClick}
                  >
                    {t(`${baseKey}.cta.primaryButton`)}
                  </Button>
                  <Button
                    variant="bordered"
                    size="lg"
                    startContent={<Icon icon="lucide:message-circle" />}
                    className="font-medium text-white border-white/40 hover:bg-white/10"
                    as="a"
                    href="#contact"
                    onClick={handleContactClick}
                  >
                    {t(`${baseKey}.cta.secondaryButton`)}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ProductCNAB240Page;

/* -----------------------------------------------------------------------
 * Subcomponentes locais — específicos desta página, sem necessidade de
 * compartilhar com outras rotas.
 * --------------------------------------------------------------------- */

const HeroPreview = () => {
  const { t } = useTranslation();
  const baseKey = "products.cnab240.hero.preview";

  return (
    <div className="relative hidden md:block" aria-hidden="true">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full filter blur-2xl" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full filter blur-2xl" />

      <div className="relative rounded-2xl border border-divider bg-content1 shadow-xl overflow-hidden">
        <div
          className="flex items-center gap-2 px-5 py-3 border-b border-divider"
          style={{ backgroundColor: ACCENT_BG }}
        >
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
          <p className="text-white/90 text-sm font-medium ml-3">
            {t(`${baseKey}.title`)}
          </p>
        </div>

        <div className="p-5 md:p-6 space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-content2">
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2 rounded-md bg-primary/10 shrink-0">
                <Icon icon="lucide:file-text" className="text-primary text-lg" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">
                  {t(`${baseKey}.fileName`)}
                </p>
                <p className="text-xs text-default-500">CNAB 240 · FEBRABAN</p>
              </div>
            </div>
            <Chip
              size="sm"
              color="success"
              variant="flat"
              startContent={<Icon icon="lucide:check" className="text-base ml-1" />}
            >
              {t(`${baseKey}.status`)}
            </Chip>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <PreviewMetric
              label={t(`${baseKey}.metric1Label`)}
              value={t(`${baseKey}.metric1Value`)}
              icon="lucide:list-ordered"
            />
            <PreviewMetric
              label={t(`${baseKey}.metric2Label`)}
              value={t(`${baseKey}.metric2Value`)}
              icon="lucide:infinity"
            />
            <PreviewMetric
              label={t(`${baseKey}.metric3Label`)}
              value={t(`${baseKey}.metric3Value`)}
              icon="lucide:timer"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-default-500">
              <span>0001</span>
              <span>240/240</span>
            </div>
            <div className="h-2 rounded-full bg-content2 overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-primary/70 to-primary rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PreviewMetricProps {
  label: string;
  value: string;
  icon: string;
}

const PreviewMetric = ({ label, value, icon }: PreviewMetricProps) => (
  <div className="p-3 rounded-lg border border-divider bg-content2/50">
    <div className="flex items-center gap-1.5 text-default-500 mb-1">
      <Icon icon={icon} className="text-sm" />
      <span className="text-xs font-medium">{label}</span>
    </div>
    <p className="text-sm font-bold truncate">{value}</p>
  </div>
);

interface PlatformTileProps {
  icon: string;
  label: string;
  description: string;
}

const PlatformTile = ({ icon, label, description }: PlatformTileProps) => (
  <div className="p-4 rounded-xl border border-divider bg-content1">
    <div className="flex items-center gap-2 mb-2">
      <Icon icon={icon} className="text-primary text-xl" />
      <span className="font-semibold">{label}</span>
    </div>
    <p className="text-default-600 text-xs md:text-sm leading-snug">{description}</p>
  </div>
);
