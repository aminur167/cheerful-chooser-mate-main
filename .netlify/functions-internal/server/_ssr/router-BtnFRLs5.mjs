import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { $ as PhoneCall, $t as ClipboardCheck, Cn as Boxes, Ft as Gauge, Hn as Activity, Nn as BadgeCheck, a as Wallet, at as PackageMinus, in as CircleDollarSign, it as PackagePlus, kn as Banknote, mt as MapPinned, s as UsersRound, u as UserPlus, y as TriangleAlert } from "../_libs/lucide-react.mjs";
import { b as findAssessment } from "./assessment-data-VYEbB3BS.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
import { h as getFollowUp } from "./follow-up-data-ocWJfEAb.mjs";
import { C as movementsForMaterial, S as getMaterial, T as salesForMaterial, w as purchasesForMaterial } from "./material-data-BW4O74XG.mjs";
import { d as OUTDOOR_VISITS } from "./outdoor-data-ClUJqde_.mjs";
import { y as findPaymentProfile } from "./payment-data-DkduNZNP.mjs";
import { h as findTherapySession } from "./therapy-data-GYpM_hnG.mjs";
import { u as findBranch } from "./branch-data-wY6g0_IE.mjs";
import { N as notFound, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { v as findPatient } from "./router-BtnFRLs52.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/daily-report-data-CTotdxDB.js
var DAILY_BRANCH = {
	name: "Dhaka Main Branch",
	code: "BR-DHK-01",
	address: "House 42, Road 11, Dhanmondi, Dhaka 1209",
	phone: "+880 1711-204488",
	manager: "Nusrat Jahan",
	therapists: 9,
	rooms: 6
};
var TODAY_LABEL = "Friday, 31 July 2026";
var DAILY_KPIS = [
	{
		id: "patients",
		label: "Today's Patients",
		value: "42",
		icon: UsersRound,
		tone: "primary",
		hint: "38 attended, 4 no-show",
		delta: {
			value: "+6 vs yesterday",
			direction: "up"
		}
	},
	{
		id: "registrations",
		label: "New Registrations",
		value: "7",
		icon: UserPlus,
		tone: "success",
		hint: "5 walk-in, 2 online",
		delta: {
			value: "+2 vs yesterday",
			direction: "up"
		}
	},
	{
		id: "assessments",
		label: "Today's Assessments",
		value: "9",
		icon: ClipboardCheck,
		tone: "primary",
		hint: "6 initial, 3 re-assessment",
		delta: {
			value: "+1 vs yesterday",
			direction: "up"
		}
	},
	{
		id: "individual",
		label: "Individual Therapy",
		value: "24",
		icon: Activity,
		tone: "primary",
		hint: "21 completed, 3 missed",
		delta: {
			value: "+4 vs yesterday",
			direction: "up"
		}
	},
	{
		id: "group",
		label: "Group Therapy",
		value: "6",
		icon: UsersRound,
		tone: "success",
		hint: "4 groups, 19 patients",
		delta: {
			value: "flat vs yesterday",
			direction: "flat"
		}
	},
	{
		id: "collection",
		label: "Today's Collection",
		value: formatTaka(84500),
		icon: Wallet,
		tone: "success",
		hint: "Cash, card, bKash, bank",
		delta: {
			value: "+11.2% vs yesterday",
			direction: "up"
		}
	},
	{
		id: "due",
		label: "Pending Due Collection",
		value: formatTaka(36200),
		icon: CircleDollarSign,
		tone: "warning",
		hint: "11 patients pending",
		delta: {
			value: "-4.8% vs yesterday",
			direction: "down"
		}
	},
	{
		id: "follow-ups",
		label: "Today's Follow-ups",
		value: "15",
		icon: PhoneCall,
		tone: "primary",
		hint: "12 connected, 3 no answer",
		delta: {
			value: "+3 vs yesterday",
			direction: "up"
		}
	},
	{
		id: "outdoor",
		label: "Outdoor Visits",
		value: "5",
		icon: MapPinned,
		tone: "success",
		hint: "3 home, 2 school",
		delta: {
			value: "+1 vs yesterday",
			direction: "up"
		}
	},
	{
		id: "score",
		label: "Performance Score",
		value: "92%",
		icon: Gauge,
		tone: "success",
		hint: "Target achievement 94%",
		delta: {
			value: "+3 pts vs yesterday",
			direction: "up"
		}
	}
];
var DAILY_TABS = [
	{
		value: "overview",
		label: "Overview"
	},
	{
		value: "patients",
		label: "Patients"
	},
	{
		value: "clinical",
		label: "Clinical Activities"
	},
	{
		value: "finance",
		label: "Finance"
	},
	{
		value: "inventory",
		label: "Inventory"
	},
	{
		value: "notes",
		label: "Manager Notes"
	}
];
var TODAYS_SUMMARY = [
	{
		id: "hours",
		label: "Working Hours",
		value: "9h 30m",
		hint: "08:30 AM – 06:00 PM"
	},
	{
		id: "opening",
		label: "Opening Time",
		value: "08:30 AM",
		hint: "Opened by Nusrat Jahan"
	},
	{
		id: "closing",
		label: "Closing Time",
		value: "06:00 PM",
		hint: "Scheduled closing"
	},
	{
		id: "served",
		label: "Patients Served",
		value: "38",
		hint: "Out of 42 scheduled"
	},
	{
		id: "sessions",
		label: "Sessions Completed",
		value: "27",
		hint: "21 individual, 6 group"
	},
	{
		id: "revenue",
		label: "Revenue Collected",
		value: formatTaka(84500),
		hint: "94% of target"
	},
	{
		id: "tasks",
		label: "Pending Tasks",
		value: "4",
		hint: "2 due calls, 2 reports"
	}
];
var PERFORMANCE_RINGS = [
	{
		id: "completion",
		label: "Completion",
		value: 92,
		caption: "Daily activities completed"
	},
	{
		id: "target",
		label: "Target Achievement",
		value: 94,
		caption: "Collection vs ৳ 90,000"
	},
	{
		id: "attendance",
		label: "Attendance",
		value: 90,
		caption: "38 of 42 patients attended"
	}
];
var DAILY_TIMELINE = [
	{
		id: "t1",
		time: "08:30 AM",
		title: "Branch Opened",
		detail: "Dhaka Main Branch opened by Nusrat Jahan. Therapy rooms 1–6 prepared.",
		icon: "sunrise",
		tone: "info"
	},
	{
		id: "t2",
		time: "09:00 AM",
		title: "Patient Registration",
		detail: "7 new patients registered — Tanvir Hasan, Sumaiya Islam and 5 others.",
		icon: "user-plus",
		tone: "success"
	},
	{
		id: "t3",
		time: "10:00 AM",
		title: "Assessment Completed",
		detail: "9 clinical assessments finalised by Dr. Farhana Rahman and team.",
		icon: "clipboard",
		tone: "success"
	},
	{
		id: "t4",
		time: "11:30 AM",
		title: "Therapy Session Completed",
		detail: "Morning block closed — 14 individual and 3 group sessions completed.",
		icon: "activity",
		tone: "success"
	},
	{
		id: "t5",
		time: "01:30 PM",
		title: "Payment Collected",
		detail: `${formatTaka(52300)} collected in the afternoon block across 19 invoices.`,
		icon: "wallet",
		tone: "success"
	},
	{
		id: "t6",
		time: "03:00 PM",
		title: "Follow-up Call",
		detail: "15 retention calls made — 12 connected, 3 rescheduled for tomorrow.",
		icon: "phone",
		tone: "info"
	},
	{
		id: "t7",
		time: "05:00 PM",
		title: "Outdoor Visit Completed",
		detail: "5 outdoor visits closed in Mirpur, Uttara and Mohammadpur areas.",
		icon: "map",
		tone: "success"
	},
	{
		id: "t8",
		time: "06:00 PM",
		title: "Branch Closed",
		detail: "Inventory reconciled, cash box verified and daily report generated.",
		icon: "sunset",
		tone: "neutral"
	}
];
var ACTIVITY_STATE_TONE = {
	done: "success",
	pending: "warning",
	skipped: "neutral",
	missed: "danger"
};
var ACTIVITY_STATE_LABEL = {
	done: "Done",
	pending: "Pending",
	skipped: "N/A",
	missed: "Missed"
};
var DAILY_PATIENT_STATUS_TONE = {
	Completed: "success",
	"In Progress": "info",
	Partial: "warning",
	"No Show": "danger"
};
var DAILY_PATIENT_ROWS = [
	{
		id: "dp-01",
		patientId: "PT-2401",
		patientName: "Rahim Ahmed",
		registration: "skipped",
		assessment: "done",
		therapy: "done",
		payment: "done",
		followUp: "done",
		status: "Completed"
	},
	{
		id: "dp-02",
		patientId: "PT-2402",
		patientName: "Ayesha Akter",
		registration: "skipped",
		assessment: "skipped",
		therapy: "done",
		payment: "pending",
		followUp: "done",
		status: "Partial"
	},
	{
		id: "dp-03",
		patientId: "PT-2478",
		patientName: "Tanvir Hasan",
		registration: "done",
		assessment: "done",
		therapy: "pending",
		payment: "done",
		followUp: "skipped",
		status: "In Progress"
	},
	{
		id: "dp-04",
		patientId: "PT-2479",
		patientName: "Sumaiya Islam",
		registration: "done",
		assessment: "done",
		therapy: "done",
		payment: "done",
		followUp: "skipped",
		status: "Completed"
	},
	{
		id: "dp-05",
		patientId: "PT-2415",
		patientName: "Mahfuz Rahman",
		registration: "skipped",
		assessment: "skipped",
		therapy: "missed",
		payment: "pending",
		followUp: "done",
		status: "No Show"
	},
	{
		id: "dp-06",
		patientId: "PT-2422",
		patientName: "Nusaiba Chowdhury",
		registration: "skipped",
		assessment: "done",
		therapy: "done",
		payment: "done",
		followUp: "done",
		status: "Completed"
	},
	{
		id: "dp-07",
		patientId: "PT-2480",
		patientName: "Arif Mahmud",
		registration: "done",
		assessment: "pending",
		therapy: "skipped",
		payment: "pending",
		followUp: "skipped",
		status: "In Progress"
	},
	{
		id: "dp-08",
		patientId: "PT-2436",
		patientName: "Farzana Yeasmin",
		registration: "skipped",
		assessment: "skipped",
		therapy: "done",
		payment: "done",
		followUp: "pending",
		status: "Partial"
	},
	{
		id: "dp-09",
		patientId: "PT-2441",
		patientName: "Sabbir Hossain",
		registration: "skipped",
		assessment: "done",
		therapy: "done",
		payment: "done",
		followUp: "done",
		status: "Completed"
	},
	{
		id: "dp-10",
		patientId: "PT-2481",
		patientName: "Jannatul Ferdous",
		registration: "done",
		assessment: "done",
		therapy: "done",
		payment: "pending",
		followUp: "skipped",
		status: "Partial"
	},
	{
		id: "dp-11",
		patientId: "PT-2449",
		patientName: "Imran Kabir",
		registration: "skipped",
		assessment: "skipped",
		therapy: "done",
		payment: "done",
		followUp: "done",
		status: "Completed"
	},
	{
		id: "dp-12",
		patientId: "PT-2455",
		patientName: "Meherun Nesa",
		registration: "skipped",
		assessment: "done",
		therapy: "missed",
		payment: "skipped",
		followUp: "done",
		status: "No Show"
	}
];
var CLINICAL_CARDS = [
	{
		id: "assessments",
		label: "Today's Assessments",
		value: "9",
		hint: "6 initial, 3 re-assessment",
		icon: "clipboard",
		tone: "info"
	},
	{
		id: "individual",
		label: "Today's Individual Therapy",
		value: "24",
		hint: "Articulation, fluency, language",
		icon: "activity",
		tone: "info"
	},
	{
		id: "group",
		label: "Today's Group Therapy",
		value: "6",
		hint: "4 groups · 19 patients",
		icon: "users",
		tone: "info"
	},
	{
		id: "completed",
		label: "Completed Therapy",
		value: "27",
		hint: "90% completion rate",
		icon: "check",
		tone: "success"
	},
	{
		id: "missed",
		label: "Missed Sessions",
		value: "3",
		hint: "Mahfuz Rahman, Meherun Nesa, +1",
		icon: "alert",
		tone: "warning"
	},
	{
		id: "cancelled",
		label: "Cancelled Sessions",
		value: "2",
		hint: "Cancelled by guardian",
		icon: "ban",
		tone: "danger"
	}
];
var SESSION_DISTRIBUTION = [
	{
		name: "Completed",
		value: 27,
		token: "var(--chart-1)"
	},
	{
		name: "In Progress",
		value: 4,
		token: "var(--chart-2)"
	},
	{
		name: "Missed",
		value: 3,
		token: "var(--chart-4)"
	},
	{
		name: "Cancelled",
		value: 2,
		token: "var(--chart-5)"
	}
];
var THERAPY_TYPE_DISTRIBUTION = [
	{
		name: "Articulation",
		value: 9,
		token: "var(--chart-1)"
	},
	{
		name: "Language",
		value: 7,
		token: "var(--chart-2)"
	},
	{
		name: "Fluency",
		value: 5,
		token: "var(--chart-3)"
	},
	{
		name: "Voice",
		value: 4,
		token: "var(--chart-4)"
	},
	{
		name: "Feeding",
		value: 5,
		token: "var(--chart-5)"
	}
];
var FINANCE_CARDS = [
	{
		id: "income",
		label: "Today's Income",
		value: formatTaka(84500),
		hint: "32 invoices settled",
		icon: Banknote,
		tone: "success"
	},
	{
		id: "due-collected",
		label: "Today's Due Collection",
		value: formatTaka(18700),
		hint: "From 7 previous invoices",
		icon: Wallet,
		tone: "info"
	},
	{
		id: "discounts",
		label: "Today's Discounts",
		value: formatTaka(4300),
		hint: "5 concession cases",
		icon: BadgeCheck,
		tone: "warning"
	},
	{
		id: "pending",
		label: "Pending Due",
		value: formatTaka(36200),
		hint: "11 patients carried forward",
		icon: TriangleAlert,
		tone: "danger"
	}
];
var DAILY_PAYMENT_DISTRIBUTION = [
	{
		name: "Cash",
		value: 41200,
		token: "var(--chart-1)"
	},
	{
		name: "Card",
		value: 16800,
		token: "var(--chart-2)"
	},
	{
		name: "Mobile Banking",
		value: 21500,
		token: "var(--chart-3)"
	},
	{
		name: "Bank Transfer",
		value: 5e3,
		token: "var(--chart-5)"
	}
];
var INVENTORY_CARDS = [
	{
		id: "stock-in",
		label: "Stock In",
		value: "34 units",
		hint: "3 purchase entries received",
		icon: PackagePlus,
		tone: "success"
	},
	{
		id: "stock-out",
		label: "Stock Out",
		value: "21 units",
		hint: "12 sales, 9 internal issues",
		icon: PackageMinus,
		tone: "info"
	},
	{
		id: "used",
		label: "Materials Used",
		value: "9 items",
		hint: "Therapy rooms 1–6",
		icon: Boxes,
		tone: "warning"
	},
	{
		id: "low",
		label: "Low Stock",
		value: "4 items",
		hint: "Reorder recommended today",
		icon: TriangleAlert,
		tone: "danger"
	}
];
var INVENTORY_MOVEMENTS = [
	{
		id: "im-01",
		item: "Articulation Flash Card Set",
		category: "Therapy Cards",
		type: "Stock In",
		quantity: "+15",
		value: formatTaka(10500),
		handledBy: "Rakib Hasan",
		time: "09:40 AM"
	},
	{
		id: "im-02",
		item: "Oral Motor Exercise Kit",
		category: "Therapy Tools",
		type: "Stock Out",
		quantity: "-6",
		value: formatTaka(7200),
		handledBy: "Sadia Afrin",
		time: "10:55 AM"
	},
	{
		id: "im-03",
		item: "Picture Communication Book",
		category: "Educational",
		type: "Stock In",
		quantity: "+12",
		value: formatTaka(8400),
		handledBy: "Rakib Hasan",
		time: "11:20 AM"
	},
	{
		id: "im-04",
		item: "Chewy Tube (Medium)",
		category: "Feeding Aids",
		type: "Used",
		quantity: "-4",
		value: formatTaka(1600),
		handledBy: "Dr. Farhana Rahman",
		time: "12:15 PM"
	},
	{
		id: "im-05",
		item: "Bubble Blower Pack",
		category: "Play Therapy",
		type: "Used",
		quantity: "-5",
		value: formatTaka(950),
		handledBy: "Nafisa Karim",
		time: "02:30 PM"
	},
	{
		id: "im-06",
		item: "Mirror Board (Small)",
		category: "Therapy Tools",
		type: "Stock In",
		quantity: "+7",
		value: formatTaka(6300),
		handledBy: "Rakib Hasan",
		time: "03:45 PM"
	},
	{
		id: "im-07",
		item: "Speech Sound Workbook",
		category: "Educational",
		type: "Stock Out",
		quantity: "-9",
		value: formatTaka(4050),
		handledBy: "Sadia Afrin",
		time: "04:50 PM"
	}
];
var LOW_STOCK_TODAY = [
	{
		id: "ls-1",
		item: "Chewy Tube (Medium)",
		remaining: 3,
		reorder: 15
	},
	{
		id: "ls-2",
		item: "Bubble Blower Pack",
		remaining: 4,
		reorder: 20
	},
	{
		id: "ls-3",
		item: "Articulation Mirror",
		remaining: 2,
		reorder: 10
	},
	{
		id: "ls-4",
		item: "Sensory Chew Necklace",
		remaining: 5,
		reorder: 25
	}
];
var NOTE_FIELDS = [
	{
		id: "challenges",
		label: "Today's Challenges",
		placeholder: "Describe operational challenges faced today…",
		hint: "Staffing, scheduling, equipment or patient issues"
	},
	{
		id: "achievements",
		label: "Achievements",
		placeholder: "Highlight wins and milestones achieved today…",
		hint: "Targets met, patient progress, team performance"
	},
	{
		id: "events",
		label: "Special Events",
		placeholder: "Any camp, workshop, awareness session or VIP visit…",
		hint: "Outdoor camps, school programs, guardian meetings"
	},
	{
		id: "recommendations",
		label: "Recommendations",
		placeholder: "Suggestions for head office or branch improvement…",
		hint: "Process, inventory or training recommendations"
	},
	{
		id: "tomorrow",
		label: "Tomorrow's Plan",
		placeholder: "Priorities for tomorrow's operations…",
		hint: "Appointments, due follow-ups, outdoor visits"
	}
];
var DEFAULT_NOTES = {
	challenges: "Therapy room 4 air-conditioner stopped working after 2:00 PM, two afternoon sessions were shifted to room 6. Three guardians arrived late due to Dhanmondi traffic.",
	achievements: "Collection target exceeded (94% by 1:30 PM). Seven new registrations — highest this week. Rahim Ahmed completed his 20-session articulation package with an 82% progress score.",
	events: "Awareness session at Sunshine Kindergarten, Mohammadpur with 34 guardians attending. Two school-visit leads generated.",
	recommendations: "Add one more evening slot for group therapy on Fridays. Reorder chewy tubes and bubble blower packs before Sunday. Request maintenance for room 4 AC.",
	tomorrow: "18 scheduled sessions, 4 assessments, 5 due-collection calls and 3 home visits in Uttara. Monthly package renewals for 6 patients."
};
var TODAYS_GOALS = [
	{
		id: "g1",
		label: "Patients served",
		current: 38,
		target: 42
	},
	{
		id: "g2",
		label: "Sessions completed",
		current: 27,
		target: 30
	},
	{
		id: "g3",
		label: "Collection",
		current: 84500,
		target: 9e4,
		currency: true
	},
	{
		id: "g4",
		label: "Follow-up calls",
		current: 15,
		target: 16
	}
];
var PENDING_TASKS = [
	{
		id: "pt-1",
		label: "Collect due from Ayesha Akter",
		detail: `${formatTaka(3500)} · overdue 4 days`,
		tone: "warning"
	},
	{
		id: "pt-2",
		label: "Complete Arif Mahmud assessment",
		detail: "Draft saved at 04:10 PM",
		tone: "info"
	},
	{
		id: "pt-3",
		label: "Approve inventory purchase entry",
		detail: "3 items pending approval",
		tone: "info"
	},
	{
		id: "pt-4",
		label: "Submit weekly summary to head office",
		detail: "Due tomorrow 11:00 AM",
		tone: "danger"
	}
];
var UPCOMING_TOMORROW = [
	{
		id: "ut-1",
		time: "09:00 AM",
		label: "18 therapy sessions scheduled"
	},
	{
		id: "ut-2",
		time: "10:30 AM",
		label: "Assessment — Sumaiya Islam (re-assessment)"
	},
	{
		id: "ut-3",
		time: "12:00 PM",
		label: "Group therapy — Fluency Group B"
	},
	{
		id: "ut-4",
		time: "02:00 PM",
		label: "Home visit — Mirpur 10, Tanvir Hasan"
	},
	{
		id: "ut-5",
		time: "04:30 PM",
		label: "6 monthly package renewals"
	}
];
var WEATHER_TODAY = {
	city: "Dhaka",
	condition: "Light monsoon showers",
	temperature: "31°C",
	feelsLike: "37°C",
	humidity: "84%",
	wind: "12 km/h",
	advisory: "Rain expected after 4:00 PM — outdoor visits may be delayed."
};
var CLOSING_CHECKLIST = [
	{
		id: "c1",
		label: "Patient registrations completed",
		detail: "7 registrations verified and filed",
		done: true
	},
	{
		id: "c2",
		label: "Therapy sessions completed",
		detail: "27 of 30 sessions completed",
		done: true
	},
	{
		id: "c3",
		label: "Payment collection completed",
		detail: `${formatTaka(84500)} reconciled with cash box`,
		done: true
	},
	{
		id: "c4",
		label: "Follow-up completed",
		detail: "15 calls logged, 3 rescheduled",
		done: true
	},
	{
		id: "c5",
		label: "Outdoor visits completed",
		detail: "5 visits closed with outcomes",
		done: true
	},
	{
		id: "c6",
		label: "Inventory updated",
		detail: "Stock movement posted for 7 items",
		done: false
	},
	{
		id: "c7",
		label: "Daily report generated",
		detail: "Pending manager sign-off",
		done: false
	}
];
var DAILY_REPORTS = [
	{
		id: "DR-20260731",
		code: "DR-20260731",
		date: "2026-07-31",
		branch: DAILY_BRANCH.name,
		manager: DAILY_BRANCH.manager,
		status: "Open",
		openingTime: "08:30 AM",
		closingTime: "06:00 PM",
		workingHours: "9h 30m",
		patientsServed: 38,
		newRegistrations: 7,
		assessments: 9,
		individualSessions: 24,
		groupSessions: 6,
		completedSessions: 27,
		missedSessions: 3,
		cancelledSessions: 2,
		followUps: 15,
		outdoorVisits: 5,
		collection: 84500,
		dueCollected: 18700,
		discounts: 4300,
		pendingDue: 36200,
		stockIn: 34,
		stockOut: 21,
		materialsUsed: 9,
		lowStock: 4,
		performanceScore: 92,
		targetCollection: 9e4,
		pendingTasks: 4,
		notes: DEFAULT_NOTES
	},
	{
		id: "DR-20260730",
		code: "DR-20260730",
		date: "2026-07-30",
		branch: DAILY_BRANCH.name,
		manager: DAILY_BRANCH.manager,
		status: "Closed",
		openingTime: "08:30 AM",
		closingTime: "06:10 PM",
		workingHours: "9h 40m",
		patientsServed: 36,
		newRegistrations: 5,
		assessments: 8,
		individualSessions: 20,
		groupSessions: 6,
		completedSessions: 25,
		missedSessions: 2,
		cancelledSessions: 1,
		followUps: 12,
		outdoorVisits: 4,
		collection: 76e3,
		dueCollected: 15400,
		discounts: 3100,
		pendingDue: 38e3,
		stockIn: 18,
		stockOut: 25,
		materialsUsed: 11,
		lowStock: 3,
		performanceScore: 89,
		targetCollection: 9e4,
		pendingTasks: 2,
		notes: {
			challenges: "Two therapists on leave, afternoon slots were tight.",
			achievements: "Zero cancellations in the morning block.",
			events: "Guardian counselling session for 12 families.",
			recommendations: "Maintain a standby therapist roster for Thursdays.",
			tomorrow: "Focus on due collection and new registrations."
		}
	},
	{
		id: "DR-20260729",
		code: "DR-20260729",
		date: "2026-07-29",
		branch: DAILY_BRANCH.name,
		manager: DAILY_BRANCH.manager,
		status: "Closed",
		openingTime: "08:35 AM",
		closingTime: "06:00 PM",
		workingHours: "9h 25m",
		patientsServed: 41,
		newRegistrations: 6,
		assessments: 11,
		individualSessions: 26,
		groupSessions: 5,
		completedSessions: 29,
		missedSessions: 2,
		cancelledSessions: 2,
		followUps: 14,
		outdoorVisits: 6,
		collection: 91800,
		dueCollected: 21e3,
		discounts: 5200,
		pendingDue: 33500,
		stockIn: 26,
		stockOut: 19,
		materialsUsed: 8,
		lowStock: 5,
		performanceScore: 95,
		targetCollection: 9e4,
		pendingTasks: 1,
		notes: {
			challenges: "Heavy rain delayed two school visits in Uttara.",
			achievements: "Best collection day of the month — 102% of target.",
			events: "Speech awareness camp at Mirpur community centre.",
			recommendations: "Repeat the Mirpur camp next month.",
			tomorrow: "Prepare monthly package renewal reminders."
		}
	}
];
var TODAYS_REPORT = DAILY_REPORTS[0];
function getDailyReport(id) {
	return DAILY_REPORTS.find((report) => report.id === id || report.date === id);
}
var REPORT_STATUS_TONE = {
	Closed: "success",
	Draft: "warning",
	Open: "info"
};
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BtnFRLs5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-CCflDgKC.css";
var STORAGE_KEY = "st-erp-theme";
var ThemeContext = (0, import_react.createContext)(null);
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		setThemeState(stored ?? (prefersDark ? "dark" : "light"));
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		document.documentElement.style.colorScheme = theme;
	}, [theme]);
	const setTheme = (0, import_react.useCallback)((next) => {
		setThemeState(next);
		window.localStorage.setItem(STORAGE_KEY, next);
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		theme,
		setTheme,
		toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark")
	}), [theme, setTheme]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value,
		children
	});
}
function useTheme() {
	const ctx = (0, import_react.useContext)(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
	return ctx;
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$37 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Speech Therapy ERP — Multi-branch clinic platform" },
			{
				name: "description",
				content: "Enterprise frontend foundation for a multi-branch speech therapy clinic ERP."
			},
			{
				property: "og:title",
				content: "Speech Therapy ERP — Multi-branch clinic platform"
			},
			{
				property: "og:description",
				content: "Enterprise frontend foundation for a multi-branch speech therapy clinic ERP."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$37.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ThemeProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})] })
	});
}
var $$splitComponentImporter$36 = () => import("./routes-CMMlSmB0.mjs");
var Route$36 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Speech Therapy ERP — Multi-branch clinic platform" },
		{
			name: "description",
			content: "Frontend foundation for Speech Therapy ERP: enterprise app shell, design tokens and a reusable component library."
		},
		{
			property: "og:title",
			content: "Speech Therapy ERP — Multi-branch clinic platform"
		},
		{
			property: "og:description",
			content: "Frontend foundation for Speech Therapy ERP: enterprise app shell, design tokens and a reusable component library."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$36, "component")
});
var $$splitComponentImporter$35 = () => import("./auth-DUNP77hF.mjs");
var Route$35 = createFileRoute("/auth")({ component: lazyRouteComponent($$splitComponentImporter$35, "component") });
var $$splitComponentImporter$34 = () => import("./manager-Ct8teIoF.mjs");
var Route$34 = createFileRoute("/manager")({ component: lazyRouteComponent($$splitComponentImporter$34, "component") });
var $$splitComponentImporter$33 = () => import("./super-admin-B2WiHhpX.mjs");
var Route$33 = createFileRoute("/super-admin")({ component: lazyRouteComponent($$splitComponentImporter$33, "component") });
var $$splitComponentImporter$32 = () => import("./auth.index-BUzdNd91.mjs");
var Route$32 = createFileRoute("/auth/")({ component: lazyRouteComponent($$splitComponentImporter$32, "component") });
var $$splitComponentImporter$31 = () => import("./auth.forgot-password-D2CZeyu2.mjs");
var Route$31 = createFileRoute("/auth/forgot-password")({
	head: () => ({ meta: [
		{ title: "Reset password — Speech Therapy ERP" },
		{
			name: "description",
			content: "Reset your Speech Therapy ERP workspace password."
		},
		{
			property: "og:title",
			content: "Reset password — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Reset your Speech Therapy ERP workspace password."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$31, "component")
});
var $$splitComponentImporter$30 = () => import("./auth.login-9oFqftEe.mjs");
var Route$30 = createFileRoute("/auth/login")({
	head: () => ({ meta: [
		{ title: "Sign in — Speech Therapy ERP" },
		{
			name: "description",
			content: "Sign in to the Speech Therapy ERP multi-branch clinic platform."
		},
		{
			property: "og:title",
			content: "Sign in — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Sign in to the Speech Therapy ERP multi-branch clinic platform."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$30, "component")
});
var $$splitComponentImporter$29 = () => import("./auth.register-C6DnxK02.mjs");
var Route$29 = createFileRoute("/auth/register")({
	head: () => ({ meta: [
		{ title: "Request access — Speech Therapy ERP" },
		{
			name: "description",
			content: "Request a workspace account for the Speech Therapy ERP platform."
		},
		{
			property: "og:title",
			content: "Request access — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Request a workspace account for the Speech Therapy ERP platform."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$29, "component")
});
var $$splitComponentImporter$28 = () => import("./manager.index-D3dOhgae.mjs");
var Route$28 = createFileRoute("/manager/")({
	head: () => ({ meta: [
		{ title: "Branch Manager workspace — Speech Therapy ERP" },
		{
			name: "description",
			content: "Single-branch workspace shell for the Speech Therapy ERP platform."
		},
		{
			property: "og:title",
			content: "Branch Manager workspace — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Single-branch workspace shell for the Speech Therapy ERP platform."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$28, "component")
});
var $$splitComponentImporter$27 = () => import("./manager.dashboard-DAPwWLPS.mjs");
var TITLE$10 = "Branch Dashboard — Speech Therapy ERP";
var DESCRIPTION$10 = "Daily operations command centre for a single branch: patients, sessions, payments, follow-ups and inventory.";
var Route$27 = createFileRoute("/manager/dashboard")({
	head: () => ({ meta: [
		{ title: TITLE$10 },
		{
			name: "description",
			content: DESCRIPTION$10
		},
		{
			property: "og:title",
			content: TITLE$10
		},
		{
			property: "og:description",
			content: DESCRIPTION$10
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$27, "component")
});
var $$splitComponentImporter$26 = () => import("./manager.sales-Cn-WmHC3.mjs");
var TITLE$9 = "Material Sales — Speech Therapy ERP";
var DESCRIPTION$9 = "Sales console for therapy materials: invoices, payment status, collected amounts and dues in BDT.";
var Route$26 = createFileRoute("/manager/sales")({
	head: () => ({ meta: [
		{ title: TITLE$9 },
		{
			name: "description",
			content: DESCRIPTION$9
		},
		{
			property: "og:title",
			content: TITLE$9
		},
		{
			property: "og:description",
			content: DESCRIPTION$9
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$26, "component")
});
var $$splitComponentImporter$25 = () => import("./super-admin.index-BwUJSAE6.mjs");
var Route$25 = createFileRoute("/super-admin/")({
	head: () => ({ meta: [
		{ title: "Super Admin workspace — Speech Therapy ERP" },
		{
			name: "description",
			content: "Organisation-wide workspace shell for the Speech Therapy ERP platform."
		},
		{
			property: "og:title",
			content: "Super Admin workspace — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Organisation-wide workspace shell for the Speech Therapy ERP platform."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./super-admin.dashboard-DoH1p26w.mjs");
var title = "Super Admin Dashboard — Speech Therapy ERP";
var description = "Head-office command centre with branch performance, revenue, patient growth and system health across every Speech Therapy ERP location.";
var Route$24 = createFileRoute("/super-admin/dashboard")({
	head: () => ({ meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./manager.assessments.index-DKVUcaCQ.mjs");
var Route$23 = createFileRoute("/manager/assessments/")({
	head: () => ({ meta: [
		{ title: "Assessment Management — Speech Therapy ERP" },
		{
			name: "description",
			content: "Clinical assessment console: record evaluations, diagnoses, therapy recommendations and treatment plans for every patient in one place."
		},
		{
			property: "og:title",
			content: "Assessment Management — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Clinical assessment console: record evaluations, diagnoses, therapy recommendations and treatment plans for every patient in one place."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./manager.assessments._assessmentId-ZHw9JfeS.mjs");
var $$splitNotFoundComponentImporter$5 = () => import("./manager.assessments._assessmentId-CHA1gDFL.mjs");
var Route$22 = createFileRoute("/manager/assessments/$assessmentId")({
	loader: ({ params }) => {
		const assessment = findAssessment(params.assessmentId);
		if (!assessment) throw notFound();
		return { assessment };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Assessment not found — Speech Therapy ERP" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { assessment } = loaderData;
		const title = `${assessment.code} — ${assessment.patientName} | Speech Therapy ERP`;
		const description = `Clinical assessment ${assessment.code} for ${assessment.patientName}: evaluation scores, diagnosis, therapy recommendation and treatment plan.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				name: "robots",
				content: "noindex"
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$5, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./manager.assessments.new-CUiDQbaB.mjs");
var Route$21 = createFileRoute("/manager/assessments/new")({
	head: () => ({ meta: [
		{ title: "New Assessment — Speech Therapy ERP" },
		{
			name: "description",
			content: "Record a new clinical assessment step by step: patient selection, evaluation, diagnosis, therapy recommendation and treatment plan."
		},
		{
			property: "og:title",
			content: "New Assessment — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Record a new clinical assessment step by step: patient selection, evaluation, diagnosis, therapy recommendation and treatment plan."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./manager.daily-reports.index-D5WhwQ2O.mjs");
var TITLE$8 = "Daily Operations Report — Speech Therapy ERP";
var DESCRIPTION$8 = "End-of-day operations centre for Dhaka Main Branch: patient activity, clinical sessions, collections, inventory movement and manager notes in one daily closing report.";
var Route$20 = createFileRoute("/manager/daily-reports/")({
	validateSearch: (search) => ({ tab: typeof search.tab === "string" ? search.tab : void 0 }),
	head: () => ({ meta: [
		{ title: TITLE$8 },
		{
			name: "description",
			content: DESCRIPTION$8
		},
		{
			property: "og:title",
			content: TITLE$8
		},
		{
			property: "og:description",
			content: DESCRIPTION$8
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./manager.daily-reports._reportId-C0Duqlkw.mjs");
var Route$19 = createFileRoute("/manager/daily-reports/$reportId")({
	loader: ({ params }) => {
		const report = getDailyReport(params.reportId);
		if (!report) throw notFound();
		return { report };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Daily report unavailable" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `Daily Report ${loaderData.report.code} — ${loaderData.report.branch}`;
		const description = `Closing report for ${loaderData.report.date}: ${loaderData.report.patientsServed} patients served, ${loaderData.report.completedSessions} sessions completed and ${formatTaka(loaderData.report.collection)} collected.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./manager.follow-up.index-DMVHdVhP.mjs");
var TITLE$7 = "Follow-up Management — Speech Therapy ERP";
var DESCRIPTION$7 = "Patient retention CRM for the branch: track follow-up calls, reminders, guardian communication and at-risk patients.";
var Route$18 = createFileRoute("/manager/follow-up/")({
	head: () => ({ meta: [
		{ title: TITLE$7 },
		{
			name: "description",
			content: DESCRIPTION$7
		},
		{
			property: "og:title",
			content: TITLE$7
		},
		{
			property: "og:description",
			content: DESCRIPTION$7
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./manager.follow-up._followUpId-BO5Vzuiu.mjs");
var $$splitNotFoundComponentImporter$4 = () => import("./manager.follow-up._followUpId-W5DBT6bM.mjs");
var Route$17 = createFileRoute("/manager/follow-up/$followUpId")({
	loader: ({ params }) => {
		const followUp = getFollowUp(params.followUpId);
		if (!followUp) throw notFound();
		return { followUp };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Follow-up unavailable" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `${loaderData.followUp.patientName} — Follow-up ${loaderData.followUp.code}`;
		const description = `Follow-up record for ${loaderData.followUp.patientName}: ${loaderData.followUp.reason}, ${loaderData.followUp.priority} priority, next contact ${loaderData.followUp.nextFollowUp}.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "profile"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$4, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./manager.materials.index-C-71irad.mjs");
var TITLE$6 = "Materials & Sales — Speech Therapy ERP";
var DESCRIPTION$6 = "Inventory console for the branch: track therapy materials, educational toys, equipment stock levels and material sales in BDT.";
var Route$16 = createFileRoute("/manager/materials/")({
	validateSearch: (search) => ({ tab: typeof search.tab === "string" ? search.tab : void 0 }),
	head: () => ({ meta: [
		{ title: TITLE$6 },
		{
			name: "description",
			content: DESCRIPTION$6
		},
		{
			property: "og:title",
			content: TITLE$6
		},
		{
			property: "og:description",
			content: DESCRIPTION$6
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./manager.materials._materialId-CsWc3do5.mjs");
var Route$15 = createFileRoute("/manager/materials/$materialId")({
	loader: ({ params }) => {
		const material = getMaterial(params.materialId);
		if (!material) throw notFound();
		return {
			material,
			sales: salesForMaterial(material.id),
			movements: movementsForMaterial(material.id),
			purchases: purchasesForMaterial(material.id)
		};
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Material not found" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `${loaderData.material.name} — Material Details`;
		const description = `Stock, pricing, supplier and sales history for ${loaderData.material.name} (${loaderData.material.code}).`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./manager.materials.new-B5dvFkey.mjs");
var TITLE$5 = "Add Material — Speech Therapy ERP";
var DESCRIPTION$5 = "Register a new therapy material, educational toy or equipment item with pricing, stock levels and supplier details.";
var Route$14 = createFileRoute("/manager/materials/new")({
	head: () => ({ meta: [
		{ title: TITLE$5 },
		{
			name: "description",
			content: DESCRIPTION$5
		},
		{
			property: "og:title",
			content: TITLE$5
		},
		{
			property: "og:description",
			content: DESCRIPTION$5
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./manager.outdoor.index-CF86EtW6.mjs");
var TITLE$4 = "Outdoor Service Management — Speech Therapy ERP";
var DESCRIPTION$4 = "Plan and track outdoor therapy services: home visits, school visits, community programs, awareness sessions and special camps across Bangladesh.";
var Route$13 = createFileRoute("/manager/outdoor/")({
	validateSearch: (search) => ({ tab: typeof search.tab === "string" ? search.tab : void 0 }),
	head: () => ({ meta: [
		{ title: TITLE$4 },
		{
			name: "description",
			content: DESCRIPTION$4
		},
		{
			property: "og:title",
			content: TITLE$4
		},
		{
			property: "og:description",
			content: DESCRIPTION$4
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./manager.outdoor._visitId-DGZNEini.mjs");
var Route$12 = createFileRoute("/manager/outdoor/$visitId")({
	loader: ({ params }) => {
		const visit = OUTDOOR_VISITS.find((item) => item.id === params.visitId || item.visitId === params.visitId);
		if (!visit) throw notFound();
		return { visit };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Outdoor visit unavailable" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `${loaderData.visit.visitId} — Outdoor Visit for ${loaderData.visit.patientName}`;
		const description = `${loaderData.visit.type} on ${loaderData.visit.date} at ${loaderData.visit.time} in ${loaderData.visit.area}, handled by ${loaderData.visit.therapistName}.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./manager.outdoor.new-YpPgFN7M.mjs");
var TITLE$3 = "Schedule Outdoor Visit — Speech Therapy ERP";
var DESCRIPTION$3 = "Schedule a home visit, school visit, community program or special camp for an outdoor therapy patient in five guided steps.";
var Route$11 = createFileRoute("/manager/outdoor/new")({
	head: () => ({ meta: [
		{ title: TITLE$3 },
		{
			name: "description",
			content: DESCRIPTION$3
		},
		{
			property: "og:title",
			content: TITLE$3
		},
		{
			property: "og:description",
			content: DESCRIPTION$3
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./manager.patients.index-B8Tjx9JO.mjs");
var Route$10 = createFileRoute("/manager/patients/")({
	head: () => ({ meta: [
		{ title: "Patient Management — Speech Therapy ERP" },
		{
			name: "description",
			content: "Central patient CRM for the clinic: registrations, therapy journeys, packages, payment status and follow-ups in one enterprise console."
		},
		{
			property: "og:title",
			content: "Patient Management — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Central patient CRM for the clinic: registrations, therapy journeys, packages, payment status and follow-ups in one enterprise console."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./manager.patients._patientId-PGuQNSe4.mjs");
var $$splitNotFoundComponentImporter$3 = () => import("./manager.patients._patientId-B9QqHxUP.mjs");
var Route$9 = createFileRoute("/manager/patients/$patientId")({
	validateSearch: (search) => ({ tab: typeof search.tab === "string" ? search.tab : void 0 }),
	loader: ({ params }) => {
		const patient = findPatient(params.patientId);
		if (!patient) throw notFound();
		return { patient };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Patient not found — Speech Therapy ERP" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { patient } = loaderData;
		const title = `${patient.name} — Patient Profile | Speech Therapy ERP`;
		const description = `Patient profile for ${patient.name} (${patient.code}): personal details, guardian information, therapy programme, package and payment summary.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				name: "robots",
				content: "noindex"
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "profile"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$3, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./manager.payments.index-kCC8zQER.mjs");
var TITLE$2 = "Payment & Billing — Speech Therapy ERP";
var DESCRIPTION$2 = "Billing console for the branch: manage therapy packages, collect payments, issue invoices and monitor outstanding dues in BDT.";
var Route$8 = createFileRoute("/manager/payments/")({
	validateSearch: (search) => ({ tab: typeof search.tab === "string" ? search.tab : void 0 }),
	head: () => ({ meta: [
		{ title: TITLE$2 },
		{
			name: "description",
			content: DESCRIPTION$2
		},
		{
			property: "og:title",
			content: TITLE$2
		},
		{
			property: "og:description",
			content: DESCRIPTION$2
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./manager.payments._paymentId-DLUixoE2.mjs");
var $$splitNotFoundComponentImporter$2 = () => import("./manager.payments._paymentId-xfmi55PW.mjs");
var Route$7 = createFileRoute("/manager/payments/$paymentId")({
	loader: ({ params }) => {
		const profile = findPaymentProfile(params.paymentId);
		if (!profile) throw notFound();
		return { profile };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Payment record not found — Speech Therapy ERP" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { primary } = loaderData.profile;
		const title = `${primary.receiptNo} — ${primary.patientName} | Speech Therapy ERP`;
		const description = `Payment profile for ${primary.patientName}: package billing, payment timeline, invoice history and outstanding dues.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				name: "robots",
				content: "noindex"
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$2, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./manager.payments.collect-DdgPGFDq.mjs");
var TITLE$1 = "Collect Payment — Speech Therapy ERP";
var DESCRIPTION$1 = "Record a therapy payment: pick the patient and package, apply discounts, capture the amount received and preview the remaining due in BDT.";
var Route$6 = createFileRoute("/manager/payments/collect")({
	head: () => ({ meta: [
		{ title: TITLE$1 },
		{
			name: "description",
			content: DESCRIPTION$1
		},
		{
			name: "robots",
			content: "noindex"
		},
		{
			property: "og:title",
			content: TITLE$1
		},
		{
			property: "og:description",
			content: DESCRIPTION$1
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./manager.payments.packages-3Kqc8TzM.mjs");
var TITLE = "Payment Packages — Speech Therapy ERP";
var DESCRIPTION = "Create and manage daily, session-wise, monthly and online booking therapy packages with pricing, duration and session rules.";
var Route$5 = createFileRoute("/manager/payments/packages")({
	head: () => ({ meta: [
		{ title: TITLE },
		{
			name: "description",
			content: DESCRIPTION
		},
		{
			property: "og:title",
			content: TITLE
		},
		{
			property: "og:description",
			content: DESCRIPTION
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./manager.therapy.index-BkJoOD1N.mjs");
var Route$4 = createFileRoute("/manager/therapy/")({
	head: () => ({ meta: [
		{ title: "Therapy Management — Speech Therapy ERP" },
		{
			name: "description",
			content: "Therapy console for the branch: schedule individual and group sessions, track attendance, session notes and patient progress in one place."
		},
		{
			property: "og:title",
			content: "Therapy Management — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Therapy console for the branch: schedule individual and group sessions, track attendance, session notes and patient progress in one place."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./manager.therapy._sessionId-BTizPEwW.mjs");
var $$splitNotFoundComponentImporter$1 = () => import("./manager.therapy._sessionId-XTq76zOH.mjs");
var Route$3 = createFileRoute("/manager/therapy/$sessionId")({
	loader: ({ params }) => {
		const session = findTherapySession(params.sessionId);
		if (!session) throw notFound();
		return { session };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Therapy session not found — Speech Therapy ERP" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { session } = loaderData;
		const title = `${session.code} — ${session.patientName} | Speech Therapy ERP`;
		const description = `Therapy session ${session.code} for ${session.patientName}: session notes, goals, attendance and progress tracking.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				name: "robots",
				content: "noindex"
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./manager.therapy.new-CAg3Q_VB.mjs");
var Route$2 = createFileRoute("/manager/therapy/new")({
	head: () => ({ meta: [
		{ title: "Schedule Therapy — Speech Therapy ERP" },
		{
			name: "description",
			content: "Schedule a new individual or group therapy session step by step: patient, therapy details, therapist assignment and session goals."
		},
		{
			property: "og:title",
			content: "Schedule Therapy — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Schedule a new individual or group therapy session step by step: patient, therapy details, therapist assignment and session goals."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./super-admin.branches.index-C9JVIHIh.mjs");
var Route$1 = createFileRoute("/super-admin/branches/")({
	head: () => ({ meta: [
		{ title: "Branch Management — Speech Therapy ERP" },
		{
			name: "description",
			content: "Manage every clinic branch of the organisation: performance, managers, staff and status in one enterprise console."
		},
		{
			property: "og:title",
			content: "Branch Management — Speech Therapy ERP"
		},
		{
			property: "og:description",
			content: "Manage every clinic branch of the organisation: performance, managers, staff and status in one enterprise console."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./super-admin.branches._branchId-C_dMyLEt.mjs");
var $$splitNotFoundComponentImporter = () => import("./super-admin.branches._branchId-DkfjPg0u.mjs");
var Route = createFileRoute("/super-admin/branches/$branchId")({
	loader: ({ params }) => {
		const branch = findBranch(params.branchId);
		if (!branch) throw notFound();
		return { branch };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Branch not found — Speech Therapy ERP" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `${loaderData.branch.name} — Speech Therapy ERP`;
		const description = `Profile, manager details, revenue and staffing overview for ${loaderData.branch.name} in ${loaderData.branch.city}.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "profile"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$36.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$37
});
var AuthRoute = Route$35.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$37
});
var ManagerRoute = Route$34.update({
	id: "/manager",
	path: "/manager",
	getParentRoute: () => Route$37
});
var SuperAdminRoute = Route$33.update({
	id: "/super-admin",
	path: "/super-admin",
	getParentRoute: () => Route$37
});
var AuthIndexRoute = Route$32.update({
	id: "/",
	path: "/",
	getParentRoute: () => AuthRoute
});
var AuthForgotPasswordRoute = Route$31.update({
	id: "/forgot-password",
	path: "/forgot-password",
	getParentRoute: () => AuthRoute
});
var AuthLoginRoute = Route$30.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => AuthRoute
});
var AuthRegisterRoute = Route$29.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => AuthRoute
});
var ManagerIndexRoute = Route$28.update({
	id: "/",
	path: "/",
	getParentRoute: () => ManagerRoute
});
var ManagerDashboardRoute = Route$27.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => ManagerRoute
});
var ManagerSalesRoute = Route$26.update({
	id: "/sales",
	path: "/sales",
	getParentRoute: () => ManagerRoute
});
var SuperAdminIndexRoute = Route$25.update({
	id: "/",
	path: "/",
	getParentRoute: () => SuperAdminRoute
});
var SuperAdminDashboardRoute = Route$24.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => SuperAdminRoute
});
var ManagerAssessmentsIndexRoute = Route$23.update({
	id: "/assessments/",
	path: "/assessments/",
	getParentRoute: () => ManagerRoute
});
var ManagerAssessmentsAssessmentIdRoute = Route$22.update({
	id: "/assessments/$assessmentId",
	path: "/assessments/$assessmentId",
	getParentRoute: () => ManagerRoute
});
var ManagerAssessmentsNewRoute = Route$21.update({
	id: "/assessments/new",
	path: "/assessments/new",
	getParentRoute: () => ManagerRoute
});
var ManagerDailyReportsIndexRoute = Route$20.update({
	id: "/daily-reports/",
	path: "/daily-reports/",
	getParentRoute: () => ManagerRoute
});
var ManagerDailyReportsReportIdRoute = Route$19.update({
	id: "/daily-reports/$reportId",
	path: "/daily-reports/$reportId",
	getParentRoute: () => ManagerRoute
});
var ManagerFollowUpIndexRoute = Route$18.update({
	id: "/follow-up/",
	path: "/follow-up/",
	getParentRoute: () => ManagerRoute
});
var ManagerFollowUpFollowUpIdRoute = Route$17.update({
	id: "/follow-up/$followUpId",
	path: "/follow-up/$followUpId",
	getParentRoute: () => ManagerRoute
});
var ManagerMaterialsIndexRoute = Route$16.update({
	id: "/materials/",
	path: "/materials/",
	getParentRoute: () => ManagerRoute
});
var ManagerMaterialsMaterialIdRoute = Route$15.update({
	id: "/materials/$materialId",
	path: "/materials/$materialId",
	getParentRoute: () => ManagerRoute
});
var ManagerMaterialsNewRoute = Route$14.update({
	id: "/materials/new",
	path: "/materials/new",
	getParentRoute: () => ManagerRoute
});
var ManagerOutdoorIndexRoute = Route$13.update({
	id: "/outdoor/",
	path: "/outdoor/",
	getParentRoute: () => ManagerRoute
});
var ManagerOutdoorVisitIdRoute = Route$12.update({
	id: "/outdoor/$visitId",
	path: "/outdoor/$visitId",
	getParentRoute: () => ManagerRoute
});
var ManagerOutdoorNewRoute = Route$11.update({
	id: "/outdoor/new",
	path: "/outdoor/new",
	getParentRoute: () => ManagerRoute
});
var ManagerPatientsIndexRoute = Route$10.update({
	id: "/patients/",
	path: "/patients/",
	getParentRoute: () => ManagerRoute
});
var ManagerPatientsPatientIdRoute = Route$9.update({
	id: "/patients/$patientId",
	path: "/patients/$patientId",
	getParentRoute: () => ManagerRoute
});
var ManagerPaymentsIndexRoute = Route$8.update({
	id: "/payments/",
	path: "/payments/",
	getParentRoute: () => ManagerRoute
});
var ManagerPaymentsPaymentIdRoute = Route$7.update({
	id: "/payments/$paymentId",
	path: "/payments/$paymentId",
	getParentRoute: () => ManagerRoute
});
var ManagerPaymentsCollectRoute = Route$6.update({
	id: "/payments/collect",
	path: "/payments/collect",
	getParentRoute: () => ManagerRoute
});
var ManagerPaymentsPackagesRoute = Route$5.update({
	id: "/payments/packages",
	path: "/payments/packages",
	getParentRoute: () => ManagerRoute
});
var ManagerTherapyIndexRoute = Route$4.update({
	id: "/therapy/",
	path: "/therapy/",
	getParentRoute: () => ManagerRoute
});
var ManagerTherapySessionIdRoute = Route$3.update({
	id: "/therapy/$sessionId",
	path: "/therapy/$sessionId",
	getParentRoute: () => ManagerRoute
});
var ManagerTherapyNewRoute = Route$2.update({
	id: "/therapy/new",
	path: "/therapy/new",
	getParentRoute: () => ManagerRoute
});
var SuperAdminBranchesIndexRoute = Route$1.update({
	id: "/branches/",
	path: "/branches/",
	getParentRoute: () => SuperAdminRoute
});
var SuperAdminBranchesBranchIdRoute = Route.update({
	id: "/branches/$branchId",
	path: "/branches/$branchId",
	getParentRoute: () => SuperAdminRoute
});
var AuthRouteChildren = {
	AuthForgotPasswordRoute,
	AuthLoginRoute,
	AuthRegisterRoute,
	AuthIndexRoute
};
var AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren);
var ManagerRouteChildren = {
	ManagerDashboardRoute,
	ManagerSalesRoute,
	ManagerIndexRoute,
	ManagerAssessmentsAssessmentIdRoute,
	ManagerAssessmentsNewRoute,
	ManagerDailyReportsReportIdRoute,
	ManagerFollowUpFollowUpIdRoute,
	ManagerMaterialsMaterialIdRoute,
	ManagerMaterialsNewRoute,
	ManagerOutdoorVisitIdRoute,
	ManagerOutdoorNewRoute,
	ManagerPatientsPatientIdRoute,
	ManagerPaymentsPaymentIdRoute,
	ManagerPaymentsCollectRoute,
	ManagerPaymentsPackagesRoute,
	ManagerTherapySessionIdRoute,
	ManagerTherapyNewRoute,
	ManagerAssessmentsIndexRoute,
	ManagerDailyReportsIndexRoute,
	ManagerFollowUpIndexRoute,
	ManagerMaterialsIndexRoute,
	ManagerOutdoorIndexRoute,
	ManagerPatientsIndexRoute,
	ManagerPaymentsIndexRoute,
	ManagerTherapyIndexRoute
};
var ManagerRouteWithChildren = ManagerRoute._addFileChildren(ManagerRouteChildren);
var SuperAdminRouteChildren = {
	SuperAdminDashboardRoute,
	SuperAdminIndexRoute,
	SuperAdminBranchesBranchIdRoute,
	SuperAdminBranchesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AuthRoute: AuthRouteWithChildren,
	ManagerRoute: ManagerRouteWithChildren,
	SuperAdminRoute: SuperAdminRoute._addFileChildren(SuperAdminRouteChildren)
};
var routeTree = Route$37._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { FINANCE_CARDS as A, TODAYS_GOALS as B, DAILY_PATIENT_ROWS as C, DAILY_TABS as D, DAILY_REPORTS as E, PENDING_TASKS as F, WEATHER_TODAY as G, TODAYS_SUMMARY as H, PERFORMANCE_RINGS as I, REPORT_STATUS_TONE as L, INVENTORY_MOVEMENTS as M, LOW_STOCK_TODAY as N, DAILY_TIMELINE as O, NOTE_FIELDS as P, SESSION_DISTRIBUTION as R, DAILY_KPIS as S, DAILY_PAYMENT_DISTRIBUTION as T, TODAY_LABEL as U, TODAYS_REPORT as V, UPCOMING_TOMORROW as W, ACTIVITY_STATE_LABEL as _, Route$16 as a, CLOSING_CHECKLIST as b, Route$20 as c, Route$7 as d, Route$8 as f, useTheme as g, router_exports as h, Route$15 as i, INVENTORY_CARDS as j, DEFAULT_NOTES as k, Route$22 as l, getRouter as m, Route$12 as n, Route$17 as o, Route$9 as p, Route$13 as r, Route$19 as s, Route as t, Route$3 as u, ACTIVITY_STATE_TONE as v, DAILY_PATIENT_STATUS_TONE as w, DAILY_BRANCH as x, CLINICAL_CARDS as y, THERAPY_TYPE_DISTRIBUTION as z };
