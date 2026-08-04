import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  BadgeCheck,
  CalendarClock,
  FileText,
  History,
  Layers,
  Phone,
  Printer,
  Receipt,
  UserRound,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { StatusBadge } from "@/components/common/status-badge";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { PaymentAvatar } from "@/components/payments/payment-table";
import { PaymentTimeline } from "@/components/payments/payment-timeline";
import { PaymentSummaryCard } from "@/components/payments/payment-summary-card";
import { DueManagementCard } from "@/components/payments/due-management-card";
import { InvoiceCard } from "@/components/payments/invoice-card";
import { CollectPaymentDialog } from "@/components/payments/collect-payment-dialog";
import { formatDate } from "@/lib/format";
import { formatTaka } from "@/constants/dashboard-data";
import {
  INVOICE_STATUS_TONE,
  PAYMENT_STATUS_TONE,
  findPaymentProfile,
  findPackage,
  type PaymentProfile,
} from "@/constants/payment-data";

export const Route = createFileRoute("/manager/payments/$paymentId")({
  loader: ({ params }) => {
    const profile = findPaymentProfile(params.paymentId);
    if (!profile) throw notFound();
    return { profile };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Payment record not found — Speech Therapy ERP" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { primary } = loaderData.profile;
    const title = `${primary.receiptNo} — ${primary.patientName} | Speech Therapy ERP`;
    const description = `Payment profile for ${primary.patientName}: package billing, payment timeline, invoice history and outstanding dues.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "robots", content: "noindex" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  notFoundComponent: PaymentNotFound,
  component: PaymentProfilePage,
});

function PaymentNotFound() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Payment record not found"
        description="This receipt no longer exists or has been archived."
      />
      <Button asChild variant="outline">
        <Link to="/manager/payments">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to payments
        </Link>
      </Button>
    </div>
  );
}

function PaymentProfilePage() {
  const { profile } = Route.useLoaderData() as { profile: PaymentProfile };
  const { primary, payments, totalBilled, totalPaid, totalDue, collectionRate } = profile;
  const [collectOpen, setCollectOpen] = useState(false);
  const pkg = findPackage(primary.packageId);

  return (
    <div className="space-y-8">
      <PageHeader
        title={`${primary.patientName} — Payment Profile`}
        description={`${primary.receiptNo} · ${primary.packageName} · ${primary.branch}`}
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Payment & Billing", to: "/manager/payments" },
          { label: primary.receiptNo },
        ]}
        actions={
          <>
            <Button variant="outline" onClick={() => window.print()}>
              <Printer className="h-4 w-4" aria-hidden="true" />
              Print
            </Button>
            <Button variant="outline" asChild>
              <Link to="/manager/payments">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back
              </Link>
            </Button>
            <Button onClick={() => setCollectOpen(true)}>
              <Wallet className="h-4 w-4" aria-hidden="true" />
              Collect Payment
            </Button>
          </>
        }
      />

      {/* Header summary */}
      <Card className="p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <PaymentAvatar name={primary.patientName} className="h-14 w-14 text-sm" />
            <div className="min-w-0">
              <h2 className="truncate text-lg font-semibold tracking-tight text-foreground">
                {primary.patientName}
              </h2>
              <p className="mt-0.5 truncate text-[13px] text-muted-foreground">
                {primary.patientCode} · {primary.patientAge} yrs · {primary.guardianName}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <StatusBadge
                  tone={PAYMENT_STATUS_TONE[primary.status]}
                  label={primary.status}
                />
                <StatusBadge
                  tone={INVOICE_STATUS_TONE[primary.invoiceStatus]}
                  label={`Invoice ${primary.invoiceStatus}`}
                  dot={false}
                />
                <StatusBadge tone="info" label={primary.packageType} dot={false} />
              </div>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:shrink-0">
            <Stat label="Total billed" value={formatTaka(totalBilled)} />
            <Stat label="Total paid" value={formatTaka(totalPaid)} tone="success" />
            <Stat
              label="Outstanding"
              value={formatTaka(totalDue)}
              tone={totalDue > 0 ? "danger" : "muted"}
            />
            <Stat label="Collection rate" value={`${collectionRate}%`} />
          </dl>
        </div>
        <div className="mt-5 border-t border-border pt-4">
          <div className="flex items-center justify-between text-[12px] text-muted-foreground">
            <span>Collected against billed amount</span>
            <span className="tabular-nums text-foreground">{collectionRate}%</span>
          </div>
          <Progress value={collectionRate} className="mt-1.5" />
        </div>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-6">
          <Section title="Patient Information" icon={UserRound}>
            <dl className="grid gap-4 sm:grid-cols-2">
              <Field label="Patient" value={primary.patientName} />
              <Field label="Patient ID" value={primary.patientCode} />
              <Field label="Guardian" value={primary.guardianName} />
              <Field label="Contact" value={primary.patientPhone} />
              <Field label="Branch" value={primary.branch} />
              <Field label="Collected by" value={primary.collectedBy} />
            </dl>
            <div className="mt-5 flex flex-wrap items-center gap-2.5 border-t border-border pt-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/manager/patients/$patientId" params={{ patientId: primary.patientId }}>
                  <UserRound className="h-4 w-4" aria-hidden="true" />
                  Open patient profile
                </Link>
              </Button>
              <Button variant="ghost" size="sm">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call guardian
              </Button>
            </div>
          </Section>

          <Section title="Package Information" icon={Layers}>
            <dl className="grid gap-4 sm:grid-cols-2">
              <Field label="Package" value={primary.packageName} />
              <Field label="Payment model" value={primary.packageType} />
              <Field label="Package price" value={formatTaka(primary.amount)} />
              <Field
                label="Discount"
                value={primary.discount > 0 ? `− ${formatTaka(primary.discount)}` : "—"}
              />
              <Field label="Duration" value={pkg?.durationLabel ?? "—"} />
              <Field label="Expiry" value={pkg?.expiry ?? "—"} />
              <Field
                label="Sessions"
                value={`${primary.totalSessions - primary.remainingSessions} of ${primary.totalSessions} used`}
              />
              <Field label="Reference" value={primary.reference} />
            </dl>
          </Section>

          <Section title="Payment Timeline" icon={History}>
            <PaymentTimeline items={primary.timeline} />
          </Section>

          <Section title="Invoice History" icon={FileText}>
            <div className="grid gap-4 md:grid-cols-2">
              {payments.map((record) => (
                <InvoiceCard key={record.id} record={record} />
              ))}
            </div>
          </Section>

          <Section title="Payment Statistics" icon={BadgeCheck}>
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Stat label="Receipts issued" value={String(payments.length)} />
              <Stat
                label="Average payment"
                value={formatTaka(
                  payments.length === 0 ? 0 : Math.round(totalPaid / payments.length),
                )}
              />
              <Stat label="Last payment" value={formatDate(primary.paymentDate)} />
              <Stat
                label="Preferred method"
                value={primary.method}
              />
            </dl>
          </Section>
        </div>

        <aside className="min-w-0 space-y-6">
          <PaymentSummaryCard
            packagePrice={primary.amount}
            discount={primary.discount}
            paid={primary.paid}
            due={primary.due}
            totalSessions={primary.totalSessions}
            remainingSessions={primary.remainingSessions}
          />

          <DueManagementCard record={primary} onCollect={() => setCollectOpen(true)} />

          <WidgetCard
            title="Next billing"
            description="Upcoming cycle for this patient"
            icon={CalendarClock}
            showMenu={false}
          >
            <dl className="space-y-2.5 text-[13px]">
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted-foreground">Next due date</dt>
                <dd className="font-medium text-foreground">
                  {primary.nextDueDate === "—" ? "—" : formatDate(primary.nextDueDate)}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted-foreground">Remaining sessions</dt>
                <dd className="font-medium tabular-nums text-foreground">
                  {primary.remainingSessions}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted-foreground">Remarks</dt>
                <dd className="max-w-[60%] text-right text-muted-foreground">
                  {primary.remarks}
                </dd>
              </div>
            </dl>
          </WidgetCard>

          <WidgetCard
            title="Quick actions"
            description="Billing shortcuts for this patient"
            icon={Receipt}
            showMenu={false}
          >
            <div className="grid gap-2.5">
              <Button size="sm" onClick={() => setCollectOpen(true)}>
                <Wallet className="h-4 w-4" aria-hidden="true" />
                Collect payment
              </Button>
              <Button variant="outline" size="sm" onClick={() => window.print()}>
                <Printer className="h-4 w-4" aria-hidden="true" />
                Print receipt
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/manager/payments" search={{ tab: "history" }}>
                  <History className="h-4 w-4" aria-hidden="true" />
                  View payment history
                </Link>
              </Button>
            </div>
          </WidgetCard>
        </aside>
      </div>

      <CollectPaymentDialog
        key={String(collectOpen)}
        open={collectOpen}
        onOpenChange={setCollectOpen}
        defaultPackageId={primary.packageId}
        defaultPatientId={primary.patientId}
      />
    </div>
  );
}

function Section({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-6">
      <div className="mb-5 flex items-center gap-2.5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
        </span>
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">{label}</dt>
      <dd className="mt-1 break-words text-[13.5px] text-foreground">{value}</dd>
    </div>
  );
}

function Stat({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "success" | "danger" | "muted";
}) {
  return (
    <div className="min-w-0">
      <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">{label}</dt>
      <dd
        className={
          tone === "success"
            ? "mt-1 truncate text-[15px] font-semibold tabular-nums text-success"
            : tone === "danger"
              ? "mt-1 truncate text-[15px] font-semibold tabular-nums text-danger"
              : tone === "muted"
                ? "mt-1 truncate text-[15px] font-semibold tabular-nums text-muted-foreground"
                : "mt-1 truncate text-[15px] font-semibold tabular-nums text-foreground"
        }
      >
        {value}
      </dd>
    </div>
  );
}
