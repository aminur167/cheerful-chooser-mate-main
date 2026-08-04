import { Package } from "lucide-react";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { StatusBadge } from "@/components/common/status-badge";
import { DataTable, type Column } from "@/components/tables/data-table";
import { INVENTORY_ALERTS, type InventoryItem } from "@/constants/manager-dashboard-data";

const columns: Column<InventoryItem>[] = [
  {
    key: "item",
    header: "Item",
    cell: (row) => <span className="font-medium text-foreground">{row.item}</span>,
  },
  {
    key: "stock",
    header: "Stock",
    align: "right",
    cell: (row) => <span className="tabular-nums">{row.stock}</span>,
  },
  {
    key: "minimum",
    header: "Minimum stock",
    align: "right",
    cell: (row) => <span className="tabular-nums text-muted-foreground">{row.minimum}</span>,
  },
  {
    key: "status",
    header: "Status",
    align: "right",
    cell: (row) => <StatusBadge tone={row.status.tone} label={row.status.label} />,
  },
];

export function InventoryAlerts() {
  return (
    <WidgetCard
      title="Inventory Alert"
      description="Items at or below minimum stock level"
      icon={Package}
      contentClassName="px-0 pb-0"
    >
      <DataTable
        columns={columns}
        rows={INVENTORY_ALERTS}
        getRowId={(row) => row.id}
        caption="Inventory alerts"
        className="rounded-none border-0 shadow-none"
        emptyTitle="Stock levels are healthy"
      />
    </WidgetCard>
  );
}
