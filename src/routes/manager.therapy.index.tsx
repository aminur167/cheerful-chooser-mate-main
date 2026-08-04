import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, Download, Plus } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { EmptyState } from "@/components/common/empty-state";
import { Button } from "@/components/ui/button";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { TablePagination } from "@/components/tables/table-pagination";
import { TherapyTable } from "@/components/therapy/therapy-table";
import {
  DEFAULT_THERAPY_FILTERS,
  TherapyFilters,
  type TherapyFilterState,
} from "@/components/therapy/therapy-filters";
import {
  DEFAULT_THERAPY_COLUMNS,
  type TherapyColumnKey,
} from "@/components/therapy/therapy-columns";
import { THERAPY_KPIS, THERAPY_SESSIONS, TODAY_ISO } from "@/constants/therapy-data";

const PAGE_SIZE = 8;
const TODAY = new Date(TODAY_ISO);

export const Route = createFileRoute("/manager/therapy/")({
  head: () => ({
    meta: [
      { title: "Therapy Management — Speech Therapy ERP" },
      {
        name: "description",
        content:
          "Therapy console for the branch: schedule individual and group sessions, track attendance, session notes and patient progress in one place.",
      },
      { property: "og:title", content: "Therapy Management — Speech Therapy ERP" },
      {
        property: "og:description",
        content:
          "Therapy console for the branch: schedule individual and group sessions, track attendance, session notes and patient progress in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TherapyManagementPage,
});

function withinRange(date: string, range: string) {
  if (range === "all") return true;
  const value = new Date(date);
  if (range === "today") return value.toDateString() === TODAY.toDateString();
  if (range === "upcoming") return value.getTime() > TODAY.getTime();
  const days = range === "7d" ? 7 : 30;
  return value.getTime() >= TODAY.getTime() - days * 24 * 60 * 60 * 1000;
}

function TherapyManagementPage() {
  const [filters, setFilters] = useState<TherapyFilterState>(DEFAULT_THERAPY_FILTERS);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState<TherapyColumnKey[]>(
    DEFAULT_THERAPY_COLUMNS,
  );

  const filtered = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    return THERAPY_SESSIONS.filter((session) => {
      const matchesQuery =
        !query ||
        [
          session.patientName,
          session.patientCode,
          session.code,
          session.guardianPhone,
          session.guardianName,
          session.group?.groupName ?? "",
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return (
        matchesQuery &&
        (filters.mode === "all" || session.mode === filters.mode) &&
        (filters.status === "all" || session.status === filters.status) &&
        (filters.program === "all" || session.program === filters.program) &&
        withinRange(session.sessionDate, filters.range)
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

  const toggleColumn = (key: TherapyColumnKey) =>
    setVisibleColumns((current) =>
      current.includes(key) ? current.filter((item) => item !== key) : [...current, key],
    );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Therapy Management"
        description="Manage all therapy sessions and monitor patient progress."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Therapy Management" },
        ]}
        actions={
          <>
            <Button variant="outline">
              <Download className="h-4 w-4" aria-hidden="true" />
              Export
            </Button>
            <Button asChild>
              <Link to="/manager/therapy/new">
                <Plus className="h-4 w-4" aria-hidden="true" />
                Schedule Therapy
              </Link>
            </Button>
          </>
        }
      />

      <section
        aria-label="Therapy summary"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8"
      >
        {THERAPY_KPIS.map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} />
        ))}
      </section>

      <section
        aria-label="Therapy sessions"
        className="overflow-hidden rounded-xl border border-border bg-card shadow-card"
      >
        <TherapyFilters
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
            icon={Activity}
            title="No Therapy Sessions Yet"
            description="Start by scheduling your first therapy session."
            action={
              <Button asChild>
                <Link to="/manager/therapy/new">
                  <Plus className="h-4 w-4" aria-hidden="true" />
                  Schedule Therapy
                </Link>
              </Button>
            }
            secondaryAction={
              <Button variant="ghost" onClick={() => setFilters(DEFAULT_THERAPY_FILTERS)}>
                Reset filters
              </Button>
            }
            className="rounded-none border-0 shadow-none"
          />
        ) : (
          <>
            <TherapyTable rows={rows} visibleColumns={visibleColumns} />
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
      </section>
    </div>
  );
}
