import { useCallback, useEffect, useRef, useState } from "react";

interface UseCarouselOptions {
  total: number;
  autoplayDelay?: number;
  pauseAfterInteractionMs?: number;
}

export interface UseCarouselReturn {
  currentIndex: number;
  isAutoPlay: boolean;
  setIsAutoPlay: (value: boolean) => void;
  goNext: () => void;
  goPrev: () => void;
  goTo: (index: number) => void;
  pauseAndResume: () => void;
}

/**
 * Estado de um carrossel circular com autoplay e pausa após interação.
 * Separado da UI para poder ser testado isoladamente e reaproveitado.
 */
export const useCarousel = ({
  total,
  autoplayDelay = 5000,
  pauseAfterInteractionMs = 10000,
}: UseCarouselOptions): UseCarouselReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const intervalRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(((index % total) + total) % total);
    },
    [total]
  );

  const pauseAndResume = useCallback(() => {
    setIsAutoPlay(false);
    if (resumeTimeoutRef.current !== null) {
      window.clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsAutoPlay(true);
    }, pauseAfterInteractionMs);
  }, [pauseAfterInteractionMs]);

  useEffect(() => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
    }
    if (isAutoPlay) {
      intervalRef.current = window.setInterval(goNext, autoplayDelay);
    }
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlay, goNext, autoplayDelay, currentIndex]);

  useEffect(
    () => () => {
      if (resumeTimeoutRef.current !== null) {
        window.clearTimeout(resumeTimeoutRef.current);
      }
    },
    []
  );

  return { currentIndex, isAutoPlay, setIsAutoPlay, goNext, goPrev, goTo, pauseAndResume };
};
