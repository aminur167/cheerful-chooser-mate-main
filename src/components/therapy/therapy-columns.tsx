export type TherapyColumnKey =
  | "code"
  | "patient"
  | "mode"
  | "program"
  | "sessionNumber"
  | "sessionDate"
  | "time"
  | "attendance"
  | "status"
  | "progress";

export type TherapyColumn = {
  key: TherapyColumnKey;
  label: string;
  hideable: boolean;
};

export const THERAPY_COLUMNS: TherapyColumn[] = [
  { key: "code", label: "Session ID", hideable: false },
  { key: "patient", label: "Patient", hideable: false },
  { key: "mode", label: "Therapy Type", hideable: true },
  { key: "program", label: "Program", hideable: true },
  { key: "sessionNumber", label: "Session No.", hideable: true },
  { key: "sessionDate", label: "Session Date", hideable: true },
  { key: "time", label: "Time", hideable: true },
  { key: "attendance", label: "Attendance", hideable: true },
  { key: "status", label: "Status", hideable: false },
  { key: "progress", label: "Progress", hideable: true },
];

export const DEFAULT_THERAPY_COLUMNS: TherapyColumnKey[] = THERAPY_COLUMNS.map(
  (column) => column.key,
);
