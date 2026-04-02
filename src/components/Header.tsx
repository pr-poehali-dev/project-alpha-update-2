interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-bold">Крым 2026</div>
        <nav className="flex gap-8">
          <a
            href="#routes"
            className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-sm"
          >
            Маршруты
          </a>
          <a
            href="#gastro"
            className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-sm"
          >
            Гастрономия
          </a>
          <a
            href="#entertainment"
            className="text-white hover:text-amber-300 transition-colors duration-300 uppercase text-sm"
          >
            Развлечения
          </a>
        </nav>
      </div>
    </header>
  );
}