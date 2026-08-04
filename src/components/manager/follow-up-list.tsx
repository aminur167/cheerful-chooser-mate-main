import { Phone, PhoneCall } from "lucide-react";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { StatusBadge } from "@/components/common/status-badge";
import { Button } from "@/components/ui/button";
import { PENDING_FOLLOW_UPS } from "@/constants/manager-dashboard-data";

export function FollowUpList() {
  return (
    <WidgetCard
      title="Pending Follow-up List"
      description="Patients awaiting a follow-up call"
      icon={PhoneCall}
      contentClassName="pb-2"
    >
      <ul className="space-y-3">
        {PENDING_FOLLOW_UPS.map((item) => (
          <li
            key={item.id}
            className="rounded-xl border border-border bg-background p-4 transition-enterprise hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card"
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">{item.patient}</p>
                <p className="truncate text-[12.5px] tabular-nums text-muted-foreground">
                  {item.phone}
                </p>
              </div>
              <StatusBadge tone={item.priority.tone} label={item.priority.label} />
            </div>
            <div className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <p className="min-w-0 truncate text-[12.5px] text-muted-foreground">
                Last visit {item.lastVisit} ·{" "}
                {item.daysRemaining < 0
                  ? `${Math.abs(item.daysRemaining)} days overdue`
                  : item.daysRemaining === 0
                    ? "Due today"
                    : `${item.daysRemaining} days remaining`}
              </p>
              <Button variant="outline" size="sm" aria-label={`Call ${item.patient}`}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </WidgetCard>
  );
}
