import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { A as ShoppingCart, Ln as ArrowLeft, et as Pencil } from "../_libs/lucide-react.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
import { i as Route$15 } from "./router-BtnFRLs5.mjs";
import { u as MATERIAL_STATUS_TONE } from "./material-data-BW4O74XG.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BzhkirSF.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as Card } from "./card-Ce78aY8w.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { t as Separator } from "./separator-BlrYcTzX.mjs";
import { n as MaterialThumbnail } from "./material-thumbnail-CuqMG4jr.mjs";
import { i as NewSaleDialog, n as DEFAULT_SALE_COLUMNS, o as SalesTable } from "./new-sale-dialog-TgI7flhM.mjs";
import { i as StockMovementTimeline, r as StockLevel } from "./stock-history-table-CGVM5Out.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.materials._materialId-CsWc3do5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MaterialDetailPage() {
	const { material, sales, movements, purchases } = Route$15.useLoaderData();
	const [saleOpen, setSaleOpen] = (0, import_react.useState)(false);
	const soldUnits = sales.reduce((sum, sale) => sum + sale.quantity, 0);
	const revenue = sales.reduce((sum, sale) => sum + sale.total, 0);
	const stockValue = material.quantity * material.purchasePrice;
	const margin = material.sellingPrice - material.purchasePrice;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: material.name,
				description: `${material.code} · ${material.category} · ${material.brand}`,
				breadcrumbs: [
					{
						label: "Branch Manager",
						to: "/manager"
					},
					{
						label: "Materials & Sales",
						to: "/manager/materials"
					},
					{ label: material.name }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/manager/materials",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), "Back"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Edit"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setSaleOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Sell"]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_360px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-5 sm:flex-row sm:items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialThumbnail, {
									category: material.category,
									size: "lg",
									className: "h-24 w-24 shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
												label: material.status,
												tone: MATERIAL_STATUS_TONE[material.status]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[12.5px] text-muted-foreground",
												children: [
													material.location,
													" · ",
													material.branch
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[13px] leading-relaxed text-muted-foreground",
											children: material.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockLevel, { item: material })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-6" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
								children: [
									{
										label: "Purchase price",
										value: formatTaka(material.purchasePrice)
									},
									{
										label: "Selling price",
										value: formatTaka(material.sellingPrice)
									},
									{
										label: "Margin / unit",
										value: formatTaka(margin)
									},
									{
										label: "Stock value",
										value: formatTaka(stockValue)
									},
									{
										label: "Current stock",
										value: `${material.quantity} ${material.unit}`
									},
									{
										label: "Minimum stock",
										value: `${material.minStock} ${material.unit}`
									},
									{
										label: "Units sold",
										value: String(soldUnits)
									},
									{
										label: "Revenue",
										value: formatTaka(revenue)
									}
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border bg-muted/25 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-[11.5px] font-medium uppercase tracking-wide text-muted-foreground",
										children: item.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 text-[15px] font-semibold tabular-nums text-foreground",
										children: item.value
									})]
								}, item.label))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "overflow-hidden p-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-border px-5 py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[15px] font-semibold tracking-tight text-foreground",
								children: "Sales history"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-0.5 text-[12.5px] text-muted-foreground",
								children: [
									sales.length,
									" sale",
									sales.length === 1 ? "" : "s",
									" recorded for this material."
								]
							})]
						}), sales.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-5 py-8 text-center text-[13px] text-muted-foreground",
							children: "No sales recorded yet."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesTable, {
							rows: sales,
							visibleColumns: DEFAULT_SALE_COLUMNS
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[15px] font-semibold tracking-tight text-foreground",
								children: "Supplier"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-4 space-y-3 text-[13px]",
								children: [
									{
										label: "Name",
										value: material.supplier.name
									},
									{
										label: "Phone",
										value: material.supplier.phone
									},
									{
										label: "Email",
										value: material.supplier.email
									},
									{
										label: "Address",
										value: material.supplier.address
									}
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-muted-foreground",
										children: item.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-right font-medium text-foreground",
										children: item.value
									})]
								}, item.label))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[15px] font-semibold tracking-tight text-foreground",
								children: "Purchase history"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-3",
								children: purchases.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-[13px] text-muted-foreground",
									children: "No purchases recorded."
								}) : purchases.map((purchase) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-xl border border-border bg-muted/25 p-3.5 text-[13px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-foreground",
											children: purchase.date
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold tabular-nums text-foreground",
											children: formatTaka(purchase.total)
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-muted-foreground",
										children: [
											purchase.quantity,
											" × ",
											formatTaka(purchase.unitCost),
											" · ",
											purchase.supplier
										]
									})]
								}, purchase.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[15px] font-semibold tracking-tight text-foreground",
								children: "Stock movements"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockMovementTimeline, { items: movements })
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewSaleDialog, {
				open: saleOpen,
				onOpenChange: setSaleOpen,
				presetMaterialId: material.id
			})
		]
	});
}
//#endregion
export { MaterialDetailPage as component };
