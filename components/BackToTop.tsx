"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 800);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="eyebrow fixed bottom-24 right-6 z-40 flex h-12 w-12 items-center justify-center bg-ink text-xs text-white shadow-lg transition-colors hover:bg-accent-dark"
    >
      ↑
    </button>
  );
}
