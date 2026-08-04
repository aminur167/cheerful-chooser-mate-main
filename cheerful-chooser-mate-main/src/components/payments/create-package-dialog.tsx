import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
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
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "@/components/forms/form-field";
import { PACKAGE_STATUSES, PACKAGE_TYPES } from "@/constants/payment-data";

const STEPS = [
  { id: 1, title: "Basic Information", description: "Name, type and availability" },
  { id: 2, title: "Pricing", description: "Price, fees, discount and tax" },
  { id: 3, title: "Rules", description: "Duration, sessions and expiry" },
];

/**
 * UI-only multi-step package builder.
 * Nothing is persisted — the Django REST API will own this later.
 */
export function CreatePackageDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const close = () => {
    onOpenChange(false);
    setTimeout(() => setStep(1), 200);
  };

  const submit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      close();
    }, 900);
  };

  const current = STEPS[step - 1];

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
          <DialogTitle>Create package</DialogTitle>
          <DialogDescription>
            Define a billing package for daily, session-wise, monthly or online booking care.
          </DialogDescription>
        </DialogHeader>

        <ol className="flex items-center gap-2 border-b border-border pb-5">
          {STEPS.map((item, index) => {
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
                  <span
                    className={cn(
                      "block truncate text-[13px] font-medium",
                      state === "todo" ? "text-muted-foreground" : "text-foreground",
                    )}
                  >
                    {item.title}
                  </span>
                </span>
                {index < STEPS.length - 1 ? (
                  <span className="h-px flex-1 bg-border" aria-hidden="true" />
                ) : null}
              </li>
            );
          })}
        </ol>

        <div className="sm:hidden">
          <p className="text-[13px] font-medium text-foreground">
            Step {step} of {STEPS.length} — {current.title}
          </p>
          <p className="text-[12.5px] text-muted-foreground">{current.description}</p>
        </div>

        {step === 1 ? <StepBasic /> : step === 2 ? <StepPricing /> : <StepRules />}

        <div className="flex items-center justify-between gap-3 border-t border-border pt-5">
          <Button variant="ghost" onClick={close}>
            Cancel
          </Button>
          <div className="flex items-center gap-2.5">
            {step > 1 ? (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            ) : null}
            {step < STEPS.length ? (
              <Button onClick={() => setStep(step + 1)}>Continue</Button>
            ) : (
              <Button onClick={submit} disabled={submitting}>
                {submitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : null}
                Create package
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function StepBasic() {
  return (
    <div className="grid gap-5 py-2 sm:grid-cols-2">
      <FormField id="package-name" label="Package name" required>
        <Input id="package-name" placeholder="e.g. 10 Session Package" />
      </FormField>
      <FormField id="package-type" label="Package type" required>
        <Select>
          <SelectTrigger id="package-type">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            {PACKAGE_TYPES.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField
        id="package-description"
        label="Description"
        hint="Shown to guardians on the invoice"
        className="sm:col-span-2"
      >
        <Textarea
          id="package-description"
          rows={3}
          placeholder="What is included in this package…"
        />
      </FormField>
      <FormField id="package-status" label="Status" required>
        <Select defaultValue="Active">
          <SelectTrigger id="package-status">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            {PACKAGE_STATUSES.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="package-featured" label="Highlight on booking page">
        <div className="flex h-9 items-center gap-3">
          <Switch id="package-featured" />
          <span className="text-[13px] text-muted-foreground">Feature this package</span>
        </div>
      </FormField>
    </div>
  );
}

function StepPricing() {
  return (
    <div className="grid gap-5 py-2 sm:grid-cols-2">
      <FormField id="package-price" label="Price (৳)" required>
        <Input id="package-price" type="number" min={0} placeholder="10500" />
      </FormField>
      <FormField id="package-registration" label="Registration fee (৳)">
        <Input id="package-registration" type="number" min={0} placeholder="500" />
      </FormField>
      <FormField id="package-discount" label="Discount (%)" hint="Applied on the package price">
        <Input id="package-discount" type="number" min={0} max={100} placeholder="8" />
      </FormField>
      <FormField
        id="package-tax"
        label="Tax / VAT (%)"
        hint="Placeholder — tax rules configured later"
      >
        <Input id="package-tax" placeholder="0.00" disabled />
      </FormField>
      <FormField
        id="package-price-note"
        label="Pricing note"
        className="sm:col-span-2"
        hint="Internal note for the accounts team"
      >
        <Textarea id="package-price-note" rows={2} placeholder="Optional note…" />
      </FormField>
    </div>
  );
}

function StepRules() {
  return (
    <div className="grid gap-5 py-2 sm:grid-cols-2">
      <FormField id="package-duration" label="Package duration" required>
        <Input id="package-duration" placeholder="e.g. 2 months" />
      </FormField>
      <FormField id="package-sessions" label="Number of sessions" required>
        <Input id="package-sessions" type="number" min={1} placeholder="10" />
      </FormField>
      <FormField id="package-expiry" label="Expiry" hint="When unused sessions lapse">
        <Input id="package-expiry" placeholder="60 days from purchase" />
      </FormField>
      <FormField id="package-grace" label="Grace period (days)">
        <Input id="package-grace" type="number" min={0} placeholder="7" />
      </FormField>
      <FormField
        id="package-refund"
        label="Refund policy"
        className="sm:col-span-2"
        hint="Placeholder — final policy text will come from the API"
      >
        <Textarea
          id="package-refund"
          rows={3}
          placeholder="Unused sessions refundable within 30 days…"
          disabled
        />
      </FormField>
    </div>
  );
}
