import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Building2,
  Layers,
  MoonStar,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { APP_NAME, APP_TAGLINE } from "@/constants/app";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/common/theme-toggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Speech Therapy ERP — Multi-branch clinic platform" },
      {
        name: "description",
        content:
          "Frontend foundation for Speech Therapy ERP: enterprise app shell, design tokens and a reusable component library.",
      },
      { property: "og:title", content: "Speech Therapy ERP — Multi-branch clinic platform" },
      {
        property: "og:description",
        content:
          "Frontend foundation for Speech Therapy ERP: enterprise app shell, design tokens and a reusable component library.",
      },
    ],
  }),
  component: EntryPage,
});

const foundations = [
  {
    icon: Layers,
    title: "Application shell",
    body: "Collapsible dark sidebar, sticky top bar, breadcrumbs, global search and profile menu.",
  },
  {
    icon: Sparkles,
    title: "Component library",
    body: "Buttons, cards, inputs, tables, dialogs, drawers, badges, pagination, skeletons and empty states.",
  },
  {
    icon: MoonStar,
    title: "Theming",
    body: "Inter typography with light and dark colour tokens for primary, success, warning and danger.",
  },
];

const workspaces = [
  {
    icon: ShieldCheck,
    title: "Super Admin",
    body: "Organisation-wide route group.",
    to: "/super-admin",
  },
  {
    icon: Building2,
    title: "Branch Manager",
    body: "Single-branch route group.",
    to: "/manager",
  },
] as const;

function EntryPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Activity className="h-[18px] w-[18px]" aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1 truncate text-sm font-semibold">{APP_NAME}</span>
          <ThemeToggle />
          <Button asChild size="sm">
            <Link to="/auth/login">Sign in</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <section className="max-w-2xl">
          <Badge variant="secondary" className="mb-5">
            Frontend foundation
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {APP_NAME}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{APP_TAGLINE}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            This build contains the architecture only — layout shell, routing groups, theme tokens
            and reusable UI. Business modules connect to the Django REST backend later.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/super-admin">
                Open Super Admin
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/manager">Open Branch Manager</Link>
            </Button>
          </div>
        </section>

        <section aria-labelledby="foundations" className="mt-20">
          <h2 id="foundations" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            What is included
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {foundations.map((item) => (
              <Card key={item.title} className="shadow-none transition-colors hover:border-primary/40">
                <CardHeader>
                  <span className="mb-2 grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription>{item.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section aria-labelledby="workspaces" className="mt-16">
          <h2 id="workspaces" className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Route groups
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {workspaces.map((workspace) => (
              <Card key={workspace.title} className="shadow-none">
                <CardContent className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 pt-6">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-muted text-foreground">
                    <workspace.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{workspace.title}</p>
                    <p className="truncate text-sm text-muted-foreground">{workspace.body}</p>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link to={workspace.to}>Open</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} {APP_NAME}
        </div>
      </footer>
    </div>
  );
}
