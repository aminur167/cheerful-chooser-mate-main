import { Link, useRouterState } from "@tanstack/react-router";
import { Activity, ChevronsLeft, X } from "lucide-react";
import { NAVIGATION, WORKSPACES, type WorkspaceKey } from "@/constants/navigation";
import { APP_NAME, APP_SUBTITLE } from "@/constants/app";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function AppSidebar({
  workspace,
  collapsed,
  onToggleCollapse,
  onNavigate,
  isMobile = false,
}: {
  workspace: WorkspaceKey;
  collapsed: boolean;
  onToggleCollapse: () => void;
  onNavigate?: () => void;
  isMobile?: boolean;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const sections = NAVIGATION[workspace];
  const meta = WORKSPACES[workspace];
  const isCollapsed = collapsed && !isMobile;

  return (
    <TooltipProvider delayDuration={120}>
      <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
        {/* Brand */}
        <div
          className={cn(
            "flex h-16 shrink-0 items-center gap-3 px-4",
            isCollapsed && "justify-center px-0",
          )}
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground shadow-xs ring-1 ring-white/10">
            <Activity className="h-[18px] w-[18px]" aria-hidden="true" />
          </span>
          {!isCollapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13.5px] font-semibold leading-tight tracking-tight text-sidebar-accent-foreground">
                {APP_NAME}
              </p>
              <p className="truncate text-[11px] leading-tight text-sidebar-foreground/55">
                {APP_SUBTITLE}
              </p>
            </div>
          )}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onNavigate}
              aria-label="Close navigation"
              className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        {!isCollapsed && (
          <div className="px-4 pb-4">
            <div className="rounded-lg border border-white/8 bg-white/[0.04] px-3 py-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-sidebar-foreground/45">
                Workspace
              </p>
              <p className="truncate text-[13px] font-medium text-sidebar-accent-foreground">
                {meta.label}
              </p>
            </div>
          </div>
        )}

        <div className="mx-4 h-px shrink-0 bg-sidebar-border" />

        {/* Navigation */}
        <nav
          aria-label="Primary"
          className={cn(
            "flex-1 overflow-y-auto py-5",
            isCollapsed ? "px-2" : "px-3",
          )}
        >
          {sections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className={cn(
                sectionIndex > 0 && "mt-7 border-t border-sidebar-border pt-6",
              )}
            >
              {isCollapsed ? (
                <span className="sr-only">{section.title}</span>
              ) : (
                <p className="px-3 pb-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-sidebar-foreground/40">
                  {section.title}
                </p>
              )}
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const active = item.to === pathname;
                  const base = cn(
                    "group relative flex items-center rounded-lg text-[13.5px] transition-enterprise focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar",
                    isCollapsed ? "h-10 w-10 justify-center" : "gap-3 px-3 py-2.5",
                  );

                  const content = item.to ? (
                    <Link
                      to={item.to}
                      onClick={onNavigate}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        base,
                        active
                          ? "bg-white/[0.09] font-medium text-sidebar-accent-foreground shadow-xs"
                          : "text-sidebar-foreground/75 hover:bg-white/[0.05] hover:text-sidebar-accent-foreground",
                      )}
                    >
                      {active && (
                        <span
                          className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-sidebar-primary"
                          aria-hidden="true"
                        />
                      )}
                      <item.icon
                        className={cn(
                          "h-[18px] w-[18px] shrink-0 transition-enterprise",
                          active ? "text-sidebar-primary" : "text-sidebar-foreground/60 group-hover:text-sidebar-accent-foreground",
                        )}
                        aria-hidden="true"
                      />
                      {!isCollapsed && (
                        <span className="min-w-0 flex-1 truncate">{item.label}</span>
                      )}
                    </Link>
                  ) : (
                    <span
                      aria-disabled="true"
                      className={cn(base, "cursor-not-allowed text-sidebar-foreground/35")}
                    >
                      <item.icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                      {!isCollapsed && (
                        <>
                          <span className="min-w-0 flex-1 truncate">{item.label}</span>
                          {item.badge && (
                            <Badge
                              variant="outline"
                              className="border-white/12 px-2 py-0 text-[10px] font-medium text-sidebar-foreground/50"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </span>
                  );

                  return (
                    <li key={item.label}>
                      {isCollapsed ? (
                        <Tooltip>
                          <TooltipTrigger asChild>{content}</TooltipTrigger>
                          <TooltipContent side="right" sideOffset={10}>
                            {item.label}
                            {item.badge ? ` · ${item.badge}` : ""}
                          </TooltipContent>
                        </Tooltip>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Collapse control */}
        {!isMobile && (
          <div className={cn("shrink-0 border-t border-sidebar-border", isCollapsed ? "p-2" : "p-3")}>
            <Button
              variant="ghost"
              onClick={onToggleCollapse}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              className={cn(
                "text-sidebar-foreground/65 hover:bg-white/[0.06] hover:text-sidebar-accent-foreground",
                isCollapsed ? "h-10 w-10 p-0" : "w-full justify-start gap-3",
              )}
            >
              <ChevronsLeft
                className={cn("h-[18px] w-[18px] transition-transform duration-200", collapsed && "rotate-180")}
                aria-hidden="true"
              />
              {!isCollapsed && <span className="text-[13.5px]">Collapse</span>}
            </Button>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}
