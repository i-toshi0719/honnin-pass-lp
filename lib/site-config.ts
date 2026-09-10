/**
 * サイト全体の設定・コピー・セクション本文をここに集約する。
 * 文言や導線を変更したいときは、原則このファイルだけを編集すれば済むようにしている。
 * アイコンは lucide-react（https://lucide.dev/icons/）から選ぶ。
 *
 * 見出し内の "\u200B"（ゼロ幅スペース）は、スマホ幅で折り返す位置の指定。
 * 該当要素には text-jp-wrap（app/globals.css）を付け、文字の途中で改行されないようにしている。
 */

import {
  BadgeCheck,
  CalendarDays,
  Camera,
  ClipboardPlus,
  EyeOff,
  Gift,
  IdCard,
  Lock,
  MessageCircleQuestion,
  Moon,
  Music,
  Scale,
  ScanLine,
  ServerOff,
  Sparkles,
  UserCheck,
  Wind,
  type LucideIcon,
} from "lucide-react";

export const SITE_NAME = "ほんにんPASS";

/** 暫定の本番URL。独自ドメインを設定したらここを差し替える。 */
export const SITE_URL = "https://honnin-pass-lp.vercel.app";

/** 公式LINEの友だち追加URL。LP内のCTAはすべてこの定数を参照すること。 */
export const CTA_URL = "https://line.me/R/ti/p/@703znfby";

export const CTA_LABEL = "LINEで無料で試す（期間限定）";

/** ヘッダーの小さな CTA 専用。幅が足りないため短い文言にする。 */
export const CTA_LABEL_HEADER = "LINEで試してみる";

/** LINE 公式カラー。CTA ボタン専用（Tailwind 側は app/globals.css の --color-brand と対応） */
export const BRAND_COLOR = "#06C755";

/** サイトの基調色。ロゴアイコンから抽出（Tailwind 側は --color-navy / --color-accent と対応） */
export const NAVY_COLOR = "#0B2358";
export const ACCENT_COLOR = "#2E63BE";

export const seo = {
  title: "ほんにんPASS｜イベント・店舗の本人確認をLINEでシンプルに",
  description:
    "ほんにんPASSは、イベントや店舗の本人確認・年齢確認をLINEだけで済ませる運営者向けサービスです。参加者がLINEで本人確認を済ませ、当日はQRを見せるだけ。身分証や顔写真は運営者にもほんにんPASSにも渡りません。今なら無料。",
  /** public/og.png（1200x630、ネイビー背景にロゴを中央配置）。差し替える場合は同名で上書きする。 */
  ogImage: "/og.png",
} as const;

export const navItems = [
  { label: "使い方", href: "/#how-it-works" },
  { label: "個人情報の扱い", href: "/#personal-data" },
  { label: "利用シーン", href: "/#use-cases" },
  { label: "料金", href: "/#pricing" },
] as const;

/** ヒーロー画像の直下に置く、運営者視点の3ステップ。ファーストビューで仕組みを伝える。 */
export const heroSteps = {
  eyebrow: "運営者がやることは、これだけ",
  secondaryLabel: "使い方を見る",
  secondaryHref: "#how-it-works",
  items: [
    {
      number: "01",
      icon: ClipboardPlus,
      title: "LINEで受付PASSを作る",
      body: "公式LINEからボタン一つ。申し込みも導入もありません。",
    },
    {
      number: "02",
      icon: UserCheck,
      title: "参加者がLINEで\u200B本人確認を済ませる",
      body: "参加者自身が約1分で完了。運営者の作業はありません。",
    },
    {
      number: "03",
      icon: ScanLine,
      title: "当日はQRを読むだけ",
      body: "身分証は預かりません。個人情報も持ちません。",
    },
  ],
} as const satisfies {
  eyebrow: string;
  secondaryLabel: string;
  secondaryHref: string;
  items: readonly {
    number: string;
    icon: LucideIcon;
    title: string;
    body: string;
  }[];
};

export const problem = {
  eyebrow: "PROBLEM",
  heading: "こんなことで\u200B困っていませんか？",
  description:
    "法律で義務ではないけれど、運営として確認しておきたい。そんな場面のために。",
  items: [
    {
      icon: MessageCircleQuestion,
      title: "「身分証を出してください」と\u200B言いづらい",
      body: "控えとしてコピーや撮影までお願いするのは、なおさら気が引けます。",
    },
    {
      icon: IdCard,
      title: "身分証を忘れた参加者を\u200B断りたくない",
      body: "その場で確認できないだけで、参加をお断りするのはもったいない。",
    },
    {
      icon: Lock,
      title: "参加者の個人情報を\u200B預かりたくない",
      body: "預かれば保管も漏えい対策も運営者の責任になります。",
    },
  ],
} as const satisfies {
  eyebrow: string;
  heading: string;
  description: string;
  items: readonly { icon: LucideIcon; title: string; body: string }[];
};

/** 使い方セクションで表示する実際の操作画面（public/screens/ 配下） */
export type HowItWorksScreen = {
  src: string;
  alt: string;
  caption: string;
};

export type HowItWorksStep = {
  number: string;
  title: string;
  audience: string;
  body: string;
  screens: readonly HowItWorksScreen[];
};

export const howItWorks = {
  eyebrow: "HOW IT WORKS",
  heading: "使い方",
  description: "参加者も運営者も、操作はすべてLINEの中で完結します。",
  steps: [
    {
      number: "01",
      title: "LINEで本人確認",
      audience: "参加者",
      body: "参加者が公式LINEのメニューから約1分で済ませます。完了するとQRが発行されます。",
      screens: [
        {
          src: "/screens/line-menu.png",
          alt: "ほんにんPASS 公式LINEのリッチメニュー",
          caption: "公式LINEのメニューから「本人/年齢確認」をタップ",
        },
        {
          src: "/screens/verify.png",
          alt: "本人確認の開始画面",
          caption: "身分証と顔の確認。所要時間は約1分",
        },
      ],
    },
    {
      number: "02",
      title: "PASS作成",
      audience: "運営者",
      body: "受付PASS名・利用シーン・年齢条件を入れるだけ。一覧で管理できます。",
      screens: [
        {
          src: "/screens/pass-create.png",
          alt: "受付PASSを作成する画面",
          caption: "必要な項目だけ入力して受付PASSを作成",
        },
        {
          src: "/screens/pass-list.png",
          alt: "受付PASSの一覧画面",
          caption: "有効期限やスキャン履歴を一覧で確認",
        },
      ],
    },
    {
      number: "03",
      title: "QR提示で受付",
      audience: "参加者・運営者",
      body: "参加者はQRを見せ、運営者はカメラで読むだけ。身分証は不要です。",
      screens: [
        {
          src: "/screens/pass-qr.png",
          alt: "ほんにんPASSのQRコード表示画面",
          caption: "参加者は確認済みのQRを提示",
        },
        {
          src: "/screens/qr-scan.png",
          alt: "QRコードを読み取るカメラ画面",
          caption: "運営者はカメラで読み取るだけで受付完了",
        },
      ],
    },
  ],
} as const satisfies {
  eyebrow: string;
  heading: string;
  description: string;
  steps: readonly HowItWorksStep[];
};

export const privacyDesign = {
  eyebrow: "PRIVACY",
  heading: "個人情報は、\u200Bあずかりません",
  lead: "身分証や顔写真は、本人確認サービス Didit の中だけで処理されます。",
  items: [
    {
      icon: EyeOff,
      title: "運営者には渡らない",
      body: "運営者が見られるのは、当日の読み取り結果とスキャン履歴だけです。",
    },
    {
      icon: ServerOff,
      title: "ほんにんPASSにも保存しない",
      body: "身分証の画像や顔写真をほんにんPASSのサーバーに置くことはありません。",
    },
    {
      icon: Scale,
      title: "記録から本人をたどれる",
      body: "裁判所や捜査機関の正式な請求があれば、Didit側の記録から本人を特定できます。",
    },
  ],
  statement:
    "ふだんは、誰にも見られない。\u200Bいざという時は、\u200B正式な手続きを踏めば、\u200B記録から本人を特定できる。",
  statementNote:
    "だから参加者は安心して確認を受けられ、運営者はトラブルの抑止力を持てます。",
  disclaimer:
    "開示の可否や範囲は、各国の法制度とDiditのポリシー、データの保持期間によります。",
  provider: {
    name: "Didit",
    url: "https://didit.me/ja/",
    /**
     * public/didit-logo-white.svg は公式ブランドキット（https://didit.me/brand/）の
     * 暗い背景用（白抜き）ファイルをそのまま配置したもの。
     * ブランド規約でマークの再描画と色の変更が禁止されているため、加工しないこと。
     * 周囲にはマーク高さ1つ分以上のクリアスペースを空ける。
     */
    logo: "/didit-logo-white.svg",
    logoWidth: 491,
    logoHeight: 170,
    tagline: "世界220以上の国と地域で使われる本人確認基盤",
    badges: [
      "ISO/IEC 27001",
      "SOC 2 Type 2",
      "スペイン金融当局が対面確認と同等以上と評価",
    ],
  },
} as const satisfies {
  eyebrow: string;
  heading: string;
  lead: string;
  items: readonly { icon: LucideIcon; title: string; body: string }[];
  statement: string;
  statementNote: string;
  disclaimer: string;
  provider: {
    name: string;
    url: string;
    logo: string;
    logoWidth: number;
    logoHeight: number;
    tagline: string;
    badges: readonly string[];
  };
};

export const useCases = {
  eyebrow: "USE CASES",
  heading: "利用シーン",
  description: "個人や少人数の運営でも、無理なく。",
  items: [
    {
      icon: Camera,
      title: "撮影会",
      body: "個室撮影など、対人トラブルを避けたい場面に",
    },
    { icon: Wind, title: "シーシャ店舗", body: "年齢確認が必要な場面に" },
    {
      icon: Sparkles,
      title: "個人サロン",
      body: "個室で施術する前の確認に",
    },
    {
      icon: Moon,
      title: "ナイトワーカー",
      body: "個人でお客様と会う前の確認に",
    },
    {
      icon: Music,
      title: "クラブ",
      body: "入場時の年齢確認をQRで。身分証忘れで断らない",
    },
    {
      icon: CalendarDays,
      title: "その他イベント",
      body: "本人確認・年齢確認を取り入れたいイベントに",
    },
  ],
} as const satisfies {
  eyebrow: string;
  heading: string;
  description: string;
  items: readonly { icon: LucideIcon; title: string; body: string }[];
};

/** 料金。正式提供前のため「予定」の表現を崩さないこと。 */
export const pricing = {
  eyebrow: "PRICING",
  heading: "料金",
  free: {
    icon: Gift,
    title: "今なら無料で\u200Bお試しいただけます。",
    body: "正式提供時は、受付PASSごとの料金制を予定しています。",
  },
  plan: {
    name: "10人プラン",
    price: "1,000円",
    unit: "/ PASS（税込）",
    badge: "現在は無料",
    featureIcon: BadgeCheck,
    features: [
      "本人・年齢確認：10人まで",
      "受付でのQRコード読み取り：無制限",
      "有効期間：31日間",
      "同じ来場者の再スキャンは人数にカウントされません",
    ],
    recommend: "小規模な撮影会・イベント・店舗受付などにおすすめです。",
  },
  upcoming: {
    title: "今後のプラン",
    items: [
      "50人プラン・100人プランを予定",
      "上限に達した場合は、10人単位で追加購入できる仕組みも予定",
    ],
  },
  note: "※現在は無料でご利用いただけます。料金・プラン内容は正式提供時に変更される場合があります。",
} as const satisfies {
  eyebrow: string;
  heading: string;
  free: { icon: LucideIcon; title: string; body: string };
  plan: {
    name: string;
    price: string;
    unit: string;
    badge: string;
    featureIcon: LucideIcon;
    features: readonly string[];
    recommend: string;
  };
  upcoming: { title: string; items: readonly string[] };
  note: string;
};

export const cta = {
  heading: "ほんにんPASSを\u200B試してみる",
  description:
    "まずは公式LINEで内容をご確認ください。ご質問もLINEで受け付けています。",
} as const;

export const footerLinks = [
  { label: "プライバシーポリシー", href: "/privacy" },
  { label: "利用規約", href: "/terms" },
  { label: "お問い合わせ", href: "/contact" },
] as const;
