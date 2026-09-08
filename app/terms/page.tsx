import type { Metadata } from "next";

import PlaceholderPage from "@/components/PlaceholderPage";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `利用規約｜${SITE_NAME}`,
  description: `${SITE_NAME}の利用規約のページです。`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PlaceholderPage
      title="利用規約"
      description={`${SITE_NAME}の利用規約を掲載する予定のページです。`}
    />
  );
}
