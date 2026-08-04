import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Activity } from "lucide-react";
import { APP_NAME, APP_TAGLINE } from "@/constants/app";
import { ThemeToggle } from "@/components/common/theme-toggle";

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <aside className="relative hidden flex-col justify-between bg-sidebar p-10 text-sidebar-foreground lg:flex">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Activity className="h-[18px] w-[18px]" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold text-sidebar-accent-foreground">{APP_NAME}</span>
        </Link>
        <div className="max-w-md space-y-4">
          <h2 className="text-3xl font-semibold text-sidebar-accent-foreground">
            One platform for every clinic branch.
          </h2>
          <p className="text-sm leading-relaxed text-sidebar-foreground/70">{APP_TAGLINE}</p>
        </div>
        <p className="text-xs text-sidebar-foreground/50">
          © {new Date().getFullYear()} {APP_NAME}
        </p>
      </aside>

      <main className="flex flex-col">
        <div className="flex justify-end p-4">
          <ThemeToggle />
        </div>
        <div className="flex flex-1 items-center justify-center px-4 pb-16">
          <div className="w-full max-w-sm">{children}</div>
        </div>
      </main>
    </div>
  );
}
