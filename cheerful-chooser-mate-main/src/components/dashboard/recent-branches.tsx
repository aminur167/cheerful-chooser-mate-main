import { Building, ChevronRight } from "lucide-react";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { DataTable, type Column } from "@/components/tables/data-table";
import { StatusBadge } from "@/components/common/status-badge";
import { Button } from "@/components/ui/button";
import { RECENT_BRANCHES, formatTaka, type RecentBranch } from "@/constants/dashboard-data";

const columns: Column<RecentBranch>[] = [
  {
    key: "branch",
    header: "Branch",
    cell: (row) => (
      <div className="min-w-0">
        <p className="truncate font-medium">{row.name}</p>
        <p className="truncate text-[12.5px] text-muted-foreground">{row.city}</p>
      </div>
    ),
  },
  {
    key: "manager",
    header: "Manager",
    cell: (row) => (
      <div className="min-w-0">
        <p className="truncate">{row.manager}</p>
        <p className="truncate text-[12.5px] text-muted-foreground">{row.managerRole}</p>
      </div>
    ),
  },
  {
    key: "patients",
    header: "Patients",
    align: "right",
    cell: (row) => <span className="tabular-nums">{row.patients}</span>,
  },
  {
    key: "revenue",
    header: "Revenue",
    align: "right",
    cell: (row) => <span className="whitespace-nowrap font-medium tabular-nums">{formatTaka(row.revenue)}</span>,
  },
  {
    key: "status",
    header: "Status",
    cell: (row) => <StatusBadge tone={row.status.tone} label={row.status.label} />,
  },
  {
    key: "action",
    header: "Action",
    align: "right",
    cell: (row) => (
      <Button variant="ghost" size="sm" aria-label={`View ${row.name}`}>
        View
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </Button>
    ),
  },
];

export function RecentBranches() {
  return (
    <WidgetCard
      title="Recent Branches"
      description="Latest locations added to the organisation"
      icon={Building}
      action={
        <Button variant="outline" size="sm">
          View all
        </Button>
      }
      contentClassName="px-0 pb-0 sm:px-0 sm:pb-0"
    >
      <DataTable
        columns={columns}
        rows={RECENT_BRANCHES}
        getRowId={(row) => row.id}
        caption="Recently created branches"
        className="rounded-none border-0 shadow-none"
      />
    </WidgetCard>
  );
}
