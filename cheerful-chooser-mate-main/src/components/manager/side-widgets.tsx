import { Bell, Gauge, Target, Trophy } from "lucide-react";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import type { StatusTone } from "@/components/common/status-badge";
import { formatTaka } from "@/constants/dashboard-data";
import {
  MANAGER_NOTIFICATIONS,
  MONTHLY_TARGET,
  PERFORMANCE_SCORE,
  TODAY_GOALS,
} from "@/constants/manager-dashboard-data";

const toneClass: Record<StatusTone, string> = {
  success: "bg-success/12 text-success",
  warning: "bg-warning/15 text-warning",
  danger: "bg-danger/12 text-danger",
  info: "bg-primary/10 text-primary",
  neutral: "bg-muted text-muted-foreground",
};

export function TodayGoals() {
  return (
    <WidgetCard title="Today's Goals" description="Progress against daily targets" icon={Target}>
      <ul className="space-y-4">
        {TODAY_GOALS.map((goal) => {
          const percent = Math.min(100, Math.round((goal.current / goal.target) * 100));
          const isMoney = goal.current > 1000;
          return (
            <li key={goal.id}>
              <div className="flex items-center justify-between gap-3 text-[13px]">
                <span className="min-w-0 truncate text-muted-foreground">{goal.label}</span>
                <span className="shrink-0 font-medium tabular-nums text-foreground">
                  {isMoney ? formatTaka(goal.current) : goal.current} /{" "}
                  {isMoney ? formatTaka(goal.target) : goal.target}
                </span>
              </div>
              <Progress value={percent} className="mt-2 h-1.5" aria-label={`${goal.label} progress`} />
            </li>
          );
        })}
      </ul>
    </WidgetCard>
  );
}

export function RecentNotifications() {
  return (
    <WidgetCard title="Recent Notifications" description="Branch alerts and updates" icon={Bell}>
      <ul className="space-y-4">
        {MANAGER_NOTIFICATIONS.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id} className="flex gap-3">
              <span
                className={cn(
                  "grid h-8 w-8 shrink-0 place-items-center rounded-lg",
                  toneClass[item.tone],
                )}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-[13px] font-medium leading-snug text-foreground">{item.title}</p>
                <p className="mt-0.5 text-[12px] text-muted-foreground">{item.time}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </WidgetCard>
  );
}

export function PerformanceScore() {
  return (
    <WidgetCard
      title="Branch Performance Score"
      description="Composite operational score"
      icon={Trophy}
    >
      <div className="flex items-center gap-4">
        <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-success/12 text-success">
          <span className="text-xl font-semibold tabular-nums">{PERFORMANCE_SCORE.score}</span>
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground">
            Grade {PERFORMANCE_SCORE.grade} · {PERFORMANCE_SCORE.label}
          </p>
          <p className="text-[12.5px] text-muted-foreground">Rolling 30-day average</p>
        </div>
      </div>
      <ul className="mt-5 space-y-3">
        {PERFORMANCE_SCORE.breakdown.map((row) => (
          <li key={row.id}>
            <div className="flex items-center justify-between gap-3 text-[12.5px]">
              <span className="min-w-0 truncate text-muted-foreground">{row.label}</span>
              <span className="shrink-0 font-medium tabular-nums text-foreground">{row.value}%</span>
            </div>
            <Progress value={row.value} className="mt-1.5 h-1.5" aria-label={row.label} />
          </li>
        ))}
      </ul>
    </WidgetCard>
  );
}

export function MonthlyTarget() {
  const percent = Math.round((MONTHLY_TARGET.achieved / MONTHLY_TARGET.target) * 100);
  return (
    <WidgetCard
      title="Monthly Target Progress"
      description="July 2026 collection target"
      icon={Gauge}
    >
      <p className="text-[26px] font-semibold leading-none tracking-tight tabular-nums text-foreground">
        {formatTaka(MONTHLY_TARGET.achieved)}
      </p>
      <p className="mt-2 text-[12.5px] text-muted-foreground">
        of {formatTaka(MONTHLY_TARGET.target)} target · {MONTHLY_TARGET.daysLeft} days left
      </p>
      <Progress value={percent} className="mt-4 h-2" aria-label="Monthly target progress" />
      <p className="mt-2 text-[12.5px] font-medium tabular-nums text-success">{percent}% achieved</p>
    </WidgetCard>
  );
}
