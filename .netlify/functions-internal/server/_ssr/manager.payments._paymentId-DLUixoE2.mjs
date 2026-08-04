import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { An as BanknoteArrowUp, B as RotateCcw, Et as Layers, G as ReceiptText, J as Printer, K as Receipt, Ln as ArrowLeft, Lt as FileText, Mt as History, Nn as BadgeCheck, On as BellRing, Pt as Globe, Q as Phone, a as Wallet, l as UserRound, ot as PackageCheck, u as UserPlus, vn as CalendarClock, y as TriangleAlert } from "../_libs/lucide-react.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
import { d as Route$7 } from "./router-BtnFRLs5.mjs";
import { h as PAYMENT_STATUS_TONE, r as INVOICE_STATUS_TONE, v as findPackage } from "./payment-data-DkduNZNP.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { n as formatDate } from "./breadcrumbs-CW6ykn0r.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as Card } from "./card-Ce78aY8w.mjs";
import { t as Progress } from "./progress-DYQcnTxt.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { t as WidgetCard } from "./widget-card-Dbo4snDS.mjs";
import { a as PaymentSummaryCard, i as PaymentAvatar } from "./payment-summary-card-DwViF7SV.mjs";
import { t as InvoiceCard } from "./invoice-card-Cg2gonku.mjs";
import { t as CollectPaymentDialog } from "./collect-payment-dialog-pyxCxjgt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.payments._paymentId-DLUixoE2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Serializable icon keys are mapped to components here, in the view layer. */
var ICONS = {
	registration: UserPlus,
	package: PackageCheck,
	session: ReceiptText,
	reminder: BellRing,
	refund: RotateCcw,
	online: Globe
};
var TONE = {
	success: "border-success/40 bg-success/12 text-success",
	warning: "border-warning/40 bg-warning/15 text-warning",
	danger: "border-danger/40 bg-danger/12 text-danger",
	info: "border-primary/40 bg-primary/10 text-primary",
	neutral: "border-border bg-muted text-muted-foreground"
};
function PaymentTimeline({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "relative space-y-6 border-l border-border pl-6",
		children: items.map((item) => {
			const Icon = ICONS[item.icon];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("absolute -left-[37px] grid h-[26px] w-[26px] place-items-center rounded-full border", TONE[item.tone]),
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-foreground",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12.5px] text-muted-foreground",
							children: formatDate(item.date)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[13px] leading-relaxed text-muted-foreground",
						children: item.description
					}),
					typeof item.amount === "number" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-[13px] font-semibold tabular-nums text-foreground",
						children: formatTaka(item.amount)
					}) : null
				]
			}, item.id);
		})
	});
}
var REMINDER_TONE = {
	"Not sent": "neutral",
	"Reminder sent": "warning",
	"Reminder due": "info",
	Escalated: "danger"
};
/** Outstanding balance panel with reminder state and quick actions. */
function DueManagementCard({ record, onCollect, className }) {
	const hasDue = record.due > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("rounded-xl border p-5 shadow-card", hasDue ? "border-danger/30 bg-danger/5" : "border-border bg-card", className),
		"aria-label": "Due management",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg", hasDue ? "bg-danger/12 text-danger" : "bg-success/12 text-success"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
						className: "h-[18px] w-[18px]",
						"aria-hidden": "true"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold text-foreground",
						children: "Due Management"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px] text-muted-foreground",
						children: hasDue ? "Follow-up required" : "All invoices settled"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-4 text-[26px] font-semibold leading-none tracking-tight tabular-nums", hasDue ? "text-danger" : "text-foreground"),
				children: formatTaka(record.due)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-[12.5px] text-muted-foreground",
				children: "Outstanding amount"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 space-y-2.5 border-t border-border pt-4 text-[13px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: "Days overdue"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: cn("font-medium tabular-nums", record.daysOverdue > 0 ? "text-danger" : "text-muted-foreground"),
							children: record.daysOverdue > 0 ? `${record.daysOverdue} days` : "—"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: "Next due date"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-medium text-foreground",
							children: record.nextDueDate === "—" ? "—" : formatDate(record.nextDueDate)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: "Reminder status"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							tone: REMINDER_TONE[record.reminderStatus],
							label: record.reminderStatus
						}) })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-2.5 border-t border-border pt-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						disabled: !hasDue,
						onClick: onCollect,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BanknoteArrowUp, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Collect Due"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => window.print(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Print Reminder"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "sm",
						className: "sm:col-span-2",
						disabled: !hasDue,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellRing, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Send SMS reminder"]
					})
				]
			})
		]
	});
}
function PaymentProfilePage() {
	const { profile } = Route$7.useLoaderData();
	const { primary, payments, totalBilled, totalPaid, totalDue, collectionRate } = profile;
	const [collectOpen, setCollectOpen] = (0, import_react.useState)(false);
	const pkg = findPackage(primary.packageId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: `${primary.patientName} — Payment Profile`,
				description: `${primary.receiptNo} · ${primary.packageName} · ${primary.branch}`,
				breadcrumbs: [
					{
						label: "Branch Manager",
						to: "/manager"
					},
					{
						label: "Payment & Billing",
						to: "/manager/payments"
					},
					{ label: primary.receiptNo }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => window.print(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Print"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/manager/payments",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), "Back"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setCollectOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Collect Payment"]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5 sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentAvatar, {
							name: primary.patientName,
							className: "h-14 w-14 text-sm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "truncate text-lg font-semibold tracking-tight text-foreground",
									children: primary.patientName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-0.5 truncate text-[13px] text-muted-foreground",
									children: [
										primary.patientCode,
										" · ",
										primary.patientAge,
										" yrs · ",
										primary.guardianName
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											tone: PAYMENT_STATUS_TONE[primary.status],
											label: primary.status
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											tone: INVOICE_STATUS_TONE[primary.invoiceStatus],
											label: `Invoice ${primary.invoiceStatus}`,
											dot: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											tone: "info",
											label: primary.packageType,
											dot: false
										})
									]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid grid-cols-2 gap-4 sm:grid-cols-4 lg:shrink-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Total billed",
								value: formatTaka(totalBilled)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Total paid",
								value: formatTaka(totalPaid),
								tone: "success"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Outstanding",
								value: formatTaka(totalDue),
								tone: totalDue > 0 ? "danger" : "muted"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Collection rate",
								value: `${collectionRate}%`
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 border-t border-border pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-[12px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Collected against billed amount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums text-foreground",
							children: [collectionRate, "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: collectionRate,
						className: "mt-1.5"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							title: "Patient Information",
							icon: UserRound,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Patient",
										value: primary.patientName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Patient ID",
										value: primary.patientCode
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Guardian",
										value: primary.guardianName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Contact",
										value: primary.patientPhone
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Branch",
										value: primary.branch
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Collected by",
										value: primary.collectedBy
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap items-center gap-2.5 border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/manager/patients/$patientId",
										params: { patientId: primary.patientId },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										}), "Open patient profile"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									size: "sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), "Call guardian"]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Package Information",
							icon: Layers,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Package",
										value: primary.packageName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Payment model",
										value: primary.packageType
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Package price",
										value: formatTaka(primary.amount)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Discount",
										value: primary.discount > 0 ? `− ${formatTaka(primary.discount)}` : "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Duration",
										value: pkg?.durationLabel ?? "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Expiry",
										value: pkg?.expiry ?? "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Sessions",
										value: `${primary.totalSessions - primary.remainingSessions} of ${primary.totalSessions} used`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Reference",
										value: primary.reference
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Payment Timeline",
							icon: History,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentTimeline, { items: primary.timeline })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Invoice History",
							icon: FileText,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 md:grid-cols-2",
								children: payments.map((record) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvoiceCard, { record }, record.id))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Payment Statistics",
							icon: BadgeCheck,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "Receipts issued",
										value: String(payments.length)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "Average payment",
										value: formatTaka(payments.length === 0 ? 0 : Math.round(totalPaid / payments.length))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "Last payment",
										value: formatDate(primary.paymentDate)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										label: "Preferred method",
										value: primary.method
									})
								]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "min-w-0 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentSummaryCard, {
							packagePrice: primary.amount,
							discount: primary.discount,
							paid: primary.paid,
							due: primary.due,
							totalSessions: primary.totalSessions,
							remainingSessions: primary.remainingSessions
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DueManagementCard, {
							record: primary,
							onCollect: () => setCollectOpen(true)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Next billing",
							description: "Upcoming cycle for this patient",
							icon: CalendarClock,
							showMenu: false,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "space-y-2.5 text-[13px]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Next due date"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-medium text-foreground",
											children: primary.nextDueDate === "—" ? "—" : formatDate(primary.nextDueDate)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Remaining sessions"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-medium tabular-nums text-foreground",
											children: primary.remainingSessions
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Remarks"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "max-w-[60%] text-right text-muted-foreground",
											children: primary.remarks
										})]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Quick actions",
							description: "Billing shortcuts for this patient",
							icon: Receipt,
							showMenu: false,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										onClick: () => setCollectOpen(true),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										}), "Collect payment"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "outline",
										size: "sm",
										onClick: () => window.print(),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										}), "Print receipt"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ghost",
										size: "sm",
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/manager/payments",
											search: { tab: "history" },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, {
												className: "h-4 w-4",
												"aria-hidden": "true"
											}), "View payment history"]
										})
									})
								]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollectPaymentDialog, {
				open: collectOpen,
				onOpenChange: setCollectOpen,
				defaultPackageId: primary.packageId,
				defaultPatientId: primary.patientId
			}, String(collectOpen))
		]
	});
}
function Section({ title, icon: Icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl border border-border bg-card p-5 shadow-card sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex items-center gap-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-[18px] w-[18px]",
					"aria-hidden": "true"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-semibold text-foreground",
				children: title
			})]
		}), children]
	});
}
function Field({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 break-words text-[13.5px] text-foreground",
			children: value
		})]
	});
}
function Stat({ label, value, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: tone === "success" ? "mt-1 truncate text-[15px] font-semibold tabular-nums text-success" : tone === "danger" ? "mt-1 truncate text-[15px] font-semibold tabular-nums text-danger" : tone === "muted" ? "mt-1 truncate text-[15px] font-semibold tabular-nums text-muted-foreground" : "mt-1 truncate text-[15px] font-semibold tabular-nums text-foreground",
			children: value
		})]
	});
}
//#endregion
export { PaymentProfilePage as component };
