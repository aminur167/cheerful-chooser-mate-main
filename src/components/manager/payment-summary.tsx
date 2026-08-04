import { Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { formatTaka } from "@/constants/dashboard-data";
import { PAYMENT_SUMMARY } from "@/constants/manager-dashboard-data";

const toneClass = {
  primary: "bg-primary/10 text-primary",
  success: "bg-success/12 text-success",
  warning: "bg-warning/15 text-warning",
} as const;

export function PaymentSummary() {
  return (
    <WidgetCard
      title="Payment Summary"
      description="Collections and outstanding dues in BDT"
      icon={Wallet}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {PAYMENT_SUMMARY.map((card) => (
          <div
            key={card.id}
            className="rounded-xl border border-border bg-background p-4 transition-enterprise hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="min-w-0 truncate text-[13px] font-medium text-muted-foreground">
                {card.label}
              </p>
              <span
                className={cn(
                  "grid h-8 w-8 shrink-0 place-items-center rounded-lg",
                  toneClass[card.tone],
                )}
              >
                <Wallet className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
            <p className="mt-3 text-[22px] font-semibold leading-none tracking-tight tabular-nums text-foreground">
              {formatTaka(card.amount)}
            </p>
            <p className="mt-2 truncate text-[12.5px] text-muted-foreground">{card.hint}</p>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}
