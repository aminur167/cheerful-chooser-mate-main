export type PaymentColumnKey =
  | "receiptNo"
  | "patient"
  | "packageName"
  | "amount"
  | "discount"
  | "paid"
  | "due"
  | "method"
  | "paymentDate"
  | "collectedBy"
  | "status";

export const PAYMENT_COLUMNS: {
  key: PaymentColumnKey;
  label: string;
  hideable: boolean;
  align?: "right";
}[] = [
  { key: "receiptNo", label: "Receipt No", hideable: false },
  { key: "patient", label: "Patient", hideable: false },
  { key: "packageName", label: "Package", hideable: true },
  { key: "amount", label: "Amount", hideable: true, align: "right" },
  { key: "discount", label: "Discount", hideable: true, align: "right" },
  { key: "paid", label: "Paid", hideable: true, align: "right" },
  { key: "due", label: "Due", hideable: true, align: "right" },
  { key: "method", label: "Payment Method", hideable: true },
  { key: "paymentDate", label: "Payment Date", hideable: true },
  { key: "collectedBy", label: "Collected By", hideable: true },
  { key: "status", label: "Status", hideable: false },
];

export const DEFAULT_PAYMENT_COLUMNS: PaymentColumnKey[] = PAYMENT_COLUMNS.map(
  (column) => column.key,
);

export type HistoryColumnKey =
  | "receiptNo"
  | "patient"
  | "packageName"
  | "packageType"
  | "amount"
  | "method"
  | "collectedBy"
  | "paymentDate"
  | "status";

export const HISTORY_COLUMNS: { key: HistoryColumnKey; label: string; align?: "right" }[] = [
  { key: "receiptNo", label: "Receipt" },

  { key: "patient", label: "Patient" },
  { key: "packageName", label: "Package" },
  { key: "packageType", label: "Payment Type" },
  { key: "amount", label: "Amount", align: "right" },
  { key: "method", label: "Method" },
  { key: "collectedBy", label: "Collected By" },
  { key: "paymentDate", label: "Date" },
  { key: "status", label: "Status" },
];
