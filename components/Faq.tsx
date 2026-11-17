import type { FaqItem } from "@/lib/content/types";

type Props = {
  eyebrow: string;
  heading: string;
  items: readonly FaqItem[];
};

/** 開閉は <details> に任せ、クライアントJSを持たない。 */
export default function Faq({ eyebrow, heading, items }: Props) {
  return (
    <section
      id="faq"
      className="scroll-mt-28 border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="text-sm font-bold tracking-wide text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-jp-wrap text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {heading}
        </h2>

        <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
          {items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-4 py-5 text-base font-bold text-ink [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden
                  className="mt-0.5 shrink-0 text-xl leading-none text-accent transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
