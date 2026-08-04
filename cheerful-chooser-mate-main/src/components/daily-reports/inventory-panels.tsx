import { AlertTriangle, ArrowLeftRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { StatusBadge, type StatusTone } from "@/components/common/status-badge";
import { StatCard } from "@/components/daily-reports/daily-widgets";
import {
  INVENTORY_CARDS,
  INVENTORY_MOVEMENTS,
  LOW_STOCK_TODAY,
  type InventoryMovement,
} from "@/constants/daily-report-data";

const HEAD_CLASS =
  "sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur";

const MOVEMENT_TONE: Record<InventoryMovement["type"], StatusTone> = {
  "Stock In": "success",
  "Stock Out": "info",
  Used: "warning",
};

export function InventoryCards() {
  return (
    <section
      aria-label="Inventory movement summary"
      className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {INVENTORY_CARDS.map((card) => (
        <StatCard
          key={card.id}
          label={card.label}
          value={card.value}
          hint={card.hint}
          icon={card.icon}
          tone={card.tone}
        />
      ))}
    </section>
  );
}

export function InventoryMovementTable({
  rows = INVENTORY_MOVEMENTS,
}: {
  rows?: InventoryMovement[];
}) {
  return (
    <WidgetCard
      title="Today's Stock Movement"
      description="Every stock entry, issue and consumption logged today"
      icon={ArrowLeftRight}
      contentClassName="px-0 pb-0"
    >
      <div className="hidden overflow-auto md:block">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              {["Item", "Category", "Type", "Quantity", "Value", "Handled By", "Time"].map(
                (head) => (
                  <TableHead key={head} className={HEAD_CLASS}>
                    {head}
                  </TableHead>
                ),
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="px-5 text-sm font-medium text-foreground">
                  {row.item}
                </TableCell>
                <TableCell className="px-5 text-[13px] text-muted-foreground">
                  {row.category}
                </TableCell>
                <TableCell className="px-5">
                  <StatusBadge tone={MOVEMENT_TONE[row.type]} label={row.type} />
                </TableCell>
                <TableCell className="px-5 font-medium tabular-nums text-foreground">
                  {row.quantity}
                </TableCell>
                <TableCell className="px-5 tabular-nums text-foreground">{row.value}</TableCell>
                <TableCell className="px-5 text-[13px] text-muted-foreground">
                  {row.handledBy}
                </TableCell>
                <TableCell className="px-5 text-[13px] tabular-nums text-muted-foreground">
                  {row.time}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <ul className="divide-y divide-border md:hidden">
        {rows.map((row) => (
          <li key={row.id} className="space-y-2 px-4 py-4">
            <div className="flex items-start justify-between gap-3">
              <p className="min-w-0 text-sm font-medium text-foreground">{row.item}</p>
              <StatusBadge tone={MOVEMENT_TONE[row.type]} label={row.type} />
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-muted-foreground">
              <span>{row.category}</span>
              <span className="font-medium tabular-nums text-foreground">{row.quantity}</span>
              <span className="tabular-nums">{row.value}</span>
              <span>{row.handledBy}</span>
              <span className="tabular-nums">{row.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </WidgetCard>
  );
}

export function LowStockTodayPanel() {
  return (
    <WidgetCard
      title="Low Stock Alerts"
      description="Items below reorder level today"
      icon={AlertTriangle}
    >
      <ul className="space-y-3.5">
        {LOW_STOCK_TODAY.map((item) => {
          const pct = Math.min(100, Math.round((item.remaining / item.reorder) * 100));
          return (
            <li key={item.id} className="space-y-1.5">
              <div className="flex items-baseline justify-between gap-2 text-[13px]">
                <span className="min-w-0 truncate font-medium text-foreground">{item.item}</span>
                <span className="shrink-0 tabular-nums text-muted-foreground">
                  {item.remaining} / {item.reorder}
                </span>
              </div>
              <Progress value={pct} className="h-1.5" />
            </li>
          );
        })}
      </ul>
    </WidgetCard>
  );
}
