import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/forms/form-field";

export const Route = createFileRoute("/auth/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset password — Speech Therapy ERP" },
      { name: "description", content: "Reset your Speech Therapy ERP workspace password." },
      { property: "og:title", content: "Reset password — Speech Therapy ERP" },
      { property: "og:description", content: "Reset your Speech Therapy ERP workspace password." },
    ],
  }),
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-1.5">
        <h1 className="text-2xl font-semibold">Reset password</h1>
        <p className="text-sm text-muted-foreground">
          We'll send a reset link once the backend is connected.
        </p>
      </div>

      <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
        <FormField id="reset-email" label="Work email" required>
          <Input id="reset-email" type="email" autoComplete="email" placeholder="you@clinic.example" />
        </FormField>
        <Button type="submit" className="w-full">
          Send reset link
        </Button>
      </form>

      <Link to="/auth/login" className="text-sm font-medium text-primary hover:underline">
        Back to sign in
      </Link>
    </div>
  );
}
