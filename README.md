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
  layout.tsx        メタデータ / JSON-LD / Header・Footer
  page.tsx          LP本体（セクションを並べるだけ）
  robots.ts         /robots.txt
  sitemap.ts        /sitemap.xml
  privacy|terms/          プライバシーポリシー・利用規約（lib/legal/）
  contact/                お問い合わせ（準備中ページ）
components/         セクション単位のコンポーネント
lib/site-config.ts  文言・導線・セクション本文の集約先
public/llms.txt     LLM向けのサービス概要
```

## 文言や導線の変更

原則 `lib/site-config.ts` のみを編集すれば足りるようにしています。CTAのリンク先は `CTA_URL`、SEO関連は `seo`、各セクションの本文は同名のオブジェクト（`heroSteps` / `problem` / `howItWorks` / `privacyDesign` / `useCases` / `pricing` / `cta`）にまとまっています。アイコンは `lucide-react` から選び、同じファイル内で指定します。

## 未対応・今後

- 料金は正式提供前のため「予定」の表現。確定したら `lib/site-config.ts` の `pricing` を更新する。
- OG画像は `/og.png` を参照しているだけで実ファイルは未配置。必要になったら `public/og.png` を置く。
- `/privacy` `/terms` は `lib/legal/` の文案を表示。改定時は `lib/legal/config.ts` の日付も更新する。
- `/contact` は「準備中」のプレースホルダー。

## デプロイ

Vercel にそのままデプロイできます。独自ドメインを設定する場合は `lib/site-config.ts` の `SITE_URL` を差し替えてください。
