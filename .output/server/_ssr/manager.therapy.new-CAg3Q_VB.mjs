import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { I as Search, Ln as ArrowLeft, dn as Check, gn as CalendarPlus, l as UserRound, yt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { a as THERAPY_EQUIPMENT, c as THERAPY_PROGRAMS, g as formatTimeRange, l as THERAPY_ROOMS, n as SESSION_GOAL_SKILLS, p as TODAY_ISO, r as THERAPISTS, s as THERAPY_MODES } from "./therapy-data-GYpM_hnG.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { s as PATIENTS } from "./router-BtnFRLs52.mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { t as Input } from "./input-BkRQ7J8p.mjs";
import { t as FormField } from "./form-field-DoPU-RoN.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BYMcu4zp.mjs";
import { n as formatDate } from "./breadcrumbs-CW6ykn0r.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as Card } from "./card-Ce78aY8w.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { t as Textarea } from "./textarea-BRH7-9yv.mjs";
import { r as TherapyAvatar } from "./therapy-table-DVIxe6tb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.therapy.new-CAg3Q_VB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var THERAPY_WIZARD_STEPS = [
	{
		id: 1,
		title: "Patient",
		description: "Select the patient record"
	},
	{
		id: 2,
		title: "Therapy",
		description: "Type, program and schedule"
	},
	{
		id: 3,
		title: "Therapist",
		description: "Assign therapist and room"
	},
	{
		id: 4,
		title: "Goals",
		description: "Session goals and activities"
	},
	{
		id: 5,
		title: "Review",
		description: "Confirm and schedule"
	}
];
var INITIAL_STATE = {
	patientId: null,
	mode: "Individual Therapy",
	program: "Speech Therapy",
	sessionNumber: "1",
	sessionDate: TODAY_ISO,
	startTime: "10:00",
	endTime: "10:45",
	room: "",
	therapist: "",
	equipment: [],
	assignmentNotes: "",
	groupName: "",
	sessionTopic: "",
	totalChildren: "6",
	sessionGoal: "",
	targetSkills: [],
	activities: "",
	materials: "",
	expectedOutcome: ""
};
/**
* UI-only 5-step therapy scheduling wizard.
* Nothing is persisted — submission is simulated until the API is connected.
*/
function TherapyWizard() {
	const navigate = useNavigate();
	const [step, setStep] = (0, import_react.useState)(1);
	const [state, setState] = (0, import_react.useState)(INITIAL_STATE);
	const [submitting, setSubmitting] = (0, import_react.useState)(null);
	const set = (key, value) => setState((current) => ({
		...current,
		[key]: value
	}));
	const patient = (0, import_react.useMemo)(() => PATIENTS.find((item) => item.id === state.patientId) ?? null, [state.patientId]);
	const submit = (mode) => {
		setSubmitting(mode);
		setTimeout(() => {
			setSubmitting(null);
			navigate({ to: "/manager/therapy" });
		}, 900);
	};
	const current = THERAPY_WIZARD_STEPS[step - 1];
	const canContinue = step !== 1 || Boolean(patient);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepIndicator, {
			step,
			onSelect: setStep
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-5 sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border pb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground",
							children: [
								"Step ",
								step,
								" of ",
								THERAPY_WIZARD_STEPS.length
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-[17px] font-semibold tracking-tight text-foreground",
							children: current.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-[13px] text-muted-foreground",
							children: current.description
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pt-5",
					children: step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepPatient, {
						selectedId: state.patientId,
						onSelect: (id) => set("patientId", id),
						patient
					}) : step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepTherapy, {
						state,
						set
					}) : step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepTherapist, {
						state,
						set
					}) : step === 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepGoals, {
						state,
						set
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepReview, {
						state,
						patient
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => navigate({ to: "/manager/therapy" }),
						className: "sm:order-first",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2.5",
						children: [step > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setStep(step - 1),
							children: "Back"
						}) : null, step < THERAPY_WIZARD_STEPS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setStep(step + 1),
							disabled: !canContinue,
							children: "Continue"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: () => submit("draft"),
							disabled: submitting !== null,
							children: [submitting === "draft" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "h-4 w-4 animate-spin",
								"aria-hidden": "true"
							}) : null, "Save Draft"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => submit("schedule"),
							disabled: submitting !== null,
							children: [submitting === "schedule" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "h-4 w-4 animate-spin",
								"aria-hidden": "true"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), "Schedule Session"]
						})] })]
					})]
				}),
				step === 1 && !patient ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[12.5px] text-muted-foreground",
					children: "Select a patient to continue to the therapy details."
				}) : null
			]
		})]
	});
}
function StepIndicator({ step, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "hidden items-center gap-2 lg:flex",
		children: THERAPY_WIZARD_STEPS.map((item) => {
			const state = step === item.id ? "current" : step > item.id ? "done" : "todo";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex min-w-0 flex-1 items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onSelect(item.id),
					className: "flex min-w-0 items-center gap-2.5 text-left",
					"aria-current": state === "current" ? "step" : void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[12px] font-semibold transition-enterprise", state === "current" && "border-primary bg-primary text-primary-foreground", state === "done" && "border-success/40 bg-success/12 text-success", state === "todo" && "border-border bg-muted/50 text-muted-foreground"),
						children: state === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }) : item.id
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("block truncate text-[13px] font-medium", state === "todo" ? "text-muted-foreground" : "text-foreground"),
							children: item.title
						})
					})]
				}), item.id < THERAPY_WIZARD_STEPS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-px flex-1 bg-border",
					"aria-hidden": "true"
				}) : null]
			}, item.id);
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lg:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[13px] font-medium text-foreground",
				children: [
					"Step ",
					step,
					" of ",
					THERAPY_WIZARD_STEPS.length,
					" · ",
					THERAPY_WIZARD_STEPS[step - 1].title
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[12.5px] text-muted-foreground",
				children: [Math.round(step / THERAPY_WIZARD_STEPS.length * 100), "%"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 flex gap-1.5",
			"aria-hidden": "true",
			children: THERAPY_WIZARD_STEPS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1.5 flex-1 rounded-full", item.id <= step ? "bg-primary" : "bg-muted") }, item.id))
		})]
	})] });
}
function StepPatient({ selectedId, onSelect, patient }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const results = (0, import_react.useMemo)(() => {
		const term = query.trim().toLowerCase();
		return (term ? PATIENTS.filter((item) => [
			item.name,
			item.code,
			item.phone,
			item.guardian.name,
			item.guardian.phone
		].join(" ").toLowerCase().includes(term)) : PATIENTS).slice(0, 6);
	}, [query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "therapy-patient-search",
				label: "Search existing patient",
				hint: "Search by name, patient ID, phone or guardian",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "therapy-patient-search",
						type: "search",
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "e.g. Rahim Ahmed or PT-DHK-1001",
						className: "pl-9"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "divide-y divide-border overflow-hidden rounded-lg border border-border",
				children: results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "px-4 py-6 text-center text-[13px] text-muted-foreground",
					children: "No patients match this search."
				}) : results.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onSelect(item.id),
					"aria-pressed": selectedId === item.id,
					className: cn("flex w-full items-center gap-3 px-4 py-3 text-left transition-enterprise", selectedId === item.id ? "bg-primary/8" : "hover:bg-surface-hover"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyAvatar, { name: item.name }),
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
									item.age,
									" yrs · ",
									item.gender,
									" · ",
									item.branch
								]
							})]
						}),
						selectedId === item.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "h-4 w-4 shrink-0 text-primary",
							"aria-hidden": "true"
						}) : null
					]
				}) }, item.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-w-0",
			children: patient ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyAvatar, {
						name: patient.name,
						className: "h-12 w-12 text-sm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[15px] font-semibold text-foreground",
							children: patient.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-mono text-[12px] text-muted-foreground",
							children: patient.code
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 space-y-3 border-t border-border pt-4 text-[13px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Age",
							value: `${patient.age} years`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Guardian",
							value: `${patient.guardian.name} (${patient.guardian.relation})`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Phone",
							value: patient.guardian.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Diagnosis",
							value: patient.medical.diagnosis
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Current package",
							value: patient.billing.packageName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Sessions",
							value: `${patient.program.sessionsCompleted} of ${patient.program.sessionsPlanned} completed`
						})
					]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "flex h-full flex-col items-center justify-center gap-3 border-dashed p-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 place-items-center rounded-full border border-border bg-muted/50 text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, {
							className: "h-5 w-5",
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-medium text-foreground",
						children: "No patient selected"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12.5px] text-muted-foreground",
						children: "Pick a patient from the list to load their therapy information card."
					})
				]
			})
		})]
	});
}
function SummaryRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[minmax(0,120px)_minmax(0,1fr)] gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[12px] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "min-w-0 break-words text-[13px] text-foreground",
			children: value
		})]
	});
}
function StepTherapy({ state, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: THERAPY_MODES.map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => set("mode", mode),
					"aria-pressed": state.mode === mode,
					className: cn("rounded-lg border p-4 text-left transition-enterprise", state.mode === mode ? "border-primary bg-primary/8" : "border-border hover:bg-surface-hover"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-foreground",
						children: mode
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[12.5px] text-muted-foreground",
						children: mode === "Individual Therapy" ? "One-to-one session with a single patient." : "Small group batch with shared goals and activities."
					})]
				}, mode))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "therapy-program",
						label: "Program",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: state.program,
							onValueChange: (value) => set("program", value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								id: "therapy-program",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select program" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: THERAPY_PROGRAMS.map((program) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: program,
								children: program
							}, program)) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "therapy-session-number",
						label: "Session number",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "therapy-session-number",
							type: "number",
							min: 1,
							value: state.sessionNumber,
							onChange: (event) => set("sessionNumber", event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "therapy-date",
						label: "Session date",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "therapy-date",
							type: "date",
							value: state.sessionDate,
							onChange: (event) => set("sessionDate", event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "therapy-room",
						label: "Room",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: state.room,
							onValueChange: (value) => set("room", value),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								id: "therapy-room",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select room" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: THERAPY_ROOMS.map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: room,
								children: room
							}, room)) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "therapy-start",
						label: "Start time",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "therapy-start",
							type: "time",
							value: state.startTime,
							onChange: (event) => set("startTime", event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "therapy-end",
						label: "End time",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "therapy-end",
							type: "time",
							value: state.endTime,
							onChange: (event) => set("endTime", event.target.value)
						})
					})
				]
			}),
			state.mode === "Group Therapy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 rounded-lg border border-border bg-muted/25 p-4 sm:grid-cols-2 sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "group-name",
						label: "Group name",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "group-name",
							value: state.groupName,
							onChange: (event) => set("groupName", event.target.value),
							placeholder: "e.g. Little Talkers — Group B"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "group-children",
						label: "Total children",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "group-children",
							type: "number",
							min: 2,
							value: state.totalChildren,
							onChange: (event) => set("totalChildren", event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
						id: "group-topic",
						label: "Session topic",
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "group-topic",
							value: state.sessionTopic,
							onChange: (event) => set("sessionTopic", event.target.value),
							placeholder: "e.g. Turn taking and greeting peers"
						})
					})
				]
			}) : null
		]
	});
}
function StepTherapist({ state, set }) {
	const toggleEquipment = (item) => set("equipment", state.equipment.includes(item) ? state.equipment.filter((value) => value !== item) : [...state.equipment, item]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "therapy-therapist",
					label: "Therapist",
					hint: "Staff module connects later",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: state.therapist,
						onValueChange: (value) => set("therapist", value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							id: "therapy-therapist",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select therapist" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: THERAPISTS.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: name,
							children: name
						}, name)) })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "therapy-room-assign",
					label: "Room",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: state.room,
						onValueChange: (value) => set("room", value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							id: "therapy-room-assign",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select room" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: THERAPY_ROOMS.map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: room,
							children: room
						}, room)) })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] font-medium text-foreground",
					children: "Equipment"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-[12.5px] text-muted-foreground",
					children: "Inventory module connects later — pick from the standard therapy kit."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: THERAPY_EQUIPMENT.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => toggleEquipment(item),
						"aria-pressed": state.equipment.includes(item),
						className: cn("rounded-full border px-3 py-1.5 text-[12.5px] transition-enterprise", state.equipment.includes(item) ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:bg-surface-hover"),
						children: item
					}, item))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "therapy-notes",
				label: "Notes",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "therapy-notes",
					rows: 3,
					value: state.assignmentNotes,
					onChange: (event) => set("assignmentNotes", event.target.value),
					placeholder: "Any preparation notes for the therapist or front desk"
				})
			})
		]
	});
}
function StepGoals({ state, set }) {
	const toggleSkill = (skill) => set("targetSkills", state.targetSkills.includes(skill) ? state.targetSkills.filter((value) => value !== skill) : [...state.targetSkills, skill]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "session-goal",
				label: "Session goal",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "session-goal",
					rows: 2,
					value: state.sessionGoal,
					onChange: (event) => set("sessionGoal", event.target.value),
					placeholder: "e.g. Produce /r/ in initial word position with 80% accuracy"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[13px] font-medium text-foreground",
				children: "Target skills"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: SESSION_GOAL_SKILLS.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => toggleSkill(skill),
					"aria-pressed": state.targetSkills.includes(skill),
					className: cn("rounded-full border px-3 py-1.5 text-[12.5px] transition-enterprise", state.targetSkills.includes(skill) ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:bg-surface-hover"),
					children: skill
				}, skill))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "session-activities",
					label: "Activities",
					hint: "One per line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "session-activities",
						rows: 4,
						value: state.activities,
						onChange: (event) => set("activities", event.target.value),
						placeholder: "Mirror drills\nPicture naming\nSentence repetition"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
					id: "session-materials",
					label: "Materials required",
					hint: "One per line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "session-materials",
						rows: 4,
						value: state.materials,
						onChange: (event) => set("materials", event.target.value),
						placeholder: "Articulation card set\nMirror station"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "session-outcome",
				label: "Expected outcome",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "session-outcome",
					rows: 2,
					value: state.expectedOutcome,
					onChange: (event) => set("expectedOutcome", event.target.value),
					placeholder: "e.g. Independent target sound production in 8 of 10 words"
				})
			})
		]
	});
}
function StepReview({ state, patient }) {
	const lines = (value) => value.split("\n").map((item) => item.trim()).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: "info",
						label: state.mode,
						dot: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: "neutral",
						label: state.program,
						dot: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: "warning",
						label: "Not scheduled yet"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
						title: "Patient",
						children: patient ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Name",
									value: patient.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Patient ID",
									value: patient.code
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Age",
									value: `${patient.age} years`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Guardian",
									value: patient.guardian.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Phone",
									value: patient.guardian.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Package",
									value: patient.billing.packageName
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] text-muted-foreground",
							children: "No patient selected."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
						title: "Therapy",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Therapy type",
									value: state.mode
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Program",
									value: state.program
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Session no.",
									value: state.sessionNumber || "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Therapist",
									value: state.therapist || "Not assigned"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Room",
									value: state.room || "Not assigned"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Equipment",
									value: state.equipment.length > 0 ? state.equipment.join(", ") : "None selected"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
						title: "Schedule",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Date",
									value: state.sessionDate ? formatDate(state.sessionDate) : "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Time",
									value: formatTimeRange(state.startTime, state.endTime)
								}),
								state.mode === "Group Therapy" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
										label: "Group",
										value: state.groupName || "Not named"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
										label: "Topic",
										value: state.sessionTopic || "Not set"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
										label: "Children",
										value: state.totalChildren || "—"
									})
								] }) : null
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
						title: "Goals",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Session goal",
									value: state.sessionGoal || "Not set"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Target skills",
									value: state.targetSkills.length > 0 ? state.targetSkills.join(", ") : "None selected"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Activities",
									value: lines(state.activities).join(", ") || "Not set"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Materials",
									value: lines(state.materials).join(", ") || "Not set"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
									label: "Expected outcome",
									value: state.expectedOutcome || "Not set"
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12.5px] text-muted-foreground",
				children: "Nothing is saved yet — this wizard is UI only until the therapy API is connected."
			})
		]
	});
}
function ReviewCard({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "border-b border-border pb-3 text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pt-4",
			children
		})]
	});
}
function NewTherapySessionPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Schedule Therapy",
			description: "Complete five guided steps to schedule a therapy session.",
			breadcrumbs: [
				{
					label: "Branch Manager",
					to: "/manager"
				},
				{
					label: "Therapy Management",
					to: "/manager/therapy"
				},
				{ label: "Schedule Therapy" }
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
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapyWizard, {})]
	});
}
//#endregion
export { NewTherapySessionPage as component };
