/**
 * サイト全体の設定・コピー・セクション本文をここに集約する。
 * 文言や導線を変更したいときは、原則このファイルだけを編集すれば済むようにしている。
 */

export const SITE_NAME = "ほんにんPASS";

/** 暫定の本番URL。独自ドメインを設定したらここを差し替える。 */
export const SITE_URL = "https://honnin-pass-lp.vercel.app";

/** 公式LINEの友だち追加URL。LP内のCTAはすべてこの定数を参照すること。 */
export const CTA_URL = "https://line.me/R/ti/p/@703znfby";

export const CTA_LABEL = "LINEで試してみる";

/** アクセントカラー（Tailwind 側は app/globals.css の --color-brand と対応） */
export const BRAND_COLOR = "#06C755";

export const seo = {
  title: "ほんにんPASS｜イベント・店舗の本人確認をLINEでシンプルに",
  description:
    "ほんにんPASSは、イベントや店舗などで本人確認・年齢確認を行いたい運営者向けのサービスです。参加者はLINEから利用でき、専用アプリのインストールは不要です。",
  /** 実ファイルが無くてもビルドは通る。差し替える場合は public/og.png を配置する。 */
  ogImage: "/og.png",
} as const;

export const navItems = [
  { label: "ほんにんPASSとは", href: "/#about" },
  { label: "使い方", href: "/#how-it-works" },
  { label: "利用シーン", href: "/#use-cases" },
] as const;

export const hero = {
  concept: "確認された自分自身が、PASSになる。",
  headline: "イベント・店舗の本人確認を、LINEでシンプルに。",
  description:
    "撮影会・サロン・店舗・イベントなど、参加者の本人確認や年齢確認をしておきたい運営者のためのサービスです。事前に確認を済ませておくことで、当日の受付をシンプルにします。",
  highlight: "参加者は専用アプリのインストール不要",
  highlightNote: "普段使っているLINEから、そのまま利用できます。",
} as const;

export const problem = {
  heading: "こんなことで困っていませんか？",
  description:
    "法律で義務づけられているわけではないけれど、運営として確認しておきたい。そんな場面のための小さな仕組みです。",
  items: [
    {
      title: "身分証を忘れた参加者を断りたくない",
      body: "その場で確認できないというだけで、参加をお断りするのはもったいないと感じることがあります。",
    },
    {
      title: "毎回「身分証を見せてください」と言いづらい",
      body: "参加者との関係を考えると、対面でお願いするのは気を使う場面もあります。",
    },
    {
      title: "初対面の参加者を受け入れるのが少し不安",
      body: "どんな方が来られるか分からないまま当日を迎えることに、不安が残ることがあります。",
    },
    {
      title: "大がかりなシステムは導入したくない",
      body: "本人確認の仕組みは欲しいけれど、費用も手間もかかる仕組みは現実的ではありません。",
    },
    {
      title: "専用アプリを入れてもらうのはハードルが高い",
      body: "参加者にインストールをお願いすると、それだけで離脱につながってしまいます。",
    },
  ],
} as const;

export const about = {
  heading: "ほんにんPASSとは",
  lead: "本人確認・年齢確認を事前に済ませた参加者を、スムーズに受け入れるためのサービスです。",
  body: [
    "参加者はLINEから本人確認を行えるため、専用アプリのインストールは必要ありません。",
    "運営者は、当日の受付や確認をよりシンプルに進められます。",
  ],
  points: [
    { label: "対象", value: "イベント・店舗・サービスの運営者" },
    { label: "参加者の準備", value: "LINEのみ・専用アプリ不要" },
    { label: "確認のタイミング", value: "当日ではなく事前に" },
  ],
} as const;

export const howItWorks = {
  heading: "使い方",
  description: "3つのステップで、事前の本人確認から当日の受付までをつなぎます。",
  steps: [
    {
      number: "01",
      title: "参加者が事前に本人確認",
      audience: "参加者",
      body: "参加者はLINEから本人確認を行います。専用アプリのインストールは必要ありません。",
    },
    {
      number: "02",
      title: "本人確認済みのPASSを発行",
      audience: "参加者",
      body: "確認済みの状態を、PASSとして利用できるようになります。",
    },
    {
      number: "03",
      title: "当日の受付でPASSを利用",
      audience: "運営者",
      body: "運営者はPASSを確認して、当日の受付をスムーズに進められます。",
    },
  ],
} as const;

export const benefits = {
  heading: "ほんにんPASSでできること",
  description: "小規模な運営でも取り入れやすい形にしています。",
  items: [
    {
      title: "参加者の負担を減らせる",
      body: "当日その場で身分証を探してもらう必要がなく、参加者にとっても負担の少ない形になります。",
    },
    {
      title: "確認を事前に済ませられる",
      body: "受付の場で確認作業に時間を取られず、当日の運営に集中できます。",
    },
    {
      title: "言いづらい場面にも",
      body: "「身分証を見せてください」と直接お願いしにくい場面でも、仕組みとして自然に確認できます。",
    },
    {
      title: "LINEだから導入しやすい",
      body: "参加者に新しいアプリを入れてもらう必要がないため、案内のハードルが下がります。",
    },
    {
      title: "小規模な運営にも",
      body: "個人や少人数で運営している場でも、無理なく取り入れられることを目指しています。",
    },
  ],
  highlight: {
    title: "LINEだけで完結。専用アプリのインストールは不要です。",
    body: "参加者は普段使っているLINEから本人確認を行えます。運営者側も、参加者にアプリのインストールをお願いする必要がありません。",
  },
} as const;

export const useCases = {
  heading: "利用シーン",
  description: "本人確認・年齢確認を行いたい、さまざまな場面で。",
  items: [
    {
      title: "撮影会",
      body: "初対面の参加者を受け入れる撮影会で、事前の本人確認に。",
    },
    {
      title: "個人サロン",
      body: "初めて利用する顧客を受け入れる際の確認手段として。",
    },
    {
      title: "シーシャ店舗",
      body: "年齢確認など、利用者の確認が必要な場面に。",
    },
    {
      title: "その他イベント",
      body: "本人確認や年齢確認を取り入れたいイベントに。",
    },
  ],
} as const;

export const cta = {
  heading: "ほんにんPASSを試してみる",
  description:
    "まずは公式LINEから、ほんにんPASSの内容をご確認ください。ご質問やご相談もLINEで受け付けています。",
  note: "運営されているイベントや店舗の状況に合わせて、ご案内します。",
} as const;

export const footerLinks = [
  { label: "プライバシーポリシー", href: "/privacy" },
  { label: "利用規約", href: "/terms" },
  { label: "お問い合わせ", href: "/contact" },
] as const;

/**
 * 料金プラン（未確定のため今回は非表示）。
 * 将来 10人PASS / 50人PASS / 100人PASS / 追加PASS を追加する際は、
 * ここに定義して components/Pricing.tsx から参照する想定。
 */
export const pricingPlans: {
  name: string;
  price: string;
  description: string;
  features: string[];
}[] = [];
