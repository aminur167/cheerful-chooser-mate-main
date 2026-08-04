import { Bn as ArrowDownRight, Pn as ArrowUpRight, ut as Minus } from "../_libs/lucide-react.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn } from "./button-BzhkirSF.mjs";
import { t as Card } from "./card-Ce78aY8w.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kpi-card-BH70wzWL.js
var import_jsx_runtime = require_jsx_runtime();
var toneClass = {
	primary: {
		icon: "bg-primary/10 text-primary",
		delta: "text-primary"
	},
	success: {
		icon: "bg-success/12 text-success",
		delta: "text-success"
	},
	warning: {
		icon: "bg-warning/15 text-warning",
		delta: "text-warning"
	},
	danger: {
		icon: "bg-danger/12 text-danger",
		delta: "text-danger"
	}
};
function KpiCard({ kpi }) {
	const Icon = kpi.icon;
	const tone = toneClass[kpi.tone];
	const DeltaIcon = kpi.delta?.direction === "up" ? ArrowUpRight : kpi.delta?.direction === "down" ? ArrowDownRight : Minus;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		interactive: true,
		className: "p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "min-w-0 truncate text-[13px] font-medium text-muted-foreground",
					children: kpi.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg", tone.icon),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-[18px] w-[18px]",
						"aria-hidden": "true"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[26px] font-semibold leading-none tracking-tight tabular-nums text-foreground",
				children: kpi.value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-center gap-x-2 gap-y-1",
				children: [kpi.delta ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: cn("inline-flex items-center gap-1 text-[12.5px] font-medium", kpi.delta.direction === "down" ? "text-danger" : tone.delta),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeltaIcon, {
						className: "h-3.5 w-3.5",
						"aria-hidden": "true"
					}), kpi.delta.value]
				}) : null, kpi.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate text-[12.5px] text-muted-foreground",
					children: kpi.hint
				}) : null]
			})
		]
	});
}
function KpiGrid({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
		children: items.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, { kpi }, kpi.id))
	});
}
//#endregion
export { KpiGrid as n, KpiCard as t };
