import type { Metadata } from "next";

import LegalDocument from "@/components/LegalDocument";
import { termsContent } from "@/lib/legal/terms-content";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `利用規約｜${SITE_NAME}`,
  description: `${SITE_NAME}の利用規約。無料β版としての提供条件、本人確認・受付PASSの利用、免責事項等を定めています。`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalDocument content={termsContent} />;
}
