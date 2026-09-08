import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  /** 画像の読み込み優先度。ファーストビュー近くの画像のみ true にする。 */
  priority?: boolean;
  /** next/image の sizes。表示幅の目安を渡す。 */
  sizes?: string;
  className?: string;
};

/**
 * CSS だけで組んだスマートフォン風のフレーム。
 * 端末のステータスバーの差異（iOS / Android）はノッチで覆って目立たなくしている。
 */
export default function PhoneMockup({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 240px, 45vw",
  className = "",
}: Props) {
  return (
    <div
      className={`relative rounded-[2.4rem] bg-slate-900 p-2 shadow-2xl shadow-navy/25 ring-1 ring-slate-900/10 ${className}`}
    >
      {/* ノッチ */}
      <div
        aria-hidden
        className="absolute left-1/2 top-3.5 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-slate-900"
      />
      {/* 画面 */}
      <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top"
        />
      </div>
      {/* ホームバー */}
      <div
        aria-hidden
        className="absolute bottom-3.5 left-1/2 z-10 h-1 w-16 -translate-x-1/2 rounded-full bg-slate-900/60"
      />
    </div>
  );
}
