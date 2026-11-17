import Image from "next/image";
import Link from "next/link";

import CtaButton from "@/components/CtaButton";
import PhoneMockup from "@/components/PhoneMockup";

type Visual =
  | {
      type: "screens";
      screens: readonly { src: string; alt: string }[];
    }
  | { type: "image"; src: string; alt: string; width: number; height: number }
  | {
      /** お客様のスマホから運営者のスマホへ、QRを受け渡す場面を2台並べて見せる */
      type: "handoff";
      arrowLabel: string;
      sides: readonly [HandoffSide, HandoffSide];
    };

type HandoffSide = {
  label: string;
  src: string;
  alt: string;
  caption: readonly string[];
  /** sm 以上で caption の代わりに出す文言 */
  captionWide?: readonly string[];
  /** sm 以上でのみ、caption の下に小さく出す補足 */
  note?: readonly string[];
  /** スマホ画面の下端に重ねる小さなラベル（読み取り結果など） */
  badge?: string;
};

type Props = {
  eyebrow?: string;
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
          {eyebrow ? (
            <p className="mb-2 text-[13px] font-bold text-accent sm:mb-4 sm:text-sm">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-[28px] font-bold leading-[1.35] tracking-tight text-ink sm:mt-4 sm:text-4xl sm:leading-tight lg:text-[2.75rem] lg:leading-[1.3]">
            {headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
        </div>

        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          {visual.type === "handoff" ? (
            <Handoff {...visual} />
          ) : visual.type === "screens" ? (
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

/** お客様（本人確認済みのQR）→ 運営者（受付画面）を、矢印でつないで見せる。 */
function Handoff({
  arrowLabel,
  sides,
}: {
  arrowLabel: string;
  sides: readonly [HandoffSide, HandoffSide];
}) {
  const [from, to] = sides;

  return (
    <div className="flex items-center justify-center gap-1.5 rounded-3xl bg-white px-2.5 pb-3.5 pt-4 shadow-sm ring-1 ring-slate-200/70 sm:gap-4 sm:px-6 sm:py-8 lg:shadow-xl lg:shadow-navy/10">
      <HandoffPhone side={from} tone="light" />

      <div className="mb-8 flex w-11 shrink-0 flex-col items-center gap-1 sm:w-16">
        <svg
          aria-hidden="true"
          viewBox="0 0 56 28"
          className="h-6 w-10 text-accent sm:h-7 sm:w-14"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 14h46M42 6l8 8-8 8" />
        </svg>
        <span className="text-[11px] font-bold text-accent sm:text-[13px]">
          {arrowLabel}
        </span>
      </div>

      <HandoffPhone side={to} tone="dark" />
    </div>
  );
}

function HandoffPhone({
  side,
  tone,
}: {
  side: HandoffSide;
  tone: "light" | "dark";
}) {
  return (
    <div className="flex w-32 shrink-0 flex-col items-center gap-2 sm:w-44 sm:gap-3 lg:w-48">
      <span
        className={`rounded-full px-3 py-0.5 text-xs font-bold sm:px-4 sm:py-1 sm:text-sm ${
          tone === "dark" ? "bg-navy text-white" : "bg-accent-soft text-accent"
        }`}
      >
        {side.label}
      </span>
      <div className={`relative w-full ${side.badge ? "mb-2.5 sm:mb-3.5" : ""}`}>
        <PhoneMockup
          src={side.src}
          alt={side.alt}
          priority
          sizes="(min-width: 1024px) 192px, (min-width: 640px) 176px, 128px"
          className="w-full rounded-[1.6rem] p-1.5 shadow-xl sm:rounded-[2rem] sm:p-2 [&>div]:rounded-[1.3rem] sm:[&>div]:rounded-[1.6rem]"
        />
        {side.badge ? (
          <span className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-accent/25 bg-white py-1 pl-1.5 pr-2.5 text-xs font-bold text-ink shadow-md shadow-navy/15 sm:-bottom-4 sm:gap-2 sm:py-1.5 sm:pl-2 sm:pr-4 sm:text-[15px]">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className="h-4 w-4 sm:h-[22px] sm:w-[22px]"
            >
              <circle cx="10" cy="10" r="10" className="fill-accent" />
              <path
                d="M5.5 10.5l3 3 6-6.5"
                fill="none"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {side.badge}
          </span>
        ) : null}
      </div>
      <div className="text-center">
        <p
          className={`text-xs font-bold leading-snug text-ink sm:text-sm ${
            side.captionWide ? "sm:hidden" : ""
          }`}
        >
          {side.caption.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        {side.captionWide ? (
          <p className="hidden text-sm font-bold leading-snug text-ink sm:block">
            {side.captionWide.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        ) : null}
        {side.note ? (
          <p className="mt-1 hidden text-xs leading-normal text-slate-600 sm:block">
            {side.note.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        ) : null}
      </div>
    </div>
  );
}
