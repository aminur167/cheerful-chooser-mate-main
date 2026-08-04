import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Pencil, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/common/page-header";
import { StatusBadge } from "@/components/common/status-badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MaterialThumbnail } from "@/components/materials/material-thumbnail";
import { StockLevel } from "@/components/materials/material-table";
import { SalesTable } from "@/components/materials/sales-table";
import { StockMovementTimeline } from "@/components/materials/stock-history-table";
import { NewSaleDialog } from "@/components/materials/new-sale-dialog";
import { DEFAULT_SALE_COLUMNS } from "@/components/materials/material-columns";
import { formatTaka } from "@/constants/dashboard-data";
import type { Material, PurchaseRecord, Sale, StockMovement } from "@/constants/material-data";
import {
  MATERIAL_STATUS_TONE,
  getMaterial,
  movementsForMaterial,
  purchasesForMaterial,
  salesForMaterial,
} from "@/constants/material-data";

export const Route = createFileRoute("/manager/materials/$materialId")({
  loader: ({ params }) => {
    const material = getMaterial(params.materialId);
    if (!material) throw notFound();
    return {
      material,
      sales: salesForMaterial(material.id),
      movements: movementsForMaterial(material.id),
      purchases: purchasesForMaterial(material.id),
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Material not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.material.name} — Material Details`;
    const description = `Stock, pricing, supplier and sales history for ${loaderData.material.name} (${loaderData.material.code}).`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: MaterialDetailPage,
});

function MaterialDetailPage() {
  const data = Route.useLoaderData() as {
    material: Material;
    sales: Sale[];
    movements: StockMovement[];
    purchases: PurchaseRecord[];
  };
  const { material, sales, movements, purchases } = data;
  const [saleOpen, setSaleOpen] = useState(false);

  const soldUnits = sales.reduce((sum, sale) => sum + sale.quantity, 0);
  const revenue = sales.reduce((sum, sale) => sum + sale.total, 0);
  const stockValue = material.quantity * material.purchasePrice;
  const margin = material.sellingPrice - material.purchasePrice;

  return (
    <div className="space-y-8">
      <PageHeader
        title={material.name}
        description={`${material.code} · ${material.category} · ${material.brand}`}
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Materials & Sales", to: "/manager/materials" },
          { label: material.name },
        ]}
        actions={
          <>
            <Button variant="outline" asChild>
              <Link to="/manager/materials">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back
              </Link>
            </Button>
            <Button variant="outline">
              <Pencil className="h-4 w-4" aria-hidden="true" />
              Edit
            </Button>
            <Button onClick={() => setSaleOpen(true)}>
              <ShoppingCart className="h-4 w-4" aria-hidden="true" />
              Sell
            </Button>
          </>
        }
      />

      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <MaterialThumbnail category={material.category} size="lg" className="h-24 w-24 shrink-0" />
              <div className="min-w-0 flex-1 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge
                    label={material.status}
                    tone={MATERIAL_STATUS_TONE[material.status]}
                  />
                  <span className="text-[12.5px] text-muted-foreground">
                    {material.location} · {material.branch}
                  </span>
                </div>
                <p className="text-[13px] leading-relaxed text-muted-foreground">
                  {material.description}
                </p>
                <StockLevel item={material} />
              </div>
            </div>

            <Separator className="my-6" />

            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Purchase price", value: formatTaka(material.purchasePrice) },
                { label: "Selling price", value: formatTaka(material.sellingPrice) },
                { label: "Margin / unit", value: formatTaka(margin) },
                { label: "Stock value", value: formatTaka(stockValue) },
                { label: "Current stock", value: `${material.quantity} ${material.unit}` },
                { label: "Minimum stock", value: `${material.minStock} ${material.unit}` },
                { label: "Units sold", value: String(soldUnits) },
                { label: "Revenue", value: formatTaka(revenue) },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-border bg-muted/25 p-4">
                  <dt className="text-[11.5px] font-medium uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-[15px] font-semibold tabular-nums text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Card>

          <Card className="overflow-hidden p-0">
            <div className="border-b border-border px-5 py-4">
              <h2 className="text-[15px] font-semibold tracking-tight text-foreground">
                Sales history
              </h2>
              <p className="mt-0.5 text-[12.5px] text-muted-foreground">
                {sales.length} sale{sales.length === 1 ? "" : "s"} recorded for this material.
              </p>
            </div>
            {sales.length === 0 ? (
              <p className="px-5 py-8 text-center text-[13px] text-muted-foreground">
                No sales recorded yet.
              </p>
            ) : (
              <SalesTable rows={sales} visibleColumns={DEFAULT_SALE_COLUMNS} />
            )}
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-[15px] font-semibold tracking-tight text-foreground">Supplier</h2>
            <dl className="mt-4 space-y-3 text-[13px]">
              {[
                { label: "Name", value: material.supplier.name },
                { label: "Phone", value: material.supplier.phone },
                { label: "Email", value: material.supplier.email },
                { label: "Address", value: material.supplier.address },
              ].map((item) => (
                <div key={item.label} className="flex items-start justify-between gap-3">
                  <dt className="text-muted-foreground">{item.label}</dt>
                  <dd className="text-right font-medium text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Card>

          <Card className="p-6">
            <h2 className="text-[15px] font-semibold tracking-tight text-foreground">
              Purchase history
            </h2>
            <ul className="mt-4 space-y-3">
              {purchases.length === 0 ? (
                <li className="text-[13px] text-muted-foreground">No purchases recorded.</li>
              ) : (
                purchases.map((purchase) => (
                  <li
                    key={purchase.id}
                    className="rounded-xl border border-border bg-muted/25 p-3.5 text-[13px]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-medium text-foreground">{purchase.date}</span>
                      <span className="font-semibold tabular-nums text-foreground">
                        {formatTaka(purchase.total)}
                      </span>
                    </div>
                    <p className="mt-1 text-muted-foreground">
                      {purchase.quantity} × {formatTaka(purchase.unitCost)} · {purchase.supplier}
                    </p>
                  </li>
                ))
              )}
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-[15px] font-semibold tracking-tight text-foreground">
              Stock movements
            </h2>
            <div className="mt-4">
              <StockMovementTimeline items={movements} />
            </div>
          </Card>
        </div>
      </div>

      <NewSaleDialog
        open={saleOpen}
        onOpenChange={setSaleOpen}
        presetMaterialId={material.id}
      />
    </div>
  );
}
