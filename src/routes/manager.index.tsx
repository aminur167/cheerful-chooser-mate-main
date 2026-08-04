import { createFileRoute } from "@tanstack/react-router";
import { LayoutGrid } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { EmptyState } from "@/components/common/empty-state";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/manager/")({
  head: () => ({
    meta: [
      { title: "Branch Manager workspace — Speech Therapy ERP" },
      { name: "description", content: "Single-branch workspace shell for the Speech Therapy ERP platform." },
      { property: "og:title", content: "Branch Manager workspace — Speech Therapy ERP" },
      { property: "og:description", content: "Single-branch workspace shell for the Speech Therapy ERP platform." },
    ],
  }),
  component: ManagerHome,
});

function ManagerHome() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Branch Manager workspace"
        description="Placeholder route group. Branch-level modules will mount here."
        actions={<Button variant="outline">Placeholder action</Button>}
      />
      <EmptyState
        icon={LayoutGrid}
        title="No modules mounted yet"
        description="This workspace reuses the same shell, navigation and component library as every other role."
        action={<Button>Primary action</Button>}
        secondaryAction={<Button variant="ghost">Learn more</Button>}
      />
    </div>
  );
}
