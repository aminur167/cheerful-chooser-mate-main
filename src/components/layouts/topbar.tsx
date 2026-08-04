import { Bell, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Breadcrumbs } from "@/components/common/breadcrumbs";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { UserMenu } from "@/components/layouts/user-menu";

export function Topbar({ onOpenMobileNav }: { onOpenMobileNav: () => void }) {
  return (
    <header className="sticky top-0 z-30 h-16 border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65">
      <div className="mx-auto flex h-full w-full max-w-[1600px] items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:px-10">
        <Button
          variant="ghost"
          size="icon"
          className="min-h-10 min-w-10 shrink-0 lg:hidden"
          onClick={onOpenMobileNav}
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <Breadcrumbs className="hidden min-w-0 flex-1 md:block" />

        <div className="relative min-w-0 flex-1 md:max-w-[260px] md:flex-none">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70"
            aria-hidden="true"
          />
          <Input
            type="search"
            aria-label="Global search"
            placeholder="Search…"
            className="h-9 bg-muted/50 pl-9 pr-14 shadow-none"
          />
          <kbd className="pointer-events-none absolute right-2.5 top-1/2 hidden -translate-y-1/2 rounded border border-border bg-background px-1.5 py-0.5 font-sans text-[10px] font-medium text-muted-foreground sm:block">
            ⌘K
          </kbd>
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Notifications"
            className="relative min-h-9 min-w-9 text-muted-foreground hover:text-foreground"
          >
            <Bell className="h-[18px] w-[18px]" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-danger ring-2 ring-background" />
          </Button>
          <ThemeToggle />
          <div className="mx-1 hidden h-6 w-px bg-border sm:block" aria-hidden="true" />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
