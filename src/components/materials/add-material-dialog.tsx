import { useState } from "react";
import { Check, ImagePlus, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "@/components/forms/form-field";
import { StatusBadge } from "@/components/common/status-badge";
import { MaterialThumbnail } from "@/components/materials/material-thumbnail";
import { formatTaka } from "@/constants/dashboard-data";
import {
  MATERIAL_CATEGORY_NAMES,
  MATERIAL_UNITS,
  STORAGE_LOCATIONS,
  type MaterialCategoryName,
} from "@/constants/material-data";

const STEPS = [
  { id: 1, title: "Basic Information", description: "Name, category and image" },
  { id: 2, title: "Inventory", description: "Pricing, stock and location" },
  { id: 3, title: "Supplier", description: "Vendor contact details" },
  { id: 4, title: "Review", description: "Confirm before saving" },
];

type Draft = {
  name: string;
  code: string;
  category: MaterialCategoryName;
  brand: string;
  description: string;
  unit: string;
  purchasePrice: string;
  sellingPrice: string;
  openingStock: string;
  minStock: string;
  location: string;
  supplierName: string;
  supplierPhone: string;
  supplierEmail: string;
  supplierAddress: string;
};

const EMPTY: Draft = {
  name: "",
  code: "",
  category: "Speech Cards",
  brand: "",
  description: "",
  unit: "Piece",
  purchasePrice: "",
  sellingPrice: "",
  openingStock: "",
  minStock: "",
  location: STORAGE_LOCATIONS[0],
  supplierName: "",
  supplierPhone: "",
  supplierEmail: "",
  supplierAddress: "",
};

/**
 * UI-only 4-step material creation wizard.
 * Nothing is persisted — the Django REST API will own this later.
 */
export function AddMaterialDialog({
  open,
  onOpenChange,
  presetCategory,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  presetCategory?: MaterialCategoryName;
}) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [draft, setDraft] = useState<Draft>({
    ...EMPTY,
    category: presetCategory ?? EMPTY.category,
  });

  const set = (patch: Partial<Draft>) => setDraft((current) => ({ ...current, ...patch }));

  const close = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep(1);
      setDraft({ ...EMPTY, category: presetCategory ?? EMPTY.category });
    }, 200);
  };

  const submit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      close();
    }, 900);
  };

  const current = STEPS[step - 1];
  const canContinue = step !== 1 || draft.name.trim().length > 0;

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) close();
        else onOpenChange(true);
      }}
    >
      <DialogContent className="max-h-[92vh] max-w-2xl overflow-y-auto rounded-xl">
        <DialogHeader>
          <DialogTitle>Add material</DialogTitle>
          <DialogDescription>
            Register a therapy material, educational toy or equipment item into branch inventory.
          </DialogDescription>
        </DialogHeader>

        <ol className="flex items-center gap-2 border-b border-border pb-5">
          {STEPS.map((item) => {
            const state = step === item.id ? "current" : step > item.id ? "done" : "todo";
            return (
              <li key={item.id} className="flex min-w-0 flex-1 items-center gap-2.5">
                <span
                  className={cn(
                    "grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[12px] font-semibold transition-enterprise",
                    state === "current" && "border-primary bg-primary text-primary-foreground",
                    state === "done" && "border-success/40 bg-success/12 text-success",
                    state === "todo" && "border-border bg-muted/50 text-muted-foreground",
                  )}
                  aria-current={state === "current" ? "step" : undefined}
                >
                  {state === "done" ? <Check className="h-3.5 w-3.5" /> : item.id}
                </span>
                <span className="hidden min-w-0 sm:block">
                  <span className="block truncate text-[12.5px] font-medium text-foreground">
                    {item.title}
                  </span>
                </span>
              </li>
            );
          })}
        </ol>

        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-foreground">{current.title}</h3>
          <p className="text-[12.5px] text-muted-foreground">{current.description}</p>
        </div>

        {step === 1 ? (
          <StepBasic draft={draft} set={set} />
        ) : step === 2 ? (
          <StepInventory draft={draft} set={set} />
        ) : step === 3 ? (
          <StepSupplier draft={draft} set={set} />
        ) : (
          <StepReview draft={draft} />
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
          <Button variant="ghost" onClick={close}>
            Cancel
          </Button>
          <div className="flex flex-wrap items-center gap-2.5">
            {step > 1 ? (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            ) : null}
            {step < STEPS.length ? (
              <Button onClick={() => setStep(step + 1)} disabled={!canContinue}>
                Continue
              </Button>
            ) : (
              <Button onClick={submit} disabled={submitting}>
                {submitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : null}
                Save
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function StepBasic({ draft, set }: { draft: Draft; set: (patch: Partial<Draft>) => void }) {
  return (
    <div className="grid gap-5 py-2 sm:grid-cols-2">
      <FormField id="material-name" label="Material name" required className="sm:col-span-2">
        <Input
          id="material-name"
          value={draft.name}
          onChange={(event) => set({ name: event.target.value })}
          placeholder="e.g. Articulation Card Deck (Bangla)"
        />
      </FormField>
      <FormField id="material-code" label="Material code" hint="Leave blank to auto-generate">
        <Input
          id="material-code"
          value={draft.code}
          onChange={(event) => set({ code: event.target.value })}
          placeholder="MAT-DHK-1016"
        />
      </FormField>
      <FormField id="material-category" label="Category" required>
        <Select
          value={draft.category}
          onValueChange={(next) => set({ category: next as MaterialCategoryName })}
        >
          <SelectTrigger id="material-category">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {MATERIAL_CATEGORY_NAMES.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="material-brand" label="Brand">
        <Input
          id="material-brand"
          value={draft.brand}
          onChange={(event) => set({ brand: event.target.value })}
          placeholder="e.g. Shikkha Tools"
        />
      </FormField>
      <FormField id="material-description" label="Description" className="sm:col-span-2">
        <Textarea
          id="material-description"
          rows={3}
          value={draft.description}
          onChange={(event) => set({ description: event.target.value })}
          placeholder="What the material is used for in therapy…"
        />
      </FormField>

      <div className="sm:col-span-2">
        <p className="mb-2 text-sm font-medium text-foreground">Material image</p>
        <div className="flex items-center gap-4 rounded-xl border border-dashed border-border bg-muted/25 p-4">
          <MaterialThumbnail category={draft.category} size="lg" />
          <div className="min-w-0">
            <p className="text-[13px] font-medium text-foreground">Image upload placeholder</p>
            <p className="mt-1 text-[12.5px] text-muted-foreground">
              PNG or JPG up to 2 MB. Uploads are wired up with the API later.
            </p>
            <Button variant="outline" size="sm" className="mt-3" type="button">
              <ImagePlus className="h-4 w-4" aria-hidden="true" />
              Choose image
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepInventory({ draft, set }: { draft: Draft; set: (patch: Partial<Draft>) => void }) {
  return (
    <div className="grid gap-5 py-2 sm:grid-cols-2">
      <FormField id="material-unit" label="Unit" required>
        <Select value={draft.unit} onValueChange={(next) => set({ unit: next })}>
          <SelectTrigger id="material-unit">
            <SelectValue placeholder="Select unit" />
          </SelectTrigger>
          <SelectContent>
            {MATERIAL_UNITS.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="material-location" label="Storage location" required>
        <Select value={draft.location} onValueChange={(next) => set({ location: next })}>
          <SelectTrigger id="material-location">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            {STORAGE_LOCATIONS.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="material-purchase" label="Purchase price (৳)" required>
        <Input
          id="material-purchase"
          type="number"
          min={0}
          value={draft.purchasePrice}
          onChange={(event) => set({ purchasePrice: event.target.value })}
          placeholder="620"
        />
      </FormField>
      <FormField id="material-selling" label="Selling price (৳)" required>
        <Input
          id="material-selling"
          type="number"
          min={0}
          value={draft.sellingPrice}
          onChange={(event) => set({ sellingPrice: event.target.value })}
          placeholder="950"
        />
      </FormField>
      <FormField id="material-opening" label="Opening stock" required>
        <Input
          id="material-opening"
          type="number"
          min={0}
          value={draft.openingStock}
          onChange={(event) => set({ openingStock: event.target.value })}
          placeholder="40"
        />
      </FormField>
      <FormField
        id="material-min"
        label="Minimum stock"
        hint="Low stock alerts trigger at this level"
      >
        <Input
          id="material-min"
          type="number"
          min={0}
          value={draft.minStock}
          onChange={(event) => set({ minStock: event.target.value })}
          placeholder="15"
        />
      </FormField>

      <div className="rounded-xl border border-border bg-muted/30 p-4 sm:col-span-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[12.5px] text-muted-foreground">Estimated margin per unit</p>
          <p className="text-sm font-semibold tabular-nums text-foreground">
            {formatTaka(
              Math.max(Number(draft.sellingPrice || 0) - Number(draft.purchasePrice || 0), 0),
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

function StepSupplier({ draft, set }: { draft: Draft; set: (patch: Partial<Draft>) => void }) {
  return (
    <div className="grid gap-5 py-2 sm:grid-cols-2">
      <FormField id="supplier-name" label="Supplier name" required className="sm:col-span-2">
        <Input
          id="supplier-name"
          value={draft.supplierName}
          onChange={(event) => set({ supplierName: event.target.value })}
          placeholder="e.g. Shikkha Learning Supplies"
        />
      </FormField>
      <FormField id="supplier-phone" label="Phone" required>
        <Input
          id="supplier-phone"
          value={draft.supplierPhone}
          onChange={(event) => set({ supplierPhone: event.target.value })}
          placeholder="+880 1711-458920"
        />
      </FormField>
      <FormField id="supplier-email" label="Email">
        <Input
          id="supplier-email"
          type="email"
          value={draft.supplierEmail}
          onChange={(event) => set({ supplierEmail: event.target.value })}
          placeholder="sales@supplier.com.bd"
        />
      </FormField>
      <FormField id="supplier-address" label="Address" className="sm:col-span-2">
        <Textarea
          id="supplier-address"
          rows={3}
          value={draft.supplierAddress}
          onChange={(event) => set({ supplierAddress: event.target.value })}
          placeholder="House 41, Road 7, Dhanmondi, Dhaka 1205"
        />
      </FormField>
    </div>
  );
}

function StepReview({ draft }: { draft: Draft }) {
  const rows: { label: string; value: string }[] = [
    { label: "Material name", value: draft.name || "—" },
    { label: "Material code", value: draft.code || "Auto-generated" },
    { label: "Category", value: draft.category },
    { label: "Brand", value: draft.brand || "—" },
    { label: "Unit", value: draft.unit },
    { label: "Storage location", value: draft.location },
    {
      label: "Purchase price",
      value: draft.purchasePrice ? formatTaka(Number(draft.purchasePrice)) : "—",
    },
    {
      label: "Selling price",
      value: draft.sellingPrice ? formatTaka(Number(draft.sellingPrice)) : "—",
    },
    { label: "Opening stock", value: draft.openingStock || "—" },
    { label: "Minimum stock", value: draft.minStock || "—" },
    { label: "Supplier", value: draft.supplierName || "—" },
    { label: "Supplier phone", value: draft.supplierPhone || "—" },
    { label: "Supplier email", value: draft.supplierEmail || "—" },
    { label: "Supplier address", value: draft.supplierAddress || "—" },
  ];

  return (
    <div className="space-y-5 py-2">
      <section className="flex items-start gap-4 rounded-xl border border-border bg-muted/30 p-4 shadow-card">
        <MaterialThumbnail category={draft.category} size="lg" />
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="truncate text-sm font-semibold text-foreground">
              {draft.name || "Untitled material"}
            </p>
            <StatusBadge tone="info" label={draft.category} dot={false} />
          </div>
          <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">
            {draft.description || "No description added."}
          </p>
        </div>
      </section>

      <dl className="grid gap-4 rounded-xl border border-border p-4 sm:grid-cols-2">
        {rows.map((row) => (
          <div key={row.label} className="min-w-0">
            <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
              {row.label}
            </dt>
            <dd className="mt-0.5 truncate text-[13px] text-foreground">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
