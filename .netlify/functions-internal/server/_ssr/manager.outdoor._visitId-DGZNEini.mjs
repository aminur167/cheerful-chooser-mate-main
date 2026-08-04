import { $t as ClipboardCheck, J as Printer, Ln as ArrowLeft, an as CircleCheck, l as UserRound, mt as MapPinned, vn as CalendarClock } from "../_libs/lucide-react.mjs";
import { n as Route$12 } from "./router-BtnFRLs5.mjs";
import { S as VISIT_STATUS_TONE, b as VISIT_PRIORITY_TONE, v as VISIT_OUTCOME_TONE } from "./outdoor-data-ClUJqde_.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BzhkirSF.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as Card } from "./card-Ce78aY8w.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { t as WidgetCard } from "./widget-card-Dbo4snDS.mjs";
import { a as TherapistAvailabilityWidget, c as UpcomingVisitsWidget, n as MapPlaceholderCard, t as AreaCoverageWidget } from "./outdoor-widgets-3JHA2AvR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.outdoor._visitId-DGZNEini.js
var import_jsx_runtime = require_jsx_runtime();
function InfoRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-3 border-b border-dashed border-border py-2 last:border-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "min-w-0 text-[12.5px] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "shrink-0 text-[13px] font-medium text-foreground",
			children: value
		})]
	});
}
function OutdoorVisitDetailPage() {
	const { visit } = Route$12.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: `${visit.visitId} · ${visit.patientName}`,
			description: `${visit.type} in ${visit.area}, ${visit.district} on ${visit.date} at ${visit.time}.`,
			breadcrumbs: [
				{
					label: "Branch Manager",
					to: "/manager"
				},
				{
					label: "Outdoor Service",
					to: "/manager/outdoor"
				},
				{ label: visit.visitId }
			],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/outdoor",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Back"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Print Visit Sheet"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Complete Visit"] })
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-6 2xl:grid-cols-[minmax(0,1fr)_360px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "flex flex-wrap items-start justify-between gap-4 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
									className: "h-5 w-5",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-[16px] font-semibold tracking-tight text-foreground",
										children: visit.patientName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-[12.5px] text-muted-foreground",
										children: [
											"Guardian: ",
											visit.guardian,
											" (",
											visit.guardianRelation,
											") · ",
											visit.guardianPhone
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[12.5px] text-muted-foreground",
										children: visit.address
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: VISIT_STATUS_TONE[visit.status],
									label: visit.status
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: VISIT_PRIORITY_TONE[visit.priority],
									label: visit.priority
								}),
								visit.outcome ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: VISIT_OUTCOME_TONE[visit.outcome],
									label: visit.outcome
								}) : null
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 xl:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Visit Information",
							icon: CalendarClock,
							showMenu: false,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									label: "Visit type",
									value: visit.type
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									label: "Date",
									value: visit.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									label: "Time",
									value: visit.time
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									label: "Duration",
									value: visit.duration
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									label: "Purpose",
									value: visit.purpose
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									label: "Therapist",
									value: visit.therapistName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									label: "Transport",
									value: visit.vehicle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									label: "Support staff",
									value: visit.supportStaff
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Location",
							icon: MapPinned,
							showMenu: false,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									label: "Division",
									value: visit.division
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									label: "District",
									value: visit.district
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									label: "Area",
									value: visit.area
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									label: "Address",
									value: visit.address
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									label: "Distance",
									value: `${visit.distanceKm} km`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
									label: "Travel time",
									value: visit.travelTime
								})
							] })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPlaceholderCard, {
						address: visit.address,
						area: `${visit.area}, ${visit.district}`,
						distanceKm: visit.distanceKm,
						travelTime: visit.travelTime,
						mapLink: visit.mapLink
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 xl:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Visit Outcome",
							icon: ClipboardCheck,
							showMenu: false,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] leading-relaxed text-muted-foreground",
								children: visit.notes || "Outcome notes will appear after the visit is completed."
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Recommendations",
							icon: CircleCheck,
							showMenu: false,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2.5",
								children: (visit.recommendations.length ? visit.recommendations : ["Recommendations pending visit completion."]).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5 text-[13px] text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
										className: "mt-0.5 h-4 w-4 shrink-0 text-success",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0",
										children: item
									})]
								}, item))
							})
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-6",
				"aria-label": "Outdoor visit widgets",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpcomingVisitsWidget, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapistAvailabilityWidget, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaCoverageWidget, {})
				]
			})]
		})]
	});
}
//#endregion
export { OutdoorVisitDetailPage as component };
