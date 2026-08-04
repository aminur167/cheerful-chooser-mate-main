import { History } from "lucide-react";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { StatusTone } from "@/components/common/status-badge";
import { MANAGER_ACTIVITIES } from "@/constants/manager-dashboard-data";

const toneClass: Record<StatusTone, string> = {
  success: "bg-success/12 text-success",
  warning: "bg-warning/15 text-warning",
  danger: "bg-danger/12 text-danger",
  info: "bg-primary/10 text-primary",
  neutral: "bg-muted text-muted-foreground",
};

export function ManagerActivities() {
  return (
    <WidgetCard
      title="Recent Activities"
      description="Latest events at Dhaka Main Branch"
      icon={History}
      action={
        <Button variant="ghost" size="sm">
          View log
        </Button>
      }
    >
      <ol className="relative space-y-6">
        <span className="absolute left-[15px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />
        {MANAGER_ACTIVITIES.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id} className="relative flex gap-3.5">
              <span
                className={cn(
                  "relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full ring-4 ring-card",
                  toneClass[item.tone],
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-foreground">{item.title}</p>
                <p className="truncate text-[12.5px] text-muted-foreground">{item.description}</p>
                <p className="mt-1 text-[12px] text-muted-foreground/80">{item.time}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </WidgetCard>
  );
}
