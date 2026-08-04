import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { A as ShoppingCart, B as RotateCcw, Ht as Ellipsis, J as Printer, Vt as Eye, yt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
import { g as PAYMENT_METHODS, r as MATERIALS, y as SALE_STATUS_TONE } from "./material-data-BW4O74XG.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { t as Input } from "./input-BkRQ7J8p.mjs";
import { t as FormField } from "./form-field-DoPU-RoN.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BYMcu4zp.mjs";
import { n as formatDate } from "./breadcrumbs-CW6ykn0r.mjs";
import { i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-CXFNH1SK.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BzGcbmh2.mjs";
import { t as Textarea } from "./textarea-BRH7-9yv.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-D9_a5hiE.mjs";
import { n as MaterialThumbnail } from "./material-thumbnail-CuqMG4jr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/new-sale-dialog-TgI7flhM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MATERIAL_COLUMNS = [
	{
		key: "code",
		label: "Material ID",
		hideable: false
	},
	{
		key: "image",
		label: "Image",
		hideable: true
	},
	{
		key: "name",
		label: "Material Name",
		hideable: false
	},
	{
		key: "category",
		label: "Category",
		hideable: true
	},
	{
		key: "unitPrice",
		label: "Unit Price",
		hideable: true,
		align: "right"
	},
	{
		key: "quantity",
		label: "Available Qty",
		hideable: true,
		align: "right"
	},
	{
		key: "minStock",
		label: "Minimum Stock",
		hideable: true,
		align: "right"
	},
	{
		key: "location",
		label: "Location",
		hideable: true
	},
	{
		key: "supplier",
		label: "Supplier",
		hideable: true
	},
	{
		key: "status",
		label: "Status",
		hideable: false
	}
];
var DEFAULT_MATERIAL_COLUMNS = MATERIAL_COLUMNS.map((column) => column.key);
var SALE_COLUMNS = [
	{
		key: "invoice",
		label: "Invoice",
		hideable: false
	},
	{
		key: "customer",
		label: "Customer",
		hideable: false
	},
	{
		key: "material",
		label: "Material",
		hideable: true
	},
	{
		key: "quantity",
		label: "Qty",
		hideable: true,
		align: "right"
	},
	{
		key: "unitPrice",
		label: "Unit Price",
		hideable: true,
		align: "right"
	},
	{
		key: "discount",
		label: "Discount",
		hideable: true,
		align: "right"
	},
	{
		key: "total",
		label: "Total",
		hideable: false,
		align: "right"
	},
	{
		key: "status",
		label: "Payment Status",
		hideable: false
	},
	{
		key: "date",
		label: "Date",
		hideable: true
	}
];
var DEFAULT_SALE_COLUMNS = SALE_COLUMNS.map((column) => column.key);
function SaleRowActions({ item, onPrint, onRefund }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon",
			className: "h-8 w-8 text-muted-foreground",
			"aria-label": `Actions for ${item.invoiceNo}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		className: "w-52",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/manager/materials/$materialId",
					params: { materialId: item.materialId },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "View material"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onSelect: () => onPrint?.(item),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Print invoice"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onSelect: () => onRefund?.(item),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Record refund"]
			})
		]
	})] });
}
function SalesTable({ rows, visibleColumns, onPrint, onRefund }) {
	const columns = SALE_COLUMNS.filter((column) => visibleColumns.includes(column.key));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
				className: "sr-only",
				children: "Material sales"
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
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaleCell, {
						column: column.key,
						item
					})
				}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "px-5 py-3.5 text-right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaleRowActions, {
						item,
						onPrint,
						onRefund
					})
				})]
			}, item.id)) })
		] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		children: rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "px-4 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-mono text-[12.5px] font-medium text-primary",
								children: item.invoiceNo
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-medium text-foreground",
								children: item.customerName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-[12px] text-muted-foreground",
								children: item.customerPhone
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaleRowActions, {
						item,
						onPrint,
						onRefund
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2.5 flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: SALE_STATUS_TONE[item.status],
						label: item.status
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: "neutral",
						label: item.method,
						dot: false
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
							label: "Material",
							value: item.materialName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
							label: "Quantity",
							value: String(item.quantity)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
							label: "Unit price",
							value: formatTaka(item.unitPrice)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
							label: "Discount",
							value: formatTaka(item.discount)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
							label: "Total",
							value: formatTaka(item.total)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
							label: "Date",
							value: formatDate(item.date)
						})
					]
				})
			]
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
function SaleCell({ column, item }) {
	switch (column) {
		case "invoice": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "whitespace-nowrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[12.5px] font-medium text-primary",
				children: item.invoiceNo
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] text-muted-foreground",
				children: item.method
			})]
		});
		case "customer": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 max-w-[220px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate font-medium text-foreground",
				children: item.customerName
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate font-mono text-[12px] text-muted-foreground",
				children: item.customerPhone
			})]
		});
		case "material": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 max-w-[240px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/manager/materials/$materialId",
				params: { materialId: item.materialId },
				className: "block truncate text-foreground hover:underline",
				children: item.materialName
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate font-mono text-[12px] text-muted-foreground",
				children: item.materialCode
			})]
		});
		case "quantity": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular-nums text-foreground",
			children: item.quantity
		});
		case "unitPrice": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap tabular-nums text-muted-foreground",
			children: formatTaka(item.unitPrice)
		});
		case "discount": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("whitespace-nowrap tabular-nums", item.discount > 0 ? "text-warning" : "text-muted-foreground"),
			children: item.discount > 0 ? `− ${formatTaka(item.discount)}` : "—"
		});
		case "total": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap font-semibold tabular-nums text-foreground",
			children: formatTaka(item.total)
		});
		case "status": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: SALE_STATUS_TONE[item.status],
			label: item.status
		});
		case "date": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "whitespace-nowrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-foreground",
				children: formatDate(item.date)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-[12px] text-muted-foreground",
				children: item.soldBy
			})]
		});
		default: return null;
	}
}
/**
* UI-only sale entry modal with live total calculation.
* Nothing is persisted — the Django REST API will own this later.
*/
function NewSaleDialog({ open, onOpenChange, presetMaterialId }) {
	const sellable = (0, import_react.useMemo)(() => MATERIALS.filter((material) => material.status !== "Inactive"), []);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [customerName, setCustomerName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [materialId, setMaterialId] = (0, import_react.useState)(presetMaterialId ?? sellable[0]?.id ?? "");
	const [quantity, setQuantity] = (0, import_react.useState)("1");
	const [discount, setDiscount] = (0, import_react.useState)("0");
	const [method, setMethod] = (0, import_react.useState)("Cash");
	const [remarks, setRemarks] = (0, import_react.useState)("");
	const material = MATERIALS.find((item) => item.id === materialId);
	const qty = Math.max(Number(quantity || 0), 0);
	const off = Math.max(Number(discount || 0), 0);
	const subtotal = (material?.sellingPrice ?? 0) * qty;
	const total = Math.max(subtotal - off, 0);
	const exceedsStock = Boolean(material && qty > material.quantity);
	const close = () => {
		onOpenChange(false);
		setTimeout(() => {
			setCustomerName("");
			setPhone("");
			setMaterialId(presetMaterialId ?? sellable[0]?.id ?? "");
			setQuantity("1");
			setDiscount("0");
			setMethod("Cash");
			setRemarks("");
		}, 200);
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
			className: "max-h-[92vh] max-w-2xl overflow-y-auto rounded-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "New sale" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Record a material sale for a guardian, patient family or institution." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 py-2 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-customer",
							label: "Customer name",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "sale-customer",
								value: customerName,
								onChange: (event) => setCustomerName(event.target.value),
								placeholder: "e.g. Md. Karim Ahmed"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-phone",
							label: "Phone",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "sale-phone",
								value: phone,
								onChange: (event) => setPhone(event.target.value),
								placeholder: "+880 1711-458920"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-material",
							label: "Select material",
							required: true,
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: materialId,
								onValueChange: setMaterialId,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "sale-material",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select material" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: sellable.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
									value: item.id,
									children: [
										item.name,
										" — ",
										formatTaka(item.sellingPrice),
										" (",
										item.quantity,
										" in stock)"
									]
								}, item.id)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-quantity",
							label: "Quantity",
							required: true,
							error: exceedsStock ? `Only ${material?.quantity} ${material?.unit} in stock` : void 0,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "sale-quantity",
								type: "number",
								min: 1,
								value: quantity,
								onChange: (event) => setQuantity(event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-discount",
							label: "Discount (৳)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "sale-discount",
								type: "number",
								min: 0,
								value: discount,
								onChange: (event) => setDiscount(event.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-method",
							label: "Payment method",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: method,
								onValueChange: (next) => setMethod(next),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "sale-method",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select method" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: PAYMENT_METHODS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: item,
									children: item
								}, item)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-total",
							label: "Total amount",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "sale-total",
								readOnly: true,
								value: formatTaka(total),
								className: "bg-muted/40 font-semibold tabular-nums"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "sale-remarks",
							label: "Remarks",
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "sale-remarks",
								rows: 3,
								value: remarks,
								onChange: (event) => setRemarks(event.target.value),
								placeholder: "Any note about this sale…"
							})
						})
					]
				}),
				material ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					"aria-label": "Sale summary",
					className: "rounded-xl border border-border bg-muted/30 p-4 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialThumbnail, {
							category: material.category,
							size: "lg"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-semibold text-foreground",
									children: material.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: "neutral",
									label: material.code,
									dot: false
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-3 grid gap-x-4 gap-y-2 text-[12.5px] sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
										label: "Unit price",
										value: formatTaka(material.sellingPrice)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
										label: "Quantity",
										value: `${qty} ${material.unit}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
										label: "Subtotal",
										value: formatTaka(subtotal)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
										label: "Discount",
										value: off > 0 ? `− ${formatTaka(off)}` : "—"
									})
								]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12.5px] font-medium uppercase tracking-[0.06em] text-muted-foreground",
							children: "Total payable"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl font-semibold tabular-nums text-foreground",
							children: formatTaka(total)
						})]
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: close,
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: submit,
						disabled: submitting || !material || qty < 1,
						children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
							className: "h-4 w-4 animate-spin",
							"aria-hidden": "true"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Record Sale"]
					})]
				})
			]
		})
	});
}
function SummaryRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "truncate font-medium tabular-nums text-foreground",
			children: value
		})]
	});
}
//#endregion
export { SALE_COLUMNS as a, NewSaleDialog as i, DEFAULT_SALE_COLUMNS as n, SalesTable as o, MATERIAL_COLUMNS as r, DEFAULT_MATERIAL_COLUMNS as t };
