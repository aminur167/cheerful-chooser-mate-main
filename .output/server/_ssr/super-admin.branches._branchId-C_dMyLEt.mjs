import { Hn as Activity, Ln as ArrowLeft, Lt as FileText, N as Settings2, Q as Phone, Zt as Clock, gt as Mail, ht as MapPin, kn as Banknote, mn as ChartColumn, o as Users, p as UserCog, tt as PencilLine, xn as Building2, yn as CalendarCheck } from "../_libs/lucide-react.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
import { t as Route } from "./router-BtnFRLs5.mjs";
import { i as BRANCH_REVENUE_TREND, n as BRANCH_ACTIVITIES, o as BRANCH_STATUS_TONE } from "./branch-data-wY6g0_IE.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BzhkirSF.mjs";
import { a as initialsOf, i as formatNumber, n as formatDate } from "./breadcrumbs-CW6ykn0r.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as Card } from "./card-Ce78aY8w.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { t as WidgetCard } from "./widget-card-Dbo4snDS.mjs";
import { a as YAxis, l as CartesianGrid, o as XAxis, s as Area, t as AreaChart } from "../_libs/recharts+[...].mjs";
import { n as ChartTooltip, r as ChartTooltipContent, t as ChartContainer } from "./chart-BptILwYE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/super-admin.branches._branchId-C_dMyLEt.js
var import_jsx_runtime = require_jsx_runtime();
var revenueConfig = {
	revenue: {
		label: "Revenue",
		color: "var(--chart-1)"
	},
	collection: {
		label: "Collection",
		color: "var(--chart-2)"
	}
};
function BranchDetailPage() {
	const { branch } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: branch.name,
				description: `${branch.code} · ${branch.city}, ${branch.division} division`,
				breadcrumbs: [
					{
						label: "Super Admin",
						to: "/super-admin"
					},
					{
						label: "Branch Management",
						to: "/super-admin/branches"
					},
					{ label: branch.name }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/super-admin/branches",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Back"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Edit Branch"] })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Branch statistics",
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						icon: Users,
						label: "Patients",
						value: formatNumber(branch.patients),
						tone: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						icon: UserCog,
						label: "Staff members",
						value: String(branch.staff),
						tone: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						icon: Banknote,
						label: "Monthly revenue",
						value: formatTaka(branch.monthlyRevenue),
						tone: "success"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						icon: CalendarCheck,
						label: "Sessions today",
						value: String(branch.sessions),
						tone: "warning"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
					title: "Branch information",
					description: "Registered contact and location details",
					icon: Building2,
					className: "xl:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								icon: MapPin,
								label: "Address",
								value: branch.address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								icon: Phone,
								label: "Phone",
								value: branch.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								icon: Mail,
								label: "Email",
								value: branch.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								icon: Clock,
								label: "Working hours",
								value: branch.workingHours
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								icon: CalendarCheck,
								label: "Created",
								value: formatDate(branch.createdAt)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[12px] text-muted-foreground",
								children: "Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: BRANCH_STATUS_TONE[branch.status],
									label: branch.status
								})
							})] })
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
					title: "Manager information",
					description: "Primary point of contact",
					icon: UserCog,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary",
							children: initialsOf(branch.manager.name)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-semibold text-foreground",
								children: branch.manager.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate text-[12.5px] text-muted-foreground",
								children: ["Manager since ", formatDate(branch.manager.since)]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-5 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							icon: Phone,
							label: "Phone",
							value: branch.manager.phone
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							icon: Mail,
							label: "Email",
							value: branch.manager.email
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
					title: "Revenue overview",
					description: "Revenue vs. collection, last 6 months",
					icon: ChartColumn,
					className: "xl:col-span-2",
					contentClassName: "flex flex-col",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
						config: revenueConfig,
						className: "aspect-auto h-full min-h-[260px] w-full flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: BRANCH_REVENUE_TREND,
							margin: {
								top: 8,
								right: 8,
								bottom: 0,
								left: 0
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "branchRevenueFill",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "var(--chart-1)",
										stopOpacity: .3
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "var(--chart-1)",
										stopOpacity: .02
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "branchCollectionFill",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "var(--chart-2)",
										stopOpacity: .26
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "var(--chart-2)",
										stopOpacity: .02
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									vertical: false,
									strokeDasharray: "4 4",
									className: "stroke-border"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "month",
									tickLine: false,
									axisLine: false,
									tickMargin: 10,
									fontSize: 12
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									tickLine: false,
									axisLine: false,
									width: 48,
									fontSize: 12,
									tickFormatter: (value) => `${Math.round(value / 1e3)}k`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, { indicator: "dot" }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "revenue",
									stroke: "var(--chart-1)",
									strokeWidth: 2,
									isAnimationActive: false,
									fill: "url(#branchRevenueFill)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "collection",
									stroke: "var(--chart-2)",
									strokeWidth: 2,
									isAnimationActive: false,
									fill: "url(#branchCollectionFill)"
								})
							]
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
						title: "Patient summary",
						description: "Caseload snapshot",
						icon: Users,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRows, { rows: [
							{
								label: "Active patients",
								value: formatNumber(branch.patients)
							},
							{
								label: "New this month",
								value: String(Math.round(branch.patients * .12))
							},
							{
								label: "Sessions today",
								value: String(branch.sessions)
							},
							{
								label: "Today's collection",
								value: formatTaka(branch.todaysCollection)
							}
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
						title: "Staff summary",
						description: "Team composition",
						icon: UserCog,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRows, { rows: [
							{
								label: "Total staff",
								value: String(branch.staff)
							},
							{
								label: "Therapists",
								value: String(branch.therapists)
							},
							{
								label: "Support staff",
								value: String(branch.staff - branch.therapists)
							},
							{
								label: "Patients per therapist",
								value: String(Math.round(branch.patients / branch.therapists))
							}
						] })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
					title: "Recent activities",
					description: "Latest events at this branch",
					icon: Activity,
					className: "xl:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-5",
						children: BRANCH_ACTIVITIES.map((item) => {
							const Icon = item.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-muted/40 text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1 border-b border-border pb-4 last:border-0 last:pb-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium text-foreground",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[13px] text-muted-foreground",
											children: item.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-[12px] text-muted-foreground/80",
											children: item.time
										})
									]
								})]
							}, item.id);
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
					title: "Quick actions",
					description: "Common branch operations",
					icon: Settings2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [
							{
								label: "Assign Manager",
								icon: UserCog
							},
							{
								label: "View Reports",
								icon: FileText
							},
							{
								label: "Performance",
								icon: ChartColumn
							},
							{
								label: "Branch Settings",
								icon: Settings2
							}
						].map((action) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex flex-col items-start gap-2 rounded-lg border border-border bg-card p-3.5 text-left transition-enterprise hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(action.icon, {
								className: "h-4 w-4 text-primary",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[13px] font-medium text-foreground",
								children: action.label
							})]
						}, action.label))
					})
				})]
			})
		]
	});
}
function Stat({ icon: Icon, label, value, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		interactive: true,
		className: "flex items-center gap-3.5 p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `grid h-10 w-10 shrink-0 place-items-center rounded-lg ${tone === "success" ? "bg-success/12 text-success" : tone === "warning" ? "bg-warning/15 text-warning" : "bg-primary/10 text-primary"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "h-[18px] w-[18px]",
				"aria-hidden": "true"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12.5px] text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-lg font-semibold tabular-nums text-foreground",
				children: value
			})]
		})]
	});
}
function Field({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "mt-1 h-4 w-4 shrink-0 text-muted-foreground",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-[12px] text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "text-sm text-foreground",
				children: value
			})]
		})]
	});
}
function SummaryRows({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: "space-y-3",
		children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-[13px] text-muted-foreground",
				children: row.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "text-sm font-medium tabular-nums text-foreground",
				children: row.value
			})]
		}, row.label))
	});
}
//#endregion
export { BranchDetailPage as component };
