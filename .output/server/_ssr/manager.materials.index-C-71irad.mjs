import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { A as ShoppingCart, Cn as Boxes, H as RefreshCw, I as Search, Jt as Columns3, Wt as Download, Z as Plus } from "../_libs/lucide-react.mjs";
import { a as Route$16 } from "./router-BtnFRLs5.mjs";
import { _ as SALES, a as MATERIAL_BRANCHES, b as STOCK_MOVEMENTS, c as MATERIAL_KPIS, d as MATERIAL_TABS, h as MOVEMENT_TYPES, i as MATERIALS_TODAY_ISO, l as MATERIAL_STATUSES, r as MATERIALS, s as MATERIAL_CATEGORY_NAMES, x as STORAGE_LOCATIONS } from "./material-data-BW4O74XG.mjs";
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
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-S-rv8pR7.mjs";
import { i as NewSaleDialog, n as DEFAULT_SALE_COLUMNS, o as SalesTable, r as MATERIAL_COLUMNS, t as DEFAULT_MATERIAL_COLUMNS } from "./new-sale-dialog-TgI7flhM.mjs";
import { n as StockHistoryTable, t as MaterialTable } from "./stock-history-table-CGVM5Out.mjs";
import { n as CategoryCards, r as LowStockPanel, t as AddMaterialDialog } from "./add-material-dialog-BY7bk4PR.mjs";
import { n as SalesFilters, t as DEFAULT_SALE_FILTERS } from "./sales-filters-Dn6ka9I8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.materials.index-C-71irad.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEFAULT_MATERIAL_FILTERS = {
	search: "",
	category: "all",
	status: "all",
	location: "all",
	branch: "all"
};
function MaterialFilters({ value, onChange, onRefresh, isRefreshing = false, visibleColumns, onToggleColumn }) {
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
					placeholder: "Search material name, code, brand or supplier…",
					"aria-label": "Search materials",
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
							MATERIAL_COLUMNS.filter((column) => column.hideable).map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
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
					label: "category",
					placeholder: "Category",
					width: "w-[190px]",
					value: value.category,
					onChange: (next) => set({ category: next }),
					options: MATERIAL_CATEGORY_NAMES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "status",
					placeholder: "Status",
					width: "w-[165px]",
					value: value.status,
					onChange: (next) => set({ status: next }),
					options: MATERIAL_STATUSES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "location",
					placeholder: "Location",
					width: "w-[215px]",
					value: value.location,
					onChange: (next) => set({ location: next }),
					options: STORAGE_LOCATIONS
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "branch",
					placeholder: "Branch",
					width: "w-[190px]",
					value: value.branch,
					onChange: (next) => set({ branch: next }),
					options: MATERIAL_BRANCHES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					className: "text-muted-foreground",
					onClick: () => onChange(DEFAULT_MATERIAL_FILTERS),
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
				children: ["All ", label === "category" ? "categories" : `${label}s`]
			}), options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
				value: option,
				children: option
			}, option))]
		})]
	});
}
var PAGE_SIZE = 8;
var TODAY = new Date(MATERIALS_TODAY_ISO);
function withinRange(date, range) {
	if (range === "all") return true;
	const value = new Date(date);
	if (range === "today") return value.toDateString() === TODAY.toDateString();
	const days = range === "7d" ? 7 : 30;
	return value.getTime() >= TODAY.getTime() - days * 24 * 60 * 60 * 1e3;
}
function MaterialsPage() {
	const { tab } = Route$16.useSearch();
	const navigate = Route$16.useNavigate();
	const activeTab = MATERIAL_TABS.some((item) => item.value === tab) ? tab : "inventory";
	const [materialDialogOpen, setMaterialDialogOpen] = (0, import_react.useState)(false);
	const [saleDialogOpen, setSaleDialogOpen] = (0, import_react.useState)(false);
	const [saleMaterialId, setSaleMaterialId] = (0, import_react.useState)();
	const [materialFilters, setMaterialFilters] = (0, import_react.useState)(DEFAULT_MATERIAL_FILTERS);
	const [materialPage, setMaterialPage] = (0, import_react.useState)(1);
	const [materialRefreshing, setMaterialRefreshing] = (0, import_react.useState)(false);
	const [materialColumns, setMaterialColumns] = (0, import_react.useState)(DEFAULT_MATERIAL_COLUMNS);
	const [saleFilters, setSaleFilters] = (0, import_react.useState)(DEFAULT_SALE_FILTERS);
	const [salePage, setSalePage] = (0, import_react.useState)(1);
	const [saleRefreshing, setSaleRefreshing] = (0, import_react.useState)(false);
	const [saleColumns, setSaleColumns] = (0, import_react.useState)(DEFAULT_SALE_COLUMNS);
	const [movementType, setMovementType] = (0, import_react.useState)("all");
	const filteredMaterials = (0, import_react.useMemo)(() => {
		const query = materialFilters.search.trim().toLowerCase();
		return MATERIALS.filter((material) => {
			return (!query || [
				material.name,
				material.code,
				material.brand,
				material.supplier.name,
				material.category
			].join(" ").toLowerCase().includes(query)) && (materialFilters.category === "all" || material.category === materialFilters.category) && (materialFilters.status === "all" || material.status === materialFilters.status) && (materialFilters.location === "all" || material.location === materialFilters.location) && (materialFilters.branch === "all" || material.branch === materialFilters.branch);
		});
	}, [materialFilters]);
	const filteredSales = (0, import_react.useMemo)(() => {
		const query = saleFilters.search.trim().toLowerCase();
		return SALES.filter((sale) => {
			const material = MATERIALS.find((item) => item.id === sale.materialId);
			return (!query || [
				sale.invoiceNo,
				sale.customerName,
				sale.customerPhone,
				sale.materialName,
				sale.materialCode
			].join(" ").toLowerCase().includes(query)) && (saleFilters.status === "all" || sale.status === saleFilters.status) && (saleFilters.method === "all" || sale.method === saleFilters.method) && (saleFilters.category === "all" || material?.category === saleFilters.category) && withinRange(sale.date, saleFilters.range);
		});
	}, [saleFilters]);
	const movements = (0, import_react.useMemo)(() => [...STOCK_MOVEMENTS].filter((movement) => movementType === "all" || movement.type === movementType).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()), [movementType]);
	const materialPageCount = Math.max(1, Math.ceil(filteredMaterials.length / PAGE_SIZE));
	const currentMaterialPage = Math.min(materialPage, materialPageCount);
	const materialRows = filteredMaterials.slice((currentMaterialPage - 1) * PAGE_SIZE, currentMaterialPage * PAGE_SIZE);
	const salePageCount = Math.max(1, Math.ceil(filteredSales.length / PAGE_SIZE));
	const currentSalePage = Math.min(salePage, salePageCount);
	const saleRows = filteredSales.slice((currentSalePage - 1) * PAGE_SIZE, currentSalePage * PAGE_SIZE);
	const toggleMaterialColumn = (key) => setMaterialColumns((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
	const toggleSaleColumn = (key) => setSaleColumns((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
	const openSale = (materialId) => {
		setSaleMaterialId(materialId);
		setSaleDialogOpen(true);
	};
	const addMaterialButton = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		onClick: () => setMaterialDialogOpen(true),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
			className: "h-4 w-4",
			"aria-hidden": "true"
		}), "Add Material"]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Materials & Sales",
				description: "Manage therapy materials, inventory and sales.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Materials & Sales" }],
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
						onClick: () => setMaterialDialogOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Add Material"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => openSale(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "New Sale"]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Inventory summary",
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8",
				children: MATERIAL_KPIS.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, { kpi }, kpi.id))
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
							children: MATERIAL_TABS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: item.value,
								children: item.label
							}, item.value))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "inventory",
						className: "mt-6 space-y-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 2xl:grid-cols-[minmax(0,1fr)_380px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialFilters, {
									value: materialFilters,
									onChange: (next) => {
										setMaterialFilters(next);
										setMaterialPage(1);
									},
									onRefresh: () => {
										setMaterialRefreshing(true);
										setTimeout(() => setMaterialRefreshing(false), 700);
									},
									isRefreshing: materialRefreshing,
									visibleColumns: materialColumns,
									onToggleColumn: toggleMaterialColumn
								}), materialRows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
									icon: Boxes,
									title: "No Materials Added",
									description: "Start by adding your first therapy material.",
									action: addMaterialButton,
									secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										onClick: () => setMaterialFilters(DEFAULT_MATERIAL_FILTERS),
										children: "Reset filters"
									}),
									className: "rounded-none border-0 shadow-none"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialTable, {
									rows: materialRows,
									visibleColumns: materialColumns,
									onStockIn: (item) => setSaleMaterialId(item.id),
									onStockOut: (item) => openSale(item.id)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "border-t border-border px-4 py-3.5 sm:px-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TablePagination, {
										page: currentMaterialPage,
										pageSize: PAGE_SIZE,
										total: filteredMaterials.length,
										onPageChange: setMaterialPage
									})
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LowStockPanel, {})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "sales",
						className: "mt-6 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12.5px] text-muted-foreground",
								children: "Every material sale recorded at this branch, newest first."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/sales",
									children: "Open sales console"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesFilters, {
								value: saleFilters,
								onChange: (next) => {
									setSaleFilters(next);
									setSalePage(1);
								},
								onRefresh: () => {
									setSaleRefreshing(true);
									setTimeout(() => setSaleRefreshing(false), 700);
								},
								isRefreshing: saleRefreshing,
								visibleColumns: saleColumns,
								onToggleColumn: toggleSaleColumn
							}), saleRows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
								icon: ShoppingCart,
								title: "No Sales Recorded",
								description: "Record your first material sale to see it here.",
								action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: () => openSale(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), "New Sale"]
								}),
								secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									onClick: () => setSaleFilters(DEFAULT_SALE_FILTERS),
									children: "Reset filters"
								}),
								className: "rounded-none border-0 shadow-none"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesTable, {
								rows: saleRows,
								visibleColumns: saleColumns
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-t border-border px-4 py-3.5 sm:px-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TablePagination, {
									page: currentSalePage,
									pageSize: PAGE_SIZE,
									total: filteredSales.length,
									onPageChange: setSalePage
								})
							})] })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "categories",
						className: "mt-6 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-[15px] font-semibold tracking-tight text-foreground",
								children: "Material categories"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12.5px] text-muted-foreground",
								children: "Educational toys, cards, books and therapy equipment."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCards, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "history",
						className: "mt-6 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: movementType === "all" ? "default" : "outline",
								size: "sm",
								onClick: () => setMovementType("all"),
								children: "All movements"
							}), MOVEMENT_TYPES.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: movementType === type ? "default" : "outline",
								size: "sm",
								onClick: () => setMovementType(type),
								children: type
							}, type))]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
							children: movements.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
								icon: Boxes,
								title: "No Stock Movements",
								description: "Stock in, stock out, adjustments and damages will appear here.",
								className: "rounded-none border-0 shadow-none"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockHistoryTable, { rows: movements })
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddMaterialDialog, {
				open: materialDialogOpen,
				onOpenChange: setMaterialDialogOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewSaleDialog, {
				open: saleDialogOpen,
				onOpenChange: setSaleDialogOpen,
				presetMaterialId: saleMaterialId
			})
		]
	});
}
//#endregion
export { MaterialsPage as component };
