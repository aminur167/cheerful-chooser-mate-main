import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { I as Search, Q as Phone, dn as Check, l as UserRound, yt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { c as FOLLOW_UP_REASONS, d as FOLLOW_UP_TODAY_ISO, o as FOLLOW_UP_PRIORITIES, t as CONTACT_TIME_SLOTS } from "./follow-up-data-ocWJfEAb.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { s as PATIENTS } from "./router-BtnFRLs52.mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { t as Input } from "./input-BkRQ7J8p.mjs";
import { t as FormField } from "./form-field-DoPU-RoN.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BYMcu4zp.mjs";
import { a as initialsOf } from "./breadcrumbs-CW6ykn0r.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { t as Textarea } from "./textarea-BRH7-9yv.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-D9_a5hiE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/new-follow-up-dialog-Dyj1W56c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		id: 1,
		title: "Select Patient",
		description: "Find the patient to follow up"
	},
	{
		id: 2,
		title: "Follow-up Details",
		description: "Reason, priority and schedule"
	},
	{
		id: 3,
		title: "Communication Notes",
		description: "Discussion and next action"
	},
	{
		id: 4,
		title: "Review",
		description: "Confirm before scheduling"
	}
];
/**
* UI-only 4-step follow-up scheduler.
* Nothing is persisted — the Django REST API will own this later.
*/
function NewFollowUpDialog({ open, onOpenChange, presetPatientId }) {
	const [step, setStep] = (0, import_react.useState)(1);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [patientId, setPatientId] = (0, import_react.useState)(presetPatientId);
	const [reason, setReason] = (0, import_react.useState)("Therapy Progress");
	const [priority, setPriority] = (0, import_react.useState)("Medium");
	const [date, setDate] = (0, import_react.useState)(FOLLOW_UP_TODAY_ISO);
	const [time, setTime] = (0, import_react.useState)(CONTACT_TIME_SLOTS[0]);
	const patient = (0, import_react.useMemo)(() => PATIENTS.find((item) => item.id === patientId), [patientId]);
	const results = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return (q ? PATIENTS.filter((item) => [
			item.name,
			item.code,
			item.phone,
			item.guardian.name,
			item.guardian.phone
		].join(" ").toLowerCase().includes(q)) : PATIENTS).slice(0, 6);
	}, [query]);
	const close = () => {
		onOpenChange(false);
		setTimeout(() => {
			setStep(1);
			setQuery("");
			setPatientId(presetPatientId);
		}, 200);
	};
	const submit = () => {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			close();
		}, 900);
	};
	const current = STEPS[step - 1];
	const canContinue = step !== 1 || Boolean(patient);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) close();
			else onOpenChange(true);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] max-w-2xl overflow-y-auto rounded-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "New follow-up" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Schedule a retention follow-up for a patient after assessment, therapy or package completion." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex items-center gap-2 border-b border-border pb-5",
					children: STEPS.map((item, index) => {
						const state = step === item.id ? "current" : step > item.id ? "done" : "todo";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex min-w-0 flex-1 items-center gap-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[12px] font-semibold transition-enterprise", state === "current" && "border-primary bg-primary text-primary-foreground", state === "done" && "border-success/40 bg-success/12 text-success", state === "todo" && "border-border bg-muted/50 text-muted-foreground"),
									"aria-current": state === "current" ? "step" : void 0,
									children: state === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }) : item.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden min-w-0 sm:block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("block truncate text-[13px] font-medium", state === "todo" ? "text-muted-foreground" : "text-foreground"),
										children: item.title
									})
								}),
								index < STEPS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-px flex-1 bg-border",
									"aria-hidden": "true"
								}) : null
							]
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[13px] font-medium text-foreground",
						children: [
							"Step ",
							step,
							" of ",
							STEPS.length,
							" — ",
							current.title
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12.5px] text-muted-foreground",
						children: current.description
					})]
				}),
				step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepPatient, {
					query,
					onQuery: setQuery,
					results,
					selected: patient,
					onSelect: setPatientId
				}) : step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepDetails, {
					reason,
					onReason: setReason,
					priority,
					onPriority: setPriority,
					date,
					onDate: setDate,
					time,
					onTime: setTime
				}) : step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepNotes, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepReview, {
					patient,
					reason,
					priority,
					date,
					time
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: close,
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2.5",
						children: [step > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setStep(step - 1),
							children: "Back"
						}) : null, step < STEPS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setStep(step + 1),
							disabled: !canContinue,
							children: "Continue"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: close,
							children: "Save Draft"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: submit,
							disabled: submitting,
							children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "h-4 w-4 animate-spin",
								"aria-hidden": "true"
							}) : null, "Schedule Follow-up"]
						})] })]
					})]
				})
			]
		})
	});
}
function StepPatient({ query, onQuery, results, selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "follow-up-patient-search",
				label: "Search existing patient",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "follow-up-patient-search",
						value: query,
						onChange: (event) => onQuery(event.target.value),
						placeholder: "Name, patient ID or guardian phone…",
						className: "pl-9"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "max-h-56 space-y-1.5 overflow-y-auto pr-1",
				children: [results.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onSelect(item.id),
					"aria-pressed": selected?.id === item.id,
					className: cn("flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition-enterprise", selected?.id === item.id ? "border-primary bg-primary/5" : "border-border hover:bg-surface-hover"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-muted/60 text-[12px] font-semibold text-muted-foreground",
							children: initialsOf(item.name)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate text-sm font-medium text-foreground",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block truncate text-[12px] text-muted-foreground",
								children: [
									item.code,
									" · ",
									item.guardian.phone
								]
							})]
						}),
						selected?.id === item.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "h-4 w-4 shrink-0 text-primary",
							"aria-hidden": "true"
						}) : null
					]
				}) }, item.id)), results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-lg border border-dashed border-border px-3 py-6 text-center text-[13px] text-muted-foreground",
					children: "No patient matched this search."
				}) : null]
			}),
			selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientSummaryCard, { patient: selected }) : null
		]
	});
}
function PatientSummaryCard({ patient }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Patient summary",
		className: "rounded-xl border border-border bg-muted/30 p-4 shadow-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-border bg-background text-sm font-semibold text-muted-foreground",
				children: initialsOf(patient.name)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-semibold text-foreground",
							children: patient.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							tone: "info",
							label: `${patient.age} yrs`,
							dot: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							tone: "neutral",
							label: patient.code,
							dot: false
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-3 grid gap-x-4 gap-y-2 text-[12.5px] sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-3.5 w-3.5" }),
							label: "Guardian",
							children: [
								patient.guardian.name,
								" · ",
								patient.guardian.relation
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5" }),
							label: "Phone",
							children: patient.guardian.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
								children: "Current package"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "truncate text-foreground",
								children: [
									patient.billing.packageName,
									" · ",
									patient.billing.paymentType
								]
							})]
						})
					]
				})]
			})]
		})
	});
}
function Field({ icon, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
			className: "flex items-center gap-1.5 text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				children: icon
			}), label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "truncate text-foreground",
			children
		})]
	});
}
function StepDetails({ reason, onReason, priority, onPriority, date, onDate, time, onTime }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "follow-up-reason",
				label: "Reason",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: reason,
					onValueChange: (next) => onReason(next),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "follow-up-reason",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select reason" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: FOLLOW_UP_REASONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: item,
						children: item
					}, item)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "follow-up-priority",
				label: "Priority",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: priority,
					onValueChange: (next) => onPriority(next),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "follow-up-priority",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select priority" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: FOLLOW_UP_PRIORITIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: item,
						children: item
					}, item)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "follow-up-date",
				label: "Follow-up date",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "follow-up-date",
					type: "date",
					value: date,
					onChange: (event) => onDate(event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "follow-up-time",
				label: "Preferred contact time",
				hint: "When the guardian prefers to be contacted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: time,
					onValueChange: onTime,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "follow-up-time",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select time slot" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: CONTACT_TIME_SLOTS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: item,
						children: item
					}, item)) })]
				})
			})
		]
	});
}
function StepNotes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "follow-up-summary",
				label: "Discussion summary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "follow-up-summary",
					rows: 3,
					placeholder: "What will be discussed with the guardian…"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "follow-up-response",
					label: "Patient response",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "follow-up-response",
						rows: 3,
						placeholder: "Patient's engagement…"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "follow-up-feedback",
					label: "Guardian feedback",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "follow-up-feedback",
						rows: 3,
						placeholder: "Guardian's observations…"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "follow-up-recommendations",
				label: "Recommendations",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "follow-up-recommendations",
					rows: 3,
					placeholder: "Clinical or scheduling recommendations…"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "follow-up-next-action",
				label: "Next action",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "follow-up-next-action",
					placeholder: "e.g. Confirm attendance for next 4 sessions"
				})
			})
		]
	});
}
function StepReview({ patient, reason, priority, date, time }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5 py-2",
		children: [patient ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientSummaryCard, { patient }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
			className: "grid gap-4 rounded-xl border border-border p-4 text-[13px] sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
					label: "Patient",
					value: patient ? `${patient.name} · ${patient.code}` : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
					label: "Reason",
					value: reason
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
					label: "Priority",
					value: priority
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
					label: "Follow-up date",
					value: date
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
					label: "Preferred contact time",
					value: time
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewRow, {
					label: "Assigned to",
					value: "Tanjila Rahman (CRM)"
				})
			]
		})]
	});
}
function ReviewRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] uppercase tracking-[0.06em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-0.5 truncate font-medium text-foreground",
			children: value
		})]
	});
}
//#endregion
export { NewFollowUpDialog as t };
