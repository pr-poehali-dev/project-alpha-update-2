import { useState } from "react";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#routes", label: "Маршруты" },
    { href: "#gastro", label: "Гастрономия" },
    { href: "#entertainment", label: "Развлечения" },
  ];

  return (
    <header className={`absolute top-0 left-0 right-0 z-20 p-4 sm:p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-bold">Крым 2026</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-sm">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Burger button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 bg-black/80 backdrop-blur-sm rounded-lg p-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-base tracking-widest"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
