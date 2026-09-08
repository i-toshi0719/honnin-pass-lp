import { benefits } from "@/lib/site-config";

export default function Benefits() {
  return (
    <section id="benefits" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {benefits.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {benefits.description}
        </p>

        <div className="mt-10 rounded-2xl border border-accent/20 bg-accent-soft p-6 sm:p-8">
          <p className="text-lg font-bold text-ink sm:text-xl">
            {benefits.highlight.title}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            {benefits.highlight.body}
          </p>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <p className="text-base font-bold text-ink">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
