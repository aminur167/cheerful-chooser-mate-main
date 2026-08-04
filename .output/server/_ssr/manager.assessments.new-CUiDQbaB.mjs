import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { $t as ClipboardCheck, D as Stethoscope, I as Search, Ln as ArrowLeft, dn as Check, l as UserRound, yt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { _ as SEVERITY_TONE, d as EVALUATION_SKILLS, f as PACKAGE_SUGGESTIONS, g as SEVERITY_OPTIONS, h as SESSION_FREQUENCIES, l as DIAGNOSIS_OPTIONS, o as ASSESSMENT_TYPES, s as ASSESSORS, u as DURATION_OPTIONS, v as THERAPY_RECOMMENDATIONS } from "./assessment-data-VYEbB3BS.mjs";
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
import { n as ScoreRating } from "./score-rating-5Pu6sOfj.mjs";
import { n as AssessmentAvatar } from "./assessment-table-DebW8n3T.mjs";
import { t as Textarea } from "./textarea-BRH7-9yv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.assessments.new-CUiDQbaB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WIZARD_STEPS = [
	{
		id: 1,
		title: "Patient",
		description: "Select the patient record"
	},
	{
		id: 2,
		title: "Assessment",
		description: "Visit details and complaint"
	},
	{
		id: 3,
		title: "Evaluation",
		description: "Clinical skill ratings"
	},
	{
		id: 4,
		title: "Diagnosis",
		description: "Findings and severity"
	},
	{
		id: 5,
		title: "Recommendation",
		description: "Therapy plan and goals"
	},
	{
		id: 6,
		title: "Treatment Plan",
		description: "Package and schedule"
	},
	{
		id: 7,
		title: "Review",
		description: "Confirm and submit"
	}
];
var INITIAL_STATE = {
	patientId: null,
	assessmentDate: "2026-07-31",
	assessmentType: "Initial Assessment",
	assessor: "",
	reasonForVisit: "",
	chiefComplaint: "",
	observationNotes: "",
	scores: Object.fromEntries(EVALUATION_SKILLS.map((skill) => [skill.key, 3])),
	primaryDiagnosis: "",
	secondaryDiagnosis: "",
	severity: "Moderate",
	clinicalSummary: "",
	therapy: "",
	frequency: "Twice a week",
	sessionsPerWeek: "2",
	duration: "3 months",
	goals: "",
	homeInstructions: "",
	packageType: "Session Wise",
	estimatedSessions: "24",
	expectedStart: "",
	expectedReview: ""
};
/**
* UI-only 7-step clinical assessment wizard.
* Nothing is persisted — submission is simulated until the API is connected.
*/
function AssessmentWizard() {
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
			navigate({ to: "/manager/assessments" });
		}, 900);
	};
	const current = WIZARD_STEPS[step - 1];
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
								WIZARD_STEPS.length
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
					}) : step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepAssessment, {
						state,
						set
					}) : step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepEvaluation, {
						scores: state.scores,
						onScore: (key, score) => set("scores", {
							...state.scores,
							[key]: score
						})
					}) : step === 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepDiagnosis, {
						state,
						set
					}) : step === 5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepRecommendation, {
						state,
						set
					}) : step === 6 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepTreatmentPlan, {
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
						onClick: () => navigate({ to: "/manager/assessments" }),
						className: "sm:order-first",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2.5",
						children: [step > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setStep(step - 1),
							children: "Back"
						}) : null, step < WIZARD_STEPS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
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
							onClick: () => submit("complete"),
							disabled: submitting !== null,
							children: [submitting === "complete" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "h-4 w-4 animate-spin",
								"aria-hidden": "true"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), "Complete Assessment"]
						})] })]
					})]
				}),
				step === 1 && !patient ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[12.5px] text-muted-foreground",
					children: "Select a patient to continue to the assessment details."
				}) : null
			]
		})]
	});
}
function StepIndicator({ step, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "hidden items-center gap-2 lg:flex",
		children: WIZARD_STEPS.map((item) => {
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
				}), item.id < WIZARD_STEPS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
					WIZARD_STEPS.length,
					" · ",
					WIZARD_STEPS[step - 1].title
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[12.5px] text-muted-foreground",
				children: [Math.round(step / WIZARD_STEPS.length * 100), "%"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 flex gap-1.5",
			"aria-hidden": "true",
			children: WIZARD_STEPS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1.5 flex-1 rounded-full", item.id <= step ? "bg-primary" : "bg-muted") }, item.id))
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
				id: "patient-search",
				label: "Search existing patient",
				hint: "Search by name, patient ID, phone or guardian",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
						className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "patient-search",
						type: "search",
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "e.g. Rahim Ahmed or PT-1042",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentAvatar, { name: item.name }),
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentAvatar, {
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
							label: "Gender",
							value: patient.gender
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
							label: "Branch",
							value: patient.branch
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[12px] text-muted-foreground",
							children: "Medical summary"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-[13px] leading-relaxed break-words text-foreground",
							children: patient.medical.primaryConcern
						})] })
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
						children: "Pick a patient from the list to load their information card."
					})
				]
			})
		})]
	});
}
function SummaryRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[minmax(0,110px)_minmax(0,1fr)] gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[12px] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "min-w-0 break-words text-[13px] text-foreground",
			children: value
		})]
	});
}
function StepAssessment({ state, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "assessment-date",
				label: "Assessment date",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "assessment-date",
					type: "date",
					value: state.assessmentDate,
					onChange: (event) => set("assessmentDate", event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "assessment-type",
				label: "Assessment type",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: state.assessmentType,
					onValueChange: (value) => set("assessmentType", value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "assessment-type",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select assessment type" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: ASSESSMENT_TYPES.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: type,
						children: type
					}, type)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "assessor",
				label: "Assessed by",
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: state.assessor,
					onValueChange: (value) => set("assessor", value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "assessor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select clinician" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: ASSESSORS.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: name,
						children: name
					}, name)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "reason-for-visit",
				label: "Reason for visit",
				required: true,
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "reason-for-visit",
					rows: 2,
					value: state.reasonForVisit,
					onChange: (event) => set("reasonForVisit", event.target.value),
					placeholder: "e.g. Referred by paediatrician for delayed speech development"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "chief-complaint",
				label: "Chief complaint",
				required: true,
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "chief-complaint",
					rows: 2,
					value: state.chiefComplaint,
					onChange: (event) => set("chiefComplaint", event.target.value),
					placeholder: "Guardian's own words describing the main concern"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "observation-notes",
				label: "Observation notes",
				hint: "Behaviour during the session, cooperation, response to cues",
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "observation-notes",
					rows: 4,
					value: state.observationNotes,
					onChange: (event) => set("observationNotes", event.target.value),
					placeholder: "Clinical observations recorded during the assessment"
				})
			})
		]
	});
}
function StepEvaluation({ scores, onScore }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[13px] text-muted-foreground",
			children: "Rate each domain from 1 (significant concern) to 5 (age appropriate)."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
			children: EVALUATION_SKILLS.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreRating, {
				id: `score-${skill.key}`,
				label: skill.label,
				value: scores[skill.key] ?? 3,
				onChange: (score) => onScore(skill.key, score)
			}, skill.key))
		})]
	});
}
function StepDiagnosis({ state, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "primary-diagnosis",
				label: "Primary diagnosis",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: state.primaryDiagnosis,
					onValueChange: (value) => set("primaryDiagnosis", value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "primary-diagnosis",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select primary diagnosis" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: DIAGNOSIS_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: option,
						children: option
					}, option)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "secondary-diagnosis",
				label: "Secondary diagnosis",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: state.secondaryDiagnosis,
					onValueChange: (value) => set("secondaryDiagnosis", value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "secondary-diagnosis",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select secondary diagnosis" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "None",
						children: "None"
					}), DIAGNOSIS_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: option,
						children: option
					}, option))] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "severity",
				label: "Severity",
				required: true,
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "severity",
					className: "grid gap-3 sm:grid-cols-3",
					children: SEVERITY_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": state.severity === option,
						onClick: () => set("severity", option),
						className: cn("rounded-lg border p-4 text-left transition-enterprise", state.severity === option ? "border-primary bg-primary/8" : "border-border bg-card hover:bg-surface-hover"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[13px] font-semibold text-foreground",
								children: option
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: SEVERITY_TONE[option],
								label: option,
								dot: false
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block text-[12px] text-muted-foreground",
							children: option === "Mild" ? "Minimal functional impact" : option === "Moderate" ? "Noticeable impact on daily communication" : "Significant impact requiring intensive support"
						})]
					}, option))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "clinical-summary",
				label: "Clinical summary",
				required: true,
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "clinical-summary",
					rows: 4,
					value: state.clinicalSummary,
					onChange: (event) => set("clinicalSummary", event.target.value),
					placeholder: "Summarise findings, developmental gaps and prognosis"
				})
			})
		]
	});
}
function StepRecommendation({ state, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "recommended-therapy",
				label: "Recommended therapy",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: state.therapy,
					onValueChange: (value) => set("therapy", value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "recommended-therapy",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select therapy" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: THERAPY_RECOMMENDATIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: option,
						children: option
					}, option)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "frequency",
				label: "Frequency",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: state.frequency,
					onValueChange: (value) => set("frequency", value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "frequency",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select frequency" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: SESSION_FREQUENCIES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: option,
						children: option
					}, option)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "sessions-per-week",
				label: "Sessions per week",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "sessions-per-week",
					type: "number",
					min: 1,
					max: 7,
					value: state.sessionsPerWeek,
					onChange: (event) => set("sessionsPerWeek", event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "expected-duration",
				label: "Expected duration",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: state.duration,
					onValueChange: (value) => set("duration", value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "expected-duration",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select duration" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: DURATION_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: option,
						children: option
					}, option)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "goals",
				label: "Therapy goals",
				hint: "One goal per line",
				required: true,
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "goals",
					rows: 4,
					value: state.goals,
					onChange: (event) => set("goals", event.target.value),
					placeholder: "Expand expressive vocabulary to 250 words\nProduce three-word phrases"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "home-instructions",
				label: "Home instructions",
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "home-instructions",
					rows: 3,
					value: state.homeInstructions,
					onChange: (event) => set("homeInstructions", event.target.value),
					placeholder: "Daily practice routine and guidance for guardians"
				})
			})
		]
	});
}
function StepTreatmentPlan({ state, set }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "package-type",
				label: "Suggested package",
				required: true,
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: "package-type",
					className: "grid gap-3 sm:grid-cols-3",
					children: PACKAGE_SUGGESTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": state.packageType === option,
						onClick: () => set("packageType", option),
						className: cn("rounded-lg border p-4 text-left transition-enterprise", state.packageType === option ? "border-primary bg-primary/8" : "border-border bg-card hover:bg-surface-hover"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[13px] font-semibold text-foreground",
							children: option
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-[12px] text-muted-foreground",
							children: option === "Daily" ? "Billed per attended day" : option === "Session Wise" ? "Billed per completed session" : "Fixed monthly programme fee"
						})]
					}, option))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "estimated-sessions",
				label: "Estimated sessions",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "estimated-sessions",
					type: "number",
					min: 1,
					value: state.estimatedSessions,
					onChange: (event) => set("estimatedSessions", event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "expected-start",
				label: "Expected start date",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "expected-start",
					type: "date",
					value: state.expectedStart,
					onChange: (event) => set("expectedStart", event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "expected-review",
				label: "Expected review date",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "expected-review",
					type: "date",
					value: state.expectedReview,
					onChange: (event) => set("expectedReview", event.target.value)
				})
			})
		]
	});
}
function StepReview({ state, patient }) {
	const goals = state.goals.split("\n").map((goal) => goal.trim()).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 lg:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
				title: "Patient",
				icon: UserRound,
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
							label: "Age / Gender",
							value: `${patient.age} yrs · ${patient.gender}`
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
							label: "Branch",
							value: patient.branch
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] text-muted-foreground",
					children: "No patient selected."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
				title: "Assessment & Diagnosis",
				icon: Stethoscope,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Date",
							value: state.assessmentDate ? formatDate(state.assessmentDate) : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Type",
							value: state.assessmentType
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Assessed by",
							value: state.assessor || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Primary",
							value: state.primaryDiagnosis || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Secondary",
							value: state.secondaryDiagnosis || "None"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Severity",
							value: state.severity
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Summary",
							value: state.clinicalSummary || "—"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ReviewCard, {
				title: "Recommendation",
				icon: ClipboardCheck,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Therapy",
							value: state.therapy || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Frequency",
							value: state.frequency
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Sessions / week",
							value: state.sessionsPerWeek
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Duration",
							value: state.duration
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Home plan",
							value: state.homeInstructions || "—"
						})
					]
				}), goals.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 border-t border-border pt-4",
					children: goals.map((goal) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2 text-[13px] text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-success",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 break-words",
							children: goal
						})]
					}, goal))
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, {
				title: "Treatment Plan",
				icon: ClipboardCheck,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Package",
							value: state.packageType
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Estimated sessions",
							value: state.estimatedSessions
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Expected start",
							value: state.expectedStart ? formatDate(state.expectedStart) : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow, {
							label: "Expected review",
							value: state.expectedReview ? formatDate(state.expectedReview) : "—"
						})
					]
				})
			})
		]
	});
}
function ReviewCard({ title, icon: Icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3 border-b border-border pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-muted/50 text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-[18px] w-[18px]",
					"aria-hidden": "true"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "truncate text-[15px] font-semibold tracking-tight text-foreground",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pt-4",
			children
		})]
	});
}
function NewAssessmentPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "New Assessment",
			description: "Complete seven guided steps to record a full clinical assessment.",
			breadcrumbs: [
				{
					label: "Branch Manager",
					to: "/manager"
				},
				{
					label: "Assessment Management",
					to: "/manager/assessments"
				},
				{ label: "New Assessment" }
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
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentWizard, {})]
	});
}
//#endregion
export { NewAssessmentPage as component };
