import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Ln as ArrowLeft, gn as CalendarPlus, mt as MapPinned } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BzhkirSF.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as Card } from "./card-Ce78aY8w.mjs";
import { a as TherapistAvailabilityWidget, s as TodaysScheduleWidget, t as AreaCoverageWidget } from "./outdoor-widgets-3JHA2AvR.mjs";
import { t as ScheduleVisitDialog } from "./schedule-visit-dialog-Cb3CDl2p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.outdoor.new-YpPgFN7M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEP_HINTS = [
	{
		step: 1,
		title: "Select Patient",
		hint: "Search patient, guardian, diagnosis and plan"
	},
	{
		step: 2,
		title: "Visit Information",
		hint: "Type, date, time, duration, priority, purpose"
	},
	{
		step: 3,
		title: "Location",
		hint: "Division, district, area, address, map link"
	},
	{
		step: 4,
		title: "Assign Therapist",
		hint: "Therapist, support staff, vehicle, equipment"
	},
	{
		step: 5,
		title: "Review",
		hint: "Save draft or schedule the visit"
	}
];
function NewOutdoorVisitPage() {
	const [open, setOpen] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Schedule Outdoor Visit",
				description: "Plan an outdoor therapy visit in five guided steps.",
				breadcrumbs: [
					{
						label: "Branch Manager",
						to: "/manager"
					},
					{
						label: "Outdoor Service",
						to: "/manager/outdoor"
					},
					{ label: "Schedule Visit" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/outdoor",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Back to visits"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Open wizard"]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_360px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPinned, {
									className: "h-5 w-5",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-[15px] font-semibold tracking-tight text-foreground",
									children: "Five-step scheduling"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[13px] leading-relaxed text-muted-foreground",
									children: "Choose the patient, describe the visit, confirm the location, assign the field team, then review before scheduling."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-6 grid gap-3 sm:grid-cols-2",
							children: STEP_HINTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 rounded-xl border border-border bg-muted/25 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border bg-background text-[12px] font-semibold text-muted-foreground",
									children: item.step
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-medium text-foreground",
										children: item.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-[12.5px] text-muted-foreground",
										children: item.hint
									})]
								})]
							}, item.step))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "mt-6",
							onClick: () => setOpen(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), "Schedule Outdoor Visit"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6",
					"aria-label": "Scheduling context",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodaysScheduleWidget, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapistAvailabilityWidget, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaCoverageWidget, {})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleVisitDialog, {
				open,
				onOpenChange: setOpen
			})
		]
	});
}
//#endregion
export { NewOutdoorVisitPage as component };
