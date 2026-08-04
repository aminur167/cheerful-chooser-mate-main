import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarPlus, MapPinned } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScheduleVisitDialog } from "@/components/outdoor/schedule-visit-dialog";
import {
  AreaCoverageWidget,
  TherapistAvailabilityWidget,
  TodaysScheduleWidget,
} from "@/components/outdoor/outdoor-widgets";

const TITLE = "Schedule Outdoor Visit — Speech Therapy ERP";
const DESCRIPTION =
  "Schedule a home visit, school visit, community program or special camp for an outdoor therapy patient in five guided steps.";

export const Route = createFileRoute("/manager/outdoor/new")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewOutdoorVisitPage,
});

const STEP_HINTS = [
  { step: 1, title: "Select Patient", hint: "Search patient, guardian, diagnosis and plan" },
  { step: 2, title: "Visit Information", hint: "Type, date, time, duration, priority, purpose" },
  { step: 3, title: "Location", hint: "Division, district, area, address, map link" },
  { step: 4, title: "Assign Therapist", hint: "Therapist, support staff, vehicle, equipment" },
  { step: 5, title: "Review", hint: "Save draft or schedule the visit" },
];

function NewOutdoorVisitPage() {
  const [open, setOpen] = useState(true);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Schedule Outdoor Visit"
        description="Plan an outdoor therapy visit in five guided steps."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Outdoor Service", to: "/manager/outdoor" },
          { label: "Schedule Visit" },
        ]}
        actions={
          <>
            <Button variant="outline" asChild>
              <Link to="/manager/outdoor">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to visits
              </Link>
            </Button>
            <Button onClick={() => setOpen(true)}>
              <CalendarPlus className="h-4 w-4" aria-hidden="true" />
              Open wizard
            </Button>
          </>
        }
      />

      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <MapPinned className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h2 className="text-[15px] font-semibold tracking-tight text-foreground">
                Five-step scheduling
              </h2>
              <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                Choose the patient, describe the visit, confirm the location, assign the field team,
                then review before scheduling.
              </p>
            </div>
          </div>

          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {STEP_HINTS.map((item) => (
              <li
                key={item.step}
                className="flex items-start gap-3 rounded-xl border border-border bg-muted/25 p-4"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border bg-background text-[12px] font-semibold text-muted-foreground">
                  {item.step}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">{item.title}</p>
                  <p className="mt-0.5 text-[12.5px] text-muted-foreground">{item.hint}</p>
                </div>
              </li>
            ))}
          </ol>

          <Button className="mt-6" onClick={() => setOpen(true)}>
            <CalendarPlus className="h-4 w-4" aria-hidden="true" />
            Schedule Outdoor Visit
          </Button>
        </Card>

        <aside className="space-y-6" aria-label="Scheduling context">
          <TodaysScheduleWidget />
          <TherapistAvailabilityWidget />
          <AreaCoverageWidget />
        </aside>
      </div>

      <ScheduleVisitDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}
