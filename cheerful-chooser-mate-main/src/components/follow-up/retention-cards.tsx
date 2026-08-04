import { AlertTriangle, PackageCheck, UserMinus, UserRoundCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { RETENTION_STATS, type RetentionStat } from "@/constants/follow-up-data";
import type { StatusTone } from "@/components/common/status-badge";

const ICONS: Record<string, LucideIcon> = {
  "at-risk": AlertTriangle,
  returning: UserRoundCheck,
  renewed: PackageCheck,
  inactive: UserMinus,
};

const TONE: Record<StatusTone, { icon: string; ring: string; value: string }> = {
  success: { icon: "bg-success/12 text-success", ring: "ring-success/20", value: "text-success" },
  warning: { icon: "bg-warning/15 text-warning", ring: "ring-warning/20", value: "text-warning" },
  danger: { icon: "bg-danger/12 text-danger", ring: "ring-danger/20", value: "text-danger" },
  info: { icon: "bg-primary/10 text-primary", ring: "ring-primary/20", value: "text-primary" },
  neutral: { icon: "bg-muted text-muted-foreground", ring: "ring-border", value: "text-foreground" },
};

export function RetentionCard({ stat }: { stat: RetentionStat }) {
  const Icon = ICONS[stat.id] ?? UserRoundCheck;
  const tone = TONE[stat.tone];

  return (
    <Card interactive className={cn("relative overflow-hidden p-5 ring-1", tone.ring)}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-primary/10 to-transparent"
      />
      <div className="relative flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-[13px] font-medium text-muted-foreground">{stat.label}</p>
          <p
            className={cn(
              "mt-2.5 text-[28px] font-semibold leading-none tracking-tight tabular-nums",
              tone.value,
            )}
          >
            {stat.value}
          </p>
        </div>
        <span className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg", tone.icon)}>
          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
        </span>
      </div>
      <p className="relative mt-3 text-[12.5px] leading-relaxed text-muted-foreground">
        {stat.description}
      </p>
      <p className="relative mt-1 text-[12.5px] font-medium text-foreground">{stat.trend}</p>
    </Card>
  );
}

export function RetentionCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {RETENTION_STATS.map((stat) => (
        <RetentionCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
}
