import { useMemo, useState } from "react";
import { Loader2, Search, Wallet } from "lucide-react";
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
import { PaymentAvatar } from "@/components/payments/payment-table";
import { PaymentSummaryCard } from "@/components/payments/payment-summary-card";
import { formatTaka } from "@/constants/dashboard-data";
import { PATIENTS } from "@/constants/patient-data";
import {
  PAYMENT_METHODS,
  PAYMENT_PACKAGES,
  findPackage,
} from "@/constants/payment-data";

/**
 * UI-only payment collection flow.
 * Amounts are calculated in the browser for preview purposes only.
 */
export function CollectPaymentDialog({
  open,
  onOpenChange,
  defaultPackageId,
  defaultPatientId,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultPackageId?: string;
  defaultPatientId?: string;
}) {
  const [query, setQuery] = useState("");
  const [patientId, setPatientId] = useState(defaultPatientId ?? "");
  const [packageId, setPackageId] = useState(defaultPackageId ?? "");
  const [discount, setDiscount] = useState("");
  const [received, setReceived] = useState("");
  const [method, setMethod] = useState<string>("Cash");
  const [submitting, setSubmitting] = useState(false);

  const patient = PATIENTS.find((item) => item.id === patientId);
  const selectedPackage = findPackage(packageId);

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return PATIENTS.slice(0, 4);
    return PATIENTS.filter((item) =>
      [item.name, item.code, item.phone, item.guardian.name]
        .join(" ")
        .toLowerCase()
        .includes(value),
    ).slice(0, 6);
  }, [query]);

  const price = selectedPackage?.price ?? 0;
  const discountValue = Math.min(Number(discount) || 0, price);
  const payable = Math.max(price - discountValue, 0);
  const receivedValue = Math.min(Number(received) || 0, payable);
  const remainingDue = Math.max(payable - receivedValue, 0);

  const close = () => {
    onOpenChange(false);
    setTimeout(() => {
      setQuery("");
      setPatientId(defaultPatientId ?? "");
      setPackageId(defaultPackageId ?? "");
      setDiscount("");
      setReceived("");
      setMethod("Cash");
    }, 200);
  };

  const submit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      close();
    }, 900);
  };

  const needsReference = method !== "Cash";

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) close();
        else onOpenChange(true);
      }}
    >
      <DialogContent className="max-h-[92vh] max-w-4xl overflow-y-auto rounded-xl">
        <DialogHeader>
          <DialogTitle>Collect payment</DialogTitle>
          <DialogDescription>
            Search a patient, pick a package and record the amount received.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-2 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="min-w-0 space-y-5">
            <FormField
              id="collect-search"
              label="Search patient"
              hint="Search by name, patient ID, phone or guardian"
              required
            >
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70"
                  aria-hidden="true"
                />
                <Input
                  id="collect-search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="e.g. Rahim Ahmed or PT-DHK-1001"
                  className="pl-9"
                />
              </div>
            </FormField>

            <ul className="max-h-[184px] space-y-1.5 overflow-y-auto rounded-lg border border-border bg-muted/25 p-2">
              {results.length === 0 ? (
                <li className="px-2 py-3 text-[13px] text-muted-foreground">
                  No patient matches this search.
                </li>
              ) : (
                results.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setPatientId(item.id)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-md border px-2.5 py-2 text-left transition-enterprise",
                        item.id === patientId
                          ? "border-primary/40 bg-primary/8"
                          : "border-transparent hover:bg-surface-hover",
                      )}
                      aria-pressed={item.id === patientId}
                    >
                      <PaymentAvatar name={item.name} className="h-8 w-8" />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[13px] font-medium text-foreground">
                          {item.name}
                        </span>
                        <span className="block truncate text-[12px] text-muted-foreground">
                          {item.code} · {item.phone}
                        </span>
                      </span>
                    </button>
                  </li>
                ))
              )}
            </ul>

            {patient ? (
              <div className="rounded-lg border border-border bg-card p-4 shadow-card">
                <div className="flex items-start gap-3">
                  <PaymentAvatar name={patient.name} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-foreground">
                      {patient.name}
                    </p>
                    <p className="truncate text-[12.5px] text-muted-foreground">
                      {patient.code} · {patient.age} yrs · {patient.branch}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <StatusBadge tone="info" label={patient.program.therapyType} dot={false} />
                      <StatusBadge
                        tone={patient.billing.due > 0 ? "danger" : "success"}
                        label={
                          patient.billing.due > 0
                            ? `Due ${formatTaka(patient.billing.due)}`
                            : "No outstanding due"
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="grid gap-5 sm:grid-cols-2">
              <FormField id="collect-package" label="Selected package" required>
                <Select value={packageId} onValueChange={setPackageId}>
                  <SelectTrigger id="collect-package">
                    <SelectValue placeholder="Select package" />
                  </SelectTrigger>
                  <SelectContent>
                    {PAYMENT_PACKAGES.map((item) => (
                      <SelectItem key={item.id} value={item.id}>
                        {item.name} — {formatTaka(item.price)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormField>

              <FormField id="collect-amount" label="Amount (৳)">
                <Input id="collect-amount" value={price ? String(price) : ""} readOnly />
              </FormField>

              <FormField id="collect-discount" label="Discount (৳)">
                <Input
                  id="collect-discount"
                  type="number"
                  min={0}
                  value={discount}
                  onChange={(event) => setDiscount(event.target.value)}
                  placeholder="0"
                />
              </FormField>

              <FormField id="collect-received" label="Receive amount (৳)" required>
                <Input
                  id="collect-received"
                  type="number"
                  min={0}
                  value={received}
                  onChange={(event) => setReceived(event.target.value)}
                  placeholder="0"
                />
              </FormField>

              <FormField
                id="collect-due"
                label="Remaining due (৳)"
                hint="Calculated automatically"
              >
                <Input
                  id="collect-due"
                  value={formatTaka(remainingDue)}
                  readOnly
                  className={cn(
                    "font-medium tabular-nums",
                    remainingDue > 0 ? "text-danger" : "text-success",
                  )}
                />
              </FormField>

              <FormField id="collect-method" label="Payment method" required>
                <Select value={method} onValueChange={setMethod}>
                  <SelectTrigger id="collect-method">
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

              <FormField
                id="collect-reference"
                label="Reference number"
                hint={needsReference ? "Transaction or cheque reference" : "Not required for cash"}
              >
                <Input
                  id="collect-reference"
                  placeholder={needsReference ? "e.g. bKash TRX 8FJ2K9QP" : "—"}
                  disabled={!needsReference}
                />
              </FormField>

              <FormField id="collect-remarks" label="Remarks" className="sm:col-span-2">
                <Textarea id="collect-remarks" rows={2} placeholder="Optional note for the receipt…" />
              </FormField>
            </div>
          </div>

          <aside className="min-w-0">
            <PaymentSummaryCard
              packagePrice={price}
              discount={discountValue}
              paid={receivedValue}
              due={remainingDue}
              totalSessions={selectedPackage?.sessions ?? 0}
              remainingSessions={selectedPackage?.sessions ?? 0}
            />
          </aside>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
          <p className="text-[12.5px] text-muted-foreground">
            Receipt will be generated after the API is connected.
          </p>
          <div className="flex items-center gap-2.5">
            <Button variant="ghost" onClick={close}>
              Cancel
            </Button>
            <Button onClick={submit} disabled={submitting || !patient || !selectedPackage}>
              {submitting ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <Wallet className="h-4 w-4" aria-hidden="true" />
              )}
              Collect {receivedValue > 0 ? formatTaka(receivedValue) : "payment"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
