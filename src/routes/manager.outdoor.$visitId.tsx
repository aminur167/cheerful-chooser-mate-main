import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  MapPinned,
  Printer,
  UserRound,
} from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { StatusBadge } from "@/components/common/status-badge";
import {
  AreaCoverageWidget,
  MapPlaceholderCard,
  TherapistAvailabilityWidget,
  UpcomingVisitsWidget,
} from "@/components/outdoor/outdoor-widgets";
import {
  OUTDOOR_VISITS,
  VISIT_OUTCOME_TONE,
  VISIT_PRIORITY_TONE,
  VISIT_STATUS_TONE,
  type OutdoorVisit,
} from "@/constants/outdoor-data";

export const Route = createFileRoute("/manager/outdoor/$visitId")({
  loader: ({ params }) => {
    const visit = OUTDOOR_VISITS.find(
      (item) => item.id === params.visitId || item.visitId === params.visitId,
    );
    if (!visit) throw notFound();
    return { visit };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Outdoor visit unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.visit.visitId} — Outdoor Visit for ${loaderData.visit.patientName}`;
    const description = `${loaderData.visit.type} on ${loaderData.visit.date} at ${loaderData.visit.time} in ${loaderData.visit.area}, handled by ${loaderData.visit.therapistName}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  component: OutdoorVisitDetailPage,
});

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-dashed border-border py-2 last:border-0">
      <dt className="min-w-0 text-[12.5px] text-muted-foreground">{label}</dt>
      <dd className="shrink-0 text-[13px] font-medium text-foreground">{value}</dd>
    </div>
  );
}

function OutdoorVisitDetailPage() {
  const { visit } = Route.useLoaderData() as { visit: OutdoorVisit };

  return (
    <div className="space-y-8">
      <PageHeader
        title={`${visit.visitId} · ${visit.patientName}`}
        description={`${visit.type} in ${visit.area}, ${visit.district} on ${visit.date} at ${visit.time}.`}
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Outdoor Service", to: "/manager/outdoor" },
          { label: visit.visitId },
        ]}
        actions={
          <>
            <Button variant="outline" asChild>
              <Link to="/manager/outdoor">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back
              </Link>
            </Button>
            <Button variant="outline">
              <Printer className="h-4 w-4" aria-hidden="true" />
              Print Visit Sheet
            </Button>
            <Button>
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              Complete Visit
            </Button>
          </>
        }
      />

      <div className="grid items-start gap-6 2xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0 space-y-6">
          <Card className="flex flex-wrap items-start justify-between gap-4 p-5">
            <div className="flex min-w-0 items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <UserRound className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h2 className="text-[16px] font-semibold tracking-tight text-foreground">
                  {visit.patientName}
                </h2>
                <p className="mt-1 text-[12.5px] text-muted-foreground">
                  Guardian: {visit.guardian} ({visit.guardianRelation}) · {visit.guardianPhone}
                </p>
                <p className="text-[12.5px] text-muted-foreground">{visit.address}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <StatusBadge tone={VISIT_STATUS_TONE[visit.status]} label={visit.status} />
              <StatusBadge tone={VISIT_PRIORITY_TONE[visit.priority]} label={visit.priority} />
              {visit.outcome ? (
                <StatusBadge tone={VISIT_OUTCOME_TONE[visit.outcome]} label={visit.outcome} />
              ) : null}
            </div>
          </Card>

          <div className="grid gap-6 xl:grid-cols-2">
            <WidgetCard title="Visit Information" icon={CalendarClock} showMenu={false}>
              <dl>
                <InfoRow label="Visit type" value={visit.type} />
                <InfoRow label="Date" value={visit.date} />
                <InfoRow label="Time" value={visit.time} />
                <InfoRow label="Duration" value={visit.duration} />
                <InfoRow label="Purpose" value={visit.purpose} />
                <InfoRow label="Therapist" value={visit.therapistName} />
                <InfoRow label="Transport" value={visit.vehicle} />
                <InfoRow label="Support staff" value={visit.supportStaff} />
              </dl>
            </WidgetCard>

            <WidgetCard title="Location" icon={MapPinned} showMenu={false}>
              <dl>
                <InfoRow label="Division" value={visit.division} />
                <InfoRow label="District" value={visit.district} />
                <InfoRow label="Area" value={visit.area} />
                <InfoRow label="Address" value={visit.address} />
                <InfoRow label="Distance" value={`${visit.distanceKm} km`} />
                <InfoRow label="Travel time" value={visit.travelTime} />
              </dl>
            </WidgetCard>
          </div>

          <MapPlaceholderCard
            address={visit.address}
            area={`${visit.area}, ${visit.district}`}
            distanceKm={visit.distanceKm}
            travelTime={visit.travelTime}
            mapLink={visit.mapLink}
          />

          <div className="grid gap-6 xl:grid-cols-2">
            <WidgetCard title="Visit Outcome" icon={ClipboardCheck} showMenu={false}>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                {visit.notes || "Outcome notes will appear after the visit is completed."}
              </p>
            </WidgetCard>
            <WidgetCard title="Recommendations" icon={CheckCircle2} showMenu={false}>
              <ul className="space-y-2.5">
                {(visit.recommendations.length ? visit.recommendations : ["Recommendations pending visit completion."]).map(
                  (item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] text-foreground">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-success"
                        aria-hidden="true"
                      />
                      <span className="min-w-0">{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </WidgetCard>
          </div>
        </div>

        <aside className="space-y-6" aria-label="Outdoor visit widgets">
          <UpcomingVisitsWidget />
          <TherapistAvailabilityWidget />
          <AreaCoverageWidget />
        </aside>
      </div>
    </div>
  );
}
