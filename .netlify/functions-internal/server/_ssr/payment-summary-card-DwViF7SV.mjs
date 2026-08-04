import { An as BanknoteArrowUp, F as Send, Ht as Ellipsis, J as Printer, K as Receipt, Vt as Eye, a as Wallet } from "../_libs/lucide-react.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
import { h as PAYMENT_STATUS_TONE } from "./payment-data-DkduNZNP.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { a as initialsOf, n as formatDate } from "./breadcrumbs-CW6ykn0r.mjs";
import { i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-CXFNH1SK.mjs";
import { t as Progress } from "./progress-DYQcnTxt.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BzGcbmh2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-summary-card-DwViF7SV.js
var import_jsx_runtime = require_jsx_runtime();
var PAYMENT_COLUMNS = [
	{
		key: "receiptNo",
		label: "Receipt No",
		hideable: false
	},
	{
		key: "patient",
		label: "Patient",
		hideable: false
	},
	{
		key: "packageName",
		label: "Package",
		hideable: true
	},
	{
		key: "amount",
		label: "Amount",
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
		key: "paid",
		label: "Paid",
		hideable: true,
		align: "right"
	},
	{
		key: "due",
		label: "Due",
		hideable: true,
		align: "right"
	},
	{
		key: "method",
		label: "Payment Method",
		hideable: true
	},
	{
		key: "paymentDate",
		label: "Payment Date",
		hideable: true
	},
	{
		key: "collectedBy",
		label: "Collected By",
		hideable: true
	},
	{
		key: "status",
		label: "Status",
		hideable: false
	}
];
var DEFAULT_PAYMENT_COLUMNS = PAYMENT_COLUMNS.map((column) => column.key);
var HISTORY_COLUMNS = [
	{
		key: "receiptNo",
		label: "Receipt"
	},
	{
		key: "patient",
		label: "Patient"
	},
	{
		key: "packageName",
		label: "Package"
	},
	{
		key: "packageType",
		label: "Payment Type"
	},
	{
		key: "amount",
		label: "Amount",
		align: "right"
	},
	{
		key: "method",
		label: "Method"
	},
	{
		key: "collectedBy",
		label: "Collected By"
	},
	{
		key: "paymentDate",
		label: "Date"
	},
	{
		key: "status",
		label: "Status"
	}
];
function PaymentAvatar({ name, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-muted/60 text-[12px] font-semibold text-muted-foreground", className),
		"aria-hidden": "true",
		children: initialsOf(name)
	});
}
function PaymentTable({ rows, visibleColumns, onCollect }) {
	const columns = PAYMENT_COLUMNS.filter((column) => visibleColumns.includes(column.key));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
				className: "sr-only",
				children: "Payment collection"
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				className: "border-border transition-enterprise hover:bg-surface-hover",
				children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: cn("px-5 py-3.5 text-sm", column.align === "right" && "text-right"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentCell, {
						column: column.key,
						record
					})
				}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "px-5 py-3.5 text-right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentRowActions, {
						record,
						onCollect
					})
				})]
			}, record.id)) })
		] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		children: rows.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "px-4 py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentAvatar, { name: record.patientName }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/payments/$paymentId",
									params: { paymentId: record.id },
									className: "block truncate text-sm font-medium text-foreground hover:underline",
									children: record.patientName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate font-mono text-[12px] text-muted-foreground",
									children: [
										record.receiptNo,
										" · ",
										record.patientCode
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentRowActions, {
								record,
								onCollect
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: PAYMENT_STATUS_TONE[record.status],
								label: record.status
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: "info",
								label: record.packageType,
								dot: false
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Package",
									value: record.packageName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Amount",
									value: formatTaka(record.amount)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Paid",
									value: formatTaka(record.paid)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Due",
									value: formatTaka(record.due)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Method",
									value: record.method
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Date",
									value: formatDate(record.paymentDate)
								})
							]
						})
					]
				})]
			})
		}, record.id))
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
function PaymentCell({ column, record }) {
	switch (column) {
		case "receiptNo": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/manager/payments/$paymentId",
			params: { paymentId: record.id },
			className: "whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline",
			children: record.receiptNo
		});
		case "patient": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentAvatar, { name: record.patientName }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/manager/patients/$patientId",
					params: { patientId: record.patientId },
					className: "block truncate font-medium text-foreground hover:underline",
					children: record.patientName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "truncate text-[12px] text-muted-foreground",
					children: [
						record.patientCode,
						" · ",
						record.patientPhone
					]
				})]
			})]
		});
		case "packageName": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-foreground",
				children: record.packageName
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-[12px] text-muted-foreground",
				children: record.packageType
			})]
		});
		case "amount": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap tabular-nums text-foreground",
			children: formatTaka(record.amount)
		});
		case "discount": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap tabular-nums text-muted-foreground",
			children: record.discount > 0 ? `− ${formatTaka(record.discount)}` : "—"
		});
		case "paid": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap font-medium tabular-nums text-success",
			children: formatTaka(record.paid)
		});
		case "due": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("whitespace-nowrap font-medium tabular-nums", record.due > 0 ? "text-danger" : "text-muted-foreground"),
			children: record.due > 0 ? formatTaka(record.due) : "—"
		});
		case "method": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "whitespace-nowrap text-foreground",
				children: record.method
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate font-mono text-[11.5px] text-muted-foreground",
				children: record.reference
			})]
		});
		case "paymentDate": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-muted-foreground",
			children: formatDate(record.paymentDate)
		});
		case "collectedBy": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-muted-foreground",
			children: record.collectedBy
		});
		case "status": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: PAYMENT_STATUS_TONE[record.status],
			label: record.status
		});
		default: return null;
	}
}
function PaymentRowActions({ record, onCollect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon-sm",
			className: "text-muted-foreground",
			"aria-label": `Actions for receipt ${record.receiptNo}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		className: "w-56",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/manager/payments/$paymentId",
					params: { paymentId: record.id },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "View payment profile"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				disabled: record.due === 0,
				onSelect: () => onCollect?.(record),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BanknoteArrowUp, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Collect due"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Receipt, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "View invoice"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "Print receipt"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				disabled: record.due === 0,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Send reminder"]
			})
		]
	})] });
}
/** Compact billing summary used in the collect modal and the payment profile. */
function PaymentSummaryCard({ packagePrice, discount = 0, paid, due, totalSessions, remainingSessions, className }) {
	const payable = Math.max(packagePrice - discount, 0);
	const percent = payable === 0 ? 0 : Math.min(100, Math.round(paid / payable * 100));
	const usedSessions = Math.max(totalSessions - remainingSessions, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("rounded-xl border border-border bg-card p-5 shadow-card", className),
		"aria-label": "Payment summary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
						className: "h-[18px] w-[18px]",
						"aria-hidden": "true"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold text-foreground",
						children: "Payment Summary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px] text-muted-foreground",
						children: "Live preview"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 space-y-2.5 border-t border-border pt-4 text-[13px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Package price",
						value: formatTaka(packagePrice)
					}),
					discount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Discount",
						value: `− ${formatTaka(discount)}`,
						tone: "muted"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Paid",
						value: formatTaka(paid),
						tone: "success"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Due",
						value: formatTaka(due),
						tone: due > 0 ? "danger" : "muted"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Total sessions",
						value: String(totalSessions)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Remaining sessions",
						value: String(remainingSessions)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 border-t border-border pt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-[12px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Collected" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums text-foreground",
							children: [percent, "%"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: percent,
						className: "mt-1.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-[12px] text-muted-foreground",
						children: [
							usedSessions,
							" of ",
							totalSessions || 0,
							" sessions consumed"
						]
					})
				]
			})
		]
	});
}
function Row({ label, value, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: cn("font-medium tabular-nums", tone === "default" && "text-foreground", tone === "muted" && "text-muted-foreground", tone === "success" && "text-success", tone === "danger" && "text-danger"),
			children: value
		})]
	});
}
//#endregion
export { PaymentSummaryCard as a, PaymentAvatar as i, HISTORY_COLUMNS as n, PaymentTable as o, PAYMENT_COLUMNS as r, DEFAULT_PAYMENT_COLUMNS as t };
