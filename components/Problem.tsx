import { problem } from "@/lib/site-config";

export default function Problem() {
  return (
    <section id="problem" className="scroll-mt-28 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {problem.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {problem.description}
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problem.items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
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
