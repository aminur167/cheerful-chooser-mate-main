import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ArrowRight, Building2, ShieldCheck } from "lucide-react";
import { APP_NAME, APP_TAGLINE } from "@/constants/app";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Speech Therapy ERP — Multi-branch clinic management system" },
      {
        name: "description",
        content:
          "Multi-branch clinic management system for speech therapy practices.",
      },
      {
        property: "og:title",
        content: "Speech Therapy ERP — Multi-branch clinic management system",
      },
      {
        property: "og:description",
        content:
          "Multi-branch clinic management system for speech therapy practices.",
      },
    ],
  }),
  component: EntryPage,
});

const workspaces = [
  {
    icon: ShieldCheck,
    title: "Super Admin",
    description: "Organisation-wide management",
    to: "/super-admin",
  },
  {
    icon: Building2,
    title: "Branch Manager",
    description: "Manage branch operations",
    to: "/auth/login",
    search: { mode: "manager" },
  },
] as const;

function EntryPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-16 sm:px-6">
      <div className="w-full max-w-2xl text-center">
        <span className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
          <Activity className="h-6 w-6" aria-hidden="true" />
        </span>

        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {APP_NAME}
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          {APP_TAGLINE}
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {workspaces.map((workspace) => (
            <Card
              key={workspace.title}
              interactive
              className="group relative text-left"
            >
              <CardContent className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 p-5 sm:p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <workspace.icon className="h-5 w-5" aria-hidden="true" />
                </span>

                <div className="min-w-0">
                  <CardTitle className="text-base">{workspace.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {workspace.description}
                  </CardDescription>
                </div>

                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary">
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>

                <Link
                  to={workspace.to}
                  search={"search" in workspace ? workspace.search : undefined}
                  className="absolute inset-0 z-10 rounded-xl"
                  aria-label={`${workspace.title} — ${workspace.description}`}
                >
                  <span className="sr-only">Open {workspace.title}</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}