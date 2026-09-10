import { pricing } from "@/lib/site-config";

export default function Pricing() {
  const { free, plan, upcoming } = pricing;
  const FreeIcon = free.icon;
  const FeatureIcon = plan.featureIcon;

  return (
    <section id="pricing" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-wide text-accent">
            {pricing.eyebrow}
          </p>
          <h2 className="mt-2 text-jp-wrap text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {pricing.heading}
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl bg-accent px-6 py-6 text-white sm:flex-row sm:items-center sm:gap-6 sm:px-8">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15">
            <FreeIcon className="h-7 w-7" strokeWidth={2} aria-hidden />
          </span>
          <div>
            <p className="text-jp-wrap text-xl font-bold sm:text-2xl">{free.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-white/85 sm:text-base">
              {free.body}
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[3fr_2fr]">
          <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <span className="absolute right-6 top-6 rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent sm:right-8 sm:top-8">
              {plan.badge}
            </span>

            <p className="text-sm font-bold text-slate-500">{plan.name}</p>
            <p className="mt-3 flex flex-wrap items-baseline gap-x-2">
              <span className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                {plan.price}
              </span>
              <span className="text-sm font-semibold text-slate-500 sm:text-base">
                {plan.unit}
              </span>
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <FeatureIcon
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed text-slate-700 sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 border-t border-slate-100 pt-6 text-sm leading-relaxed text-slate-600">
              {plan.recommend}
            </p>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-slate-200 p-6 sm:p-8">
            <p className="text-sm font-bold text-slate-500">{upcoming.title}</p>
            <ul className="mt-5 flex flex-col gap-3">
              {upcoming.items.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-slate-500 before:mr-2 before:text-slate-400 before:content-['—']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-slate-500 sm:text-sm">
          {pricing.note}
        </p>
      </div>
    </section>
  );
}
