import { useEffect } from 'react';

// Hook: useRevealOnScroll
// Usage: const ref = useRef(null); useRevealOnScroll(ref, { rootMargin, threshold, stagger });
export default function useRevealOnScroll(ref, { root = null, rootMargin = '0px 0px -15% 0px', threshold = 0.08, stagger = 80 } = {}) {
  useEffect(() => {
    if (!ref || !ref.current) return;
    const container = ref.current;
    const items = Array.from(container.querySelectorAll('[data-reveal]'));
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
          // set staggered delay based on data-index
          const idx = Number(el.dataset.revealIndex || 0);
          el.style.transitionDelay = `${idx * stagger}ms`;
          el.classList.add('reveal-active');
          observer.unobserve(el);
        }
      });
    }, { root, rootMargin, threshold });

    items.forEach((el, i) => {
      el.dataset.revealIndex = i;
      el.classList.add('reveal-hidden');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ref, root, rootMargin, threshold, stagger]);
}
