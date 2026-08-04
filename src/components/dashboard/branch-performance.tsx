import { useState } from "react";
import { Building2 } from "lucide-react";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { StatusBadge } from "@/components/common/status-badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BRANCH_PERFORMANCE_SERIES,
  BRANCH_RANGES,
  formatTaka,
  type RangeKey,
} from "@/constants/dashboard-data";

export function BranchPerformance() {
  const [range, setRange] = useState<RangeKey>("30d");
  const branches = BRANCH_PERFORMANCE_SERIES[range];

  return (
    <WidgetCard
      title="Branch Performance"
      description="Top 5 branches by revenue"
      icon={Building2}
      action={
        <Select value={range} onValueChange={(value) => setRange(value as RangeKey)}>
          <SelectTrigger className="h-9 w-[152px]" aria-label="Select branch performance period">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end">
            {BRANCH_RANGES.map((option) => (
              <SelectItem key={option.key} value={option.key}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      }
      contentClassName="pb-2"
    >
      <ul className="-mx-2 divide-y divide-border">
        {branches.map((branch) => (
          <li
            key={branch.id}
            className="rounded-lg px-2 py-4 transition-enterprise hover:bg-surface-hover"
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">{branch.name}</p>
                <p className="truncate text-[12.5px] text-muted-foreground">
                  {branch.manager} · {branch.city}
                </p>
              </div>
              <StatusBadge tone={branch.status.tone} label={branch.status.label} />
            </div>
            <div className="mt-3 flex items-center justify-between gap-3 text-[12.5px]">
              <span className="font-medium tabular-nums text-foreground">
                {formatTaka(branch.revenue)}
              </span>
              <span className="tabular-nums text-muted-foreground">
                {branch.patients} patients
              </span>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <Progress
                value={branch.target}
                className="h-1.5 flex-1"
                aria-label={`${branch.name} target completion`}
              />
              <span className="w-9 shrink-0 text-right text-[12px] tabular-nums text-muted-foreground">
                {branch.target}%
              </span>
            </div>
          </li>
        ))}
      </ul>
    </WidgetCard>
  );
}