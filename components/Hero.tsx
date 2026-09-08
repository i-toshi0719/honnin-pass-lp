import CtaButton from "@/components/CtaButton";
import { hero } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-accent-soft to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-accent/30 bg-white px-4 py-1.5 text-xs font-medium text-accent sm:text-sm">
            イベント・店舗の運営者向け
          </p>

          <h1 className="mt-6 text-balance text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            {hero.concept}
          </h1>

          <p className="mt-5 text-balance text-lg font-semibold text-slate-700 sm:text-xl">
            {hero.headline}
          </p>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <CtaButton size="lg" className="w-full sm:w-auto" />
            <a
              href="#about"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-colors hover:border-slate-400 sm:w-auto"
            >
              ほんにんPASSとは
            </a>
          </div>

          <div className="mt-8 inline-flex flex-col gap-1 rounded-2xl border border-accent/20 bg-white px-5 py-4 shadow-sm">
            <p className="text-sm font-bold text-accent sm:text-base">
              {hero.highlight}
            </p>
            <p className="text-sm text-slate-600">{hero.highlightNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
