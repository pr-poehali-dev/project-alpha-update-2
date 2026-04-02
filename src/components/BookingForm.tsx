import { useState } from "react";

const ROUTES = [
  "Ялтинская ривьера",
  "Херсонес Таврический",
  "Горный Крым",
  "Бахчисарай",
  "Керченский полуостров",
  "Судакская крепость",
  "Феодосия",
  "Природные заповедники",
  "Коктебель",
  "Севастополь",
];

export default function BookingForm() {
  const [form, setForm] = useState({ name: "", phone: "", route: "", comment: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://functions.poehali.dev/8459b160-d4fc-4224-8fba-0f745169910e", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", phone: "", route: "", comment: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full bg-transparent border-b border-neutral-600 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors duration-300 text-sm sm:text-base";

  return (
    <section id="booking" className="bg-neutral-950 px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-2xl mx-auto">
        <h3 className="uppercase mb-3 text-xs sm:text-sm tracking-widest text-neutral-400">Забронировать тур</h3>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-10">
          Оставьте заявку —<br />мы свяжемся с вами
        </p>

        {status === "success" ? (
          <div className="border border-amber-400 text-amber-400 p-6 sm:p-8 text-center">
            <p className="text-lg sm:text-xl font-semibold mb-2">Заявка принята!</p>
            <p className="text-neutral-400 text-sm">Мы свяжемся с вами в течение нескольких часов.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm underline text-neutral-400 hover:text-white transition-colors"
            >
              Отправить ещё одну
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Ваше имя *"
              className={inputClass}
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Телефон *"
              type="tel"
              className={inputClass}
            />
            <select
              name="route"
              value={form.route}
              onChange={handleChange}
              className={`${inputClass} cursor-pointer`}
            >
              <option value="" disabled className="bg-neutral-900">Выберите маршрут</option>
              {ROUTES.map((r) => (
                <option key={r} value={r} className="bg-neutral-900">{r}</option>
              ))}
            </select>
            <textarea
              name="comment"
              value={form.comment}
              onChange={handleChange}
              placeholder="Комментарий (даты, группа, пожелания)"
              rows={3}
              className={`${inputClass} resize-none`}
            />

            {status === "error" && (
              <p className="text-red-400 text-sm -mt-4">Ошибка отправки. Попробуйте ещё раз.</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="self-start bg-amber-400 text-black px-8 py-3.5 text-sm uppercase tracking-widest font-semibold hover:bg-amber-300 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {status === "loading" ? "Отправка..." : "Забронировать"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}