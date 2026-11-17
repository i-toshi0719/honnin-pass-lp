/**
 * 公式アカウント連携ページ（/line-official-account）のコピー。
 * 自社の公式アカウントへの組み込みは先行導入の相談段階のため、
 * 「すぐ使える」とは書かず、CTAは導入相談にしている。
 */

import { CONSULT_LABEL, SITE_NAME, routes } from "@/lib/site-config";

import type { FaqItem } from "./types";

export const meta = {
  title: `LINE公式アカウントに本人確認とQR受付を追加｜${SITE_NAME}`,
  description:
    "お使いのLINE公式アカウントに、本人確認・年齢確認とQR受付を追加できます。アカウントの作り直しは不要で、友だちもそのまま。お客様はいつものトーク画面から確認を済ませられます。",
} as const;

export const hero = {
  eyebrow: "LINE公式アカウントを運用中の方へ",
  headline: ["いまの公式LINEに、", "本人確認とQR受付を。"],
  note: "アカウントも友だちもそのまま。お客様はいつものトーク画面から確認できます。",
  description:
    "お客様はいつものトーク画面から事前に確認を済ませ、当日はQRを見せるだけ。アカウントの作り直しは要りません。",
  tags: ["アカウントの作り直し不要", "個人情報は預からない", "系列店で共通"],
  primaryLabel: CONSULT_LABEL,
  secondary: { label: "まずは試してみる", href: routes.top },
  status: "公式アカウントへの組み込みは、先行導入のご相談を受付中です。",
  visual: {
    type: "screens",
    screens: [
      {
        src: "/screens/line-menu.png",
        alt: "公式アカウントのメニューに並ぶ本人確認の入口",
      },
      { src: "/screens/pass-qr.png", alt: "本人確認済みのQRコード画面" },
    ],
  },
} as const;

/** 想定される現場の声。実在の投稿や発言の引用ではない。 */
export const problem = {
  eyebrow: "PROBLEM",
  heading: "こんなことで​困っていませんか？",
  voices: [
    { text: "友だちは増えたけど、誰が何歳なのかは分からない", who: "公式LINEの運用担当" },
    { text: "毎回「身分証見せてください」って言うの、気まずい…", who: "店舗のスタッフ" },
    { text: "誰をいつ受け付けたか、記録が残っていない", who: "店長" },
    { text: "お客様に、別のアプリやアカウントは増やさせたくない", who: "店舗のオーナー" },
  ],
} as const;

export const integration = {
  eyebrow: "INTEGRATION",
  heading: "いまの公式アカウントに、​そのまま追加",
  description:
    "新しいアカウントを作る必要はありません。お使いの公式アカウントのリッチメニューに、本人確認の入口を足す形で導入します。",
  items: [
    {
      title: "アカウントも友だちも、そのまま",
      body: "いま運用している公式アカウントと友だちをそのまま使えます。アカウントは貴社のもののままで、作り直しや移行はありません。",
    },
    {
      title: "お客様はいつものトーク画面から",
      body: "リッチメニューをタップするだけ。別のアカウントの友だち追加も、専用アプリのインストールも必要ありません。",
    },
    {
      title: "系列店でも共通で使える",
      body: "一度本人確認を済ませたお客様は、同じ運営の店舗であれば、どこでも同じQRで受付できます。",
    },
  ],
} as const;

export const customerFlow = {
  eyebrow: "CUSTOMER FLOW",
  heading: "お客様から見た流れ",
  description: "すべて貴社の公式アカウントの中で完結します。",
  items: [
    { title: "メニューをタップ", body: "公式アカウントのリッチメニューから開始" },
    { title: "初回のみ同意", body: "貴社のアカウント名で同意画面を表示" },
    { title: "身分証と顔を確認", body: "所要時間は約1分" },
    { title: "QRを表示", body: "確認済みのQRがLINE上に出る" },
    { title: "店舗で読み取り", body: "スタッフがカメラで読み取って受付完了" },
  ],
} as const;

export const onboarding = {
  eyebrow: "ONBOARDING",
  heading: "導入の流れ",
  description: "公式アカウント側の設定が必要ですが、手順は個別にご案内します。",
  items: [
    { title: "LINEで相談", body: "店舗数や今の運用をうかがいます。" },
    {
      title: "公式アカウント側の設定",
      body: "ログイン用の設定を、手順に沿って行います。",
    },
    {
      title: "メニューに入口を追加",
      body: "リッチメニューに「本人確認」を置きます。",
    },
    { title: "利用開始", body: "店舗でQRの読み取りを始められます。" },
  ],
} as const;

export const compare = {
  eyebrow: "COMPARE",
  heading: "2つの始め方の違い",
  description:
    "まずはほんにんPASS公式LINEで試し、合えば自社の公式アカウントに組み込めます。",
  columns: ["ほんにんPASS公式LINEで始める", "自社の公式アカウントに組み込む"],
  rows: [
    {
      label: "お客様の友だち追加",
      values: ["ほんにんPASS公式LINEの追加が必要", "不要（貴社のアカウントのまま）"],
    },
    {
      label: "確認済みPASSの使える範囲",
      values: ["ほんにんPASS全体で共通", "貴社の店舗で共通"],
    },
    { label: "導入作業", values: ["なし", "公式アカウント側の設定が必要"] },
    { label: "始め方", values: ["今日から利用可能", "導入相談を受付中"] },
  ],
} as const;

/**
 * よくある質問。個人情報まわりの答えは privacyDesign（lib/site-config.ts）の記述と揃えること。
 * 未確定のため載せていない項目: 組み込み時の料金。
 */
export const faq: { eyebrow: string; heading: string; items: FaqItem[] } = {
  eyebrow: "FAQ",
  heading: "よくある質問",
  items: [
    {
      question: "公式アカウントを作り直す必要はありますか？",
      answer:
        "ありません。いま運用している公式アカウントを、友だちもそのままでご利用いただけます。",
    },
    {
      question: "Lステップなど、他のツールと併用できますか？",
      answer:
        "お使いのツールや設定によって異なります。導入相談の際に、現在の構成をうかがったうえでご案内します。",
    },
    {
      question: "お客様の身分証は、店舗に渡りますか？",
      answer:
        "渡りません。店舗が受け取るのは、本人確認が済んでいるか、年齢条件を満たしているか、いつスキャンされたかという記録だけです。身分証や顔写真は、本人確認サービス Didit の中だけで処理されます。",
    },
    {
      question: "複数の店舗で使えますか？",
      answer:
        "はい。同じ運営の店舗であれば、お客様は一度の本人確認で、どの店舗でも同じQRで受付できます。",
    },
    {
      question: "ほんにんPASSで本人確認済みのお客様は、そのまま使えますか？",
      answer: "貴社の公式アカウントで、改めて本人確認が必要です。",
    },
    {
      question: "退場の記録も残せますか？",
      answer:
        "現在は入場時のQR受付とその履歴に対応しています。退場の記録は準備中です。",
    },
  ],
};

export const cta = {
  heading: "まずはLINEで​ご相談ください",
  description:
    "お使いの公式アカウントへの導入方法を、個別にご案内します。ほんにんPASS公式LINEでは、本人確認からQR受付までの流れを実際にお試しいただけます。",
  label: CONSULT_LABEL,
} as const;
