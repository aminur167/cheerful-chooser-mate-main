import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "@/components/forms/form-field";

export const Route = createFileRoute("/auth/register")({
  head: () => ({
    meta: [
      { title: "Request access — Speech Therapy ERP" },
      { name: "description", content: "Request a workspace account for the Speech Therapy ERP platform." },
      { property: "og:title", content: "Request access — Speech Therapy ERP" },
      { property: "og:description", content: "Request a workspace account for the Speech Therapy ERP platform." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-1.5">
        <h1 className="text-2xl font-semibold">Request access</h1>
        <p className="text-sm text-muted-foreground">
          Placeholder form — no data is submitted anywhere yet.
        </p>
      </div>

      <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
        <FormField id="full-name" label="Full name" required>
          <Input id="full-name" autoComplete="name" placeholder="Jordan Rivera" />
        </FormField>
        <FormField id="register-email" label="Work email" required>
          <Input id="register-email" type="email" autoComplete="email" placeholder="you@clinic.example" />
        </FormField>
        <FormField id="role" label="Requested role" hint="Determines which workspace you land in.">
          <Select>
            <SelectTrigger id="role">
              <SelectValue placeholder="Select a role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="super-admin">Super administrator</SelectItem>
              <SelectItem value="manager">Branch manager</SelectItem>
              <SelectItem value="clinician">Clinician</SelectItem>
            </SelectContent>
          </Select>
        </FormField>
        <FormField id="register-password" label="Password" required>
          <Input id="register-password" type="password" autoComplete="new-password" placeholder="••••••••" />
        </FormField>

        <Button type="submit" className="w-full">
          Submit request
        </Button>
      </form>

      <p className="text-sm text-muted-foreground">
        Already have access?{" "}
        <Link to="/auth/login" className="font-medium text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
