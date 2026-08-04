import { Ht as Ellipsis, J as Printer, Q as Phone, Vt as Eye, an as CircleCheck, ht as MapPin, tt as PencilLine, vn as CalendarClock } from "../_libs/lucide-react.mjs";
import { S as VISIT_STATUS_TONE, b as VISIT_PRIORITY_TONE, c as OUTDOOR_PATIENT_STATUS_TONE, h as UPCOMING_VISITS, m as TODAYS_VISITS, p as THERAPIST_STATUS_TONE, t as AREA_COVERAGE, u as OUTDOOR_THERAPISTS, v as VISIT_OUTCOME_TONE } from "./outdoor-data-ClUJqde_.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-CXFNH1SK.mjs";
import { t as Card } from "./card-Ce78aY8w.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BzGcbmh2.mjs";
import { r as PatientAvatar } from "./patient-table-C8a1NfGg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/outdoor-widgets-3JHA2AvR.js
var import_jsx_runtime = require_jsx_runtime();
var HEAD_CLASS = "sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur";
function VisitRowActions({ visit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon",
			className: "h-8 w-8 text-muted-foreground",
			"aria-label": `Actions for ${visit.visitId}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		className: "w-52",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/manager/outdoor/$visitId",
					params: { visitId: visit.id },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "View"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "Edit"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "Reschedule"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "Complete Visit"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "Print Visit Sheet"] })
		]
	})] });
}
var VISIT_HEADS = [
	"Visit ID",
	"Visit Date",
	"Visit Time",
	"Patient",
	"Guardian",
	"Therapist",
	"Visit Type",
	"Location",
	"Status"
];
function OutdoorVisitTable({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
				className: "sr-only",
				children: "Outdoor therapy visits"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				className: "border-border hover:bg-transparent",
				children: [VISIT_HEADS.map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					scope: "col",
					className: HEAD_CLASS,
					children: label
				}, label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: cn(HEAD_CLASS, "text-right"),
					children: "Actions"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((visit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				className: "border-border transition-enterprise hover:bg-surface-hover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/manager/outdoor/$visitId",
							params: { visitId: visit.id },
							className: "whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline",
							children: visit.visitId
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "whitespace-nowrap px-5 py-3.5 text-sm text-foreground",
						children: formatDate(visit.date)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "whitespace-nowrap px-5 py-3.5 text-sm text-muted-foreground",
						children: [visit.time, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-1 text-[12px]",
							children: ["· ", visit.duration]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientAvatar, { name: visit.patientName }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-medium text-foreground",
									children: visit.patientName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-mono text-[12px] text-muted-foreground",
									children: visit.patientCode
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "px-5 py-3.5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-foreground",
							children: visit.guardian
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate text-[12px] text-muted-foreground",
							children: [
								visit.guardianRelation,
								" · ",
								visit.guardianPhone
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "px-5 py-3.5 text-sm text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate",
							children: visit.therapistName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[12px] text-muted-foreground",
							children: visit.supportStaff
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "whitespace-nowrap px-5 py-3.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							label: visit.type,
							tone: "info",
							dot: false
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "px-5 py-3.5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-[200px] truncate text-foreground",
							children: visit.area
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "max-w-[200px] truncate text-[12px] text-muted-foreground",
							children: [
								visit.district,
								", ",
								visit.division
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							label: visit.status,
							tone: VISIT_STATUS_TONE[visit.status]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5 text-right",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitRowActions, { visit })
					})
				]
			}, visit.id)) })
		] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		children: rows.map((visit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "px-4 py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientAvatar, { name: visit.patientName }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/outdoor/$visitId",
									params: { visitId: visit.id },
									className: "block truncate text-sm font-medium text-foreground hover:underline",
									children: visit.patientName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-mono text-[12px] text-muted-foreground",
									children: visit.visitId
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitRowActions, { visit })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									label: visit.status,
									tone: VISIT_STATUS_TONE[visit.status]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									label: visit.type,
									tone: "info",
									dot: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									label: visit.priority,
									tone: VISIT_PRIORITY_TONE[visit.priority],
									dot: false
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Date",
									value: `${formatDate(visit.date)} · ${visit.time}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Therapist",
									value: visit.therapistName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Guardian",
									value: visit.guardian
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Location",
									value: `${visit.area}, ${visit.district}`
								})
							]
						})
					]
				})]
			})
		}, visit.id))
	})] });
}
var PATIENT_HEADS = [
	"Patient ID",
	"Patient Name",
	"Guardian",
	"Phone",
	"Last Outdoor Visit",
	"Next Visit",
	"Therapy Program",
	"Status"
];
function OutdoorPatientTable({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
				className: "sr-only",
				children: "Outdoor patients"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
				className: "border-border hover:bg-transparent",
				children: PATIENT_HEADS.map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					scope: "col",
					className: HEAD_CLASS,
					children: label
				}, label))
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((patient) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				className: "border-border transition-enterprise hover:bg-surface-hover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "whitespace-nowrap px-5 py-3.5 font-mono text-[12.5px] text-muted-foreground",
						children: patient.code
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientAvatar, { name: patient.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-medium text-foreground",
									children: patient.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate text-[12px] text-muted-foreground",
									children: [
										patient.age,
										" yrs · ",
										patient.diagnosis
									]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "px-5 py-3.5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-foreground",
							children: patient.guardian
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[12px] text-muted-foreground",
							children: patient.relation
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "whitespace-nowrap px-5 py-3.5 text-sm text-muted-foreground",
						children: patient.phone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "whitespace-nowrap px-5 py-3.5 text-sm text-foreground",
						children: formatDate(patient.lastVisit)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "whitespace-nowrap px-5 py-3.5 text-sm text-foreground",
						children: formatDate(patient.nextVisit)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "px-5 py-3.5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-[220px] truncate text-foreground",
							children: patient.therapyProgram
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[12px] text-muted-foreground",
							children: [
								patient.totalVisits,
								" visits · ",
								patient.area
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							label: patient.status,
							tone: OUTDOOR_PATIENT_STATUS_TONE[patient.status]
						})
					})
				]
			}, patient.id)) })
		] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		children: rows.map((patient) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "px-4 py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientAvatar, { name: patient.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium text-foreground",
							children: patient.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-mono text-[12px] text-muted-foreground",
							children: patient.code
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								label: patient.status,
								tone: OUTDOOR_PATIENT_STATUS_TONE[patient.status]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Guardian",
									value: patient.guardian
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									value: patient.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Last visit",
									value: formatDate(patient.lastVisit)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Next visit",
									value: formatDate(patient.nextVisit)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Program",
									value: patient.therapyProgram
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Area",
									value: `${patient.area}, ${patient.district}`
								})
							]
						})
					]
				})]
			})
		}, patient.id))
	})] });
}
function VisitHistoryTable({ rows }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
				className: "sr-only",
				children: "Outdoor visit history"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
				className: "border-border hover:bg-transparent",
				children: [
					"Visit Date",
					"Patient",
					"Therapist",
					"Visit Type",
					"Outcome",
					"Remarks"
				].map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					scope: "col",
					className: HEAD_CLASS,
					children: label
				}, label))
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((visit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				className: "border-border transition-enterprise hover:bg-surface-hover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "whitespace-nowrap px-5 py-3.5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: formatDate(visit.date)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12px] text-muted-foreground",
							children: visit.time
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "px-5 py-3.5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/manager/outdoor/$visitId",
							params: { visitId: visit.id },
							className: "block max-w-[180px] truncate font-medium text-foreground hover:underline",
							children: visit.patientName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-mono text-[12px] text-muted-foreground",
							children: visit.patientCode
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5 text-sm text-foreground",
						children: visit.therapistName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "whitespace-nowrap px-5 py-3.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							label: visit.type,
							tone: "info",
							dot: false
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "whitespace-nowrap px-5 py-3.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							label: visit.outcome,
							tone: VISIT_OUTCOME_TONE[visit.outcome]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "px-5 py-3.5 text-sm text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-[280px] truncate",
							children: visit.remarks || "—"
						})
					})
				]
			}, visit.id)) })
		] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "space-y-0 md:hidden",
		children: rows.map((visit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "relative px-4 py-4 pl-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "absolute left-4 top-6 h-full w-px bg-border last:hidden"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "absolute left-[11px] top-5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary/10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-foreground",
					children: visit.patientName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[12px] text-muted-foreground",
					children: [
						formatDate(visit.date),
						" · ",
						visit.therapistName
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						label: visit.type,
						tone: "info",
						dot: false
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						label: visit.outcome,
						tone: VISIT_OUTCOME_TONE[visit.outcome]
					})]
				}),
				visit.remarks ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[12.5px] text-muted-foreground",
					children: visit.remarks
				}) : null
			]
		}, visit.id))
	})] });
}
function formatDate(iso) {
	return new Date(iso).toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric"
	});
}
function Field({ label, value }) {
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
function TherapistCards({ items = OUTDOOR_THERAPISTS }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
		children: items.map((therapist) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			interactive: true,
			className: "p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-semibold text-foreground",
							children: therapist.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[12.5px] text-muted-foreground",
							children: therapist.designation
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						label: therapist.status,
						tone: THERAPIST_STATUS_TONE[therapist.status]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-muted/25 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
							children: "Today's visits"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-0.5 text-[18px] font-semibold tabular-nums text-foreground",
							children: therapist.todayVisits
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-muted/25 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
							children: "Completed"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-0.5 text-[18px] font-semibold tabular-nums text-foreground",
							children: therapist.completedVisits
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
						children: "Assigned areas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: therapist.areas.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							label: area,
							tone: "neutral",
							dot: false
						}, area))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-between gap-3 border-t border-border pt-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 text-[12.5px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "h-3.5 w-3.5",
							"aria-hidden": "true"
						}), therapist.phone]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[12px] text-muted-foreground",
						children: therapist.experience
					})]
				})
			]
		}, therapist.id))
	});
}
function WidgetShell({ title, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-[14px] font-semibold tracking-tight text-foreground",
				children: title
			}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12.5px] text-muted-foreground",
				children: description
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children
		})]
	});
}
function TodaysScheduleWidget() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetShell, {
		title: "Today's Outdoor Schedule",
		description: "31 July 2026",
		children: TODAYS_VISITS.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[13px] text-muted-foreground",
			children: "No visits scheduled today."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: TODAYS_VISITS.map((visit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-lg border border-border bg-muted/25 p-3 transition-enterprise hover:bg-surface-hover",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[13px] font-medium text-foreground",
							children: visit.patientName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate text-[12px] text-muted-foreground",
							children: [
								visit.time,
								" · ",
								visit.type
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						label: visit.status,
						tone: VISIT_STATUS_TONE[visit.status]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1.5 truncate text-[12px] text-muted-foreground",
					children: [
						visit.area,
						" · ",
						visit.therapistName
					]
				})]
			}, visit.id))
		})
	});
}
function UpcomingVisitsWidget() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetShell, {
		title: "Upcoming Visits",
		description: "Next scheduled field visits",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: UPCOMING_VISITS.slice(0, 5).map((visit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-[13px] font-medium text-foreground",
						children: visit.patientName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "truncate text-[12px] text-muted-foreground",
						children: [
							formatDate(visit.date),
							" · ",
							visit.time
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 text-[12px] text-muted-foreground",
					children: visit.area
				})]
			}, visit.id))
		})
	});
}
function TherapistAvailabilityWidget() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetShell, {
		title: "Therapist Availability",
		description: "Field team status right now",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: OUTDOOR_THERAPISTS.map((therapist) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-[13px] font-medium text-foreground",
						children: therapist.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "truncate text-[12px] text-muted-foreground",
						children: [therapist.todayVisits, " visits today"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					label: therapist.status,
					tone: THERAPIST_STATUS_TONE[therapist.status]
				})]
			}, therapist.id))
		})
	});
}
function AreaCoverageWidget() {
	const max = Math.max(...AREA_COVERAGE.map((item) => item.visits));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetShell, {
		title: "Area Coverage",
		description: "Visits by area this quarter",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: AREA_COVERAGE.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 text-[12.5px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "truncate text-foreground",
						children: [item.area, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: [" · ", item.district]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 tabular-nums text-muted-foreground",
						children: [item.visits, " visits"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-1.5 overflow-hidden rounded-full bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-primary/70",
						style: { width: `${item.visits / max * 100}%` }
					})
				})]
			}, item.area))
		})
	});
}
function MapPlaceholderCard({ address, area, distanceKm, travelTime, mapLink }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "overflow-hidden p-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-label": "Map preview placeholder",
			role: "img",
			className: "relative grid h-40 place-items-center border-b border-border bg-muted/40 [background-image:linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] [background-size:28px_28px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary ring-4 ring-primary/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
					className: "h-5 w-5",
					"aria-hidden": "true"
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[14px] font-semibold tracking-tight text-foreground",
					children: area
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-[12.5px] leading-relaxed text-muted-foreground",
					children: address
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-muted/25 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
							children: "Distance"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "mt-0.5 text-[15px] font-semibold tabular-nums text-foreground",
							children: [distanceKm, " km"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-muted/25 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
							children: "Travel time"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-0.5 text-[15px] font-semibold text-foreground",
							children: travelTime
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					className: "w-full",
					disabled: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), mapLink ? "Open map link (UI only)" : "Map integration coming soon"]
				})
			]
		})]
	});
}
//#endregion
export { TherapistAvailabilityWidget as a, UpcomingVisitsWidget as c, OutdoorVisitTable as i, VisitHistoryTable as l, MapPlaceholderCard as n, TherapistCards as o, OutdoorPatientTable as r, TodaysScheduleWidget as s, AreaCoverageWidget as t };
