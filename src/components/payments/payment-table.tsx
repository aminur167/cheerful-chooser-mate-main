import { Link } from "@tanstack/react-router";
import {
  BanknoteArrowUp,
  Eye,
  MoreHorizontal,
  Printer,
  Receipt,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StatusBadge } from "@/components/common/status-badge";
import { formatDate, initialsOf } from "@/lib/format";
import { formatTaka } from "@/constants/dashboard-data";
import {
  PAYMENT_STATUS_TONE,
  type PaymentRecord,
} from "@/constants/payment-data";
import { PAYMENT_COLUMNS, type PaymentColumnKey } from "@/components/payments/payment-columns";

export function PaymentAvatar({ name, className }: { name: string; className?: string }) {
  return (
    <span
      className={cn(
        "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-muted/60 text-[12px] font-semibold text-muted-foreground",
        className,
      )}
      aria-hidden="true"
    >
      {initialsOf(name)}
    </span>
  );
}

export function PaymentTable({
  rows,
  visibleColumns,
  onCollect,
}: {
  rows: PaymentRecord[];
  visibleColumns: PaymentColumnKey[];
  onCollect?: (record: PaymentRecord) => void;
}) {
  const columns = PAYMENT_COLUMNS.filter((column) => visibleColumns.includes(column.key));

  return (
    <>
      {/* Desktop / tablet data table */}
      <div className="hidden overflow-auto md:block" style={{ maxHeight: "660px" }}>
        <Table>
          <caption className="sr-only">Payment collection</caption>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              {columns.map((column) => (
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
              <TableHead className="sticky top-0 z-10 h-11 bg-muted/50 px-5 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((record) => (
              <TableRow
                key={record.id}
                className="border-border transition-enterprise hover:bg-surface-hover"
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
                    className={cn(
                      "px-5 py-3.5 text-sm",
                      column.align === "right" && "text-right",
                    )}
                  >
                    <PaymentCell column={column.key} record={record} />
                  </TableCell>
                ))}
                <TableCell className="px-5 py-3.5 text-right">
                  <PaymentRowActions record={record} onCollect={onCollect} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile card list */}
      <ul className="divide-y divide-border md:hidden">
        {rows.map((record) => (
          <li key={record.id} className="px-4 py-4">
            <div className="flex items-start gap-3">
              <PaymentAvatar name={record.patientName} />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <Link
                      to="/manager/payments/$paymentId"
                      params={{ paymentId: record.id }}
                      className="block truncate text-sm font-medium text-foreground hover:underline"
                    >
                      {record.patientName}
                    </Link>
                    <p className="truncate font-mono text-[12px] text-muted-foreground">
                      {record.receiptNo} · {record.patientCode}
                    </p>
                  </div>
                  <PaymentRowActions record={record} onCollect={onCollect} />
                </div>

                <div className="mt-2.5 flex flex-wrap items-center gap-2">
                  <StatusBadge
                    tone={PAYMENT_STATUS_TONE[record.status]}
                    label={record.status}
                  />
                  <StatusBadge tone="info" label={record.packageType} dot={false} />
                </div>

                <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]">
                  <MobileField label="Package" value={record.packageName} />
                  <MobileField label="Amount" value={formatTaka(record.amount)} />
                  <MobileField label="Paid" value={formatTaka(record.paid)} />
                  <MobileField label="Due" value={formatTaka(record.due)} />
                  <MobileField label="Method" value={record.method} />
                  <MobileField label="Date" value={formatDate(record.paymentDate)} />
                </dl>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

function MobileField({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">{label}</dt>
      <dd className="truncate text-foreground">{value}</dd>
    </div>
  );
}

function PaymentCell({
  column,
  record,
}: {
  column: PaymentColumnKey;
  record: PaymentRecord;
}) {
  switch (column) {
    case "receiptNo":
      return (
        <Link
          to="/manager/payments/$paymentId"
          params={{ paymentId: record.id }}
          className="whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline"
        >
          {record.receiptNo}
        </Link>
      );
    case "patient":
      return (
        <div className="flex min-w-0 items-center gap-3">
          <PaymentAvatar name={record.patientName} />
          <div className="min-w-0">
            <Link
              to="/manager/patients/$patientId"
              params={{ patientId: record.patientId }}
              className="block truncate font-medium text-foreground hover:underline"
            >
              {record.patientName}
            </Link>
            <p className="truncate text-[12px] text-muted-foreground">
              {record.patientCode} · {record.patientPhone}
            </p>
          </div>
        </div>
      );
    case "packageName":
      return (
        <div className="min-w-0">
          <p className="truncate text-foreground">{record.packageName}</p>
          <p className="truncate text-[12px] text-muted-foreground">{record.packageType}</p>
        </div>
      );
    case "amount":
      return (
        <span className="whitespace-nowrap tabular-nums text-foreground">
          {formatTaka(record.amount)}
        </span>
      );
    case "discount":
      return (
        <span className="whitespace-nowrap tabular-nums text-muted-foreground">
          {record.discount > 0 ? `− ${formatTaka(record.discount)}` : "—"}
        </span>
      );
    case "paid":
      return (
        <span className="whitespace-nowrap font-medium tabular-nums text-success">
          {formatTaka(record.paid)}
        </span>
      );
    case "due":
      return (
        <span
          className={cn(
            "whitespace-nowrap font-medium tabular-nums",
            record.due > 0 ? "text-danger" : "text-muted-foreground",
          )}
        >
          {record.due > 0 ? formatTaka(record.due) : "—"}
        </span>
      );
    case "method":
      return (
        <div className="min-w-0">
          <p className="whitespace-nowrap text-foreground">{record.method}</p>
          <p className="truncate font-mono text-[11.5px] text-muted-foreground">
            {record.reference}
          </p>
        </div>
      );
    case "paymentDate":
      return (
        <span className="whitespace-nowrap text-muted-foreground">
          {formatDate(record.paymentDate)}
        </span>
      );
    case "collectedBy":
      return (
        <span className="whitespace-nowrap text-muted-foreground">{record.collectedBy}</span>
      );
    case "status":
      return <StatusBadge tone={PAYMENT_STATUS_TONE[record.status]} label={record.status} />;
    default:
      return null;
  }
}

function PaymentRowActions({
  record,
  onCollect,
}: {
  record: PaymentRecord;
  onCollect?: (record: PaymentRecord) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="text-muted-foreground"
          aria-label={`Actions for receipt ${record.receiptNo}`}
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem asChild>
          <Link to="/manager/payments/$paymentId" params={{ paymentId: record.id }}>
            <Eye className="h-4 w-4" aria-hidden="true" />
            View payment profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem disabled={record.due === 0} onSelect={() => onCollect?.(record)}>
          <BanknoteArrowUp className="h-4 w-4" aria-hidden="true" />
          Collect due
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Receipt className="h-4 w-4" aria-hidden="true" />
          View invoice
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Printer className="h-4 w-4" aria-hidden="true" />
          Print receipt
        </DropdownMenuItem>
        <DropdownMenuItem disabled={record.due === 0}>
          <Send className="h-4 w-4" aria-hidden="true" />
          Send reminder
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
