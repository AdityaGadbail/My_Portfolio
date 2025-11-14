import { useEffect } from "react";

export default function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const anim = entry.target.getAttribute("data-animate");

          if (entry.isIntersecting) {
            entry.target.classList.add(`animate-${anim}`);
            entry.target.classList.remove("opacity-0");
          } else {
            entry.target.classList.remove(`animate-${anim}`);
            entry.target.classList.add("opacity-0");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
