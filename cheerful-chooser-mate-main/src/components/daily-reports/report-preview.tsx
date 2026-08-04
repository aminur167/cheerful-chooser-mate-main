import { Building2, FileText, Printer } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { formatTaka } from "@/constants/dashboard-data";
import { ManagerNotesSummary } from "@/components/daily-reports/manager-notes";
import {
  DAILY_BRANCH,
  TODAY_LABEL,
  TODAYS_REPORT,
  type DailyReport,
} from "@/constants/daily-report-data";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-dashed border-border py-2 last:border-0">
      <span className="min-w-0 text-[12.5px] text-muted-foreground">{label}</span>
      <span className="shrink-0 text-[13px] font-medium tabular-nums text-foreground">{value}</span>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-border p-4">
      <h3 className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        {title}
      </h3>
      <div className="mt-2">{children}</div>
    </section>
  );
}

/** Printable end-of-day report preview (visual only). */
export function ReportPreview({ report = TODAYS_REPORT }: { report?: DailyReport }) {
  return (
    <article className="space-y-5 rounded-xl bg-card p-1 print:p-0">
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-4">
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
            <Building2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-[17px] font-semibold tracking-tight text-foreground">
              {DAILY_BRANCH.name}
            </h2>
            <p className="text-[12.5px] text-muted-foreground">{DAILY_BRANCH.address}</p>
            <p className="text-[12.5px] text-muted-foreground">
              {DAILY_BRANCH.code} · {DAILY_BRANCH.phone}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-muted-foreground">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            Daily Operations Report
          </p>
          <p className="mt-1 text-sm font-semibold text-foreground">{report.code}</p>
          <p className="text-[12.5px] text-muted-foreground">{TODAY_LABEL}</p>
        </div>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        <Block title="Daily Statistics">
          <Row label="Working hours" value={report.workingHours} />
          <Row label="Opening / closing" value={`${report.openingTime} – ${report.closingTime}`} />
          <Row label="Patients served" value={String(report.patientsServed)} />
          <Row label="New registrations" value={String(report.newRegistrations)} />
          <Row label="Follow-up calls" value={String(report.followUps)} />
          <Row label="Outdoor visits" value={String(report.outdoorVisits)} />
        </Block>

        <Block title="Clinical Summary">
          <Row label="Assessments" value={String(report.assessments)} />
          <Row label="Individual therapy" value={String(report.individualSessions)} />
          <Row label="Group therapy" value={String(report.groupSessions)} />
          <Row label="Completed sessions" value={String(report.completedSessions)} />
          <Row label="Missed sessions" value={String(report.missedSessions)} />
          <Row label="Cancelled sessions" value={String(report.cancelledSessions)} />
        </Block>

        <Block title="Financial Summary">
          <Row label="Today's collection" value={formatTaka(report.collection)} />
          <Row label="Due collected" value={formatTaka(report.dueCollected)} />
          <Row label="Discounts" value={formatTaka(report.discounts)} />
          <Row label="Pending due" value={formatTaka(report.pendingDue)} />
          <Row label="Collection target" value={formatTaka(report.targetCollection)} />
        </Block>

        <Block title="Inventory Summary">
          <Row label="Stock in" value={`${report.stockIn} units`} />
          <Row label="Stock out" value={`${report.stockOut} units`} />
          <Row label="Materials used" value={`${report.materialsUsed} items`} />
          <Row label="Low stock items" value={String(report.lowStock)} />
          <Row label="Performance score" value={`${report.performanceScore}%`} />
        </Block>
      </div>

      <Block title="Manager Notes">
        <ManagerNotesSummary notes={report.notes} />
      </Block>

      <Separator />

      <footer className="grid gap-8 pt-6 sm:grid-cols-2">
        {[
          { role: "Branch Manager", name: report.manager },
          { role: "Head Office Verification", name: "—" },
        ].map((sign) => (
          <div key={sign.role} className="space-y-2">
            <div className="h-12 rounded-lg border border-dashed border-border" aria-hidden="true" />
            <p className="text-[12.5px] font-medium text-foreground">{sign.name}</p>
            <p className="text-[11.5px] uppercase tracking-[0.08em] text-muted-foreground">
              {sign.role} signature
            </p>
          </div>
        ))}
      </footer>

      <p className="flex items-center gap-1.5 text-[11.5px] text-muted-foreground">
        <Printer className="h-3.5 w-3.5" aria-hidden="true" />
        Print / PDF export is a placeholder in this preview.
      </p>
    </article>
  );
}
