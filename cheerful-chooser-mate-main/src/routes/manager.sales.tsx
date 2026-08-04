import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Boxes, ShoppingCart } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { EmptyState } from "@/components/common/empty-state";
import { Button } from "@/components/ui/button";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { TablePagination } from "@/components/tables/table-pagination";
import { SalesTable } from "@/components/materials/sales-table";
import { NewSaleDialog } from "@/components/materials/new-sale-dialog";
import {
  DEFAULT_SALE_FILTERS,
  SalesFilters,
  type SaleFilterState,
} from "@/components/materials/sales-filters";
import {
  DEFAULT_SALE_COLUMNS,
  type SaleColumnKey,
} from "@/components/materials/material-columns";
import { formatTaka } from "@/constants/dashboard-data";
import { MATERIALS, MATERIAL_KPIS, SALES } from "@/constants/material-data";

const PAGE_SIZE = 10;
const TITLE = "Material Sales — Speech Therapy ERP";
const DESCRIPTION =
  "Sales console for therapy materials: invoices, payment status, collected amounts and dues in BDT.";

export const Route = createFileRoute("/manager/sales")({
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
  component: SalesPage,
});

function SalesPage() {
  const [filters, setFilters] = useState<SaleFilterState>(DEFAULT_SALE_FILTERS);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [columns, setColumns] = useState<SaleColumnKey[]>(DEFAULT_SALE_COLUMNS);
  const [saleOpen, setSaleOpen] = useState(false);

  const rows = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    return SALES.filter((sale) => {
      const material = MATERIALS.find((item) => item.id === sale.materialId);
      const matchesQuery =
        !query ||
        [sale.invoiceNo, sale.customerName, sale.customerPhone, sale.materialName]
          .join(" ")
          .toLowerCase()
          .includes(query);
      return (
        matchesQuery &&
        (filters.status === "all" || sale.status === filters.status) &&
        (filters.method === "all" || sale.method === filters.method) &&
        (filters.category === "all" || material?.category === filters.category)
      );
    });
  }, [filters]);

  const pageCount = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const pageRows = rows.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const collected = rows
    .filter((sale) => sale.status === "Paid")
    .reduce((sum, sale) => sum + sale.total, 0);
  const due = rows
    .filter((sale) => sale.status === "Due" || sale.status === "Partial")
    .reduce((sum, sale) => sum + sale.total, 0);

  const toggleColumn = (key: SaleColumnKey) =>
    setColumns((current) =>
      current.includes(key) ? current.filter((item) => item !== key) : [...current, key],
    );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Material Sales"
        description={`${rows.length} sales · ${formatTaka(collected)} collected · ${formatTaka(due)} due`}
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Sales" },
        ]}
        actions={
          <>
            <Button variant="outline" asChild>
              <Link to="/manager/materials">
                <Boxes className="h-4 w-4" aria-hidden="true" />
                Inventory
              </Link>
            </Button>
            <Button onClick={() => setSaleOpen(true)}>
              <ShoppingCart className="h-4 w-4" aria-hidden="true" />
              New Sale
            </Button>
          </>
        }
      />

      <section
        aria-label="Sales summary"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {MATERIAL_KPIS.slice(0, 4).map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} />
        ))}
      </section>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
        <SalesFilters
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
          visibleColumns={columns}
          onToggleColumn={toggleColumn}
        />
        {pageRows.length === 0 ? (
          <EmptyState
            icon={ShoppingCart}
            title="No Sales Found"
            description="Adjust your filters or record a new material sale."
            action={
              <Button onClick={() => setSaleOpen(true)}>
                <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                New Sale
              </Button>
            }
            secondaryAction={
              <Button variant="ghost" onClick={() => setFilters(DEFAULT_SALE_FILTERS)}>
                Reset filters
              </Button>
            }
            className="rounded-none border-0 shadow-none"
          />
        ) : (
          <>
            <SalesTable rows={pageRows} visibleColumns={columns} />
            <div className="border-t border-border px-4 py-3.5 sm:px-5">
              <TablePagination
                page={currentPage}
                pageSize={PAGE_SIZE}
                total={rows.length}
                onPageChange={setPage}
              />
            </div>
          </>
        )}
      </div>

      <NewSaleDialog open={saleOpen} onOpenChange={setSaleOpen} />
    </div>
  );
}
