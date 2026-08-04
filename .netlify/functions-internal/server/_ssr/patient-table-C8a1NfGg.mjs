import { $t as ClipboardCheck, Ht as Ellipsis, J as Printer, Mt as History, Vn as Archive, Vt as Eye, a as Wallet, i as Waves, tt as PencilLine } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { d as PATIENT_STATUS_TONE, f as PAYMENT_STATUS_TONE } from "./router-BtnFRLs52.mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { a as initialsOf, n as formatDate } from "./breadcrumbs-CW6ykn0r.mjs";
import { i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-CXFNH1SK.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-BzGcbmh2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/patient-table-C8a1NfGg.js
var import_jsx_runtime = require_jsx_runtime();
var PATIENT_COLUMNS = [
	{
		key: "code",
		label: "Patient ID",
		hideable: false
	},
	{
		key: "photo",
		label: "Photo",
		hideable: true
	},
	{
		key: "name",
		label: "Patient Name",
		hideable: false
	},
	{
		key: "age",
		label: "Age",
		numeric: true,
		hideable: true
	},
	{
		key: "gender",
		label: "Gender",
		hideable: true
	},
	{
		key: "guardian",
		label: "Guardian",
		hideable: true
	},
	{
		key: "phone",
		label: "Phone",
		hideable: true
	},
	{
		key: "therapyType",
		label: "Therapy Type",
		hideable: true
	},
	{
		key: "package",
		label: "Current Package",
		hideable: true
	},
	{
		key: "paymentStatus",
		label: "Payment Status",
		hideable: true
	},
	{
		key: "status",
		label: "Patient Status",
		hideable: true
	},
	{
		key: "lastVisit",
		label: "Last Visit",
		hideable: true
	},
	{
		key: "nextSession",
		label: "Next Session",
		hideable: true
	}
];
var DEFAULT_VISIBLE_COLUMNS = PATIENT_COLUMNS.map((column) => column.key);
function PatientTable({ rows, visibleColumns }) {
	const columns = PATIENT_COLUMNS.filter((column) => visibleColumns.includes(column.key));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden overflow-auto md:block",
		style: { maxHeight: "660px" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
				className: "sr-only",
				children: "Registered patients"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				className: "border-border hover:bg-transparent",
				children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					scope: "col",
					className: cn("sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur", column.numeric && "text-right"),
					children: column.key === "photo" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Photo"
					}) : column.label
				}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "sticky top-0 z-10 h-11 bg-muted/50 px-5 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
					children: "Actions"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((patient) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				className: "border-border transition-enterprise hover:bg-surface-hover",
				children: [columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: cn("px-5 py-3.5 text-sm", column.numeric && "text-right tabular-nums"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientCell, {
						column: column.key,
						patient
					})
				}, column.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "px-5 py-3.5 text-right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientRowActions, { patient })
				})]
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/manager/patients/$patientId",
									params: { patientId: patient.id },
									className: "block truncate text-sm font-medium text-foreground hover:underline",
									children: patient.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-mono text-[12px] text-muted-foreground",
									children: patient.code
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientRowActions, { patient })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: PATIENT_STATUS_TONE[patient.status],
								label: patient.status
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: PAYMENT_STATUS_TONE[patient.paymentStatus],
								label: patient.paymentStatus
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Age / Gender",
									value: `${patient.age} yrs · ${patient.gender}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Therapy",
									value: patient.program.therapyType
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Guardian",
									value: patient.guardian.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Phone",
									value: patient.guardian.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Last visit",
									value: formatDate(patient.lastVisit)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileField, {
									label: "Next session",
									value: patient.nextSession ? formatDate(patient.nextSession) : "Not scheduled"
								})
							]
						})
					]
				})]
			})
		}, patient.id))
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
function PatientAvatar({ name, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary ring-1 ring-inset ring-primary/15", className),
		"aria-hidden": "true",
		children: initialsOf(name)
	});
}
function PatientCell({ column, patient }) {
	switch (column) {
		case "code": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap font-mono text-[12.5px] text-muted-foreground",
			children: patient.code
		});
		case "photo": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientAvatar, { name: patient.name });
		case "name": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "block min-w-[160px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/manager/patients/$patientId",
				params: { patientId: patient.id },
				className: "font-medium text-foreground hover:underline",
				children: patient.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate text-[12.5px] text-muted-foreground",
				children: patient.branch
			})]
		});
		case "age": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: patient.age });
		case "gender": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap",
			children: patient.gender
		});
		case "guardian": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "block min-w-[150px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate text-foreground",
				children: patient.guardian.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate text-[12.5px] text-muted-foreground",
				children: patient.guardian.relation
			})]
		});
		case "phone": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap tabular-nums text-muted-foreground",
			children: patient.guardian.phone
		});
		case "therapyType": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap",
			children: patient.program.therapyType
		});
		case "package": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block min-w-[170px] truncate text-muted-foreground",
			children: patient.billing.packageName
		});
		case "paymentStatus": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: PAYMENT_STATUS_TONE[patient.paymentStatus],
			label: patient.paymentStatus
		});
		case "status": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: PATIENT_STATUS_TONE[patient.status],
			label: patient.status
		});
		case "lastVisit": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-muted-foreground",
			children: formatDate(patient.lastVisit)
		});
		case "nextSession": return patient.nextSession ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-foreground",
			children: formatDate(patient.nextSession)
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "whitespace-nowrap text-muted-foreground",
			children: "Not scheduled"
		});
		default: return null;
	}
}
function PatientRowActions({ patient }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon-sm",
			className: "text-muted-foreground",
			"aria-label": `Actions for ${patient.name}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		className: "w-52",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/manager/patients/$patientId",
					params: { patientId: patient.id },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "View Profile"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PencilLine, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "Edit Patient"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "Schedule Assessment"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "Schedule Therapy"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "Collect Payment"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/manager/patients/$patientId",
					params: { patientId: patient.id },
					search: { tab: "timeline" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "View Timeline"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "Print Card"] }),
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
export { PatientTable as i, PATIENT_COLUMNS as n, PatientAvatar as r, DEFAULT_VISIBLE_COLUMNS as t };
