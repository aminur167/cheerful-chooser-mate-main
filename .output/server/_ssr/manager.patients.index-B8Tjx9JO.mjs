import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { H as RefreshCw, I as Search, Jt as Columns3, Wt as Download, Z as Plus, dn as Check, kt as ImagePlus, m as Upload, s as UsersRound, yt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { _ as calculateAge, a as GUARDIAN_RELATIONS, c as PATIENT_DATE_RANGES, g as THERAPY_TYPES, h as THERAPISTS, i as GENDERS, l as PATIENT_KPIS, m as PROGRAM_OPTIONS, n as BLOOD_GROUPS, o as PACKAGE_OPTIONS, p as PAYMENT_TYPES, r as BRANCH_OPTIONS, s as PATIENTS, u as PATIENT_STATUSES } from "./router-BtnFRLs52.mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { t as Input } from "./input-BkRQ7J8p.mjs";
import { t as FormField } from "./form-field-DoPU-RoN.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BYMcu4zp.mjs";
import { a as DropdownMenuLabel, n as DropdownMenuCheckboxItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-CXFNH1SK.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as EmptyState } from "./empty-state-Bfa0wIfS.mjs";
import { t as KpiCard } from "./kpi-card-BH70wzWL.mjs";
import { t as TablePagination } from "./table-pagination-BEFzaEO7.mjs";
import { t as Textarea } from "./textarea-BRH7-9yv.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-D9_a5hiE.mjs";
import { i as PatientTable, n as PATIENT_COLUMNS, t as DEFAULT_VISIBLE_COLUMNS } from "./patient-table-C8a1NfGg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.patients.index-B8Tjx9JO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEFAULT_PATIENT_FILTERS = {
	search: "",
	status: "all",
	therapyType: "all",
	paymentType: "all",
	gender: "all",
	range: "all",
	branch: "all"
};
function PatientFilters({ value, onChange, onRefresh, isRefreshing = false, visibleColumns, onToggleColumn }) {
	const set = (patch) => onChange({
		...value,
		...patch
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 border-b border-border px-4 py-3.5 sm:px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full lg:max-w-[340px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "search",
					value: value.search,
					onChange: (event) => set({ search: event.target.value }),
					placeholder: "Search name, phone, patient ID or guardian…",
					"aria-label": "Search patients",
					className: "h-9 bg-muted/40 pl-9 shadow-none"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 flex-wrap items-center gap-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						onClick: onRefresh,
						disabled: isRefreshing,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
							className: isRefreshing ? "h-4 w-4 animate-spin" : "h-4 w-4",
							"aria-hidden": "true"
						}), "Refresh"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Export"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Columns3, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), "Columns"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						className: "w-52",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Visible columns" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
							PATIENT_COLUMNS.filter((column) => column.hideable).map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
								checked: visibleColumns.includes(column.key),
								onCheckedChange: () => onToggleColumn(column.key),
								onSelect: (event) => event.preventDefault(),
								children: column.label
							}, column.key))
						]
					})] })
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Patient status",
					placeholder: "Status",
					width: "w-[170px]",
					value: value.status,
					onValueChange: (status) => set({ status }),
					allLabel: "All statuses",
					options: PATIENT_STATUSES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Therapy type",
					placeholder: "Therapy",
					width: "w-[170px]",
					value: value.therapyType,
					onValueChange: (therapyType) => set({ therapyType }),
					allLabel: "All therapies",
					options: THERAPY_TYPES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Payment type",
					placeholder: "Payment",
					width: "w-[160px]",
					value: value.paymentType,
					onValueChange: (paymentType) => set({ paymentType }),
					allLabel: "All payment types",
					options: PAYMENT_TYPES
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Gender",
					placeholder: "Gender",
					width: "w-[130px]",
					value: value.gender,
					onValueChange: (gender) => set({ gender }),
					allLabel: "All genders",
					options: GENDERS
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: value.range,
					onValueChange: (range) => set({ range }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-9 w-[160px]",
						"aria-label": "Filter by registration date",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Date range" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: PATIENT_DATE_RANGES.map((range) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: range.key,
						children: range.label
					}, range.key)) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterSelect, {
					label: "Branch",
					placeholder: "Branch",
					width: "w-[180px]",
					value: value.branch,
					onValueChange: (branch) => set({ branch }),
					allLabel: "All branches",
					options: BRANCH_OPTIONS
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					className: "text-muted-foreground",
					onClick: () => onChange(DEFAULT_PATIENT_FILTERS),
					children: "Reset"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-auto hidden text-[12px] text-muted-foreground xl:inline",
					children: "Filters apply instantly and combine with the search box"
				})
			]
		})]
	});
}
function FilterSelect({ label, placeholder, width, value, onValueChange, allLabel, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
		value,
		onValueChange,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
			className: `h-9 ${width}`,
			"aria-label": `Filter by ${label.toLowerCase()}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
			value: "all",
			children: allLabel
		}), options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
			value: option,
			children: option
		}, option))] })]
	});
}
var STEPS = [
	{
		id: 1,
		title: "Personal",
		description: "Identity and contact details"
	},
	{
		id: 2,
		title: "Guardian",
		description: "Primary caregiver information"
	},
	{
		id: 3,
		title: "Medical",
		description: "Concerns and clinical history"
	},
	{
		id: 4,
		title: "Programme",
		description: "Therapy plan and scheduling"
	},
	{
		id: 5,
		title: "Payment",
		description: "Billing setup and fees"
	}
];
/**
* UI-only multi-step patient registration flow.
* No data is persisted — submission is simulated until the API is connected.
*/
function RegisterPatientDialog({ open, onOpenChange }) {
	const [step, setStep] = (0, import_react.useState)(1);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [dob, setDob] = (0, import_react.useState)("");
	const age = (0, import_react.useMemo)(() => calculateAge(dob), [dob]);
	const close = () => {
		onOpenChange(false);
		setTimeout(() => setStep(1), 200);
	};
	const submit = () => {
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			close();
		}, 900);
	};
	const current = STEPS[step - 1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) close();
			else onOpenChange(true);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[92vh] max-w-3xl overflow-y-auto rounded-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Register patient" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Complete five short steps to create a new patient record." })] }),
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
									className: "hidden min-w-0 lg:block",
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
					className: "lg:hidden",
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
				step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepPersonal, {
					dob,
					onDobChange: setDob,
					age
				}) : step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepGuardian, {}) : step === 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepMedical, {}) : step === 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepProgramme, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepPayment, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 border-t border-border pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: close,
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [step > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setStep(step - 1),
							children: "Back"
						}) : null, step < STEPS.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setStep(step + 1),
							children: "Continue"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: submit,
							disabled: submitting,
							children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
								className: "h-4 w-4 animate-spin",
								"aria-hidden": "true"
							}) : null, "Register patient"]
						})]
					})]
				})
			]
		})
	});
}
function StepPersonal({ dob, onDobChange, age }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-photo",
				label: "Patient photo",
				hint: "JPG or PNG, up to 2 MB",
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 rounded-lg border border-dashed border-border bg-muted/30 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-14 w-14 shrink-0 place-items-center rounded-full border border-border bg-background text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, {
							className: "h-5 w-5",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-medium text-foreground",
							children: "Upload placeholder"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12.5px] text-muted-foreground",
							children: "Photo upload is enabled once storage is connected."
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-name",
				label: "Full name",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "patient-name",
					placeholder: "e.g. Rahim Ahmed"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-dob",
				label: "Date of birth",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "patient-dob",
					type: "date",
					value: dob,
					onChange: (event) => onDobChange(event.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-age",
				label: "Age",
				hint: "Calculated automatically from date of birth",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "patient-age",
					readOnly: true,
					value: age ? `${age} years` : "",
					placeholder: "—",
					className: "bg-muted/40"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-gender",
				label: "Gender",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					id: "patient-gender",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select gender" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: GENDERS.map((gender) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: gender,
					children: gender
				}, gender)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-blood",
				label: "Blood group",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					id: "patient-blood",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select blood group" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: BLOOD_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: group,
					children: group
				}, group)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-phone",
				label: "Contact number",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "patient-phone",
					placeholder: "+880 17XX-XXXXXX"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "patient-address",
				label: "Address",
				required: true,
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "patient-address",
					rows: 2,
					placeholder: "House, road, area, city, postcode"
				})
			})
		]
	});
}
function StepGuardian() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "guardian-name",
				label: "Guardian name",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "guardian-name",
					placeholder: "e.g. Md. Karim Ahmed"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "guardian-relation",
				label: "Relationship",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					id: "guardian-relation",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select relationship" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: GUARDIAN_RELATIONS.map((relation) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: relation,
					children: relation
				}, relation)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "guardian-phone",
				label: "Phone",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "guardian-phone",
					placeholder: "+880 17XX-XXXXXX"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "guardian-email",
				label: "Email",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "guardian-email",
					type: "email",
					placeholder: "guardian@example.com"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "guardian-occupation",
				label: "Occupation",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "guardian-occupation",
					placeholder: "e.g. Bank Officer"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "emergency-contact",
				label: "Emergency contact",
				hint: "Alternate number reachable during sessions",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "emergency-contact",
					placeholder: "+880 18XX-XXXXXX"
				})
			})
		]
	});
}
function StepMedical() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "primary-concern",
				label: "Primary concern",
				required: true,
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "primary-concern",
					rows: 2,
					placeholder: "e.g. Delayed speech development and unclear articulation"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "diagnosis",
				label: "Diagnosis",
				hint: "Structured diagnosis codes arrive with the clinical module",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					disabled: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						id: "diagnosis",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Available after assessment" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "placeholder",
						children: "Placeholder"
					}) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "referral-doctor",
				label: "Referral doctor",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "referral-doctor",
					placeholder: "e.g. Dr. Sabrina Chowdhury"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "medical-history",
				label: "Medical history",
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "medical-history",
					rows: 3,
					placeholder: "Birth history, hearing status, previous therapy, medications…"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "medical-notes",
				label: "Notes",
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "medical-notes",
					rows: 2,
					placeholder: "Internal notes for the clinical team"
				})
			})
		]
	});
}
function StepProgramme() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "therapy-type",
				label: "Therapy type",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					id: "therapy-type",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select therapy type" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: THERAPY_TYPES.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: type,
					children: type
				}, type)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "programme",
				label: "Programme",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					id: "programme",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select programme" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: PROGRAM_OPTIONS.map((programme) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: programme,
					children: programme
				}, programme)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "assessment-date",
				label: "Assessment date",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "assessment-date",
					type: "date"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "assigned-therapist",
				label: "Assigned therapist",
				hint: "Live availability arrives with the scheduling module",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					id: "assigned-therapist",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select therapist" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: THERAPISTS.map((therapist) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: therapist,
					children: therapist
				}, therapist)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "expected-start",
				label: "Expected start date",
				className: "sm:col-span-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "expected-start",
					type: "date"
				})
			})
		]
	});
}
function StepPayment() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 py-2 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "payment-type",
				label: "Payment type",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					id: "payment-type",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select payment type" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: PAYMENT_TYPES.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: type,
					children: type
				}, type)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "package",
				label: "Package",
				hint: "Package catalogue is managed in the billing module",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					id: "package",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select package" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: PACKAGE_OPTIONS.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: option,
					children: option
				}, option)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "registration-fee",
				label: "Registration fee (৳)",
				required: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "registration-fee",
					type: "number",
					defaultValue: 1e3,
					min: 0
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormField, {
				id: "payment-remarks",
				label: "Remarks",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "payment-remarks",
					placeholder: "e.g. Guardian pays by bKash"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-muted/30 p-4 sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] font-medium text-foreground",
					children: "Billing is not charged yet"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[12.5px] text-muted-foreground",
					children: "Invoices and receipts are generated once the payments module is connected."
				})]
			})
		]
	});
}
var PAGE_SIZE = 8;
function withinRange(registeredAt, range) {
	if (range === "all") return true;
	const days = range === "30d" ? 30 : range === "90d" ? 90 : 365;
	const cutoff = Date.now() - days * 24 * 60 * 60 * 1e3;
	return new Date(registeredAt).getTime() >= cutoff;
}
function PatientManagementPage() {
	const [filters, setFilters] = (0, import_react.useState)(DEFAULT_PATIENT_FILTERS);
	const [page, setPage] = (0, import_react.useState)(1);
	const [createOpen, setCreateOpen] = (0, import_react.useState)(false);
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	const [visibleColumns, setVisibleColumns] = (0, import_react.useState)(DEFAULT_VISIBLE_COLUMNS);
	const filtered = (0, import_react.useMemo)(() => {
		const query = filters.search.trim().toLowerCase();
		return PATIENTS.filter((patient) => {
			return (!query || [
				patient.name,
				patient.code,
				patient.phone,
				patient.guardian.phone,
				patient.guardian.name
			].join(" ").toLowerCase().includes(query)) && (filters.status === "all" || patient.status === filters.status) && (filters.therapyType === "all" || patient.program.therapyType === filters.therapyType) && (filters.paymentType === "all" || patient.billing.paymentType === filters.paymentType) && (filters.gender === "all" || patient.gender === filters.gender) && (filters.branch === "all" || patient.branch === filters.branch) && withinRange(patient.registeredAt, filters.range);
		});
	}, [filters]);
	const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
	const currentPage = Math.min(page, pageCount);
	const rows = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
	const refresh = () => {
		setRefreshing(true);
		setTimeout(() => setRefreshing(false), 700);
	};
	const toggleColumn = (key) => setVisibleColumns((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Patient Management",
				description: "Manage all patients, registrations and therapy journeys.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Patient Management" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						disabled: true,
						title: "Import arrives with the data migration tool",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Import"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Export"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setCreateOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Register Patient"]
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Patient summary",
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6",
				children: PATIENT_KPIS.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, { kpi }, kpi.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Patients",
				className: "overflow-hidden rounded-xl border border-border bg-card shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientFilters, {
					value: filters,
					onChange: (next) => {
						setFilters(next);
						setPage(1);
					},
					onRefresh: refresh,
					isRefreshing: refreshing,
					visibleColumns,
					onToggleColumn: toggleColumn
				}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
					icon: UsersRound,
					title: "No Patients Found",
					description: "Start by registering your first patient. Registered patients appear here with therapy progress, packages and payment status.",
					action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => setCreateOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Register Patient"]
					}),
					secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: () => setFilters(DEFAULT_PATIENT_FILTERS),
						children: "Reset filters"
					}),
					className: "rounded-none border-0 shadow-none"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientTable, {
					rows,
					visibleColumns
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border px-4 py-3.5 sm:px-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TablePagination, {
						page: currentPage,
						pageSize: PAGE_SIZE,
						total: filtered.length,
						onPageChange: setPage
					})
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegisterPatientDialog, {
				open: createOpen,
				onOpenChange: setCreateOpen
			})
		]
	});
}
//#endregion
export { PatientManagementPage as component };
