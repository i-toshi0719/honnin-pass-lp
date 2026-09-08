import { howItWorks } from "@/lib/site-config";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-28 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {howItWorks.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {howItWorks.description}
        </p>

        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {howItWorks.steps.map((step) => (
            <li
              key={step.number}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-brand">
                  {step.number}
                </span>
                <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-dark">
                  {step.audience}
                </span>
              </div>
              <p className="mt-4 text-lg font-bold text-ink">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
