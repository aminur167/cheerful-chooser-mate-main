import { CalendarDays } from "lucide-react";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { StatusBadge } from "@/components/common/status-badge";
import { DataTable, type Column } from "@/components/tables/data-table";
import {
  UPCOMING_APPOINTMENTS,
  type UpcomingAppointment,
} from "@/constants/manager-dashboard-data";

const columns: Column<UpcomingAppointment>[] = [
  {
    key: "time",
    header: "Time",
    cell: (row) => <span className="tabular-nums text-muted-foreground">{row.time}</span>,
  },
  {
    key: "patient",
    header: "Patient",
    cell: (row) => <span className="font-medium text-foreground">{row.patient}</span>,
  },
  { key: "therapy", header: "Therapy type", cell: (row) => row.therapy },
  {
    key: "therapist",
    header: "Therapist",
    cell: (row) => <span className="text-muted-foreground">{row.therapist}</span>,
  },
  {
    key: "status",
    header: "Status",
    align: "right",
    cell: (row) => <StatusBadge tone={row.status.tone} label={row.status.label} />,
  },
];

export function UpcomingAppointments() {
  return (
    <WidgetCard
      title="Upcoming Appointments"
      description="Next scheduled sessions for today"
      icon={CalendarDays}
      contentClassName="px-0 pb-0"
    >
      <DataTable
        columns={columns}
        rows={UPCOMING_APPOINTMENTS}
        getRowId={(row) => row.id}
        caption="Upcoming appointments"
        className="rounded-none border-0 shadow-none"
        emptyTitle="No upcoming appointments"
      />
    </WidgetCard>
  );
}
