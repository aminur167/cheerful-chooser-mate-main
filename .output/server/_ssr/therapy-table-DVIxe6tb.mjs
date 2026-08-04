import { Ht as Ellipsis, J as Printer, Vt as Eye, an as CircleCheck, nn as CirclePlay, o as Users, tt as PencilLine } from "../_libs/lucide-react.mjs";
import { f as THERAPY_STATUS_TONE, g as formatTimeRange, t as ATTENDANCE_TONE } from "./therapy-data-GYpM_hnG.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { a as initialsOf, n as formatDate } from "./breadcrumbs-CW6ykn0r.mjs";
import { i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-CXFNH1SK.mjs";
import { t as Progress } from "./progress-DYQcnTxt.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BzGcbmh2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/therapy-table-DVIxe6tb.js
var import_jsx_runtime = require_jsx_runtime();
var THERAPY_COLUMNS = [
	{
		key: "code",
		label: "Session ID",
		hideable: false
	},
	{
		key: "patient",
		label: "Patient",
		hideable: false
	},
	{
		key: "mode",
		label: "Therapy Type",
		hideable: true
	},
	{
		key: "program",
		label: "Program",
		hideable: true
	},
	{
		key: "sessionNumber",
		label: "Session No.",
		hideable: true
	},
	{
		key: "sessionDate",
		label: "Session Date",
		hideable: true
	},
	{
		key: "time",
		label: "Time",
		hideable: true
	},
	{
		key: "attendance",
		label: "Attendance",
		hideable: true
	},
	{
		key: "status",
		label: "Status",
		hideable: false
	},
	{
		key: "progress",
		label: "Progress",
		hideable: true
	}
];
var DEFAULT_THERAPY_COLUMNS = THERAPY_COLUMNS.map((column) => column.key);
function TherapyAvatar({ name, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-muted/60 text-[12px] font-semibold text-muted-foreground", className),
		"aria-hidden": "true",
		children: initialsOf(name)
	});
}
function TherapyTable({ rows, visibleColumns }) {
	const columns = THERAPY_COLUMNS.filter((column) => visibleColumns.includes(column.key));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
				className: "sr-only",
				children: "Therapy sessions"
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((session) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				className: "border-border transition-enterprise hover:bg-surface-hover",
				children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "px-5 py-3.5 text-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyCell, {
						column: column.key,
						session
					})
				}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "px-5 py-3.5 text-right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyRowActions, { session })
				})]
			}, session.id)) })
		] })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border md:hidden",
		children: rows.map((session) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "px-4 py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyAvatar, { name: session.patientName }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/therapy/$sessionId",
									params: { sessionId: session.id },
									className: "block truncate text-sm font-medium text-foreground hover:underline",
									children: session.patientName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate font-mono text-[12px] text-muted-foreground",
									children: [
										session.code,
										" · ",
										session.patientCode
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyRowActions, { session })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: THERAPY_STATUS_TONE[session.status],
									label: session.status
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: ATTENDANCE_TONE[session.attendance],
									label: session.attendance
								}),
								session.mode === "Group Therapy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
									tone: "info",
									label: "Group",
									dot: false
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Program",
									value: session.program
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Session",
									value: `${session.sessionNumber} of ${session.totalSessions}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Date",
									value: formatDate(session.sessionDate)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Time",
									value: formatTimeRange(session.startTime, session.endTime)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Therapist",
									value: session.therapist
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Room",
									value: session.room
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-[12px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Progress" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums",
									children: [session.progress, "%"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
								value: session.progress,
								className: "mt-1.5"
							})]
						})
					]
				})]
			})
		}, session.id))
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
function TherapyCell({ column, session }) {
	switch (column) {
		case "code": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/manager/therapy/$sessionId",
			params: { sessionId: session.id },
			className: "whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline",
			children: session.code
		});
		case "patient": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyAvatar, { name: session.patientName }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/manager/patients/$patientId",
					params: { patientId: session.patientId },
					className: "block truncate font-medium text-foreground hover:underline",
					children: session.patientName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "truncate text-[12px] text-muted-foreground",
					children: [
						session.patientCode,
						" · ",
						session.patientAge,
						" yrs · ",
						session.guardianName
					]
				})]
			})]
		});
		case "mode": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-1.5 whitespace-nowrap text-foreground",
			children: [session.mode === "Group Therapy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
				className: "h-3.5 w-3.5 text-muted-foreground",
				"aria-hidden": "true"
			}) : null, session.mode]
		});
		case "program": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-foreground",
			children: session.program
		});
		case "sessionNumber": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "whitespace-nowrap tabular-nums text-foreground",
			children: [session.sessionNumber, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-muted-foreground",
				children: [" / ", session.totalSessions]
			})]
		});
		case "sessionDate": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-muted-foreground",
			children: formatDate(session.sessionDate)
		});
		case "time": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap tabular-nums text-muted-foreground",
			children: formatTimeRange(session.startTime, session.endTime)
		});
		case "attendance": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: ATTENDANCE_TONE[session.attendance],
			label: session.attendance
		});
		case "status": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: THERAPY_STATUS_TONE[session.status],
			label: session.status
		});
		case "progress": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-[120px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-between text-[12px] text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "tabular-nums text-foreground",
					children: [session.progress, "%"]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: session.progress,
				className: "mt-1.5"
			})]
		});
		default: return null;
	}
}
function TherapyRowActions({ session }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon-sm",
			className: "text-muted-foreground",
			"aria-label": `Actions for session ${session.code}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		className: "w-52",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/manager/therapy/$sessionId",
					params: { sessionId: session.id },
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				disabled: session.status !== "Scheduled",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Start Session"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				disabled: session.status === "Completed",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Complete Session"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "Print"] })
		]
	})] });
}
//#endregion
export { TherapyTable as i, THERAPY_COLUMNS as n, TherapyAvatar as r, DEFAULT_THERAPY_COLUMNS as t };
