import { SITE_NAME, about } from "@/lib/site-config";

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {about.heading}
            </h2>
            <p className="mt-5 text-lg font-semibold leading-relaxed text-slate-800">
              {about.lead}
            </p>
            {about.body.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-base leading-relaxed text-slate-600"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50 px-6">
            {about.points.map((point) => (
              <div
                key={point.label}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <dt className="w-32 shrink-0 text-sm font-bold text-accent">
                  {point.label}
                </dt>
                <dd className="text-base text-slate-700">{point.value}</dd>
              </div>
            ))}
            <div className="py-5">
              <p className="text-sm leading-relaxed text-slate-500">
                {SITE_NAME}は、運営者が参加者を受け入れる場面をシンプルにするための仕組みです。
              </p>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
