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
import { BRANCH_STATUSES, DIVISIONS } from "@/constants/branch-data";

const STEPS = [
  { id: 1, title: "Basic Information", description: "Location and contact details" },
  { id: 2, title: "Branch Manager", description: "Primary point of contact" },
  { id: 3, title: "Branch Settings", description: "Hours, currency and status" },
];

const DISTRICTS = [
  "Dhaka",
  "Gazipur",
  "Narayanganj",
  "Chattogram",
  "Cumilla",
  "Sylhet",
  "Rajshahi",
  "Khulna",
  "Barishal",
  "Rangpur",
];

/** UI-only multi-step branch creation flow. No data is persisted. */
export function CreateBranchDialog({
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

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) close();
        else onOpenChange(true);
      }}
    >
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-xl">
        <DialogHeader>
          <DialogTitle>Create branch</DialogTitle>
          <DialogDescription>
            Set up a new organisation branch in three short steps.
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

        {step === 1 ? <StepBasic /> : step === 2 ? <StepManager /> : <StepSettings />}

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
            {step < 3 ? (
              <Button onClick={() => setStep(step + 1)}>Continue</Button>
            ) : (
              <Button onClick={submit} disabled={submitting}>
                {submitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : null}
                Create branch
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
      <FormField id="branch-name" label="Branch name" required>
        <Input id="branch-name" placeholder="e.g. Mirpur Branch" />
      </FormField>
      <FormField id="branch-code" label="Branch code" hint="Auto-generated, editable">
        <Input id="branch-code" defaultValue="BR-DHK-009" readOnly className="font-mono" />
      </FormField>
      <FormField id="branch-phone" label="Phone" required>
        <Input id="branch-phone" placeholder="+880 2-XXXXXXX" />
      </FormField>
      <FormField id="branch-email" label="Email" required>
        <Input id="branch-email" type="email" placeholder="branch@speecherp.com.bd" />
      </FormField>
      <FormField id="branch-division" label="Division" required>
        <Select>
          <SelectTrigger id="branch-division">
            <SelectValue placeholder="Select division" />
          </SelectTrigger>
          <SelectContent>
            {DIVISIONS.map((division) => (
              <SelectItem key={division} value={division}>
                {division}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="branch-district" label="District" required>
        <Select>
          <SelectTrigger id="branch-district">
            <SelectValue placeholder="Select district" />
          </SelectTrigger>
          <SelectContent>
            {DISTRICTS.map((district) => (
              <SelectItem key={district} value={district}>
                {district}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="branch-address" label="Address" required className="sm:col-span-2">
        <Textarea id="branch-address" rows={2} placeholder="House, road, area, city, postcode" />
      </FormField>
      <FormField id="branch-map" label="Google Map link" hint="Optional">
        <Input id="branch-map" placeholder="https://maps.google.com/…" />
      </FormField>
      <FormField id="branch-logo" label="Branch logo" hint="PNG or SVG, up to 2 MB">
        <div className="flex h-[38px] items-center gap-2.5 rounded-lg border border-dashed border-border bg-muted/30 px-3 text-[13px] text-muted-foreground">
          <ImagePlus className="h-4 w-4" aria-hidden="true" />
          Upload placeholder
        </div>
      </FormField>
    </div>
  );
}

function StepManager() {
  return (
    <div className="grid gap-5 py-2 sm:grid-cols-2">
      <FormField id="manager-name" label="Manager name" required>
        <Input id="manager-name" placeholder="e.g. Rezaul Haque" />
      </FormField>
      <FormField id="manager-phone" label="Phone" required>
        <Input id="manager-phone" placeholder="+880 17XX-XXXXXX" />
      </FormField>
      <FormField id="manager-email" label="Email" required>
        <Input id="manager-email" type="email" placeholder="manager@speecherp.com.bd" />
      </FormField>
      <FormField
        id="manager-password"
        label="Temporary password"
        hint="Manager is prompted to change it on first sign-in"
        required
      >
        <Input id="manager-password" type="password" placeholder="••••••••" />
      </FormField>
    </div>
  );
}

function StepSettings() {
  return (
    <div className="grid gap-5 py-2 sm:grid-cols-2">
      <FormField id="opening-time" label="Opening time" required>
        <Input id="opening-time" type="time" defaultValue="09:00" />
      </FormField>
      <FormField id="closing-time" label="Closing time" required>
        <Input id="closing-time" type="time" defaultValue="20:00" />
      </FormField>
      <FormField id="currency" label="Currency">
        <Select defaultValue="BDT">
          <SelectTrigger id="currency">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="BDT">BDT — Bangladeshi Taka (৳)</SelectItem>
            <SelectItem value="USD">USD — US Dollar</SelectItem>
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="timezone" label="Timezone">
        <Select defaultValue="Asia/Dhaka">
          <SelectTrigger id="timezone">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Asia/Dhaka">Asia/Dhaka (GMT+6)</SelectItem>
            <SelectItem value="Asia/Kolkata">Asia/Kolkata (GMT+5:30)</SelectItem>
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="branch-status" label="Status" className="sm:col-span-2">
        <Select defaultValue="Active">
          <SelectTrigger id="branch-status">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {BRANCH_STATUSES.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
    </div>
  );
}
