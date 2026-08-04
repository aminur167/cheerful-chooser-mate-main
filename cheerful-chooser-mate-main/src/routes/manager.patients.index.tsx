import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Download, Plus, Upload, UsersRound } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { EmptyState } from "@/components/common/empty-state";
import { Button } from "@/components/ui/button";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { TablePagination } from "@/components/tables/table-pagination";
import { PatientTable } from "@/components/patients/patient-table";
import {
  PatientFilters,
  DEFAULT_PATIENT_FILTERS,
  type PatientFilterState,
} from "@/components/patients/patient-filters";
import { RegisterPatientDialog } from "@/components/patients/register-patient-dialog";
import {
  DEFAULT_VISIBLE_COLUMNS,
  type PatientColumnKey,
} from "@/components/patients/patient-columns";
import { PATIENTS, PATIENT_KPIS } from "@/constants/patient-data";

const PAGE_SIZE = 8;

export const Route = createFileRoute("/manager/patients/")({
  head: () => ({
    meta: [
      { title: "Patient Management — Speech Therapy ERP" },
      {
        name: "description",
        content:
          "Central patient CRM for the clinic: registrations, therapy journeys, packages, payment status and follow-ups in one enterprise console.",
      },
      { property: "og:title", content: "Patient Management — Speech Therapy ERP" },
      {
        property: "og:description",
        content:
          "Central patient CRM for the clinic: registrations, therapy journeys, packages, payment status and follow-ups in one enterprise console.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PatientManagementPage,
});

function withinRange(registeredAt: string, range: string) {
  if (range === "all") return true;
  const days = range === "30d" ? 30 : range === "90d" ? 90 : 365;
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
  return new Date(registeredAt).getTime() >= cutoff;
}

function PatientManagementPage() {
  const [filters, setFilters] = useState<PatientFilterState>(DEFAULT_PATIENT_FILTERS);
  const [page, setPage] = useState(1);
  const [createOpen, setCreateOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [visibleColumns, setVisibleColumns] =
    useState<PatientColumnKey[]>(DEFAULT_VISIBLE_COLUMNS);

  const filtered = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    return PATIENTS.filter((patient) => {
      const matchesQuery =
        !query ||
        [patient.name, patient.code, patient.phone, patient.guardian.phone, patient.guardian.name]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return (
        matchesQuery &&
        (filters.status === "all" || patient.status === filters.status) &&
        (filters.therapyType === "all" || patient.program.therapyType === filters.therapyType) &&
        (filters.paymentType === "all" || patient.billing.paymentType === filters.paymentType) &&
        (filters.gender === "all" || patient.gender === filters.gender) &&
        (filters.branch === "all" || patient.branch === filters.branch) &&
        withinRange(patient.registeredAt, filters.range)
      );
    });
  }, [filters]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const rows = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const refresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 700);
  };

  const toggleColumn = (key: PatientColumnKey) =>
    setVisibleColumns((current) =>
      current.includes(key) ? current.filter((item) => item !== key) : [...current, key],
    );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Patient Management"
        description="Manage all patients, registrations and therapy journeys."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Patient Management" },
        ]}
        actions={
          <>
            <Button variant="outline" disabled title="Import arrives with the data migration tool">
              <Upload className="h-4 w-4" aria-hidden="true" />
              Import
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4" aria-hidden="true" />
              Export
            </Button>
            <Button onClick={() => setCreateOpen(true)}>
              <Plus className="h-4 w-4" aria-hidden="true" />
              Register Patient
            </Button>
          </>
        }
      />

      <section
        aria-label="Patient summary"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6"
      >
        {PATIENT_KPIS.map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} />
        ))}
      </section>

      <section
        aria-label="Patients"
        className="overflow-hidden rounded-xl border border-border bg-card shadow-card"
      >
        <PatientFilters
          value={filters}
          onChange={(next) => {
            setFilters(next);
            setPage(1);
          }}
          onRefresh={refresh}
          isRefreshing={refreshing}
          visibleColumns={visibleColumns}
          onToggleColumn={toggleColumn}
        />

        {rows.length === 0 ? (
          <EmptyState
            icon={UsersRound}
            title="No Patients Found"
            description="Start by registering your first patient. Registered patients appear here with therapy progress, packages and payment status."
            action={
              <Button onClick={() => setCreateOpen(true)}>
                <Plus className="h-4 w-4" aria-hidden="true" />
                Register Patient
              </Button>
            }
            secondaryAction={
              <Button variant="ghost" onClick={() => setFilters(DEFAULT_PATIENT_FILTERS)}>
                Reset filters
              </Button>
            }
            className="rounded-none border-0 shadow-none"
          />
        ) : (
          <>
            <PatientTable rows={rows} visibleColumns={visibleColumns} />
            <div className="border-t border-border px-4 py-3.5 sm:px-5">
              <TablePagination
                page={currentPage}
                pageSize={PAGE_SIZE}
                total={filtered.length}
                onPageChange={setPage}
              />
            </div>
          </>
        )}
      </section>

      <RegisterPatientDialog open={createOpen} onOpenChange={setCreateOpen} />
    </div>
  );
}
