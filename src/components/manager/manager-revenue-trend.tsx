import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatTaka } from "@/constants/dashboard-data";
import {
  MANAGER_RANGES,
  REVENUE_TREND,
  type ManagerRangeKey,
} from "@/constants/manager-dashboard-data";

const config = {
  collection: { label: "Daily Collection", color: "var(--chart-1)" },
  expenses: { label: "Expenses", color: "var(--chart-3)" },
  net: { label: "Net Income", color: "var(--chart-2)" },
};

export function ManagerRevenueTrend() {
  const [range, setRange] = useState<ManagerRangeKey>("week");
  const data = REVENUE_TREND[range];

  return (
    <WidgetCard
      title="Revenue Trend"
      description="Collection, expenses and net income for this branch"
      icon={TrendingUp}
      action={
        <Select value={range} onValueChange={(value) => setRange(value as ManagerRangeKey)}>
          <SelectTrigger className="h-9 w-[140px]" aria-label="Select revenue period">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end">
            {MANAGER_RANGES.map((option) => (
              <SelectItem key={option.key} value={option.key}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      }
      contentClassName="flex flex-col"
    >
      <div className="mb-5 flex flex-wrap items-center gap-x-6 gap-y-2">
        {Object.entries(config).map(([key, item]) => (
          <span
            key={key}
            className="inline-flex items-center gap-2 text-[12.5px] text-muted-foreground"
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: item.color }}
              aria-hidden="true"
            />
            {item.label}
          </span>
        ))}
      </div>
      <ChartContainer config={config} className="aspect-auto h-[300px] w-full">
        <LineChart data={data} margin={{ left: 4, right: 8, top: 4, bottom: 0 }}>
          <CartesianGrid vertical={false} strokeDasharray="4 4" className="stroke-border" />
          <XAxis dataKey="period" tickLine={false} axisLine={false} tickMargin={10} fontSize={12} />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            fontSize={12}
            width={54}
            tickFormatter={(value: number) => `${Math.round(value / 1000)}k`}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent formatter={(value) => formatTaka(Number(value))} />
            }
          />
          {Object.entries(config).map(([key, item]) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={item.color}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
              isAnimationActive={false}
            />
          ))}
        </LineChart>
      </ChartContainer>
    </WidgetCard>
  );
}
