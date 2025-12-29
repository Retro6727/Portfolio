"use client";

import { useEffect } from "react";

export default function ScrollClient() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".section"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("page-in");
            el.classList.remove("page-out");
          } else {
            el.classList.remove("page-in");
            el.classList.add("page-out");
          }
        });
      },
      { root: document.querySelector(".app-content"), threshold: 0.6 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return null;
}
