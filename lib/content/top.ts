/** トップページ（/）で追加したセクションのコピー。既存セクションの文言は lib/site-config.ts にある。 */

import { routes } from "@/lib/site-config";

import type { FaqItem } from "./types";

export const hero = {
  eyebrow: "店舗・イベントの運営者の方へ",
  headline: ["本人確認と年齢確認を、", "LINEでシンプルに。"],
  /** スマホの最初の画面に出す短い補足（2行まで） */
  note: "参加者は事前にLINEで確認、当日はQRを見せるだけ。身分証は預かりません。",
  /** PC幅で出す説明文 */
  description:
    "参加者がLINEで本人確認を済ませ、当日はQRを見せるだけ。身分証や顔写真は、運営者にもほんにんPASSにも渡りません。",
  tags: ["専用アプリ不要", "個人情報は預からない", "今なら無料"],
  secondary: {
    label: "公式アカウントをお持ちの方へ",
    href: routes.lineOfficialAccount,
  },
  visual: {
    type: "screens",
    screens: [
      { src: "/screens/line-menu.png", alt: "LINEのメニュー画面" },
      { src: "/screens/pass-qr.png", alt: "本人確認済みのQRコード画面" },
    ],
  },
} as const;

/**
 * 課題セクション。想定される現場の声を、短い吹き出しで並べる。
 * 実在の投稿や発言の引用ではないので、ユーザー名・日付・反応数などは付けないこと。
 */
export const problem = {
  eyebrow: "PROBLEM",
  heading: "こんなことで​困っていませんか？",
  voices: [
    { text: "毎回「身分証見せてください」って言うの、気まずい…", who: "バーのスタッフ" },
    { text: "未成年を通してしまわないか、いつも心配", who: "シーシャ店の店長" },
    { text: "受付の身分証チェックで、行列ができてしまう", who: "イベントの主催者" },
    { text: "身分証を忘れたお客様を、断るしかない", who: "サロンのオーナー" },
    { text: "身分証のコピーを預かるのは、正直こわい", who: "店舗のオーナー" },
  ],
} as const;

export const twoWays = {
  eyebrow: "GET STARTED",
  heading: "2つの始め方",
  description:
    "まずは設定なしで試し、合えば自社の公式アカウントに組み込めます。",
  items: [
    {
      status: "今日から使える",
      title: "ほんにんPASS公式LINEで始める",
      body: "公式LINEを友だち追加するだけ。設定不要で、受付PASSの作成からQR受付までそのまま使えます。",
      points: ["導入作業なし", "確認済みのPASSは、ほんにんPASS全体で共通"],
      action: { type: "cta", label: "LINEで無料で試す" },
    },
    {
      status: "導入相談を受付中",
      title: "自社の公式アカウントに組み込む",
      body: "お使いのLINE公式アカウントのメニューに、本人確認の入口を追加します。",
      points: [
        "お客様は別アカウントの友だち追加が不要",
        "系列店でも共通で使える",
      ],
      action: {
        type: "link",
        label: "連携の詳細を見る",
        href: routes.lineOfficialAccount,
      },
    },
  ],
} as const;

/** よくある質問。個人情報まわりの答えは privacyDesign（lib/site-config.ts）の記述と揃えること。 */
export const faq: { eyebrow: string; heading: string; items: FaqItem[] } = {
  eyebrow: "FAQ",
  heading: "よくある質問",
  items: [
    {
      question: "参加者に専用アプリは必要ですか？",
      answer: "必要ありません。LINEだけで本人確認からQRの表示まで行えます。",
    },
    {
      question: "身分証の情報は運営者に渡りますか？",
      answer:
        "渡りません。運営者が受け取るのは、本人確認が済んでいるか、年齢条件を満たしているか、いつスキャンされたかという記録だけです。氏名・住所・身分証の画像を見ることはできません。",
    },
    {
      question: "身分証や顔写真は、どこで扱われますか？",
      answer:
        "本人確認サービス Didit の中だけで処理されます。ほんにんPASSのサーバーに保存することはありません。",
    },
    {
      question: "トラブルが起きたときは、どうなりますか？",
      answer:
        "裁判所や捜査機関から正式な法的請求があった場合、Diditのポリシーに基づき開示の対象となります。開示の可否や範囲は、各国の法制度とDiditのポリシー、データの保持期間によります。",
    },
    {
      question: "退場の記録も残せますか？",
      answer:
        "現在は入場時のQR受付とその履歴に対応しています。退場の記録は準備中です。",
    },
  ],
};
