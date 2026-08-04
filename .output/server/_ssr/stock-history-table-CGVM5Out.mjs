import { A as ShoppingCart, Fn as ArrowUpFromLine, Ht as Ellipsis, Vt as Eye, k as SlidersHorizontal, tt as PencilLine, x as Trash2, y as TriangleAlert, zn as ArrowDownToLine } from "../_libs/lucide-react.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
import { m as MOVEMENT_TONE, p as MOVEMENT_ICON, u as MATERIAL_STATUS_TONE } from "./material-data-BW4O74XG.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { n as formatDate } from "./breadcrumbs-CW6ykn0r.mjs";
import { i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-CXFNH1SK.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BzGcbmh2.mjs";
import { n as MaterialThumbnail } from "./material-thumbnail-CuqMG4jr.mjs";
import { r as MATERIAL_COLUMNS } from "./new-sale-dialog-TgI7flhM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stock-history-table-CGVM5Out.js
var import_jsx_runtime = require_jsx_runtime();
function MaterialRowActions({ item, onEdit, onStockIn, onStockOut, onDelete }) {
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
		className: "w-48",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/manager/materials/$materialId",
					params: { materialId: item.id },
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onSelect: () => onStockIn?.(item),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownToLine, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Stock In"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onSelect: () => onStockOut?.(item),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpFromLine, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Stock Out"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onSelect: () => onDelete?.(item),
				className: "text-danger focus:text-danger",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Delete"]
			})
		]
	})] });
}
function MaterialTable({ rows, visibleColumns, onEdit, onStockIn, onStockOut, onDelete }) {
	const columns = MATERIAL_COLUMNS.filter((column) => visibleColumns.includes(column.key));
	const actions = {
		onEdit,
		onStockIn,
		onStockOut,
		onDelete
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
				className: "sr-only",
				children: "Therapy materials inventory"
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
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialCell, {
						column: column.key,
						item
					})
				}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "px-5 py-3.5 text-right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialRowActions, {
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialThumbnail, { category: item.category }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/materials/$materialId",
									params: { materialId: item.id },
									className: "block truncate text-sm font-medium text-foreground hover:underline",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate font-mono text-[12px] text-muted-foreground",
									children: [
										item.code,
										" · ",
										item.brand
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialRowActions, {
								item,
								...actions
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: MATERIAL_STATUS_TONE[item.status],
								label: item.status
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: "neutral",
								label: item.category,
								dot: false
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Unit price",
									value: formatTaka(item.sellingPrice)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Available",
									value: `${item.quantity} ${item.unit}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Min stock",
									value: `${item.minStock} ${item.unit}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Location",
									value: item.location
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Supplier",
									value: item.supplier.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Branch",
									value: item.branch
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
function StockLevel({ item }) {
	const critical = item.quantity === 0;
	const low = !critical && item.quantity <= item.minStock;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center justify-end gap-1.5 font-medium tabular-nums", critical && "text-danger", low && "text-warning", !critical && !low && "text-foreground"),
		children: [item.quantity, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[12px] font-normal text-muted-foreground",
			children: item.unit
		})]
	});
}
function MaterialCell({ column, item }) {
	switch (column) {
		case "code": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/manager/materials/$materialId",
			params: { materialId: item.id },
			className: "whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline",
			children: item.code
		});
		case "image": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaterialThumbnail, { category: item.category });
		case "name": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 max-w-[260px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/manager/materials/$materialId",
				params: { materialId: item.id },
				className: "block truncate font-medium text-foreground hover:underline",
				children: item.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-[12px] text-muted-foreground",
				children: item.brand
			})]
		});
		case "category": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-muted-foreground",
			children: item.category
		});
		case "unitPrice": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "whitespace-nowrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium tabular-nums text-foreground",
				children: formatTaka(item.sellingPrice)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[12px] text-muted-foreground",
				children: ["cost ", formatTaka(item.purchasePrice)]
			})]
		});
		case "quantity": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StockLevel, { item });
		case "minStock": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap tabular-nums text-muted-foreground",
			children: item.minStock
		});
		case "location": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 max-w-[190px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-foreground",
				children: item.location
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-[12px] text-muted-foreground",
				children: item.branch
			})]
		});
		case "supplier": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 max-w-[210px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-foreground",
				children: item.supplier.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate font-mono text-[12px] text-muted-foreground",
				children: item.supplier.phone
			})]
		});
		case "status": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: MATERIAL_STATUS_TONE[item.status],
			label: item.status
		});
		default: return null;
	}
}
/** Serializable icon keys mapped to components in the view layer. */
var ICONS = {
	in: ArrowDownToLine,
	out: ArrowUpFromLine,
	adjust: SlidersHorizontal,
	sale: ShoppingCart,
	damaged: TriangleAlert
};
var ICON_TONE = {
	"Stock In": "border-success/40 bg-success/12 text-success",
	"Stock Out": "border-warning/40 bg-warning/15 text-warning",
	Adjustment: "border-primary/40 bg-primary/10 text-primary",
	Sale: "border-primary/40 bg-primary/10 text-primary",
	Damaged: "border-danger/40 bg-danger/12 text-danger"
};
function MovementIcon({ type }) {
	const Icon = ICONS[MOVEMENT_ICON[type]];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid h-8 w-8 shrink-0 place-items-center rounded-lg border", ICON_TONE[type]),
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
	});
}
function QuantityDelta({ quantity }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("whitespace-nowrap font-semibold tabular-nums", quantity > 0 ? "text-success" : "text-danger"),
		children: quantity > 0 ? `+${quantity}` : quantity
	});
}
/** Timeline-style stock history table. */
function StockHistoryTable({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
				className: "sr-only",
				children: "Stock movement history"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
				className: "border-border hover:bg-transparent",
				children: [
					"Movement",
					"Material",
					"Quantity",
					"Balance",
					"Reference",
					"Handled By",
					"Date"
				].map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					scope: "col",
					className: cn("sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur", (index === 2 || index === 3) && "text-right"),
					children: label
				}, label))
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				className: "border-border transition-enterprise hover:bg-surface-hover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MovementIcon, { type: item.type }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: MOVEMENT_TONE[item.type],
								label: item.type
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5 text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 max-w-[260px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/manager/materials/$materialId",
								params: { materialId: item.materialId },
								className: "block truncate font-medium text-foreground hover:underline",
								children: item.materialName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-mono text-[12px] text-muted-foreground",
								children: item.materialCode
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5 text-right text-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityDelta, { quantity: item.quantity })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5 text-right text-sm tabular-nums text-muted-foreground",
						children: item.balance
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "px-5 py-3.5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "whitespace-nowrap font-mono text-[12.5px] text-foreground",
							children: item.reference
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-[280px] truncate text-[12px] text-muted-foreground",
							children: item.note
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5 text-sm text-muted-foreground",
						children: item.by
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "whitespace-nowrap px-5 py-3.5 text-sm text-muted-foreground",
						children: formatDate(item.date)
					})
				]
			}, item.id)) })
		] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		children: rows.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-start gap-3 px-4 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MovementIcon, { type: item.type }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium text-foreground",
							children: item.materialName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityDelta, { quantity: item.quantity })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							tone: MOVEMENT_TONE[item.type],
							label: item.type
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[12px] text-muted-foreground",
							children: item.reference
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[12.5px] leading-relaxed text-muted-foreground",
						children: item.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1.5 text-[12px] text-muted-foreground/80",
						children: [
							item.by,
							" · ",
							formatDate(item.date),
							" · balance ",
							item.balance
						]
					})
				]
			})]
		}, item.id))
	})] });
}
/** Vertical movement timeline used on the material details page. */
function StockMovementTimeline({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "relative space-y-6 border-l border-border pl-6",
		children: items.map((item) => {
			const Icon = ICONS[MOVEMENT_ICON[item.type]];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("absolute -left-[37px] grid h-[26px] w-[26px] place-items-center rounded-full border", ICON_TONE[item.type]),
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm font-medium text-foreground",
							children: [
								item.type,
								" · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuantityDelta, { quantity: item.quantity })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12.5px] text-muted-foreground",
							children: formatDate(item.date)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[13px] leading-relaxed text-muted-foreground",
						children: item.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1.5 text-[12px] text-muted-foreground/80",
						children: [
							item.reference,
							" · by ",
							item.by,
							" · balance ",
							item.balance
						]
					})
				]
			}, item.id);
		})
	});
}
//#endregion
export { StockMovementTimeline as i, StockHistoryTable as n, StockLevel as r, MaterialTable as t };
