import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { $ as PhoneCall, H as RefreshCw, Ht as Ellipsis, I as Search, Jt as Columns3, On as BellRing, Vt as Eye, Wt as Download, Z as Plus, an as CircleCheck, d as UserRoundCheck, f as UserMinus, l as UserRound, ot as PackageCheck, tt as PencilLine, vn as CalendarClock, y as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as FOLLOW_UP_KPIS, c as FOLLOW_UP_REASONS, d as FOLLOW_UP_TODAY_ISO, f as RETENTION_STATS, i as FOLLOW_UP_DATE_RANGES, l as FOLLOW_UP_STATUSES, m as TODAY_REMINDERS, n as FOLLOW_UPS, o as FOLLOW_UP_PRIORITIES, r as FOLLOW_UP_BRANCHES, s as FOLLOW_UP_PRIORITY_TONE, u as FOLLOW_UP_STATUS_TONE } from "./follow-up-data-ocWJfEAb.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { t as Input } from "./input-BkRQ7J8p.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BYMcu4zp.mjs";
import { a as initialsOf, n as formatDate } from "./breadcrumbs-CW6ykn0r.mjs";
import { a as DropdownMenuLabel, i as DropdownMenuItem, n as DropdownMenuCheckboxItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-CXFNH1SK.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as Card } from "./card-Ce78aY8w.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { t as WidgetCard } from "./widget-card-Dbo4snDS.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BzGcbmh2.mjs";
import { t as EmptyState } from "./empty-state-Bfa0wIfS.mjs";
import { t as KpiCard } from "./kpi-card-BH70wzWL.mjs";
import { t as TablePagination } from "./table-pagination-BEFzaEO7.mjs";
import { t as NewFollowUpDialog } from "./new-follow-up-dialog-Dyj1W56c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.follow-up.index-DMVHdVhP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FOLLOW_UP_COLUMNS = [
	{
		key: "code",
		label: "Follow-up ID",
		hideable: false
	},
	{
		key: "patient",
		label: "Patient",
		hideable: false
	},
	{
		key: "guardian",
		label: "Guardian",
		hideable: true
	},
	{
		key: "phone",
		label: "Phone",
		hideable: true
	},
	{
		key: "lastVisit",
		label: "Last Visit",
		hideable: true
	},
	{
		key: "reason",
		label: "Reason",
		hideable: true
	},
	{
		key: "assignedDate",
		label: "Assigned Date",
		hideable: true
	},
	{
		key: "nextFollowUp",
		label: "Next Follow-up",
		hideable: true
	},
	{
		key: "priority",
		label: "Priority",
		hideable: false
	},
	{
		key: "status",
		label: "Status",
		hideable: false
	}
];
var DEFAULT_FOLLOW_UP_COLUMNS = FOLLOW_UP_COLUMNS.map((column) => column.key);
function FollowUpAvatar({ name, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-muted/60 text-[12px] font-semibold text-muted-foreground", className),
		"aria-hidden": "true",
		children: initialsOf(name)
	});
}
function PriorityIndicator({ item }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("h-2 w-2 shrink-0 rounded-full", item.priority === "High" && "bg-danger", item.priority === "Medium" && "bg-warning", item.priority === "Low" && "bg-muted-foreground/50"),
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: FOLLOW_UP_PRIORITY_TONE[item.priority],
			label: item.priority,
			dot: false
		})]
	});
}
function FollowUpRowActions({ item, onComplete, onReschedule, onEdit, onCall }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon",
			className: "h-8 w-8 text-muted-foreground",
			"aria-label": `Actions for ${item.code}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		className: "w-52",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/manager/follow-up/$followUpId",
					params: { followUpId: item.id },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "View"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onSelect: () => onEdit?.(item),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Edit"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onSelect: () => onComplete?.(item),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Complete"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onSelect: () => onReschedule?.(item),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Reschedule"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onSelect: () => onCall?.(item),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Call patient"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/manager/patients/$patientId",
					params: { patientId: item.patientId },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "View patient profile"]
				})
			})
		]
	})] });
}
function FollowUpTable({ rows, visibleColumns, onComplete, onReschedule, onEdit, onCall }) {
	const columns = FOLLOW_UP_COLUMNS.filter((column) => visibleColumns.includes(column.key));
	const actions = {
		onComplete,
		onReschedule,
		onEdit,
		onCall
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
				className: "sr-only",
				children: "Patient follow-ups"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				className: "border-border hover:bg-transparent",
				children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					scope: "col",
					className: cn("sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur", column.align === "right" && "text-right"),
					children: column.label
				}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "sticky top-0 z-10 h-11 bg-muted/50 px-5 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
					children: "Actions"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				className: "border-border transition-enterprise hover:bg-surface-hover",
				children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: cn("px-5 py-3.5 text-sm", column.align === "right" && "text-right"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowUpCell, {
						column: column.key,
						item
					})
				}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "px-5 py-3.5 text-right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowUpRowActions, {
						item,
						...actions
					})
				})]
			}, item.id)) })
		] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		children: rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "px-4 py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowUpAvatar, { name: item.patientName }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/follow-up/$followUpId",
									params: { followUpId: item.id },
									className: "block truncate text-sm font-medium text-foreground hover:underline",
									children: item.patientName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate font-mono text-[12px] text-muted-foreground",
									children: [
										item.code,
										" · ",
										item.patientCode
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowUpRowActions, {
								item,
								...actions
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: FOLLOW_UP_STATUS_TONE[item.status],
								label: item.status
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: FOLLOW_UP_PRIORITY_TONE[item.priority],
								label: `${item.priority} priority`,
								dot: false
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Guardian",
									value: item.guardianName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Phone",
									value: item.guardianPhone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Reason",
									value: item.reason
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Last visit",
									value: formatDate(item.lastVisit)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Assigned",
									value: formatDate(item.assignedDate)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Next follow-up",
									value: formatDate(item.nextFollowUp)
								})
							]
						})
					]
				})]
			})
		}, item.id))
	})] });
}
function MobileField({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "truncate text-foreground",
			children: value
		})]
	});
}
function FollowUpCell({ column, item }) {
	switch (column) {
		case "code": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/manager/follow-up/$followUpId",
			params: { followUpId: item.id },
			className: "whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline",
			children: item.code
		});
		case "patient": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowUpAvatar, { name: item.patientName }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/manager/patients/$patientId",
					params: { patientId: item.patientId },
					className: "block truncate font-medium text-foreground hover:underline",
					children: item.patientName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "truncate text-[12px] text-muted-foreground",
					children: [
						item.patientCode,
						" · ",
						item.patientAge,
						" yrs"
					]
				})]
			})]
		});
		case "guardian": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-foreground",
				children: item.guardianName
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-[12px] text-muted-foreground",
				children: item.guardianRelation
			})]
		});
		case "phone": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap font-mono text-[12.5px] text-muted-foreground",
			children: item.guardianPhone
		});
		case "lastVisit": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-muted-foreground",
			children: formatDate(item.lastVisit)
		});
		case "reason": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-foreground",
				children: item.reason
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-[12px] text-muted-foreground",
				children: item.assignedTo
			})]
		});
		case "assignedDate": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-muted-foreground",
			children: formatDate(item.assignedDate)
		});
		case "nextFollowUp": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap font-medium text-foreground",
			children: formatDate(item.nextFollowUp)
		});
		case "priority": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriorityIndicator, { item });
		case "status": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: FOLLOW_UP_STATUS_TONE[item.status],
			label: item.status
		});
		default: return null;
	}
}
var ICONS = {
	"at-risk": TriangleAlert,
	returning: UserRoundCheck,
	renewed: PackageCheck,
	inactive: UserMinus
};
var TONE = {
	success: {
		icon: "bg-success/12 text-success",
		ring: "ring-success/20",
		value: "text-success"
	},
	warning: {
		icon: "bg-warning/15 text-warning",
		ring: "ring-warning/20",
		value: "text-warning"
	},
	danger: {
		icon: "bg-danger/12 text-danger",
		ring: "ring-danger/20",
		value: "text-danger"
	},
	info: {
		icon: "bg-primary/10 text-primary",
		ring: "ring-primary/20",
		value: "text-primary"
	},
	neutral: {
		icon: "bg-muted text-muted-foreground",
		ring: "ring-border",
		value: "text-foreground"
	}
};
function RetentionCard({ stat }) {
	const Icon = ICONS[stat.id] ?? UserRoundCheck;
	const tone = TONE[stat.tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		interactive: true,
		className: cn("relative overflow-hidden p-5 ring-1", tone.ring),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-primary/10 to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-[13px] font-medium text-muted-foreground",
						children: stat.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("mt-2.5 text-[28px] font-semibold leading-none tracking-tight tabular-nums", tone.value),
						children: stat.value
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg", tone.icon),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-[18px] w-[18px]",
						"aria-hidden": "true"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative mt-3 text-[12.5px] leading-relaxed text-muted-foreground",
				children: stat.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative mt-1 text-[12.5px] font-medium text-foreground",
				children: stat.trend
			})
		]
	});
}
function RetentionCards() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
		children: RETENTION_STATS.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RetentionCard, { stat }, stat.id))
	});
}
function ReminderPanel({ onCall }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Today's reminders",
		description: "Scheduled calls and reviews for 31 July 2026",
		icon: BellRing,
		menuItems: [
			"Refresh reminders",
			"Export list",
			"Open call queue"
		],
		contentClassName: "pt-1",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "divide-y divide-border",
			children: TODAY_REMINDERS.map((reminder) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-start gap-3 py-3.5 first:pt-0 last:pb-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("mt-0.5 shrink-0 rounded-md border px-2 py-1 text-[11.5px] font-semibold tabular-nums", reminder.priority === "High" ? "border-danger/40 bg-danger/10 text-danger" : reminder.priority === "Medium" ? "border-warning/40 bg-warning/12 text-warning" : "border-border bg-muted/60 text-muted-foreground"),
						children: reminder.time
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/manager/follow-up/$followUpId",
								params: { followUpId: reminder.followUpId },
								className: "truncate text-sm font-medium text-foreground hover:underline",
								children: reminder.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: FOLLOW_UP_PRIORITY_TONE[reminder.priority],
								label: reminder.priority,
								dot: false
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[12.5px] leading-relaxed text-muted-foreground",
							children: reminder.description
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						className: "shrink-0",
						onClick: () => onCall?.(reminder),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Call"]
					})
				]
			}, reminder.id))
		})
	});
}
var DEFAULT_FOLLOW_UP_FILTERS = {
	search: "",
	priority: "all",
	status: "all",
	reason: "all",
	range: "all",
	branch: "all"
};
function FollowUpFilters({ value, onChange, onRefresh, isRefreshing = false, visibleColumns, onToggleColumn }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 border-b border-border px-4 py-3.5 sm:px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full lg:max-w-[420px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "search",
					value: value.search,
					onChange: (event) => set({ search: event.target.value }),
					placeholder: "Search patient name, patient ID or guardian phone…",
					"aria-label": "Search follow-ups",
					className: "h-9 bg-muted/40 pl-9 shadow-none"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 flex-wrap items-center gap-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: onRefresh,
						disabled: isRefreshing,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
							className: isRefreshing ? "h-4 w-4 animate-spin" : "h-4 w-4",
							"aria-hidden": "true"
						}), "Refresh"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Export"]
					}),
					visibleColumns && onToggleColumn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Columns3, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), "Columns"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						className: "w-56",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Visible columns" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
							FOLLOW_UP_COLUMNS.filter((column) => column.hideable).map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
								checked: visibleColumns.includes(column.key),
								onCheckedChange: () => onToggleColumn(column.key),
								onSelect: (event) => event.preventDefault(),
								children: column.label
							}, column.key))
						]
					})] }) : null
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "priority",
					placeholder: "Priority",
					width: "w-[150px]",
					value: value.priority,
					onChange: (next) => set({ priority: next }),
					options: FOLLOW_UP_PRIORITIES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "status",
					placeholder: "Status",
					width: "w-[160px]",
					value: value.status,
					onChange: (next) => set({ status: next }),
					options: FOLLOW_UP_STATUSES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "reason",
					placeholder: "Reason",
					width: "w-[190px]",
					value: value.reason,
					onChange: (next) => set({ reason: next }),
					options: FOLLOW_UP_REASONS
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.range,
					onValueChange: (next) => set({ range: next }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[165px]",
						"aria-label": "Filter by date range",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Date range" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						align: "start",
						children: FOLLOW_UP_DATE_RANGES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: option.key,
							children: option.label
						}, option.key))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "branch",
					placeholder: "Branch",
					width: "w-[190px]",
					value: value.branch,
					onChange: (next) => set({ branch: next }),
					options: FOLLOW_UP_BRANCHES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					className: "text-muted-foreground",
					onClick: () => onChange(DEFAULT_FOLLOW_UP_FILTERS),
					children: "Clear"
				})
			]
		})]
	});
}
function FilterSelect({ label, placeholder, width, value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
		value,
		onValueChange: onChange,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
			className: `h-9 ${width}`,
			"aria-label": `Filter by ${label}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
			align: "start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
				value: "all",
				children: [
					"All ",
					label,
					"s"
				]
			}), options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: option,
				children: option
			}, option))]
		})]
	});
}
var PAGE_SIZE = 8;
var TODAY = new Date(FOLLOW_UP_TODAY_ISO);
var DAY = 864e5;
function withinRange(date, range) {
	if (range === "all") return true;
	const value = new Date(date);
	if (range === "today") return value.toDateString() === TODAY.toDateString();
	if (range === "tomorrow") return value.toDateString() === new Date(TODAY.getTime() + DAY).toDateString();
	if (range === "overdue") return value.getTime() < TODAY.getTime();
	return value.getTime() >= TODAY.getTime() && value.getTime() <= TODAY.getTime() + 7 * DAY;
}
function FollowUpPage() {
	const [dialogOpen, setDialogOpen] = (0, import_react.useState)(false);
	const [presetPatientId, setPresetPatientId] = (0, import_react.useState)();
	const [filters, setFilters] = (0, import_react.useState)(DEFAULT_FOLLOW_UP_FILTERS);
	const [page, setPage] = (0, import_react.useState)(1);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [visibleColumns, setVisibleColumns] = (0, import_react.useState)(DEFAULT_FOLLOW_UP_COLUMNS);
	const filtered = (0, import_react.useMemo)(() => {
		const query = filters.search.trim().toLowerCase();
		return FOLLOW_UPS.filter((item) => {
			return (!query || [
				item.patientName,
				item.patientCode,
				item.code,
				item.guardianName,
				item.guardianPhone
			].join(" ").toLowerCase().includes(query)) && (filters.priority === "all" || item.priority === filters.priority) && (filters.status === "all" || item.status === filters.status) && (filters.reason === "all" || item.reason === filters.reason) && (filters.branch === "all" || item.branch === filters.branch) && withinRange(item.nextFollowUp, filters.range);
		});
	}, [filters]);
	const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
	const currentPage = Math.min(page, pageCount);
	const rows = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
	const refresh = () => {
		setRefreshing(true);
		setTimeout(() => setRefreshing(false), 700);
	};
	const toggleColumn = (key) => setVisibleColumns((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
	const openDialog = (patientId) => {
		setPresetPatientId(patientId);
		setDialogOpen(true);
	};
	const scheduleButton = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		onClick: () => openDialog(),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
			className: "h-4 w-4",
			"aria-hidden": "true"
		}), "Schedule Follow-up"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Follow-up Management",
				description: "Track patient follow-ups, reminders and communication.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Follow-up Management" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Export"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => openDialog(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "New Follow-up"]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Follow-up summary",
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8",
				children: FOLLOW_UP_KPIS.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, { kpi }, kpi.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Patient retention",
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-baseline justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[15px] font-semibold tracking-tight text-foreground",
						children: "Patient retention"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12.5px] text-muted-foreground",
						children: "Rolling 90-day retention signals for this branch."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RetentionCards, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Follow-up queue",
				className: "grid gap-6 2xl:grid-cols-[minmax(0,1fr)_380px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowUpFilters, {
						value: filters,
						onChange: (next) => {
							setFilters(next);
							setPage(1);
						},
						onRefresh: refresh,
						isRefreshing: refreshing,
						visibleColumns,
						onToggleColumn: toggleColumn
					}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
						icon: PhoneCall,
						title: "No Follow-ups Scheduled",
						description: "Create your first follow-up reminder.",
						action: scheduleButton,
						secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							onClick: () => setFilters(DEFAULT_FOLLOW_UP_FILTERS),
							children: "Reset filters"
						}),
						className: "rounded-none border-0 shadow-none"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowUpTable, {
						rows,
						visibleColumns,
						onEdit: (item) => openDialog(item.patientId),
						onComplete: (item) => openDialog(item.patientId),
						onReschedule: (item) => openDialog(item.patientId)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-border px-4 py-3.5 sm:px-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TablePagination, {
							page: currentPage,
							pageSize: PAGE_SIZE,
							total: filtered.length,
							onPageChange: setPage
						})
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReminderPanel, { onCall: (reminder) => openDialog(reminder.patientId) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewFollowUpDialog, {
				open: dialogOpen,
				onOpenChange: setDialogOpen,
				presetPatientId
			})
		]
	});
}
//#endregion
export { FollowUpPage as component };
