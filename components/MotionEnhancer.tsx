"use client";

import { useEffect } from "react";

export default function MotionEnhancer() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const targets = document.querySelectorAll<HTMLElement>(
      ".intro-copy, .showreel-panel, .section-center-heading, .service-card, .projects-heading, .project-card, .estimate-copy, .estimator-card"
    );
    targets.forEach((element, index) => {
      element.classList.add("reveal-item");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    targets.forEach((element) => observer.observe(element));
    document.documentElement.classList.add("motion-ready");

    const hero = document.querySelector<HTMLElement>(".hero-art-wrap");
    const canParallax = window.matchMedia("(pointer: fine)").matches && hero;
    let frame = 0;
    const move = (event: PointerEvent) => {
      if (!hero) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = hero.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - 0.5;
        const y = (event.clientY - box.top) / box.height - 0.5;
        hero.style.setProperty("--parallax-x", `${Math.round(x * 22)}px`);
        hero.style.setProperty("--parallax-y", `${Math.round(y * 14)}px`);
      });
    };
    const reset = () => {
      if (!hero) return;
      hero.style.setProperty("--parallax-x", "0px");
      hero.style.setProperty("--parallax-y", "0px");
    };
    if (canParallax) {
      hero.addEventListener("pointermove", move);
      hero.addEventListener("pointerleave", reset);
    }

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
      targets.forEach((element) => {
        element.classList.remove("reveal-item", "is-visible");
        element.style.removeProperty("--reveal-delay");
      });
      if (hero) {
        hero.removeEventListener("pointermove", move);
        hero.removeEventListener("pointerleave", reset);
      }
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
