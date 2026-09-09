/**
 * サイト全体の設定・コピー・セクション本文をここに集約する。
 * 文言や導線を変更したいときは、原則このファイルだけを編集すれば済むようにしている。
 */

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
    "ほんにんPASSは、イベントや店舗などで本人確認・年齢確認を行いたい運営者向けのサービスです。参加者はLINEから利用でき、専用アプリのインストールは不要。身分証や顔写真は運営者にもほんにんPASSにも渡りません。",
  /** public/og.png（1200x630、ネイビー背景にロゴを中央配置）。差し替える場合は同名で上書きする。 */
  ogImage: "/og.png",
} as const;

export const navItems = [
  { label: "ほんにんPASSとは", href: "/#about" },
  { label: "使い方", href: "/#how-it-works" },
  { label: "個人情報の扱い", href: "/#personal-data" },
  { label: "利用シーン", href: "/#use-cases" },
] as const;

export const hero = {
  concept: "確認された自分自身が、PASSになる。",
  headline: "イベント・店舗の本人確認を、LINEでシンプルに。",
  description:
    "撮影会・サロン・店舗・イベントなど、参加者の本人確認や年齢確認をしておきたい運営者のためのサービスです。事前に本人確認を済ませるとQRが発行され、当日はそのQRを見せるだけで受付できます。",
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
      title: "大がかりなシステムは導入したくない",
      body: "本人確認の仕組みは欲しいけれど、費用も手間もかかる仕組みは現実的ではありません。",
    },
    {
      title: "専用アプリを入れてもらうのはハードルが高い",
      body: "参加者にインストールをお願いすると、それだけで離脱につながってしまいます。",
    },
    {
      title: "参加者に個人情報を渡すのをためらわれる",
      body: "身分証を見せることやコピーを取られることに抵抗を感じる参加者もいます。運営側としても、預かった個人情報の管理まで抱えたくはありません。",
    },
  ],
} as const;

export const about = {
  heading: "ほんにんPASSとは",
  lead: "事前に本人確認を済ませるとQRが発行され、当日はそれを見せるだけで受け入れられるサービスです。",
  body: [
    "参加者はLINEから本人確認を行えるため、専用アプリのインストールは必要ありません。",
    "運営者も公式LINEから受付PASSを作成でき、専用システムの導入や面倒な申し込み手続きなしで始められます。",
    "当日は身分証ではなく、確認済みのQRを提示するだけで受付できます。",
  ],
  points: [
    { label: "対象", value: "イベント・店舗・サービスの運営者" },
    { label: "参加者の準備", value: "LINEのみ・専用アプリ不要" },
    { label: "運営者の準備", value: "LINEのみ・ボタン一つで受付PASS作成" },
    { label: "当日の受付", value: "確認済みQRを見せるだけ" },
    { label: "個人情報", value: "運営者にもほんにんPASSにも渡らない" },
  ],
} as const;

export const organizerLine = {
  heading: "受付側も、LINEだけで完結",
  lead: "参加者のQRを読み取るための受付PASSも、公式LINEからボタン一つで作成できます。",
  body: "専用システムの導入や面倒な申し込み手続きは不要です。友だち追加した公式LINEのメニューから、受付PASS名・利用シーン・年齢条件を入れるだけで発行できます。",
} as const;

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
  heading: "使い方",
  description:
    "事前の本人確認でQRを受け取り、当日の受付ではそれを見せるだけです。参加者も運営者も、操作はすべてLINEの中で完結します。",
  steps: [
    {
      number: "01",
      title: "LINEで認証",
      audience: "参加者",
      body: "参加者は公式LINEのメニューから本人確認を始めます。専用アプリのインストールは不要で、確認は約1分で完了します。本人確認が完了すると、当日提示するQRが発行されます。",
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
      body: "運営者は公式LINEのメニューから、受付PASS名・利用シーン・年齢条件を入力するだけで受付PASSを発行できます。専用システムの導入は不要です。発行済みのPASSは一覧で管理できます。",
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
      body: "参加者は本人確認済みのQRを提示し、運営者はカメラで読み取るだけ。当日の受付で身分証を出してもらう必要はありません。",
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
  heading: string;
  description: string;
  steps: readonly HowItWorksStep[];
};

export const privacyDesign = {
  eyebrow: "PRIVACY",
  heading: "個人情報は、あずかりません",
  lead: "本人確認に使う身分証や顔写真は、世界的な本人確認サービス「Didit」の中だけで処理されます。運営者にも、ほんにんPASSにも渡りません。",
  items: [
    {
      title: "運営者には渡りません",
      body: "運営者が受け取るのは、本人確認が済んでいるか、年齢条件を満たしているか、受付PASSでいつスキャンされたかという記録だけです。氏名・住所・身分証の画像を見ることはできません。",
    },
    {
      title: "ほんにんPASSにも保存しません",
      body: "身分証の画像や顔写真をほんにんPASSのサーバーに保存することはありません。確認はDidit側で完結し、ほんにんPASSは確認結果だけを扱います。",
    },
    {
      title: "それでも、いざという時は辿れます",
      body: "本人確認の記録はDidit側に保管されます。裁判所や捜査機関から正式な法的請求があった場合には、Diditのポリシーに基づき開示の対象となります。",
    },
  ],
  highlight: {
    title: "ふだんは、誰にも見られない。いざという時には、正規の手続きで辿れる。",
    body: "参加者は個人情報を運営者に渡さずに済み、運営者は個人情報を預からずに済みます。それでいて、匿名のまま何をしてもよい仕組みにはなっていません。",
  },
  note: "開示の可否や範囲は、各国の法制度とDiditのポリシー、データの保持期間によります。",
  provider: {
    label: "本人確認の基盤",
    name: "Didit",
    url: "https://didit.me/ja/",
    /**
     * public/didit-logo.svg は公式ブランドキット（https://didit.me/brand/）の
     * 明るい背景用ファイルをそのまま配置したもの。
     * ブランド規約でマークの再描画と色の変更が禁止されているため、加工しないこと。
     * 周囲にはマーク高さ1つ分以上のクリアスペースを空ける。
     */
    logo: "/didit-logo.svg",
    logoWidth: 491,
    logoHeight: 170,
    facts: [
      "220以上の国と地域、14,000種類以上の身分証に対応する本人確認基盤です。",
      "ISO/IEC 27001 と SOC 2 Type 2 の認証を取得しています。",
      "スペインの金融当局（Tesoro Público、Banco de España、SEPBLAC、CNMV）から、対面での身分証確認と同等以上に安全であるとの評価を受けています。",
    ],
  },
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
      title: "当日はQRを見せるだけ",
      body: "本人確認は事前に済ませます。当日の受付では身分証ではなく、確認済みのQRを確認します。",
    },
    {
      title: "言いづらい場面にも",
      body: "「身分証を見せてください」と直接お願いしにくい場面でも、仕組みとして自然に確認できます。",
    },
    {
      title: "LINEだから導入しやすい",
      body: "参加者に新しいアプリを入れてもらう必要がありません。運営者も申し込みやシステム導入の手続きなしで、公式LINEから始められます。",
    },
    {
      title: "個人情報を預からずに済む",
      body: "身分証の画像や顔写真は本人確認サービス側で処理されます。運営者が個人情報を預かることがないため、保管や漏えいの心配を抱えずに済みます。",
    },
    {
      title: "小規模な運営にも",
      body: "個人や少人数で運営している場でも、無理なく取り入れられることを目指しています。",
    },
  ],
  highlight: {
    title: "参加者も運営者も、LINEだけで完結します。",
    body: "参加者は普段使っているLINEから本人確認を行えます。運営者は公式LINEからボタン一つで受付PASSを作成でき、専用アプリのインストールも導入手続きも必要ありません。",
  },
} as const;

export const useCases = {
  heading: "利用シーン",
  description: "本人確認・年齢確認を行いたい、さまざまな場面で。",
  items: [
    {
      title: "撮影会",
      body: "個室での撮影など、対人トラブルを避けたい場面の事前確認に。",
    },
    {
      title: "シーシャ店舗",
      body: "年齢確認など、利用者の確認が必要な場面に。",
    },
    {
      title: "個人サロン",
      body: "個室で施術する場で、対人トラブルを避けやすくするための事前確認に。",
    },
    {
      title: "ナイトワーカー",
      body: "個人でお客様と会うなど、事前に相手の本人確認を済ませておきたい場面に。",
    },
    {
      title: "クラブ",
      body: "入場時の年齢確認をQR提示に置き換え、身分証忘れで入場をお断りせずに済む場面に。",
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
