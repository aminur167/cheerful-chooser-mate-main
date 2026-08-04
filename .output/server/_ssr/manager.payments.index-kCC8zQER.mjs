import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Et as Layers, H as RefreshCw, I as Search, Jt as Columns3, K as Receipt, Lt as FileText, Wt as Download, Z as Plus, a as Wallet, b as TrendingUp, fn as ChartPie } from "../_libs/lucide-react.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
import { f as Route$8 } from "./router-BtnFRLs5.mjs";
import { _ as TODAY_ISO, d as PAYMENT_METHODS, f as PAYMENT_PACKAGES, g as PAYMENT_TABS, h as PAYMENT_STATUS_TONE, i as METHOD_SPLIT, l as PAYMENT_DATE_RANGES, m as PAYMENT_STATUSES, n as COLLECTION_SERIES, p as PAYMENT_RECORDS, s as PACKAGE_TYPES, u as PAYMENT_KPIS } from "./payment-data-DkduNZNP.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { t as Input } from "./input-BkRQ7J8p.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BYMcu4zp.mjs";
import { n as formatDate } from "./breadcrumbs-CW6ykn0r.mjs";
import { a as DropdownMenuLabel, n as DropdownMenuCheckboxItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-CXFNH1SK.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { t as WidgetCard } from "./widget-card-Dbo4snDS.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BzGcbmh2.mjs";
import { t as EmptyState } from "./empty-state-Bfa0wIfS.mjs";
import { t as KpiCard } from "./kpi-card-BH70wzWL.mjs";
import { t as TablePagination } from "./table-pagination-BEFzaEO7.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-S-rv8pR7.mjs";
import { a as YAxis, d as Pie, f as Cell, l as CartesianGrid, n as PieChart, o as XAxis, r as BarChart, u as Bar } from "../_libs/recharts+[...].mjs";
import { n as ChartTooltip, r as ChartTooltipContent, t as ChartContainer } from "./chart-BptILwYE.mjs";
import { i as PaymentAvatar, n as HISTORY_COLUMNS, o as PaymentTable, r as PAYMENT_COLUMNS, t as DEFAULT_PAYMENT_COLUMNS } from "./payment-summary-card-DwViF7SV.mjs";
import { t as InvoiceCard } from "./invoice-card-Cg2gonku.mjs";
import { t as CollectPaymentDialog } from "./collect-payment-dialog-pyxCxjgt.mjs";
import { n as PackageCard, t as CreatePackageDialog } from "./create-package-dialog-D9fRnz5p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.payments.index-kCC8zQER.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Read-only enterprise ledger of every collected payment. */
function PaymentHistoryTable({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "620px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
				className: "sr-only",
				children: "Payment history"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
				className: "border-border hover:bg-transparent",
				children: HISTORY_COLUMNS.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					scope: "col",
					className: cn("sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur", column.align === "right" && "text-right"),
					children: column.label
				}, column.key))
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				className: "border-border transition-enterprise hover:bg-surface-hover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/manager/payments/$paymentId",
							params: { paymentId: record.id },
							className: "whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline",
							children: record.receiptNo
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5 text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentAvatar, {
								name: record.patientName,
								className: "h-8 w-8"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-medium text-foreground",
									children: record.patientName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-[12px] text-muted-foreground",
									children: record.patientCode
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5 text-sm text-foreground",
						children: record.packageName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5 text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							tone: "info",
							label: record.packageType,
							dot: false
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5 text-right text-sm tabular-nums text-foreground",
						children: formatTaka(record.paid)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5 text-sm text-muted-foreground",
						children: record.method
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "whitespace-nowrap px-5 py-3.5 text-sm text-muted-foreground",
						children: record.collectedBy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "whitespace-nowrap px-5 py-3.5 text-sm text-muted-foreground",
						children: formatDate(record.paymentDate)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							tone: PAYMENT_STATUS_TONE[record.status],
							label: record.status
						})
					})
				]
			}, record.id)) })
		] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		children: rows.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "px-4 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/manager/payments/$paymentId",
						params: { paymentId: record.id },
						className: "block truncate text-sm font-medium text-foreground hover:underline",
						children: record.patientName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate font-mono text-[12px] text-muted-foreground",
						children: record.receiptNo
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 text-sm font-semibold tabular-nums text-foreground",
					children: formatTaka(record.paid)
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2.5 flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: PAYMENT_STATUS_TONE[record.status],
						label: record.status
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: "info",
						label: record.packageType,
						dot: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[12px] text-muted-foreground",
						children: [
							record.method,
							" · ",
							formatDate(record.paymentDate)
						]
					})
				]
			})]
		}, record.id))
	})] });
}
var collectionConfig = {
	collection: {
		label: "Collection",
		color: "var(--chart-1)"
	},
	due: {
		label: "Outstanding due",
		color: "var(--chart-3)"
	}
};
var methodConfig = {
	amount: { label: "Amount" },
	Cash: {
		label: "Cash",
		color: "var(--chart-1)"
	},
	"Mobile Banking": {
		label: "Mobile Banking",
		color: "var(--chart-2)"
	},
	Card: {
		label: "Card",
		color: "var(--chart-3)"
	},
	"Bank Transfer": {
		label: "Bank Transfer",
		color: "var(--chart-4)"
	}
};
function CollectionTrendChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
		title: "Collection vs Due",
		description: "Monthly collection and outstanding balance",
		icon: TrendingUp,
		contentClassName: "flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-5 flex flex-wrap items-center gap-x-6 gap-y-2",
			children: Object.entries(collectionConfig).map(([key, item]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-2 text-[12.5px] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-2 w-2 rounded-full",
					style: { backgroundColor: item.color },
					"aria-hidden": "true"
				}), item.label]
			}, key))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
			config: collectionConfig,
			className: "aspect-auto h-full min-h-[260px] w-full flex-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
				data: COLLECTION_SERIES,
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "collection",
						fill: "var(--chart-1)",
						radius: [
							4,
							4,
							0,
							0
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "due",
						fill: "var(--chart-3)",
						radius: [
							4,
							4,
							0,
							0
						]
					})
				]
			})
		})]
	});
}
function MethodSplitChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
		title: "Collection by Method",
		description: "Share of collection per payment channel",
		icon: ChartPie,
		contentClassName: "flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
			config: methodConfig,
			className: "aspect-auto h-full min-h-[220px] w-full flex-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, { formatter: (value) => formatTaka(Number(value)) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
				data: METHOD_SPLIT,
				dataKey: "amount",
				nameKey: "method",
				innerRadius: 52,
				outerRadius: 82,
				children: METHOD_SPLIT.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: `var(--chart-${index + 1})` }, entry.method))
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 space-y-2 border-t border-border pt-4",
			children: METHOD_SPLIT.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between gap-3 text-[12.5px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex min-w-0 items-center gap-2 text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-2 w-2 shrink-0 rounded-full",
						style: { backgroundColor: `var(--chart-${index + 1})` },
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: entry.method
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 font-medium tabular-nums text-foreground",
					children: formatTaka(entry.amount)
				})]
			}, entry.method))
		})]
	});
}
var DEFAULT_PAYMENT_FILTERS = {
	search: "",
	type: "all",
	status: "all",
	method: "all",
	range: "all"
};
function PaymentFilters({ value, onChange, onRefresh, isRefreshing = false, visibleColumns, onToggleColumn, searchPlaceholder = "Search patient, receipt, invoice or phone…" }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 border-b border-border px-4 py-3.5 sm:px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full lg:max-w-[400px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "search",
					value: value.search,
					onChange: (event) => set({ search: event.target.value }),
					placeholder: searchPlaceholder,
					"aria-label": "Search payments",
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
							PAYMENT_COLUMNS.filter((column) => column.hideable).map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
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
					label: "package type",
					placeholder: "Package type",
					width: "w-[180px]",
					value: value.type,
					onChange: (next) => set({ type: next }),
					options: PACKAGE_TYPES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "payment status",
					placeholder: "Status",
					width: "w-[160px]",
					value: value.status,
					onChange: (next) => set({ status: next }),
					options: PAYMENT_STATUSES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "payment method",
					placeholder: "Method",
					width: "w-[180px]",
					value: value.method,
					onChange: (next) => set({ method: next }),
					options: PAYMENT_METHODS
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.range,
					onValueChange: (next) => set({ range: next }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[160px]",
						"aria-label": "Filter by date",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Date" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
						align: "start",
						children: PAYMENT_DATE_RANGES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: option.key,
							children: option.label
						}, option.key))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					className: "text-muted-foreground",
					onClick: () => onChange(DEFAULT_PAYMENT_FILTERS),
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
var TODAY = new Date(TODAY_ISO);
function withinRange(date, range) {
	if (range === "all") return true;
	const value = new Date(date);
	if (range === "today") return value.toDateString() === TODAY.toDateString();
	const days = range === "7d" ? 7 : 30;
	return value.getTime() >= TODAY.getTime() - days * 24 * 60 * 60 * 1e3;
}
function PaymentBillingPage() {
	const { tab } = Route$8.useSearch();
	const navigate = Route$8.useNavigate();
	const activeTab = PAYMENT_TABS.some((item) => item.value === tab) ? tab : "packages";
	const [packageOpen, setPackageOpen] = (0, import_react.useState)(false);
	const [collectOpen, setCollectOpen] = (0, import_react.useState)(false);
	const [collectPackageId, setCollectPackageId] = (0, import_react.useState)();
	const [collectPatientId, setCollectPatientId] = (0, import_react.useState)();
	const [filters, setFilters] = (0, import_react.useState)(DEFAULT_PAYMENT_FILTERS);
	const [page, setPage] = (0, import_react.useState)(1);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [visibleColumns, setVisibleColumns] = (0, import_react.useState)(DEFAULT_PAYMENT_COLUMNS);
	const filtered = (0, import_react.useMemo)(() => {
		const query = filters.search.trim().toLowerCase();
		return PAYMENT_RECORDS.filter((record) => {
			return (!query || [
				record.patientName,
				record.patientCode,
				record.receiptNo,
				record.invoiceNo,
				record.patientPhone,
				record.guardianName,
				record.packageName
			].join(" ").toLowerCase().includes(query)) && (filters.type === "all" || record.packageType === filters.type) && (filters.status === "all" || record.status === filters.status) && (filters.method === "all" || record.method === filters.method) && withinRange(record.paymentDate, filters.range);
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
	const openCollect = (packageId, patientId) => {
		setCollectPackageId(packageId);
		setCollectPatientId(patientId);
		setCollectOpen(true);
	};
	const resetFiltersButton = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "ghost",
		onClick: () => setFilters(DEFAULT_PAYMENT_FILTERS),
		children: "Reset filters"
	});
	const createPackageButton = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		onClick: () => setPackageOpen(true),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
			className: "h-4 w-4",
			"aria-hidden": "true"
		}), "Create Package"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Payment & Billing",
				description: "Manage packages, collect payments and monitor dues.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Payment & Billing" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Export"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => setPackageOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Create Package"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => openCollect(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Collect Payment"]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Billing summary",
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8",
				children: PAYMENT_KPIS.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, { kpi }, kpi.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Collection analytics",
				className: "grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectionTrendChart, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MethodSplitChart, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				value: activeTab,
				onValueChange: (next) => navigate({ search: { tab: next } }),
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "-mx-1 overflow-x-auto px-1 pb-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
							className: "w-max",
							children: PAYMENT_TABS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: item.value,
								children: item.label
							}, item.value))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "packages",
						className: "mt-6 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[13px] text-muted-foreground",
								children: [PAYMENT_PACKAGES.length, " packages across daily, session-wise, monthly and online booking models."]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/payments/packages",
									children: "Open package manager"
								})
							})]
						}), PAYMENT_PACKAGES.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
							icon: Layers,
							title: "No Payments Yet",
							description: "Create your first package and collect payment.",
							action: createPackageButton
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 md:grid-cols-2 2xl:grid-cols-3",
							children: PAYMENT_PACKAGES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCard, {
								item,
								onCollect: (pkg) => openCollect(pkg.id)
							}, item.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "collection",
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							"aria-label": "Payment collection",
							className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentFilters, {
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
								icon: Receipt,
								title: "No Payments Yet",
								description: "Create your first package and collect payment.",
								action: createPackageButton,
								secondaryAction: resetFiltersButton,
								className: "rounded-none border-0 shadow-none"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentTable, {
								rows,
								visibleColumns,
								onCollect: (record) => openCollect(record.packageId, record.patientId)
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
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "invoices",
						className: "mt-6 space-y-6",
						children: PAYMENT_RECORDS.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
							icon: FileText,
							title: "No Payments Yet",
							description: "Create your first package and collect payment.",
							action: createPackageButton
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 md:grid-cols-2 2xl:grid-cols-3",
							children: PAYMENT_RECORDS.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvoiceCard, { record }, record.id))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "history",
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							"aria-label": "Payment history",
							className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3.5 sm:px-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-sm font-semibold text-foreground",
										children: "Payment history"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[12.5px] text-muted-foreground",
										children: "Complete ledger of every receipt issued by this branch."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), "Export ledger"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentHistoryTable, { rows: PAYMENT_RECORDS })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreatePackageDialog, {
				open: packageOpen,
				onOpenChange: setPackageOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectPaymentDialog, {
				open: collectOpen,
				onOpenChange: setCollectOpen,
				defaultPackageId: collectPackageId,
				defaultPatientId: collectPatientId
			}, `${collectPackageId ?? "none"}-${collectPatientId ?? "none"}-${String(collectOpen)}`)
		]
	});
}
//#endregion
export { PaymentBillingPage as component };
