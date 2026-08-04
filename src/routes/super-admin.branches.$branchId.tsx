import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Activity,
  ArrowLeft,
  BarChart3,
  Banknote,
  Building2,
  CalendarCheck,
  Clock,
  FileText,
  KeyRound,
  Mail,
  MapPin,
  PencilLine,
  Phone,
  Settings2,
  UserCog,
  Users,
} from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StatusBadge } from "@/components/common/status-badge";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { formatDate, formatNumber, initialsOf } from "@/lib/format";
import { formatTaka } from "@/constants/dashboard-data";
import {
  BRANCH_ACTIVITIES,
  BRANCH_REVENUE_TREND,
  BRANCH_STATUS_TONE,
  findBranch,
  type Branch,
} from "@/constants/branch-data";

const revenueConfig = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
  collection: { label: "Collection", color: "var(--chart-2)" },
};

export const Route = createFileRoute("/super-admin/branches/$branchId")({
  loader: ({ params }) => {
    const branch = findBranch(params.branchId);
    if (!branch) throw notFound();
    return { branch };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Branch not found — Speech Therapy ERP" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.branch.name} — Speech Therapy ERP`;
    const description = `Profile, manager details, revenue and staffing overview for ${loaderData.branch.name} in ${loaderData.branch.city}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  notFoundComponent: BranchNotFound,
  component: BranchDetailPage,
});

function BranchNotFound() {
  return (
    <div className="space-y-6">
      <PageHeader title="Branch not found" description="This branch no longer exists." />
      <Button asChild variant="outline">
        <Link to="/super-admin/branches">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to branches
        </Link>
      </Button>
    </div>
  );
}

function BranchDetailPage() {
  const { branch } = Route.useLoaderData() as { branch: Branch };

  return (
    <div className="space-y-8">
      <PageHeader
        title={branch.name}
        description={`${branch.code} · ${branch.city}, ${branch.division} division`}
        breadcrumbs={[
          { label: "Super Admin", to: "/super-admin" },
          { label: "Branch Management", to: "/super-admin/branches" },
          { label: branch.name },
        ]}
        actions={
          <>
            <Button variant="outline" asChild>
              <Link to="/super-admin/branches">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back
              </Link>
            </Button>
            <Button>
              <PencilLine className="h-4 w-4" aria-hidden="true" />
              Edit Branch
            </Button>
          </>
        }
      />

      <section aria-label="Branch statistics" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Stat icon={Users} label="Patients" value={formatNumber(branch.patients)} tone="primary" />
        <Stat icon={UserCog} label="Staff members" value={String(branch.staff)} tone="primary" />
        <Stat
          icon={Banknote}
          label="Monthly revenue"
          value={formatTaka(branch.monthlyRevenue)}
          tone="success"
        />
        <Stat
          icon={CalendarCheck}
          label="Sessions today"
          value={String(branch.sessions)}
          tone="warning"
        />
      </section>

      <div className="grid gap-6 xl:grid-cols-3">
        <WidgetCard
          title="Branch information"
          description="Registered contact and location details"
          icon={Building2}
          className="xl:col-span-2"
        >
          <dl className="grid gap-5 sm:grid-cols-2">
            <Field icon={MapPin} label="Address" value={branch.address} />
            <Field icon={Phone} label="Phone" value={branch.phone} />
            <Field icon={Mail} label="Email" value={branch.email} />
            <Field icon={Clock} label="Working hours" value={branch.workingHours} />
            <Field icon={CalendarCheck} label="Created" value={formatDate(branch.createdAt)} />
            <div>
              <dt className="text-[12px] text-muted-foreground">Status</dt>
              <dd className="mt-1.5">
                <StatusBadge tone={BRANCH_STATUS_TONE[branch.status]} label={branch.status} />
              </dd>
            </div>
          </dl>
        </WidgetCard>

        <WidgetCard
          title="Manager information"
          description="Primary point of contact"
          icon={UserCog}
        >
          <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
              {initialsOf(branch.manager.name)}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">
                {branch.manager.name}
              </p>
              <p className="truncate text-[12.5px] text-muted-foreground">
                Manager since {formatDate(branch.manager.since)}
              </p>
            </div>
          </div>
          <dl className="mt-5 space-y-4">
            <Field icon={Phone} label="Phone" value={branch.manager.phone} />
            <Field icon={Mail} label="Email" value={branch.manager.email} />
            <div className="flex items-start gap-2.5">
              <KeyRound className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <div className="min-w-0">
                <dt className="text-[12px] text-muted-foreground">Manager unique key</dt>
                <dd className="mt-1.5">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-2 py-1 font-mono text-[12px] font-medium text-foreground">
                    {branch.manager.managerId}
                  </span>
                </dd>
              </div>
            </div>
          </dl>
        </WidgetCard>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <WidgetCard
          title="Revenue overview"
          description="Revenue vs. collection, last 6 months"
          icon={BarChart3}
          className="xl:col-span-2"
          contentClassName="flex flex-col"
        >
          <ChartContainer config={revenueConfig} className="aspect-auto h-full min-h-[260px] w-full flex-1">
            <AreaChart data={BRANCH_REVENUE_TREND} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="branchRevenueFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0.02} />
                </linearGradient>
                <linearGradient id="branchCollectionFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-2)" stopOpacity={0.26} />
                  <stop offset="100%" stopColor="var(--chart-2)" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="4 4" className="stroke-border" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} fontSize={12} />
              <YAxis
                tickLine={false}
                axisLine={false}
                width={48}
                fontSize={12}
                tickFormatter={(value: number) => `${Math.round(value / 1000)}k`}
              />
              <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="var(--chart-1)"
                strokeWidth={2}
                isAnimationActive={false}
                fill="url(#branchRevenueFill)"
              />
              <Area
                type="monotone"
                dataKey="collection"
                stroke="var(--chart-2)"
                strokeWidth={2}
                isAnimationActive={false}
                fill="url(#branchCollectionFill)"
              />
            </AreaChart>
          </ChartContainer>
        </WidgetCard>

        <div className="grid gap-6">
          <WidgetCard title="Patient summary" description="Caseload snapshot" icon={Users}>
            <SummaryRows
              rows={[
                { label: "Active patients", value: formatNumber(branch.patients) },
                { label: "New this month", value: String(Math.round(branch.patients * 0.12)) },
                { label: "Sessions today", value: String(branch.sessions) },
                { label: "Today's collection", value: formatTaka(branch.todaysCollection) },
              ]}
            />
          </WidgetCard>

          <WidgetCard title="Staff summary" description="Team composition" icon={UserCog}>
            <SummaryRows
              rows={[
                { label: "Total staff", value: String(branch.staff) },
                { label: "Therapists", value: String(branch.therapists) },
                { label: "Support staff", value: String(branch.staff - branch.therapists) },
                {
                  label: "Patients per therapist",
                  value: String(Math.round(branch.patients / branch.therapists)),
                },
              ]}
            />
          </WidgetCard>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <WidgetCard
          title="Recent activities"
          description="Latest events at this branch"
          icon={Activity}
          className="xl:col-span-2"
        >
          <ol className="space-y-5">
            {BRANCH_ACTIVITIES.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id} className="flex gap-3.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-muted/40 text-muted-foreground">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1 border-b border-border pb-4 last:border-0 last:pb-0">
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    <p className="text-[13px] text-muted-foreground">{item.description}</p>
                    <p className="mt-1 text-[12px] text-muted-foreground/80">{item.time}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </WidgetCard>

        <WidgetCard title="Quick actions" description="Common branch operations" icon={Settings2}>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Assign Manager", icon: UserCog },
              { label: "View Reports", icon: FileText },
              { label: "Performance", icon: BarChart3 },
              { label: "Branch Settings", icon: Settings2 },
            ].map((action) => (
              <button
                key={action.label}
                type="button"
                className="flex flex-col items-start gap-2 rounded-lg border border-border bg-card p-3.5 text-left transition-enterprise hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <action.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="text-[13px] font-medium text-foreground">{action.label}</span>
              </button>
            ))}
          </div>
        </WidgetCard>
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: typeof Users;
  label: string;
  value: string;
  tone: "primary" | "success" | "warning";
}) {
  const toneClass =
    tone === "success"
      ? "bg-success/12 text-success"
      : tone === "warning"
        ? "bg-warning/15 text-warning"
        : "bg-primary/10 text-primary";
  return (
    <Card interactive className="flex items-center gap-3.5 p-5">
      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${toneClass}`}>
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-[12.5px] text-muted-foreground">{label}</p>
        <p className="truncate text-lg font-semibold tabular-nums text-foreground">{value}</p>
      </div>
    </Card>
  );
}

function Field({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
      <div className="min-w-0">
        <dt className="text-[12px] text-muted-foreground">{label}</dt>
        <dd className="text-sm text-foreground">{value}</dd>
      </div>
    </div>
  );
}

function SummaryRows({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <dl className="space-y-3">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
        >
          <dt className="text-[13px] text-muted-foreground">{row.label}</dt>
          <dd className="text-sm font-medium tabular-nums text-foreground">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
