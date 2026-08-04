import { Ht as Ellipsis } from "../_libs/lucide-react.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { i as DropdownMenuItem, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-CXFNH1SK.mjs";
import { i as CardHeader, n as CardContent, t as Card } from "./card-Ce78aY8w.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/widget-card-Dbo4snDS.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Shared shell for every dashboard widget: icon + title + optional
* description, an optional action slot and a consistent "more" menu.
*/
function WidgetCard({ title, description, icon: Icon, action, menuItems = [
	"Refresh data",
	"Export as CSV",
	"View details"
], showMenu = true, children, contentClassName, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		interactive: true,
		className: cn("flex h-full flex-col", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-start gap-3",
				children: [Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-muted/50 text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-[18px] w-[18px]",
						"aria-hidden": "true"
					})
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "truncate text-[15px] font-semibold leading-tight tracking-tight text-foreground",
						children: title
					}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-[13px] leading-relaxed text-muted-foreground",
						children: description
					}) : null]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-2",
				children: [action, showMenu ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "h-8 w-8 text-muted-foreground",
						"aria-label": `More options for ${title}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
					align: "end",
					className: "w-48",
					children: menuItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, { children: item }, item))
				})] }) : null]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: cn("flex-1 pt-0", contentClassName),
			children
		})]
	});
}
//#endregion
export { WidgetCard as t };
