import Link from "next/link";

type Props = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

/** 正式な内容が未確定のページ用の簡素なプレースホルダー。 */
export default function PlaceholderPage({
  title,
  description,
  children,
}: Props) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        {title}
      </h1>
      <p className="mt-5 text-base leading-relaxed text-slate-600">
        {description}
      </p>
      <p className="mt-3 text-base leading-relaxed text-slate-600">
        こちらのページは現在準備中です。内容が決まり次第、掲載いたします。
      </p>
      {children ? <div className="mt-8">{children}</div> : null}

      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400"
      >
        トップページへ戻る
      </Link>
    </section>
  );
}
