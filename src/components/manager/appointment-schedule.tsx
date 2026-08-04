import { CalendarClock } from "lucide-react";
import { cn } from "@/lib/utils";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { StatusBadge } from "@/components/common/status-badge";
import { TODAY_SCHEDULE } from "@/constants/manager-dashboard-data";

const stateLabel = {
  completed: "Completed",
  "in-progress": "In progress",
  upcoming: "Upcoming",
} as const;

export function AppointmentSchedule() {
  return (
    <WidgetCard
      title="Today's Appointment Schedule"
      description="Session timeline for Dhaka Main Branch"
      icon={CalendarClock}
    >
      <ol className="relative space-y-5">
        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />
        {TODAY_SCHEDULE.map((slot) => (
          <li key={slot.id} className="relative flex gap-4">
            <span
              className={cn(
                "relative z-10 mt-1.5 h-[15px] w-[15px] shrink-0 rounded-full ring-4 ring-card",
                slot.state === "completed"
                  ? "bg-success"
                  : slot.state === "in-progress"
                    ? "bg-primary"
                    : "bg-muted-foreground/35",
              )}
              aria-hidden="true"
            />
            <div className="min-w-0 flex-1 rounded-lg px-2 py-1 transition-enterprise hover:bg-surface-hover">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">
                    <span className="tabular-nums text-muted-foreground">{slot.time}</span>
                    <span className="mx-2 text-border" aria-hidden="true">
                      ·
                    </span>
                    {slot.title}
                  </p>
                  <p className="truncate text-[12.5px] text-muted-foreground">
                    {slot.patient} · {slot.room}
                  </p>
                </div>
                <StatusBadge tone={slot.tone} label={stateLabel[slot.state]} />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </WidgetCard>
  );
}
