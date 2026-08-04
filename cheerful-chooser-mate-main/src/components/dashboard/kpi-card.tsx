import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import type { Kpi, KpiTone } from "@/constants/dashboard-data";

const toneClass: Record<KpiTone, { icon: string; delta: string }> = {
  primary: { icon: "bg-primary/10 text-primary", delta: "text-primary" },
  success: { icon: "bg-success/12 text-success", delta: "text-success" },
  warning: { icon: "bg-warning/15 text-warning", delta: "text-warning" },
  danger: { icon: "bg-danger/12 text-danger", delta: "text-danger" },
};

export function KpiCard({ kpi }: { kpi: Kpi }) {
  const Icon = kpi.icon;
  const tone = toneClass[kpi.tone];
  const DeltaIcon =
    kpi.delta?.direction === "up"
      ? ArrowUpRight
      : kpi.delta?.direction === "down"
        ? ArrowDownRight
        : Minus;

  return (
    <Card interactive className="p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="min-w-0 truncate text-[13px] font-medium text-muted-foreground">{kpi.label}</p>
        <span className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg", tone.icon)}>
          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
        </span>
      </div>
      <p className="mt-3 text-[26px] font-semibold leading-none tracking-tight tabular-nums text-foreground">
        {kpi.value}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
        {kpi.delta ? (
          <span
            className={cn(
              "inline-flex items-center gap-1 text-[12.5px] font-medium",
              kpi.delta.direction === "down" ? "text-danger" : tone.delta,
            )}
          >
            <DeltaIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {kpi.delta.value}
          </span>
        ) : null}
        {kpi.hint ? (
          <span className="truncate text-[12.5px] text-muted-foreground">{kpi.hint}</span>
        ) : null}
      </div>
    </Card>
  );
}

export function KpiGrid({ items }: { items: Kpi[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((kpi) => (
        <KpiCard key={kpi.id} kpi={kpi} />
      ))}
    </div>
  );
}
