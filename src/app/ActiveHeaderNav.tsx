"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#inicio", label: "Início", id: "inicio" },
  { href: "#servicos", label: "Serviços", id: "servicos" },
  { href: "#sobre", label: "Sobre", id: "sobre" },
  { href: "#trabalhe-conosco", label: "Trabalhe conosco", id: "trabalhe-conosco" },
  { href: "#contato", label: "Fale conosco", id: "contato" },
];

export default function ActiveHeaderNav() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    function updateActiveSection() {
      const scrollPosition = window.scrollY + 150;
      const visibleSections = sections.filter(
        (section) => section.offsetTop <= scrollPosition,
      );
      const currentSection = visibleSections[visibleSections.length - 1];

      if (currentSection?.id) {
        setActiveSection(currentSection.id);
      }
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <nav className="hidden xl:flex gap-6 xl:gap-8 text-base xl:text-lg font-medium">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setActiveSection(item.id)}
            className={`transition ${
              isActive
                ? "font-bold text-[#b8892d]"
                : "text-[#111] hover:text-[#b8892d]"
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
