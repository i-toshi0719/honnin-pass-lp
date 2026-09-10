import Image from "next/image";

import CtaButton from "@/components/CtaButton";
import HeroSteps from "@/components/HeroSteps";
import { heroSteps } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-accent-soft to-white">
      <h1 className="sr-only">
        「ほんにんPASS」でわずらわしい身分証にさようなら。
      </h1>

      <div className="w-full">
        <Image
          src="/hero.png"
          alt="撮影会の受付で身分証の提出をためらう参加者と、確認をお願いするスタッフ。参加者はコピーされることへの不安を口にしている。「ほんにんPASS」でわずらわしい身分証にさようなら。"
          width={1280}
          height={720}
          priority
          className="h-auto w-full"
          sizes="100vw"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <HeroSteps />

        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:items-center">
          <CtaButton size="lg" className="w-full sm:w-auto" />
          <a
            href={heroSteps.secondaryHref}
            className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-colors hover:border-slate-400 sm:w-auto"
          >
            {heroSteps.secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
