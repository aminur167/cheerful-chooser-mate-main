import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Breadcrumbs } from "./breadcrumbs-D7Wm6Jnk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-header-B70tvyWu.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ title, description, actions, breadcrumbs, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("space-y-5 border-b border-border pb-7", className),
		children: [breadcrumbs ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { items: breadcrumbs }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[minmax(0,1fr)] gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "truncate text-[26px] font-semibold leading-tight tracking-tight text-foreground",
					children: title
				}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-2xl text-sm leading-relaxed text-muted-foreground",
					children: description
				}) : null]
			}), actions ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0 flex-wrap items-center gap-2.5",
				children: actions
			}) : null]
		})]
	});
}
//#endregion
export { PageHeader as t };
