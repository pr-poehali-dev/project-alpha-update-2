export default function Featured() {
  const routes = [
    { num: "01", title: "Ялтинская ривьера", desc: "Воронцовский дворец, Ласточкино гнездо, набережная" },
    { num: "02", title: "Херсонес Таврический", desc: "Античный полис, руины базилик, закат над морем" },
    { num: "03", title: "Горный Крым", desc: "Ай-Петри, Большой каньон, плато Чатыр-Даг" },
    { num: "04", title: "Бахчисарай", desc: "Ханский дворец, пещерные города Мангуп и Эски-Кермен" },
    { num: "05", title: "Керченский полуостров", desc: "Гора Митридат, античные некрополи, крепость Ени-Кале" },
    { num: "06", title: "Судакская крепость", desc: "Генуэзская цитадель, мыс Меганом, виноградники" },
    { num: "07", title: "Феодосия", desc: "Галерея Айвазовского, башня Константина, набережная" },
    { num: "08", title: "Природные заповедники", desc: "Карадаг, мыс Казантип, степные просторы" },
    { num: "09", title: "Коктебель", desc: "Волошинский дом, завод вина «Коктебель», карнавал" },
    { num: "10", title: "Севастополь", desc: "Балаклавская бухта, Малахов курган, Панорама" },
  ];

  return (
    <div id="routes" className="bg-white px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-16">
          <div className="lg:w-1/2">
            <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-400">10 авторских маршрутов</h3>
            <p className="text-3xl lg:text-5xl mb-8 text-neutral-900 leading-tight font-bold">
              Крым, который<br />хочется открыть<br />снова
            </p>
            <p className="text-neutral-500 text-lg leading-relaxed mb-8">
              Каждый маршрут — это смесь истории, легенд и живых впечатлений. От античных руин до горных троп, от винодельческих долин до диких пляжей.
            </p>
            <button className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer uppercase tracking-widest">
              Все маршруты
            </button>
          </div>

          <div className="lg:w-1/2">
            {routes.map((route) => (
              <div
                key={route.num}
                className="flex items-start gap-4 py-4 border-b border-neutral-100 group cursor-pointer hover:border-neutral-900 transition-colors duration-300"
              >
                <span className="text-neutral-300 text-sm font-mono mt-1 group-hover:text-amber-500 transition-colors">{route.num}</span>
                <div>
                  <h4 className="font-semibold text-neutral-900 group-hover:text-amber-600 transition-colors">{route.title}</h4>
                  <p className="text-neutral-500 text-sm mt-0.5">{route.desc}</p>
                </div>
                <span className="ml-auto text-neutral-300 group-hover:text-neutral-900 transition-colors text-lg">→</span>
              </div>
            ))}
          </div>
        </div>

        <div id="gastro" className="mt-24 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 h-[400px] lg:h-[500px] overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/b856572b-32a3-446b-bdd1-0504884a282a/files/13a39efb-ba2a-4e20-a1b7-4cc75d6928e8.jpg"
              alt="Крымская кухня"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-400">Гастрономия</h3>
            <p className="text-3xl lg:text-4xl mb-6 text-neutral-900 leading-tight font-bold">
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
