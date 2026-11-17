# ほんにんPASS LP

「ほんにんPASS」のマーケティングLP。Next.js App Router + TypeScript + Tailwind CSS で構成しています。

## 開発

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 本番ビルド
npm run start   # ビルド結果をローカル起動
npm run lint    # ESLint
npx tsc --noEmit  # 型チェック
```

## 構成

```
app/
  layout.tsx                  メタデータ / JSON-LD / Header・Footer
  page.tsx                    トップ（総合の入口）
  line-official-account/      LINE公式アカウント運用者向け
  photo-session/              撮影会向け（以前のトップの内容）
  robots.ts / sitemap.ts
  privacy|terms/              プライバシーポリシー・利用規約（lib/legal/）
  contact/                    お問い合わせ（準備中ページ）
components/                   セクション単位のコンポーネント
lib/site-config.ts            サイト共通の設定と、共通セクションの文言
lib/content/                  ページごとに追加したセクションの文言
  top.ts / line-official-account.ts / photo-session.ts
public/llms.txt               LLM向けのサービス概要
```

## ページ構成

| URL | 対象 | 主なCTA |
|---|---|---|
| `/` | 店舗・イベントの運営者全般 | LINEで無料で試す |
| `/line-official-account` | LINE公式アカウントを運用中の事業者 | LINEで導入相談する |
| `/photo-session` | 撮影会の主催者 | LINEで無料で試す |

- `/photo-session` への入口は、トップの利用シーン「撮影会」カードとフッター。
- `/line-official-account` への入口は、ヘッダーのナビ、ヒーロー（PC幅）、「2つの始め方」、フッター。
- 自社の公式アカウントへの組み込みは先行導入の相談段階。「すぐ使える」とは書かないこと。

## 文言や導線の変更

- 使い方・個人情報の扱い・利用シーン・料金・CTAなど、複数ページで共通のセクションは `lib/site-config.ts` の同名オブジェクト（`heroSteps` / `howItWorks` / `privacyDesign` / `useCases` / `pricing` / `cta`）を編集します。アイコンは `lucide-react` から選び、同じファイル内で指定します。
- ヒーロー、課題の吹き出し、「2つの始め方」、よくある質問など、ページごとの文言は `lib/content/<ページ名>.ts` にあります。
- CTAのリンク先は `CTA_URL`、SEO関連は `seo`、ナビとフッターのリンクは `navItems` / `footerPageLinks` / `footerLinks`。
- ターゲット別のページを増やすときは、`lib/content/` に文言を足し、`app/<パス>/page.tsx` でセクションを並べます。`routes`・`footerPageLinks`・`app/sitemap.ts`・`public/llms.txt` への追加も忘れずに。
- 課題セクションの吹き出しは想定の声で、実在の投稿の引用ではありません。ユーザー名・日付・反応数などは付けないこと。
- よくある質問のうち個人情報に関する答えは、`privacyDesign` の記述と揃えること。

## 未対応・今後

- 撮影会ページのヒーローはキャッチコピー入りの横長画像（`public/hero.png`）。トップと公式アカウント連携は操作画面を使用。文字なしのイラストができたら差し替える。
- 公式アカウントへの組み込み時の料金は未確定のため、よくある質問に載せていない。
- 料金は正式提供前のため「予定」の表現。確定したら `lib/site-config.ts` の `pricing` を更新する。
- OG画像は `/og.png` を参照しているだけで実ファイルは未配置。必要になったら `public/og.png` を置く。
- `/privacy` `/terms` は `lib/legal/` の文案を表示。改定時は `lib/legal/config.ts` の日付も更新する。
- `/contact` は「準備中」のプレースホルダー。

## デプロイ

Vercel にそのままデプロイできます。独自ドメインを設定する場合は `lib/site-config.ts` の `SITE_URL` を差し替えてください。
