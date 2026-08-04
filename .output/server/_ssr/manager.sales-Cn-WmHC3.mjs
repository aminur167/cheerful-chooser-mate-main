import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { A as ShoppingCart, Cn as Boxes } from "../_libs/lucide-react.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
import { _ as SALES, c as MATERIAL_KPIS, r as MATERIALS } from "./material-data-BW4O74XG.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BzhkirSF.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as EmptyState } from "./empty-state-Bfa0wIfS.mjs";
import { t as KpiCard } from "./kpi-card-BH70wzWL.mjs";
import { t as TablePagination } from "./table-pagination-BEFzaEO7.mjs";
import { i as NewSaleDialog, n as DEFAULT_SALE_COLUMNS, o as SalesTable } from "./new-sale-dialog-TgI7flhM.mjs";
import { n as SalesFilters, t as DEFAULT_SALE_FILTERS } from "./sales-filters-Dn6ka9I8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.sales-Cn-WmHC3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAGE_SIZE = 10;
function SalesPage() {
	const [filters, setFilters] = (0, import_react.useState)(DEFAULT_SALE_FILTERS);
	const [page, setPage] = (0, import_react.useState)(1);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [columns, setColumns] = (0, import_react.useState)(DEFAULT_SALE_COLUMNS);
	const [saleOpen, setSaleOpen] = (0, import_react.useState)(false);
	const rows = (0, import_react.useMemo)(() => {
		const query = filters.search.trim().toLowerCase();
		return SALES.filter((sale) => {
			const material = MATERIALS.find((item) => item.id === sale.materialId);
			return (!query || [
				sale.invoiceNo,
				sale.customerName,
				sale.customerPhone,
				sale.materialName
			].join(" ").toLowerCase().includes(query)) && (filters.status === "all" || sale.status === filters.status) && (filters.method === "all" || sale.method === filters.method) && (filters.category === "all" || material?.category === filters.category);
		});
	}, [filters]);
	const pageCount = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
	const currentPage = Math.min(page, pageCount);
	const pageRows = rows.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
	const collected = rows.filter((sale) => sale.status === "Paid").reduce((sum, sale) => sum + sale.total, 0);
	const due = rows.filter((sale) => sale.status === "Due" || sale.status === "Partial").reduce((sum, sale) => sum + sale.total, 0);
	const toggleColumn = (key) => setColumns((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Material Sales",
				description: `${rows.length} sales · ${formatTaka(collected)} collected · ${formatTaka(due)} due`,
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Sales" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/materials",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Inventory"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setSaleOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "New Sale"]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Sales summary",
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: MATERIAL_KPIS.slice(0, 4).map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, { kpi }, kpi.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesFilters, {
					value: filters,
					onChange: (next) => {
						setFilters(next);
						setPage(1);
					},
					onRefresh: () => {
						setRefreshing(true);
						setTimeout(() => setRefreshing(false), 700);
					},
					isRefreshing: refreshing,
					visibleColumns: columns,
					onToggleColumn: toggleColumn
				}), pageRows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: ShoppingCart,
					title: "No Sales Found",
					description: "Adjust your filters or record a new material sale.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setSaleOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "New Sale"]
					}),
					secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => setFilters(DEFAULT_SALE_FILTERS),
						children: "Reset filters"
					}),
					className: "rounded-none border-0 shadow-none"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesTable, {
					rows: pageRows,
					visibleColumns: columns
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border px-4 py-3.5 sm:px-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TablePagination, {
						page: currentPage,
						pageSize: PAGE_SIZE,
						total: rows.length,
						onPageChange: setPage
					})
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewSaleDialog, {
				open: saleOpen,
				onOpenChange: setSaleOpen
			})
		]
	});
}
//#endregion
export { SalesPage as component };
