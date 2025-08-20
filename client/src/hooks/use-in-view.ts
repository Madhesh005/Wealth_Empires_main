import { useEffect, useRef, useState, MutableRefObject } from "react";

export type UseInViewOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

export function useInView<T extends HTMLElement = HTMLElement>(
  options: UseInViewOptions = {}
): { ref: MutableRefObject<T | null>; inView: boolean } {
  const { root = null, rootMargin = "0px 0px -10% 0px", threshold = 0.15, once = true } = options;
  const elementRef = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const target = elementRef.current;
    if (!target) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { root, rootMargin, threshold }
    );

    observer.observe(target);
    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, once]);

  return { ref: elementRef, inView };
}


