import { Banknote, ClipboardCheck, PhoneCall, UserPlus, Waves } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { formatDate } from "@/lib/format";
import type {
  PatientTimelineEvent,
  PatientTimelineIcon,
} from "@/constants/patient-data";
import type { StatusTone } from "@/components/common/status-badge";
import { cn } from "@/lib/utils";

const toneClass: Record<StatusTone, string> = {
  success: "border-success/35 bg-success/12 text-success",
  warning: "border-warning/40 bg-warning/15 text-warning",
  danger: "border-danger/35 bg-danger/12 text-danger",
  info: "border-primary/30 bg-primary/10 text-primary",
  neutral: "border-border bg-muted/50 text-muted-foreground",
};

/** Icons live in the view layer so timeline data stays serialisable across SSR. */
const timelineIcon: Record<PatientTimelineIcon, LucideIcon> = {
  registered: UserPlus,
  assessment: ClipboardCheck,
  therapy: Waves,
  payment: Banknote,
  call: PhoneCall,
};

export function PatientTimeline({ events }: { events: PatientTimelineEvent[] }) {
  return (
    <ol className="relative space-y-6">
      <span
        className="absolute left-[17px] top-2 bottom-2 w-px bg-border"
        aria-hidden="true"
      />
      {events.map((event) => {
        const Icon = timelineIcon[event.icon];
        return (
          <li key={event.id} className="relative flex gap-4">
            <span
              className={cn(
                "relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border",
                toneClass[event.tone],
              )}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1 pt-0.5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <p className="text-sm font-medium text-foreground">{event.title}</p>
                <time
                  dateTime={event.date}
                  className="shrink-0 text-[12px] tabular-nums text-muted-foreground"
                >
                  {formatDate(event.date)}
                </time>
              </div>
              <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                {event.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
