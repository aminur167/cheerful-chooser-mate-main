import { Link } from "@tanstack/react-router";
import { Download, Eye, FileText, Printer } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/common/status-badge";
import { formatDate } from "@/lib/format";
import { formatTaka } from "@/constants/dashboard-data";
import { INVOICE_STATUS_TONE, type PaymentRecord } from "@/constants/payment-data";

/** Printable invoice summary card used in the Invoices tab. */
export function InvoiceCard({ record }: { record: PaymentRecord }) {
  const payable = record.amount - record.discount;

  return (
    <Card interactive className="flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
            <FileText className="h-[18px] w-[18px]" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="truncate font-mono text-[13px] font-semibold text-foreground">
              {record.invoiceNo}
            </p>
            <p className="truncate text-[12px] text-muted-foreground">
              Issued {formatDate(record.paymentDate)}
            </p>
          </div>
        </div>
        <StatusBadge
          tone={INVOICE_STATUS_TONE[record.invoiceStatus]}
          label={record.invoiceStatus}
        />
      </div>

      <dl className="mt-4 space-y-2.5 border-t border-border pt-4 text-[13px]">
        <Row label="Patient">
          <Link
            to="/manager/patients/$patientId"
            params={{ patientId: record.patientId }}
            className="font-medium text-foreground hover:underline"
          >
            {record.patientName}
          </Link>
        </Row>
        <Row label="Package">
          <span className="text-foreground">{record.packageName}</span>
        </Row>
        <Row label="Payable">
          <span className="font-semibold tabular-nums text-foreground">
            {formatTaka(payable)}
          </span>
        </Row>
        <Row label="Paid">
          <span className="tabular-nums text-success">{formatTaka(record.paid)}</span>
        </Row>
        <Row label="Due">
          <span
            className={
              record.due > 0
                ? "tabular-nums font-medium text-danger"
                : "tabular-nums text-muted-foreground"
            }
          >
            {record.due > 0 ? formatTaka(record.due) : "—"}
          </span>
        </Row>
      </dl>

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border pt-4">
        <Button variant="outline" size="sm" onClick={() => window.print()}>
          <Printer className="h-4 w-4" aria-hidden="true" />
          Print
        </Button>
        <Button variant="outline" size="sm" disabled title="PDF export coming soon">
          <Download className="h-4 w-4" aria-hidden="true" />
          Download PDF
        </Button>
        <Button variant="ghost" size="sm" asChild className="ml-auto">
          <Link to="/manager/payments/$paymentId" params={{ paymentId: record.id }}>
            <Eye className="h-4 w-4" aria-hidden="true" />
            Details
          </Link>
        </Button>
      </div>
    </Card>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="min-w-0 truncate text-right">{children}</dd>
    </div>
  );
}
