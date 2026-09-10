import { heroSteps } from "@/lib/site-config";

export default function HeroSteps() {
  return (
    <div>
      <p className="text-center text-sm font-bold tracking-wide text-accent sm:text-base">
        {heroSteps.eyebrow}
      </p>

      <ol className="mt-6 grid gap-6 sm:grid-cols-3 sm:gap-4 lg:gap-8">
        {heroSteps.items.map((item) => {
          const Icon = item.icon;

          return (
            <li
              key={item.number}
              className="flex gap-4 sm:flex-col sm:items-center sm:text-center"
            >
              <div className="relative shrink-0">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
                </span>
                <span className="absolute -left-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-white">
                  {item.number}
                </span>
              </div>

              <div className="min-w-0 sm:mt-4">
                <p className="text-base font-bold text-ink sm:text-lg">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
