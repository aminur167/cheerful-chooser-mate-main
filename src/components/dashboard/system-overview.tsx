import { ServerCog } from "lucide-react";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { StatusBadge } from "@/components/common/status-badge";
import { cn } from "@/lib/utils";
import { SYSTEM_OVERVIEW } from "@/constants/dashboard-data";
import type { StatusTone } from "@/components/common/status-badge";

const toneClass: Record<StatusTone, string> = {
  success: "bg-success/12 text-success",
  warning: "bg-warning/15 text-warning",
  danger: "bg-danger/12 text-danger",
  info: "bg-primary/10 text-primary",
  neutral: "bg-muted text-muted-foreground",
};

export function SystemOverview() {
  return (
    <WidgetCard
      title="System Overview"
      description="Platform health at a glance"
      icon={ServerCog}
      showMenu={false}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {SYSTEM_OVERVIEW.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className="rounded-xl border border-border bg-background p-4 transition-enterprise hover:border-border-strong hover:bg-surface-hover"
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    "grid h-8 w-8 shrink-0 place-items-center rounded-lg",
                    toneClass[stat.tone],
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <StatusBadge tone={stat.tone} label={stat.value} />
              </div>
              <p className="mt-3 truncate text-[13px] font-medium text-foreground">{stat.label}</p>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-[12px] leading-relaxed text-muted-foreground">
        Demo telemetry only. Live metrics arrive once the backend service is connected.
      </p>
    </WidgetCard>
  );
}
