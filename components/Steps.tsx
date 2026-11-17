type Props = {
  eyebrow: string;
  id: string;
  heading: string;
  description: string;
  items: readonly { title: string; body: string }[];
  /** "circle" は丸数字つきの大きめのカード、"compact" は小さい番号つきのカード。 */
  variant?: "circle" | "compact";
  tone?: "white" | "muted";
};

/** 番号つきの手順を横に並べるセクション。 */
export default function Steps({
  id,
  eyebrow, heading,
  description,
  items,
  variant = "compact",
  tone = "white",
}: Props) {
  const isCircle = variant === "circle";
  const sectionBg = tone === "muted" ? "bg-slate-50" : "bg-white";
  const cardBg = tone === "muted" ? "bg-white" : "bg-slate-50";
  const columns = isCircle
    ? "sm:grid-cols-2 lg:grid-cols-4"
    : "sm:grid-cols-2 lg:grid-cols-5";

  return (
    <section id={id} className={`scroll-mt-28 ${sectionBg}`}>
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

        <ol className={`mt-10 grid gap-3 ${columns}`}>
          {items.map((item, index) => (
            <li
              key={item.title}
              className={`rounded-2xl border border-slate-200 p-5 ${cardBg}`}
            >
              {isCircle ? (
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              ) : (
                <span className="text-[13px] font-bold text-accent">
                  {index + 1}
                </span>
              )}
              <p
                className={`font-bold text-ink ${isCircle ? "mt-4" : "mt-1"}`}
              >
                {item.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
