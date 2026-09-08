import { CTA_LABEL, CTA_URL } from "@/lib/site-config";

type Props = {
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base sm:text-lg",
} as const;

export default function CtaButton({
  label = CTA_LABEL,
  size = "md",
  className = "",
}: Props) {
  return (
    <a
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand font-bold text-white shadow-sm transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark ${sizeClasses[size]} ${className}`}
    >
      {label}
    </a>
  );
}
