import type { LucideIcon } from "lucide-react";
import {
  BellRing,
  Globe,
  PackageCheck,
  ReceiptText,
  RotateCcw,
  UserPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/format";
import { formatTaka } from "@/constants/dashboard-data";
import type { PaymentTimelineItem } from "@/constants/payment-data";
import type { StatusTone } from "@/components/common/status-badge";

/** Serializable icon keys are mapped to components here, in the view layer. */
const ICONS: Record<PaymentTimelineItem["icon"], LucideIcon> = {
  registration: UserPlus,
  package: PackageCheck,
  session: ReceiptText,
  reminder: BellRing,
  refund: RotateCcw,
  online: Globe,
};

const TONE: Record<StatusTone, string> = {
  success: "border-success/40 bg-success/12 text-success",
  warning: "border-warning/40 bg-warning/15 text-warning",
  danger: "border-danger/40 bg-danger/12 text-danger",
  info: "border-primary/40 bg-primary/10 text-primary",
  neutral: "border-border bg-muted text-muted-foreground",
};

export function PaymentTimeline({ items }: { items: PaymentTimelineItem[] }) {
  return (
    <ol className="relative space-y-6 border-l border-border pl-6">
      {items.map((item) => {
        const Icon = ICONS[item.icon];
        return (
          <li key={item.id} className="relative">
            <span
              className={cn(
                "absolute -left-[37px] grid h-[26px] w-[26px] place-items-center rounded-full border",
                TONE[item.tone],
              )}
              aria-hidden="true"
            >
              <Icon className="h-3.5 w-3.5" />
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <p className="text-sm font-medium text-foreground">{item.title}</p>
              <p className="text-[12.5px] text-muted-foreground">{formatDate(item.date)}</p>
            </div>
            <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            {typeof item.amount === "number" ? (
              <p className="mt-1.5 text-[13px] font-semibold tabular-nums text-foreground">
                {formatTaka(item.amount)}
              </p>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
