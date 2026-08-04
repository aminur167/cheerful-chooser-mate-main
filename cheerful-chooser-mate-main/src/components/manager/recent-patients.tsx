import { Users } from "lucide-react";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { StatusBadge } from "@/components/common/status-badge";
import { Button } from "@/components/ui/button";
import { DataTable, type Column } from "@/components/tables/data-table";
import { RECENT_PATIENTS, type RecentPatient } from "@/constants/manager-dashboard-data";

const columns: Column<RecentPatient>[] = [
  {
    key: "code",
    header: "Patient ID",
    cell: (row) => <span className="font-mono text-[12.5px] text-muted-foreground">{row.code}</span>,
  },
  {
    key: "name",
    header: "Patient name",
    cell: (row) => <span className="font-medium text-foreground">{row.name}</span>,
  },
  { key: "guardian", header: "Guardian", cell: (row) => row.guardian },
  {
    key: "phone",
    header: "Phone",
    cell: (row) => <span className="tabular-nums text-muted-foreground">{row.phone}</span>,
  },
  { key: "package", header: "Current package", cell: (row) => row.packageName },
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
      </Button>
    ),
  },
];

export function RecentPatients() {
  return (
    <WidgetCard
      title="Recent Patients"
      description="Latest registrations and visits at this branch"
      icon={Users}
      contentClassName="px-0 pb-0"
    >
      <DataTable
        columns={columns}
        rows={RECENT_PATIENTS}
        getRowId={(row) => row.id}
        caption="Recent patients"
        className="rounded-none border-0 shadow-none"
        emptyTitle="No patients yet"
      />
    </WidgetCard>
  );
}
