type Props = {
  eyebrow: string;
  heading: string;
  beforeLabel: string;
  afterLabel: string;
  rows: readonly { before: string; after: string }[];
  note: string;
};

/** 「これまで」と「ほんにんPASS」を、行ごとに左右で対比する。スマホでも2列のまま並べる。 */
export default function BeforeAfter({
  eyebrow,
  heading,
  beforeLabel,
  afterLabel,
  rows,
  note,
}: Props) {
  return (
    <section id="before-after" className="scroll-mt-28 bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-bold tracking-wide text-accent">{eyebrow}</p>
        <h2 className="mt-2 text-jp-wrap text-[26px] font-bold leading-snug tracking-tight text-ink sm:text-4xl">
          {heading}
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-x-2 gap-y-2.5 sm:mt-10 sm:gap-x-4 sm:gap-y-3">
          <p className="pl-1 text-xs font-bold text-slate-600 sm:text-sm">
            {beforeLabel}
          </p>
          <p className="pl-1 text-xs font-bold text-accent sm:text-sm">
            {afterLabel}
          </p>

          {rows.map((row) => (
            <div key={row.before} className="contents">
              <p className="rounded-2xl border border-slate-200 bg-white px-3 py-3.5 text-sm font-bold leading-normal text-slate-600 sm:px-5 sm:py-5 sm:text-base">
                {row.before}
              </p>
              <p className="rounded-2xl bg-navy px-3 py-3.5 text-sm font-bold leading-normal text-white sm:px-5 sm:py-5 sm:text-base">
                {row.after}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">
          {note}
        </p>
      </div>
    </section>
  );
}
