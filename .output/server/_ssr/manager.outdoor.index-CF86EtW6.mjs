import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { H as RefreshCw, I as Search, Wt as Download, gn as CalendarPlus, mt as MapPinned } from "../_libs/lucide-react.mjs";
import { r as Route$13 } from "./router-BtnFRLs5.mjs";
import { C as VISIT_TYPES, _ as VISIT_HISTORY, d as OUTDOOR_VISITS, l as OUTDOOR_TABS, o as OUTDOOR_KPIS, r as DIVISIONS, s as OUTDOOR_PATIENTS, u as OUTDOOR_THERAPISTS, x as VISIT_STATUSES } from "./outdoor-data-ClUJqde_.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BzhkirSF.mjs";
import { t as Input } from "./input-BkRQ7J8p.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BYMcu4zp.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as EmptyState } from "./empty-state-Bfa0wIfS.mjs";
import { t as KpiCard } from "./kpi-card-BH70wzWL.mjs";
import { t as TablePagination } from "./table-pagination-BEFzaEO7.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-S-rv8pR7.mjs";
import { a as TherapistAvailabilityWidget, c as UpcomingVisitsWidget, i as OutdoorVisitTable, l as VisitHistoryTable, o as TherapistCards, r as OutdoorPatientTable, s as TodaysScheduleWidget, t as AreaCoverageWidget } from "./outdoor-widgets-3JHA2AvR.mjs";
import { t as ScheduleVisitDialog } from "./schedule-visit-dialog-Cb3CDl2p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.outdoor.index-CF86EtW6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEFAULT_OUTDOOR_FILTERS = {
	search: "",
	type: "all",
	status: "all",
	division: "all",
	therapist: "all"
};
function OutdoorFilters({ value, onChange, onRefresh, isRefreshing = false, searchPlaceholder = "Search visit ID, patient, guardian or area…" }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 border-b border-border px-4 py-3.5 sm:px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full lg:max-w-[430px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "search",
					value: value.search,
					onChange: (event) => set({ search: event.target.value }),
					placeholder: searchPlaceholder,
					"aria-label": "Search outdoor visits",
					className: "h-9 bg-muted/40 pl-9 shadow-none"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 flex-wrap items-center gap-2.5",
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
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Picker, {
					label: "visit types",
					placeholder: "Visit type",
					width: "w-[185px]",
					value: value.type,
					onChange: (next) => set({ type: next }),
					options: VISIT_TYPES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Picker, {
					label: "statuses",
					placeholder: "Status",
					width: "w-[165px]",
					value: value.status,
					onChange: (next) => set({ status: next }),
					options: VISIT_STATUSES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Picker, {
					label: "divisions",
					placeholder: "Division",
					width: "w-[165px]",
					value: value.division,
					onChange: (next) => set({ division: next }),
					options: DIVISIONS
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Picker, {
					label: "therapists",
					placeholder: "Therapist",
					width: "w-[210px]",
					value: value.therapist,
					onChange: (next) => set({ therapist: next }),
					options: OUTDOOR_THERAPISTS.map((therapist) => therapist.name)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					className: "text-muted-foreground",
					onClick: () => onChange(DEFAULT_OUTDOOR_FILTERS),
					children: "Clear"
				})
			]
		})]
	});
}
function Picker({ label, placeholder, width, value, onChange, options }) {
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
				children: ["All ", label]
			}), options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: option,
				children: option
			}, option))]
		})]
	});
}
var PAGE_SIZE = 8;
function OutdoorPage() {
	const { tab } = Route$13.useSearch();
	const navigate = Route$13.useNavigate();
	const activeTab = OUTDOOR_TABS.some((item) => item.value === tab) ? tab : "visits";
	const [wizardOpen, setWizardOpen] = (0, import_react.useState)(false);
	const [filters, setFilters] = (0, import_react.useState)(DEFAULT_OUTDOOR_FILTERS);
	const [page, setPage] = (0, import_react.useState)(1);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const visits = (0, import_react.useMemo)(() => {
		const query = filters.search.trim().toLowerCase();
		return OUTDOOR_VISITS.filter((visit) => {
			return (!query || [
				visit.visitId,
				visit.patientName,
				visit.guardian,
				visit.area,
				visit.therapistName
			].join(" ").toLowerCase().includes(query)) && (filters.type === "all" || visit.type === filters.type) && (filters.status === "all" || visit.status === filters.status) && (filters.division === "all" || visit.division === filters.division) && (filters.therapist === "all" || visit.therapistName === filters.therapist);
		}).sort((a, b) => b.date.localeCompare(a.date));
	}, [filters]);
	const pageCount = Math.max(1, Math.ceil(visits.length / PAGE_SIZE));
	const currentPage = Math.min(page, pageCount);
	const rows = visits.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
	const scheduleButton = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		onClick: () => setWizardOpen(true),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
			className: "h-4 w-4",
			"aria-hidden": "true"
		}), "Schedule Outdoor Visit"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Outdoor Service Management",
				description: "Manage outdoor therapy visits, patients and therapists.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Outdoor Service" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [scheduleButton, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Export"]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Outdoor service summary",
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8",
				children: OUTDOOR_KPIS.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, { kpi }, kpi.id))
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
								children: OUTDOOR_TABS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: item.value,
									children: item.label
								}, item.value))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "visits",
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutdoorFilters, {
									value: filters,
									onChange: (next) => {
										setFilters(next);
										setPage(1);
									},
									onRefresh: () => {
										setRefreshing(true);
										setTimeout(() => setRefreshing(false), 700);
									},
									isRefreshing: refreshing
								}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
									icon: MapPinned,
									title: "No Outdoor Visits Scheduled",
									description: "Start by scheduling your first outdoor therapy visit.",
									action: scheduleButton,
									secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										onClick: () => setFilters(DEFAULT_OUTDOOR_FILTERS),
										children: "Reset filters"
									}),
									className: "rounded-none border-0 shadow-none"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutdoorVisitTable, { rows }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "border-t border-border px-4 py-3.5 sm:px-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TablePagination, {
										page: currentPage,
										pageSize: PAGE_SIZE,
										total: visits.length,
										onPageChange: setPage
									})
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "patients",
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutdoorPatientTable, { rows: OUTDOOR_PATIENTS })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "therapists",
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapistCards, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "history",
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitHistoryTable, { rows: VISIT_HISTORY })
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6",
					"aria-label": "Outdoor service widgets",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodaysScheduleWidget, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpcomingVisitsWidget, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapistAvailabilityWidget, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaCoverageWidget, {})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleVisitDialog, {
				open: wizardOpen,
				onOpenChange: setWizardOpen
			})
		]
	});
}
//#endregion
export { OutdoorPage as component };
