import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ClipboardList, Download, Plus } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { EmptyState } from "@/components/common/empty-state";
import { Button } from "@/components/ui/button";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { TablePagination } from "@/components/tables/table-pagination";
import { AssessmentTable } from "@/components/assessments/assessment-table";
import {
  AssessmentFilters,
  DEFAULT_ASSESSMENT_FILTERS,
  type AssessmentFilterState,
} from "@/components/assessments/assessment-filters";
import {
  DEFAULT_ASSESSMENT_COLUMNS,
  type AssessmentColumnKey,
} from "@/components/assessments/assessment-columns";
import { ASSESSMENTS, ASSESSMENT_KPIS } from "@/constants/assessment-data";

const PAGE_SIZE = 8;
const TODAY = new Date("2026-07-31");

export const Route = createFileRoute("/manager/assessments/")({
  head: () => ({
    meta: [
      { title: "Assessment Management — Speech Therapy ERP" },
      {
        name: "description",
        content:
          "Clinical assessment console: record evaluations, diagnoses, therapy recommendations and treatment plans for every patient in one place.",
      },
      { property: "og:title", content: "Assessment Management — Speech Therapy ERP" },
      {
        property: "og:description",
        content:
          "Clinical assessment console: record evaluations, diagnoses, therapy recommendations and treatment plans for every patient in one place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AssessmentManagementPage,
});

function withinRange(date: string, range: string) {
  if (range === "all") return true;
  const value = new Date(date);
  if (range === "today") return value.toDateString() === TODAY.toDateString();
  const days = range === "7d" ? 7 : range === "30d" ? 30 : 90;
  return value.getTime() >= TODAY.getTime() - days * 24 * 60 * 60 * 1000;
}

function AssessmentManagementPage() {
  const [filters, setFilters] = useState<AssessmentFilterState>(DEFAULT_ASSESSMENT_FILTERS);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState<AssessmentColumnKey[]>(
    DEFAULT_ASSESSMENT_COLUMNS,
  );

  const filtered = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    return ASSESSMENTS.filter((assessment) => {
      const matchesQuery =
        !query ||
        [
          assessment.patientName,
          assessment.patientCode,
          assessment.code,
          assessment.guardianPhone,
          assessment.guardianName,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return (
        matchesQuery &&
        (filters.status === "all" || assessment.status === filters.status) &&
        (filters.assessmentType === "all" ||
          assessment.assessmentType === filters.assessmentType) &&
        (filters.therapy === "all" || assessment.recommendation.therapy === filters.therapy) &&
        (filters.branch === "all" || assessment.branch === filters.branch) &&
        withinRange(assessment.assessmentDate, filters.range)
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

  const toggleColumn = (key: AssessmentColumnKey) =>
    setVisibleColumns((current) =>
      current.includes(key) ? current.filter((item) => item !== key) : [...current, key],
    );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Assessment Management"
        description="Manage patient assessments and treatment planning."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Assessment Management" },
        ]}
        actions={
          <>
            <Button variant="outline">
              <Download className="h-4 w-4" aria-hidden="true" />
              Export
            </Button>
            <Button asChild>
              <Link to="/manager/assessments/new">
                <Plus className="h-4 w-4" aria-hidden="true" />
                New Assessment
              </Link>
            </Button>
          </>
        }
      />

      <section
        aria-label="Assessment summary"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6"
      >
        {ASSESSMENT_KPIS.map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} />
        ))}
      </section>

      <section
        aria-label="Assessments"
        className="overflow-hidden rounded-xl border border-border bg-card shadow-card"
      >
        <AssessmentFilters
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
            icon={ClipboardList}
            title="No assessments available."
            description="Start by creating your first patient assessment."
            action={
              <Button asChild>
                <Link to="/manager/assessments/new">
                  <Plus className="h-4 w-4" aria-hidden="true" />
                  Create Assessment
                </Link>
              </Button>
            }
            secondaryAction={
              <Button variant="ghost" onClick={() => setFilters(DEFAULT_ASSESSMENT_FILTERS)}>
                Reset filters
              </Button>
            }
            className="rounded-none border-0 shadow-none"
          />
        ) : (
          <>
            <AssessmentTable rows={rows} visibleColumns={visibleColumns} />
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
