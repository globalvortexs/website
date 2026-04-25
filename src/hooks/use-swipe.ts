import { useRef } from "react";
import type { TouchEvent } from "react";

interface UseSwipeOptions {
  threshold?: number;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

/**
 * Detecção mínima de swipe horizontal em touch devices.
 */
export const useSwipe = ({ threshold = 50, onSwipeLeft, onSwipeRight }: UseSwipeOptions) => {
  const startRef = useRef(0);
  const endRef = useRef(0);

  const handleTouchStart = (event: TouchEvent) => {
    startRef.current = event.targetTouches[0].clientX;
    endRef.current = event.targetTouches[0].clientX;
  };

  const handleTouchMove = (event: TouchEvent) => {
    endRef.current = event.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = startRef.current - endRef.current;
    if (delta > threshold) onSwipeLeft();
    else if (delta < -threshold) onSwipeRight();
  };

  return { handleTouchStart, handleTouchMove, handleTouchEnd };
};
