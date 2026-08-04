import { Badge, type BadgeProps } from "@/components/ui/badge";

export type StatusTone = "success" | "warning" | "danger" | "info" | "neutral";

const toneToVariant: Record<StatusTone, NonNullable<BadgeProps["variant"]>> = {
  success: "success",
  warning: "warning",
  danger: "danger",
  info: "info",
  neutral: "neutral",
};

/**
 * Reusable status pill for tables and detail views.
 * Business modules map their own domain statuses onto a tone.
 */
export function StatusBadge({
  tone = "neutral",
  label,
  dot = true,
  className,
}: {
  tone?: StatusTone;
  label: string;
  dot?: boolean;
  className?: string;
}) {
  return (
    <Badge variant={toneToVariant[tone]} dot={dot} className={className}>
      {label}
    </Badge>
  );
}
