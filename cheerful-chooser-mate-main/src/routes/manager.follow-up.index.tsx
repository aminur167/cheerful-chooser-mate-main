import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Download, PhoneCall, Plus } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { EmptyState } from "@/components/common/empty-state";
import { Button } from "@/components/ui/button";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { TablePagination } from "@/components/tables/table-pagination";
import { FollowUpTable } from "@/components/follow-up/follow-up-table";
import { NewFollowUpDialog } from "@/components/follow-up/new-follow-up-dialog";
import { RetentionCards } from "@/components/follow-up/retention-cards";
import { ReminderPanel } from "@/components/follow-up/reminder-panel";
import {
  DEFAULT_FOLLOW_UP_FILTERS,
  FollowUpFilters,
  type FollowUpFilterState,
} from "@/components/follow-up/follow-up-filters";
import {
  DEFAULT_FOLLOW_UP_COLUMNS,
  type FollowUpColumnKey,
} from "@/components/follow-up/follow-up-columns";
import {
  FOLLOW_UPS,
  FOLLOW_UP_KPIS,
  FOLLOW_UP_TODAY_ISO,
} from "@/constants/follow-up-data";

const PAGE_SIZE = 8;
const TODAY = new Date(FOLLOW_UP_TODAY_ISO);
const DAY = 24 * 60 * 60 * 1000;

const TITLE = "Follow-up Management — Speech Therapy ERP";
const DESCRIPTION =
  "Patient retention CRM for the branch: track follow-up calls, reminders, guardian communication and at-risk patients.";

export const Route = createFileRoute("/manager/follow-up/")({
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
  component: FollowUpPage,
});

function withinRange(date: string, range: string) {
  if (range === "all") return true;
  const value = new Date(date);
  if (range === "today") return value.toDateString() === TODAY.toDateString();
  if (range === "tomorrow")
    return value.toDateString() === new Date(TODAY.getTime() + DAY).toDateString();
  if (range === "overdue") return value.getTime() < TODAY.getTime();
  return value.getTime() >= TODAY.getTime() && value.getTime() <= TODAY.getTime() + 7 * DAY;
}

function FollowUpPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [presetPatientId, setPresetPatientId] = useState<string | undefined>();
  const [filters, setFilters] = useState<FollowUpFilterState>(DEFAULT_FOLLOW_UP_FILTERS);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState<FollowUpColumnKey[]>(
    DEFAULT_FOLLOW_UP_COLUMNS,
  );

  const filtered = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    return FOLLOW_UPS.filter((item) => {
      const matchesQuery =
        !query ||
        [item.patientName, item.patientCode, item.code, item.guardianName, item.guardianPhone]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return (
        matchesQuery &&
        (filters.priority === "all" || item.priority === filters.priority) &&
        (filters.status === "all" || item.status === filters.status) &&
        (filters.reason === "all" || item.reason === filters.reason) &&
        (filters.branch === "all" || item.branch === filters.branch) &&
        withinRange(item.nextFollowUp, filters.range)
      );
    });
  }, [filters]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const rows = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const refresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 700);
  };

  const toggleColumn = (key: FollowUpColumnKey) =>
    setVisibleColumns((current) =>
      current.includes(key) ? current.filter((item) => item !== key) : [...current, key],
    );

  const openDialog = (patientId?: string) => {
    setPresetPatientId(patientId);
    setDialogOpen(true);
  };

  const scheduleButton = (
    <Button onClick={() => openDialog()}>
      <Plus className="h-4 w-4" aria-hidden="true" />
      Schedule Follow-up
    </Button>
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Follow-up Management"
        description="Track patient follow-ups, reminders and communication."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Follow-up Management" },
        ]}
        actions={
          <>
            <Button variant="outline">
              <Download className="h-4 w-4" aria-hidden="true" />
              Export
            </Button>
            <Button onClick={() => openDialog()}>
              <Plus className="h-4 w-4" aria-hidden="true" />
              New Follow-up
            </Button>
          </>
        }
      />

      <section
        aria-label="Follow-up summary"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8"
      >
        {FOLLOW_UP_KPIS.map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} />
        ))}
      </section>

      <section aria-label="Patient retention" className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-[15px] font-semibold tracking-tight text-foreground">
            Patient retention
          </h2>
          <p className="text-[12.5px] text-muted-foreground">
            Rolling 90-day retention signals for this branch.
          </p>
        </div>
        <RetentionCards />
      </section>

      <section
        aria-label="Follow-up queue"
        className="grid gap-6 2xl:grid-cols-[minmax(0,1fr)_380px]"
      >
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
          <FollowUpFilters
            value={filters}
            onChange={(next) => {
              setFilters(next);
              setPage(1);
            }}
            onRefresh={refresh}
            isRefreshing={refreshing}
            visibleColumns={visibleColumns}
            onToggleColumn={toggleColumn}
          />

          {rows.length === 0 ? (
            <EmptyState
              icon={PhoneCall}
              title="No Follow-ups Scheduled"
              description="Create your first follow-up reminder."
              action={scheduleButton}
              secondaryAction={
                <Button variant="ghost" onClick={() => setFilters(DEFAULT_FOLLOW_UP_FILTERS)}>
                  Reset filters
                </Button>
              }
              className="rounded-none border-0 shadow-none"
            />
          ) : (
            <>
              <FollowUpTable
                rows={rows}
                visibleColumns={visibleColumns}
                onEdit={(item) => openDialog(item.patientId)}
                onComplete={(item) => openDialog(item.patientId)}
                onReschedule={(item) => openDialog(item.patientId)}
              />
              <div className="border-t border-border px-4 py-3.5 sm:px-5">
                <TablePagination
                  page={currentPage}
                  pageSize={PAGE_SIZE}
                  total={filtered.length}
                  onPageChange={setPage}
                />
              </div>
            </>
          )}
        </div>

        <ReminderPanel onCall={(reminder) => openDialog(reminder.patientId)} />
      </section>

      <NewFollowUpDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        presetPatientId={presetPatientId}
      />
    </div>
  );
}
