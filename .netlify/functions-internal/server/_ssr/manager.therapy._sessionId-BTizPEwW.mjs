import { Ft as Gauge, Gt as DoorOpen, Hn as Activity, J as Printer, Ln as ArrowLeft, Nt as HeartPulse, Q as Phone, Qt as ClipboardList, S as Target, a as Wallet, an as CircleCheck, l as UserRound, o as Users, st as NotebookPen, tt as PencilLine, vn as CalendarClock } from "../_libs/lucide-react.mjs";
import { u as Route$3 } from "./router-BtnFRLs5.mjs";
import { f as THERAPY_STATUS_TONE, g as formatTimeRange, m as averageProgress, t as ATTENDANCE_TONE } from "./therapy-data-GYpM_hnG.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { n as formatDate, r as formatDateTime } from "./breadcrumbs-CW6ykn0r.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as Card } from "./card-Ce78aY8w.mjs";
import { t as Progress } from "./progress-DYQcnTxt.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { t as WidgetCard } from "./widget-card-Dbo4snDS.mjs";
import { r as TherapyAvatar } from "./therapy-table-DVIxe6tb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.therapy._sessionId-BTizPEwW.js
var import_jsx_runtime = require_jsx_runtime();
var barTone = {
	success: "[&>div]:bg-success",
	info: "[&>div]:bg-info",
	warning: "[&>div]:bg-warning",
	danger: "[&>div]:bg-danger",
	neutral: "[&>div]:bg-muted-foreground"
};
/** Single skill progress card used on the session details page. */
function ProgressCard({ skill }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-card p-4 shadow-card transition-enterprise hover:bg-surface-hover",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "min-w-0 truncate text-[13px] font-medium text-foreground",
					children: skill.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: skill.tone,
					label: skill.status
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-[22px] font-semibold leading-none tabular-nums text-foreground",
				children: [skill.value, "%"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: skill.value,
				className: cn("mt-3", barTone[skill.tone])
			})
		]
	});
}
function ProgressTracker({ skills }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
		children: skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressCard, { skill }, skill.key))
	});
}
function TherapySessionDetailsPage() {
	const { session } = Route$3.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: `${session.code} — ${session.patientName}`,
				description: `${session.mode} · ${session.program} · ${formatDate(session.sessionDate)} · ${session.branch}`,
				breadcrumbs: [
					{
						label: "Branch Manager",
						to: "/manager"
					},
					{
						label: "Therapy Management",
						to: "/manager/therapy"
					},
					{ label: session.code }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/therapy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Back"]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailHeader, { session }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							title: "Patient Summary",
							icon: UserRound,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Patient",
										value: session.patientName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Patient ID",
										value: session.patientCode
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Age / Gender",
										value: `${session.patientAge} years · ${session.patientGender}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Guardian",
										value: session.guardianName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Guardian phone",
										value: session.guardianPhone
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Branch",
										value: session.branch
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 border-t border-border pt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/manager/patients/$patientId",
										params: { patientId: session.patientId },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										}), "Open patient profile"]
									})
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Assessment Summary",
							icon: ClipboardList,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Diagnosis",
									value: session.diagnosis
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Clinical summary",
									value: session.assessmentSummary
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Current Therapy Plan",
							icon: Target,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Therapy type",
										value: session.mode
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Program",
										value: session.program
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Session",
										value: `${session.sessionNumber} of ${session.totalSessions}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Therapist",
										value: session.therapist
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Room",
										value: session.room
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Equipment",
										value: session.equipment.length > 0 ? session.equipment.join(", ") : "None"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Plan",
										value: session.therapyPlan,
										className: "sm:col-span-2"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							title: "Package Information",
							icon: Wallet,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Package",
									value: session.packageName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Sessions used",
									value: `${session.packageSessionsUsed} of ${session.packageSessionsTotal}`
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
								value: Math.round(session.packageSessionsUsed / session.packageSessionsTotal * 100),
								className: "mt-4"
							})]
						}),
						session.mode === "Individual Therapy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Individual Therapy",
							icon: UserRound,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Session goal",
										value: session.goals.sessionGoal
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Target skills",
										value: session.goals.targetSkills.join(", ") || "Not set"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Objectives",
										value: session.notes.objectives
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Homework",
										value: session.notes.homework
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Expected outcome",
										value: session.goals.expectedOutcome,
										className: "sm:col-span-2"
									})
								]
							})
						}) : session.group ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							title: "Group Therapy",
							icon: Users,
							aside: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: "info",
								label: session.group.groupName,
								dot: false
							}),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Group name",
										value: session.group.groupName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Session topic",
										value: session.group.sessionTopic
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Total children",
										value: String(session.group.totalChildren)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Present / Absent",
										value: `${session.group.present} present · ${session.group.absent} absent`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Group activities",
										value: session.group.activities.join(", "),
										className: "sm:col-span-2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Remarks",
										value: session.group.remarks,
										className: "sm:col-span-2"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground",
									children: "Group members"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 divide-y divide-border overflow-hidden rounded-lg border border-border",
									children: session.group.members.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex min-w-0 items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyAvatar, {
												name: member.name,
												className: "h-8 w-8 text-[11px]"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "truncate text-[13px] font-medium text-foreground",
													children: member.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "truncate text-[12px] text-muted-foreground",
													children: [
														member.patientCode,
														" · ",
														member.age,
														" yrs"
													]
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
											tone: ATTENDANCE_TONE[member.attendance],
											label: member.attendance
										})]
									}, member.id))
								})]
							})]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Session Notes",
							icon: NotebookPen,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Objectives",
										value: session.notes.objectives
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Activities performed",
										value: session.notes.activitiesPerformed
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Patient response",
										value: session.notes.patientResponse
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Behavior",
										value: session.notes.behavior
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Homework",
										value: session.notes.homework
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Recommendations",
										value: session.notes.recommendations
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Therapist notes",
										value: session.notes.therapistNotes,
										className: "sm:col-span-2"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Progress Tracker",
							icon: Gauge,
							aside: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: "info",
								label: `Average ${averageProgress(session.progressSkills)}%`,
								dot: false
							}),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressTracker, { skills: session.progressSkills })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Therapy Timeline",
							icon: Activity,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "relative space-y-6 border-l border-border pl-6",
								children: session.timeline.map((event) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineStep, {
									label: event.title,
									value: formatDate(event.date),
									caption: event.description,
									tone: event.tone === "danger" ? "warning" : event.tone
								}, event.id))
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "min-w-0 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Session Progress",
							description: "Overall therapy goal completion",
							icon: Gauge,
							showMenu: false,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[26px] font-semibold leading-none tabular-nums text-foreground",
									children: [session.progress, "%"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
									value: session.progress,
									className: "mt-3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-[12.5px] text-muted-foreground",
									children: [
										"Session ",
										session.sessionNumber,
										" of ",
										session.totalSessions,
										" in the current plan."
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Schedule",
							description: "Date, time and room",
							icon: CalendarClock,
							showMenu: false,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-foreground",
									children: formatDate(session.sessionDate)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[12.5px] tabular-nums text-muted-foreground",
									children: formatTimeRange(session.startTime, session.endTime)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 inline-flex items-center gap-1.5 text-[12.5px] text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoorOpen, {
										className: "h-3.5 w-3.5",
										"aria-hidden": "true"
									}), session.room]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Assigned Therapist",
							description: "Clinician leading this session",
							icon: UserRound,
							showMenu: false,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-foreground",
								children: session.therapist
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[12.5px] text-muted-foreground",
								children: session.branch
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Guardian Contact",
							description: "Primary contact for this patient",
							icon: Phone,
							showMenu: false,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-foreground",
									children: session.guardianName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[12.5px] text-muted-foreground",
									children: session.guardianPhone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									className: "mt-4 w-full",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), "Call guardian"]
								})
							]
						})
					]
				})]
			})
		]
	});
}
function DetailHeader({ session }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "p-5 sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyAvatar, {
					name: session.patientName,
					className: "h-14 w-14 shrink-0 text-sm sm:h-16 sm:w-16 sm:text-base"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[12.5px] font-medium text-primary",
									children: session.code
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: THERAPY_STATUS_TONE[session.status],
									label: session.status
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: ATTENDANCE_TONE[session.attendance],
									label: session.attendance
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: "neutral",
									label: session.mode,
									dot: false
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "truncate text-[19px] font-semibold tracking-tight text-foreground",
							children: session.patientName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[13px] text-muted-foreground",
							children: [
								session.patientCode,
								" · ",
								session.patientAge,
								" years · ",
								session.patientGender,
								" · Guardian ",
								session.guardianName
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, {
									className: "h-3.5 w-3.5",
									"aria-hidden": "true"
								}), session.program]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {
										className: "h-3.5 w-3.5",
										"aria-hidden": "true"
									}),
									"Created ",
									formatDateTime(session.createdAt)
								]
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Edit"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Print"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						disabled: session.status === "Completed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Complete Session"]
					})
				]
			})]
		})
	});
}
function Section({ title, icon: Icon, aside, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-5 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-muted/50 text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-[18px] w-[18px]",
						"aria-hidden": "true"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "truncate text-[15px] font-semibold tracking-tight text-foreground",
					children: title
				})]
			}), aside ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0",
				children: aside
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pt-5",
			children
		})]
	});
}
function Field({ label, value, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `min-w-0 ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[12px] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-0.5 break-words text-sm leading-relaxed text-foreground",
			children: value
		})]
	});
}
function TimelineStep({ label, value, caption, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-card ${{
					info: "bg-info",
					success: "bg-success",
					warning: "bg-warning",
					neutral: "bg-muted-foreground"
				}[tone]}`,
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] uppercase tracking-[0.06em] text-muted-foreground",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-sm font-medium text-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-[12.5px] leading-relaxed text-muted-foreground",
				children: caption
			})
		]
	});
}
//#endregion
export { TherapySessionDetailsPage as component };
