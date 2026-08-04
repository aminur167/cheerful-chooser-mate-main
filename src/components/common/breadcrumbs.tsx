import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { titleCaseSlug } from "@/lib/format";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; to?: string };

/** Derives breadcrumbs from the current pathname unless `items` is provided. */
export function Breadcrumbs({ items, className }: { items?: Crumb[]; className?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const derived: Crumb[] =
    items ??
    pathname
      .split("/")
      .filter(Boolean)
      .map((segment, index, all) => ({
        label: titleCaseSlug(segment),
        to: index === all.length - 1 ? undefined : "/" + all.slice(0, index + 1).join("/"),
      }));

  return (
    <nav aria-label="Breadcrumb" className={cn("min-w-0", className)}>
      <ol className="flex min-w-0 items-center gap-1.5 text-sm text-muted-foreground">
        <li className="shrink-0">
          <Link
            to="/"
            aria-label="Home"
            className="inline-flex items-center rounded-sm p-0.5 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Home className="h-3.5 w-3.5" />
          </Link>
        </li>
        {derived.map((crumb) => (
          <li key={crumb.label} className="flex min-w-0 items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden="true" />
            {crumb.to ? (
              <Link
                to={crumb.to}
                className="truncate rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" className="truncate font-medium text-foreground">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
