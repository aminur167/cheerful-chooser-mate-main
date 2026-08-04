import { $ as PhoneCall, $t as ClipboardCheck, D as Stethoscope, E as StickyNote, Hn as Activity, Ln as ArrowLeft, Lt as FileText, Nt as HeartPulse, O as Sparkles, Q as Phone, Qt as ClipboardList, a as Wallet, c as User, gn as CalendarPlus, gt as Mail, ht as MapPin, i as Waves, kn as Banknote, o as Users, u as UserPlus, vn as CalendarClock, y as TriangleAlert } from "../_libs/lucide-react.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
import { p as Route$9 } from "./router-BtnFRLs5.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { d as PATIENT_STATUS_TONE, f as PAYMENT_STATUS_TONE } from "./router-BtnFRLs52.mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { t as Badge } from "./badge-Ba0i6QGo.mjs";
import { n as formatDate } from "./breadcrumbs-CW6ykn0r.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as Card } from "./card-Ce78aY8w.mjs";
import { t as Progress } from "./progress-DYQcnTxt.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { t as WidgetCard } from "./widget-card-Dbo4snDS.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-S-rv8pR7.mjs";
import { r as PatientAvatar } from "./patient-table-C8a1NfGg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.patients._patientId-PGuQNSe4.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Professional placeholder used by patient profile tabs whose
* business module has not been built yet.
*/
function ComingSoonCard({ icon: Icon = Sparkles, title, description, capabilities, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card sm:p-8", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-start gap-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-background text-primary shadow-xs",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-5 w-5",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[15px] font-semibold tracking-tight text-foreground",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground",
							children: description
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "info",
					children: "Coming soon"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 grid gap-3 sm:grid-cols-2",
				children: capabilities.map((capability) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start gap-2.5 rounded-lg border border-border bg-muted/30 px-3.5 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[13px] leading-relaxed text-muted-foreground",
						children: capability
					})]
				}, capability))
			})]
		})]
	});
}
var toneClass = {
	success: "border-success/35 bg-success/12 text-success",
	warning: "border-warning/40 bg-warning/15 text-warning",
	danger: "border-danger/35 bg-danger/12 text-danger",
	info: "border-primary/30 bg-primary/10 text-primary",
	neutral: "border-border bg-muted/50 text-muted-foreground"
};
/** Icons live in the view layer so timeline data stays serialisable across SSR. */
var timelineIcon = {
	registered: UserPlus,
	assessment: ClipboardCheck,
	therapy: Waves,
	payment: Banknote,
	call: PhoneCall
};
function PatientTimeline({ events }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
		className: "relative space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute left-[17px] top-2 bottom-2 w-px bg-border",
			"aria-hidden": "true"
		}), events.map((event) => {
			const Icon = timelineIcon[event.icon];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative flex gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border", toneClass[event.tone]),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1 pt-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-foreground",
							children: event.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
							dateTime: event.date,
							className: "shrink-0 text-[12px] tabular-nums text-muted-foreground",
							children: formatDate(event.date)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[13px] leading-relaxed text-muted-foreground",
						children: event.description
					})]
				})]
			}, event.id);
		})]
	});
}
var TABS = [
	{
		value: "overview",
		label: "Overview"
	},
	{
		value: "assessment",
		label: "Assessment"
	},
	{
		value: "therapy",
		label: "Therapy"
	},
	{
		value: "payments",
		label: "Payments"
	},
	{
		value: "followup",
		label: "Follow-up"
	},
	{
		value: "documents",
		label: "Documents"
	},
	{
		value: "notes",
		label: "Notes"
	},
	{
		value: "timeline",
		label: "Activity Timeline"
	}
];
function PatientProfilePage() {
	const { patient } = Route$9.useLoaderData();
	const { tab } = Route$9.useSearch();
	const navigate = Route$9.useNavigate();
	const activeTab = TABS.some((item) => item.value === tab) ? tab : "overview";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: patient.name,
				description: `${patient.code} · ${patient.age} years · ${patient.gender} · ${patient.branch}`,
				breadcrumbs: [
					{
						label: "Branch Manager",
						to: "/manager"
					},
					{
						label: "Patient Management",
						to: "/manager/patients"
					},
					{ label: patient.name }
				],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/manager/patients",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Back"]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileHeader, { patient }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					value: activeTab,
					onValueChange: (next) => navigate({ search: { tab: next } }),
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "-mx-1 overflow-x-auto px-1 pb-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
								className: "w-max",
								children: TABS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: item.value,
									children: item.label
								}, item.value))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "overview",
							className: "mt-6 space-y-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewTab, { patient })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "assessment",
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonCard, {
								icon: ClipboardCheck,
								title: "Assessment records",
								description: "Standardised assessment forms, scoring and clinical reports for this patient will appear here.",
								capabilities: [
									"Initial and periodic assessment forms",
									"Automatic score calculation and severity bands",
									"Therapist observations with attachments",
									"Printable assessment report for guardians"
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "therapy",
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonCard, {
								icon: Waves,
								title: "Therapy sessions",
								description: "Session-by-session therapy planning, attendance and progress tracking for this patient.",
								capabilities: [
									"Session plans mapped to programme goals",
									"Attendance and cancellation history",
									"Goal-wise progress charts over time",
									"Home practice assignments for guardians"
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "payments",
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonCard, {
								icon: Wallet,
								title: "Payments and invoices",
								description: "Full billing ledger with invoices, receipts and outstanding balances for this patient.",
								capabilities: [
									"Invoice and receipt history with ৳ totals",
									"Package purchases and instalment schedules",
									"Partial payments and adjustment notes",
									"Due reminders sent to the guardian"
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "followup",
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonCard, {
								icon: PhoneCall,
								title: "Follow-up management",
								description: "Scheduled follow-up calls, outcomes and re-engagement tasks for this patient.",
								capabilities: [
									"Follow-up queue with owner and due date",
									"Call outcome logging and next action",
									"Automatic follow-up after missed sessions",
									"Guardian satisfaction check-ins"
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "documents",
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonCard, {
								icon: FileText,
								title: "Documents",
								description: "Referral letters, medical reports and consent forms stored against this patient record.",
								capabilities: [
									"Secure upload of referrals and reports",
									"Consent form versioning and signatures",
									"Document type tagging and expiry alerts",
									"Download bundle for external specialists"
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "notes",
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComingSoonCard, {
								icon: StickyNote,
								title: "Clinical notes",
								description: "Chronological internal notes from therapists, managers and the front desk.",
								capabilities: [
									"Rich text notes with author and timestamp",
									"Pin important notes to the profile header",
									"Role-based visibility for sensitive notes",
									"Mentions to notify colleagues"
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
							value: "timeline",
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
								title: "Activity timeline",
								description: "Complete history of this patient's journey",
								icon: Activity,
								showMenu: false,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientTimeline, { events: patient.timeline })
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileSidebar, { patient })]
			})
		]
	});
}
function ProfileHeader({ patient }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "p-5 sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientAvatar, {
					name: patient.name,
					className: "h-16 w-16 text-lg sm:h-20 sm:w-20 sm:text-xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-semibold tracking-tight text-foreground",
								children: patient.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: PATIENT_STATUS_TONE[patient.status],
								label: patient.status
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
								tone: PAYMENT_STATUS_TONE[patient.paymentStatus],
								label: patient.paymentStatus
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13px] text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderMeta, {
								label: "Patient ID",
								value: patient.code,
								mono: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderMeta, {
								label: "Age",
								value: `${patient.age} years`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderMeta, {
								label: "Gender",
								value: patient.gender
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderMeta, {
								label: "Guardian",
								value: patient.guardian.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderMeta, {
								label: "Phone",
								value: patient.guardian.phone
							})
						]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap lg:justify-end",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Assessment"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Therapy"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Collect Payment"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Follow-up"]
					})
				]
			})]
		})
	});
}
function HeaderMeta({ label, value, mono = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-w-0 items-center gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "shrink-0 text-[12px] uppercase tracking-[0.06em] text-muted-foreground/80",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: `truncate text-foreground ${mono ? "font-mono text-[12.5px]" : ""}`,
			children: value
		})]
	});
}
function OverviewTab({ patient }) {
	const progress = patient.program.sessionsPlanned > 0 ? Math.round(patient.program.sessionsCompleted / patient.program.sessionsPlanned * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
				title: "Personal information",
				description: "Identity and contact details",
				icon: User,
				showMenu: false,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full name",
							value: patient.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Patient ID",
							value: patient.code
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Date of birth",
							value: formatDate(patient.dob)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Age",
							value: `${patient.age} years`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Gender",
							value: patient.gender
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Blood group",
							value: patient.bloodGroup
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							icon: Phone,
							label: "Contact number",
							value: patient.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							icon: Mail,
							label: "Email",
							value: patient.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							icon: MapPin,
							label: "Address",
							value: patient.address,
							className: "sm:col-span-2"
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
				title: "Guardian information",
				description: "Primary caregiver and point of contact",
				icon: Users,
				showMenu: false,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Guardian name",
							value: patient.guardian.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Relationship",
							value: patient.guardian.relation
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							icon: Phone,
							label: "Phone",
							value: patient.guardian.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							icon: Mail,
							label: "Email",
							value: patient.guardian.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Occupation",
							value: patient.guardian.occupation
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Registered on",
							value: formatDate(patient.registeredAt)
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 rounded-lg border border-warning/30 bg-warning/8 p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
							className: "mt-0.5 h-4 w-4 shrink-0 text-warning",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] font-medium text-foreground",
								children: "Emergency contact"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-0.5 text-[13px] text-muted-foreground",
								children: [
									patient.emergencyContact.name,
									" (",
									patient.emergencyContact.relation,
									") ·",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums",
										children: patient.emergencyContact.phone
									})
								]
							})]
						})]
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
			title: "Medical summary",
			description: "Clinical background captured at registration",
			icon: Stethoscope,
			showMenu: false,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Primary concern",
						value: patient.medical.primaryConcern
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Diagnosis",
						value: patient.medical.diagnosis
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Referral doctor",
						value: patient.medical.referralDoctor
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Blood group",
						value: patient.bloodGroup
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Medical history",
						value: patient.medical.history,
						className: "sm:col-span-2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Notes",
						value: patient.medical.notes,
						className: "sm:col-span-2"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
				title: "Current therapy",
				description: "Assigned programme and progress",
				icon: Waves,
				showMenu: false,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Therapy type",
							value: patient.program.therapyType
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Programme",
							value: patient.program.program
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Assigned therapist",
							value: patient.program.therapist
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Assessment date",
							value: formatDate(patient.program.assessmentDate)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Expected start",
							value: formatDate(patient.program.expectedStart)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Sessions",
							value: patient.program.sessionsPlanned > 0 ? `${patient.program.sessionsCompleted} of ${patient.program.sessionsPlanned} completed` : "Not started"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between text-[12.5px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Programme progress"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium tabular-nums text-foreground",
							children: [progress, "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: progress })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
				title: "Current package & payments",
				description: "Billing setup and outstanding balance",
				icon: Banknote,
				showMenu: false,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid gap-5 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Package",
							value: patient.billing.packageName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Payment type",
							value: patient.billing.paymentType
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Registration fee",
							value: formatTaka(patient.billing.registrationFee)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Total billed",
							value: formatTaka(patient.billing.totalBilled)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Total paid",
							value: formatTaka(patient.billing.totalPaid)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Outstanding due",
							value: formatTaka(patient.billing.due)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Last payment",
							value: `${formatTaka(patient.billing.lastPaymentAmount)} on ${formatDate(patient.billing.lastPaymentDate)}`,
							className: "sm:col-span-2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Remarks",
							value: patient.billing.remarks,
							className: "sm:col-span-2"
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
				title: "Upcoming appointment",
				description: "Next scheduled visit for this patient",
				icon: CalendarClock,
				showMenu: false,
				children: patient.nextSession ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-muted/30 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-foreground",
							children: formatDate(patient.nextSession)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-0.5 text-[13px] text-muted-foreground",
							children: [
								patient.program.therapyType,
								" with ",
								patient.program.therapist
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Reschedule"]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-dashed border-border bg-muted/20 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] text-muted-foreground",
						children: "No upcoming appointment scheduled for this patient."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						className: "mt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Schedule session"]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
				title: "Latest follow-up",
				description: "Most recent guardian contact",
				icon: PhoneCall,
				showMenu: false,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-border bg-muted/30 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] leading-relaxed text-foreground",
						children: patient.followUp.note
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2.5 text-[12.5px] text-muted-foreground",
						children: [
							formatDate(patient.followUp.date),
							" · ",
							patient.followUp.by
						]
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
			title: "Activity timeline",
			description: "Key milestones in this patient's journey",
			icon: Activity,
			showMenu: false,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatientTimeline, { events: patient.timeline })
		})
	] });
}
function ProfileSidebar({ patient }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		"aria-label": "Patient quick facts",
		className: "space-y-4 xl:sticky xl:top-24 xl:self-start",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SideWidget, {
				icon: ClipboardList,
				label: "Patient status",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: PATIENT_STATUS_TONE[patient.status],
					label: patient.status
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-[12.5px] text-muted-foreground",
					children: ["Registered ", formatDate(patient.registeredAt)]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SideWidget, {
				icon: CalendarClock,
				label: "Next appointment",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold text-foreground",
					children: patient.nextSession ? formatDate(patient.nextSession) : "Not scheduled"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[12.5px] text-muted-foreground",
					children: patient.nextSession ? patient.program.therapyType : "Awaiting scheduling"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SideWidget, {
				icon: Banknote,
				label: "Last payment",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold tabular-nums text-foreground",
					children: formatTaka(patient.billing.lastPaymentAmount)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[12.5px] text-muted-foreground",
					children: formatDate(patient.billing.lastPaymentDate)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SideWidget, {
				icon: Wallet,
				label: "Outstanding due",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `text-sm font-semibold tabular-nums ${patient.billing.due > 0 ? "text-danger" : "text-success"}`,
					children: formatTaka(patient.billing.due)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[12.5px] text-muted-foreground",
					children: patient.billing.due > 0 ? "Collection pending" : "No balance outstanding"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SideWidget, {
				icon: HeartPulse,
				label: "Latest follow-up",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] leading-relaxed text-foreground",
					children: patient.followUp.note
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-[12.5px] text-muted-foreground",
					children: [
						formatDate(patient.followUp.date),
						" · ",
						patient.followUp.by
					]
				})]
			})
		]
	});
}
function SideWidget({ icon: Icon, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		interactive: true,
		className: "p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border bg-muted/50 text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "min-w-0 truncate text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3",
			children
		})]
	});
}
function Field({ icon: Icon, label, value, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-start gap-2.5 ${className ?? ""}`,
		children: [Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "mt-1 h-4 w-4 shrink-0 text-muted-foreground",
			"aria-hidden": "true"
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-[12px] text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "text-sm leading-relaxed break-words text-foreground",
				children: value
			})]
		})]
	});
}
//#endregion
export { PatientProfilePage as component };
