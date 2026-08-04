import { useMemo, useState } from "react";
import { Check, ImagePlus, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "@/components/forms/form-field";
import {
  BLOOD_GROUPS,
  GENDERS,
  GUARDIAN_RELATIONS,
  PAYMENT_TYPES,
  PROGRAM_OPTIONS_BY_THERAPY,
  THERAPISTS,
  THERAPY_TYPES,
  calculateAge,
} from "@/constants/patient-data";
import { PAYMENT_PACKAGES, findPackage, type PaymentPackage } from "@/constants/payment-data";
import { formatTaka } from "@/constants/dashboard-data";

const STEPS = [
  { id: 1, title: "Personal", description: "Identity and contact details" },
  { id: 2, title: "Guardian", description: "Primary caregiver information" },
  { id: 3, title: "Medical", description: "Concerns and clinical history" },
  { id: 4, title: "Programme", description: "Therapy plan and scheduling" },
  { id: 5, title: "Payment", description: "Billing setup and fees" },
];

/**
 * UI-only multi-step patient registration flow.
 * No data is persisted — submission is simulated until the API is connected.
 */
export function RegisterPatientDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [dob, setDob] = useState("");

  const [therapyType, setTherapyType] = useState("");
  const [programme, setProgramme] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [packageId, setPackageId] = useState("");

  const age = useMemo(() => calculateAge(dob), [dob]);

  const programmeOptions = useMemo(
    () => (therapyType ? (PROGRAM_OPTIONS_BY_THERAPY[therapyType] ?? []) : []),
    [therapyType],
  );

  const packageOptions = useMemo(
    () => PAYMENT_PACKAGES.filter((item) => item.status === "Active" && item.type === paymentType),
    [paymentType],
  );

  const selectedPackage = useMemo(() => findPackage(packageId), [packageId]);

  const handleTherapyTypeChange = (value: string) => {
    setTherapyType(value);
    setProgramme("");
  };

  const handlePaymentTypeChange = (value: string) => {
    setPaymentType(value);
    setPackageId("");
  };

  const close = () => {
    onOpenChange(false);
    setTimeout(() => setStep(1), 200);
  };

  const submit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      close();
    }, 900);
  };

  const current = STEPS[step - 1];

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) close();
        else onOpenChange(true);
      }}
    >
      <DialogContent className="max-h-[92vh] max-w-3xl overflow-y-auto rounded-xl">
        <DialogHeader>
          <DialogTitle>Register patient</DialogTitle>
          <DialogDescription>
            Complete five short steps to create a new patient record.
          </DialogDescription>
        </DialogHeader>

        {/* Step indicator */}
        <ol className="flex items-center gap-2 border-b border-border pb-5">
          {STEPS.map((item, index) => {
            const state = step === item.id ? "current" : step > item.id ? "done" : "todo";
            return (
              <li key={item.id} className="flex min-w-0 flex-1 items-center gap-2.5">
                <span
                  className={cn(
                    "grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[12px] font-semibold transition-enterprise",
                    state === "current" && "border-primary bg-primary text-primary-foreground",
                    state === "done" && "border-success/40 bg-success/12 text-success",
                    state === "todo" && "border-border bg-muted/50 text-muted-foreground",
                  )}
                  aria-current={state === "current" ? "step" : undefined}
                >
                  {state === "done" ? <Check className="h-3.5 w-3.5" /> : item.id}
                </span>
                <span className="hidden min-w-0 lg:block">
                  <span
                    className={cn(
                      "block truncate text-[13px] font-medium",
                      state === "todo" ? "text-muted-foreground" : "text-foreground",
                    )}
                  >
                    {item.title}
                  </span>
                </span>
                {index < STEPS.length - 1 ? (
                  <span className="h-px flex-1 bg-border" aria-hidden="true" />
                ) : null}
              </li>
            );
          })}
        </ol>

        <div className="lg:hidden">
          <p className="text-[13px] font-medium text-foreground">
            Step {step} of {STEPS.length} — {current.title}
          </p>
          <p className="text-[12.5px] text-muted-foreground">{current.description}</p>
        </div>

        {step === 1 ? (
          <StepPersonal dob={dob} onDobChange={setDob} age={age} />
        ) : step === 2 ? (
          <StepGuardian />
        ) : step === 3 ? (
          <StepMedical />
        ) : step === 4 ? (
          <StepProgramme
            therapyType={therapyType}
            onTherapyTypeChange={handleTherapyTypeChange}
            programme={programme}
            onProgrammeChange={setProgramme}
            programmeOptions={programmeOptions}
          />
        ) : (
          <StepPayment
            paymentType={paymentType}
            onPaymentTypeChange={handlePaymentTypeChange}
            packageId={packageId}
            onPackageIdChange={setPackageId}
            packageOptions={packageOptions}
            selectedPackage={selectedPackage}
          />
        )}

        <div className="flex items-center justify-between gap-3 border-t border-border pt-5">
          <Button variant="ghost" onClick={close}>
            Cancel
          </Button>
          <div className="flex items-center gap-2.5">
            {step > 1 ? (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            ) : null}
            {step < STEPS.length ? (
              <Button onClick={() => setStep(step + 1)}>Continue</Button>
            ) : (
              <Button onClick={submit} disabled={submitting}>
                {submitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : null}
                Register patient
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function StepPersonal({
  dob,
  onDobChange,
  age,
}: {
  dob: string;
  onDobChange: (value: string) => void;
  age: string;
}) {
  return (
    <div className="grid gap-5 py-2 sm:grid-cols-2">
      <FormField
        id="patient-photo"
        label="Patient photo"
        hint="JPG or PNG, up to 2 MB"
        className="sm:col-span-2"
      >
        <div className="flex items-center gap-4 rounded-lg border border-dashed border-border bg-muted/30 p-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-border bg-background text-muted-foreground">
            <ImagePlus className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-[13px] font-medium text-foreground">Upload placeholder</p>
            <p className="text-[12.5px] text-muted-foreground">
              Photo upload is enabled once storage is connected.
            </p>
          </div>
        </div>
      </FormField>

      <FormField id="patient-name" label="Full name" required>
        <Input id="patient-name" placeholder="e.g. Rahim Ahmed" />
      </FormField>
      <FormField id="patient-dob" label="Date of birth" required>
        <Input
          id="patient-dob"
          type="date"
          value={dob}
          onChange={(event) => onDobChange(event.target.value)}
        />
      </FormField>
      <FormField id="patient-age" label="Age" hint="Calculated automatically from date of birth">
        <Input
          id="patient-age"
          readOnly
          value={age ? `${age} years` : ""}
          placeholder="—"
          className="bg-muted/40"
        />
      </FormField>
      <FormField id="patient-gender" label="Gender" required>
        <Select>
          <SelectTrigger id="patient-gender">
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            {GENDERS.map((gender) => (
              <SelectItem key={gender} value={gender}>
                {gender}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="patient-blood" label="Blood group">
        <Select>
          <SelectTrigger id="patient-blood">
            <SelectValue placeholder="Select blood group" />
          </SelectTrigger>
          <SelectContent>
            {BLOOD_GROUPS.map((group) => (
              <SelectItem key={group} value={group}>
                {group}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="patient-phone" label="Contact number" required>
        <Input id="patient-phone" placeholder="+880 17XX-XXXXXX" />
      </FormField>
      <FormField id="patient-address" label="Address" required className="sm:col-span-2">
        <Textarea id="patient-address" rows={2} placeholder="House, road, area, city, postcode" />
      </FormField>
    </div>
  );
}

function StepGuardian() {
  return (
    <div className="grid gap-5 py-2 sm:grid-cols-2">
      <FormField id="guardian-name" label="Guardian name" required>
        <Input id="guardian-name" placeholder="e.g. Md. Karim Ahmed" />
      </FormField>
      <FormField id="guardian-relation" label="Relationship" required>
        <Select>
          <SelectTrigger id="guardian-relation">
            <SelectValue placeholder="Select relationship" />
          </SelectTrigger>
          <SelectContent>
            {GUARDIAN_RELATIONS.map((relation) => (
              <SelectItem key={relation} value={relation}>
                {relation}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="guardian-phone" label="Phone" required>
        <Input id="guardian-phone" placeholder="+880 17XX-XXXXXX" />
      </FormField>
      <FormField id="guardian-email" label="Email">
        <Input id="guardian-email" type="email" placeholder="guardian@example.com" />
      </FormField>
      <FormField id="guardian-occupation" label="Occupation">
        <Input id="guardian-occupation" placeholder="e.g. Bank Officer" />
      </FormField>
      <FormField
        id="emergency-contact"
        label="Emergency contact"
        hint="Alternate number reachable during sessions"
        required
      >
        <Input id="emergency-contact" placeholder="+880 18XX-XXXXXX" />
      </FormField>
    </div>
  );
}

function StepMedical() {
  return (
    <div className="grid gap-5 py-2 sm:grid-cols-2">
      <FormField id="primary-concern" label="Primary concern" required className="sm:col-span-2">
        <Textarea
          id="primary-concern"
          rows={2}
          placeholder="e.g. Delayed speech development and unclear articulation"
        />
      </FormField>
      <FormField
        id="diagnosis"
        label="Diagnosis"
        hint="Structured diagnosis codes arrive with the clinical module"
      >
        <Select disabled>
          <SelectTrigger id="diagnosis">
            <SelectValue placeholder="Available after assessment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="placeholder">Placeholder</SelectItem>
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="referral-doctor" label="Referral doctor">
        <Input id="referral-doctor" placeholder="e.g. Dr. Sabrina Chowdhury" />
      </FormField>
      <FormField id="medical-history" label="Medical history" className="sm:col-span-2">
        <Textarea
          id="medical-history"
          rows={3}
          placeholder="Birth history, hearing status, previous therapy, medications…"
        />
      </FormField>
      <FormField id="medical-notes" label="Notes" className="sm:col-span-2">
        <Textarea id="medical-notes" rows={2} placeholder="Internal notes for the clinical team" />
      </FormField>
    </div>
  );
}

function StepProgramme({
  therapyType,
  onTherapyTypeChange,
  programme,
  onProgrammeChange,
  programmeOptions,
}: {
  therapyType: string;
  onTherapyTypeChange: (value: string) => void;
  programme: string;
  onProgrammeChange: (value: string) => void;
  programmeOptions: string[];
}) {
  return (
    <div className="grid gap-5 py-2 sm:grid-cols-2">
      <FormField id="therapy-type" label="Therapy type" required>
        <Select value={therapyType} onValueChange={onTherapyTypeChange}>
          <SelectTrigger id="therapy-type">
            <SelectValue placeholder="Select therapy type" />
          </SelectTrigger>
          <SelectContent>
            {THERAPY_TYPES.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField
        id="programme"
        label="Programme"
        hint={
          therapyType
            ? "Programmes shown for the selected therapy type"
            : "Select a therapy type first"
        }
        required
      >
        <Select value={programme} onValueChange={onProgrammeChange} disabled={!therapyType}>
          <SelectTrigger id="programme">
            <SelectValue placeholder="Select programme" />
          </SelectTrigger>
          <SelectContent>
            {programmeOptions.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="assessment-date" label="Assessment date" required>
        <Input id="assessment-date" type="date" />
      </FormField>
      <FormField
        id="assigned-therapist"
        label="Assigned therapist"
        hint="Live availability arrives with the scheduling module"
      >
        <Select>
          <SelectTrigger id="assigned-therapist">
            <SelectValue placeholder="Select therapist" />
          </SelectTrigger>
          <SelectContent>
            {THERAPISTS.map((therapist) => (
              <SelectItem key={therapist} value={therapist}>
                {therapist}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="expected-start" label="Expected start date" className="sm:col-span-2">
        <Input id="expected-start" type="date" />
      </FormField>
    </div>
  );
}

function StepPayment({
  paymentType,
  onPaymentTypeChange,
  packageId,
  onPackageIdChange,
  packageOptions,
  selectedPackage,
}: {
  paymentType: string;
  onPaymentTypeChange: (value: string) => void;
  packageId: string;
  onPackageIdChange: (value: string) => void;
  packageOptions: PaymentPackage[];
  selectedPackage?: PaymentPackage;
}) {
  const discountedPrice = selectedPackage
    ? Math.round(selectedPackage.price * (1 - selectedPackage.discount / 100))
    : 0;
  const registrationFee = selectedPackage?.registrationFee ?? 0;
  const totalPayable = discountedPrice + registrationFee;

  return (
    <div className="grid gap-5 py-2 sm:grid-cols-2">
      <FormField id="payment-type" label="Payment type" required>
        <Select value={paymentType} onValueChange={onPaymentTypeChange}>
          <SelectTrigger id="payment-type">
            <SelectValue placeholder="Select payment type" />
          </SelectTrigger>
          <SelectContent>
            {PAYMENT_TYPES.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField
        id="package"
        label="Package"
        hint={
          paymentType
            ? `${packageOptions.length} active package${packageOptions.length === 1 ? "" : "s"} for ${paymentType}`
            : "Select a payment type first"
        }
        required
      >
        <Select value={packageId} onValueChange={onPackageIdChange} disabled={!paymentType}>
          <SelectTrigger id="package">
            <SelectValue placeholder="Select package" />
          </SelectTrigger>
          <SelectContent>
            {packageOptions.map((option) => (
              <SelectItem key={option.id} value={option.id}>
                {option.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField
        id="registration-fee"
        label="Registration fee (৳)"
        hint="Calculated automatically from the selected package"
        required
      >
        <Input
          id="registration-fee"
          type="number"
          readOnly
          value={registrationFee || ""}
          placeholder="—"
          min={0}
          className="bg-muted/40"
        />
      </FormField>
      <FormField id="payment-remarks" label="Remarks">
        <Input id="payment-remarks" placeholder="e.g. Guardian pays by bKash" />
      </FormField>

      {selectedPackage ? (
        <div className="rounded-lg border border-border bg-muted/30 p-4 sm:col-span-2">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[13px] font-medium text-foreground">{selectedPackage.name}</p>
            <span className="text-[12.5px] text-muted-foreground">
              {selectedPackage.type} · {selectedPackage.sessions} session
              {selectedPackage.sessions === 1 ? "" : "s"} · {selectedPackage.durationLabel}
            </span>
          </div>
          <dl className="mt-3 grid gap-2 text-[12.5px] sm:grid-cols-4">
            <div>
              <dt className="text-muted-foreground">Package price</dt>
              <dd className="font-medium text-foreground">{formatTaka(selectedPackage.price)}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Discount</dt>
              <dd className="font-medium text-foreground">
                {selectedPackage.discount > 0 ? `${selectedPackage.discount}%` : "—"}
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Registration fee</dt>
              <dd className="font-medium text-foreground">{formatTaka(registrationFee)}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Total payable</dt>
              <dd className="font-semibold text-primary">{formatTaka(totalPayable)}</dd>
            </div>
          </dl>
        </div>
      ) : null}
    </div>
  );
}
