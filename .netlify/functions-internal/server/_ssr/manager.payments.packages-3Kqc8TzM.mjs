import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { Et as Layers, I as Search, Ln as ArrowLeft, Z as Plus } from "../_libs/lucide-react.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
import { a as PACKAGE_STATUSES, f as PAYMENT_PACKAGES, s as PACKAGE_TYPES } from "./payment-data-DkduNZNP.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BzhkirSF.mjs";
import { t as Input } from "./input-BkRQ7J8p.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BYMcu4zp.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as EmptyState } from "./empty-state-Bfa0wIfS.mjs";
import { t as CollectPaymentDialog } from "./collect-payment-dialog-pyxCxjgt.mjs";
import { n as PackageCard, t as CreatePackageDialog } from "./create-package-dialog-D9fRnz5p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.payments.packages-3Kqc8TzM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PackagesPage() {
	const [search, setSearch] = (0, import_react.useState)("");
	const [type, setType] = (0, import_react.useState)("all");
	const [status, setStatus] = (0, import_react.useState)("all");
	const [packageOpen, setPackageOpen] = (0, import_react.useState)(false);
	const [collectOpen, setCollectOpen] = (0, import_react.useState)(false);
	const [collectPackageId, setCollectPackageId] = (0, import_react.useState)();
	const packages = (0, import_react.useMemo)(() => {
		const query = search.trim().toLowerCase();
		return PAYMENT_PACKAGES.filter((item) => (!query || [
			item.name,
			item.code,
			item.description
		].join(" ").toLowerCase().includes(query)) && (type === "all" || item.type === type) && (status === "all" || item.status === status));
	}, [
		search,
		type,
		status
	]);
	const activeRevenue = packages.reduce((total, item) => total + item.monthlyRevenue, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Payment Packages",
				description: "Manage packages, collect payments and monitor dues.",
				breadcrumbs: [
					{
						label: "Branch Manager",
						to: "/manager"
					},
					{
						label: "Payment & Billing",
						to: "/manager/payments"
					},
					{ label: "Packages" }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/payments",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Back"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setPackageOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Create Package"]
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 border-b border-border px-4 py-3.5 sm:px-5 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full lg:max-w-[360px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "search",
							value: search,
							onChange: (event) => setSearch(event.target.value),
							placeholder: "Search package name or code…",
							"aria-label": "Search packages",
							className: "h-9 bg-muted/40 pl-9 shadow-none"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: type,
							onValueChange: setType,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "h-9 w-[180px]",
								"aria-label": "Filter by package type",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Package type" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
								align: "start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "all",
									children: "All package types"
								}), PACKAGE_TYPES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: item,
									children: item
								}, item))]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: status,
							onValueChange: setStatus,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "h-9 w-[150px]",
								"aria-label": "Filter by status",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Status" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
								align: "start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "all",
									children: "All statuses"
								}), PACKAGE_STATUSES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: item,
									children: item
								}, item))]
							})]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 px-4 py-3.5 text-[12.5px] text-muted-foreground sm:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Showing ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: packages.length
						}),
						" of",
						" ",
						PAYMENT_PACKAGES.length,
						" packages"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Monthly revenue from selection:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium tabular-nums text-foreground",
							children: formatTaka(activeRevenue)
						})
					] })]
				})]
			}),
			packages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
				icon: Layers,
				title: "No Payments Yet",
				description: "Create your first package and collect payment.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => setPackageOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Create Package"]
				}),
				secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => {
						setSearch("");
						setType("all");
						setStatus("all");
					},
					children: "Reset filters"
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 2xl:grid-cols-3",
				children: packages.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageCard, {
					item,
					onCollect: (pkg) => {
						setCollectPackageId(pkg.id);
						setCollectOpen(true);
					}
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreatePackageDialog, {
				open: packageOpen,
				onOpenChange: setPackageOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectPaymentDialog, {
				open: collectOpen,
				onOpenChange: setCollectOpen,
				defaultPackageId: collectPackageId
			}, `${collectPackageId ?? "none"}-${String(collectOpen)}`)
		]
	});
}
//#endregion
export { PackagesPage as component };
