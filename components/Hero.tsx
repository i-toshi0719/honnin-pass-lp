import Image from "next/image";
import Link from "next/link";

import CtaButton from "@/components/CtaButton";
import PhoneMockup from "@/components/PhoneMockup";

type Visual =
  | {
      type: "screens";
      screens: readonly { src: string; alt: string }[];
    }
  | { type: "image"; src: string; alt: string; width: number; height: number };

type Props = {
  eyebrow: string;
  headline: readonly string[];
  /** スマホの最初の画面に出す短い補足 */
  note: string;
  /** PC幅で出す説明文 */
  description: string;
  tags: readonly string[];
  /** 省略時は CtaButton の既定の文言 */
  primaryLabel?: string;
  secondary?: { label: string; href: string };
  status?: string;
  visual: Visual;
  /** ヒーローの下段に置く内容（運営者の3ステップなど） */
  children?: React.ReactNode;
};

/**
 * ファーストビュー。
 * スマホでは「見出し → 絵 → 短い補足 → ボタン1つ」だけを最初の画面に収め、
 * 説明文・タグ・2つ目のボタンは sm 以上でのみ表示する。
 */
export default function Hero({
  eyebrow,
  headline,
  note,
  description,
  tags,
  primaryLabel,
  secondary,
  status,
  visual,
  children,
}: Props) {
  return (
    <section className="border-b border-slate-100 bg-gradient-to-b from-accent-soft to-white">
      <div className="mx-auto grid max-w-6xl gap-x-16 gap-y-4 px-5 py-5 sm:gap-y-6 sm:px-6 sm:py-14 lg:grid-cols-2 lg:py-20">
        <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
          <p className="text-[13px] font-bold text-accent sm:text-sm">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-[28px] font-bold leading-[1.35] tracking-tight text-ink sm:mt-4 sm:text-4xl sm:leading-tight lg:text-[2.75rem] lg:leading-[1.3]">
            {headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
        </div>

        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          {visual.type === "screens" ? (
            <div className="flex h-[280px] items-start justify-center gap-3.5 overflow-hidden rounded-3xl bg-accent/10 sm:h-[360px] sm:gap-6 lg:h-auto lg:overflow-visible lg:px-6 lg:pb-14 lg:pt-6">
              {visual.screens.map((screen, index) => (
                <PhoneMockup
                  key={screen.src}
                  src={screen.src}
                  alt={screen.alt}
                  priority
                  sizes="(min-width: 1024px) 210px, (min-width: 640px) 190px, 150px"
                  className={`w-[150px] shrink-0 sm:w-[190px] lg:w-[210px] ${
                    index === 1 ? "mt-[52px]" : "mt-5"
                  }`}
                />
              ))}
            </div>
          ) : (
            <Image
              src={visual.src}
              alt={visual.alt}
              width={visual.width}
              height={visual.height}
              preload
              sizes="(min-width: 1024px) 540px, 100vw"
              className="h-auto w-full rounded-3xl"
            />
          )}
        </div>

        <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
          <p className="text-[15px] leading-relaxed text-slate-600 sm:hidden">
            {note}
          </p>
          <p className="hidden text-lg leading-relaxed text-slate-600 sm:block">
            {description}
          </p>

          <ul className="mt-6 hidden flex-wrap gap-2 sm:flex">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-navy px-3.5 py-1.5 text-sm font-bold text-white"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <CtaButton
              label={primaryLabel}
              size="lg"
              className="w-full whitespace-nowrap sm:w-auto"
            />
            {secondary ? (
              <Link
                href={secondary.href}
                className="hidden items-center justify-center whitespace-nowrap rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-colors hover:border-slate-400 sm:inline-flex"
              >
                {secondary.label}
              </Link>
            ) : null}
          </div>

          {status ? (
            <p className="mt-4 text-[13px] leading-relaxed text-slate-600">
              {status}
            </p>
          ) : null}
        </div>
      </div>

      {children ? (
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-4 sm:px-6 sm:pb-16">
          {children}
        </div>
      ) : null}
    </section>
  );
}
