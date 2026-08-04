export type MaterialColumnKey =
  | "code"
  | "image"
  | "name"
  | "category"
  | "unitPrice"
  | "quantity"
  | "minStock"
  | "location"
  | "supplier"
  | "status";

export const MATERIAL_COLUMNS: {
  key: MaterialColumnKey;
  label: string;
  hideable: boolean;
  align?: "right";
}[] = [
  { key: "code", label: "Material ID", hideable: false },
  { key: "image", label: "Image", hideable: true },
  { key: "name", label: "Material Name", hideable: false },
  { key: "category", label: "Category", hideable: true },
  { key: "unitPrice", label: "Unit Price", hideable: true, align: "right" },
  { key: "quantity", label: "Available Qty", hideable: true, align: "right" },
  { key: "minStock", label: "Minimum Stock", hideable: true, align: "right" },
  { key: "location", label: "Location", hideable: true },
  { key: "supplier", label: "Supplier", hideable: true },
  { key: "status", label: "Status", hideable: false },
];

export const DEFAULT_MATERIAL_COLUMNS: MaterialColumnKey[] = MATERIAL_COLUMNS.map(
  (column) => column.key,
);

export type SaleColumnKey =
  | "invoice"
  | "customer"
  | "material"
  | "quantity"
  | "unitPrice"
  | "discount"
  | "total"
  | "status"
  | "date";

export const SALE_COLUMNS: {
  key: SaleColumnKey;
  label: string;
  hideable: boolean;
  align?: "right";
}[] = [
  { key: "invoice", label: "Invoice", hideable: false },
  { key: "customer", label: "Customer", hideable: false },
  { key: "material", label: "Material", hideable: true },
  { key: "quantity", label: "Qty", hideable: true, align: "right" },
  { key: "unitPrice", label: "Unit Price", hideable: true, align: "right" },
  { key: "discount", label: "Discount", hideable: true, align: "right" },
  { key: "total", label: "Total", hideable: false, align: "right" },
  { key: "status", label: "Payment Status", hideable: false },
  { key: "date", label: "Date", hideable: true },
];

export const DEFAULT_SALE_COLUMNS: SaleColumnKey[] = SALE_COLUMNS.map((column) => column.key);
