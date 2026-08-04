import { PieChart, TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart as RePieChart,
  XAxis,
  YAxis,
} from "recharts";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { formatTaka } from "@/constants/dashboard-data";
import { COLLECTION_SERIES, METHOD_SPLIT } from "@/constants/payment-data";

const collectionConfig = {
  collection: { label: "Collection", color: "var(--chart-1)" },
  due: { label: "Outstanding due", color: "var(--chart-3)" },
};

const methodConfig = {
  amount: { label: "Amount" },
  Cash: { label: "Cash", color: "var(--chart-1)" },
  "Mobile Banking": { label: "Mobile Banking", color: "var(--chart-2)" },
  Card: { label: "Card", color: "var(--chart-3)" },
  "Bank Transfer": { label: "Bank Transfer", color: "var(--chart-4)" },
};

export function CollectionTrendChart() {
  return (
    <WidgetCard
      title="Collection vs Due"
      description="Monthly collection and outstanding balance"
      icon={TrendingUp}
      contentClassName="flex flex-col"
    >
      <div className="mb-5 flex flex-wrap items-center gap-x-6 gap-y-2">
        {Object.entries(collectionConfig).map(([key, item]) => (
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
      <ChartContainer
        config={collectionConfig}
        className="aspect-auto h-full min-h-[260px] w-full flex-1"
      >
        <BarChart data={COLLECTION_SERIES} margin={{ left: 4, right: 8, top: 4, bottom: 0 }}>
          <CartesianGrid vertical={false} strokeDasharray="4 4" className="stroke-border" />
          <XAxis dataKey="period" tickLine={false} axisLine={false} tickMargin={10} fontSize={12} />
          <YAxis
            tickLine={false}
            axisLine={false}
            width={52}
            fontSize={12}
            tickFormatter={(value: number) => `${Math.round(value / 1000)}k`}
          />
          <ChartTooltip
            content={
              <ChartTooltipContent formatter={(value) => formatTaka(Number(value))} indicator="dot" />
            }
          />
          <Bar dataKey="collection" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="due" fill="var(--chart-3)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </WidgetCard>
  );
}

export function MethodSplitChart() {
  return (
    <WidgetCard
      title="Collection by Method"
      description="Share of collection per payment channel"
      icon={PieChart}
      contentClassName="flex flex-col"
    >
      <ChartContainer
        config={methodConfig}
        className="aspect-auto h-full min-h-[220px] w-full flex-1"
      >
        <RePieChart>
          <ChartTooltip
            content={<ChartTooltipContent formatter={(value) => formatTaka(Number(value))} />}
          />
          <Pie data={METHOD_SPLIT} dataKey="amount" nameKey="method" innerRadius={52} outerRadius={82}>
            {METHOD_SPLIT.map((entry, index) => (
              <Cell key={entry.method} fill={`var(--chart-${index + 1})`} />
            ))}
          </Pie>
        </RePieChart>
      </ChartContainer>
      <ul className="mt-4 space-y-2 border-t border-border pt-4">
        {METHOD_SPLIT.map((entry, index) => (
          <li
            key={entry.method}
            className="flex items-center justify-between gap-3 text-[12.5px]"
          >
            <span className="inline-flex min-w-0 items-center gap-2 text-muted-foreground">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: `var(--chart-${index + 1})` }}
                aria-hidden="true"
              />
              <span className="truncate">{entry.method}</span>
            </span>
            <span className="shrink-0 font-medium tabular-nums text-foreground">
              {formatTaka(entry.amount)}
            </span>
          </li>
        ))}
      </ul>
    </WidgetCard>
  );
}
