import { Activity } from "lucide-react";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { StatusBadge } from "@/components/common/status-badge";
import { Progress } from "@/components/ui/progress";
import { THERAPY_SUMMARY } from "@/constants/manager-dashboard-data";

export function TherapySummary() {
  return (
    <WidgetCard
      title="Today's Therapy Summary"
      description="Session delivery against today's plan"
      icon={Activity}
      contentClassName="pb-2"
    >
      <ul className="space-y-3">
        {THERAPY_SUMMARY.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.id}
              className="rounded-xl border border-border bg-background p-4 transition-enterprise hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">{item.label}</p>
                    <p className="truncate text-[12.5px] text-muted-foreground">
                      {item.count} of {item.target} planned
                    </p>
                  </div>
                </div>
                <StatusBadge tone={item.status.tone} label={item.status.label} />
              </div>
              <div className="mt-3 flex items-center gap-3">
                <Progress
                  value={item.progress}
                  className="h-1.5 flex-1"
                  aria-label={`${item.label} completion`}
                />
                <span className="w-9 shrink-0 text-right text-[12px] tabular-nums text-muted-foreground">
                  {item.progress}%
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </WidgetCard>
  );
}
