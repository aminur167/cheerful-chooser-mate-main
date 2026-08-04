import type { LucideIcon } from "lucide-react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

/**
 * Professional placeholder used by patient profile tabs whose
 * business module has not been built yet.
 */
export function ComingSoonCard({
  icon: Icon = Sparkles,
  title,
  description,
  capabilities,
  className,
}: {
  icon?: LucideIcon;
  title: string;
  description: string;
  capabilities: string[];
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card sm:p-8",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-3.5">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-background text-primary shadow-xs">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h2 className="text-[15px] font-semibold tracking-tight text-foreground">{title}</h2>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
          <Badge variant="info">Coming soon</Badge>
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <li
              key={capability}
              className="flex items-start gap-2.5 rounded-lg border border-border bg-muted/30 px-3.5 py-3"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
                aria-hidden="true"
              />
              <span className="text-[13px] leading-relaxed text-muted-foreground">
                {capability}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
