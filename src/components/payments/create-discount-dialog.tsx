import { useState } from "react";
import { Loader2 } from "lucide-react";
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
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "@/components/forms/form-field";
import { PAYMENT_PACKAGES } from "@/constants/payment-data";

const DISCOUNT_TYPES = ["Percentage", "Fixed amount"];

/**
 * UI-only discount builder for therapy packages.
 * Nothing is persisted — the Django REST API will own this later.
 */
export function CreateDiscountDialog({
  open,
  onOpenChange,
  defaultPackageId,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultPackageId?: string;
}) {
  const [submitting, setSubmitting] = useState(false);

  const close = () => {
    onOpenChange(false);
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
      <DialogContent className="max-h-[92vh] max-w-xl overflow-y-auto rounded-xl">
        <DialogHeader>
          <DialogTitle>Create discount</DialogTitle>
          <DialogDescription>
            Apply a percentage or fixed-amount discount to a therapy package.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-5 py-2 sm:grid-cols-2">
          <FormField id="discount-name" label="Discount name" required className="sm:col-span-2">
            <Input id="discount-name" placeholder="e.g. Sibling discount 10%" />
          </FormField>
          <FormField
            id="discount-package"
            label="Package"
            hint="The discount applies to this package"
            required
            className="sm:col-span-2"
          >
            <Select defaultValue={defaultPackageId}>
              <SelectTrigger id="discount-package">
                <SelectValue placeholder="Select package" />
              </SelectTrigger>
              <SelectContent>
                {PAYMENT_PACKAGES.filter((item) => item.status === "Active").map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>
          <FormField id="discount-type" label="Discount type" required>
            <Select defaultValue={DISCOUNT_TYPES[0]}>
              <SelectTrigger id="discount-type">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {DISCOUNT_TYPES.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormField>
          <FormField
            id="discount-value"
            label="Value"
            hint="Percentage or amount in BDT"
            required
          >
            <Input id="discount-value" type="number" min={0} placeholder="10" />
          </FormField>
          <FormField id="discount-from" label="Valid from">
            <Input id="discount-from" type="date" />
          </FormField>
          <FormField id="discount-until" label="Valid until">
            <Input id="discount-until" type="date" />
          </FormField>
          <FormField id="discount-status" label="Status">
            <div className="flex h-9 items-center gap-3">
              <Switch id="discount-status" defaultChecked />
              <span className="text-[13px] text-muted-foreground">Discount is active</span>
            </div>
          </FormField>
          <FormField
            id="discount-remarks"
            label="Remarks"
            hint="Internal note for the accounts team"
            className="sm:col-span-2"
          >
            <Textarea id="discount-remarks" rows={2} placeholder="Optional note…" />
          </FormField>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-border pt-5">
          <Button variant="ghost" onClick={close}>
            Cancel
          </Button>
          <Button onClick={submit} disabled={submitting}>
            {submitting ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : null}
            Create discount
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
