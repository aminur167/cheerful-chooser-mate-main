export type AssessmentColumnKey =
  | "code"
  | "patient"
  | "patientCode"
  | "assessmentDate"
  | "assessmentType"
  | "diagnosis"
  | "recommendation"
  | "status"
  | "nextFollowUp";

export type AssessmentColumn = {
  key: AssessmentColumnKey;
  label: string;
  hideable: boolean;
  numeric?: boolean;
};

export const ASSESSMENT_COLUMNS: AssessmentColumn[] = [
  { key: "code", label: "Assessment ID", hideable: false },
  { key: "patient", label: "Patient", hideable: false },
  { key: "patientCode", label: "Patient ID", hideable: true },
  { key: "assessmentDate", label: "Assessment Date", hideable: true },
  { key: "assessmentType", label: "Assessment Type", hideable: true },
  { key: "diagnosis", label: "Diagnosis", hideable: true },
  { key: "recommendation", label: "Therapy Recommendation", hideable: true },
  { key: "status", label: "Status", hideable: false },
  { key: "nextFollowUp", label: "Next Follow-up", hideable: true },
];

export const DEFAULT_ASSESSMENT_COLUMNS: AssessmentColumnKey[] = ASSESSMENT_COLUMNS.map(
  (column) => column.key,
);
