import { BarChart3 } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { THERAPY_STATS } from "@/constants/dashboard-data";

const config = {
  sessions: { label: "Sessions", color: "var(--chart-1)" },
};

export function TherapyStatistics() {
  return (
    <WidgetCard
      title="Therapy Statistics"
      description="Sessions delivered this month by type"
      icon={BarChart3}
      contentClassName="flex flex-col"
    >
      <ChartContainer config={config} className="aspect-auto h-full min-h-[240px] w-full flex-1">
        <BarChart
          data={THERAPY_STATS}
          layout="vertical"
          margin={{ left: 0, right: 16, top: 4, bottom: 0 }}
        >
          <CartesianGrid horizontal={false} strokeDasharray="4 4" className="stroke-border" />
          <XAxis type="number" tickLine={false} axisLine={false} fontSize={12} />
          <YAxis
            type="category"
            dataKey="name"
            tickLine={false}
            axisLine={false}
            width={120}
            fontSize={12}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
          <Bar dataKey="sessions" fill="var(--chart-1)" radius={[0, 6, 6, 0]} barSize={18} />
        </BarChart>
      </ChartContainer>
    </WidgetCard>
  );
}
