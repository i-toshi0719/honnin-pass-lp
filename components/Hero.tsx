import Image from "next/image";

import CtaButton from "@/components/CtaButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-accent-soft to-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="sr-only">
          「ほんにんPASS」なら身分証の不安にさよなら。
        </h1>

        <div className="overflow-hidden rounded-3xl shadow-xl shadow-navy/10 ring-1 ring-slate-200/80">
          <Image
            src="/hero.png"
            alt="撮影会の受付で、身分証の提出をためらう参加者と、確認をお願いするスタッフ。ほんにんPASSなら身分証の不安にさよなら。"
            width={1280}
            height={720}
            priority
            className="h-auto w-full"
            sizes="(min-width: 1152px) 1152px, 100vw"
          />
        </div>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <CtaButton size="lg" className="w-full sm:w-auto" />
          <a
            href="#about"
            className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-colors hover:border-slate-400 sm:w-auto"
          >
            ほんにんPASSとは
          </a>
        </div>
      </div>
    </section>
  );
}
