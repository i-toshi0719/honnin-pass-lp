import Avatar from "@/components/Avatar";

type Props = {
  eyebrow: string;
  heading: string;
  voices: readonly { text: string; who: string }[];
};

/**
 * 課題セクション。現場の声をイラストアイコンつきの吹き出しで並べ、読まずに眺めて伝わる形にする。
 * スマホでは左右交互のチャット風、sm 以上では段をずらしたグリッドで表示する。
 */
export default function Problem({ eyebrow, heading, voices }: Props) {
  return (
    <section id="problem" className="scroll-mt-28 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-28">
        <p className="text-sm font-bold tracking-wide text-accent">{eyebrow}</p>
        <h2 className="mt-2 text-jp-wrap text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {heading}
        </h2>

        <ul className="mt-8 flex flex-col gap-3 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6 lg:grid-cols-3">
          {voices.map((voice, index) => {
            const isRight = index % 2 === 1;

            return (
              <li
                key={voice.text}
                className={`flex items-start gap-2 sm:gap-3 ${
                  isRight ? "flex-row-reverse sm:translate-y-4" : ""
                } sm:flex-row`}
              >
                <Avatar index={index} />
                <div
                  className={`flex min-w-0 max-w-[80%] flex-col sm:max-w-none ${
                    isRight ? "items-end" : "items-start"
                  } sm:items-start`}
                >
                  <p
                    className={`text-balance rounded-2xl px-4 py-3 text-[15px] font-bold leading-relaxed text-ink shadow-sm [word-break:auto-phrase] sm:px-5 sm:py-4 sm:text-base ${
                      isRight
                        ? "rounded-tr-sm bg-accent-soft ring-1 ring-accent/20 sm:rounded-tl-sm sm:rounded-tr-2xl"
                        : "rounded-tl-sm bg-white ring-1 ring-slate-200"
                    }`}
                  >
                    {voice.text}
                  </p>
                  <span className="mt-1.5 px-1 text-xs text-slate-600">
                    {voice.who}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
