import PhoneMockup from "@/components/PhoneMockup";
import { howItWorks } from "@/lib/site-config";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-28 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-wide text-accent">
            HOW IT WORKS
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {howItWorks.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {howItWorks.description}
          </p>
        </div>

        <ol className="mt-12 flex flex-col sm:mt-16">
          {howItWorks.steps.map((step, index) => {
            const isReversed = index % 2 === 1;
            const isLast = index === howItWorks.steps.length - 1;

            return (
              <li key={step.number} className="flex flex-col">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  {/* テキスト側 */}
                  <div className={isReversed ? "lg:order-last" : ""}>
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white shadow-md shadow-navy/20">
                        {step.number}
                      </span>
                      <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
                        {step.audience}
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      {step.body}
                    </p>

                    <ul className="mt-6 flex flex-col gap-3">
                      {step.screens.map((screen, screenIndex) => (
                        <li
                          key={screen.src}
                          className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                        >
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-bold text-accent">
                            {screenIndex + 1}
                          </span>
                          <p className="text-sm leading-relaxed text-slate-700">
                            {screen.caption}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* モックアップ側 */}
                  <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                    <div
                      aria-hidden
                      className="absolute inset-x-4 bottom-0 top-10 rounded-[2.5rem] bg-gradient-to-br from-accent-soft via-accent-soft to-white sm:inset-x-8"
                    />
                    <div
                      aria-hidden
                      className="absolute -right-2 top-4 h-24 w-24 rounded-3xl bg-accent/10 blur-2xl sm:h-32 sm:w-32"
                    />
                    <div className="relative grid grid-cols-2 items-start gap-4 px-4 pb-12 pt-2 sm:gap-6 sm:px-10">
                      {step.screens.map((screen, screenIndex) => (
                        <PhoneMockup
                          key={screen.src}
                          src={screen.src}
                          alt={screen.alt}
                          className={
                            screenIndex === 1
                              ? "translate-y-8 lg:rotate-2"
                              : "lg:-rotate-1"
                          }
                        />
                      ))}
                    </div>
                    <span
                      aria-hidden
                      className="absolute bottom-3 left-8 rounded-full bg-white px-3 py-1 text-xs font-bold tracking-wide text-accent shadow-sm ring-1 ring-accent/20 sm:left-12"
                    >
                      STEP {step.number}
                    </span>
                  </div>
                </div>

                {!isLast ? (
                  <div
                    aria-hidden
                    className="mx-auto my-10 h-16 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent sm:my-14"
                  />
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
