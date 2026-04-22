export default function Featured() {
  const routes = [
    { num: "01", title: "Ялтинская ривьера", desc: "Воронцовский дворец, Ласточкино гнездо, набережная", img: "https://cdn.poehali.dev/projects/b856572b-32a3-446b-bdd1-0504884a282a/bucket/fdded0a8-4833-4975-841a-06da9964e373.jpg" },
    { num: "02", title: "Херсонес Таврический", desc: "Античный полис, руины базилик, закат над морем", img: "https://cdn.poehali.dev/projects/b856572b-32a3-446b-bdd1-0504884a282a/bucket/917ad2a3-2bda-40e6-bcac-87000fa0e277.jpg" },
    { num: "03", title: "Горный Крым", desc: "Ай-Петри, Большой каньон, плато Чатыр-Даг", img: "https://cdn.poehali.dev/projects/b856572b-32a3-446b-bdd1-0504884a282a/files/253519ac-e62c-49d3-93db-ce736d54d58e.jpg" },
    { num: "04", title: "Бахчисарай", desc: "Ханский дворец, пещерные города Мангуп и Эски-Кермен", img: "https://cdn.poehali.dev/projects/b856572b-32a3-446b-bdd1-0504884a282a/files/fb82872b-aaeb-491d-8576-102c5e3b9726.jpg" },
    { num: "05", title: "Керченский полуостров", desc: "Гора Митридат, античные некрополи, крепость Ени-Кале", img: "https://cdn.poehali.dev/projects/b856572b-32a3-446b-bdd1-0504884a282a/files/c7dd639d-7c0a-4004-a168-986c970d8c6a.jpg" },
    { num: "06", title: "Судакская крепость", desc: "Генуэзская цитадель, мыс Меганом, виноградники", img: "https://cdn.poehali.dev/projects/b856572b-32a3-446b-bdd1-0504884a282a/files/ac2509d7-00e4-44bc-9e87-6f5c00b8e761.jpg" },
    { num: "07", title: "Феодосия", desc: "Галерея Айвазовского, башня Константина, набережная", img: "https://cdn.poehali.dev/projects/b856572b-32a3-446b-bdd1-0504884a282a/bucket/209ea97f-343e-4178-be11-2854244213d9.png" },
    { num: "08", title: "Природные заповедники", desc: "Карадаг, мыс Казантип, степные просторы", img: "https://cdn.poehali.dev/projects/b856572b-32a3-446b-bdd1-0504884a282a/bucket/9d128163-966f-4b0d-802d-790449f00c5a.jpg" },
    { num: "09", title: "Коктебель", desc: "Волошинский дом, завод вина «Коктебель», карнавал", img: "https://cdn.poehali.dev/projects/b856572b-32a3-446b-bdd1-0504884a282a/files/46b15a72-3ae1-4ed3-8bf3-a9eb7adc36ca.jpg" },
    { num: "10", title: "Севастополь", desc: "Балаклавская бухта, Малахов курган, Панорама", img: "https://cdn.poehali.dev/projects/b856572b-32a3-446b-bdd1-0504884a282a/bucket/8f0dc947-c285-42cf-b64a-87095b4bbdad.jpg" },
  ];

  return (
    <div id="routes" className="bg-white px-4 sm:px-6 py-12 sm:py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 sm:mb-16">
          <h3 className="uppercase mb-3 text-xs sm:text-sm tracking-widest text-neutral-400">10 авторских маршрутов</h3>
          <p className="text-2xl sm:text-3xl lg:text-5xl mb-3 sm:mb-4 text-neutral-900 leading-tight font-bold max-w-2xl">
            Крым, который хочется открыть снова
          </p>
          <p className="text-neutral-500 text-base sm:text-lg leading-relaxed max-w-xl">
            Каждый маршрут — смесь истории, легенд и живых впечатлений. От античных руин до горных троп.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {routes.map((route) => (
            <div key={route.num} className="group cursor-pointer overflow-hidden">
              <div className="relative overflow-hidden h-64">
                <img
                  src={route.img}
                  alt={route.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <span className="absolute top-4 left-4 text-white font-mono text-xs opacity-70">{route.num}</span>
              </div>
              <div className="pt-4 pb-6 border-b border-neutral-100 group-hover:border-amber-400 transition-colors duration-300">
                <h4 className="font-bold text-neutral-900 text-lg group-hover:text-amber-600 transition-colors">{route.title}</h4>
                <p className="text-neutral-500 text-sm mt-1">{route.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="gastro" className="mt-16 sm:mt-24 flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
          <div className="w-full lg:w-1/2 h-[260px] sm:h-[400px] lg:h-[500px] overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/b856572b-32a3-446b-bdd1-0504884a282a/files/13a39efb-ba2a-4e20-a1b7-4cc75d6928e8.jpg"
              alt="Крымская кухня"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="uppercase mb-3 text-xs sm:text-sm tracking-widest text-neutral-400">Гастрономия</h3>
            <p className="text-2xl sm:text-3xl lg:text-4xl mb-5 sm:mb-6 text-neutral-900 leading-tight font-bold">
              Вкус Крыма — отдельное путешествие
            </p>
            <div className="space-y-4 text-neutral-600">
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-lg">✦</span>
                <div>
                  <strong className="text-neutral-900">Рыбные рестораны Балаклавы</strong> — свежевыловленная барабуля, устрицы, мидийный суп
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-lg">✦</span>
                <div>
                  <strong className="text-neutral-900">Крымскотатарская кухня</strong> — чебуреки, янтык, кубете, пахлава из Бахчисарая
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-lg">✦</span>
                <div>
                  <strong className="text-neutral-900">Винодельни Коктебеля и Нового Света</strong> — дегустации легендарных крымских вин
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-500 text-lg">✦</span>
                <div>
                  <strong className="text-neutral-900">Рынки Симферополя</strong> — специи, сыры, лаванда, домашнее варенье
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}