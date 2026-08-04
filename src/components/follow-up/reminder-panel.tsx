import { Link } from "@tanstack/react-router";
import { BellRing, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { StatusBadge } from "@/components/common/status-badge";
import {
  FOLLOW_UP_PRIORITY_TONE,
  TODAY_REMINDERS,
  type Reminder,
} from "@/constants/follow-up-data";

export function ReminderPanel({ onCall }: { onCall?: (reminder: Reminder) => void }) {
  return (
    <WidgetCard
      title="Today's reminders"
      description="Scheduled calls and reviews for 31 July 2026"
      icon={BellRing}
      menuItems={["Refresh reminders", "Export list", "Open call queue"]}
      contentClassName="pt-1"
    >
      <ol className="divide-y divide-border">
        {TODAY_REMINDERS.map((reminder) => (
          <li key={reminder.id} className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0">
            <span
              className={cn(
                "mt-0.5 shrink-0 rounded-md border px-2 py-1 text-[11.5px] font-semibold tabular-nums",
                reminder.priority === "High"
                  ? "border-danger/40 bg-danger/10 text-danger"
                  : reminder.priority === "Medium"
                    ? "border-warning/40 bg-warning/12 text-warning"
                    : "border-border bg-muted/60 text-muted-foreground",
              )}
            >
              {reminder.time}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  to="/manager/follow-up/$followUpId"
                  params={{ followUpId: reminder.followUpId }}
                  className="truncate text-sm font-medium text-foreground hover:underline"
                >
                  {reminder.title}
                </Link>
                <StatusBadge
                  tone={FOLLOW_UP_PRIORITY_TONE[reminder.priority]}
                  label={reminder.priority}
                  dot={false}
                />
              </div>
              <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">
                {reminder.description}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="shrink-0"
              onClick={() => onCall?.(reminder)}
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              Call
            </Button>
          </li>
        ))}
      </ol>
    </WidgetCard>
  );
}
