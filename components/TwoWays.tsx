import Link from "next/link";

import CtaButton from "@/components/CtaButton";

type Action =
  | { type: "cta"; label: string }
  | { type: "link"; label: string; href: string };

type Props = {
  eyebrow: string;
  heading: string;
  description: string;
  items: readonly {
    status: string;
    title: string;
    body: string;
    points: readonly string[];
    action: Action;
  }[];
};

/** 「公式LINEで始める」と「自社の公式アカウントに組み込む」の2段階を並べる。 */
export default function TwoWays({ eyebrow, heading, description, items }: Props) {
  return (
    <section id="two-ways" className="scroll-mt-28 bg-accent-soft">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="text-sm font-bold tracking-wide text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-jp-wrap text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {description}
        </p>

        <ul className="mt-10 grid gap-5 lg:grid-cols-2">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 sm:p-8"
            >
              <p className="text-[13px] font-bold text-accent">{item.status}</p>
              <h3 className="text-xl font-bold text-ink sm:text-2xl">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-slate-600">
                {item.body}
              </p>
              <ul className="list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-slate-700">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                {item.action.type === "cta" ? (
                  <CtaButton label={item.action.label} />
                ) : (
                  <Link
                    href={item.action.href}
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition-colors hover:border-slate-400"
                  >
                    {item.action.label}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
