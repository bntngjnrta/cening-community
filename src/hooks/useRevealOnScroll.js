import { useEffect } from "react";

export const useRevealOnScroll = () => {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const target = e.target;
            target.classList.add("is-revealed");

            const nested = target.querySelectorAll?.(".reveal");
            if (nested?.length)
              nested.forEach((n) => n.classList.add("is-revealed"));

            obs.unobserve(target);
          }
        }
      },
      { threshold: 0.12 },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};
