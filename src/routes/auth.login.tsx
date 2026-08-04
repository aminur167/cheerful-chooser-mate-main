import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { Building2, KeyRound, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FormField } from "@/components/forms/form-field";
import { loginWithManagerId } from "@/lib/manager-session";
import { Alert, AlertDescription } from "@/components/ui/alert";

const loginSearchSchema = z.object({
  mode: z.enum(["email", "manager"]).optional(),
});

export const Route = createFileRoute("/auth/login")({
  validateSearch: loginSearchSchema,
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

type LoginMode = "email" | "manager";

function LoginPage() {
  const navigate = useNavigate();
  const { mode: initialMode } = Route.useSearch();
  const [mode, setMode] = useState<LoginMode>(initialMode ?? "email");
  const [managerId, setManagerId] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleManagerLogin(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    const branch = loginWithManagerId(managerId);
    if (!branch) {
      setError("Invalid manager key. Check the key provided by your administrator.");
      return;
    }

    navigate({ to: "/manager" });
  }

  return (
    <div className="space-y-8">
      <div className="space-y-1.5">
        <h1 className="text-2xl font-semibold">Sign in</h1>
        <p className="text-sm text-muted-foreground">
          Interface only — authentication is handled by the backend later.
        </p>
      </div>

      {/* Mode switch */}
      <div className="grid grid-cols-2 gap-2 rounded-lg border border-border bg-muted/40 p-1">
        <button
          type="button"
          onClick={() => {
            setMode("email");
            setError(null);
          }}
          className={`flex items-center justify-center gap-2 rounded-md px-3 py-2 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
            mode === "email"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email
        </button>
        <button
          type="button"
          onClick={() => {
            setMode("manager");
            setError(null);
          }}
          className={`flex items-center justify-center gap-2 rounded-md px-3 py-2 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
            mode === "manager"
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <KeyRound className="h-4 w-4" aria-hidden="true" />
          Manager Key
        </button>
      </div>

      {mode === "email" ? (
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
      ) : (
        <form className="space-y-5" onSubmit={handleManagerLogin}>
          <FormField
            id="manager-id"
            label="Manager unique key"
            hint="Provided by your administrator. Signing in opens your branch workspace."
            required
          >
            <div className="relative">
              <Building2
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70"
                aria-hidden="true"
              />
              <Input
                id="manager-id"
                value={managerId}
                onChange={(event) => setManagerId(event.target.value)}
                placeholder="e.g. MGR-DHK-001"
                className="pl-9 font-mono text-[13px] uppercase placeholder:normal-case"
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          </FormField>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full">
            Access my branch
          </Button>
        </form>
      )}

      <p className="text-sm text-muted-foreground">
        Need an account?{" "}
        <Link to="/auth/register" className="font-medium text-primary hover:underline">
          Request access
        </Link>
      </p>
    </div>
  );
}