import { Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { formatTaka } from "@/constants/dashboard-data";

/** Compact billing summary used in the collect modal and the payment profile. */
export function PaymentSummaryCard({
  packagePrice,
  discount = 0,
  paid,
  due,
  totalSessions,
  remainingSessions,
  className,
}: {
  packagePrice: number;
  discount?: number;
  paid: number;
  due: number;
  totalSessions: number;
  remainingSessions: number;
  className?: string;
}) {
  const payable = Math.max(packagePrice - discount, 0);
  const percent = payable === 0 ? 0 : Math.min(100, Math.round((paid / payable) * 100));
  const usedSessions = Math.max(totalSessions - remainingSessions, 0);

  return (
    <section
      className={cn(
        "rounded-xl border border-border bg-card p-5 shadow-card",
        className,
      )}
      aria-label="Payment summary"
    >
      <div className="flex items-center gap-2.5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
          <Wallet className="h-[18px] w-[18px]" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-foreground">Payment Summary</h3>
          <p className="text-[12px] text-muted-foreground">Live preview</p>
        </div>
      </div>

      <dl className="mt-4 space-y-2.5 border-t border-border pt-4 text-[13px]">
        <Row label="Package price" value={formatTaka(packagePrice)} />
        {discount > 0 ? (
          <Row label="Discount" value={`− ${formatTaka(discount)}`} tone="muted" />
        ) : null}
        <Row label="Paid" value={formatTaka(paid)} tone="success" />
        <Row label="Due" value={formatTaka(due)} tone={due > 0 ? "danger" : "muted"} />
        <Row label="Total sessions" value={String(totalSessions)} />
        <Row label="Remaining sessions" value={String(remainingSessions)} />
      </dl>

      <div className="mt-4 border-t border-border pt-4">
        <div className="flex items-center justify-between text-[12px] text-muted-foreground">
          <span>Collected</span>
          <span className="tabular-nums text-foreground">{percent}%</span>
        </div>
        <Progress value={percent} className="mt-1.5" />
        <p className="mt-2 text-[12px] text-muted-foreground">
          {usedSessions} of {totalSessions || 0} sessions consumed
        </p>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "muted" | "success" | "danger";
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-muted-foreground">{label}</dt>
      <dd
        className={cn(
          "font-medium tabular-nums",
          tone === "default" && "text-foreground",
          tone === "muted" && "text-muted-foreground",
          tone === "success" && "text-success",
          tone === "danger" && "text-danger",
        )}
      >
        {value}
      </dd>
    </div>
  );
}
