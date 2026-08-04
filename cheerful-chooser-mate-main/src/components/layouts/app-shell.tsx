import { useEffect, useState, type ReactNode } from "react";
import { AppSidebar } from "@/components/layouts/app-sidebar";
import { Topbar } from "@/components/layouts/topbar";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import type { WorkspaceKey } from "@/constants/navigation";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "st-erp-sidebar-collapsed";

export function AppShell({
  workspace,
  children,
}: {
  workspace: WorkspaceKey;
  children: ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setCollapsed(window.localStorage.getItem(STORAGE_KEY) === "true");
  }, []);

  const toggleCollapse = () =>
    setCollapsed((value) => {
      window.localStorage.setItem(STORAGE_KEY, String(!value));
      return !value;
    });

  return (
    <div className="min-h-screen bg-background">
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 hidden border-r border-sidebar-border transition-[width] duration-200 ease-out lg:block",
          collapsed ? "w-[72px]" : "w-64",
        )}
      >
        <AppSidebar
          workspace={workspace}
          collapsed={collapsed}
          onToggleCollapse={toggleCollapse}
        />
      </aside>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-72 border-sidebar-border bg-sidebar p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <AppSidebar
            workspace={workspace}
            collapsed={false}
            isMobile
            onToggleCollapse={toggleCollapse}
            onNavigate={() => setMobileOpen(false)}
          />
        </SheetContent>
      </Sheet>

      <div
        className={cn(
          "flex min-h-screen flex-col transition-[padding] duration-200 ease-out",
          collapsed ? "lg:pl-[72px]" : "lg:pl-64",
        )}
      >
        <Topbar onOpenMobileNav={() => setMobileOpen(true)} />
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
          <div className="mx-auto w-full max-w-[1600px]">{children}</div>
        </main>

      </div>
    </div>
  );
}
