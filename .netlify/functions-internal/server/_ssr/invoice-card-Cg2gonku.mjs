import { J as Printer, Lt as FileText, Vt as Eye, Wt as Download } from "../_libs/lucide-react.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
import { r as INVOICE_STATUS_TONE } from "./payment-data-DkduNZNP.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BzhkirSF.mjs";
import { n as formatDate } from "./breadcrumbs-CW6ykn0r.mjs";
import { t as Card } from "./card-Ce78aY8w.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/invoice-card-Cg2gonku.js
var import_jsx_runtime = require_jsx_runtime();
/** Printable invoice summary card used in the Invoices tab. */
function InvoiceCard({ record }) {
	const payable = record.amount - record.discount;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		interactive: true,
		className: "flex h-full flex-col p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
							className: "h-[18px] w-[18px]",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-mono text-[13px] font-semibold text-foreground",
							children: record.invoiceNo
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate text-[12px] text-muted-foreground",
							children: ["Issued ", formatDate(record.paymentDate)]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: INVOICE_STATUS_TONE[record.invoiceStatus],
					label: record.invoiceStatus
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 space-y-2.5 border-t border-border pt-4 text-[13px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Patient",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/manager/patients/$patientId",
							params: { patientId: record.patientId },
							className: "font-medium text-foreground hover:underline",
							children: record.patientName
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Package",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: record.packageName
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Payable",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold tabular-nums text-foreground",
							children: formatTaka(payable)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Paid",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-success",
							children: formatTaka(record.paid)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Due",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: record.due > 0 ? "tabular-nums font-medium text-danger" : "tabular-nums text-muted-foreground",
							children: record.due > 0 ? formatTaka(record.due) : "—"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap items-center gap-2 border-t border-border pt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => window.print(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Print"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						disabled: true,
						title: "PDF export coming soon",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Download PDF"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						asChild: true,
						className: "ml-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/manager/payments/$paymentId",
							params: { paymentId: record.id },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), "Details"]
						})
					})
				]
			})
		]
	});
}
function Row({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "min-w-0 truncate text-right",
			children
		})]
	});
}
//#endregion
export { InvoiceCard as t };
