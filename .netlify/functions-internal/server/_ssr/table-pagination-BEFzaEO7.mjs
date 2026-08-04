import { cn as ChevronRight, ln as ChevronLeft } from "../_libs/lucide-react.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/table-pagination-BEFzaEO7.js
var import_jsx_runtime = require_jsx_runtime();
function TablePagination({ page, pageSize, total, onPageChange, className }) {
	const pageCount = Math.max(1, Math.ceil(total / pageSize));
	const from = total === 0 ? 0 : (page - 1) * pageSize + 1;
	const to = Math.min(page * pageSize, total);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		"aria-label": "Pagination",
		className: cn("grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:justify-between", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "min-w-0 truncate text-[13px] text-muted-foreground",
			children: [
				"Showing ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-medium text-foreground tabular-nums",
					children: [
						from,
						"–",
						to
					]
				}),
				" of",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-foreground tabular-nums",
					children: total
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					disabled: page <= 1,
					onClick: () => onPageChange(page - 1),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Previous"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "px-1.5 text-[13px] tabular-nums text-muted-foreground",
					children: [
						"Page ",
						page,
						" of ",
						pageCount
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					disabled: page >= pageCount,
					onClick: () => onPageChange(page + 1),
					children: ["Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					})]
				})
			]
		})]
	});
}
//#endregion
export { TablePagination as t };
