import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Mt as History, P as ServerCog, Wt as Download, Z as Plus, b as TrendingUp, bn as Building, cn as ChevronRight, fn as ChartPie, mn as ChartColumn, o as Users, t as Zap, xn as Building2 } from "../_libs/lucide-react.mjs";
import { a as RECENT_ACTIVITIES, c as REVENUE_SERIES, d as TOP_BRANCHES, f as formatTaka, i as QUICK_ACTIONS, l as SYSTEM_OVERVIEW, n as PATIENT_GROWTH, o as RECENT_BRANCHES, r as PAYMENT_DISTRIBUTION, s as REVENUE_RANGES, t as KPIS, u as THERAPY_STATS } from "./dashboard-data-1VKY94pa.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BYMcu4zp.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as Progress } from "./progress-DYQcnTxt.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { t as WidgetCard } from "./widget-card-Dbo4snDS.mjs";
import { n as KpiGrid } from "./kpi-card-BH70wzWL.mjs";
import { a as YAxis, c as Line, d as Pie, f as Cell, i as LineChart, l as CartesianGrid, n as PieChart, o as XAxis, r as BarChart, s as Area, t as AreaChart, u as Bar } from "../_libs/recharts+[...].mjs";
import { n as ChartTooltip, r as ChartTooltipContent, t as ChartContainer } from "./chart-BptILwYE.mjs";
import { t as DataTable } from "./data-table-3ywO74Uw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/super-admin.dashboard-DoH1p26w.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var config$3 = {
	revenue: {
		label: "Monthly Revenue",
		color: "var(--chart-1)"
	},
	collection: {
		label: "Collection",
		color: "var(--chart-2)"
	},
	expenses: {
		label: "Expenses",
		color: "var(--chart-3)"
	}
};
function RevenueOverview() {
	const [range, setRange] = (0, import_react.useState)("6m");
	const data = REVENUE_SERIES[range];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
		title: "Revenue Overview",
		description: "Revenue, collection and expenses across all branches",
		icon: TrendingUp,
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
			value: range,
			onValueChange: (value) => setRange(value),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
				className: "h-9 w-[152px]",
				"aria-label": "Select revenue period",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
				align: "end",
				children: REVENUE_RANGES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: option.key,
					children: option.label
				}, option.key))
			})]
		}),
		contentClassName: "flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-5 flex flex-wrap items-center gap-x-6 gap-y-2",
			children: Object.entries(config$3).map(([key, item]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-2 text-[12.5px] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-2 w-2 rounded-full",
					style: { backgroundColor: item.color },
					"aria-hidden": "true"
				}), item.label]
			}, key))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
			config: config$3,
			className: "aspect-auto h-full min-h-[300px] w-full flex-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
				data,
				margin: {
					left: 4,
					right: 8,
					top: 4,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						vertical: false,
						strokeDasharray: "4 4",
						className: "stroke-border"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "period",
						tickLine: false,
						axisLine: false,
						tickMargin: 10,
						fontSize: 12
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tickLine: false,
						axisLine: false,
						width: 52,
						fontSize: 12,
						tickFormatter: (value) => `${Math.round(value / 1e3)}k`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, {
						formatter: (value) => formatTaka(Number(value)),
						indicator: "dot"
					}) }),
					Object.entries(config$3).map(([key, item]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: key,
						stroke: item.color,
						strokeWidth: 2,
						dot: false,
						activeDot: { r: 4 }
					}, key))
				]
			})
		})]
	});
}
function BranchPerformance() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Branch Performance",
		description: "Top 5 branches by revenue this month",
		icon: Building2,
		contentClassName: "pb-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "-mx-2 divide-y divide-border",
			children: TOP_BRANCHES.map((branch) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-lg px-2 py-4 transition-enterprise hover:bg-surface-hover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-medium text-foreground",
								children: branch.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate text-[12.5px] text-muted-foreground",
								children: [
									branch.manager,
									" · ",
									branch.city
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							tone: branch.status.tone,
							label: branch.status.label
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center justify-between gap-3 text-[12.5px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium tabular-nums text-foreground",
							children: formatTaka(branch.revenue)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums text-muted-foreground",
							children: [branch.patients, " patients"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
							value: branch.target,
							className: "h-1.5 flex-1",
							"aria-label": `${branch.name} target completion`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "w-9 shrink-0 text-right text-[12px] tabular-nums text-muted-foreground",
							children: [branch.target, "%"]
						})]
					})
				]
			}, branch.id))
		})
	});
}
var config$2 = {
	patients: {
		label: "Total patients",
		color: "var(--chart-1)"
	},
	newPatients: {
		label: "New patients",
		color: "var(--chart-2)"
	}
};
function PatientGrowth() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Patient Growth",
		description: "Monthly registered patients",
		icon: Users,
		contentClassName: "flex flex-col",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
			config: config$2,
			className: "aspect-auto h-full min-h-[240px] w-full flex-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
				data: PATIENT_GROWTH,
				margin: {
					left: 0,
					right: 8,
					top: 4,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "patientGrowthFill",
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "var(--chart-1)",
							stopOpacity: .28
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "var(--chart-1)",
							stopOpacity: .02
						})]
					}) }),
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
						width: 40,
						fontSize: 12
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, { indicator: "dot" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "patients",
						stroke: "var(--chart-1)",
						strokeWidth: 2,
						fill: "url(#patientGrowthFill)"
					})
				]
			})
		})
	});
}
var config$1 = Object.fromEntries(PAYMENT_DISTRIBUTION.map((slice) => [slice.name, {
	label: slice.name,
	color: slice.token
}]));
function PaymentDistribution() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
		title: "Payment Distribution",
		description: "Share of collections by payment type",
		icon: ChartPie,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
				config: config$1,
				className: "aspect-auto h-[200px] w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, {
					formatter: (value) => `${value}%`,
					hideIndicator: true
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
					data: PAYMENT_DISTRIBUTION,
					dataKey: "value",
					nameKey: "name",
					innerRadius: 58,
					outerRadius: 88,
					paddingAngle: 2,
					strokeWidth: 0,
					children: PAYMENT_DISTRIBUTION.map((slice) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: slice.token }, slice.name))
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xl font-semibold tabular-nums text-foreground",
					children: "100%"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[12px] text-muted-foreground",
					children: "Collections"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-5 space-y-2.5",
			children: PAYMENT_DISTRIBUTION.map((slice) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-2.5 text-[13px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-2.5 w-2.5 shrink-0 rounded-full",
						style: { backgroundColor: slice.token },
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1 truncate text-muted-foreground",
						children: slice.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 font-medium tabular-nums text-foreground",
						children: [slice.value, "%"]
					})
				]
			}, slice.name))
		})]
	});
}
var config = { sessions: {
	label: "Sessions",
	color: "var(--chart-1)"
} };
function TherapyStatistics() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Therapy Statistics",
		description: "Sessions delivered this month by type",
		icon: ChartColumn,
		contentClassName: "flex flex-col",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
			config,
			className: "aspect-auto h-full min-h-[240px] w-full flex-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
				data: THERAPY_STATS,
				layout: "vertical",
				margin: {
					left: 0,
					right: 16,
					top: 4,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						horizontal: false,
						strokeDasharray: "4 4",
						className: "stroke-border"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						type: "number",
						tickLine: false,
						axisLine: false,
						fontSize: 12
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						type: "category",
						dataKey: "name",
						tickLine: false,
						axisLine: false,
						width: 120,
						fontSize: 12
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, {
						cursor: false,
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, { indicator: "dot" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "sessions",
						fill: "var(--chart-1)",
						radius: [
							0,
							6,
							6,
							0
						],
						barSize: 18
					})
				]
			})
		})
	});
}
var columns = [
	{
		key: "branch",
		header: "Branch",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate font-medium",
				children: row.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-[12.5px] text-muted-foreground",
				children: row.city
			})]
		})
	},
	{
		key: "manager",
		header: "Manager",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate",
				children: row.manager
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-[12.5px] text-muted-foreground",
				children: row.managerRole
			})]
		})
	},
	{
		key: "patients",
		header: "Patients",
		align: "right",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular-nums",
			children: row.patients
		})
	},
	{
		key: "revenue",
		header: "Revenue",
		align: "right",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap font-medium tabular-nums",
			children: formatTaka(row.revenue)
		})
	},
	{
		key: "status",
		header: "Status",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: row.status.tone,
			label: row.status.label
		})
	},
	{
		key: "action",
		header: "Action",
		align: "right",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "ghost",
			size: "sm",
			"aria-label": `View ${row.name}`,
			children: ["View", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			})]
		})
	}
];
function RecentBranches() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Recent Branches",
		description: "Latest locations added to the organisation",
		icon: Building,
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			size: "sm",
			children: "View all"
		}),
		contentClassName: "px-0 pb-0 sm:px-0 sm:pb-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			columns,
			rows: RECENT_BRANCHES,
			getRowId: (row) => row.id,
			caption: "Recently created branches",
			className: "rounded-none border-0 shadow-none"
		})
	});
}
var toneClass$1 = {
	success: "bg-success/12 text-success",
	warning: "bg-warning/15 text-warning",
	danger: "bg-danger/12 text-danger",
	info: "bg-primary/10 text-primary",
	neutral: "bg-muted text-muted-foreground"
};
function RecentActivities() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Recent Activities",
		description: "Latest events across the organisation",
		icon: History,
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "sm",
			children: "View log"
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "relative space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-[15px] top-2 bottom-2 w-px bg-border",
				"aria-hidden": "true"
			}), RECENT_ACTIVITIES.map((item) => {
				const Icon = item.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative flex gap-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full ring-4 ring-card", toneClass$1[item.tone]),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1 pt-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-foreground",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-[13px] leading-relaxed text-muted-foreground",
								children: item.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[12px] text-muted-foreground/80",
								children: item.time
							})
						]
					})]
				}, item.id);
			})]
		})
	});
}
function QuickActions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Quick Actions",
		description: "Frequently used head-office shortcuts",
		icon: Zap,
		showMenu: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
			children: QUICK_ACTIONS.map((action) => {
				const Icon = action.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "group flex items-start gap-3 rounded-xl border border-border bg-background p-4 text-left transition-enterprise hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-hover hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-enterprise group-hover:bg-primary group-hover:text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-[18px] w-[18px]",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-sm font-medium text-foreground",
							children: action.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-[12.5px] text-muted-foreground",
							children: action.description
						})]
					})]
				}, action.id);
			})
		})
	});
}
var toneClass = {
	success: "bg-success/12 text-success",
	warning: "bg-warning/15 text-warning",
	danger: "bg-danger/12 text-danger",
	info: "bg-primary/10 text-primary",
	neutral: "bg-muted text-muted-foreground"
};
function SystemOverview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
		title: "System Overview",
		description: "Platform health at a glance",
		icon: ServerCog,
		showMenu: false,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: SYSTEM_OVERVIEW.map((stat) => {
				const Icon = stat.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-background p-4 transition-enterprise hover:border-border-strong hover:bg-surface-hover",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("grid h-8 w-8 shrink-0 place-items-center rounded-lg", toneClass[stat.tone]),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							tone: stat.tone,
							label: stat.value
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 truncate text-[13px] font-medium text-foreground",
						children: stat.label
					})]
				}, stat.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-[12px] leading-relaxed text-muted-foreground",
			children: "Demo telemetry only. Live metrics arrive once the backend service is connected."
		})]
	});
}
function SuperAdminDashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Super Admin Dashboard",
				description: "Welcome back! Here's what's happening across all branches today.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Export Report"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Create Branch"] })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Key performance indicators",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiGrid, { items: KPIS })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "xl:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevenueOverview, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BranchPerformance, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2 xl:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientGrowth, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentDistribution, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-2 xl:col-span-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyStatistics, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "xl:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentBranches, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentActivities, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "xl:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActions, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemOverview, {})]
			})
		]
	});
}
//#endregion
export { SuperAdminDashboard as component };
