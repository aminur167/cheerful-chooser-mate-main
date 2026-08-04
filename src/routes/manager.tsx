import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppShell } from "@/components/layouts/app-shell";

export const Route = createFileRoute("/manager")({
  component: ManagerLayout,
});

function ManagerLayout() {
  return (
    <AppShell workspace="manager">
      <Outlet />
    </AppShell>
  );
}
