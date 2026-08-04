import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Boxes, Download, Plus, ShoppingCart } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { EmptyState } from "@/components/common/empty-state";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { TablePagination } from "@/components/tables/table-pagination";
import { MaterialTable } from "@/components/materials/material-table";
import { SalesTable } from "@/components/materials/sales-table";
import { CategoryCards } from "@/components/materials/category-cards";
import { StockHistoryTable } from "@/components/materials/stock-history-table";
import { LowStockPanel } from "@/components/materials/low-stock-panel";
import { AddMaterialDialog } from "@/components/materials/add-material-dialog";
import { NewSaleDialog } from "@/components/materials/new-sale-dialog";
import {
  DEFAULT_MATERIAL_FILTERS,
  MaterialFilters,
  type MaterialFilterState,
} from "@/components/materials/material-filters";
import {
  DEFAULT_SALE_FILTERS,
  SalesFilters,
  type SaleFilterState,
} from "@/components/materials/sales-filters";
import {
  DEFAULT_MATERIAL_COLUMNS,
  DEFAULT_SALE_COLUMNS,
  type MaterialColumnKey,
  type SaleColumnKey,
} from "@/components/materials/material-columns";
import {
  MATERIALS,
  MATERIALS_TODAY_ISO,
  MATERIAL_KPIS,
  MATERIAL_TABS,
  MOVEMENT_TYPES,
  SALES,
  STOCK_MOVEMENTS,
  type MovementType,
} from "@/constants/material-data";

const PAGE_SIZE = 8;
const TODAY = new Date(MATERIALS_TODAY_ISO);

const TITLE = "Materials & Sales — Speech Therapy ERP";
const DESCRIPTION =
  "Inventory console for the branch: track therapy materials, educational toys, equipment stock levels and material sales in BDT.";

export const Route = createFileRoute("/manager/materials/")({
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
  component: MaterialsPage,
});

function withinRange(date: string, range: string) {
  if (range === "all") return true;
  const value = new Date(date);
  if (range === "today") return value.toDateString() === TODAY.toDateString();
  const days = range === "7d" ? 7 : 30;
  return value.getTime() >= TODAY.getTime() - days * 24 * 60 * 60 * 1000;
}

function MaterialsPage() {
  const { tab } = Route.useSearch();
  const navigate = Route.useNavigate();
  const activeTab = MATERIAL_TABS.some((item) => item.value === tab) ? tab! : "inventory";

  const [materialDialogOpen, setMaterialDialogOpen] = useState(false);
  const [saleDialogOpen, setSaleDialogOpen] = useState(false);
  const [saleMaterialId, setSaleMaterialId] = useState<string | undefined>();

  const [materialFilters, setMaterialFilters] =
    useState<MaterialFilterState>(DEFAULT_MATERIAL_FILTERS);
  const [materialPage, setMaterialPage] = useState(1);
  const [materialRefreshing, setMaterialRefreshing] = useState(false);
  const [materialColumns, setMaterialColumns] =
    useState<MaterialColumnKey[]>(DEFAULT_MATERIAL_COLUMNS);

  const [saleFilters, setSaleFilters] = useState<SaleFilterState>(DEFAULT_SALE_FILTERS);
  const [salePage, setSalePage] = useState(1);
  const [saleRefreshing, setSaleRefreshing] = useState(false);
  const [saleColumns, setSaleColumns] = useState<SaleColumnKey[]>(DEFAULT_SALE_COLUMNS);

  const [movementType, setMovementType] = useState<MovementType | "all">("all");

  const filteredMaterials = useMemo(() => {
    const query = materialFilters.search.trim().toLowerCase();
    return MATERIALS.filter((material) => {
      const matchesQuery =
        !query ||
        [material.name, material.code, material.brand, material.supplier.name, material.category]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return (
        matchesQuery &&
        (materialFilters.category === "all" || material.category === materialFilters.category) &&
        (materialFilters.status === "all" || material.status === materialFilters.status) &&
        (materialFilters.location === "all" || material.location === materialFilters.location) &&
        (materialFilters.branch === "all" || material.branch === materialFilters.branch)
      );
    });
  }, [materialFilters]);

  const filteredSales = useMemo(() => {
    const query = saleFilters.search.trim().toLowerCase();
    return SALES.filter((sale) => {
      const material = MATERIALS.find((item) => item.id === sale.materialId);
      const matchesQuery =
        !query ||
        [
          sale.invoiceNo,
          sale.customerName,
          sale.customerPhone,
          sale.materialName,
          sale.materialCode,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return (
        matchesQuery &&
        (saleFilters.status === "all" || sale.status === saleFilters.status) &&
        (saleFilters.method === "all" || sale.method === saleFilters.method) &&
        (saleFilters.category === "all" || material?.category === saleFilters.category) &&
        withinRange(sale.date, saleFilters.range)
      );
    });
  }, [saleFilters]);

  const movements = useMemo(
    () =>
      [...STOCK_MOVEMENTS]
        .filter((movement) => movementType === "all" || movement.type === movementType)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [movementType],
  );

  const materialPageCount = Math.max(1, Math.ceil(filteredMaterials.length / PAGE_SIZE));
  const currentMaterialPage = Math.min(materialPage, materialPageCount);
  const materialRows = filteredMaterials.slice(
    (currentMaterialPage - 1) * PAGE_SIZE,
    currentMaterialPage * PAGE_SIZE,
  );

  const salePageCount = Math.max(1, Math.ceil(filteredSales.length / PAGE_SIZE));
  const currentSalePage = Math.min(salePage, salePageCount);
  const saleRows = filteredSales.slice(
    (currentSalePage - 1) * PAGE_SIZE,
    currentSalePage * PAGE_SIZE,
  );

  const toggleMaterialColumn = (key: MaterialColumnKey) =>
    setMaterialColumns((current) =>
      current.includes(key) ? current.filter((item) => item !== key) : [...current, key],
    );

  const toggleSaleColumn = (key: SaleColumnKey) =>
    setSaleColumns((current) =>
      current.includes(key) ? current.filter((item) => item !== key) : [...current, key],
    );

  const openSale = (materialId?: string) => {
    setSaleMaterialId(materialId);
    setSaleDialogOpen(true);
  };

  const addMaterialButton = (
    <Button onClick={() => setMaterialDialogOpen(true)}>
      <Plus className="h-4 w-4" aria-hidden="true" />
      Add Material
    </Button>
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Materials & Sales"
        description="Manage therapy materials, inventory and sales."
        breadcrumbs={[{ label: "Branch Manager", to: "/manager" }, { label: "Materials & Sales" }]}
        actions={
          <>
            <Button variant="outline">
              <Download className="h-4 w-4" aria-hidden="true" />
              Export
            </Button>
            <Button variant="outline" onClick={() => setMaterialDialogOpen(true)}>
              <Plus className="h-4 w-4" aria-hidden="true" />
              Add Material
            </Button>
          </>
        }
      />

      <section
        aria-label="Inventory summary"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8"
      >
        {MATERIAL_KPIS.map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} />
        ))}
      </section>

      <Tabs
        value={activeTab}
        onValueChange={(next) => navigate({ search: { tab: next } })}
        className="min-w-0"
      >
        <div className="-mx-1 overflow-x-auto px-1 pb-1">
          <TabsList className="w-max">
            {MATERIAL_TABS.map((item) => (
              <TabsTrigger key={item.value} value={item.value}>
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Tab 1 — Inventory */}
        <TabsContent value="inventory" className="mt-6 space-y-6">
          <div className="grid gap-6 2xl:grid-cols-[minmax(0,1fr)_380px]">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
              <MaterialFilters
                value={materialFilters}
                onChange={(next) => {
                  setMaterialFilters(next);
                  setMaterialPage(1);
                }}
                onRefresh={() => {
                  setMaterialRefreshing(true);
                  setTimeout(() => setMaterialRefreshing(false), 700);
                }}
                isRefreshing={materialRefreshing}
                visibleColumns={materialColumns}
                onToggleColumn={toggleMaterialColumn}
              />

              {materialRows.length === 0 ? (
                <EmptyState
                  icon={Boxes}
                  title="No Materials Added"
                  description="Start by adding your first therapy material."
                  action={addMaterialButton}
                  secondaryAction={
                    <Button
                      variant="ghost"
                      onClick={() => setMaterialFilters(DEFAULT_MATERIAL_FILTERS)}
                    >
                      Reset filters
                    </Button>
                  }
                  className="rounded-none border-0 shadow-none"
                />
              ) : (
                <>
                  <MaterialTable
                    rows={materialRows}
                    visibleColumns={materialColumns}
                    onStockIn={(item) => setSaleMaterialId(item.id)}
                    onStockOut={(item) => openSale(item.id)}
                  />
                  <div className="border-t border-border px-4 py-3.5 sm:px-5">
                    <TablePagination
                      page={currentMaterialPage}
                      pageSize={PAGE_SIZE}
                      total={filteredMaterials.length}
                      onPageChange={setMaterialPage}
                    />
                  </div>
                </>
              )}
            </div>

            <LowStockPanel />
          </div>
        </TabsContent>

        {/* Tab 2 — Sales */}
        <TabsContent value="sales" className="mt-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[12.5px] text-muted-foreground">
              Every material sale recorded at this branch, newest first.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link to="/manager/sales">Open sales console</Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
            <SalesFilters
              value={saleFilters}
              onChange={(next) => {
                setSaleFilters(next);
                setSalePage(1);
              }}
              onRefresh={() => {
                setSaleRefreshing(true);
                setTimeout(() => setSaleRefreshing(false), 700);
              }}
              isRefreshing={saleRefreshing}
              visibleColumns={saleColumns}
              onToggleColumn={toggleSaleColumn}
            />

            {saleRows.length === 0 ? (
              <EmptyState
                icon={ShoppingCart}
                title="No Sales Recorded"
                description="Record your first material sale to see it here."
                action={
                  <Button onClick={() => openSale()}>
                    <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                    New Sale
                  </Button>
                }
                secondaryAction={
                  <Button variant="ghost" onClick={() => setSaleFilters(DEFAULT_SALE_FILTERS)}>
                    Reset filters
                  </Button>
                }
                className="rounded-none border-0 shadow-none"
              />
            ) : (
              <>
                <SalesTable rows={saleRows} visibleColumns={saleColumns} />
                <div className="border-t border-border px-4 py-3.5 sm:px-5">
                  <TablePagination
                    page={currentSalePage}
                    pageSize={PAGE_SIZE}
                    total={filteredSales.length}
                    onPageChange={setSalePage}
                  />
                </div>
              </>
            )}
          </div>
        </TabsContent>

        {/* Tab 3 — Categories */}
        <TabsContent value="categories" className="mt-6 space-y-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-[15px] font-semibold tracking-tight text-foreground">
              Material categories
            </h2>
            <p className="text-[12.5px] text-muted-foreground">
              Educational toys, cards, books and therapy equipment.
            </p>
          </div>
          <CategoryCards />
        </TabsContent>

        {/* Tab 4 — Stock history */}
        <TabsContent value="history" className="mt-6 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant={movementType === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setMovementType("all")}
            >
              All movements
            </Button>
            {MOVEMENT_TYPES.map((type) => (
              <Button
                key={type}
                variant={movementType === type ? "default" : "outline"}
                size="sm"
                onClick={() => setMovementType(type)}
              >
                {type}
              </Button>
            ))}
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
            {movements.length === 0 ? (
              <EmptyState
                icon={Boxes}
                title="No Stock Movements"
                description="Stock in, stock out, adjustments and damages will appear here."
                className="rounded-none border-0 shadow-none"
              />
            ) : (
              <StockHistoryTable rows={movements} />
            )}
          </div>
        </TabsContent>
      </Tabs>

      <AddMaterialDialog open={materialDialogOpen} onOpenChange={setMaterialDialogOpen} />
      <NewSaleDialog
        open={saleDialogOpen}
        onOpenChange={setSaleDialogOpen}
        presetMaterialId={saleMaterialId}
      />
    </div>
  );
}
