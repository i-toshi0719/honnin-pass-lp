import Link from "next/link";

import { useCases } from "@/lib/site-config";

const cardClass =
  "flex h-full items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70";

export default function UseCases() {
  return (
    <section id="use-cases" className="scroll-mt-28 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-wide text-accent">
            {useCases.eyebrow}
          </p>
          <h2 className="mt-2 text-jp-wrap text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {useCases.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {useCases.description}
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.items.map((item) => {
            const Icon = item.icon;

            // href を持つカードだけがリンクになる。
            const href = "href" in item ? item.href : undefined;

            const content = (
              <>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-lg font-bold text-ink">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {item.body}
                  </p>
                  {href ? (
                    <p className="mt-2 text-sm font-bold text-accent">
                      詳しく見る →
                    </p>
                  ) : null}
                </div>
              </>
            );

            return (
              <li key={item.title}>
                {href ? (
                  <Link
                    href={href}
                    className={`${cardClass} transition-shadow hover:shadow-md hover:ring-accent/40`}
                  >
                    {content}
                  </Link>
                ) : (
                  <div className={cardClass}>{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
