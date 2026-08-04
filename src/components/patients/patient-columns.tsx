export type PatientColumnKey =
  | "code"
  | "photo"
  | "name"
  | "age"
  | "gender"
  | "guardian"
  | "phone"
  | "therapyType"
  | "package"
  | "paymentStatus"
  | "status"
  | "lastVisit"
  | "nextSession";

export type PatientColumn = {
  key: PatientColumnKey;
  label: string;
  /** Right-aligned numeric column. */
  numeric?: boolean;
  /** Columns that can be hidden from the column-visibility menu. */
  hideable: boolean;
};

export const PATIENT_COLUMNS: PatientColumn[] = [
  { key: "code", label: "Patient ID", hideable: false },
  { key: "photo", label: "Photo", hideable: true },
  { key: "name", label: "Patient Name", hideable: false },
  { key: "age", label: "Age", numeric: true, hideable: true },
  { key: "gender", label: "Gender", hideable: true },
  { key: "guardian", label: "Guardian", hideable: true },
  { key: "phone", label: "Phone", hideable: true },
  { key: "therapyType", label: "Therapy Type", hideable: true },
  { key: "package", label: "Current Package", hideable: true },
  { key: "paymentStatus", label: "Payment Status", hideable: true },
  { key: "status", label: "Patient Status", hideable: true },
  { key: "lastVisit", label: "Last Visit", hideable: true },
  { key: "nextSession", label: "Next Session", hideable: true },
];

export const DEFAULT_VISIBLE_COLUMNS: PatientColumnKey[] = PATIENT_COLUMNS.map(
  (column) => column.key,
);
