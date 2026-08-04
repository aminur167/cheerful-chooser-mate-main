import { Link } from "@tanstack/react-router";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  Eye,
  MoreHorizontal,
  PencilLine,
  Trash2,
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
import { MaterialThumbnail } from "@/components/materials/material-thumbnail";
import { formatTaka } from "@/constants/dashboard-data";
import { MATERIAL_STATUS_TONE, type Material } from "@/constants/material-data";
import {
  MATERIAL_COLUMNS,
  type MaterialColumnKey,
} from "@/components/materials/material-columns";

export function MaterialRowActions({
  item,
  onEdit,
  onStockIn,
  onStockOut,
  onDelete,
}: {
  item: Material;
  onEdit?: (item: Material) => void;
  onStockIn?: (item: Material) => void;
  onStockOut?: (item: Material) => void;
  onDelete?: (item: Material) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground"
          aria-label={`Actions for ${item.code}`}
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem asChild>
          <Link to="/manager/materials/$materialId" params={{ materialId: item.id }}>
            <Eye className="h-4 w-4" aria-hidden="true" />
            View
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => onEdit?.(item)}>
          <PencilLine className="h-4 w-4" aria-hidden="true" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => onStockIn?.(item)}>
          <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
          Stock In
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => onStockOut?.(item)}>
          <ArrowUpFromLine className="h-4 w-4" aria-hidden="true" />
          Stock Out
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={() => onDelete?.(item)}
          className="text-danger focus:text-danger"
        >
          <Trash2 className="h-4 w-4" aria-hidden="true" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function MaterialTable({
  rows,
  visibleColumns,
  onEdit,
  onStockIn,
  onStockOut,
  onDelete,
}: {
  rows: Material[];
  visibleColumns: MaterialColumnKey[];
  onEdit?: (item: Material) => void;
  onStockIn?: (item: Material) => void;
  onStockOut?: (item: Material) => void;
  onDelete?: (item: Material) => void;
}) {
  const columns = MATERIAL_COLUMNS.filter((column) => visibleColumns.includes(column.key));
  const actions = { onEdit, onStockIn, onStockOut, onDelete };

  return (
    <>
      {/* Desktop / tablet data table with sticky header */}
      <div className="hidden overflow-auto md:block" style={{ maxHeight: "660px" }}>
        <Table>
          <caption className="sr-only">Therapy materials inventory</caption>
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
                    <MaterialCell column={column.key} item={item} />
                  </TableCell>
                ))}
                <TableCell className="px-5 py-3.5 text-right">
                  <MaterialRowActions item={item} {...actions} />
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
            <div className="flex items-start gap-3">
              <MaterialThumbnail category={item.category} />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <Link
                      to="/manager/materials/$materialId"
                      params={{ materialId: item.id }}
                      className="block truncate text-sm font-medium text-foreground hover:underline"
                    >
                      {item.name}
                    </Link>
                    <p className="truncate font-mono text-[12px] text-muted-foreground">
                      {item.code} · {item.brand}
                    </p>
                  </div>
                  <MaterialRowActions item={item} {...actions} />
                </div>

                <div className="mt-2.5 flex flex-wrap items-center gap-2">
                  <StatusBadge tone={MATERIAL_STATUS_TONE[item.status]} label={item.status} />
                  <StatusBadge tone="neutral" label={item.category} dot={false} />
                </div>

                <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]">
                  <MobileField label="Unit price" value={formatTaka(item.sellingPrice)} />
                  <MobileField label="Available" value={`${item.quantity} ${item.unit}`} />
                  <MobileField label="Min stock" value={`${item.minStock} ${item.unit}`} />
                  <MobileField label="Location" value={item.location} />
                  <MobileField label="Supplier" value={item.supplier.name} />
                  <MobileField label="Branch" value={item.branch} />
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

export function StockLevel({ item }: { item: Material }) {
  const critical = item.quantity === 0;
  const low = !critical && item.quantity <= item.minStock;
  return (
    <span
      className={cn(
        "inline-flex items-center justify-end gap-1.5 font-medium tabular-nums",
        critical && "text-danger",
        low && "text-warning",
        !critical && !low && "text-foreground",
      )}
    >
      {item.quantity}
      <span className="text-[12px] font-normal text-muted-foreground">{item.unit}</span>
    </span>
  );
}

function MaterialCell({ column, item }: { column: MaterialColumnKey; item: Material }) {
  switch (column) {
    case "code":
      return (
        <Link
          to="/manager/materials/$materialId"
          params={{ materialId: item.id }}
          className="whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline"
        >
          {item.code}
        </Link>
      );
    case "image":
      return <MaterialThumbnail category={item.category} />;
    case "name":
      return (
        <div className="min-w-0 max-w-[260px]">
          <Link
            to="/manager/materials/$materialId"
            params={{ materialId: item.id }}
            className="block truncate font-medium text-foreground hover:underline"
          >
            {item.name}
          </Link>
          <p className="truncate text-[12px] text-muted-foreground">{item.brand}</p>
        </div>
      );
    case "category":
      return <span className="whitespace-nowrap text-muted-foreground">{item.category}</span>;
    case "unitPrice":
      return (
        <div className="whitespace-nowrap">
          <p className="font-medium tabular-nums text-foreground">
            {formatTaka(item.sellingPrice)}
          </p>
          <p className="text-[12px] text-muted-foreground">
            cost {formatTaka(item.purchasePrice)}
          </p>
        </div>
      );
    case "quantity":
      return <StockLevel item={item} />;
    case "minStock":
      return (
        <span className="whitespace-nowrap tabular-nums text-muted-foreground">
          {item.minStock}
        </span>
      );
    case "location":
      return (
        <div className="min-w-0 max-w-[190px]">
          <p className="truncate text-foreground">{item.location}</p>
          <p className="truncate text-[12px] text-muted-foreground">{item.branch}</p>
        </div>
      );
    case "supplier":
      return (
        <div className="min-w-0 max-w-[210px]">
          <p className="truncate text-foreground">{item.supplier.name}</p>
          <p className="truncate font-mono text-[12px] text-muted-foreground">
            {item.supplier.phone}
          </p>
        </div>
      );
    case "status":
      return <StatusBadge tone={MATERIAL_STATUS_TONE[item.status]} label={item.status} />;
    default:
      return null;
  }
}
