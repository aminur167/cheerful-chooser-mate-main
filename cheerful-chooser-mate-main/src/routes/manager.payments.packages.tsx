import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Layers, Plus, Search } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { EmptyState } from "@/components/common/empty-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PackageCard } from "@/components/payments/package-card";
import { CreatePackageDialog } from "@/components/payments/create-package-dialog";
import { CollectPaymentDialog } from "@/components/payments/collect-payment-dialog";
import { formatTaka } from "@/constants/dashboard-data";
import {
  PACKAGE_STATUSES,
  PACKAGE_TYPES,
  PAYMENT_PACKAGES,
} from "@/constants/payment-data";

const TITLE = "Payment Packages — Speech Therapy ERP";
const DESCRIPTION =
  "Create and manage daily, session-wise, monthly and online booking therapy packages with pricing, duration and session rules.";

export const Route = createFileRoute("/manager/payments/packages")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [status, setStatus] = useState("all");
  const [packageOpen, setPackageOpen] = useState(false);
  const [collectOpen, setCollectOpen] = useState(false);
  const [collectPackageId, setCollectPackageId] = useState<string | undefined>();

  const packages = useMemo(() => {
    const query = search.trim().toLowerCase();
    return PAYMENT_PACKAGES.filter(
      (item) =>
        (!query ||
          [item.name, item.code, item.description].join(" ").toLowerCase().includes(query)) &&
        (type === "all" || item.type === type) &&
        (status === "all" || item.status === status),
    );
  }, [search, type, status]);

  const activeRevenue = packages.reduce((total, item) => total + item.monthlyRevenue, 0);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Payment Packages"
        description="Manage packages, collect payments and monitor dues."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Payment & Billing", to: "/manager/payments" },
          { label: "Packages" },
        ]}
        actions={
          <>
            <Button variant="outline" asChild>
              <Link to="/manager/payments">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back
              </Link>
            </Button>
            <Button onClick={() => setPackageOpen(true)}>
              <Plus className="h-4 w-4" aria-hidden="true" />
              Create Package
            </Button>
          </>
        }
      />

      <section className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
        <div className="flex flex-col gap-3 border-b border-border px-4 py-3.5 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-[360px]">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70"
              aria-hidden="true"
            />
            <Input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search package name or code…"
              aria-label="Search packages"
              className="h-9 bg-muted/40 pl-9 shadow-none"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="h-9 w-[180px]" aria-label="Filter by package type">
                <SelectValue placeholder="Package type" />
              </SelectTrigger>
              <SelectContent align="start">
                <SelectItem value="all">All package types</SelectItem>
                {PACKAGE_TYPES.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="h-9 w-[150px]" aria-label="Filter by status">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent align="start">
                <SelectItem value="all">All statuses</SelectItem>
                {PACKAGE_STATUSES.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3.5 text-[12.5px] text-muted-foreground sm:px-5">
          <span>
            Showing <span className="font-medium text-foreground">{packages.length}</span> of{" "}
            {PAYMENT_PACKAGES.length} packages
          </span>
          <span>
            Monthly revenue from selection:{" "}
            <span className="font-medium tabular-nums text-foreground">
              {formatTaka(activeRevenue)}
            </span>
          </span>
        </div>
      </section>

      {packages.length === 0 ? (
        <EmptyState
          icon={Layers}
          title="No Payments Yet"
          description="Create your first package and collect payment."
          action={
            <Button onClick={() => setPackageOpen(true)}>
              <Plus className="h-4 w-4" aria-hidden="true" />
              Create Package
            </Button>
          }
          secondaryAction={
            <Button
              variant="ghost"
              onClick={() => {
                setSearch("");
                setType("all");
                setStatus("all");
              }}
            >
              Reset filters
            </Button>
          }
        />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
          {packages.map((item) => (
            <PackageCard
              key={item.id}
              item={item}
              onCollect={(pkg) => {
                setCollectPackageId(pkg.id);
                setCollectOpen(true);
              }}
            />
          ))}
        </div>
      )}

      <CreatePackageDialog open={packageOpen} onOpenChange={setPackageOpen} />
      <CollectPaymentDialog
        key={`${collectPackageId ?? "none"}-${String(collectOpen)}`}
        open={collectOpen}
        onOpenChange={setCollectOpen}
        defaultPackageId={collectPackageId}
      />
    </div>
  );
}
