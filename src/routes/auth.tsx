import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AuthLayout } from "@/components/layouts/auth-layout";

export const Route = createFileRoute("/auth")({
  component: AuthGroupLayout,
});

function AuthGroupLayout() {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}
