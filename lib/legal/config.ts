/**
 * 法的ページ（プライバシーポリシー・利用規約）の共通設定。
 * 文案の変更は lib/legal/privacy-content.ts / terms-content.ts を編集する。
 * 有料化時に追加が想定される項目（販売者住所、特商法、決済等）は legalMeta.futureNotes を参照。
 */

import { CTA_URL, SITE_NAME, SITE_URL } from "@/lib/site-config";

/** 問い合わせ窓口の表示名（公式LINE） */
export const CONTACT_LABEL = "公式LINE";

export const legalMeta = {
  /** サービス名 */
  serviceName: SITE_NAME,
  /** 運営者の表示名（フッター・法的ページ共通） */
  operatorName: "ほんにんPASS運営事務局",
  /** 本LPのURL */
  siteUrl: SITE_URL,
  /** 問い合わせ先（公式LINE） */
  contactUrl: CTA_URL,
  contactLabel: CONTACT_LABEL,
  /**
   * 初回公開日。改定時は revisedDate のみ更新する。
   * 形式: YYYY年M月D日
   */
  enactedDate: "2026年9月12日",
  revisedDate: "2026年9月12日",
  /** 外部サービスのポリシーURL */
  externalPolicies: {
    line: "https://line.me/ja/terms/policy/",
    didit: "https://didit.me/ja/",
  },
  /**
   * 有料化・法務拡張時に lib/legal/ へ追加する想定の項目（今回は未実装）。
   * - 特商法に基づく表記ページ
   * - 販売者の氏名・住所・電話番号
   * - 料金・返金・決済（Stripe 等）に関する条項
   */
  futureNotes: ["tokushoho", "sellerInfo", "paymentTerms"] as const,
} as const;

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  /** 箇条書き。paragraphs の直後に表示 */
  listItems?: readonly string[];
};

export type LegalDocumentContent = {
  title: string;
  description: string;
  sections: readonly LegalSection[];
};
