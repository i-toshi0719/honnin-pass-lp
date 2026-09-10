import CtaButton from "@/components/CtaButton";
import { cta } from "@/lib/site-config";

export default function CTA() {
  return (
    <section id="cta" className="scroll-mt-28 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="rounded-3xl bg-gradient-to-br from-accent-soft to-white px-6 py-12 text-center ring-1 ring-accent/20 sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            {cta.description}
          </p>

          <div className="mt-8 flex justify-center">
            <CtaButton size="lg" className="w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
