import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarPlus, Download, MapPinned } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { EmptyState } from "@/components/common/empty-state";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { TablePagination } from "@/components/tables/table-pagination";
import {
  OutdoorPatientTable,
  OutdoorVisitTable,
  VisitHistoryTable,
} from "@/components/outdoor/outdoor-tables";
import {
  AreaCoverageWidget,
  TherapistAvailabilityWidget,
  TherapistCards,
  TodaysScheduleWidget,
  UpcomingVisitsWidget,
} from "@/components/outdoor/outdoor-widgets";
import { ScheduleVisitDialog } from "@/components/outdoor/schedule-visit-dialog";
import {
  DEFAULT_OUTDOOR_FILTERS,
  OutdoorFilters,
  type OutdoorFilterState,
} from "@/components/outdoor/outdoor-filters";
import {
  OUTDOOR_KPIS,
  OUTDOOR_PATIENTS,
  OUTDOOR_TABS,
  OUTDOOR_VISITS,
  VISIT_HISTORY,
} from "@/constants/outdoor-data";

const PAGE_SIZE = 8;
const TITLE = "Outdoor Service Management — Speech Therapy ERP";
const DESCRIPTION =
  "Plan and track outdoor therapy services: home visits, school visits, community programs, awareness sessions and special camps across Bangladesh.";

export const Route = createFileRoute("/manager/outdoor/")({
  validateSearch: (search: Record<string, unknown>): { tab?: string } => ({
    tab: typeof search.tab === "string" ? search.tab : undefined,
  }),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OutdoorPage,
});

function OutdoorPage() {
  const { tab } = Route.useSearch();
  const navigate = Route.useNavigate();
  const activeTab = OUTDOOR_TABS.some((item) => item.value === tab) ? tab! : "visits";

  const [wizardOpen, setWizardOpen] = useState(false);
  const [filters, setFilters] = useState<OutdoorFilterState>(DEFAULT_OUTDOOR_FILTERS);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const visits = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    return OUTDOOR_VISITS.filter((visit) => {
      const matchesQuery =
        !query ||
        [visit.visitId, visit.patientName, visit.guardian, visit.area, visit.therapistName]
          .join(" ")
          .toLowerCase()
          .includes(query);
      return (
        matchesQuery &&
        (filters.type === "all" || visit.type === filters.type) &&
        (filters.status === "all" || visit.status === filters.status) &&
        (filters.division === "all" || visit.division === filters.division) &&
        (filters.therapist === "all" || visit.therapistName === filters.therapist)
      );
    }).sort((a, b) => b.date.localeCompare(a.date));
  }, [filters]);

  const pageCount = Math.max(1, Math.ceil(visits.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const rows = visits.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const scheduleButton = (
    <Button onClick={() => setWizardOpen(true)}>
      <CalendarPlus className="h-4 w-4" aria-hidden="true" />
      Schedule Outdoor Visit
    </Button>
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Outdoor Service Management"
        description="Manage outdoor therapy visits, patients and therapists."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Outdoor Service" },
        ]}
        actions={
          <>
            {scheduleButton}
            <Button variant="outline">
              <Download className="h-4 w-4" aria-hidden="true" />
              Export
            </Button>
          </>
        }
      />

      <section
        aria-label="Outdoor service summary"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8"
      >
        {OUTDOOR_KPIS.map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} />
        ))}
      </section>

      <div className="grid items-start gap-6 2xl:grid-cols-[minmax(0,1fr)_360px]">
        <Tabs
          value={activeTab}
          onValueChange={(next) => navigate({ search: { tab: next } })}
          className="min-w-0"
        >
          <div className="-mx-1 overflow-x-auto px-1 pb-1">
            <TabsList className="w-max">
              {OUTDOOR_TABS.map((item) => (
                <TabsTrigger key={item.value} value={item.value}>
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="visits" className="mt-6">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <OutdoorFilters
                value={filters}
                onChange={(next) => {
                  setFilters(next);
                  setPage(1);
                }}
                onRefresh={() => {
                  setRefreshing(true);
                  setTimeout(() => setRefreshing(false), 700);
                }}
                isRefreshing={refreshing}
              />
              {rows.length === 0 ? (
                <EmptyState
                  icon={MapPinned}
                  title="No Outdoor Visits Scheduled"
                  description="Start by scheduling your first outdoor therapy visit."
                  action={scheduleButton}
                  secondaryAction={
                    <Button variant="ghost" onClick={() => setFilters(DEFAULT_OUTDOOR_FILTERS)}>
                      Reset filters
                    </Button>
                  }
                  className="rounded-none border-0 shadow-none"
                />
              ) : (
                <>
                  <OutdoorVisitTable rows={rows} />
                  <div className="border-t border-border px-4 py-3.5 sm:px-5">
                    <TablePagination
                      page={currentPage}
                      pageSize={PAGE_SIZE}
                      total={visits.length}
                      onPageChange={setPage}
                    />
                  </div>
                </>
              )}
            </div>
          </TabsContent>

          <TabsContent value="patients" className="mt-6">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <OutdoorPatientTable rows={OUTDOOR_PATIENTS} />
            </div>
          </TabsContent>

          <TabsContent value="therapists" className="mt-6">
            <TherapistCards />
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <VisitHistoryTable rows={VISIT_HISTORY} />
            </div>
          </TabsContent>
        </Tabs>

        <aside className="space-y-6" aria-label="Outdoor service widgets">
          <TodaysScheduleWidget />
          <UpcomingVisitsWidget />
          <TherapistAvailabilityWidget />
          <AreaCoverageWidget />
        </aside>
      </div>

      <ScheduleVisitDialog open={wizardOpen} onOpenChange={setWizardOpen} />
    </div>
  );
}
