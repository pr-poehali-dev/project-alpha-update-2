import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/b856572b-32a3-446b-bdd1-0504884a282a/files/4fb945cd-90fe-4d04-a9e2-1503da8ba296.jpg"
          alt="Крым — панорама побережья"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 w-full">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 opacity-80 font-light">Путеводитель по полуострову</p>
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4 sm:mb-6 leading-none">
          КРЫМ
        </h1>
        <p className="text-base sm:text-lg md:text-2xl max-w-xs sm:max-w-xl mx-auto opacity-90 font-light leading-snug">
          10 авторских маршрутов · Гастрономия · История и легенды
        </p>
        <a
          href="#routes"
          className="inline-block mt-8 sm:mt-10 border border-white text-white px-6 sm:px-8 py-3 text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          Начать путешествие
        </a>
      </div>
    </div>
  );
}