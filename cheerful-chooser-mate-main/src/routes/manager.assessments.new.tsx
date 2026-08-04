import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { AssessmentWizard } from "@/components/assessments/assessment-wizard";

export const Route = createFileRoute("/manager/assessments/new")({
  head: () => ({
    meta: [
      { title: "New Assessment — Speech Therapy ERP" },
      {
        name: "description",
        content:
          "Record a new clinical assessment step by step: patient selection, evaluation, diagnosis, therapy recommendation and treatment plan.",
      },
      { property: "og:title", content: "New Assessment — Speech Therapy ERP" },
      {
        property: "og:description",
        content:
          "Record a new clinical assessment step by step: patient selection, evaluation, diagnosis, therapy recommendation and treatment plan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: NewAssessmentPage,
});

function NewAssessmentPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="New Assessment"
        description="Complete seven guided steps to record a full clinical assessment."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Assessment Management", to: "/manager/assessments" },
          { label: "New Assessment" },
        ]}
        actions={
          <Button variant="outline" asChild>
            <Link to="/manager/assessments">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back
            </Link>
          </Button>
        }
      />

      <AssessmentWizard />
    </div>
  );
}
