import { Ht as Ellipsis, J as Printer, Lt as FileText, Vn as Archive, Vt as Eye, gn as CalendarPlus, tt as PencilLine } from "../_libs/lucide-react.mjs";
import { _ as SEVERITY_TONE, a as ASSESSMENT_STATUS_TONE } from "./assessment-data-VYEbB3BS.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { a as initialsOf, n as formatDate } from "./breadcrumbs-CW6ykn0r.mjs";
import { i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-CXFNH1SK.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BzGcbmh2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/assessment-table-DebW8n3T.js
var import_jsx_runtime = require_jsx_runtime();
var ASSESSMENT_COLUMNS = [
	{
		key: "code",
		label: "Assessment ID",
		hideable: false
	},
	{
		key: "patient",
		label: "Patient",
		hideable: false
	},
	{
		key: "patientCode",
		label: "Patient ID",
		hideable: true
	},
	{
		key: "assessmentDate",
		label: "Assessment Date",
		hideable: true
	},
	{
		key: "assessmentType",
		label: "Assessment Type",
		hideable: true
	},
	{
		key: "diagnosis",
		label: "Diagnosis",
		hideable: true
	},
	{
		key: "recommendation",
		label: "Therapy Recommendation",
		hideable: true
	},
	{
		key: "status",
		label: "Status",
		hideable: false
	},
	{
		key: "nextFollowUp",
		label: "Next Follow-up",
		hideable: true
	}
];
var DEFAULT_ASSESSMENT_COLUMNS = ASSESSMENT_COLUMNS.map((column) => column.key);
function AssessmentAvatar({ name, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-muted/60 text-[12px] font-semibold text-muted-foreground", className),
		"aria-hidden": "true",
		children: initialsOf(name)
	});
}
function AssessmentTable({ rows, visibleColumns }) {
	const columns = ASSESSMENT_COLUMNS.filter((column) => visibleColumns.includes(column.key));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
				className: "sr-only",
				children: "Clinical assessments"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				className: "border-border hover:bg-transparent",
				children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					scope: "col",
					className: "sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
					children: column.label
				}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "sticky top-0 z-10 h-11 bg-muted/50 px-5 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
					children: "Actions"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((assessment) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				className: "border-border transition-enterprise hover:bg-surface-hover",
				children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "px-5 py-3.5 text-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentCell, {
						column: column.key,
						assessment
					})
				}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "px-5 py-3.5 text-right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentRowActions, { assessment })
				})]
			}, assessment.id)) })
		] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		children: rows.map((assessment) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "px-4 py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentAvatar, { name: assessment.patientName }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/assessments/$assessmentId",
									params: { assessmentId: assessment.id },
									className: "block truncate text-sm font-medium text-foreground hover:underline",
									children: assessment.patientName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate font-mono text-[12px] text-muted-foreground",
									children: [
										assessment.code,
										" · ",
										assessment.patientCode
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentRowActions, { assessment })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: ASSESSMENT_STATUS_TONE[assessment.status],
								label: assessment.status
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: SEVERITY_TONE[assessment.diagnosis.severity],
								label: assessment.diagnosis.severity
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Assessment date",
									value: formatDate(assessment.assessmentDate)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Type",
									value: assessment.assessmentType
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Diagnosis",
									value: assessment.diagnosis.primary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Recommendation",
									value: assessment.recommendation.therapy
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Guardian",
									value: assessment.guardianPhone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Next follow-up",
									value: assessment.nextFollowUp ? formatDate(assessment.nextFollowUp) : "Not scheduled"
								})
							]
						})
					]
				})]
			})
		}, assessment.id))
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
function AssessmentCell({ column, assessment }) {
	switch (column) {
		case "code": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/manager/assessments/$assessmentId",
			params: { assessmentId: assessment.id },
			className: "whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline",
			children: assessment.code
		});
		case "patient": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentAvatar, { name: assessment.patientName }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/manager/patients/$patientId",
					params: { patientId: assessment.patientId },
					className: "block truncate font-medium text-foreground hover:underline",
					children: assessment.patientName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "truncate text-[12px] text-muted-foreground",
					children: [
						assessment.patientAge,
						" yrs · ",
						assessment.patientGender,
						" · ",
						assessment.guardianName
					]
				})]
			})]
		});
		case "patientCode": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap font-mono text-[12.5px] text-muted-foreground",
			children: assessment.patientCode
		});
		case "assessmentDate": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-muted-foreground",
			children: formatDate(assessment.assessmentDate)
		});
		case "assessmentType": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-foreground",
			children: assessment.assessmentType
		});
		case "diagnosis": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-foreground",
				children: assessment.diagnosis.primary
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "truncate text-[12px] text-muted-foreground",
				children: [assessment.diagnosis.severity, assessment.diagnosis.secondary !== "None" ? ` · ${assessment.diagnosis.secondary}` : ""]
			})]
		});
		case "recommendation": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-foreground",
				children: assessment.recommendation.therapy
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "truncate text-[12px] text-muted-foreground",
				children: [
					assessment.recommendation.sessionsPerWeek,
					"× / week ·",
					" ",
					assessment.recommendation.expectedDuration
				]
			})]
		});
		case "status": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: ASSESSMENT_STATUS_TONE[assessment.status],
			label: assessment.status
		});
		case "nextFollowUp": return assessment.nextFollowUp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-foreground",
			children: formatDate(assessment.nextFollowUp)
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-muted-foreground",
			children: "Not scheduled"
		});
		default: return null;
	}
}
function AssessmentRowActions({ assessment }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon-sm",
			className: "text-muted-foreground",
			"aria-label": `Actions for assessment ${assessment.code}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		className: "w-52",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/manager/assessments/$assessmentId",
					params: { assessmentId: assessment.id },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "View Assessment"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "Edit"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "Print"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "Generate Report"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "Schedule Therapy"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				className: "text-danger focus:text-danger",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Archive, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Archive"]
			})
		]
	})] });
}
//#endregion
export { DEFAULT_ASSESSMENT_COLUMNS as i, AssessmentAvatar as n, AssessmentTable as r, ASSESSMENT_COLUMNS as t };
