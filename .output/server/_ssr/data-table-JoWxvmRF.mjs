import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C0WYWEQX.mjs";
import { t as EmptyState } from "./empty-state-Cu0SfqSK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/data-table-JoWxvmRF.js
var import_jsx_runtime = require_jsx_runtime();
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("animate-pulse rounded-md bg-primary/10", className),
		...props
	});
}
function TableSkeleton({ rows = 5, columns = 4 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-6 border-b border-border bg-muted/40 px-5 py-3.5",
			children: Array.from({ length: columns }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3.5 flex-1" }, index))
		}), Array.from({ length: rows }).map((_, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-6 border-b border-border px-5 py-4 last:border-0",
			children: Array.from({ length: columns }).map((_, colIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 flex-1" }, colIndex))
		}, rowIndex))]
	});
}
function DataTable({ columns, rows, getRowId, isLoading = false, emptyTitle = "Nothing to show", emptyDescription, emptyAction, caption, toolbar, footer, stickyHeader = true, maxBodyHeight, className }) {
	const alignClass = (align) => align === "right" ? "text-right" : align === "center" ? "text-center" : "text-left";
	const body = isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-4 sm:p-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableSkeleton, { columns: columns.length })
	}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
		title: emptyTitle,
		description: emptyDescription,
		action: emptyAction,
		className: "rounded-none border-0 shadow-none"
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-auto",
		style: maxBodyHeight ? { maxHeight: maxBodyHeight } : void 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [
			caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
				className: "sr-only",
				children: caption
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
				className: "border-border hover:bg-transparent",
				children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					scope: "col",
					className: cn("h-11 bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur", stickyHeader && "sticky top-0 z-10", alignClass(column.align), column.className),
					children: column.header
				}, column.key))
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
				className: "border-border transition-enterprise hover:bg-surface-hover",
				children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: cn("px-5 py-3.5 text-sm text-foreground", alignClass(column.align), column.className),
					children: column.cell(row)
				}, column.key))
			}, getRowId(row, index))) })
		] })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("overflow-hidden rounded-xl border border-border bg-card shadow-card", className),
		children: [
			toolbar,
			body,
			footer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border px-4 py-3.5 sm:px-5",
				children: footer
			}) : null
		]
	});
}
//#endregion
export { DataTable as t };
