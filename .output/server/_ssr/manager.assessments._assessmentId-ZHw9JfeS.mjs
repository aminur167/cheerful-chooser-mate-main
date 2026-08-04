import { $t as ClipboardCheck, D as Stethoscope, Ft as Gauge, J as Printer, Ln as ArrowLeft, Lt as FileText, Nt as HeartPulse, Q as Phone, S as Target, gn as CalendarPlus, i as Waves, l as UserRound, tt as PencilLine, vn as CalendarClock, xn as Building2 } from "../_libs/lucide-react.mjs";
import { _ as SEVERITY_TONE, a as ASSESSMENT_STATUS_TONE, y as averageScore } from "./assessment-data-VYEbB3BS.mjs";
import { l as Route$22 } from "./router-BtnFRLs5.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BzhkirSF.mjs";
import { n as formatDate, r as formatDateTime } from "./breadcrumbs-CW6ykn0r.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as Card } from "./card-Ce78aY8w.mjs";
import { t as Progress } from "./progress-DYQcnTxt.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { t as WidgetCard } from "./widget-card-Dbo4snDS.mjs";
import { t as ScoreMeter } from "./score-rating-5Pu6sOfj.mjs";
import { n as AssessmentAvatar } from "./assessment-table-DebW8n3T.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.assessments._assessmentId-ZHw9JfeS.js
var import_jsx_runtime = require_jsx_runtime();
function AssessmentDetailsPage() {
	const { assessment } = Route$22.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: `${assessment.code} — ${assessment.patientName}`,
				description: `${assessment.assessmentType} · ${formatDate(assessment.assessmentDate)} · ${assessment.branch}`,
				breadcrumbs: [
					{
						label: "Branch Manager",
						to: "/manager"
					},
					{
						label: "Assessment Management",
						to: "/manager/assessments"
					},
					{ label: assessment.code }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/assessments",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Back"]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailHeader, { assessment }),
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
										value: assessment.patientName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Patient ID",
										value: assessment.patientCode
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Age / Gender",
										value: `${assessment.patientAge} years · ${assessment.patientGender}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Guardian",
										value: assessment.guardianName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Guardian phone",
										value: assessment.guardianPhone
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Branch",
										value: assessment.branch
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Medical summary",
										value: assessment.medicalSummary,
										className: "sm:col-span-2"
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
										params: { patientId: assessment.patientId },
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										}), "Open patient profile"]
									})
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Assessment Details",
							icon: ClipboardCheck,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Assessment ID",
										value: assessment.code
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Assessment type",
										value: assessment.assessmentType
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Assessment date",
										value: formatDate(assessment.assessmentDate)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Assessed by",
										value: assessment.assessor
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Reason for visit",
										value: assessment.reasonForVisit,
										className: "sm:col-span-2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Chief complaint",
										value: assessment.chiefComplaint,
										className: "sm:col-span-2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Observation notes",
										value: assessment.observationNotes,
										className: "sm:col-span-2"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Clinical Evaluation",
							icon: Gauge,
							aside: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: "info",
								label: `Average ${averageScore(assessment.evaluation)}/5`,
								dot: false
							}),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: assessment.evaluation.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreMeter, {
									label: skill.label,
									score: skill.score,
									note: skill.note
								}, skill.key))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							title: "Diagnosis",
							icon: Stethoscope,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
										tone: "neutral",
										label: assessment.diagnosis.primary,
										dot: false
									}),
									assessment.diagnosis.secondary !== "None" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
										tone: "neutral",
										label: assessment.diagnosis.secondary,
										dot: false
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
										tone: SEVERITY_TONE[assessment.diagnosis.severity],
										label: `${assessment.diagnosis.severity} severity`
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-5 grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Primary diagnosis",
										value: assessment.diagnosis.primary
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Secondary diagnosis",
										value: assessment.diagnosis.secondary
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Clinical summary",
										value: assessment.diagnosis.summary,
										className: "sm:col-span-2"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							title: "Recommendation",
							icon: Waves,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Recommended therapy",
										value: assessment.recommendation.therapy
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Frequency",
										value: assessment.recommendation.frequency
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Sessions per week",
										value: String(assessment.recommendation.sessionsPerWeek)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Expected duration",
										value: assessment.recommendation.expectedDuration
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Home instructions",
										value: assessment.recommendation.homeInstructions,
										className: "sm:col-span-2"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 border-t border-border pt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground",
									children: "Therapy goals"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-3 space-y-3",
									children: assessment.recommendation.goals.map((goal, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border bg-muted/50 text-[11px] font-semibold text-muted-foreground",
											children: index + 1
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "min-w-0 break-words text-sm leading-relaxed text-foreground",
											children: goal
										})]
									}, goal))
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							title: "Treatment Plan",
							icon: Target,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
								className: "relative space-y-6 border-l border-border pl-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineStep, {
										label: "Suggested package",
										value: assessment.treatmentPlan.package,
										caption: `${assessment.treatmentPlan.estimatedSessions} estimated sessions`,
										tone: "info"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineStep, {
										label: "Expected start date",
										value: formatDate(assessment.treatmentPlan.expectedStart),
										caption: `${assessment.recommendation.sessionsPerWeek} sessions per week`,
										tone: "success"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineStep, {
										label: "Expected review date",
										value: formatDate(assessment.treatmentPlan.expectedReview),
										caption: `After ${assessment.recommendation.expectedDuration} of therapy`,
										tone: "warning"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineStep, {
										label: "Next follow-up",
										value: assessment.nextFollowUp ? formatDate(assessment.nextFollowUp) : "Not scheduled",
										caption: "Guardian review appointment",
										tone: "neutral"
									})
								]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "min-w-0 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Assessment Progress",
							description: "Completion of the clinical workflow",
							icon: Gauge,
							showMenu: false,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[26px] font-semibold leading-none tabular-nums text-foreground",
									children: [assessment.progress, "%"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
									value: assessment.progress,
									className: "mt-3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[12.5px] text-muted-foreground",
									children: assessment.reportReady ? "Report generated and shared with the guardian." : "Report pending clinical sign-off."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Assigned Branch",
							description: "Where the assessment was conducted",
							icon: Building2,
							showMenu: false,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-foreground",
								children: assessment.branch
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-[12.5px] text-muted-foreground",
								children: ["Assessed by ", assessment.assessor]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Expected Therapy",
							description: "Recommended programme",
							icon: Waves,
							showMenu: false,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-foreground",
								children: assessment.recommendation.therapy
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-[12.5px] text-muted-foreground",
								children: [
									assessment.recommendation.sessionsPerWeek,
									"× per week ·",
									" ",
									assessment.recommendation.expectedDuration
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
							title: "Follow-up Date",
							description: "Next scheduled review",
							icon: CalendarClock,
							showMenu: false,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-foreground",
									children: assessment.nextFollowUp ? formatDate(assessment.nextFollowUp) : "Not scheduled"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-[12.5px] text-muted-foreground",
									children: ["Guardian contact: ", assessment.guardianPhone]
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
function DetailHeader({ assessment }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "p-5 sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentAvatar, {
					name: assessment.patientName,
					className: "h-14 w-14 shrink-0 text-sm sm:h-16 sm:w-16 sm:text-base"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[12.5px] font-medium text-primary",
									children: assessment.code
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: ASSESSMENT_STATUS_TONE[assessment.status],
									label: assessment.status
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: SEVERITY_TONE[assessment.diagnosis.severity],
									label: assessment.diagnosis.severity
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "truncate text-[19px] font-semibold tracking-tight text-foreground",
							children: assessment.patientName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[13px] text-muted-foreground",
							children: [
								assessment.patientCode,
								" · ",
								assessment.patientAge,
								" years ·",
								" ",
								assessment.patientGender,
								" · Guardian ",
								assessment.guardianName
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, {
									className: "h-3.5 w-3.5",
									"aria-hidden": "true"
								}), assessment.diagnosis.primary]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {
										className: "h-3.5 w-3.5",
										"aria-hidden": "true"
									}),
									"Created ",
									formatDateTime(assessment.createdAt)
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Print"]
					}),
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Generate Report"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Schedule Therapy"]
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
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-sm font-medium text-foreground",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-[12.5px] text-muted-foreground",
				children: caption
			})
		]
	});
}
//#endregion
export { AssessmentDetailsPage as component };
