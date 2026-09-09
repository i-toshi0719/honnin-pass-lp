import Image from "next/image";

import { privacyDesign } from "@/lib/site-config";

export default function PrivacyDesign() {
  const { provider } = privacyDesign;

  return (
    <section id="personal-data" className="scroll-mt-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold tracking-wide text-accent">
            {privacyDesign.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {privacyDesign.heading}
          </h2>
          <p className="mt-5 text-lg font-semibold leading-relaxed text-slate-800">
            {privacyDesign.lead}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {privacyDesign.items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <p className="text-base font-bold text-ink">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-2xl border border-accent/20 bg-accent-soft p-6 sm:p-8">
          <p className="text-lg font-bold text-ink sm:text-xl">
            {privacyDesign.highlight.title}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            {privacyDesign.highlight.body}
          </p>
          <p className="mt-5 max-w-3xl text-xs leading-relaxed text-slate-500 sm:text-sm">
            {privacyDesign.note}
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 p-6 sm:p-8">
          <p className="text-sm font-bold text-accent">{provider.label}</p>

          {/* ブランド規約に従い、ロゴの上下左右にマーク高さ1つ分（32px）以上の余白を確保する */}
          <a
            href={provider.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <Image
              src={provider.logo}
              alt={provider.name}
              width={provider.logoWidth}
              height={provider.logoHeight}
              unoptimized
              className="h-8 w-auto"
            />
          </a>

          <ul className="mt-8 flex flex-col gap-2">
            {provider.facts.map((fact) => (
              <li
                key={fact}
                className="text-sm leading-relaxed text-slate-600 before:mr-2 before:text-accent before:content-['—']"
              >
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
