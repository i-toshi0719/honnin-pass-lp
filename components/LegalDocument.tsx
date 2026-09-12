import Link from "next/link";

import { legalMeta, type LegalDocumentContent } from "@/lib/legal/config";

type Props = {
  content: LegalDocumentContent;
};

export default function LegalDocument({ content }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <header>
        <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {content.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          {content.description}
        </p>
        <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
          <div>
            <dt className="inline font-semibold text-slate-600">制定日:</dt>{" "}
            <dd className="inline">{legalMeta.enactedDate}</dd>
          </div>
          <div>
            <dt className="inline font-semibold text-slate-600">改定日:</dt>{" "}
            <dd className="inline">{legalMeta.revisedDate}</dd>
          </div>
        </dl>
      </header>

      <div className="mt-12 flex flex-col gap-10">
        {content.sections.map((section) => (
          <section key={section.id} id={section.id}>
            {section.title ? (
              <h2 className="text-lg font-bold text-ink sm:text-xl">
                {section.title}
              </h2>
            ) : null}

            <div className={section.title ? "mt-4" : ""}>
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={`${section.id}-p-${index}`}
                  className="text-base leading-relaxed text-slate-700 [&+p]:mt-3"
                >
                  {paragraph}
                </p>
              ))}

              {section.listItems ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700">
                  {section.listItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        ))}
      </div>

      <footer className="mt-12 border-t border-slate-200 pt-8 text-sm text-slate-600">
        <p>
          運営者: {legalMeta.operatorName}
          <br />
          お問い合わせ:{" "}
          <a
            href={legalMeta.contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline-offset-2 hover:underline"
          >
            {legalMeta.contactLabel}
          </a>
        </p>
      </footer>

      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400"
      >
        トップページへ戻る
      </Link>
    </article>
  );
}
