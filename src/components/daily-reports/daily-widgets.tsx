import {
  Activity,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  CloudRain,
  Clock,
  Droplets,
  ListTodo,
  MapPinned,
  PhoneCall,
  Sunrise,
  Sunset,
  Target,
  UserPlus,
  Wallet,
  Wind,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { StatusBadge, type StatusTone } from "@/components/common/status-badge";
import { formatTaka } from "@/constants/dashboard-data";
import {
  DAILY_TIMELINE,
  PENDING_TASKS,
  PERFORMANCE_RINGS,
  TODAYS_GOALS,
  TODAYS_SUMMARY,
  UPCOMING_TOMORROW,
  WEATHER_TODAY,
  type TimelineEntry,
} from "@/constants/daily-report-data";

/* Serializable icon keys → components (loader data stays JSON-safe). */
const TIMELINE_ICONS: Record<string, LucideIcon> = {
  sunrise: Sunrise,
  sunset: Sunset,
  "user-plus": UserPlus,
  clipboard: ClipboardCheck,
  activity: Activity,
  wallet: Wallet,
  phone: PhoneCall,
  map: MapPinned,
};

const TONE_ICON: Record<StatusTone, string> = {
  success: "bg-success/12 text-success",
  warning: "bg-warning/15 text-warning",
  danger: "bg-danger/12 text-danger",
  info: "bg-primary/10 text-primary",
  neutral: "bg-muted text-muted-foreground",
};

/* ------------------------------------------------------------------ */
/* Today's summary                                                    */
/* ------------------------------------------------------------------ */

export function TodaysSummaryWidget() {
  return (
    <WidgetCard
      title="Today's Summary"
      description="Operational snapshot for Dhaka Main Branch"
      icon={Clock}
    >
      <dl className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {TODAYS_SUMMARY.map((stat) => (
          <div
            key={stat.id}
            className="rounded-xl border border-border bg-muted/25 px-4 py-3.5"
          >
            <dt className="truncate text-[12.5px] font-medium text-muted-foreground">
              {stat.label}
            </dt>
            <dd className="mt-1.5 text-[19px] font-semibold leading-none tracking-tight tabular-nums text-foreground">
              {stat.value}
            </dd>
            {stat.hint ? (
              <p className="mt-1.5 truncate text-[12px] text-muted-foreground">{stat.hint}</p>
            ) : null}
          </div>
        ))}
      </dl>
    </WidgetCard>
  );
}

/* ------------------------------------------------------------------ */
/* Circular performance progress                                      */
/* ------------------------------------------------------------------ */

export function CircularProgress({
  value,
  label,
  size = 128,
}: {
  value: number;
  label?: string;
  size?: number;
}) {
  const radius = size / 2 - 9;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.min(100, Math.max(0, value)) / 100);

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        role="img"
        aria-label={`${label ?? "Progress"}: ${value}%`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={9}
          className="stroke-muted"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={9}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="stroke-primary transition-[stroke-dashoffset] duration-700"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[20px] font-semibold leading-none tabular-nums text-foreground">
          {value}%
        </span>
        {label ? (
          <span className="mt-1 max-w-[86px] truncate text-[11.5px] text-muted-foreground">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export function PerformanceProgressWidget() {
  return (
    <WidgetCard
      title="Performance Progress"
      description="Completion percentage and target achievement"
      icon={Target}
    >
      <div className="flex flex-wrap items-center justify-around gap-6 py-2">
        {PERFORMANCE_RINGS.map((ring) => (
          <div key={ring.id} className="flex min-w-[140px] flex-col items-center text-center">
            <CircularProgress value={ring.value} label={ring.label} />
            <p className="mt-3 max-w-[170px] text-[12.5px] leading-relaxed text-muted-foreground">
              {ring.caption}
            </p>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}

/* ------------------------------------------------------------------ */
/* Timeline                                                           */
/* ------------------------------------------------------------------ */

export function DailyTimeline({ items = DAILY_TIMELINE }: { items?: TimelineEntry[] }) {
  return (
    <WidgetCard
      title="Today's Timeline"
      description="Chronological log of branch activities"
      icon={CalendarClock}
    >
      <ol className="relative space-y-5 pl-1">
        {items.map((entry, index) => {
          const Icon = TIMELINE_ICONS[entry.icon] ?? CheckCircle2;
          return (
            <li key={entry.id} className="relative flex gap-4">
              {index < items.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-[17px] top-9 h-[calc(100%+4px)] w-px bg-border"
                />
              ) : null}
              <span
                className={cn(
                  "relative grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-card",
                  TONE_ICON[entry.tone],
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1 pb-1">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  <p className="text-sm font-medium text-foreground">{entry.title}</p>
                  <span className="rounded-md bg-muted px-1.5 py-0.5 text-[11.5px] font-medium tabular-nums text-muted-foreground">
                    {entry.time}
                  </span>
                </div>
                <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">
                  {entry.detail}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </WidgetCard>
  );
}

/* ------------------------------------------------------------------ */
/* Right sidebar widgets                                              */
/* ------------------------------------------------------------------ */

export function TodaysGoalWidget() {
  const completion = 92;
  return (
    <WidgetCard title="Today's Goal" description="Completed 92% of daily targets" icon={Target}>
      <div className="flex items-center gap-5">
        <CircularProgress value={completion} label="Completed" size={104} />
        <ul className="min-w-0 flex-1 space-y-3">
          {TODAYS_GOALS.map((goal) => {
            const pct = Math.min(100, Math.round((goal.current / goal.target) * 100));
            return (
              <li key={goal.id} className="space-y-1.5">
                <div className="flex items-baseline justify-between gap-2 text-[12.5px]">
                  <span className="min-w-0 truncate text-muted-foreground">{goal.label}</span>
                  <span className="shrink-0 font-medium tabular-nums text-foreground">
                    {goal.currency
                      ? `${formatTaka(goal.current)} / ${formatTaka(goal.target)}`
                      : `${goal.current}/${goal.target}`}
                  </span>
                </div>
                <Progress value={pct} className="h-1.5" />
              </li>
            );
          })}
        </ul>
      </div>
    </WidgetCard>
  );
}

export function PendingTasksWidget() {
  return (
    <WidgetCard title="Pending Tasks" description="4 items awaiting action" icon={ListTodo}>
      <ul className="space-y-2.5">
        {PENDING_TASKS.map((task) => (
          <li
            key={task.id}
            className="rounded-xl border border-border bg-muted/25 px-3.5 py-3"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="min-w-0 text-[13px] font-medium text-foreground">{task.label}</p>
              <StatusBadge tone={task.tone} label={task.tone === "danger" ? "Urgent" : "Open"} />
            </div>
            <p className="mt-1 truncate text-[12px] text-muted-foreground">{task.detail}</p>
          </li>
        ))}
      </ul>
    </WidgetCard>
  );
}

export function UpcomingTomorrowWidget() {
  return (
    <WidgetCard
      title="Upcoming Tomorrow"
      description="Saturday, 1 August 2026"
      icon={CalendarClock}
    >
      <ul className="space-y-3">
        {UPCOMING_TOMORROW.map((item) => (
          <li key={item.id} className="flex items-start gap-3">
            <span className="mt-0.5 w-[68px] shrink-0 text-[12px] font-medium tabular-nums text-muted-foreground">
              {item.time}
            </span>
            <span className="min-w-0 text-[13px] leading-relaxed text-foreground">{item.label}</span>
          </li>
        ))}
      </ul>
    </WidgetCard>
  );
}

export function WeatherWidget() {
  return (
    <WidgetCard
      title="Weather"
      description={`${WEATHER_TODAY.city} · placeholder feed`}
      icon={CloudRain}
      showMenu={false}
    >
      <div className="flex items-center gap-4">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
          <CloudRain className="h-7 w-7" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-[24px] font-semibold leading-none tabular-nums text-foreground">
            {WEATHER_TODAY.temperature}
          </p>
          <p className="mt-1.5 truncate text-[12.5px] text-muted-foreground">
            {WEATHER_TODAY.condition} · feels {WEATHER_TODAY.feelsLike}
          </p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/25 px-3 py-2 text-[12.5px]">
          <Droplets className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          <span className="text-muted-foreground">Humidity</span>
          <span className="ml-auto font-medium tabular-nums text-foreground">
            {WEATHER_TODAY.humidity}
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/25 px-3 py-2 text-[12.5px]">
          <Wind className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          <span className="text-muted-foreground">Wind</span>
          <span className="ml-auto font-medium tabular-nums text-foreground">
            {WEATHER_TODAY.wind}
          </span>
        </div>
      </div>
      <p className="mt-3 rounded-lg bg-warning/10 px-3 py-2 text-[12px] leading-relaxed text-warning">
        {WEATHER_TODAY.advisory}
      </p>
    </WidgetCard>
  );
}

/* ------------------------------------------------------------------ */
/* Small reusable stat card                                           */
/* ------------------------------------------------------------------ */

export function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  tone = "info",
}: {
  label: string;
  value: string;
  hint?: string;
  icon: LucideIcon;
  tone?: StatusTone;
}) {
  return (
    <Card interactive className="p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="min-w-0 truncate text-[13px] font-medium text-muted-foreground">{label}</p>
        <span
          className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg", TONE_ICON[tone])}
        >
          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
        </span>
      </div>
      <p className="mt-3 text-[24px] font-semibold leading-none tracking-tight tabular-nums text-foreground">
        {value}
      </p>
      {hint ? <p className="mt-2.5 truncate text-[12.5px] text-muted-foreground">{hint}</p> : null}
    </Card>
  );
}
