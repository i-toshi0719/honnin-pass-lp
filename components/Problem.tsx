import { problem } from "@/lib/site-config";

export default function Problem() {
  return (
    <section id="problem" className="scroll-mt-28 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-wide text-accent">
            {problem.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {problem.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {problem.description}
          </p>
        </div>

        <ul className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {problem.items.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.title} className="flex gap-4 sm:flex-col sm:gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
                </span>
                <div>
                  <p className="text-lg font-bold leading-snug text-ink">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {item.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
