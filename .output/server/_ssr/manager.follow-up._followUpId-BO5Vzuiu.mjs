import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { $ as PhoneCall, $t as ClipboardCheck, Hn as Activity, J as Printer, K as Receipt, Ln as ArrowLeft, a as Wallet, an as CircleCheck, dt as MessageSquare, l as UserRound, ot as PackageCheck, tt as PencilLine, u as UserPlus, vn as CalendarClock, y as TriangleAlert } from "../_libs/lucide-react.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
import { o as Route$17 } from "./router-BtnFRLs5.mjs";
import { p as RISK_TONE, s as FOLLOW_UP_PRIORITY_TONE, u as FOLLOW_UP_STATUS_TONE } from "./follow-up-data-ocWJfEAb.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { a as initialsOf, n as formatDate } from "./breadcrumbs-CW6ykn0r.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as Card } from "./card-Ce78aY8w.mjs";
import { t as Progress } from "./progress-DYQcnTxt.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { t as WidgetCard } from "./widget-card-Dbo4snDS.mjs";
import { t as NewFollowUpDialog } from "./new-follow-up-dialog-Dyj1W56c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.follow-up._followUpId-BO5Vzuiu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Serializable icon keys are mapped to components here, in the view layer. */
var ICONS = {
	registered: UserPlus,
	assessment: ClipboardCheck,
	therapy: Activity,
	call: PhoneCall,
	package: PackageCheck,
	completed: CircleCheck,
	message: MessageSquare
};
var TONE = {
	success: "border-success/40 bg-success/12 text-success",
	warning: "border-warning/40 bg-warning/15 text-warning",
	danger: "border-danger/40 bg-danger/12 text-danger",
	info: "border-primary/40 bg-primary/10 text-primary",
	neutral: "border-border bg-muted text-muted-foreground"
};
function CommunicationTimeline({ items }) {
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1.5 text-[12px] text-muted-foreground/80",
						children: ["by ", item.by]
					})
				]
			}, item.id);
		})
	});
}
function FollowUpDetailPage() {
	const { followUp } = Route$17.useLoaderData();
	const [dialogOpen, setDialogOpen] = (0, import_react.useState)(false);
	const sessionProgress = Math.round(followUp.clinical.sessionsCompleted / followUp.clinical.sessionsPlanned * 100);
	const paidProgress = Math.round(followUp.billing.totalPaid / followUp.billing.totalBilled * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: `${followUp.patientName} — Follow-up`,
				description: `${followUp.code} · ${followUp.reason} · ${followUp.branch}`,
				breadcrumbs: [
					{
						label: "Branch Manager",
						to: "/manager"
					},
					{
						label: "Follow-up Management",
						to: "/manager/follow-up"
					},
					{ label: followUp.code }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => setDialogOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Edit"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Print"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Complete Follow-up"] })
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-border bg-muted/50 text-sm font-semibold text-muted-foreground",
							children: initialsOf(followUp.patientName)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-semibold tracking-tight text-foreground",
									children: followUp.patientName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-0.5 text-[13px] text-muted-foreground",
									children: [
										followUp.patientCode,
										" · ",
										followUp.patientAge,
										" yrs · Guardian",
										" ",
										followUp.guardianName,
										" (",
										followUp.guardianRelation,
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											tone: FOLLOW_UP_STATUS_TONE[followUp.status],
											label: followUp.status
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											tone: FOLLOW_UP_PRIORITY_TONE[followUp.priority],
											label: `${followUp.priority} priority`,
											dot: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											tone: "neutral",
											label: followUp.reason,
											dot: false
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "grid gap-4 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderStat, {
									label: "Assigned",
									value: formatDate(followUp.assignedDate)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderStat, {
									label: "Next follow-up",
									value: formatDate(followUp.nextFollowUp)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderStat, {
									label: "Assigned to",
									value: followUp.assignedTo
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap gap-2.5 border-t border-border pt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}),
								"Call ",
								followUp.guardianRelation.toLowerCase()
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), "Reschedule"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/manager/patients/$patientId",
								params: { patientId: followUp.patientId },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}), "Open patient profile"]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_360px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Patient summary",
							description: "Registry details for this follow-up",
							icon: UserRound,
							showMenu: false,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Patient",
										value: followUp.patientName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Patient ID",
										value: followUp.patientCode
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Guardian",
										value: followUp.guardianName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Guardian phone",
										value: followUp.guardianPhone
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Branch",
										value: followUp.branch
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Last visit",
										value: formatDate(followUp.lastVisit)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Current package",
										value: followUp.packageName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Preferred contact time",
										value: followUp.preferredTime
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Assessment summary",
							description: "Latest clinical assessment findings",
							icon: ClipboardCheck,
							showMenu: false,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Assessment date",
										value: formatDate(followUp.clinical.assessmentDate)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Diagnosis",
										value: followUp.clinical.diagnosis
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Severity",
										value: followUp.clinical.severity
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Therapist",
										value: followUp.clinical.therapist
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 rounded-lg border border-border bg-muted/30 p-3.5 text-[13px] leading-relaxed text-muted-foreground",
								children: followUp.clinical.assessmentSummary
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Therapy progress",
							description: followUp.clinical.therapyProgram,
							icon: Activity,
							showMenu: false,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-[13px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Sessions completed"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-medium tabular-nums text-foreground",
											children: [
												followUp.clinical.sessionsCompleted,
												" of ",
												followUp.clinical.sessionsPlanned
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
										value: sessionProgress,
										"aria-label": "Therapy progress"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] leading-relaxed text-muted-foreground",
										children: followUp.clinical.progressNote
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Payment status",
							description: followUp.billing.packageName,
							icon: Receipt,
							showMenu: false,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "grid gap-4 sm:grid-cols-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
											label: "Total billed",
											value: formatTaka(followUp.billing.totalBilled)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
											label: "Total paid",
											value: formatTaka(followUp.billing.totalPaid)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
											label: "Outstanding",
											value: formatTaka(followUp.billing.due)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
											label: "Last payment",
											value: formatDate(followUp.billing.lastPaymentDate)
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-[13px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Collected against billed amount"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-medium tabular-nums text-foreground",
											children: [paidProgress, "%"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
										value: paidProgress,
										"aria-label": "Collection progress"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "outline",
										size: "sm",
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/manager/payments",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
												className: "h-4 w-4",
												"aria-hidden": "true"
											}), "Open billing"]
										})
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Communication history",
							description: "Notes captured during this follow-up",
							icon: MessageSquare,
							showMenu: false,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Discussion summary",
										value: followUp.notes.summary,
										wrap: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Patient response",
										value: followUp.notes.patientResponse,
										wrap: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Guardian feedback",
										value: followUp.notes.guardianFeedback,
										wrap: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Recommendations",
										value: followUp.notes.recommendations,
										wrap: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
										label: "Next action",
										value: followUp.notes.nextAction,
										wrap: true
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
							title: "Communication timeline",
							description: "Full patient journey with this branch",
							icon: CalendarClock,
							showMenu: false,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommunicationTimeline, { items: followUp.timeline })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "min-w-0 space-y-6",
					"aria-label": "Retention widgets",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Risk level",
							description: "Retention risk for this patient",
							icon: TriangleAlert,
							showMenu: false,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: RISK_TONE[followUp.metrics.risk],
									label: `${followUp.metrics.risk} risk`
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: cn("text-[26px] font-semibold leading-none tabular-nums", followUp.metrics.risk === "High" ? "text-danger" : followUp.metrics.risk === "Moderate" ? "text-warning" : "text-success"),
									children: [followUp.metrics.attendance, "%"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[12.5px] leading-relaxed text-muted-foreground",
								children: "Based on attendance, outstanding dues and missed sessions."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "divide-y divide-border p-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarStat, {
									label: "Attendance",
									value: `${followUp.metrics.attendance}%`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarStat, {
									label: "Remaining sessions",
									value: String(followUp.metrics.remainingSessions)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarStat, {
									label: "Outstanding due",
									value: formatTaka(followUp.metrics.outstandingDue),
									tone: followUp.metrics.outstandingDue > 0 ? "danger" : "muted"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarStat, {
									label: "Next appointment",
									value: followUp.metrics.nextAppointment ? formatDate(followUp.metrics.nextAppointment) : "Not booked"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Quick actions",
							description: "Placeholder actions for this follow-up",
							icon: PhoneCall,
							showMenu: false,
							contentClassName: "space-y-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									className: "w-full justify-start",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), "Call patient"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									className: "w-full justify-start",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), "Book next appointment"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									className: "w-full justify-start",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/manager/follow-up",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										}), "Back to follow-ups"]
									})
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewFollowUpDialog, {
				open: dialogOpen,
				onOpenChange: setDialogOpen,
				presetPatientId: followUp.patientId
			})
		]
	});
}
function HeaderStat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-0.5 truncate text-sm font-medium text-foreground",
			children: value
		})]
	});
}
function Detail({ label, value, wrap = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: cn("mt-0.5 text-[13.5px] text-foreground", wrap ? "leading-relaxed" : "truncate"),
			children: value
		})]
	});
}
function SidebarStat({ label, value, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3 px-5 py-3.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[13px] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("text-sm font-semibold tabular-nums", tone === "danger" ? "text-danger" : tone === "muted" ? "text-muted-foreground" : "text-foreground"),
			children: value
		})]
	});
}
//#endregion
export { FollowUpDetailPage as component };
