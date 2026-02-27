import { useEffect, useRef, useState } from 'react';

/**
 * Hook para detectar quando um elemento está visível na viewport
 * Útil para animações ao scroll
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      }
    }, {
      threshold: 0.1,
      ...options,
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);  

  return [ref, isInView];
}
