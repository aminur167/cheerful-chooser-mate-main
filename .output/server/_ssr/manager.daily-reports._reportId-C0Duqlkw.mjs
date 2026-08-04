import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { $ as PhoneCall, $t as ClipboardCheck, Cn as Boxes, Ln as ArrowLeft, Rt as FileDown, Vt as Eye, a as Wallet, mt as MapPinned, s as UsersRound, xn as Building2 } from "../_libs/lucide-react.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
import { L as REPORT_STATUS_TONE, s as Route$19, x as DAILY_BRANCH } from "./router-BtnFRLs5.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Button } from "./button-BzhkirSF.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as Card } from "./card-Ce78aY8w.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { t as WidgetCard } from "./widget-card-Dbo4snDS.mjs";
import { a as ManagerNotesSummary, c as ReportPreviewDialog, f as UpcomingTomorrowWidget, n as DailyTimeline, o as PendingTasksWidget, p as WeatherWidget, t as CircularProgress, u as TodaysGoalWidget } from "./closing-section-BGVWafYP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.daily-reports._reportId-C0Duqlkw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SummaryBlock({ title, icon: Icon, rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title,
		icon: Icon,
		showMenu: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "space-y-0.5",
			children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-3 border-b border-dashed border-border py-2 last:border-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "min-w-0 text-[12.5px] text-muted-foreground",
					children: row.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "shrink-0 text-[13px] font-medium tabular-nums text-foreground",
					children: row.value
				})]
			}, row.label))
		})
	});
}
function DailyReportDetailPage() {
	const { report } = Route$19.useLoaderData();
	const [previewOpen, setPreviewOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: `Daily Report ${report.code}`,
				description: `${report.branch} · ${report.date} · closing report prepared by ${report.manager}.`,
				breadcrumbs: [
					{
						label: "Branch Manager",
						to: "/manager"
					},
					{
						label: "Daily Reports",
						to: "/manager/daily-reports"
					},
					{ label: report.code }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/manager/daily-reports",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), "Back"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => setPreviewOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Preview Report"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => toast.info("PDF export is a placeholder in this build"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Export PDF"]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-6 2xl:grid-cols-[minmax(0,1fr)_360px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "flex flex-wrap items-center justify-between gap-6 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-0 items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
										className: "h-5 w-5",
										"aria-hidden": "true"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-[16px] font-semibold tracking-tight text-foreground",
												children: report.branch
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
												tone: REPORT_STATUS_TONE[report.status],
												label: report.status
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-[12.5px] text-muted-foreground",
											children: DAILY_BRANCH.address
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[12.5px] text-muted-foreground",
											children: [
												report.openingTime,
												" – ",
												report.closingTime,
												" · ",
												report.workingHours,
												" ·",
												" ",
												DAILY_BRANCH.therapists,
												" therapists · ",
												DAILY_BRANCH.rooms,
												" rooms"
											]
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularProgress, {
								value: report.performanceScore,
								label: "Score",
								size: 104
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 xl:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryBlock, {
									title: "Patient Summary",
									icon: UsersRound,
									rows: [
										{
											label: "Patients served",
											value: String(report.patientsServed)
										},
										{
											label: "New registrations",
											value: String(report.newRegistrations)
										},
										{
											label: "Pending tasks",
											value: String(report.pendingTasks)
										}
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryBlock, {
									title: "Clinical Summary",
									icon: ClipboardCheck,
									rows: [
										{
											label: "Assessments",
											value: String(report.assessments)
										},
										{
											label: "Individual therapy",
											value: String(report.individualSessions)
										},
										{
											label: "Group therapy",
											value: String(report.groupSessions)
										},
										{
											label: "Completed sessions",
											value: String(report.completedSessions)
										},
										{
											label: "Missed sessions",
											value: String(report.missedSessions)
										},
										{
											label: "Cancelled sessions",
											value: String(report.cancelledSessions)
										}
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryBlock, {
									title: "Financial Summary",
									icon: Wallet,
									rows: [
										{
											label: "Collection",
											value: formatTaka(report.collection)
										},
										{
											label: "Due collected",
											value: formatTaka(report.dueCollected)
										},
										{
											label: "Discounts",
											value: formatTaka(report.discounts)
										},
										{
											label: "Pending due",
											value: formatTaka(report.pendingDue)
										},
										{
											label: "Target",
											value: formatTaka(report.targetCollection)
										}
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryBlock, {
									title: "Inventory Summary",
									icon: Boxes,
									rows: [
										{
											label: "Stock in",
											value: `${report.stockIn} units`
										},
										{
											label: "Stock out",
											value: `${report.stockOut} units`
										},
										{
											label: "Materials used",
											value: `${report.materialsUsed} items`
										},
										{
											label: "Low stock items",
											value: String(report.lowStock)
										}
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryBlock, {
									title: "Outdoor Summary",
									icon: MapPinned,
									rows: [
										{
											label: "Outdoor visits",
											value: String(report.outdoorVisits)
										},
										{
											label: "Home visits",
											value: "3"
										},
										{
											label: "School visits",
											value: "2"
										},
										{
											label: "Areas covered",
											value: "Mirpur, Uttara, Mohammadpur"
										}
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryBlock, {
									title: "Follow-up Summary",
									icon: PhoneCall,
									rows: [
										{
											label: "Calls made",
											value: String(report.followUps)
										},
										{
											label: "Connected",
											value: "12"
										},
										{
											label: "Rescheduled",
											value: "3"
										},
										{
											label: "Retention rate",
											value: "88%"
										}
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DailyTimeline, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-[15px] font-semibold tracking-tight text-foreground",
									children: "Manager Notes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-0.5 text-[12.5px] text-muted-foreground",
									children: [
										"Recorded by ",
										report.manager,
										" at ",
										report.closingTime
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManagerNotesSummary, { notes: report.notes })
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6",
					"aria-label": "Daily report widgets",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodaysGoalWidget, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PendingTasksWidget, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpcomingTomorrowWidget, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeatherWidget, {})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportPreviewDialog, {
				open: previewOpen,
				onOpenChange: setPreviewOpen,
				report
			})
		]
	});
}
//#endregion
export { DailyReportDetailPage as component };
