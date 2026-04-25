import { useCallback } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useCarousel } from "../../hooks/use-carousel";
import { useSwipe } from "../../hooks/use-swipe";
import { SectionHeader } from "../ui";
import { ServiceCard } from "./service-card";

const SERVICE_ICONS = [
  "lucide:code",
  "lucide:database",
  "lucide:cloud",
  "lucide:lock",
  "lucide:bar-chart-2",
  "lucide:server",
] as const;

const AUTOPLAY_DELAY = 5000;

export const Services = () => {
  const { t } = useTranslation();
  const total = SERVICE_ICONS.length;

  const { currentIndex, isAutoPlay, setIsAutoPlay, goNext, goPrev, goTo, pauseAndResume } =
    useCarousel({ total, autoplayDelay: AUTOPLAY_DELAY });

  const handleNext = useCallback(() => {
    goNext();
    pauseAndResume();
  }, [goNext, pauseAndResume]);

  const handlePrev = useCallback(() => {
    goPrev();
    pauseAndResume();
  }, [goPrev, pauseAndResume]);

  const handleGoTo = useCallback(
    (index: number) => {
      goTo(index);
      pauseAndResume();
    },
    [goTo, pauseAndResume]
  );

  const swipe = useSwipe({
    onSwipeLeft: handleNext,
    onSwipeRight: handlePrev,
  });

  const leftIndex = (currentIndex - 1 + total) % total;
  const rightIndex = (currentIndex + 1) % total;

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title={t("services.title")}
        subtitle={t("services.subtitle")}
        tagline={t("services.tagline")}
        taglineIcon="lucide:code-2"
      />

      <div className="relative mt-8 sm:mt-10 md:mt-12 mb-12 sm:mb-16">
        <div
          className="relative flex justify-center items-center py-4 sm:py-6 overflow-hidden mx-auto"
          onTouchStart={swipe.handleTouchStart}
          onTouchMove={swipe.handleTouchMove}
          onTouchEnd={swipe.handleTouchEnd}
          role="region"
          aria-roledescription="carousel"
          aria-label={t("services.title")}
        >
          {/* Card lateral esquerdo (preview) */}
          <div className="hidden sm:block absolute left-4 sm:left-8 md:left-20 lg:left-32 xl:left-[10.25rem] sm:w-3/4 md:w-1/3 lg:w-1/4 xl:w-1/5 z-10 transform -translate-x-1/5">
            <ServiceCard icon={SERVICE_ICONS[leftIndex]} index={leftIndex} variant="ghost" />
          </div>

          {/* Card principal */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="z-20 w-full sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5 px-2 sm:px-4 max-w-[550px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              aria-live="polite"
            >
              <ServiceCard icon={SERVICE_ICONS[currentIndex]} index={currentIndex} />
            </motion.div>
          </AnimatePresence>

          {/* Card lateral direito (preview) */}
          <div className="hidden sm:block absolute right-4 sm:right-8 md:right-20 lg:right-32 xl:right-[10.25rem] sm:w-3/4 md:w-1/3 lg:w-1/4 xl:w-1/5 z-10 transform translate-x-1/5">
            <ServiceCard icon={SERVICE_ICONS[rightIndex]} index={rightIndex} variant="ghost" />
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 sm:left-2 md:left-4 lg:left-8 z-30 rounded-full bg-background/80 backdrop-blur-sm border border-divider p-1.5 sm:p-2 hover:bg-content1 transition-all shadow-sm hover:shadow"
          aria-label={t("services.previous")}
        >
          <Icon icon="lucide:chevron-left" className="text-base sm:text-lg md:text-xl" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 sm:right-2 md:right-4 lg:right-8 z-30 rounded-full bg-background/80 backdrop-blur-sm border border-divider p-1.5 sm:p-2 hover:bg-content1 transition-all shadow-sm hover:shadow"
          aria-label={t("services.next")}
        >
          <Icon icon="lucide:chevron-right" className="text-base sm:text-lg md:text-xl" />
        </button>

        <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-1.5 sm:space-x-2">
          {SERVICE_ICONS.map((_, index) => (
            <button
              key={index}
              onClick={() => handleGoTo(index)}
              className={`h-2 sm:h-2.5 transition-all rounded-full ${
                currentIndex === index
                  ? "w-8 sm:w-10 bg-primary"
                  : "w-2 sm:w-2.5 bg-default-200 hover:bg-default-300"
              }`}
              aria-label={t("services.goToSlide", { slide: index + 1 })}
              aria-current={currentIndex === index ? "true" : undefined}
            />
          ))}

          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`ml-3 sm:ml-4 rounded-full p-1.5 transition-colors ${
              isAutoPlay
                ? "bg-primary text-white"
                : "bg-default-200 text-default-600 hover:bg-default-300"
            }`}
            aria-label={isAutoPlay ? t("services.pauseAutoplay") : t("services.playAutoplay")}
            title={isAutoPlay ? t("services.pauseAutoplay") : t("services.playAutoplay")}
          >
            <Icon icon={isAutoPlay ? "lucide:pause" : "lucide:play"} className="text-xs sm:text-sm" />
          </button>
        </div>

        {isAutoPlay && (
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mt-2 h-0.5 bg-default-200 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              key={currentIndex}
              transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear", repeat: 0 }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
