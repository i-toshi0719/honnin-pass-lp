import type { Metadata } from "next";

import LegalDocument from "@/components/LegalDocument";
import { privacyContent } from "@/lib/legal/privacy-content";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `プライバシーポリシー｜${SITE_NAME}`,
  description: `${SITE_NAME}のプライバシーポリシー。LINE連携、Diditによる本人確認、受付PASS・QRコード読取時の情報取扱いについて定めています。`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalDocument content={privacyContent} />;
}
