import type { LucideIcon } from "lucide-react";
import { Inbox } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  action,
  secondaryAction,
  className,
}: {
  icon?: LucideIcon;
  title: string;
  description?: string;
  /** Primary call to action. */
  action?: ReactNode;
  /** Optional lower-emphasis action rendered beside the primary one. */
  secondaryAction?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-border bg-card px-6 py-16 text-center shadow-card sm:py-20",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]"
      />

      <div className="relative flex flex-col items-center">
        <span className="relative mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-border bg-background text-primary shadow-card">
          <span
            className="absolute inset-0 rounded-2xl bg-primary/5"
            aria-hidden="true"
          />
          <Icon className="relative h-6 w-6" aria-hidden="true" />
        </span>

        <h3 className="text-base font-semibold tracking-tight text-foreground">{title}</h3>
        {description ? (
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}

        {action || secondaryAction ? (
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            {action}
            {secondaryAction}
          </div>
        ) : null}
      </div>
    </section>
  );
}
