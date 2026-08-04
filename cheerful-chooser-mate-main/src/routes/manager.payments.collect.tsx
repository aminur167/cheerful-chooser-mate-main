import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Loader2, Search, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/common/page-header";
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
import { FormField, FormSection } from "@/components/forms/form-field";
import { StatusBadge } from "@/components/common/status-badge";
import { PaymentAvatar } from "@/components/payments/payment-table";
import { PaymentSummaryCard } from "@/components/payments/payment-summary-card";
import { formatTaka } from "@/constants/dashboard-data";
import { PATIENTS } from "@/constants/patient-data";
import {
  COLLECTED_BY,
  PAYMENT_METHODS,
  PAYMENT_PACKAGES,
  TODAY_ISO,
  findPackage,
} from "@/constants/payment-data";

const TITLE = "Collect Payment — Speech Therapy ERP";
const DESCRIPTION =
  "Record a therapy payment: pick the patient and package, apply discounts, capture the amount received and preview the remaining due in BDT.";

export const Route = createFileRoute("/manager/payments/collect")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CollectPaymentPage,
});

function CollectPaymentPage() {
  const [query, setQuery] = useState("");
  const [patientId, setPatientId] = useState("");
  const [packageId, setPackageId] = useState("");
  const [discount, setDiscount] = useState("");
  const [received, setReceived] = useState("");
  const [method, setMethod] = useState("Cash");
  const [submitting, setSubmitting] = useState(false);
  const [saved, setSaved] = useState(false);

  const patient = PATIENTS.find((item) => item.id === patientId);
  const selectedPackage = findPackage(packageId);

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return PATIENTS.slice(0, 5);
    return PATIENTS.filter((item) =>
      [item.name, item.code, item.phone, item.guardian.name]
        .join(" ")
        .toLowerCase()
        .includes(value),
    ).slice(0, 8);
  }, [query]);

  const price = selectedPackage?.price ?? 0;
  const discountValue = Math.min(Number(discount) || 0, price);
  const payable = Math.max(price - discountValue, 0);
  const receivedValue = Math.min(Number(received) || 0, payable);
  const remainingDue = Math.max(payable - receivedValue, 0);
  const needsReference = method !== "Cash";

  const submit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSaved(true);
    }, 900);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Collect Payment"
        description="Manage packages, collect payments and monitor dues."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Payment & Billing", to: "/manager/payments" },
          { label: "Collect Payment" },
        ]}
        actions={
          <Button variant="outline" asChild>
            <Link to="/manager/payments">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back
            </Link>
          </Button>
        }
      />

      {saved ? (
        <div
          role="status"
          className="rounded-xl border border-success/30 bg-success/8 px-5 py-4 text-[13px] text-foreground shadow-card"
        >
          Payment of{" "}
          <span className="font-semibold tabular-nums">{formatTaka(receivedValue)}</span> recorded
          in this preview. Receipt generation will be handled by the API.
        </div>
      ) : null}

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 divide-y divide-border rounded-xl border border-border bg-card px-5 shadow-card sm:px-6">
          <FormSection
            title="Patient"
            description="Search by name, patient ID, phone or guardian name."
          >
            <FormField id="collect-page-search" label="Search patient" required>
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70"
                  aria-hidden="true"
                />
                <Input
                  id="collect-page-search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="e.g. Rahim Ahmed or PT-DHK-1001"
                  className="pl-9"
                />
              </div>
            </FormField>

            <ul className="grid gap-1.5 rounded-lg border border-border bg-muted/25 p-2 sm:grid-cols-2">
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
              <div className="rounded-lg border border-border bg-background p-4">
                <div className="flex items-start gap-3">
                  <PaymentAvatar name={patient.name} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-foreground">
                      {patient.name}
                    </p>
                    <p className="truncate text-[12.5px] text-muted-foreground">
                      {patient.code} · {patient.age} yrs · {patient.guardian.name} (
                      {patient.guardian.relation}) · {patient.phone}
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
          </FormSection>

          <FormSection title="Package & amount" description="Discount and due are calculated live.">
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField id="collect-page-package" label="Selected package" required>
                <Select value={packageId} onValueChange={setPackageId}>
                  <SelectTrigger id="collect-page-package">
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
              <FormField id="collect-page-amount" label="Amount (৳)">
                <Input id="collect-page-amount" value={price ? String(price) : ""} readOnly />
              </FormField>
              <FormField id="collect-page-discount" label="Discount (৳)">
                <Input
                  id="collect-page-discount"
                  type="number"
                  min={0}
                  value={discount}
                  onChange={(event) => setDiscount(event.target.value)}
                  placeholder="0"
                />
              </FormField>
              <FormField id="collect-page-received" label="Receive amount (৳)" required>
                <Input
                  id="collect-page-received"
                  type="number"
                  min={0}
                  value={received}
                  onChange={(event) => setReceived(event.target.value)}
                  placeholder="0"
                />
              </FormField>
              <FormField
                id="collect-page-due"
                label="Remaining due (৳)"
                hint="Calculated automatically"
              >
                <Input
                  id="collect-page-due"
                  value={formatTaka(remainingDue)}
                  readOnly
                  className={cn(
                    "font-medium tabular-nums",
                    remainingDue > 0 ? "text-danger" : "text-success",
                  )}
                />
              </FormField>
              <FormField id="collect-page-date" label="Payment date">
                <Input id="collect-page-date" type="date" defaultValue={TODAY_ISO} />
              </FormField>
            </div>
          </FormSection>

          <FormSection title="Method & reference" description="How the guardian paid this amount.">
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField id="collect-page-method" label="Payment method" required>
                <Select value={method} onValueChange={setMethod}>
                  <SelectTrigger id="collect-page-method">
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
                id="collect-page-reference"
                label="Reference number"
                hint={needsReference ? "Transaction or cheque reference" : "Not required for cash"}
              >
                <Input
                  id="collect-page-reference"
                  placeholder={needsReference ? "e.g. bKash TRX 8FJ2K9QP" : "—"}
                  disabled={!needsReference}
                />
              </FormField>
              <FormField id="collect-page-collector" label="Collected by">
                <Select defaultValue={COLLECTED_BY[0]}>
                  <SelectTrigger id="collect-page-collector">
                    <SelectValue placeholder="Select staff" />
                  </SelectTrigger>
                  <SelectContent>
                    {COLLECTED_BY.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormField>
              <FormField id="collect-page-remarks" label="Remarks" className="sm:col-span-2">
                <Textarea
                  id="collect-page-remarks"
                  rows={3}
                  placeholder="Optional note for the receipt…"
                />
              </FormField>
            </div>
          </FormSection>

          <div className="flex flex-wrap items-center justify-between gap-3 py-5">
            <p className="text-[12.5px] text-muted-foreground">
              Nothing is saved yet — this screen is UI only.
            </p>
            <div className="flex items-center gap-2.5">
              <Button variant="ghost" asChild>
                <Link to="/manager/payments">Cancel</Link>
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
        </div>

        <aside className="min-w-0 space-y-6">
          <PaymentSummaryCard
            packagePrice={price}
            discount={discountValue}
            paid={receivedValue}
            due={remainingDue}
            totalSessions={selectedPackage?.sessions ?? 0}
            remainingSessions={selectedPackage?.sessions ?? 0}
          />
          {selectedPackage ? (
            <section className="rounded-xl border border-border bg-card p-5 shadow-card">
              <h3 className="text-sm font-semibold text-foreground">{selectedPackage.name}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                {selectedPackage.description}
              </p>
              <dl className="mt-4 space-y-2.5 border-t border-border pt-4 text-[13px]">
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-muted-foreground">Duration</dt>
                  <dd className="font-medium text-foreground">{selectedPackage.durationLabel}</dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-muted-foreground">Expiry</dt>
                  <dd className="font-medium text-foreground">{selectedPackage.expiry}</dd>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-muted-foreground">Registration fee</dt>
                  <dd className="font-medium tabular-nums text-foreground">
                    {formatTaka(selectedPackage.registrationFee)}
                  </dd>
                </div>
              </dl>
            </section>
          ) : null}
        </aside>
      </div>
    </div>
  );
}
