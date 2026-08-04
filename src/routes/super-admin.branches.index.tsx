import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Building2, Download, Plus } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { EmptyState } from "@/components/common/empty-state";
import { Button } from "@/components/ui/button";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { TablePagination } from "@/components/tables/table-pagination";
import { BranchTable } from "@/components/branches/branch-table";
import {
  BranchFilters,
  DEFAULT_BRANCH_FILTERS,
  type BranchFilterState,
} from "@/components/branches/branch-filters";
import { CreateBranchDialog } from "@/components/branches/create-branch-dialog";
import { BRANCHES, BRANCH_KPIS } from "@/constants/branch-data";

const PAGE_SIZE = 6;

export const Route = createFileRoute("/super-admin/branches/")({
  head: () => ({
    meta: [
      { title: "Branch Management — Speech Therapy ERP" },
      {
        name: "description",
        content:
          "Manage every clinic branch of the organisation: performance, managers, staff and status in one enterprise console.",
      },
      { property: "og:title", content: "Branch Management — Speech Therapy ERP" },
      {
        property: "og:description",
        content:
          "Manage every clinic branch of the organisation: performance, managers, staff and status in one enterprise console.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BranchManagementPage,
});

function withinRange(createdAt: string, range: string) {
  if (range === "all") return true;
  const days = range === "30d" ? 30 : range === "90d" ? 90 : 365;
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
  return new Date(createdAt).getTime() >= cutoff;
}

function BranchManagementPage() {
  const [filters, setFilters] = useState<BranchFilterState>(DEFAULT_BRANCH_FILTERS);
  const [page, setPage] = useState(1);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [createOpen, setCreateOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const filtered = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    return BRANCHES.filter((branch) => {
      const matchesQuery =
        !query ||
        [branch.name, branch.code, branch.city, branch.manager.name, branch.division]
          .join(" ")
          .toLowerCase()
          .includes(query);
      return (
        matchesQuery &&
        (filters.status === "all" || branch.status === filters.status) &&
        (filters.division === "all" || branch.division === filters.division) &&
        (filters.manager === "all" || branch.manager.name === filters.manager) &&
        withinRange(branch.createdAt, filters.range)
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

  return (
    <div className="space-y-8">
      <PageHeader
        title="Branch Management"
        description="Manage all organization branches from one place."
        breadcrumbs={[
          { label: "Super Admin", to: "/super-admin" },
          { label: "Branch Management" },
        ]}
        actions={
          <>
            <Button variant="outline">
              <Download className="h-4 w-4" aria-hidden="true" />
              Export
            </Button>
            <Button onClick={() => setCreateOpen(true)}>
              <Plus className="h-4 w-4" aria-hidden="true" />
              Create Branch
            </Button>
          </>
        }
      />

      <section aria-label="Branch summary" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
        {BRANCH_KPIS.map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} />
        ))}
      </section>

      <section
        aria-label="Branches"
        className="overflow-hidden rounded-xl border border-border bg-card shadow-card"
      >
        <BranchFilters
          value={filters}
          onChange={(next) => {
            setFilters(next);
            setPage(1);
          }}
          onRefresh={refresh}
          isRefreshing={refreshing}
        />

        {rows.length === 0 ? (
          <EmptyState
            icon={Building2}
            title="No branches created yet"
            description="Branches you create will appear here with live performance, staffing and revenue insights across the organisation."
            action={
              <Button onClick={() => setCreateOpen(true)}>
                <Plus className="h-4 w-4" aria-hidden="true" />
                Create First Branch
              </Button>
            }
            secondaryAction={
              <Button variant="ghost" onClick={() => setFilters(DEFAULT_BRANCH_FILTERS)}>
                Reset filters
              </Button>
            }
            className="rounded-none border-0 shadow-none"
          />
        ) : (
          <>
            <BranchTable
              rows={rows}
              expandedId={expandedId}
              onToggleExpand={(id) => setExpandedId(expandedId === id ? null : id)}
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
      </section>

      <CreateBranchDialog open={createOpen} onOpenChange={setCreateOpen} />
    </div>
  );
}
