import { At as House, cn as ChevronRight } from "../_libs/lucide-react.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn } from "./button-BzhkirSF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/breadcrumbs-CW6ykn0r.js
var import_jsx_runtime = require_jsx_runtime();
function formatDate(value, locale = "en-US") {
	const date = typeof value === "string" ? new Date(value) : value;
	return new Intl.DateTimeFormat(locale, {
		day: "2-digit",
		month: "short",
		year: "numeric"
	}).format(date);
}
function formatDateTime(value, locale = "en-US") {
	const date = typeof value === "string" ? new Date(value) : value;
	return new Intl.DateTimeFormat(locale, {
		day: "2-digit",
		month: "short",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit"
	}).format(date);
}
function formatNumber(value, locale = "en-US") {
	return new Intl.NumberFormat(locale).format(value);
}
function initialsOf(name) {
	return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "").join("");
}
/** "branch-settings" -> "Branch Settings" */
function titleCaseSlug(slug) {
	return slug.split("-").filter(Boolean).map((part) => part[0]?.toUpperCase() + part.slice(1)).join(" ");
}
/** Derives breadcrumbs from the current pathname unless `items` is provided. */
function Breadcrumbs({ items, className }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const derived = items ?? pathname.split("/").filter(Boolean).map((segment, index, all) => ({
		label: titleCaseSlug(segment),
		to: index === all.length - 1 ? void 0 : "/" + all.slice(0, index + 1).join("/")
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Breadcrumb",
		className: cn("min-w-0", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "flex min-w-0 items-center gap-1.5 text-sm text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "shrink-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					"aria-label": "Home",
					className: "inline-flex items-center rounded-sm p-0.5 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-3.5 w-3.5" })
				})
			}), derived.map((crumb) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: "h-3.5 w-3.5 shrink-0 opacity-50",
					"aria-hidden": "true"
				}), crumb.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: crumb.to,
					className: "truncate rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
					children: crumb.label
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-current": "page",
					className: "truncate font-medium text-foreground",
					children: crumb.label
				})]
			}, crumb.label))]
		})
	});
}
//#endregion
export { initialsOf as a, formatNumber as i, formatDate as n, formatDateTime as r, Breadcrumbs as t };
