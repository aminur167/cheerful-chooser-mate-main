import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { H as RefreshCw, Ht as Ellipsis, I as Search, Lt as FileText, Q as Phone, Vt as Eye, Wt as Download, X as PowerOff, Z as Plus, Zt as Clock, dn as Check, gt as Mail, ht as MapPin, kt as ImagePlus, mn as ChartColumn, p as UserCog, tt as PencilLine, un as ChevronDown, xn as Building2, yt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
import { a as BRANCH_STATUSES, c as DIVISIONS, l as MANAGERS, o as BRANCH_STATUS_TONE, r as BRANCH_KPIS, s as DATE_RANGES, t as BRANCHES } from "./branch-data-wY6g0_IE.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { t as Input } from "./input-BkRQ7J8p.mjs";
import { t as FormField } from "./form-field-DoPU-RoN.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BYMcu4zp.mjs";
import { a as initialsOf, i as formatNumber, n as formatDate } from "./breadcrumbs-CW6ykn0r.mjs";
import { i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-CXFNH1SK.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BzGcbmh2.mjs";
import { t as EmptyState } from "./empty-state-Bfa0wIfS.mjs";
import { t as KpiCard } from "./kpi-card-BH70wzWL.mjs";
import { t as TablePagination } from "./table-pagination-BEFzaEO7.mjs";
import { t as Textarea } from "./textarea-BRH7-9yv.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-D9_a5hiE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/super-admin.branches.index-C9JVIHIh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HEADERS = [
	"Branch Code",
	"Branch Name",
	"Branch Manager",
	"Phone",
	"City",
	"Patients",
	"Staff",
	"Monthly Revenue",
	"Status",
	"Created Date"
];
function BranchTable({ rows, expandedId, onToggleExpand }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-auto",
		style: { maxHeight: "640px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
				className: "sr-only",
				children: "Organisation branches"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				className: "border-border hover:bg-transparent",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "sticky top-0 z-10 h-11 w-10 bg-muted/50 px-4 backdrop-blur",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Expand"
						})
					}),
					HEADERS.map((header) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						scope: "col",
						className: cn("sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur", [
							"Patients",
							"Staff",
							"Monthly Revenue"
						].includes(header) && "text-right"),
						children: header
					}, header)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "sticky top-0 z-10 h-11 bg-muted/50 px-5 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
						children: "Actions"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((branch) => {
				const expanded = expandedId === branch.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
					onClick: () => onToggleExpand(branch.id),
					"aria-expanded": expanded,
					className: cn("cursor-pointer border-border transition-enterprise hover:bg-surface-hover", expanded && "bg-surface-hover"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "px-4 py-3.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
								className: cn("h-4 w-4 text-muted-foreground transition-enterprise", expanded && "rotate-180 text-foreground"),
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "whitespace-nowrap px-5 py-3.5 font-mono text-[12.5px] text-muted-foreground",
							children: branch.code
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
							className: "px-5 py-3.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: branch.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block text-[12.5px] text-muted-foreground",
								children: [branch.division, " division"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "px-5 py-3.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary",
									children: initialsOf(branch.manager.name)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-sm text-foreground",
										children: branch.manager.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-[12.5px] text-muted-foreground",
										children: "Branch Manager"
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "whitespace-nowrap px-5 py-3.5 text-sm tabular-nums text-muted-foreground",
							children: branch.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "px-5 py-3.5 text-sm",
							children: branch.city
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "px-5 py-3.5 text-right text-sm tabular-nums",
							children: formatNumber(branch.patients)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "px-5 py-3.5 text-right text-sm tabular-nums",
							children: branch.staff
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "whitespace-nowrap px-5 py-3.5 text-right text-sm font-medium tabular-nums",
							children: formatTaka(branch.monthlyRevenue)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "px-5 py-3.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: BRANCH_STATUS_TONE[branch.status],
								label: branch.status
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "whitespace-nowrap px-5 py-3.5 text-sm text-muted-foreground",
							children: formatDate(branch.createdAt)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "px-5 py-3.5 text-right",
							onClick: (event) => event.stopPropagation(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon-sm",
									className: "text-muted-foreground",
									"aria-label": `Actions for ${branch.name}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
								align: "end",
								className: "w-48",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/super-admin/branches/$branchId",
											params: { branchId: branch.id },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
												className: "h-4 w-4",
												"aria-hidden": "true"
											}), "View Details"]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), "Edit Branch"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCog, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), "Assign Manager"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), "View Reports"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), "View Performance"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
										className: "text-danger focus:text-danger",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PowerOff, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										}), "Deactivate"]
									})
								]
							})] })
						})
					]
				}), expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
					className: "border-border bg-muted/30 hover:bg-muted/30",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						colSpan: HEADERS.length + 2,
						className: "p-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BranchDetailPanel, { branch })
					})
				}) : null] }, branch.id);
			}) })
		] })
	});
}
function BranchDetailPanel({ branch }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 px-5 py-6 lg:grid-cols-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground",
						children: "Branch information"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailLine, {
						icon: MapPin,
						label: "Address",
						value: branch.address
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailLine, {
						icon: Mail,
						label: "Email",
						value: branch.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailLine, {
						icon: Clock,
						label: "Working hours",
						value: branch.workingHours
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground",
					children: "Performance"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
							label: "Monthly revenue",
							value: formatTaka(branch.monthlyRevenue)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
							label: "Today's collection",
							value: formatTaka(branch.todaysCollection)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
							label: "Patients",
							value: formatNumber(branch.patients)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
							label: "Sessions today",
							value: String(branch.sessions)
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground",
						children: "Manager information"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-lg border border-border bg-card p-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-semibold text-primary",
							children: initialsOf(branch.manager.name)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-medium text-foreground",
								children: branch.manager.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate text-[12.5px] text-muted-foreground",
								children: ["Manager since ", formatDate(branch.manager.since)]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailLine, {
						icon: Phone,
						label: "Phone",
						value: branch.manager.phone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailLine, {
						icon: Mail,
						label: "Email",
						value: branch.manager.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/super-admin/branches/$branchId",
							params: { branchId: branch.id },
							children: "Open branch profile"
						})
					})
				]
			})
		]
	});
}
function DetailLine({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-foreground",
				children: value
			})]
		})]
	});
}
function MiniStat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-card p-3.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[12px] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm font-semibold tabular-nums text-foreground",
			children: value
		})]
	});
}
var DEFAULT_BRANCH_FILTERS = {
	search: "",
	status: "all",
	division: "all",
	manager: "all",
	range: "all"
};
function BranchFilters({ value, onChange, onRefresh, isRefreshing = false }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 border-b border-border px-4 py-3.5 lg:flex-row lg:items-center lg:justify-between sm:px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-wrap items-center gap-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full min-w-[220px] flex-1 sm:w-auto sm:max-w-[260px] sm:basis-[240px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "search",
						value: value.search,
						onChange: (event) => set({ search: event.target.value }),
						placeholder: "Search branch, code, city…",
						"aria-label": "Search branches",
						className: "h-9 bg-muted/40 pl-9 shadow-none"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.status,
					onValueChange: (status) => set({ status }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[140px]",
						"aria-label": "Filter by status",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Status" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "all",
						children: "All statuses"
					}), BRANCH_STATUSES.map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: status,
						children: status
					}, status))] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.division,
					onValueChange: (division) => set({ division }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[150px]",
						"aria-label": "Filter by division",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Division" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "all",
						children: "All divisions"
					}), DIVISIONS.map((division) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: division,
						children: division
					}, division))] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.manager,
					onValueChange: (manager) => set({ manager }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[170px]",
						"aria-label": "Filter by manager",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Manager" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "all",
						children: "All managers"
					}), MANAGERS.map((manager) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: manager,
						children: manager
					}, manager))] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.range,
					onValueChange: (range) => set({ range }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[160px]",
						"aria-label": "Filter by created date",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Date range" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: DATE_RANGES.map((range) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: range.key,
						children: range.label
					}, range.key)) })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 items-center gap-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				onClick: onRefresh,
				disabled: isRefreshing,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
					className: isRefreshing ? "h-4 w-4 animate-spin" : "h-4 w-4",
					"aria-hidden": "true"
				}), "Refresh"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Export"]
			})]
		})]
	});
}
var STEPS = [
	{
		id: 1,
		title: "Basic Information",
		description: "Location and contact details"
	},
	{
		id: 2,
		title: "Branch Manager",
		description: "Primary point of contact"
	},
	{
		id: 3,
		title: "Branch Settings",
		description: "Hours, currency and status"
	}
];
var DISTRICTS = [
	"Dhaka",
	"Gazipur",
	"Narayanganj",
	"Chattogram",
	"Cumilla",
	"Sylhet",
	"Rajshahi",
	"Khulna",
	"Barishal",
	"Rangpur"
];
/** UI-only multi-step branch creation flow. No data is persisted. */
function CreateBranchDialog({ open, onOpenChange }) {
	const [step, setStep] = (0, import_react.useState)(1);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const close = () => {
		onOpenChange(false);
		setTimeout(() => setStep(1), 200);
	};
	const submit = () => {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			close();
		}, 900);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) close();
			else onOpenChange(true);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90vh] max-w-2xl overflow-y-auto rounded-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Create branch" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Set up a new organisation branch in three short steps." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex items-center gap-2 border-b border-border pb-5",
					children: STEPS.map((item, index) => {
						const state = step === item.id ? "current" : step > item.id ? "done" : "todo";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex min-w-0 flex-1 items-center gap-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[12px] font-semibold transition-enterprise", state === "current" && "border-primary bg-primary text-primary-foreground", state === "done" && "border-success/40 bg-success/12 text-success", state === "todo" && "border-border bg-muted/50 text-muted-foreground"),
									"aria-current": state === "current" ? "step" : void 0,
									children: state === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }) : item.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden min-w-0 sm:block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("block truncate text-[13px] font-medium", state === "todo" ? "text-muted-foreground" : "text-foreground"),
										children: item.title
									})
								}),
								index < STEPS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-px flex-1 bg-border",
									"aria-hidden": "true"
								}) : null
							]
						}, item.id);
					})
				}),
				step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepBasic, {}) : step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepManager, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepSettings, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 border-t border-border pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: close,
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [step > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setStep(step - 1),
							children: "Back"
						}) : null, step < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setStep(step + 1),
							children: "Continue"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: submit,
							disabled: submitting,
							children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "h-4 w-4 animate-spin",
								"aria-hidden": "true"
							}) : null, "Create branch"]
						})]
					})]
				})
			]
		})
	});
}
function StepBasic() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-name",
				label: "Branch name",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "branch-name",
					placeholder: "e.g. Mirpur Branch"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-code",
				label: "Branch code",
				hint: "Auto-generated, editable",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "branch-code",
					defaultValue: "BR-DHK-009",
					readOnly: true,
					className: "font-mono"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-phone",
				label: "Phone",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "branch-phone",
					placeholder: "+880 2-XXXXXXX"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-email",
				label: "Email",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "branch-email",
					type: "email",
					placeholder: "branch@speecherp.com.bd"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-division",
				label: "Division",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					id: "branch-division",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select division" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: DIVISIONS.map((division) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: division,
					children: division
				}, division)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-district",
				label: "District",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					id: "branch-district",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select district" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: DISTRICTS.map((district) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: district,
					children: district
				}, district)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-address",
				label: "Address",
				required: true,
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "branch-address",
					rows: 2,
					placeholder: "House, road, area, city, postcode"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-map",
				label: "Google Map link",
				hint: "Optional",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "branch-map",
					placeholder: "https://maps.google.com/…"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-logo",
				label: "Branch logo",
				hint: "PNG or SVG, up to 2 MB",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-[38px] items-center gap-2.5 rounded-lg border border-dashed border-border bg-muted/30 px-3 text-[13px] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Upload placeholder"]
				})
			})
		]
	});
}
function StepManager() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "manager-name",
				label: "Manager name",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "manager-name",
					placeholder: "e.g. Rezaul Haque"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "manager-phone",
				label: "Phone",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "manager-phone",
					placeholder: "+880 17XX-XXXXXX"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "manager-email",
				label: "Email",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "manager-email",
					type: "email",
					placeholder: "manager@speecherp.com.bd"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "manager-password",
				label: "Temporary password",
				hint: "Manager is prompted to change it on first sign-in",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "manager-password",
					type: "password",
					placeholder: "••••••••"
				})
			})
		]
	});
}
function StepSettings() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "opening-time",
				label: "Opening time",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "opening-time",
					type: "time",
					defaultValue: "09:00"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "closing-time",
				label: "Closing time",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "closing-time",
					type: "time",
					defaultValue: "20:00"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "currency",
				label: "Currency",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					defaultValue: "BDT",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "currency",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "BDT",
						children: "BDT — Bangladeshi Taka (৳)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "USD",
						children: "USD — US Dollar"
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "timezone",
				label: "Timezone",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					defaultValue: "Asia/Dhaka",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "timezone",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "Asia/Dhaka",
						children: "Asia/Dhaka (GMT+6)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "Asia/Kolkata",
						children: "Asia/Kolkata (GMT+5:30)"
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "branch-status",
				label: "Status",
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					defaultValue: "Active",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "branch-status",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: BRANCH_STATUSES.map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: status,
						children: status
					}, status)) })]
				})
			})
		]
	});
}
var PAGE_SIZE = 6;
function withinRange(createdAt, range) {
	if (range === "all") return true;
	const days = range === "30d" ? 30 : range === "90d" ? 90 : 365;
	const cutoff = Date.now() - days * 24 * 60 * 60 * 1e3;
	return new Date(createdAt).getTime() >= cutoff;
}
function BranchManagementPage() {
	const [filters, setFilters] = (0, import_react.useState)(DEFAULT_BRANCH_FILTERS);
	const [page, setPage] = (0, import_react.useState)(1);
	const [expandedId, setExpandedId] = (0, import_react.useState)(null);
	const [createOpen, setCreateOpen] = (0, import_react.useState)(false);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const filtered = (0, import_react.useMemo)(() => {
		const query = filters.search.trim().toLowerCase();
		return BRANCHES.filter((branch) => {
			return (!query || [
				branch.name,
				branch.code,
				branch.city,
				branch.manager.name,
				branch.division
			].join(" ").toLowerCase().includes(query)) && (filters.status === "all" || branch.status === filters.status) && (filters.division === "all" || branch.division === filters.division) && (filters.manager === "all" || branch.manager.name === filters.manager) && withinRange(branch.createdAt, filters.range);
		});
	}, [filters]);
	const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
	const currentPage = Math.min(page, pageCount);
	const rows = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
	const refresh = () => {
		setRefreshing(true);
		setTimeout(() => setRefreshing(false), 700);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Branch Management",
				description: "Manage all organization branches from one place.",
				breadcrumbs: [{
					label: "Super Admin",
					to: "/super-admin"
				}, { label: "Branch Management" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Export"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setCreateOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Create Branch"]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Branch summary",
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6",
				children: BRANCH_KPIS.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, { kpi }, kpi.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Branches",
				className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BranchFilters, {
					value: filters,
					onChange: (next) => {
						setFilters(next);
						setPage(1);
					},
					onRefresh: refresh,
					isRefreshing: refreshing
				}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: Building2,
					title: "No branches created yet",
					description: "Branches you create will appear here with live performance, staffing and revenue insights across the organisation.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setCreateOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Create First Branch"]
					}),
					secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => setFilters(DEFAULT_BRANCH_FILTERS),
						children: "Reset filters"
					}),
					className: "rounded-none border-0 shadow-none"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BranchTable, {
					rows,
					expandedId,
					onToggleExpand: (id) => setExpandedId(expandedId === id ? null : id)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border px-4 py-3.5 sm:px-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TablePagination, {
						page: currentPage,
						pageSize: PAGE_SIZE,
						total: filtered.length,
						onPageChange: setPage
					})
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateBranchDialog, {
				open: createOpen,
				onOpenChange: setCreateOpen
			})
		]
	});
}
//#endregion
export { BranchManagementPage as component };
