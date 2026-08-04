import { Users } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PATIENT_GROWTH } from "@/constants/dashboard-data";

const config = {
  patients: { label: "Total patients", color: "var(--chart-1)" },
  newPatients: { label: "New patients", color: "var(--chart-2)" },
};

export function PatientGrowth() {
  return (
    <WidgetCard
      title="Patient Growth"
      description="Monthly registered patients"
      icon={Users}
      contentClassName="flex flex-col"
    >
      <ChartContainer config={config} className="aspect-auto h-full min-h-[240px] w-full flex-1">
        <AreaChart data={PATIENT_GROWTH} margin={{ left: 0, right: 8, top: 4, bottom: 0 }}>
          <defs>
            <linearGradient id="patientGrowthFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.28} />
              <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="4 4" className="stroke-border" />
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} fontSize={12} />
          <YAxis tickLine={false} axisLine={false} width={40} fontSize={12} />
          <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
          <Area
            type="monotone"
            dataKey="patients"
            stroke="var(--chart-1)"
            strokeWidth={2}
            fill="url(#patientGrowthFill)"
          />
        </AreaChart>
      </ChartContainer>
    </WidgetCard>
  );
}
