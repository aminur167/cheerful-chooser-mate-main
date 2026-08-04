import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, FileText, Layers, Plus, Receipt, Wallet } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { EmptyState } from "@/components/common/empty-state";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { TablePagination } from "@/components/tables/table-pagination";
import { PackageCard } from "@/components/payments/package-card";
import { InvoiceCard } from "@/components/payments/invoice-card";
import { PaymentTable } from "@/components/payments/payment-table";
import { PaymentHistoryTable } from "@/components/payments/payment-history-table";
import { CreatePackageDialog } from "@/components/payments/create-package-dialog";
import { CollectPaymentDialog } from "@/components/payments/collect-payment-dialog";
import {
  CollectionTrendChart,
  MethodSplitChart,
} from "@/components/payments/collection-charts";
import {
  DEFAULT_PAYMENT_FILTERS,
  PaymentFilters,
  type PaymentFilterState,
} from "@/components/payments/payment-filters";
import {
  DEFAULT_PAYMENT_COLUMNS,
  type PaymentColumnKey,
} from "@/components/payments/payment-columns";
import {
  PAYMENT_KPIS,
  PAYMENT_PACKAGES,
  PAYMENT_RECORDS,
  PAYMENT_TABS,
  TODAY_ISO,
} from "@/constants/payment-data";

const PAGE_SIZE = 8;
const TODAY = new Date(TODAY_ISO);

const TITLE = "Payment & Billing — Speech Therapy ERP";
const DESCRIPTION =
  "Billing console for the branch: manage therapy packages, collect payments, issue invoices and monitor outstanding dues in BDT.";

export const Route = createFileRoute("/manager/payments/")({
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
  component: PaymentBillingPage,
});

function withinRange(date: string, range: string) {
  if (range === "all") return true;
  const value = new Date(date);
  if (range === "today") return value.toDateString() === TODAY.toDateString();
  const days = range === "7d" ? 7 : 30;
  return value.getTime() >= TODAY.getTime() - days * 24 * 60 * 60 * 1000;
}

function PaymentBillingPage() {
  const { tab } = Route.useSearch();
  const navigate = Route.useNavigate();
  const activeTab = PAYMENT_TABS.some((item) => item.value === tab) ? tab! : "packages";

  const [packageOpen, setPackageOpen] = useState(false);
  const [collectOpen, setCollectOpen] = useState(false);
  const [collectPackageId, setCollectPackageId] = useState<string | undefined>();
  const [collectPatientId, setCollectPatientId] = useState<string | undefined>();

  const [filters, setFilters] = useState<PaymentFilterState>(DEFAULT_PAYMENT_FILTERS);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState<PaymentColumnKey[]>(
    DEFAULT_PAYMENT_COLUMNS,
  );

  const filtered = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    return PAYMENT_RECORDS.filter((record) => {
      const matchesQuery =
        !query ||
        [
          record.patientName,
          record.patientCode,
          record.receiptNo,
          record.invoiceNo,
          record.patientPhone,
          record.guardianName,
          record.packageName,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return (
        matchesQuery &&
        (filters.type === "all" || record.packageType === filters.type) &&
        (filters.status === "all" || record.status === filters.status) &&
        (filters.method === "all" || record.method === filters.method) &&
        withinRange(record.paymentDate, filters.range)
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

  const toggleColumn = (key: PaymentColumnKey) =>
    setVisibleColumns((current) =>
      current.includes(key) ? current.filter((item) => item !== key) : [...current, key],
    );

  const openCollect = (packageId?: string, patientId?: string) => {
    setCollectPackageId(packageId);
    setCollectPatientId(patientId);
    setCollectOpen(true);
  };

  const resetFiltersButton = (
    <Button variant="ghost" onClick={() => setFilters(DEFAULT_PAYMENT_FILTERS)}>
      Reset filters
    </Button>
  );

  const createPackageButton = (
    <Button onClick={() => setPackageOpen(true)}>
      <Plus className="h-4 w-4" aria-hidden="true" />
      Create Package
    </Button>
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Payment & Billing"
        description="Manage packages, collect payments and monitor dues."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Payment & Billing" },
        ]}
        actions={
          <>
            <Button variant="outline">
              <Download className="h-4 w-4" aria-hidden="true" />
              Export
            </Button>
            <Button variant="outline" onClick={() => setPackageOpen(true)}>
              <Plus className="h-4 w-4" aria-hidden="true" />
              Create Package
            </Button>
            <Button onClick={() => openCollect()}>
              <Wallet className="h-4 w-4" aria-hidden="true" />
              Collect Payment
            </Button>
          </>
        }
      />

      <section
        aria-label="Billing summary"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8"
      >
        {PAYMENT_KPIS.map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} />
        ))}
      </section>

      <section aria-label="Collection analytics" className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <CollectionTrendChart />
        <MethodSplitChart />
      </section>

      <Tabs
        value={activeTab}
        onValueChange={(next) => navigate({ search: { tab: next } })}
        className="min-w-0"
      >
        <div className="-mx-1 overflow-x-auto px-1 pb-1">
          <TabsList className="w-max">
            {PAYMENT_TABS.map((item) => (
              <TabsTrigger key={item.value} value={item.value}>
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Tab 1 — Payment packages */}
        <TabsContent value="packages" className="mt-6 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[13px] text-muted-foreground">
              {PAYMENT_PACKAGES.length} packages across daily, session-wise, monthly and online
              booking models.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link to="/manager/payments/packages">Open package manager</Link>
            </Button>
          </div>
          {PAYMENT_PACKAGES.length === 0 ? (
            <EmptyState
              icon={Layers}
              title="No Payments Yet"
              description="Create your first package and collect payment."
              action={createPackageButton}
            />
          ) : (
            <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
              {PAYMENT_PACKAGES.map((item) => (
                <PackageCard
                  key={item.id}
                  item={item}
                  onCollect={(pkg) => openCollect(pkg.id)}
                />
              ))}
            </div>
          )}
        </TabsContent>

        {/* Tab 2 — Payment collection */}
        <TabsContent value="collection" className="mt-6">
          <section
            aria-label="Payment collection"
            className="overflow-hidden rounded-xl border border-border bg-card shadow-card"
          >
            <PaymentFilters
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
                icon={Receipt}
                title="No Payments Yet"
                description="Create your first package and collect payment."
                action={createPackageButton}
                secondaryAction={resetFiltersButton}
                className="rounded-none border-0 shadow-none"
              />
            ) : (
              <>
                <PaymentTable
                  rows={rows}
                  visibleColumns={visibleColumns}
                  onCollect={(record) => openCollect(record.packageId, record.patientId)}
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
        </TabsContent>

        {/* Tab 3 — Invoices */}
        <TabsContent value="invoices" className="mt-6 space-y-6">
          {PAYMENT_RECORDS.length === 0 ? (
            <EmptyState
              icon={FileText}
              title="No Payments Yet"
              description="Create your first package and collect payment."
              action={createPackageButton}
            />
          ) : (
            <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
              {PAYMENT_RECORDS.map((record) => (
                <InvoiceCard key={record.id} record={record} />
              ))}
            </div>
          )}
        </TabsContent>

        {/* Tab 4 — Payment history */}
        <TabsContent value="history" className="mt-6">
          <section
            aria-label="Payment history"
            className="overflow-hidden rounded-xl border border-border bg-card shadow-card"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3.5 sm:px-5">
              <div className="min-w-0">
                <h2 className="text-sm font-semibold text-foreground">Payment history</h2>
                <p className="text-[12.5px] text-muted-foreground">
                  Complete ledger of every receipt issued by this branch.
                </p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4" aria-hidden="true" />
                Export ledger
              </Button>
            </div>
            <PaymentHistoryTable rows={PAYMENT_RECORDS} />
          </section>
        </TabsContent>
      </Tabs>

      <CreatePackageDialog open={packageOpen} onOpenChange={setPackageOpen} />
      <CollectPaymentDialog
        key={`${collectPackageId ?? "none"}-${collectPatientId ?? "none"}-${String(collectOpen)}`}
        open={collectOpen}
        onOpenChange={setCollectOpen}
        defaultPackageId={collectPackageId}
        defaultPatientId={collectPatientId}
      />
    </div>
  );
}
