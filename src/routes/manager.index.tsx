import { createFileRoute } from "@tanstack/react-router";
import { Building2, KeyRound, LayoutGrid, UserRound } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { EmptyState } from "@/components/common/empty-state";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { getActiveBranch, getManagerSession } from "@/lib/manager-session";

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
  const branch = getActiveBranch();
  const session = getManagerSession();

  return (
    <div className="space-y-8">
      <PageHeader
        title={branch ? `${branch.name} workspace` : "Branch Manager workspace"}
        description={
          branch
            ? `Signed in as ${session?.managerName ?? "Branch Manager"} · ${branch.manager.managerId}`
            : "Placeholder route group. Branch-level modules will mount here."
        }
        actions={<Button variant="outline">Placeholder action</Button>}
      />

      {branch && (
        <section aria-label="Branch identity" className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="flex items-center gap-3 p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <Building2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <CardTitle className="text-sm">{branch.name}</CardTitle>
                <CardDescription className="mt-0.5 truncate">
                  {branch.city}, {branch.division}
                </CardDescription>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-3 p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <UserRound className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <CardTitle className="text-sm">{branch.manager.name}</CardTitle>
                <CardDescription className="mt-0.5 truncate">
                  Branch Manager · since {branch.manager.since}
                </CardDescription>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center gap-3 p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <KeyRound className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <CardTitle className="font-mono text-sm">{branch.manager.managerId}</CardTitle>
                <CardDescription className="mt-0.5 truncate">
                  Your unique manager key
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

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