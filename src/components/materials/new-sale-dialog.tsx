import { useMemo, useState } from "react";
import { Loader2, ShoppingCart } from "lucide-react";
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
  MATERIALS,
  PAYMENT_METHODS,
  type PaymentMethod,
} from "@/constants/material-data";

/**
 * UI-only sale entry modal with live total calculation.
 * Nothing is persisted — the Django REST API will own this later.
 */
export function NewSaleDialog({
  open,
  onOpenChange,
  presetMaterialId,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  presetMaterialId?: string;
}) {
  const sellable = useMemo(
    () => MATERIALS.filter((material) => material.status !== "Inactive"),
    [],
  );

  const [submitting, setSubmitting] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [materialId, setMaterialId] = useState(presetMaterialId ?? sellable[0]?.id ?? "");
  const [quantity, setQuantity] = useState("1");
  const [discount, setDiscount] = useState("0");
  const [method, setMethod] = useState<PaymentMethod>("Cash");
  const [remarks, setRemarks] = useState("");

  const material = MATERIALS.find((item) => item.id === materialId);
  const qty = Math.max(Number(quantity || 0), 0);
  const off = Math.max(Number(discount || 0), 0);
  const subtotal = (material?.sellingPrice ?? 0) * qty;
  const total = Math.max(subtotal - off, 0);
  const exceedsStock = Boolean(material && qty > material.quantity);

  const close = () => {
    onOpenChange(false);
    setTimeout(() => {
      setCustomerName("");
      setPhone("");
      setMaterialId(presetMaterialId ?? sellable[0]?.id ?? "");
      setQuantity("1");
      setDiscount("0");
      setMethod("Cash");
      setRemarks("");
    }, 200);
  };

  const submit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      close();
    }, 900);
  };

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
          <DialogTitle>New sale</DialogTitle>
          <DialogDescription>
            Record a material sale for a guardian, patient family or institution.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-5 py-2 sm:grid-cols-2">
          <FormField id="sale-customer" label="Customer name" required>
            <Input
              id="sale-customer"
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
              placeholder="e.g. Md. Karim Ahmed"
            />
          </FormField>
          <FormField id="sale-phone" label="Phone" required>
            <Input
              id="sale-phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="+880 1711-458920"
            />
          </FormField>

          <FormField id="sale-material" label="Select material" required className="sm:col-span-2">
            <Select value={materialId} onValueChange={setMaterialId}>
              <SelectTrigger id="sale-material">
                <SelectValue placeholder="Select material" />
              </SelectTrigger>
              <SelectContent>
                {sellable.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.name} — {formatTaka(item.sellingPrice)} ({item.quantity} in stock)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>

          <FormField
            id="sale-quantity"
            label="Quantity"
            required
            error={exceedsStock ? `Only ${material?.quantity} ${material?.unit} in stock` : undefined}
          >
            <Input
              id="sale-quantity"
              type="number"
              min={1}
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />
          </FormField>
          <FormField id="sale-discount" label="Discount (৳)">
            <Input
              id="sale-discount"
              type="number"
              min={0}
              value={discount}
              onChange={(event) => setDiscount(event.target.value)}
            />
          </FormField>

          <FormField id="sale-method" label="Payment method" required>
            <Select value={method} onValueChange={(next) => setMethod(next as PaymentMethod)}>
              <SelectTrigger id="sale-method">
                <SelectValue placeholder="Select method" />
              </SelectTrigger>
              <SelectContent>
                {PAYMENT_METHODS.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>
          <FormField id="sale-total" label="Total amount">
            <Input
              id="sale-total"
              readOnly
              value={formatTaka(total)}
              className="bg-muted/40 font-semibold tabular-nums"
            />
          </FormField>

          <FormField id="sale-remarks" label="Remarks" className="sm:col-span-2">
            <Textarea
              id="sale-remarks"
              rows={3}
              value={remarks}
              onChange={(event) => setRemarks(event.target.value)}
              placeholder="Any note about this sale…"
            />
          </FormField>
        </div>

        {material ? (
          <section
            aria-label="Sale summary"
            className="rounded-xl border border-border bg-muted/30 p-4 shadow-card"
          >
            <div className="flex items-start gap-4">
              <MaterialThumbnail category={material.category} size="lg" />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="truncate text-sm font-semibold text-foreground">{material.name}</p>
                  <StatusBadge tone="neutral" label={material.code} dot={false} />
                </div>
                <dl className="mt-3 grid gap-x-4 gap-y-2 text-[12.5px] sm:grid-cols-2">
                  <SummaryRow label="Unit price" value={formatTaka(material.sellingPrice)} />
                  <SummaryRow label="Quantity" value={`${qty} ${material.unit}`} />
                  <SummaryRow label="Subtotal" value={formatTaka(subtotal)} />
                  <SummaryRow label="Discount" value={off > 0 ? `− ${formatTaka(off)}` : "—"} />
                </dl>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4">
              <p className="text-[12.5px] font-medium uppercase tracking-[0.06em] text-muted-foreground">
                Total payable
              </p>
              <p className="text-xl font-semibold tabular-nums text-foreground">
                {formatTaka(total)}
              </p>
            </div>
          </section>
        ) : null}

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
          <Button variant="ghost" onClick={close}>
            Cancel
          </Button>
          <Button onClick={submit} disabled={submitting || !material || qty < 1}>
            {submitting ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <ShoppingCart className="h-4 w-4" aria-hidden="true" />
            )}
            Record Sale
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">{label}</dt>
      <dd className="truncate font-medium tabular-nums text-foreground">{value}</dd>
    </div>
  );
}
