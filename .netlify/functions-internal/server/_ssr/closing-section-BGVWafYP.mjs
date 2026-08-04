import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { $ as PhoneCall, $t as ClipboardCheck, C as Sunset, Dt as Italic, Hn as Activity, J as Printer, Lt as FileText, S as Target, St as ListOrdered, Tn as Bold, Ut as Droplets, Vt as Eye, W as Redo2, Xt as CloudRain, Zt as Clock, a as Wallet, an as CircleCheck, bt as List, en as Circle, g as Underline, h as Undo2, mt as MapPinned, q as Quote, r as Wind, st as NotebookPen, u as UserPlus, vn as CalendarClock, vt as LockKeyhole, w as Sunrise, xn as Building2, xt as ListTodo, z as Save } from "../_libs/lucide-react.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
import { B as TODAYS_GOALS, F as PENDING_TASKS, G as WEATHER_TODAY, H as TODAYS_SUMMARY, I as PERFORMANCE_RINGS, O as DAILY_TIMELINE, P as NOTE_FIELDS, U as TODAY_LABEL, V as TODAYS_REPORT, W as UPCOMING_TOMORROW, b as CLOSING_CHECKLIST, k as DEFAULT_NOTES, x as DAILY_BRANCH } from "./router-BtnFRLs5.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { t as Label } from "./label-BuyUo1jU.mjs";
import { t as Checkbox } from "./checkbox-D-w2BP21.mjs";
import { t as Card } from "./card-Ce78aY8w.mjs";
import { t as Progress } from "./progress-DYQcnTxt.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { t as WidgetCard } from "./widget-card-Dbo4snDS.mjs";
import { t as Textarea } from "./textarea-BRH7-9yv.mjs";
import { t as Separator } from "./separator-BlrYcTzX.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-D9_a5hiE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/closing-section-BGVWafYP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TIMELINE_ICONS = {
	sunrise: Sunrise,
	sunset: Sunset,
	"user-plus": UserPlus,
	clipboard: ClipboardCheck,
	activity: Activity,
	wallet: Wallet,
	phone: PhoneCall,
	map: MapPinned
};
var TONE_ICON = {
	success: "bg-success/12 text-success",
	warning: "bg-warning/15 text-warning",
	danger: "bg-danger/12 text-danger",
	info: "bg-primary/10 text-primary",
	neutral: "bg-muted text-muted-foreground"
};
function TodaysSummaryWidget() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Today's Summary",
		description: "Operational snapshot for Dhaka Main Branch",
		icon: Clock,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
			children: TODAYS_SUMMARY.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-muted/25 px-4 py-3.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "truncate text-[12.5px] font-medium text-muted-foreground",
						children: stat.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1.5 text-[19px] font-semibold leading-none tracking-tight tabular-nums text-foreground",
						children: stat.value
					}),
					stat.hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 truncate text-[12px] text-muted-foreground",
						children: stat.hint
					}) : null
				]
			}, stat.id))
		})
	});
}
function CircularProgress({ value, label, size = 128 }) {
	const radius = size / 2 - 9;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference * (1 - Math.min(100, Math.max(0, value)) / 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative shrink-0",
		style: {
			width: size,
			height: size
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: size,
			height: size,
			viewBox: `0 0 ${size} ${size}`,
			className: "-rotate-90",
			role: "img",
			"aria-label": `${label ?? "Progress"}: ${value}%`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: size / 2,
				cy: size / 2,
				r: radius,
				fill: "none",
				strokeWidth: 9,
				className: "stroke-muted"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: size / 2,
				cy: size / 2,
				r: radius,
				fill: "none",
				strokeWidth: 9,
				strokeLinecap: "round",
				strokeDasharray: circumference,
				strokeDashoffset: offset,
				className: "stroke-primary transition-[stroke-dashoffset] duration-700"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 flex flex-col items-center justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-[20px] font-semibold leading-none tabular-nums text-foreground",
				children: [value, "%"]
			}), label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 max-w-[86px] truncate text-[11.5px] text-muted-foreground",
				children: label
			}) : null]
		})]
	});
}
function PerformanceProgressWidget() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Performance Progress",
		description: "Completion percentage and target achievement",
		icon: Target,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap items-center justify-around gap-6 py-2",
			children: PERFORMANCE_RINGS.map((ring) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-[140px] flex-col items-center text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularProgress, {
					value: ring.value,
					label: ring.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-[170px] text-[12.5px] leading-relaxed text-muted-foreground",
					children: ring.caption
				})]
			}, ring.id))
		})
	});
}
function DailyTimeline({ items = DAILY_TIMELINE }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Today's Timeline",
		description: "Chronological log of branch activities",
		icon: CalendarClock,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "relative space-y-5 pl-1",
			children: items.map((entry, index) => {
				const Icon = TIMELINE_ICONS[entry.icon] ?? CircleCheck;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative flex gap-4",
					children: [
						index < items.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "absolute left-[17px] top-9 h-[calc(100%+4px)] w-px bg-border"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("relative grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-card", TONE_ICON[entry.tone]),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1 pb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-x-2.5 gap-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-foreground",
									children: entry.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md bg-muted px-1.5 py-0.5 text-[11.5px] font-medium tabular-nums text-muted-foreground",
									children: entry.time
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[12.5px] leading-relaxed text-muted-foreground",
								children: entry.detail
							})]
						})
					]
				}, entry.id);
			})
		})
	});
}
function TodaysGoalWidget() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Today's Goal",
		description: "Completed 92% of daily targets",
		icon: Target,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularProgress, {
				value: 92,
				label: "Completed",
				size: 104
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "min-w-0 flex-1 space-y-3",
				children: TODAYS_GOALS.map((goal) => {
					const pct = Math.min(100, Math.round(goal.current / goal.target * 100));
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-2 text-[12.5px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 truncate text-muted-foreground",
								children: goal.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 font-medium tabular-nums text-foreground",
								children: goal.currency ? `${formatTaka(goal.current)} / ${formatTaka(goal.target)}` : `${goal.current}/${goal.target}`
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
							value: pct,
							className: "h-1.5"
						})]
					}, goal.id);
				})
			})]
		})
	});
}
function PendingTasksWidget() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Pending Tasks",
		description: "4 items awaiting action",
		icon: ListTodo,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2.5",
			children: PENDING_TASKS.map((task) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl border border-border bg-muted/25 px-3.5 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "min-w-0 text-[13px] font-medium text-foreground",
						children: task.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: task.tone,
						label: task.tone === "danger" ? "Urgent" : "Open"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 truncate text-[12px] text-muted-foreground",
					children: task.detail
				})]
			}, task.id))
		})
	});
}
function UpcomingTomorrowWidget() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Upcoming Tomorrow",
		description: "Saturday, 1 August 2026",
		icon: CalendarClock,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: UPCOMING_TOMORROW.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 w-[68px] shrink-0 text-[12px] font-medium tabular-nums text-muted-foreground",
					children: item.time
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "min-w-0 text-[13px] leading-relaxed text-foreground",
					children: item.label
				})]
			}, item.id))
		})
	});
}
function WeatherWidget() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
		title: "Weather",
		description: `${WEATHER_TODAY.city} · placeholder feed`,
		icon: CloudRain,
		showMenu: false,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudRain, {
						className: "h-7 w-7",
						"aria-hidden": "true"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[24px] font-semibold leading-none tabular-nums text-foreground",
						children: WEATHER_TODAY.temperature
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1.5 truncate text-[12.5px] text-muted-foreground",
						children: [
							WEATHER_TODAY.condition,
							" · feels ",
							WEATHER_TODAY.feelsLike
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-lg border border-border bg-muted/25 px-3 py-2 text-[12.5px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, {
							className: "h-4 w-4 shrink-0 text-muted-foreground",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Humidity"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-auto font-medium tabular-nums text-foreground",
							children: WEATHER_TODAY.humidity
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-lg border border-border bg-muted/25 px-3 py-2 text-[12.5px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wind, {
							className: "h-4 w-4 shrink-0 text-muted-foreground",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Wind"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-auto font-medium tabular-nums text-foreground",
							children: WEATHER_TODAY.wind
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 rounded-lg bg-warning/10 px-3 py-2 text-[12px] leading-relaxed text-warning",
				children: WEATHER_TODAY.advisory
			})
		]
	});
}
function StatCard({ label, value, hint, icon: Icon, tone = "info" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		interactive: true,
		className: "p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "min-w-0 truncate text-[13px] font-medium text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg", TONE_ICON[tone]),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-[18px] w-[18px]",
						"aria-hidden": "true"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[24px] font-semibold leading-none tracking-tight tabular-nums text-foreground",
				children: value
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2.5 truncate text-[12.5px] text-muted-foreground",
				children: hint
			}) : null
		]
	});
}
var TOOLBAR = [
	{
		id: "bold",
		label: "Bold",
		icon: Bold
	},
	{
		id: "italic",
		label: "Italic",
		icon: Italic
	},
	{
		id: "underline",
		label: "Underline",
		icon: Underline
	},
	{
		id: "bullet",
		label: "Bulleted list",
		icon: List
	},
	{
		id: "numbered",
		label: "Numbered list",
		icon: ListOrdered
	},
	{
		id: "quote",
		label: "Quote",
		icon: Quote
	}
];
/** Rich-text editor placeholder — toolbar is visual only (frontend scope). */
function EditorToolbar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-1 border-b border-border bg-muted/30 px-2 py-1.5",
		children: [
			TOOLBAR.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				size: "icon",
				className: "h-8 w-8 text-muted-foreground",
				"aria-label": tool.label,
				title: `${tool.label} (coming soon)`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(tool.icon, { className: "h-4 w-4" })
			}, tool.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {
				orientation: "vertical",
				className: "mx-1 h-5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				size: "icon",
				className: "h-8 w-8 text-muted-foreground",
				"aria-label": "Undo",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				size: "icon",
				className: "h-8 w-8 text-muted-foreground",
				"aria-label": "Redo",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Redo2, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-auto pr-1 text-[11.5px] text-muted-foreground",
				children: "Rich text coming soon"
			})
		]
	});
}
function ManagerNotesEditor({ initial = DEFAULT_NOTES }) {
	const [notes, setNotes] = (0, import_react.useState)(initial);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-4 border-b border-border px-5 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotebookPen, {
						className: "h-[18px] w-[18px]",
						"aria-hidden": "true"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[15px] font-semibold tracking-tight text-foreground",
						children: "Manager Notes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-[12.5px] text-muted-foreground",
						children: "End-of-day narrative for Dhaka Main Branch — 31 July 2026"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => toast.success("Manager notes saved for today"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Save Notes"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 p-5 xl:grid-cols-2",
			children: NOTE_FIELDS.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: field.id === "tomorrow" ? "space-y-2 xl:col-span-2" : "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-baseline justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: `note-${field.id}`,
						children: field.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11.5px] text-muted-foreground",
						children: field.hint
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-xl border border-border bg-background",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorToolbar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: `note-${field.id}`,
						value: notes[field.id],
						onChange: (event) => setNotes((prev) => ({
							...prev,
							[field.id]: event.target.value
						})),
						placeholder: field.placeholder,
						rows: 5,
						className: "resize-y rounded-none border-0 bg-transparent focus-visible:ring-0"
					})]
				})]
			}, field.id))
		})]
	});
}
function ManagerNotesSummary({ notes = DEFAULT_NOTES }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: "grid gap-4 sm:grid-cols-2",
		children: NOTE_FIELDS.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: field.id === "tomorrow" ? "rounded-xl border border-border bg-muted/25 p-4 sm:col-span-2" : "rounded-xl border border-border bg-muted/25 p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-[12.5px] font-semibold uppercase tracking-[0.06em] text-muted-foreground",
				children: field.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-2 text-[13px] leading-relaxed text-foreground",
				children: notes[field.id]
			})]
		}, field.id))
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-3 border-b border-dashed border-border py-2 last:border-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "min-w-0 text-[12.5px] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "shrink-0 text-[13px] font-medium tabular-nums text-foreground",
			children: value
		})]
	});
}
function Block({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl border border-border p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-[12.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2",
			children
		})]
	});
}
/** Printable end-of-day report preview (visual only). */
function ReportPreview({ report = TODAYS_REPORT }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "space-y-5 rounded-xl bg-card p-1 print:p-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-wrap items-start justify-between gap-4 border-b border-border pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
							className: "h-5 w-5",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[17px] font-semibold tracking-tight text-foreground",
							children: DAILY_BRANCH.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12.5px] text-muted-foreground",
							children: DAILY_BRANCH.address
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[12.5px] text-muted-foreground",
							children: [
								DAILY_BRANCH.code,
								" · ",
								DAILY_BRANCH.phone
							]
						})
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "inline-flex items-center gap-1.5 text-[12.5px] font-medium text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
								className: "h-3.5 w-3.5",
								"aria-hidden": "true"
							}), "Daily Operations Report"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-semibold text-foreground",
							children: report.code
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12.5px] text-muted-foreground",
							children: TODAY_LABEL
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
						title: "Daily Statistics",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Working hours",
								value: report.workingHours
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Opening / closing",
								value: `${report.openingTime} – ${report.closingTime}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Patients served",
								value: String(report.patientsServed)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "New registrations",
								value: String(report.newRegistrations)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Follow-up calls",
								value: String(report.followUps)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Outdoor visits",
								value: String(report.outdoorVisits)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
						title: "Clinical Summary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Assessments",
								value: String(report.assessments)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Individual therapy",
								value: String(report.individualSessions)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Group therapy",
								value: String(report.groupSessions)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Completed sessions",
								value: String(report.completedSessions)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Missed sessions",
								value: String(report.missedSessions)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Cancelled sessions",
								value: String(report.cancelledSessions)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
						title: "Financial Summary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Today's collection",
								value: formatTaka(report.collection)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Due collected",
								value: formatTaka(report.dueCollected)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Discounts",
								value: formatTaka(report.discounts)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Pending due",
								value: formatTaka(report.pendingDue)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Collection target",
								value: formatTaka(report.targetCollection)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
						title: "Inventory Summary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Stock in",
								value: `${report.stockIn} units`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Stock out",
								value: `${report.stockOut} units`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Materials used",
								value: `${report.materialsUsed} items`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Low stock items",
								value: String(report.lowStock)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Performance score",
								value: `${report.performanceScore}%`
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				title: "Manager Notes",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManagerNotesSummary, { notes: report.notes })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "grid gap-8 pt-6 sm:grid-cols-2",
				children: [{
					role: "Branch Manager",
					name: report.manager
				}, {
					role: "Head Office Verification",
					name: "—"
				}].map((sign) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-12 rounded-lg border border-dashed border-border",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12.5px] font-medium text-foreground",
							children: sign.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11.5px] uppercase tracking-[0.08em] text-muted-foreground",
							children: [sign.role, " signature"]
						})
					]
				}, sign.role))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-1.5 text-[11.5px] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
					className: "h-3.5 w-3.5",
					"aria-hidden": "true"
				}), "Print / PDF export is a placeholder in this preview."]
			})
		]
	});
}
function ReportPreviewDialog({ open, onOpenChange, report }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90vh] gap-0 overflow-hidden p-0 sm:max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
					className: "border-b border-border px-6 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Daily Report Preview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Printable end-of-day summary for Dhaka Main Branch." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-[62vh] overflow-y-auto px-6 py-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportPreview, { report })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "border-t border-border px-6 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => onOpenChange(false),
						children: "Close"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => toast.info("PDF export is a placeholder in this build"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Export PDF"]
					})]
				})
			]
		})
	});
}
function EndOfDayClosing({ report }) {
	const [checked, setChecked] = (0, import_react.useState)(Object.fromEntries(CLOSING_CHECKLIST.map((item) => [item.id, item.done])));
	const [previewOpen, setPreviewOpen] = (0, import_react.useState)(false);
	const doneCount = Object.values(checked).filter(Boolean).length;
	const pct = Math.round(doneCount / CLOSING_CHECKLIST.length * 100);
	const ready = doneCount === CLOSING_CHECKLIST.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-4 border-b border-border px-5 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, {
							className: "h-5 w-5",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[16px] font-semibold tracking-tight text-foreground",
							children: "Close Today's Operations"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-[12.5px] text-muted-foreground",
							children: "Complete every checklist item before closing the day."
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-[190px] space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-3 text-[12.5px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Closing readiness"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium tabular-nums text-foreground",
							children: [
								doneCount,
								"/",
								CLOSING_CHECKLIST.length,
								" · ",
								pct,
								"%"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
						value: pct,
						className: "h-1.5"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3 p-5 sm:grid-cols-2",
				children: CLOSING_CHECKLIST.map((item) => {
					const isDone = checked[item.id];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: cn("flex items-start gap-3 rounded-xl border p-4 transition-colors", isDone ? "border-success/30 bg-success/5" : "border-border bg-muted/25"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
							id: `close-${item.id}`,
							checked: isDone,
							onCheckedChange: (value) => setChecked((prev) => ({
								...prev,
								[item.id]: value === true
							})),
							className: "mt-0.5",
							"aria-label": item.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: `close-${item.id}`,
								className: "flex items-center gap-2 text-sm font-medium text-foreground",
								children: [isDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									className: "h-4 w-4 shrink-0 text-success",
									"aria-hidden": "true"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, {
									className: "h-4 w-4 shrink-0 text-muted-foreground",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-w-0 truncate",
									children: item.label
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[12px] leading-relaxed text-muted-foreground",
								children: item.detail
							})]
						})]
					}, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-end gap-2.5 border-t border-border px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => setPreviewOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Preview Report"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					disabled: !ready,
					onClick: () => toast.success("Today's operations closed — report locked for sign-off"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Close Today's Operations"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportPreviewDialog, {
				open: previewOpen,
				onOpenChange: setPreviewOpen,
				report
			})
		]
	});
}
//#endregion
export { ManagerNotesSummary as a, ReportPreviewDialog as c, TodaysSummaryWidget as d, UpcomingTomorrowWidget as f, ManagerNotesEditor as i, StatCard as l, DailyTimeline as n, PendingTasksWidget as o, WeatherWidget as p, EndOfDayClosing as r, PerformanceProgressWidget as s, CircularProgress as t, TodaysGoalWidget as u };
