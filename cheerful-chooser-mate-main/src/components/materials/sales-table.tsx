import { Link } from "@tanstack/react-router";
import { Eye, MoreHorizontal, Printer, RotateCcw } from "lucide-react";
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
import { formatDate } from "@/lib/format";
import { formatTaka } from "@/constants/dashboard-data";
import { SALE_STATUS_TONE, type Sale } from "@/constants/material-data";
import { SALE_COLUMNS, type SaleColumnKey } from "@/components/materials/material-columns";

export function SaleRowActions({
  item,
  onPrint,
  onRefund,
}: {
  item: Sale;
  onPrint?: (item: Sale) => void;
  onRefund?: (item: Sale) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground"
          aria-label={`Actions for ${item.invoiceNo}`}
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuItem asChild>
          <Link to="/manager/materials/$materialId" params={{ materialId: item.materialId }}>
            <Eye className="h-4 w-4" aria-hidden="true" />
            View material
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => onPrint?.(item)}>
          <Printer className="h-4 w-4" aria-hidden="true" />
          Print invoice
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => onRefund?.(item)}>
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Record refund
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function SalesTable({
  rows,
  visibleColumns,
  onPrint,
  onRefund,
}: {
  rows: Sale[];
  visibleColumns: SaleColumnKey[];
  onPrint?: (item: Sale) => void;
  onRefund?: (item: Sale) => void;
}) {
  const columns = SALE_COLUMNS.filter((column) => visibleColumns.includes(column.key));

  return (
    <>
      <div className="hidden overflow-auto md:block" style={{ maxHeight: "660px" }}>
        <Table>
          <caption className="sr-only">Material sales</caption>
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
            {rows.map((item) => (
              <TableRow
                key={item.id}
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
                    <SaleCell column={column.key} item={item} />
                  </TableCell>
                ))}
                <TableCell className="px-5 py-3.5 text-right">
                  <SaleRowActions item={item} onPrint={onPrint} onRefund={onRefund} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile card list */}
      <ul className="divide-y divide-border md:hidden">
        {rows.map((item) => (
          <li key={item.id} className="px-4 py-4">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="truncate font-mono text-[12.5px] font-medium text-primary">
                  {item.invoiceNo}
                </p>
                <p className="truncate text-sm font-medium text-foreground">{item.customerName}</p>
                <p className="truncate text-[12px] text-muted-foreground">{item.customerPhone}</p>
              </div>
              <SaleRowActions item={item} onPrint={onPrint} onRefund={onRefund} />
            </div>

            <div className="mt-2.5 flex flex-wrap items-center gap-2">
              <StatusBadge tone={SALE_STATUS_TONE[item.status]} label={item.status} />
              <StatusBadge tone="neutral" label={item.method} dot={false} />
            </div>

            <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]">
              <MobileField label="Material" value={item.materialName} />
              <MobileField label="Quantity" value={String(item.quantity)} />
              <MobileField label="Unit price" value={formatTaka(item.unitPrice)} />
              <MobileField label="Discount" value={formatTaka(item.discount)} />
              <MobileField label="Total" value={formatTaka(item.total)} />
              <MobileField label="Date" value={formatDate(item.date)} />
            </dl>
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

function SaleCell({ column, item }: { column: SaleColumnKey; item: Sale }) {
  switch (column) {
    case "invoice":
      return (
        <div className="whitespace-nowrap">
          <p className="font-mono text-[12.5px] font-medium text-primary">{item.invoiceNo}</p>
          <p className="text-[12px] text-muted-foreground">{item.method}</p>
        </div>
      );
    case "customer":
      return (
        <div className="min-w-0 max-w-[220px]">
          <p className="truncate font-medium text-foreground">{item.customerName}</p>
          <p className="truncate font-mono text-[12px] text-muted-foreground">
            {item.customerPhone}
          </p>
        </div>
      );
    case "material":
      return (
        <div className="min-w-0 max-w-[240px]">
          <Link
            to="/manager/materials/$materialId"
            params={{ materialId: item.materialId }}
            className="block truncate text-foreground hover:underline"
          >
            {item.materialName}
          </Link>
          <p className="truncate font-mono text-[12px] text-muted-foreground">
            {item.materialCode}
          </p>
        </div>
      );
    case "quantity":
      return <span className="tabular-nums text-foreground">{item.quantity}</span>;
    case "unitPrice":
      return (
        <span className="whitespace-nowrap tabular-nums text-muted-foreground">
          {formatTaka(item.unitPrice)}
        </span>
      );
    case "discount":
      return (
        <span
          className={cn(
            "whitespace-nowrap tabular-nums",
            item.discount > 0 ? "text-warning" : "text-muted-foreground",
          )}
        >
          {item.discount > 0 ? `− ${formatTaka(item.discount)}` : "—"}
        </span>
      );
    case "total":
      return (
        <span className="whitespace-nowrap font-semibold tabular-nums text-foreground">
          {formatTaka(item.total)}
        </span>
      );
    case "status":
      return <StatusBadge tone={SALE_STATUS_TONE[item.status]} label={item.status} />;
    case "date":
      return (
        <div className="whitespace-nowrap">
          <p className="text-foreground">{formatDate(item.date)}</p>
          <p className="truncate text-[12px] text-muted-foreground">{item.soldBy}</p>
        </div>
      );
    default:
      return null;
  }
}
