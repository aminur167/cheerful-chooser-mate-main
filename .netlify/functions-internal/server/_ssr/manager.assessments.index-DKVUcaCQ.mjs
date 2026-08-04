import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { H as RefreshCw, I as Search, Jt as Columns3, Qt as ClipboardList, Wt as Download, Z as Plus } from "../_libs/lucide-react.mjs";
import { c as BRANCH_FILTER_OPTIONS, i as ASSESSMENT_STATUSES, n as ASSESSMENT_DATE_RANGES, o as ASSESSMENT_TYPES, r as ASSESSMENT_KPIS, t as ASSESSMENTS, v as THERAPY_RECOMMENDATIONS } from "./assessment-data-VYEbB3BS.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BzhkirSF.mjs";
import { t as Input } from "./input-BkRQ7J8p.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BYMcu4zp.mjs";
import { a as DropdownMenuLabel, n as DropdownMenuCheckboxItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-CXFNH1SK.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { i as DEFAULT_ASSESSMENT_COLUMNS, r as AssessmentTable, t as ASSESSMENT_COLUMNS } from "./assessment-table-DebW8n3T.mjs";
import { t as EmptyState } from "./empty-state-Bfa0wIfS.mjs";
import { t as KpiCard } from "./kpi-card-BH70wzWL.mjs";
import { t as TablePagination } from "./table-pagination-BEFzaEO7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.assessments.index-DKVUcaCQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEFAULT_ASSESSMENT_FILTERS = {
	search: "",
	status: "all",
	assessmentType: "all",
	therapy: "all",
	branch: "all",
	range: "all"
};
function AssessmentFilters({ value, onChange, onRefresh, isRefreshing = false, visibleColumns, onToggleColumn }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 border-b border-border px-4 py-3.5 sm:px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full lg:max-w-[360px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "search",
					value: value.search,
					onChange: (event) => set({ search: event.target.value }),
					placeholder: "Search patient, patient ID, guardian phone or assessment ID…",
					"aria-label": "Search assessments",
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
							ASSESSMENT_COLUMNS.filter((column) => column.hideable).map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
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
					label: "assessment status",
					placeholder: "Status",
					width: "w-[160px]",
					value: value.status,
					onValueChange: (status) => set({ status }),
					allLabel: "All statuses",
					options: ASSESSMENT_STATUSES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "assessment type",
					placeholder: "Assessment type",
					width: "w-[185px]",
					value: value.assessmentType,
					onValueChange: (assessmentType) => set({ assessmentType }),
					allLabel: "All assessment types",
					options: ASSESSMENT_TYPES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "therapy type",
					placeholder: "Therapy",
					width: "w-[185px]",
					value: value.therapy,
					onValueChange: (therapy) => set({ therapy }),
					allLabel: "All therapies",
					options: THERAPY_RECOMMENDATIONS
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "branch",
					placeholder: "Branch",
					width: "w-[180px]",
					value: value.branch,
					onValueChange: (branch) => set({ branch }),
					allLabel: "All branches",
					options: BRANCH_FILTER_OPTIONS
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.range,
					onValueChange: (range) => set({ range }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[165px]",
						"aria-label": "Filter by assessment date range",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Date range" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: ASSESSMENT_DATE_RANGES.map((range) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: range.key,
						children: range.label
					}, range.key)) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					className: "text-muted-foreground",
					onClick: () => onChange(DEFAULT_ASSESSMENT_FILTERS),
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
var TODAY = /* @__PURE__ */ new Date("2026-07-31");
function withinRange(date, range) {
	if (range === "all") return true;
	const value = new Date(date);
	if (range === "today") return value.toDateString() === TODAY.toDateString();
	const days = range === "7d" ? 7 : range === "30d" ? 30 : 90;
	return value.getTime() >= TODAY.getTime() - days * 24 * 60 * 60 * 1e3;
}
function AssessmentManagementPage() {
	const [filters, setFilters] = (0, import_react.useState)(DEFAULT_ASSESSMENT_FILTERS);
	const [page, setPage] = (0, import_react.useState)(1);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [visibleColumns, setVisibleColumns] = (0, import_react.useState)(DEFAULT_ASSESSMENT_COLUMNS);
	const filtered = (0, import_react.useMemo)(() => {
		const query = filters.search.trim().toLowerCase();
		return ASSESSMENTS.filter((assessment) => {
			return (!query || [
				assessment.patientName,
				assessment.patientCode,
				assessment.code,
				assessment.guardianPhone,
				assessment.guardianName
			].join(" ").toLowerCase().includes(query)) && (filters.status === "all" || assessment.status === filters.status) && (filters.assessmentType === "all" || assessment.assessmentType === filters.assessmentType) && (filters.therapy === "all" || assessment.recommendation.therapy === filters.therapy) && (filters.branch === "all" || assessment.branch === filters.branch) && withinRange(assessment.assessmentDate, filters.range);
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
				title: "Assessment Management",
				description: "Manage patient assessments and treatment planning.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Assessment Management" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Export"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/assessments/new",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "New Assessment"]
					})
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Assessment summary",
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6",
				children: ASSESSMENT_KPIS.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, { kpi }, kpi.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Assessments",
				className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentFilters, {
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
					icon: ClipboardList,
					title: "No assessments available.",
					description: "Start by creating your first patient assessment.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/manager/assessments/new",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), "Create Assessment"]
						})
					}),
					secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => setFilters(DEFAULT_ASSESSMENT_FILTERS),
						children: "Reset filters"
					}),
					className: "rounded-none border-0 shadow-none"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentTable, {
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
export { AssessmentManagementPage as component };
