export type FollowUpColumnKey =
  | "code"
  | "patient"
  | "guardian"
  | "phone"
  | "lastVisit"
  | "reason"
  | "assignedDate"
  | "nextFollowUp"
  | "priority"
  | "status";

export const FOLLOW_UP_COLUMNS: {
  key: FollowUpColumnKey;
  label: string;
  hideable: boolean;
  align?: "right";
}[] = [
  { key: "code", label: "Follow-up ID", hideable: false },
  { key: "patient", label: "Patient", hideable: false },
  { key: "guardian", label: "Guardian", hideable: true },
  { key: "phone", label: "Phone", hideable: true },
  { key: "lastVisit", label: "Last Visit", hideable: true },
  { key: "reason", label: "Reason", hideable: true },
  { key: "assignedDate", label: "Assigned Date", hideable: true },
  { key: "nextFollowUp", label: "Next Follow-up", hideable: true },
  { key: "priority", label: "Priority", hideable: false },
  { key: "status", label: "Status", hideable: false },
];

export const DEFAULT_FOLLOW_UP_COLUMNS: FollowUpColumnKey[] = FOLLOW_UP_COLUMNS.map(
  (column) => column.key,
);
