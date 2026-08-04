import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppShell } from "@/components/layouts/app-shell";

export const Route = createFileRoute("/super-admin")({
  component: SuperAdminLayout,
});

function SuperAdminLayout() {
  return (
    <AppShell workspace="super-admin">
      <Outlet />
    </AppShell>
  );
}
