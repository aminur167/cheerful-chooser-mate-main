import { BanknoteArrowUp, BellRing, Printer, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { StatusBadge, type StatusTone } from "@/components/common/status-badge";
import { formatDate } from "@/lib/format";
import { formatTaka } from "@/constants/dashboard-data";
import type { PaymentRecord } from "@/constants/payment-data";

const REMINDER_TONE: Record<PaymentRecord["reminderStatus"], StatusTone> = {
  "Not sent": "neutral",
  "Reminder sent": "warning",
  "Reminder due": "info",
  Escalated: "danger",
};

/** Outstanding balance panel with reminder state and quick actions. */
export function DueManagementCard({
  record,
  onCollect,
  className,
}: {
  record: PaymentRecord;
  onCollect?: () => void;
  className?: string;
}) {
  const hasDue = record.due > 0;

  return (
    <section
      className={cn(
        "rounded-xl border p-5 shadow-card",
        hasDue ? "border-danger/30 bg-danger/5" : "border-border bg-card",
        className,
      )}
      aria-label="Due management"
    >
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            "grid h-9 w-9 shrink-0 place-items-center rounded-lg",
            hasDue ? "bg-danger/12 text-danger" : "bg-success/12 text-success",
          )}
        >
          <TriangleAlert className="h-[18px] w-[18px]" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-foreground">Due Management</h3>
          <p className="text-[12px] text-muted-foreground">
            {hasDue ? "Follow-up required" : "All invoices settled"}
          </p>
        </div>
      </div>

      <p
        className={cn(
          "mt-4 text-[26px] font-semibold leading-none tracking-tight tabular-nums",
          hasDue ? "text-danger" : "text-foreground",
        )}
      >
        {formatTaka(record.due)}
      </p>
      <p className="mt-1.5 text-[12.5px] text-muted-foreground">Outstanding amount</p>

      <dl className="mt-4 space-y-2.5 border-t border-border pt-4 text-[13px]">
        <div className="flex items-center justify-between gap-3">
          <dt className="text-muted-foreground">Days overdue</dt>
          <dd
            className={cn(
              "font-medium tabular-nums",
              record.daysOverdue > 0 ? "text-danger" : "text-muted-foreground",
            )}
          >
            {record.daysOverdue > 0 ? `${record.daysOverdue} days` : "—"}
          </dd>
        </div>
        <div className="flex items-center justify-between gap-3">
          <dt className="text-muted-foreground">Next due date</dt>
          <dd className="font-medium text-foreground">
            {record.nextDueDate === "—" ? "—" : formatDate(record.nextDueDate)}
          </dd>
        </div>
        <div className="flex items-center justify-between gap-3">
          <dt className="text-muted-foreground">Reminder status</dt>
          <dd>
            <StatusBadge
              tone={REMINDER_TONE[record.reminderStatus]}
              label={record.reminderStatus}
            />
          </dd>
        </div>
      </dl>

      <div className="mt-5 grid gap-2.5 border-t border-border pt-4 sm:grid-cols-2">
        <Button size="sm" disabled={!hasDue} onClick={onCollect}>
          <BanknoteArrowUp className="h-4 w-4" aria-hidden="true" />
          Collect Due
        </Button>
        <Button variant="outline" size="sm" onClick={() => window.print()}>
          <Printer className="h-4 w-4" aria-hidden="true" />
          Print Reminder
        </Button>
        <Button variant="ghost" size="sm" className="sm:col-span-2" disabled={!hasDue}>
          <BellRing className="h-4 w-4" aria-hidden="true" />
          Send SMS reminder
        </Button>
      </div>
    </section>
  );
}
