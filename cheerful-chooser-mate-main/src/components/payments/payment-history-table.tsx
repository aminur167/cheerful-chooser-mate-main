import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusBadge } from "@/components/common/status-badge";
import { formatDate } from "@/lib/format";
import { formatTaka } from "@/constants/dashboard-data";
import { PAYMENT_STATUS_TONE, type PaymentRecord } from "@/constants/payment-data";
import { HISTORY_COLUMNS } from "@/components/payments/payment-columns";
import { PaymentAvatar } from "@/components/payments/payment-table";

/** Read-only enterprise ledger of every collected payment. */
export function PaymentHistoryTable({ rows }: { rows: PaymentRecord[] }) {
  return (
    <>
      <div className="hidden overflow-auto md:block" style={{ maxHeight: "620px" }}>
        <Table>
          <caption className="sr-only">Payment history</caption>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              {HISTORY_COLUMNS.map((column) => (
                <TableHead
                  key={column.key}
                  scope="col"
                  className={cn(
                    "sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
                    column.align === "right" && "text-right",
                  )}
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((record) => (
              <TableRow
                key={record.id}
                className="border-border transition-enterprise hover:bg-surface-hover"
              >
                <TableCell className="px-5 py-3.5">
                  <Link
                    to="/manager/payments/$paymentId"
                    params={{ paymentId: record.id }}
                    className="whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline"
                  >
                    {record.receiptNo}
                  </Link>
                </TableCell>
                <TableCell className="px-5 py-3.5 text-sm">
                  <div className="flex min-w-0 items-center gap-3">
                    <PaymentAvatar name={record.patientName} className="h-8 w-8" />
                    <div className="min-w-0">
                      <p className="truncate font-medium text-foreground">
                        {record.patientName}
                      </p>
                      <p className="truncate text-[12px] text-muted-foreground">
                        {record.patientCode}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-5 py-3.5 text-sm text-foreground">
                  {record.packageName}
                </TableCell>
                <TableCell className="px-5 py-3.5 text-sm">
                  <StatusBadge tone="info" label={record.packageType} dot={false} />
                </TableCell>
                <TableCell className="px-5 py-3.5 text-right text-sm tabular-nums text-foreground">
                  {formatTaka(record.paid)}
                </TableCell>
                <TableCell className="px-5 py-3.5 text-sm text-muted-foreground">
                  {record.method}
                </TableCell>
                <TableCell className="whitespace-nowrap px-5 py-3.5 text-sm text-muted-foreground">
                  {record.collectedBy}
                </TableCell>
                <TableCell className="whitespace-nowrap px-5 py-3.5 text-sm text-muted-foreground">
                  {formatDate(record.paymentDate)}
                </TableCell>
                <TableCell className="px-5 py-3.5">
                  <StatusBadge
                    tone={PAYMENT_STATUS_TONE[record.status]}
                    label={record.status}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <ul className="divide-y divide-border md:hidden">
        {rows.map((record) => (
          <li key={record.id} className="px-4 py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <Link
                  to="/manager/payments/$paymentId"
                  params={{ paymentId: record.id }}
                  className="block truncate text-sm font-medium text-foreground hover:underline"
                >
                  {record.patientName}
                </Link>
                <p className="truncate font-mono text-[12px] text-muted-foreground">
                  {record.receiptNo}
                </p>
              </div>
              <span className="shrink-0 text-sm font-semibold tabular-nums text-foreground">
                {formatTaka(record.paid)}
              </span>
            </div>
            <div className="mt-2.5 flex flex-wrap items-center gap-2">
              <StatusBadge tone={PAYMENT_STATUS_TONE[record.status]} label={record.status} />
              <StatusBadge tone="info" label={record.packageType} dot={false} />
              <span className="text-[12px] text-muted-foreground">
                {record.method} · {formatDate(record.paymentDate)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
