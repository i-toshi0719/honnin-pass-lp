type Props = {
  eyebrow: string;
  id: string;
  heading: string;
  description: string;
  items: readonly { title: string; body: string }[];
};

/** ネイビー地に白いカードを並べる、強調用のセクション。 */
export default function FeatureBand({ id, eyebrow, heading, description, items }: Props) {
  return (
    <section id={id} className="scroll-mt-28 bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="text-sm font-bold tracking-wide text-sky-300">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-jp-wrap text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200">
          {description}
        </p>

        <ul className="mt-10 grid gap-4 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className="rounded-2xl bg-white p-6">
              <p className="text-base font-bold text-ink">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
