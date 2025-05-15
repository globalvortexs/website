import React, { useState, useEffect, useRef, useCallback } from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "../ui";

export const Services = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const autoPlayDelay = 5000; // 5 segundos para cada slide
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Serviços e seus respectivos ícones
  const serviceItems = [
    { 
      icon: "lucide:code", 
      index: 0 
    },
    { 
      icon: "lucide:database", 
      index: 1 
    },
    { 
      icon: "lucide:cloud",
      index: 2 
    },
    { 
      icon: "lucide:lock", 
      index: 3 
    },
    { 
      icon: "lucide:bar-chart-2", 
      index: 4 
    },
    { 
      icon: "lucide:server", 
      index: 5 
    }
  ];

  const totalItems = serviceItems.length;

  // Função para ir para o próximo serviço
  const nextService = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  // Função para ir para o serviço anterior
  const prevService = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Configurar e limpar o autoplay
  useEffect(() => {
    // Limpar qualquer temporizador existente
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }
    
    // Configurar novo temporizador se o autoplay estiver ativo
    if (isAutoPlay) {
      autoPlayIntervalRef.current = setInterval(nextService, autoPlayDelay);
    }
    
    // Limpar o temporizador quando o componente for desmontado
    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [isAutoPlay, nextService, currentIndex]);

  // Pausa o autoplay quando o usuário interage e retoma após 10 segundos
  const handleUserInteraction = useCallback(() => {
    setIsAutoPlay(false);
    
    // Retomar o autoplay após 10 segundos de inatividade
    setTimeout(() => {
      setIsAutoPlay(true);
    }, 10000);
  }, []);
  
  // Manipuladores para eventos de toque (swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    handleUserInteraction();
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe para a esquerda - próximo slide
      nextService();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe para a direita - slide anterior
      prevService();
    }
  };

  // Calcula os índices para o card da esquerda, principal e direita
  const leftIndex = (currentIndex - 1 + totalItems) % totalItems;
  const rightIndex = (currentIndex + 1) % totalItems;

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title={t('services.title')}
        subtitle={t('services.subtitle')}
        tagline={t('services.tagline')}
        taglineIcon="lucide:code-2"
      />

      <div className="relative mt-8 sm:mt-10 md:mt-12 mb-12 sm:mb-16">
        {/* Container do carrossel com os 3 cards */}
        <div 
          className="relative flex justify-center items-center py-4 sm:py-6 overflow-hidden mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Card Esquerdo (Ocapo) - Oculto em telas muito pequenas */}
          <div className="hidden sm:block absolute left-positon-card-service sm:w-3/4 md:w-1/3 lg:w-1/4 xl:w-1/5 z-10 transform -translate-x-1/5">
            <Card 
              className="border border-divider bg-content2/50 backdrop-blur-sm opacity-70 transition-all duration-300"
              shadow="sm"
            >
              <CardBody className="p-4 md:p-6">
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <Icon icon={serviceItems[leftIndex].icon} className="text-primary text-xl md:text-2xl" />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2 line-clamp-1">
                  {t(`services.items.${serviceItems[leftIndex].index}.title`)}
                </h3>
                <p className="text-default-600 text-xs md:text-sm line-clamp-2">
                  {t(`services.items.${serviceItems[leftIndex].index}.description`)}
                </p>
              </CardBody>
            </Card>
          </div>

          {/* Card Principal */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className="z-20 w-full sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5 px-2 sm:px-4 max-w-[550px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Card 
                className="border border-divider bg-content1 backdrop-blur-md relative"
                shadow="lg"
                isHoverable
              >
                <CardBody className="p-6 md:p-8">
                  <div className="p-4 rounded-2xl bg-primary/10 w-fit mb-6">
                    <Icon 
                      icon={serviceItems[currentIndex].icon} 
                      className="text-primary text-2xl md:text-3xl" 
                    />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold mb-3">
                    {t(`services.items.${serviceItems[currentIndex].index}.title`)}
                  </h3>
                  <p className="text-default-600 text-sm md:text-base mb-6">
                    {t(`services.items.${serviceItems[currentIndex].index}.description`)}
                  </p>
                  <Button 
                    color="primary" 
                    variant="shadow"
                    startContent={<Icon icon="lucide:arrow-right" className="text-lg" />}
                    size="md"
                    className="w-full font-medium"
                  >
                    {t('services.learnMore')}
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Card Direito (Ocapo) - Oculto em telas muito pequenas */}
          <div className="hidden sm:block absolute right-positon-card-service sm:w-3/4 md:w-1/3 lg:w-1/4 xl:w-1/5 z-10 transform translate-x-1/5">
            <Card 
              className="border border-divider bg-content2/50 backdrop-blur-sm opacity-70 transition-all duration-300"
              shadow="sm"
            >
              <CardBody className="p-4 md:p-6">
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <Icon icon={serviceItems[rightIndex].icon} className="text-primary text-xl md:text-2xl" />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2 line-clamp-1">
                  {t(`services.items.${serviceItems[rightIndex].index}.title`)}
                </h3>
                <p className="text-default-600 text-xs md:text-sm line-clamp-2">
                  {t(`services.items.${serviceItems[rightIndex].index}.description`)}
                </p>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Botões de navegação laterais */}
        <button
          onClick={() => {
            prevService();
            handleUserInteraction();
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 sm:left-2 md:left-4 lg:left-8 z-30 rounded-full bg-background/80 backdrop-blur-sm border border-divider p-1.5 sm:p-2 hover:bg-content1 transition-all shadow-sm hover:shadow"
          aria-label="Anterior"
        >
          <Icon icon="lucide:chevron-left" className="text-base sm:text-lg md:text-xl" />
        </button>

        <button
          onClick={() => {
            nextService();
            handleUserInteraction();
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 sm:right-2 md:right-4 lg:right-8 z-30 rounded-full bg-background/80 backdrop-blur-sm border border-divider p-1.5 sm:p-2 hover:bg-content1 transition-all shadow-sm hover:shadow"
          aria-label="Próximo"
        >
          <Icon icon="lucide:chevron-right" className="text-base sm:text-lg md:text-xl" />
        </button>

        {/* Indicadores/Bolinhas de navegação com indicação de autoplay */}
        <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-1.5 sm:space-x-2">
          {Array.from({ length: totalItems }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                handleUserInteraction();
              }}
              className={`h-2 sm:h-2.5 transition-all rounded-full ${
                currentIndex === index ? 'w-8 sm:w-10 bg-primary' : 'w-2 sm:w-2.5 bg-default-200 hover:bg-default-300'
              }`}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
          
          {/* Botão de controle do autoplay */}
          <button 
            onClick={() => setIsAutoPlay(!isAutoPlay)} 
            className={`ml-3 sm:ml-4 rounded-full p-1.5 transition-colors ${isAutoPlay ? 'bg-primary text-white' : 'bg-default-200 text-default-600 hover:bg-default-300'}`}
            aria-label={isAutoPlay ? 'Pausar apresentação automática' : 'Iniciar apresentação automática'}
            title={isAutoPlay ? 'Pausar apresentação automática' : 'Iniciar apresentação automática'}
          >
            <Icon icon={isAutoPlay ? "lucide:pause" : "lucide:play"} className="text-xs sm:text-sm" />
          </button>
        </div>

        {/* Indicador de progresso animado */}
        {isAutoPlay && (
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mt-2 h-0.5 bg-default-200 overflow-hidden rounded-full">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              key={currentIndex} // Reset animation when slide changes
              transition={{ 
                duration: autoPlayDelay / 1000, 
                ease: "linear",
                repeat: 0
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};