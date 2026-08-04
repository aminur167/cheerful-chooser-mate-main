import {
  Activity,
  Ban,
  ClipboardCheck,
  CheckCircle2,
  AlertTriangle,
  UsersRound,
  PieChart as PieChartIcon,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Bar, BarChart, Cell, Pie, PieChart, XAxis, YAxis } from "recharts";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { StatCard } from "@/components/daily-reports/daily-widgets";
import {
  CLINICAL_CARDS,
  SESSION_DISTRIBUTION,
  THERAPY_TYPE_DISTRIBUTION,
} from "@/constants/daily-report-data";

const CARD_ICONS: Record<string, LucideIcon> = {
  clipboard: ClipboardCheck,
  activity: Activity,
  users: UsersRound,
  check: CheckCircle2,
  alert: AlertTriangle,
  ban: Ban,
};

const sessionConfig = Object.fromEntries(
  SESSION_DISTRIBUTION.map((slice) => [slice.name, { label: slice.name, color: slice.token }]),
);

const therapyConfig = Object.fromEntries(
  THERAPY_TYPE_DISTRIBUTION.map((slice) => [slice.name, { label: slice.name, color: slice.token }]),
);

export function ClinicalActivityCards() {
  return (
    <section
      aria-label="Clinical activity summary"
      className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
    >
      {CLINICAL_CARDS.map((card) => (
        <StatCard
          key={card.id}
          label={card.label}
          value={card.value}
          hint={card.hint}
          icon={CARD_ICONS[card.icon] ?? Activity}
          tone={card.tone}
        />
      ))}
    </section>
  );
}

export function SessionDistributionChart() {
  const total = SESSION_DISTRIBUTION.reduce((sum, slice) => sum + slice.value, 0);
  return (
    <WidgetCard
      title="Session Distribution"
      description="Today's sessions by outcome"
      icon={PieChartIcon}
    >
      <div className="relative">
        <ChartContainer config={sessionConfig} className="aspect-auto h-[200px] w-full">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideIndicator />} />
            <Pie
              data={SESSION_DISTRIBUTION}
              dataKey="value"
              nameKey="name"
              innerRadius={58}
              outerRadius={88}
              paddingAngle={2}
              strokeWidth={0}
            >
              {SESSION_DISTRIBUTION.map((slice) => (
                <Cell key={slice.name} fill={slice.token} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-semibold tabular-nums text-foreground">{total}</span>
          <span className="text-[12px] text-muted-foreground">Sessions</span>
        </div>
      </div>
      <ul className="mt-5 space-y-2.5">
        {SESSION_DISTRIBUTION.map((slice) => (
          <li key={slice.name} className="flex items-center gap-2.5 text-[13px]">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: slice.token }}
              aria-hidden="true"
            />
            <span className="min-w-0 flex-1 truncate text-muted-foreground">{slice.name}</span>
            <span className="shrink-0 font-medium tabular-nums text-foreground">{slice.value}</span>
          </li>
        ))}
      </ul>
    </WidgetCard>
  );
}

export function TherapyTypeDistributionChart() {
  return (
    <WidgetCard
      title="Therapy Type Distribution"
      description="Sessions delivered per therapy type"
      icon={BarChart3}
    >
      <ChartContainer config={therapyConfig} className="aspect-auto h-[248px] w-full">
        <BarChart
          data={THERAPY_TYPE_DISTRIBUTION}
          layout="vertical"
          margin={{ left: 4, right: 16, top: 4, bottom: 4 }}
        >
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="name"
            width={92}
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
          />
          <ChartTooltip content={<ChartTooltipContent hideIndicator />} />
          <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={18}>
            {THERAPY_TYPE_DISTRIBUTION.map((slice) => (
              <Cell key={slice.name} fill={slice.token} />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </WidgetCard>
  );
}
