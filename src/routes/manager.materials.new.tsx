import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Boxes, Plus } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AddMaterialDialog } from "@/components/materials/add-material-dialog";
import { CategoryCards } from "@/components/materials/category-cards";
import { LowStockPanel } from "@/components/materials/low-stock-panel";

const TITLE = "Add Material — Speech Therapy ERP";
const DESCRIPTION =
  "Register a new therapy material, educational toy or equipment item with pricing, stock levels and supplier details.";

export const Route = createFileRoute("/manager/materials/new")({
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
  component: NewMaterialPage,
});

function NewMaterialPage() {
  const [open, setOpen] = useState(true);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Add Material"
        description="Register a new material into branch inventory in four steps."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Materials & Sales", to: "/manager/materials" },
          { label: "Add Material" },
        ]}
        actions={
          <>
            <Button variant="outline" asChild>
              <Link to="/manager/materials">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to inventory
              </Link>
            </Button>
            <Button onClick={() => setOpen(true)}>
              <Plus className="h-4 w-4" aria-hidden="true" />
              Open wizard
            </Button>
          </>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <Boxes className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h2 className="text-[15px] font-semibold tracking-tight text-foreground">
                Four-step registration
              </h2>
              <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                Basic information, inventory and pricing, supplier details, then a final review
                before saving.
              </p>
            </div>
          </div>

          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { step: 1, title: "Basic Information", hint: "Name, code, category, brand, image" },
              { step: 2, title: "Inventory", hint: "Unit, prices, opening and minimum stock" },
              { step: 3, title: "Supplier", hint: "Vendor name, phone, email, address" },
              { step: 4, title: "Review", hint: "Confirm the summary and save" },
            ].map((item) => (
              <li
                key={item.step}
                className="flex items-start gap-3 rounded-xl border border-border bg-muted/25 p-4"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border bg-background text-[12px] font-semibold text-muted-foreground">
                  {item.step}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">{item.title}</p>
                  <p className="mt-0.5 text-[12.5px] text-muted-foreground">{item.hint}</p>
                </div>
              </li>
            ))}
          </ol>

          <Button className="mt-6" onClick={() => setOpen(true)}>
            <Plus className="h-4 w-4" aria-hidden="true" />
            Add Material
          </Button>
        </Card>

        <LowStockPanel />
      </div>

      <section aria-label="Categories" className="space-y-4">
        <h2 className="text-[15px] font-semibold tracking-tight text-foreground">
          Pick a category
        </h2>
        <CategoryCards />
      </section>

      <AddMaterialDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}
