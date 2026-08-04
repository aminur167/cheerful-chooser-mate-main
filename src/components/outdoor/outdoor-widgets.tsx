import { MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/common/status-badge";
import {
  AREA_COVERAGE,
  OUTDOOR_THERAPISTS,
  THERAPIST_STATUS_TONE,
  TODAYS_VISITS,
  UPCOMING_VISITS,
  VISIT_STATUS_TONE,
  type OutdoorTherapist,
} from "@/constants/outdoor-data";
import { formatDate } from "@/components/outdoor/outdoor-tables";

/* ---------------- Tab 3 — Therapist cards ---------------- */

export function TherapistCards({ items = OUTDOOR_THERAPISTS }: { items?: OutdoorTherapist[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((therapist) => (
        <Card key={therapist.id} interactive className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">{therapist.name}</p>
              <p className="truncate text-[12.5px] text-muted-foreground">
                {therapist.designation}
              </p>
            </div>
            <StatusBadge
              label={therapist.status}
              tone={THERAPIST_STATUS_TONE[therapist.status]}
            />
          </div>

          <dl className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-border bg-muted/25 p-3">
              <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                Today's visits
              </dt>
              <dd className="mt-0.5 text-[18px] font-semibold tabular-nums text-foreground">
                {therapist.todayVisits}
              </dd>
            </div>
            <div className="rounded-lg border border-border bg-muted/25 p-3">
              <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                Completed
              </dt>
              <dd className="mt-0.5 text-[18px] font-semibold tabular-nums text-foreground">
                {therapist.completedVisits}
              </dd>
            </div>
          </dl>

          <div className="mt-4 space-y-2">
            <p className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
              Assigned areas
            </p>
            <div className="flex flex-wrap gap-1.5">
              {therapist.areas.map((area) => (
                <StatusBadge key={area} label={area} tone="neutral" dot={false} />
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-3.5">
            <span className="inline-flex items-center gap-1.5 text-[12.5px] text-muted-foreground">
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {therapist.phone}
            </span>
            <span className="text-[12px] text-muted-foreground">{therapist.experience}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}

/* ---------------- Right sidebar widgets ---------------- */

function WidgetShell({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="p-5">
      <div className="space-y-0.5">
        <h2 className="text-[14px] font-semibold tracking-tight text-foreground">{title}</h2>
        {description ? (
          <p className="text-[12.5px] text-muted-foreground">{description}</p>
        ) : null}
      </div>
      <div className="mt-4">{children}</div>
    </Card>
  );
}

export function TodaysScheduleWidget() {
  return (
    <WidgetShell title="Today's Outdoor Schedule" description="31 July 2026">
      {TODAYS_VISITS.length === 0 ? (
        <p className="text-[13px] text-muted-foreground">No visits scheduled today.</p>
      ) : (
        <ul className="space-y-3">
          {TODAYS_VISITS.map((visit) => (
            <li
              key={visit.id}
              className="rounded-lg border border-border bg-muted/25 p-3 transition-enterprise hover:bg-surface-hover"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-medium text-foreground">
                    {visit.patientName}
                  </p>
                  <p className="truncate text-[12px] text-muted-foreground">
                    {visit.time} · {visit.type}
                  </p>
                </div>
                <StatusBadge label={visit.status} tone={VISIT_STATUS_TONE[visit.status]} />
              </div>
              <p className="mt-1.5 truncate text-[12px] text-muted-foreground">
                {visit.area} · {visit.therapistName}
              </p>
            </li>
          ))}
        </ul>
      )}
    </WidgetShell>
  );
}

export function UpcomingVisitsWidget() {
  return (
    <WidgetShell title="Upcoming Visits" description="Next scheduled field visits">
      <ul className="space-y-3">
        {UPCOMING_VISITS.slice(0, 5).map((visit) => (
          <li key={visit.id} className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-[13px] font-medium text-foreground">
                {visit.patientName}
              </p>
              <p className="truncate text-[12px] text-muted-foreground">
                {formatDate(visit.date)} · {visit.time}
              </p>
            </div>
            <span className="shrink-0 text-[12px] text-muted-foreground">{visit.area}</span>
          </li>
        ))}
      </ul>
    </WidgetShell>
  );
}

export function TherapistAvailabilityWidget() {
  return (
    <WidgetShell title="Therapist Availability" description="Field team status right now">
      <ul className="space-y-3">
        {OUTDOOR_THERAPISTS.map((therapist) => (
          <li key={therapist.id} className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-[13px] font-medium text-foreground">{therapist.name}</p>
              <p className="truncate text-[12px] text-muted-foreground">
                {therapist.todayVisits} visits today
              </p>
            </div>
            <StatusBadge
              label={therapist.status}
              tone={THERAPIST_STATUS_TONE[therapist.status]}
            />
          </li>
        ))}
      </ul>
    </WidgetShell>
  );
}

export function AreaCoverageWidget() {
  const max = Math.max(...AREA_COVERAGE.map((item) => item.visits));
  return (
    <WidgetShell title="Area Coverage" description="Visits by area this quarter">
      <ul className="space-y-3">
        {AREA_COVERAGE.map((item) => (
          <li key={item.area} className="space-y-1.5">
            <div className="flex items-center justify-between gap-3 text-[12.5px]">
              <span className="truncate text-foreground">
                {item.area}
                <span className="text-muted-foreground"> · {item.district}</span>
              </span>
              <span className="shrink-0 tabular-nums text-muted-foreground">
                {item.visits} visits
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary/70"
                style={{ width: `${(item.visits / max) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </WidgetShell>
  );
}

/* ---------------- Map placeholder ---------------- */

export function MapPlaceholderCard({
  address,
  area,
  distanceKm,
  travelTime,
  mapLink,
}: {
  address: string;
  area: string;
  distanceKm: number;
  travelTime: string;
  mapLink?: string;
}) {
  return (
    <Card className="overflow-hidden p-0">
      <div
        aria-label="Map preview placeholder"
        role="img"
        className="relative grid h-40 place-items-center border-b border-border bg-muted/40 [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] [background-size:28px_28px]"
      >
        <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary ring-4 ring-primary/10">
          <MapPin className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <div className="space-y-3 p-5">
        <div>
          <p className="text-[14px] font-semibold tracking-tight text-foreground">{area}</p>
          <p className="mt-0.5 text-[12.5px] leading-relaxed text-muted-foreground">{address}</p>
        </div>
        <dl className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-border bg-muted/25 p-3">
            <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
              Distance
            </dt>
            <dd className="mt-0.5 text-[15px] font-semibold tabular-nums text-foreground">
              {distanceKm} km
            </dd>
          </div>
          <div className="rounded-lg border border-border bg-muted/25 p-3">
            <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
              Travel time
            </dt>
            <dd className="mt-0.5 text-[15px] font-semibold text-foreground">{travelTime}</dd>
          </div>
        </dl>
        <Button variant="outline" size="sm" className="w-full" disabled>
          <MapPin className="h-4 w-4" aria-hidden="true" />
          {mapLink ? "Open map link (UI only)" : "Map integration coming soon"}
        </Button>
      </div>
    </Card>
  );
}
