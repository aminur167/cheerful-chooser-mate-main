import { createFileRoute } from "@tanstack/react-router";
import { LayoutGrid } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { EmptyState } from "@/components/common/empty-state";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/super-admin/")({
  head: () => ({
    meta: [
      { title: "Super Admin workspace — Speech Therapy ERP" },
      { name: "description", content: "Organisation-wide workspace shell for the Speech Therapy ERP platform." },
      { property: "og:title", content: "Super Admin workspace — Speech Therapy ERP" },
      { property: "og:description", content: "Organisation-wide workspace shell for the Speech Therapy ERP platform." },
    ],
  }),
  component: SuperAdminHome,
});

function SuperAdminHome() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Super Admin workspace"
        description="Placeholder route group. Organisation-wide modules will mount here."
        actions={<Button variant="outline">Placeholder action</Button>}
      />
      <EmptyState
        icon={LayoutGrid}
        title="No modules mounted yet"
        description="The application shell, design tokens and reusable components are ready. Business modules will be added in later iterations."
        action={<Button>Primary action</Button>}
        secondaryAction={<Button variant="ghost">Learn more</Button>}
      />
    </div>
  );
}
