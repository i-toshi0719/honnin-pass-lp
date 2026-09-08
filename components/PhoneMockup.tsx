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
 * リデザイン済みの 9:16 グラフィックを、拡大クロップせずそのまま表示する。
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
      className={`relative overflow-hidden rounded-[2.4rem] bg-white p-2 shadow-2xl shadow-navy/25 ring-1 ring-slate-900/10 ${className}`}
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    </div>
  );
}
