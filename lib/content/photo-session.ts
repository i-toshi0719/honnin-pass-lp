/** 撮影会向けページ（/photo-session）のコピー。これまでのトップページの内容を引き継いでいる。 */

import { SITE_NAME } from "@/lib/site-config";

export const meta = {
  title: `撮影会の本人確認を、LINEでシンプルに｜${SITE_NAME}`,
  description:
    "撮影会の主催者向けの本人確認サービスです。参加者は事前にLINEで本人確認を済ませ、当日はQRを見せるだけ。身分証や顔写真は主催者にもほんにんPASSにも渡りません。今なら無料。",
} as const;

/** 想定される現場の声。実在の投稿や発言の引用ではない。 */
export const problem = {
  eyebrow: "PROBLEM",
  heading: "こんなことで​困っていませんか？",
  voices: [
    { text: "身分証を忘れた参加者を、断りたくない", who: "主催者" },
    { text: "毎回「身分証見せてください」って言いづらい", who: "受付スタッフ" },
    { text: "初対面の参加者を受け入れるのが、少し不安", who: "主催者" },
    { text: "受付の身分証チェックで、行列ができてしまう", who: "受付スタッフ" },
    { text: "身分証は、コピーされるのが嫌で出したくない", who: "参加者" },
  ],
} as const;
