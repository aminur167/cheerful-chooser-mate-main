import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  ShoppingCart,
  SlidersHorizontal,
  TriangleAlert,
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
import { StatusBadge } from "@/components/common/status-badge";
import { formatDate } from "@/lib/format";
import {
  MOVEMENT_ICON,
  MOVEMENT_TONE,
  type MovementType,
  type StockMovement,
} from "@/constants/material-data";

/** Serializable icon keys mapped to components in the view layer. */
const ICONS: Record<"in" | "out" | "adjust" | "sale" | "damaged", LucideIcon> = {
  in: ArrowDownToLine,
  out: ArrowUpFromLine,
  adjust: SlidersHorizontal,
  sale: ShoppingCart,
  damaged: TriangleAlert,
};

const ICON_TONE: Record<MovementType, string> = {
  "Stock In": "border-success/40 bg-success/12 text-success",
  "Stock Out": "border-warning/40 bg-warning/15 text-warning",
  Adjustment: "border-primary/40 bg-primary/10 text-primary",
  Sale: "border-primary/40 bg-primary/10 text-primary",
  Damaged: "border-danger/40 bg-danger/12 text-danger",
};

export function MovementIcon({ type }: { type: MovementType }) {
  const Icon = ICONS[MOVEMENT_ICON[type]];
  return (
    <span
      className={cn(
        "grid h-8 w-8 shrink-0 place-items-center rounded-lg border",
        ICON_TONE[type],
      )}
      aria-hidden="true"
    >
      <Icon className="h-4 w-4" />
    </span>
  );
}

function QuantityDelta({ quantity }: { quantity: number }) {
  return (
    <span
      className={cn(
        "whitespace-nowrap font-semibold tabular-nums",
        quantity > 0 ? "text-success" : "text-danger",
      )}
    >
      {quantity > 0 ? `+${quantity}` : quantity}
    </span>
  );
}

/** Timeline-style stock history table. */
export function StockHistoryTable({ rows }: { rows: StockMovement[] }) {
  return (
    <>
      <div className="hidden overflow-auto md:block" style={{ maxHeight: "660px" }}>
        <Table>
          <caption className="sr-only">Stock movement history</caption>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              {["Movement", "Material", "Quantity", "Balance", "Reference", "Handled By", "Date"].map(
                (label, index) => (
                  <TableHead
                    key={label}
                    scope="col"
                    className={cn(
                      "sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
                      (index === 2 || index === 3) && "text-right",
                    )}
                  >
                    {label}
                  </TableHead>
                ),
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((item) => (
              <TableRow
                key={item.id}
                className="border-border transition-enterprise hover:bg-surface-hover"
              >
                <TableCell className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <MovementIcon type={item.type} />
                    <StatusBadge tone={MOVEMENT_TONE[item.type]} label={item.type} />
                  </div>
                </TableCell>
                <TableCell className="px-5 py-3.5 text-sm">
                  <div className="min-w-0 max-w-[260px]">
                    <Link
                      to="/manager/materials/$materialId"
                      params={{ materialId: item.materialId }}
                      className="block truncate font-medium text-foreground hover:underline"
                    >
                      {item.materialName}
                    </Link>
                    <p className="truncate font-mono text-[12px] text-muted-foreground">
                      {item.materialCode}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="px-5 py-3.5 text-right text-sm">
                  <QuantityDelta quantity={item.quantity} />
                </TableCell>
                <TableCell className="px-5 py-3.5 text-right text-sm tabular-nums text-muted-foreground">
                  {item.balance}
                </TableCell>
                <TableCell className="px-5 py-3.5 text-sm">
                  <p className="whitespace-nowrap font-mono text-[12.5px] text-foreground">
                    {item.reference}
                  </p>
                  <p className="max-w-[280px] truncate text-[12px] text-muted-foreground">
                    {item.note}
                  </p>
                </TableCell>
                <TableCell className="px-5 py-3.5 text-sm text-muted-foreground">
                  {item.by}
                </TableCell>
                <TableCell className="whitespace-nowrap px-5 py-3.5 text-sm text-muted-foreground">
                  {formatDate(item.date)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile timeline list */}
      <ul className="divide-y divide-border md:hidden">
        {rows.map((item) => (
          <li key={item.id} className="flex items-start gap-3 px-4 py-4">
            <MovementIcon type={item.type} />
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <p className="truncate text-sm font-medium text-foreground">{item.materialName}</p>
                <QuantityDelta quantity={item.quantity} />
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <StatusBadge tone={MOVEMENT_TONE[item.type]} label={item.type} />
                <span className="font-mono text-[12px] text-muted-foreground">
                  {item.reference}
                </span>
              </div>
              <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">
                {item.note}
              </p>
              <p className="mt-1.5 text-[12px] text-muted-foreground/80">
                {item.by} · {formatDate(item.date)} · balance {item.balance}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

/** Vertical movement timeline used on the material details page. */
export function StockMovementTimeline({ items }: { items: StockMovement[] }) {
  return (
    <ol className="relative space-y-6 border-l border-border pl-6">
      {items.map((item) => {
        const Icon = ICONS[MOVEMENT_ICON[item.type]];
        return (
          <li key={item.id} className="relative">
            <span
              className={cn(
                "absolute -left-[37px] grid h-[26px] w-[26px] place-items-center rounded-full border",
                ICON_TONE[item.type],
              )}
              aria-hidden="true"
            >
              <Icon className="h-3.5 w-3.5" />
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <p className="text-sm font-medium text-foreground">
                {item.type} · <QuantityDelta quantity={item.quantity} />
              </p>
              <p className="text-[12.5px] text-muted-foreground">{formatDate(item.date)}</p>
            </div>
            <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{item.note}</p>
            <p className="mt-1.5 text-[12px] text-muted-foreground/80">
              {item.reference} · by {item.by} · balance {item.balance}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
