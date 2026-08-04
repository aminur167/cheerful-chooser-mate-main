import type { LucideIcon } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * Shared shell for every dashboard widget: icon + title + optional
 * description, an optional action slot and a consistent "more" menu.
 */
export function WidgetCard({
  title,
  description,
  icon: Icon,
  action,
  menuItems = ["Refresh data", "Export as CSV", "View details"],
  showMenu = true,
  children,
  contentClassName,
  className,
}: {
  title: string;
  description?: string;
  icon?: LucideIcon;
  action?: ReactNode;
  menuItems?: string[];
  showMenu?: boolean;
  children: ReactNode;
  contentClassName?: string;
  className?: string;
}) {
  return (
    <Card interactive className={cn("flex h-full flex-col", className)}>
      <CardHeader className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 pb-4">
        <div className="flex min-w-0 items-start gap-3">
          {Icon ? (
            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-muted/50 text-muted-foreground">
              <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
            </span>
          ) : null}
          <div className="min-w-0 space-y-1">
            <h2 className="truncate text-[15px] font-semibold leading-tight tracking-tight text-foreground">
              {title}
            </h2>
            {description ? (
              <p className="truncate text-[13px] leading-relaxed text-muted-foreground">
                {description}
              </p>
            ) : null}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {action}
          {showMenu ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground"
                  aria-label={`More options for ${title}`}
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {menuItems.map((item) => (
                  <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null}
        </div>
      </CardHeader>
      <CardContent className={cn("flex-1 pt-0", contentClassName)}>{children}</CardContent>
    </Card>
  );
}
