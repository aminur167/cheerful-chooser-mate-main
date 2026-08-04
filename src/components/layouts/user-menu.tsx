import { useNavigate } from "@tanstack/react-router";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DEMO_USER } from "@/constants/app";
import { clearManagerSession, getManagerSession } from "@/lib/manager-session";

export function UserMenu() {
  const navigate = useNavigate();
  const session = getManagerSession();

  const user = session
    ? {
        name: session.managerName,
        email: session.branchName,
        role: "Branch Manager",
        initials: session.managerName
          .split(" ")
          .map((part) => part[0])
          .join("")
          .slice(0, 2)
          .toUpperCase(),
      }
    : DEMO_USER;

  function handleSignOut() {
    clearManagerSession();
    navigate({ to: "/auth/login" });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-10 gap-2.5 rounded-lg px-1.5 sm:pl-1.5 sm:pr-2.5"
          aria-label="Open account menu"
        >
          <Avatar className="h-8 w-8 ring-1 ring-border">
            <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
              {user.initials}
            </AvatarFallback>
          </Avatar>
          <span className="hidden min-w-0 flex-col items-start leading-tight lg:flex">
            <span className="max-w-[10rem] truncate text-[13px] font-medium">{user.name}</span>
            <span className="max-w-[10rem] truncate text-[11px] font-normal text-muted-foreground">
              {user.role}
            </span>
          </span>
          <ChevronDown className="hidden h-4 w-4 text-muted-foreground lg:block" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={10} className="w-64 rounded-xl p-1.5 shadow-overlay">
        <DropdownMenuLabel className="flex items-center gap-3 rounded-lg px-2 py-2.5">
          <Avatar className="h-9 w-9 ring-1 ring-border">
            <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
              {user.initials}
            </AvatarFallback>
          </Avatar>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-medium">{user.name}</span>
            <span className="block truncate text-xs font-normal text-muted-foreground">
              {user.email}
            </span>
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="h-4 w-4" aria-hidden="true" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="h-4 w-4" aria-hidden="true" />
          Preferences
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={handleSignOut}>
          <LogOut className="h-4 w-4" aria-hidden="true" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
