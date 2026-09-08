import CtaButton from "@/components/CtaButton";
import { cta } from "@/lib/site-config";

export default function CTA() {
  return (
    <section id="cta" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-3xl bg-gradient-to-br from-brand-soft to-white px-6 py-12 text-center ring-1 ring-brand/20 sm:px-12 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            {cta.description}
          </p>

          <div className="mt-8 flex justify-center">
            <CtaButton size="lg" className="w-full sm:w-auto" />
          </div>

          <p className="mt-6 text-sm text-slate-500">{cta.note}</p>
        </div>
      </div>
    </section>
  );
}
