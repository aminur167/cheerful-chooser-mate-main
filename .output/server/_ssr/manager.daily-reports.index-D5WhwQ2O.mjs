import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { $ as PhoneCall, $t as ClipboardCheck, Hn as Activity, Ht as Ellipsis, J as Printer, K as Receipt, Lt as FileText, Rn as ArrowLeftRight, Rt as FileDown, Vt as Eye, _n as CalendarDays, an as CircleCheck, fn as ChartPie, jn as Ban, mn as ChartColumn, s as UsersRound, y as TriangleAlert } from "../_libs/lucide-react.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
import { A as FINANCE_CARDS, C as DAILY_PATIENT_ROWS, D as DAILY_TABS, E as DAILY_REPORTS, L as REPORT_STATUS_TONE, M as INVENTORY_MOVEMENTS, N as LOW_STOCK_TODAY, R as SESSION_DISTRIBUTION, S as DAILY_KPIS, T as DAILY_PAYMENT_DISTRIBUTION, U as TODAY_LABEL, V as TODAYS_REPORT, _ as ACTIVITY_STATE_LABEL, c as Route$20, j as INVENTORY_CARDS, v as ACTIVITY_STATE_TONE, w as DAILY_PATIENT_STATUS_TONE, y as CLINICAL_CARDS, z as THERAPY_TYPE_DISTRIBUTION } from "./router-BtnFRLs5.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Button } from "./button-BzhkirSF.mjs";
import { i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-CXFNH1SK.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as Card } from "./card-Ce78aY8w.mjs";
import { t as Progress } from "./progress-DYQcnTxt.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { t as WidgetCard } from "./widget-card-Dbo4snDS.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BzGcbmh2.mjs";
import { t as EmptyState } from "./empty-state-Bfa0wIfS.mjs";
import { t as KpiCard } from "./kpi-card-BH70wzWL.mjs";
import { c as ReportPreviewDialog, d as TodaysSummaryWidget, f as UpcomingTomorrowWidget, i as ManagerNotesEditor, l as StatCard, n as DailyTimeline, o as PendingTasksWidget, p as WeatherWidget, r as EndOfDayClosing, s as PerformanceProgressWidget, u as TodaysGoalWidget } from "./closing-section-BGVWafYP.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-S-rv8pR7.mjs";
import { r as PatientAvatar } from "./patient-table-C8a1NfGg.mjs";
import { a as YAxis, d as Pie, f as Cell, n as PieChart, o as XAxis, r as BarChart, u as Bar } from "../_libs/recharts+[...].mjs";
import { n as ChartTooltip, r as ChartTooltipContent, t as ChartContainer } from "./chart-BptILwYE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.daily-reports.index-D5WhwQ2O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HEAD_CLASS$1 = "sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur";
var HEADS = [
	"Patient ID",
	"Patient Name",
	"Registration",
	"Assessment",
	"Therapy",
	"Payment",
	"Follow-up",
	"Status",
	""
];
function ActivityCell({ state }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
		tone: ACTIVITY_STATE_TONE[state],
		label: ACTIVITY_STATE_LABEL[state]
	});
}
function RowActions({ row }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon",
			className: "h-8 w-8 text-muted-foreground",
			"aria-label": `Actions for ${row.patientName}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		className: "w-52",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "View patient"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "View invoice"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "Log follow-up"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "Print day sheet"] })
		]
	})] });
}
function DailyPatientTable({ rows = DAILY_PATIENT_ROWS }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden max-h-[620px] overflow-auto md:block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
			className: "hover:bg-transparent",
			children: HEADS.map((head, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
				className: HEAD_CLASS$1,
				children: head
			}, head || `actions-${index}`))
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "px-5 font-medium tabular-nums text-foreground",
				children: row.patientId
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientAvatar, { name: row.patientName }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate text-sm font-medium text-foreground",
						children: row.patientName
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityCell, { state: row.registration })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityCell, { state: row.assessment })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityCell, { state: row.therapy })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityCell, { state: row.payment })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityCell, { state: row.followUp })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: DAILY_PATIENT_STATUS_TONE[row.status],
					label: row.status
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
				className: "px-3 text-right",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowActions, { row })
			})
		] }, row.id)) })] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "space-y-3 px-4 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientAvatar, { name: row.patientName }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium text-foreground",
							children: row.patientName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-[12px] tabular-nums text-muted-foreground",
							children: row.patientId
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: DAILY_PATIENT_STATUS_TONE[row.status],
						label: row.status
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid grid-cols-2 gap-2.5",
				children: [
					["Registration", row.registration],
					["Assessment", row.assessment],
					["Therapy", row.therapy],
					["Payment", row.payment],
					["Follow-up", row.followUp]
				].map(([label, state]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "truncate text-[12px] text-muted-foreground",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityCell, { state }) })]
				}, label))
			})]
		}, row.id))
	})] });
}
var CARD_ICONS = {
	clipboard: ClipboardCheck,
	activity: Activity,
	users: UsersRound,
	check: CircleCheck,
	alert: TriangleAlert,
	ban: Ban
};
var sessionConfig = Object.fromEntries(SESSION_DISTRIBUTION.map((slice) => [slice.name, {
	label: slice.name,
	color: slice.token
}]));
var therapyConfig = Object.fromEntries(THERAPY_TYPE_DISTRIBUTION.map((slice) => [slice.name, {
	label: slice.name,
	color: slice.token
}]));
function ClinicalActivityCards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Clinical activity summary",
		className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
		children: CLINICAL_CARDS.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
			label: card.label,
			value: card.value,
			hint: card.hint,
			icon: CARD_ICONS[card.icon] ?? Activity,
			tone: card.tone
		}, card.id))
	});
}
function SessionDistributionChart() {
	const total = SESSION_DISTRIBUTION.reduce((sum, slice) => sum + slice.value, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
		title: "Session Distribution",
		description: "Today's sessions by outcome",
		icon: ChartPie,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
				config: sessionConfig,
				className: "aspect-auto h-[200px] w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, { hideIndicator: true }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
					data: SESSION_DISTRIBUTION,
					dataKey: "value",
					nameKey: "name",
					innerRadius: 58,
					outerRadius: 88,
					paddingAngle: 2,
					strokeWidth: 0,
					children: SESSION_DISTRIBUTION.map((slice) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: slice.token }, slice.name))
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xl font-semibold tabular-nums text-foreground",
					children: total
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[12px] text-muted-foreground",
					children: "Sessions"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-5 space-y-2.5",
			children: SESSION_DISTRIBUTION.map((slice) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 font-medium tabular-nums text-foreground",
						children: slice.value
					})
				]
			}, slice.name))
		})]
	});
}
function TherapyTypeDistributionChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Therapy Type Distribution",
		description: "Sessions delivered per therapy type",
		icon: ChartColumn,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
			config: therapyConfig,
			className: "aspect-auto h-[248px] w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
				data: THERAPY_TYPE_DISTRIBUTION,
				layout: "vertical",
				margin: {
					left: 4,
					right: 16,
					top: 4,
					bottom: 4
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						type: "number",
						hide: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						type: "category",
						dataKey: "name",
						width: 92,
						tickLine: false,
						axisLine: false,
						tick: { fontSize: 12 }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, { hideIndicator: true }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "value",
						radius: [
							0,
							6,
							6,
							0
						],
						barSize: 18,
						children: THERAPY_TYPE_DISTRIBUTION.map((slice) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: slice.token }, slice.name))
					})
				]
			})
		})
	});
}
var config = Object.fromEntries(DAILY_PAYMENT_DISTRIBUTION.map((slice) => [slice.name, {
	label: slice.name,
	color: slice.token
}]));
function FinanceCards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Financial summary",
		className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
		children: FINANCE_CARDS.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
			label: card.label,
			value: card.value,
			hint: card.hint,
			icon: card.icon,
			tone: card.tone
		}, card.id))
	});
}
function DailyPaymentDistributionChart() {
	const total = DAILY_PAYMENT_DISTRIBUTION.reduce((sum, slice) => sum + slice.value, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
		title: "Payment Distribution",
		description: "Today's collection by payment method",
		icon: ChartPie,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
				config,
				className: "aspect-auto h-[210px] w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, {
					hideIndicator: true,
					formatter: (value) => formatTaka(Number(value))
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
					data: DAILY_PAYMENT_DISTRIBUTION,
					dataKey: "value",
					nameKey: "name",
					innerRadius: 60,
					outerRadius: 90,
					paddingAngle: 2,
					strokeWidth: 0,
					children: DAILY_PAYMENT_DISTRIBUTION.map((slice) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: slice.token }, slice.name))
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[17px] font-semibold tabular-nums text-foreground",
					children: formatTaka(total)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[12px] text-muted-foreground",
					children: "Collected"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-5 space-y-2.5",
			children: DAILY_PAYMENT_DISTRIBUTION.map((slice) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 font-medium tabular-nums text-foreground",
						children: formatTaka(slice.value)
					})
				]
			}, slice.name))
		})]
	});
}
var HEAD_CLASS = "sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur";
var MOVEMENT_TONE = {
	"Stock In": "success",
	"Stock Out": "info",
	Used: "warning"
};
function InventoryCards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Inventory movement summary",
		className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
		children: INVENTORY_CARDS.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
			label: card.label,
			value: card.value,
			hint: card.hint,
			icon: card.icon,
			tone: card.tone
		}, card.id))
	});
}
function InventoryMovementTable({ rows = INVENTORY_MOVEMENTS }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
		title: "Today's Stock Movement",
		description: "Every stock entry, issue and consumption logged today",
		icon: ArrowLeftRight,
		contentClassName: "px-0 pb-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden overflow-auto md:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
				className: "hover:bg-transparent",
				children: [
					"Item",
					"Category",
					"Type",
					"Quantity",
					"Value",
					"Handled By",
					"Time"
				].map((head) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: HEAD_CLASS,
					children: head
				}, head))
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "px-5 text-sm font-medium text-foreground",
					children: row.item
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "px-5 text-[13px] text-muted-foreground",
					children: row.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "px-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: MOVEMENT_TONE[row.type],
						label: row.type
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "px-5 font-medium tabular-nums text-foreground",
					children: row.quantity
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "px-5 tabular-nums text-foreground",
					children: row.value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "px-5 text-[13px] text-muted-foreground",
					children: row.handledBy
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "px-5 text-[13px] tabular-nums text-muted-foreground",
					children: row.time
				})
			] }, row.id)) })] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y divide-border md:hidden",
			children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "space-y-2 px-4 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "min-w-0 text-sm font-medium text-foreground",
						children: row.item
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: MOVEMENT_TONE[row.type],
						label: row.type
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.category }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium tabular-nums text-foreground",
							children: row.quantity
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: row.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.handledBy }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: row.time
						})
					]
				})]
			}, row.id))
		})]
	});
}
function LowStockTodayPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Low Stock Alerts",
		description: "Items below reorder level today",
		icon: TriangleAlert,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3.5",
			children: LOW_STOCK_TODAY.map((item) => {
				const pct = Math.min(100, Math.round(item.remaining / item.reorder * 100));
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-2 text-[13px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 truncate font-medium text-foreground",
							children: item.item
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "shrink-0 tabular-nums text-muted-foreground",
							children: [
								item.remaining,
								" / ",
								item.reorder
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: pct,
						className: "h-1.5"
					})]
				}, item.id);
			})
		})
	});
}
function DailyReportsPage() {
	const { tab } = Route$20.useSearch();
	const navigate = Route$20.useNavigate();
	const activeTab = DAILY_TABS.some((item) => item.value === tab) ? tab : "overview";
	const [previewOpen, setPreviewOpen] = (0, import_react.useState)(false);
	const [generated, setGenerated] = (0, import_react.useState)(true);
	const generateButton = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		onClick: () => {
			setGenerated(true);
			toast.success("Daily report generated for 31 July 2026");
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
			className: "h-4 w-4",
			"aria-hidden": "true"
		}), "Generate Daily Report"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Daily Operations Report",
				description: "Monitor today's operational performance and daily closing report.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Daily Reports" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 text-[12.5px] font-medium text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), TODAY_LABEL]
					}),
					generateButton,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => toast.info("PDF export is a placeholder in this build"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Export PDF"]
					})
				] })
			}),
			!generated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				icon: FileText,
				title: "No Daily Report Available",
				description: "Today's report will appear after activities are recorded.",
				action: generateButton
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					"aria-label": "Today's key metrics",
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
					children: DAILY_KPIS.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, { kpi }, kpi.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-start gap-6 2xl:grid-cols-[minmax(0,1fr)_360px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
						value: activeTab,
						onValueChange: (next) => navigate({ search: { tab: next } }),
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "-mx-1 overflow-x-auto px-1 pb-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
									className: "w-max",
									children: DAILY_TABS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										value: item.value,
										children: item.label
									}, item.value))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
								value: "overview",
								className: "mt-6 space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodaysSummaryWidget, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PerformanceProgressWidget, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DailyTimeline, {})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "patients",
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-[15px] font-semibold tracking-tight text-foreground",
											children: "Today's Patient Activity"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 text-[12.5px] text-muted-foreground",
											children: "Registration, assessment, therapy, payment and follow-up per patient"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											tone: "info",
											label: "12 patients today"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DailyPatientTable, {})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
								value: "clinical",
								className: "mt-6 space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClinicalActivityCards, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 xl:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionDistributionChart, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyTypeDistributionChart, {})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
								value: "finance",
								className: "mt-6 space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinanceCards, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 xl:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DailyPaymentDistributionChart, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
										className: "p-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-[15px] font-semibold tracking-tight text-foreground",
												children: "Recent Daily Reports"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-0.5 text-[12.5px] text-muted-foreground",
												children: "Open a previous closing report for full details."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-4 space-y-2.5",
												children: DAILY_REPORTS.map((report) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
													to: "/manager/daily-reports/$reportId",
													params: { reportId: report.id },
													className: "flex items-center justify-between gap-3 rounded-xl border border-border bg-muted/25 px-4 py-3 transition-colors hover:border-border-strong hover:bg-muted/50",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "min-w-0",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block truncate text-sm font-medium text-foreground",
															children: report.code
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "mt-0.5 block text-[12px] text-muted-foreground",
															children: [
																report.date,
																" · ",
																report.patientsServed,
																" patients"
															]
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
														tone: REPORT_STATUS_TONE[report.status],
														label: report.status
													})]
												}) }, report.id))
											})
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
								value: "inventory",
								className: "mt-6 space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InventoryCards, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_320px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InventoryMovementTable, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LowStockTodayPanel, {})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "notes",
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManagerNotesEditor, {})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "space-y-6",
						"aria-label": "Daily operations widgets",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodaysGoalWidget, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PendingTasksWidget, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpcomingTomorrowWidget, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeatherWidget, {})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EndOfDayClosing, { report: TODAYS_REPORT })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportPreviewDialog, {
				open: previewOpen,
				onOpenChange: setPreviewOpen,
				report: TODAYS_REPORT
			})
		]
	});
}
//#endregion
export { DailyReportsPage as component };
