import { useCases } from "@/lib/site-config";

export default function UseCases() {
  return (
    <section id="use-cases" className="scroll-mt-28 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {useCases.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {useCases.description}
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {useCases.items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <p className="text-lg font-bold text-ink">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
