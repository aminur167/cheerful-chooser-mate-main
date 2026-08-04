import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { TherapyWizard } from "@/components/therapy/therapy-wizard";

export const Route = createFileRoute("/manager/therapy/new")({
  head: () => ({
    meta: [
      { title: "Schedule Therapy — Speech Therapy ERP" },
      {
        name: "description",
        content:
          "Schedule a new individual or group therapy session step by step: patient, therapy details, therapist assignment and session goals.",
      },
      { property: "og:title", content: "Schedule Therapy — Speech Therapy ERP" },
      {
        property: "og:description",
        content:
          "Schedule a new individual or group therapy session step by step: patient, therapy details, therapist assignment and session goals.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: NewTherapySessionPage,
});

function NewTherapySessionPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Schedule Therapy"
        description="Complete five guided steps to schedule a therapy session."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Therapy Management", to: "/manager/therapy" },
          { label: "Schedule Therapy" },
        ]}
        actions={
          <Button variant="outline" asChild>
            <Link to="/manager/therapy">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back
            </Link>
          </Button>
        }
      />

      <TherapyWizard />
    </div>
  );
}
