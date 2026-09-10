import Image from "next/image";

import { privacyDesign } from "@/lib/site-config";

export default function PrivacyDesign() {
  const { provider } = privacyDesign;

  return (
    <section id="personal-data" className="scroll-mt-28 bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-bold tracking-wide text-sky-300">
            {privacyDesign.eyebrow}
          </p>
          <h2 className="mt-2 text-jp-wrap text-3xl font-bold tracking-tight sm:text-4xl">
            {privacyDesign.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/85">
            {privacyDesign.lead}
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {privacyDesign.items.map((item) => {
            const Icon = item.icon;

            return (
              <li
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/10 p-6"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/12 text-white">
                  <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
                </span>
                <p className="mt-5 text-lg font-bold">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {item.body}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mx-auto mt-16 max-w-4xl text-center sm:mt-20">
          <p className="text-jp-wrap text-2xl font-bold leading-snug tracking-tight sm:text-4xl">
            {privacyDesign.statement}
          </p>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
            {privacyDesign.statementNote}
          </p>
          <p className="mt-4 text-xs leading-relaxed text-white/50 sm:text-sm">
            {privacyDesign.disclaimer}
          </p>
        </div>

        {/* ブランド規約に従い、ロゴの周囲にマーク高さ1つ分（32px）以上の余白を確保する */}
        <div className="mt-16 flex flex-col items-center gap-6 border-t border-white/15 pt-12 sm:mt-20 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
            <a
              href={provider.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${provider.name} 公式サイト（新しいタブで開きます）`}
              className="inline-flex shrink-0 rounded-lg p-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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
            <p className="text-center text-sm leading-relaxed text-white/80 sm:text-left sm:text-base">
              {provider.tagline}
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-2 lg:justify-end">
            {provider.badges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90"
              >
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
