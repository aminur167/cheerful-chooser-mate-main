import { Zap } from "lucide-react";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { QUICK_ACTIONS } from "@/constants/dashboard-data";

export function QuickActions() {
  return (
    <WidgetCard
      title="Quick Actions"
      description="Frequently used head-office shortcuts"
      icon={Zap}
      showMenu={false}
    >
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {QUICK_ACTIONS.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              type="button"
              className="group flex items-start gap-3 rounded-xl border border-border bg-background p-4 text-left transition-enterprise hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-hover hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-enterprise group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-medium text-foreground">
                  {action.label}
                </span>
                <span className="block truncate text-[12.5px] text-muted-foreground">
                  {action.description}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </WidgetCard>
  );
}
