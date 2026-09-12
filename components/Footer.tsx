import Image from "next/image";
import Link from "next/link";

import { legalMeta } from "@/lib/legal/config";
import { SITE_NAME, footerLinks } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="flex items-center gap-2 text-base font-bold text-ink">
              <Image
                src="/logo.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 rounded-md"
              />
              {SITE_NAME}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              運営: {legalMeta.operatorName}
            </p>
            <p className="mt-1 text-sm text-slate-600">
              お問い合わせ:{" "}
              <a
                href={legalMeta.contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-2 hover:underline"
              >
                {legalMeta.contactLabel}
              </a>
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {SITE_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}
