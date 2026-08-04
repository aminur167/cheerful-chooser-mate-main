import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { H as RefreshCw, Hn as Activity, I as Search, Jt as Columns3, Wt as Download, Z as Plus } from "../_libs/lucide-react.mjs";
import { c as THERAPY_PROGRAMS, d as THERAPY_STATUSES, i as THERAPY_DATE_RANGES, o as THERAPY_KPIS, p as TODAY_ISO, s as THERAPY_MODES, u as THERAPY_SESSIONS } from "./therapy-data-GYpM_hnG.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BzhkirSF.mjs";
import { t as Input } from "./input-BkRQ7J8p.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BYMcu4zp.mjs";
import { a as DropdownMenuLabel, n as DropdownMenuCheckboxItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-CXFNH1SK.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as EmptyState } from "./empty-state-Bfa0wIfS.mjs";
import { t as KpiCard } from "./kpi-card-BH70wzWL.mjs";
import { t as TablePagination } from "./table-pagination-BEFzaEO7.mjs";
import { i as TherapyTable, n as THERAPY_COLUMNS, t as DEFAULT_THERAPY_COLUMNS } from "./therapy-table-DVIxe6tb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.therapy.index-BkJoOD1N.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEFAULT_THERAPY_FILTERS = {
	search: "",
	mode: "all",
	status: "all",
	program: "all",
	range: "all"
};
function TherapyFilters({ value, onChange, onRefresh, isRefreshing = false, visibleColumns, onToggleColumn }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 border-b border-border px-4 py-3.5 sm:px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full lg:max-w-[380px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "search",
					value: value.search,
					onChange: (event) => set({ search: event.target.value }),
					placeholder: "Search patient, patient ID, guardian phone or session ID…",
					"aria-label": "Search therapy sessions",
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
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
							THERAPY_COLUMNS.filter((column) => column.hideable).map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
								checked: visibleColumns.includes(column.key),
								onCheckedChange: () => onToggleColumn(column.key),
								onSelect: (event) => event.preventDefault(),
								children: column.label
							}, column.key))
						]
					})] })
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "therapy type",
					placeholder: "Therapy type",
					width: "w-[180px]",
					value: value.mode,
					onValueChange: (mode) => set({ mode }),
					allLabel: "All therapy types",
					options: THERAPY_MODES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "session status",
					placeholder: "Status",
					width: "w-[160px]",
					value: value.status,
					onValueChange: (status) => set({ status }),
					allLabel: "All statuses",
					options: THERAPY_STATUSES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "therapy program",
					placeholder: "Program",
					width: "w-[195px]",
					value: value.program,
					onValueChange: (program) => set({ program }),
					allLabel: "All programs",
					options: THERAPY_PROGRAMS
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.range,
					onValueChange: (range) => set({ range }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[165px]",
						"aria-label": "Filter by session date",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Date" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: THERAPY_DATE_RANGES.map((range) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: range.key,
						children: range.label
					}, range.key)) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					className: "text-muted-foreground",
					onClick: () => onChange(DEFAULT_THERAPY_FILTERS),
					children: "Reset"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-auto hidden text-[12px] text-muted-foreground xl:inline",
					children: "Filters apply instantly and combine with the search box"
				})
			]
		})]
	});
}
function FilterSelect({ label, placeholder, width, value, onValueChange, allLabel, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
		value,
		onValueChange,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
			className: `h-9 ${width}`,
			"aria-label": `Filter by ${label}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
			value: "all",
			children: allLabel
		}), options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
			value: option,
			children: option
		}, option))] })]
	});
}
var PAGE_SIZE = 8;
var TODAY = new Date(TODAY_ISO);
function withinRange(date, range) {
	if (range === "all") return true;
	const value = new Date(date);
	if (range === "today") return value.toDateString() === TODAY.toDateString();
	if (range === "upcoming") return value.getTime() > TODAY.getTime();
	const days = range === "7d" ? 7 : 30;
	return value.getTime() >= TODAY.getTime() - days * 24 * 60 * 60 * 1e3;
}
function TherapyManagementPage() {
	const [filters, setFilters] = (0, import_react.useState)(DEFAULT_THERAPY_FILTERS);
	const [page, setPage] = (0, import_react.useState)(1);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [visibleColumns, setVisibleColumns] = (0, import_react.useState)(DEFAULT_THERAPY_COLUMNS);
	const filtered = (0, import_react.useMemo)(() => {
		const query = filters.search.trim().toLowerCase();
		return THERAPY_SESSIONS.filter((session) => {
			return (!query || [
				session.patientName,
				session.patientCode,
				session.code,
				session.guardianPhone,
				session.guardianName,
				session.group?.groupName ?? ""
			].join(" ").toLowerCase().includes(query)) && (filters.mode === "all" || session.mode === filters.mode) && (filters.status === "all" || session.status === filters.status) && (filters.program === "all" || session.program === filters.program) && withinRange(session.sessionDate, filters.range);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Therapy Management",
				description: "Manage all therapy sessions and monitor patient progress.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Therapy Management" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Export"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/therapy/new",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Schedule Therapy"]
					})
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Therapy summary",
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8",
				children: THERAPY_KPIS.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, { kpi }, kpi.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Therapy sessions",
				className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyFilters, {
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
					icon: Activity,
					title: "No Therapy Sessions Yet",
					description: "Start by scheduling your first therapy session.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/manager/therapy/new",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), "Schedule Therapy"]
						})
					}),
					secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => setFilters(DEFAULT_THERAPY_FILTERS),
						children: "Reset filters"
					}),
					className: "rounded-none border-0 shadow-none"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyTable, {
					rows,
					visibleColumns
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border px-4 py-3.5 sm:px-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TablePagination, {
						page: currentPage,
						pageSize: PAGE_SIZE,
						total: filtered.length,
						onPageChange: setPage
					})
				})] })]
			})
		]
	});
}
//#endregion
export { TherapyManagementPage as component };
