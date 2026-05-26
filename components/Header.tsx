"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "強み", href: "#why" },
  { label: "サービス", href: "#services" },
  { label: "進め方", href: "#process" },
  { label: "実例", href: "#showcase" },
  { label: "価格", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-warm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-sage-gradient shadow-glow transition-transform group-hover:scale-110" />
          <span className="text-ink font-semibold tracking-tight text-lg">
            PeaceCraft
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft hover:text-sage-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-glow transition-colors"
        >
          無料相談
        </a>

        <a
          href="#contact"
          className="md:hidden text-sm font-medium px-3 py-1.5 rounded-md bg-sage-600 text-white"
        >
          相談
        </a>
      </div>
    </header>
  );
}
