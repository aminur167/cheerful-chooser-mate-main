import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { I as Search, dn as Check, ht as MapPin, yt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { C as VISIT_TYPES, a as OUTDOOR_AREAS, f as SUPPORT_STAFF, g as VEHICLES, i as EQUIPMENT_OPTIONS, n as DISTRICTS_BY_DIVISION, r as DIVISIONS, s as OUTDOOR_PATIENTS, u as OUTDOOR_THERAPISTS, y as VISIT_PRIORITIES } from "./outdoor-data-ClUJqde_.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { t as Input } from "./input-BkRQ7J8p.mjs";
import { t as FormField } from "./form-field-DoPU-RoN.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BYMcu4zp.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { t as Textarea } from "./textarea-BRH7-9yv.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-D9_a5hiE.mjs";
import { r as PatientAvatar } from "./patient-table-C8a1NfGg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/schedule-visit-dialog-Cb3CDl2p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		id: 1,
		title: "Select Patient",
		description: "Search an existing outdoor patient"
	},
	{
		id: 2,
		title: "Visit Information",
		description: "Type, schedule, priority and purpose"
	},
	{
		id: 3,
		title: "Location",
		description: "Division, district, area and address"
	},
	{
		id: 4,
		title: "Assign Therapist",
		description: "Team, vehicle and equipment"
	},
	{
		id: 5,
		title: "Review",
		description: "Confirm before scheduling"
	}
];
var EMPTY = {
	patientId: "",
	type: "Home Visit",
	date: "2026-08-03",
	time: "10:00",
	duration: "60 min",
	priority: "Normal",
	purpose: "",
	division: "Dhaka",
	district: "Dhaka",
	area: "Dhanmondi",
	address: "",
	mapLink: "",
	locationNotes: "",
	therapist: OUTDOOR_THERAPISTS[0].name,
	support: SUPPORT_STAFF[0],
	vehicle: VEHICLES[0],
	equipment: ["Speech Cards Set"]
};
/** UI-only 5-step outdoor visit scheduling wizard. Nothing is persisted. */
function ScheduleVisitDialog({ open, onOpenChange }) {
	const [step, setStep] = (0, import_react.useState)(1);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [draft, setDraft] = (0, import_react.useState)(EMPTY);
	const set = (patch) => setDraft((current) => ({
		...current,
		...patch
	}));
	const patient = OUTDOOR_PATIENTS.find((item) => item.id === draft.patientId);
	const results = (0, import_react.useMemo)(() => {
		const term = query.trim().toLowerCase();
		if (!term) return OUTDOOR_PATIENTS.slice(0, 5);
		return OUTDOOR_PATIENTS.filter((item) => [
			item.name,
			item.code,
			item.guardian,
			item.phone
		].join(" ").toLowerCase().includes(term));
	}, [query]);
	const close = () => {
		onOpenChange(false);
		setTimeout(() => {
			setStep(1);
			setQuery("");
			setDraft(EMPTY);
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
	const canContinue = step !== 1 || Boolean(draft.patientId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => next ? onOpenChange(true) : close(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] max-w-2xl overflow-y-auto rounded-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Schedule outdoor visit" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Plan a home visit, school visit or community program for an outdoor patient." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex items-center gap-2 border-b border-border pb-5",
					children: STEPS.map((item) => {
						const state = step === item.id ? "current" : step > item.id ? "done" : "todo";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex min-w-0 flex-1 items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[12px] font-semibold transition-enterprise", state === "current" && "border-primary bg-primary text-primary-foreground", state === "done" && "border-success/40 bg-success/12 text-success", state === "todo" && "border-border bg-muted/50 text-muted-foreground"),
								"aria-current": state === "current" ? "step" : void 0,
								children: state === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }) : item.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden min-w-0 lg:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate text-[12.5px] font-medium text-foreground",
									children: item.title
								})
							})]
						}, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold text-foreground",
						children: current.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12.5px] text-muted-foreground",
						children: current.description
					})]
				}),
				step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: query,
							onChange: (event) => setQuery(event.target.value),
							placeholder: "Search patient name, ID, guardian or phone…",
							"aria-label": "Search existing patient",
							className: "h-9 pl-9"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2",
						children: [results.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => set({
								patientId: item.id,
								area: item.area,
								division: item.division,
								district: item.district
							}),
							"aria-pressed": draft.patientId === item.id,
							className: cn("w-full rounded-xl border p-3.5 text-left transition-enterprise hover:bg-surface-hover", draft.patientId === item.id ? "border-primary/50 bg-primary/5" : "border-border bg-card"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientAvatar, { name: item.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-sm font-medium text-foreground",
												children: item.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "shrink-0 font-mono text-[12px] text-muted-foreground",
												children: item.code
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "truncate text-[12.5px] text-muted-foreground",
											children: [
												item.guardian,
												" (",
												item.relation,
												") · ",
												item.phone
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "truncate text-[12.5px] text-muted-foreground",
											children: [
												item.diagnosis,
												" · ",
												item.therapyProgram
											]
										})
									]
								})]
							})
						}) }, item.id)), results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-xl border border-border p-4 text-center text-[13px] text-muted-foreground",
							children: "No patient matched that search."
						}) : null]
					})]
				}) : step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "visit-type",
							label: "Visit type",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: draft.type,
								onValueChange: (next) => set({ type: next }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "visit-type",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: VISIT_TYPES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: option,
									children: option
								}, option)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "visit-priority",
							label: "Priority",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: draft.priority,
								onValueChange: (next) => set({ priority: next }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "visit-priority",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: VISIT_PRIORITIES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: option,
									children: option
								}, option)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "visit-date",
							label: "Visit date",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "visit-date",
								type: "date",
								value: draft.date,
								onChange: (event) => set({ date: event.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "visit-time",
							label: "Visit time",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "visit-time",
								type: "time",
								value: draft.time,
								onChange: (event) => set({ time: event.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "visit-duration",
							label: "Expected duration",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: draft.duration,
								onValueChange: (next) => set({ duration: next }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "visit-duration",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: [
									"30 min",
									"45 min",
									"60 min",
									"90 min",
									"120 min",
									"180 min"
								].map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: option,
									children: option
								}, option)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "visit-purpose",
							label: "Purpose",
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "visit-purpose",
								rows: 3,
								value: draft.purpose,
								onChange: (event) => set({ purpose: event.target.value }),
								placeholder: "e.g. Weekly articulation therapy and parent coaching."
							})
						})
					]
				}) : step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "division",
							label: "Division",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: draft.division,
								onValueChange: (next) => set({
									division: next,
									district: DISTRICTS_BY_DIVISION[next][0]
								}),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "division",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: DIVISIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: option,
									children: option
								}, option)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "district",
							label: "District",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: draft.district,
								onValueChange: (next) => set({ district: next }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "district",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: (DISTRICTS_BY_DIVISION[draft.division] ?? []).map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: option,
									children: option
								}, option)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "area",
							label: "Area",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: draft.area,
								onValueChange: (next) => set({ area: next }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "area",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: OUTDOOR_AREAS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: option,
									children: option
								}, option)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "map-link",
							label: "Google Map link",
							hint: "Placeholder — no map integration",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "map-link",
								value: draft.mapLink,
								onChange: (event) => set({ mapLink: event.target.value }),
								placeholder: "https://maps.google.com/?q=…"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "address",
							label: "Full address",
							required: true,
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "address",
								rows: 2,
								value: draft.address,
								onChange: (event) => set({ address: event.target.value }),
								placeholder: "House 42, Road 9/A, Dhanmondi, Dhaka 1209"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "location-notes",
							label: "Location notes",
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "location-notes",
								rows: 2,
								value: draft.locationNotes,
								onChange: (event) => set({ locationNotes: event.target.value }),
								placeholder: "Lift available, call guardian before arrival…"
							})
						})
					]
				}) : step === 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "therapist",
							label: "Assigned therapist",
							required: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: draft.therapist,
								onValueChange: (next) => set({ therapist: next }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "therapist",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: OUTDOOR_THERAPISTS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
									value: option.name,
									children: [
										option.name,
										" — ",
										option.status
									]
								}, option.id)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "support",
							label: "Support staff",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: draft.support,
								onValueChange: (next) => set({ support: next }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "support",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: SUPPORT_STAFF.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: option,
									children: option
								}, option)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
							id: "vehicle",
							label: "Vehicle",
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: draft.vehicle,
								onValueChange: (next) => set({ vehicle: next }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									id: "vehicle",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: VEHICLES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: option,
									children: option
								}, option)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-foreground",
								children: "Equipment required"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: EQUIPMENT_OPTIONS.map((option) => {
									const active = draft.equipment.includes(option);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-pressed": active,
										onClick: () => set({ equipment: active ? draft.equipment.filter((item) => item !== option) : [...draft.equipment, option] }),
										className: cn("rounded-full border px-3 py-1.5 text-[12.5px] transition-enterprise", active ? "border-primary/50 bg-primary/10 text-primary" : "border-border text-muted-foreground hover:bg-surface-hover"),
										children: option
									}, option);
								})
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Review, {
					draft,
					patient
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
							}) : null, "Schedule Visit"]
						})] })]
					})]
				})
			]
		})
	});
}
function Review({ draft, patient }) {
	const rows = [
		{
			label: "Patient",
			value: patient ? `${patient.name} (${patient.code})` : "—"
		},
		{
			label: "Guardian",
			value: patient ? `${patient.guardian} · ${patient.phone}` : "—"
		},
		{
			label: "Visit type",
			value: draft.type
		},
		{
			label: "Schedule",
			value: `${draft.date} at ${draft.time} · ${draft.duration}`
		},
		{
			label: "Priority",
			value: draft.priority
		},
		{
			label: "Purpose",
			value: draft.purpose || "—"
		},
		{
			label: "Location",
			value: `${draft.area}, ${draft.district}, ${draft.division}`
		},
		{
			label: "Address",
			value: draft.address || "—"
		},
		{
			label: "Therapist",
			value: draft.therapist
		},
		{
			label: "Support staff",
			value: draft.support
		},
		{
			label: "Vehicle",
			value: draft.vehicle
		},
		{
			label: "Equipment",
			value: draft.equipment.join(", ") || "—"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					label: "Scheduled",
					tone: "info"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					label: draft.type,
					tone: "neutral",
					dot: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 text-[12.5px] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
						className: "h-3.5 w-3.5",
						"aria-hidden": "true"
					}), draft.area]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "divide-y divide-border rounded-xl border border-border",
			children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1 px-4 py-3 text-[13px] sm:grid-cols-[minmax(0,160px)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-muted-foreground",
					children: row.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "font-medium text-foreground",
					children: row.value
				})]
			}, row.label))
		})]
	});
}
//#endregion
export { ScheduleVisitDialog as t };
