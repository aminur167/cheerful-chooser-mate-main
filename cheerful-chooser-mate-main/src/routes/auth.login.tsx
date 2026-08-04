import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FormField } from "@/components/forms/form-field";

export const Route = createFileRoute("/auth/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Speech Therapy ERP" },
      { name: "description", content: "Sign in to the Speech Therapy ERP multi-branch clinic platform." },
      { property: "og:title", content: "Sign in — Speech Therapy ERP" },
      { property: "og:description", content: "Sign in to the Speech Therapy ERP multi-branch clinic platform." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-1.5">
        <h1 className="text-2xl font-semibold">Sign in</h1>
        <p className="text-sm text-muted-foreground">
          Interface only — authentication is handled by the backend later.
        </p>
      </div>

      <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
        <FormField id="email" label="Work email" required>
          <Input id="email" type="email" autoComplete="email" placeholder="you@clinic.example" />
        </FormField>
        <FormField id="password" label="Password" required>
          <Input id="password" type="password" autoComplete="current-password" placeholder="••••••••" />
        </FormField>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm font-normal text-muted-foreground">
              Remember me
            </Label>
          </div>
          <Link
            to="/auth/forgot-password"
            className="rounded-sm text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full">
          Continue
        </Button>
      </form>

      <p className="text-sm text-muted-foreground">
        Need an account?{" "}
        <Link to="/auth/register" className="font-medium text-primary hover:underline">
          Request access
        </Link>
      </p>
    </div>
  );
}
