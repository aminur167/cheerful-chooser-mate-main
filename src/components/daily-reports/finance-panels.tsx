import { PieChart as PieChartIcon } from "lucide-react";
import { Cell, Pie, PieChart } from "recharts";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { StatCard } from "@/components/daily-reports/daily-widgets";
import { formatTaka } from "@/constants/dashboard-data";
import { DAILY_PAYMENT_DISTRIBUTION, FINANCE_CARDS } from "@/constants/daily-report-data";

const config = Object.fromEntries(
  DAILY_PAYMENT_DISTRIBUTION.map((slice) => [slice.name, { label: slice.name, color: slice.token }]),
);

export function FinanceCards() {
  return (
    <section aria-label="Financial summary" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {FINANCE_CARDS.map((card) => (
        <StatCard
          key={card.id}
          label={card.label}
          value={card.value}
          hint={card.hint}
          icon={card.icon}
          tone={card.tone}
        />
      ))}
    </section>
  );
}

export function DailyPaymentDistributionChart() {
  const total = DAILY_PAYMENT_DISTRIBUTION.reduce((sum, slice) => sum + slice.value, 0);
  return (
    <WidgetCard
      title="Payment Distribution"
      description="Today's collection by payment method"
      icon={PieChartIcon}
    >
      <div className="relative">
        <ChartContainer config={config} className="aspect-auto h-[210px] w-full">
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideIndicator
                  formatter={(value) => formatTaka(Number(value))}
                />
              }
            />
            <Pie
              data={DAILY_PAYMENT_DISTRIBUTION}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              strokeWidth={0}
            >
              {DAILY_PAYMENT_DISTRIBUTION.map((slice) => (
                <Cell key={slice.name} fill={slice.token} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[17px] font-semibold tabular-nums text-foreground">
            {formatTaka(total)}
          </span>
          <span className="text-[12px] text-muted-foreground">Collected</span>
        </div>
      </div>
      <ul className="mt-5 space-y-2.5">
        {DAILY_PAYMENT_DISTRIBUTION.map((slice) => (
          <li key={slice.name} className="flex items-center gap-2.5 text-[13px]">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: slice.token }}
              aria-hidden="true"
            />
            <span className="min-w-0 flex-1 truncate text-muted-foreground">{slice.name}</span>
            <span className="shrink-0 font-medium tabular-nums text-foreground">
              {formatTaka(slice.value)}
            </span>
          </li>
        ))}
      </ul>
    </WidgetCard>
  );
}
