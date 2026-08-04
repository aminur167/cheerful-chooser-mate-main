import { PieChart as PieChartIcon } from "lucide-react";
import { Cell, Pie, PieChart } from "recharts";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PAYMENT_DISTRIBUTION } from "@/constants/dashboard-data";

const config = Object.fromEntries(
  PAYMENT_DISTRIBUTION.map((slice) => [slice.name, { label: slice.name, color: slice.token }]),
);

export function PaymentDistribution() {
  return (
    <WidgetCard
      title="Payment Distribution"
      description="Share of collections by payment type"
      icon={PieChartIcon}
    >
      <div className="relative">
        <ChartContainer config={config} className="aspect-auto h-[200px] w-full">
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent formatter={(value) => `${value}%`} hideIndicator />}
            />
            <Pie
              data={PAYMENT_DISTRIBUTION}
              dataKey="value"
              nameKey="name"
              innerRadius={58}
              outerRadius={88}
              paddingAngle={2}
              strokeWidth={0}
            >
              {PAYMENT_DISTRIBUTION.map((slice) => (
                <Cell key={slice.name} fill={slice.token} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-semibold tabular-nums text-foreground">100%</span>
          <span className="text-[12px] text-muted-foreground">Collections</span>
        </div>
      </div>
      <ul className="mt-5 space-y-2.5">
        {PAYMENT_DISTRIBUTION.map((slice) => (
          <li key={slice.name} className="flex items-center gap-2.5 text-[13px]">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: slice.token }}
              aria-hidden="true"
            />
            <span className="min-w-0 flex-1 truncate text-muted-foreground">{slice.name}</span>
            <span className="shrink-0 font-medium tabular-nums text-foreground">{slice.value}%</span>
          </li>
        ))}
      </ul>
    </WidgetCard>
  );
}
