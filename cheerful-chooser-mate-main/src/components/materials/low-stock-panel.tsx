import { Link } from "@tanstack/react-router";
import { ArrowDownToLine, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { StatusBadge } from "@/components/common/status-badge";
import {
  LOW_STOCK_ALERTS,
  LOW_STOCK_PRIORITY_TONE,
  type LowStockAlert,
} from "@/constants/material-data";

/**
 * Alert panel for materials at or below their minimum stock level.
 * Reorder quantity is derived in the data layer (UI only, no persistence).
 */
export function LowStockPanel({
  alerts = LOW_STOCK_ALERTS,
  onStockIn,
}: {
  alerts?: LowStockAlert[];
  onStockIn?: (alert: LowStockAlert) => void;
}) {
  return (
    <WidgetCard
      title="Low stock alerts"
      description={`${alerts.length} materials need restocking`}
      icon={TriangleAlert}
      menuItems={["Raise purchase order", "Export reorder list", "Notify supplier"]}
      contentClassName="space-y-3"
    >
      {alerts.length === 0 ? (
        <p className="rounded-lg border border-dashed border-border px-4 py-8 text-center text-[13px] text-muted-foreground">
          Every material is above its minimum stock level.
        </p>
      ) : (
        <ul className="space-y-3">
          {alerts.map((alert) => (
            <li
              key={alert.id}
              className={cn(
                "rounded-xl border p-4 transition-enterprise hover:bg-surface-hover",
                alert.priority === "Critical"
                  ? "border-danger/35 bg-danger/[0.04]"
                  : alert.priority === "High"
                    ? "border-warning/35 bg-warning/[0.05]"
                    : "border-border bg-muted/25",
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <Link
                    to="/manager/materials/$materialId"
                    params={{ materialId: alert.materialId }}
                    className="block truncate text-sm font-medium text-foreground hover:underline"
                  >
                    {alert.name}
                  </Link>
                  <p className="truncate font-mono text-[12px] text-muted-foreground">
                    {alert.code} · {alert.category}
                  </p>
                </div>
                <StatusBadge
                  tone={LOW_STOCK_PRIORITY_TONE[alert.priority]}
                  label={alert.priority}
                />
              </div>

              <dl className="mt-3 grid grid-cols-3 gap-2 text-[12.5px]">
                <div className="min-w-0">
                  <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                    Current
                  </dt>
                  <dd
                    className={cn(
                      "mt-0.5 font-semibold tabular-nums",
                      alert.currentStock === 0 ? "text-danger" : "text-warning",
                    )}
                  >
                    {alert.currentStock}
                  </dd>
                </div>
                <div className="min-w-0">
                  <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                    Minimum
                  </dt>
                  <dd className="mt-0.5 font-semibold tabular-nums text-foreground">
                    {alert.minStock}
                  </dd>
                </div>
                <div className="min-w-0">
                  <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                    Required
                  </dt>
                  <dd className="mt-0.5 font-semibold tabular-nums text-primary">
                    {alert.required}
                  </dd>
                </div>
              </dl>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <p className="min-w-0 truncate text-[12px] text-muted-foreground">
                  {alert.supplier}
                </p>
                <Button variant="outline" size="sm" onClick={() => onStockIn?.(alert)}>
                  <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
                  Stock In
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </WidgetCard>
  );
}
