type Props = {
  eyebrow: string;
  heading: string;
  description: string;
  /** 2列目（最後の列）を強調表示する。 */
  columns: readonly string[];
  rows: readonly { label: string; values: readonly string[] }[];
};

export default function Compare({ eyebrow, heading, description, columns, rows }: Props) {
  const lastColumn = columns.length - 1;

  return (
    <section id="compare" className="scroll-mt-28 bg-white">
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

        {/* 幅が足りないときは、ページではなくこの枠の中で横スクロールさせる。 */}
        <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
            <thead>
              <tr className="bg-slate-50">
                <td className="border-b border-slate-200 px-5 py-4" />
                {columns.map((column, index) => (
                  <th
                    key={column}
                    scope="col"
                    className={`border-b border-slate-200 px-5 py-4 font-bold ${
                      index === lastColumn
                        ? "bg-accent-soft text-navy"
                        : "text-ink"
                    }`}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => {
                const border =
                  rowIndex === rows.length - 1
                    ? ""
                    : "border-b border-slate-200";

                return (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className={`px-5 py-4 font-bold text-slate-600 ${border}`}
                    >
                      {row.label}
                    </th>
                    {row.values.map((value, index) => (
                      <td
                        key={value}
                        className={`px-5 py-4 ${border} ${
                          index === lastColumn
                            ? "bg-accent-soft font-bold text-ink"
                            : "text-slate-700"
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
