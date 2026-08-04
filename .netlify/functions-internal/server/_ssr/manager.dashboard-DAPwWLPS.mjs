import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { $ as PhoneCall, $t as ClipboardCheck, Bt as FileChartColumnIncreasing, Cn as Boxes, D as Stethoscope, Dn as Bell, Ft as Gauge, Hn as Activity, Kt as CreditCard, Mn as BadgeDollarSign, Mt as History, Q as Phone, Qt as ClipboardList, S as Target, Sn as BriefcaseMedical, Wt as Download, Z as Plus, _n as CalendarDays, a as Wallet, b as TrendingUp, fn as ChartPie, gn as CalendarPlus, hn as CalendarRange, nt as Package, o as Users, pt as Megaphone, s as UsersRound, t as Zap, u as UserPlus, v as Trophy, vn as CalendarClock } from "../_libs/lucide-react.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-BYMcu4zp.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as Progress } from "./progress-DYQcnTxt.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
import { t as WidgetCard } from "./widget-card-Dbo4snDS.mjs";
import { t as KpiCard } from "./kpi-card-BH70wzWL.mjs";
import { a as YAxis, c as Line, d as Pie, f as Cell, i as LineChart, l as CartesianGrid, n as PieChart, o as XAxis } from "../_libs/recharts+[...].mjs";
import { n as ChartTooltip, r as ChartTooltipContent, t as ChartContainer } from "./chart-BptILwYE.mjs";
import { t as DataTable } from "./data-table-3ywO74Uw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.dashboard-DAPwWLPS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Static demo data for the Branch Manager dashboard (Dhaka Main Branch).
* Shapes mirror the future Django REST payloads.
*/
var BRANCH_NAME = "Dhaka Main Branch";
var MANAGER_KPIS = [
	{
		id: "patients-today",
		label: "Today's Patients",
		value: "48",
		icon: Users,
		tone: "primary",
		delta: {
			value: "+6 from yesterday",
			direction: "up"
		}
	},
	{
		id: "sessions-today",
		label: "Today's Therapy Sessions",
		value: "31",
		icon: Activity,
		tone: "primary",
		hint: "22 completed · 9 upcoming"
	},
	{
		id: "revenue-today",
		label: "Today's Revenue",
		value: "৳ 28,500",
		icon: Wallet,
		tone: "success",
		delta: {
			value: "+9%",
			direction: "up"
		}
	},
	{
		id: "pending-due",
		label: "Pending Due",
		value: "৳ 15,200",
		icon: BadgeDollarSign,
		tone: "warning",
		hint: "12 unsettled invoices"
	},
	{
		id: "follow-ups",
		label: "Pending Follow-ups",
		value: "14",
		icon: PhoneCall,
		tone: "warning",
		hint: "4 overdue"
	},
	{
		id: "assessments",
		label: "New Assessments",
		value: "8",
		icon: ClipboardCheck,
		tone: "primary",
		hint: "3 awaiting report"
	},
	{
		id: "online-bookings",
		label: "Online Bookings",
		value: "11",
		icon: CalendarPlus,
		tone: "primary",
		delta: {
			value: "+2 today",
			direction: "up"
		}
	},
	{
		id: "low-stock",
		label: "Low Stock Alerts",
		value: "5",
		icon: Package,
		tone: "danger",
		hint: "2 items critical"
	}
];
var MANAGER_RANGES = [
	{
		key: "today",
		label: "Today"
	},
	{
		key: "week",
		label: "This week"
	},
	{
		key: "month",
		label: "This month"
	}
];
var REVENUE_TREND = {
	today: [
		{
			period: "9 AM",
			collection: 3200,
			expenses: 1400,
			net: 1800
		},
		{
			period: "11 AM",
			collection: 6800,
			expenses: 2600,
			net: 4200
		},
		{
			period: "1 PM",
			collection: 11400,
			expenses: 4100,
			net: 7300
		},
		{
			period: "3 PM",
			collection: 17900,
			expenses: 5600,
			net: 12300
		},
		{
			period: "5 PM",
			collection: 23600,
			expenses: 7200,
			net: 16400
		},
		{
			period: "7 PM",
			collection: 28500,
			expenses: 8400,
			net: 20100
		}
	],
	week: [
		{
			period: "Sat",
			collection: 24100,
			expenses: 8900,
			net: 15200
		},
		{
			period: "Sun",
			collection: 26800,
			expenses: 9300,
			net: 17500
		},
		{
			period: "Mon",
			collection: 31200,
			expenses: 10100,
			net: 21100
		},
		{
			period: "Tue",
			collection: 28700,
			expenses: 9600,
			net: 19100
		},
		{
			period: "Wed",
			collection: 33400,
			expenses: 11200,
			net: 22200
		},
		{
			period: "Thu",
			collection: 29900,
			expenses: 10400,
			net: 19500
		},
		{
			period: "Fri",
			collection: 28500,
			expenses: 8400,
			net: 20100
		}
	],
	month: [
		{
			period: "Week 1",
			collection: 168e3,
			expenses: 61e3,
			net: 107e3
		},
		{
			period: "Week 2",
			collection: 182500,
			expenses: 66500,
			net: 116e3
		},
		{
			period: "Week 3",
			collection: 174800,
			expenses: 63200,
			net: 111600
		},
		{
			period: "Week 4",
			collection: 196400,
			expenses: 71800,
			net: 124600
		}
	]
};
var THERAPY_SUMMARY = [
	{
		id: "individual",
		label: "Individual Therapy",
		icon: Stethoscope,
		count: 18,
		target: 22,
		progress: 82,
		status: {
			label: "On track",
			tone: "success"
		}
	},
	{
		id: "group",
		label: "Group Therapy",
		icon: UsersRound,
		count: 7,
		target: 10,
		progress: 70,
		status: {
			label: "In progress",
			tone: "info"
		}
	},
	{
		id: "assessment",
		label: "Assessment",
		icon: ClipboardCheck,
		count: 6,
		target: 8,
		progress: 75,
		status: {
			label: "In progress",
			tone: "info"
		}
	},
	{
		id: "follow-up",
		label: "Follow-up Calls",
		icon: PhoneCall,
		count: 9,
		target: 23,
		progress: 39,
		status: {
			label: "Behind",
			tone: "warning"
		}
	}
];
var TODAY_SCHEDULE = [
	{
		id: "s1",
		time: "09:00 AM",
		title: "Assessment",
		patient: "Ayaan Rahman",
		room: "Room 1",
		tone: "success",
		state: "completed"
	},
	{
		id: "s2",
		time: "09:45 AM",
		title: "Individual Therapy",
		patient: "Nabila Haque",
		room: "Room 3",
		tone: "success",
		state: "completed"
	},
	{
		id: "s3",
		time: "10:30 AM",
		title: "Group Therapy",
		patient: "Batch A · 6 children",
		room: "Hall B",
		tone: "success",
		state: "completed"
	},
	{
		id: "s4",
		time: "11:15 AM",
		title: "Follow-up Call",
		patient: "Sumaiya Islam",
		room: "Front desk",
		tone: "success",
		state: "completed"
	},
	{
		id: "s5",
		time: "12:00 PM",
		title: "Individual Therapy",
		patient: "Rafid Chowdhury",
		room: "Room 2",
		tone: "info",
		state: "in-progress"
	},
	{
		id: "s6",
		time: "02:00 PM",
		title: "Assessment",
		patient: "Tahmid Alam",
		room: "Room 1",
		tone: "neutral",
		state: "upcoming"
	},
	{
		id: "s7",
		time: "03:15 PM",
		title: "Group Therapy",
		patient: "Batch C · 5 children",
		room: "Hall B",
		tone: "neutral",
		state: "upcoming"
	},
	{
		id: "s8",
		time: "04:30 PM",
		title: "Individual Therapy",
		patient: "Zarin Tasnim",
		room: "Room 4",
		tone: "neutral",
		state: "upcoming"
	},
	{
		id: "s9",
		time: "05:45 PM",
		title: "Follow-up Call",
		patient: "Mahmudul Karim",
		room: "Front desk",
		tone: "neutral",
		state: "upcoming"
	},
	{
		id: "s10",
		time: "06:30 PM",
		title: "Individual Therapy",
		patient: "Ishrat Jahan",
		room: "Room 3",
		tone: "neutral",
		state: "upcoming"
	}
];
var UPCOMING_APPOINTMENTS = [
	{
		id: "u1",
		time: "02:00 PM",
		patient: "Tahmid Alam",
		therapy: "Assessment",
		therapist: "Dr. Sabrina Yasmin",
		status: {
			label: "Confirmed",
			tone: "success"
		}
	},
	{
		id: "u2",
		time: "03:15 PM",
		patient: "Batch C",
		therapy: "Group Therapy",
		therapist: "Rezwan Kabir",
		status: {
			label: "Confirmed",
			tone: "success"
		}
	},
	{
		id: "u3",
		time: "04:30 PM",
		patient: "Zarin Tasnim",
		therapy: "Individual Therapy",
		therapist: "Dr. Sabrina Yasmin",
		status: {
			label: "Pending",
			tone: "warning"
		}
	},
	{
		id: "u4",
		time: "05:45 PM",
		patient: "Mahmudul Karim",
		therapy: "Follow-up",
		therapist: "Nafisa Anjum",
		status: {
			label: "Rescheduled",
			tone: "info"
		}
	},
	{
		id: "u5",
		time: "06:30 PM",
		patient: "Ishrat Jahan",
		therapy: "Individual Therapy",
		therapist: "Rezwan Kabir",
		status: {
			label: "Confirmed",
			tone: "success"
		}
	}
];
var RECENT_PATIENTS = [
	{
		id: "p1",
		code: "PT-10428",
		name: "Ayaan Rahman",
		guardian: "Farhana Rahman",
		phone: "+880 1711-204488",
		packageName: "Monthly Package",
		status: {
			label: "Active",
			tone: "success"
		}
	},
	{
		id: "p2",
		code: "PT-10427",
		name: "Nabila Haque",
		guardian: "Imran Haque",
		phone: "+880 1811-337290",
		packageName: "12-Session Package",
		status: {
			label: "Active",
			tone: "success"
		}
	},
	{
		id: "p3",
		code: "PT-10426",
		name: "Rafid Chowdhury",
		guardian: "Sadia Chowdhury",
		phone: "+880 1911-556621",
		packageName: "Daily Payment",
		status: {
			label: "Due",
			tone: "warning"
		}
	},
	{
		id: "p4",
		code: "PT-10425",
		name: "Zarin Tasnim",
		guardian: "Kamrul Hasan",
		phone: "+880 1611-889012",
		packageName: "Monthly Package",
		status: {
			label: "Active",
			tone: "success"
		}
	},
	{
		id: "p5",
		code: "PT-10424",
		name: "Tahmid Alam",
		guardian: "Nusrat Alam",
		phone: "+880 1511-442078",
		packageName: "Assessment Only",
		status: {
			label: "New",
			tone: "info"
		}
	},
	{
		id: "p6",
		code: "PT-10423",
		name: "Ishrat Jahan",
		guardian: "Jubayer Alam",
		phone: "+880 1311-670145",
		packageName: "8-Session Package",
		status: {
			label: "Inactive",
			tone: "neutral"
		}
	}
];
var PENDING_FOLLOW_UPS = [
	{
		id: "f1",
		patient: "Sumaiya Islam",
		phone: "+880 1712-990183",
		lastVisit: "18 Jul 2026",
		daysRemaining: -2,
		priority: {
			label: "Overdue",
			tone: "danger"
		}
	},
	{
		id: "f2",
		patient: "Mahmudul Karim",
		phone: "+880 1819-441026",
		lastVisit: "21 Jul 2026",
		daysRemaining: 0,
		priority: {
			label: "High",
			tone: "danger"
		}
	},
	{
		id: "f3",
		patient: "Arisha Noor",
		phone: "+880 1913-772540",
		lastVisit: "24 Jul 2026",
		daysRemaining: 2,
		priority: {
			label: "Medium",
			tone: "warning"
		}
	},
	{
		id: "f4",
		patient: "Sabbir Ahmed",
		phone: "+880 1614-208931",
		lastVisit: "26 Jul 2026",
		daysRemaining: 4,
		priority: {
			label: "Medium",
			tone: "warning"
		}
	},
	{
		id: "f5",
		patient: "Rumana Akter",
		phone: "+880 1515-663472",
		lastVisit: "28 Jul 2026",
		daysRemaining: 6,
		priority: {
			label: "Low",
			tone: "info"
		}
	}
];
var PAYMENT_SUMMARY = [
	{
		id: "today",
		label: "Today's Collection",
		amount: 28500,
		hint: "34 transactions",
		tone: "success"
	},
	{
		id: "week",
		label: "This Week",
		amount: 202600,
		hint: "218 transactions",
		tone: "primary"
	},
	{
		id: "month",
		label: "This Month",
		amount: 721700,
		hint: "912 transactions",
		tone: "primary"
	},
	{
		id: "due",
		label: "Pending Due",
		amount: 15200,
		hint: "12 invoices unsettled",
		tone: "warning"
	}
];
var PACKAGE_DISTRIBUTION = [
	{
		name: "Daily Package",
		value: 34,
		token: "var(--chart-1)"
	},
	{
		name: "Session-wise Package",
		value: 29,
		token: "var(--chart-2)"
	},
	{
		name: "Monthly Package",
		value: 24,
		token: "var(--chart-3)"
	},
	{
		name: "Online Booking",
		value: 13,
		token: "var(--chart-5)"
	}
];
var INVENTORY_ALERTS = [
	{
		id: "i1",
		item: "Articulation Flash Cards",
		stock: 4,
		minimum: 20,
		status: {
			label: "Critical",
			tone: "danger"
		}
	},
	{
		id: "i2",
		item: "Therapy Mirrors",
		stock: 2,
		minimum: 6,
		status: {
			label: "Critical",
			tone: "danger"
		}
	},
	{
		id: "i3",
		item: "Oral Motor Kits",
		stock: 9,
		minimum: 15,
		status: {
			label: "Low",
			tone: "warning"
		}
	},
	{
		id: "i4",
		item: "Assessment Forms (pad)",
		stock: 12,
		minimum: 25,
		status: {
			label: "Low",
			tone: "warning"
		}
	},
	{
		id: "i5",
		item: "Sanitiser 500ml",
		stock: 14,
		minimum: 20,
		status: {
			label: "Low",
			tone: "warning"
		}
	}
];
var MANAGER_ACTIVITIES = [
	{
		id: "ma1",
		title: "New patient registered",
		description: "Tahmid Alam added by front desk",
		time: "8 minutes ago",
		icon: UserPlus,
		tone: "info"
	},
	{
		id: "ma2",
		title: "Assessment completed",
		description: "Ayaan Rahman · report pending review",
		time: "42 minutes ago",
		icon: ClipboardCheck,
		tone: "success"
	},
	{
		id: "ma3",
		title: "Payment collected",
		description: "৳ 4,500 from Nabila Haque",
		time: "1 hour ago",
		icon: CreditCard,
		tone: "success"
	},
	{
		id: "ma4",
		title: "Therapy session completed",
		description: "Group Therapy Batch A · Hall B",
		time: "2 hours ago",
		icon: Activity,
		tone: "info"
	},
	{
		id: "ma5",
		title: "Package created",
		description: "New 8-session fluency package",
		time: "4 hours ago",
		icon: Boxes,
		tone: "neutral"
	},
	{
		id: "ma6",
		title: "Follow-up completed",
		description: "Nafisa Anjum closed 5 calls",
		time: "Yesterday, 7:10 PM",
		icon: PhoneCall,
		tone: "warning"
	}
];
var MANAGER_QUICK_ACTIONS = [
	{
		id: "register-patient",
		label: "Register New Patient",
		description: "Add a patient record",
		icon: UserPlus
	},
	{
		id: "new-assessment",
		label: "New Assessment",
		description: "Start a speech assessment",
		icon: ClipboardCheck
	},
	{
		id: "individual-therapy",
		label: "Individual Therapy",
		description: "Log a one-to-one session",
		icon: Stethoscope
	},
	{
		id: "group-therapy",
		label: "Group Therapy",
		description: "Log a batch session",
		icon: UsersRound
	},
	{
		id: "schedule-appointment",
		label: "Schedule Appointment",
		description: "Book a new slot",
		icon: CalendarPlus
	},
	{
		id: "create-package",
		label: "Create Payment Package",
		description: "Bundle sessions & pricing",
		icon: Boxes
	},
	{
		id: "collect-payment",
		label: "Collect Payment",
		description: "Record a collection",
		icon: CreditCard
	},
	{
		id: "outdoor-entry",
		label: "Outdoor Register Entry",
		description: "Walk-in consultation log",
		icon: ClipboardList
	},
	{
		id: "daily-report",
		label: "View Daily Report",
		description: "Today's operations",
		icon: FileChartColumnIncreasing
	},
	{
		id: "monthly-report",
		label: "Monthly Report",
		description: "Branch performance",
		icon: CalendarRange
	},
	{
		id: "inventory",
		label: "Inventory",
		description: "Stock & consumables",
		icon: Package
	},
	{
		id: "marketing",
		label: "Marketing",
		description: "Campaigns & outreach",
		icon: Megaphone
	}
];
var TODAY_GOALS = [
	{
		id: "g1",
		label: "Sessions completed",
		current: 31,
		target: 40
	},
	{
		id: "g2",
		label: "Collection target",
		current: 28500,
		target: 35e3
	},
	{
		id: "g3",
		label: "Follow-up calls",
		current: 9,
		target: 23
	}
];
var MANAGER_NOTIFICATIONS = [
	{
		id: "n1",
		title: "2 inventory items hit critical stock",
		time: "10 min ago",
		tone: "danger",
		icon: Package
	},
	{
		id: "n2",
		title: "Online booking received for 4:30 PM",
		time: "35 min ago",
		tone: "info",
		icon: CalendarPlus
	},
	{
		id: "n3",
		title: "Therapist Rezwan Kabir marked leave for Friday",
		time: "2 hours ago",
		tone: "warning",
		icon: BriefcaseMedical
	},
	{
		id: "n4",
		title: "Weekly report is ready to review",
		time: "Yesterday",
		tone: "neutral",
		icon: Bell
	}
];
var PERFORMANCE_SCORE = {
	score: 87,
	grade: "A",
	label: "Excellent",
	breakdown: [
		{
			id: "attendance",
			label: "Attendance",
			value: 92
		},
		{
			id: "collection",
			label: "Collection rate",
			value: 88
		},
		{
			id: "satisfaction",
			label: "Patient satisfaction",
			value: 84
		},
		{
			id: "followup",
			label: "Follow-up closure",
			value: 78
		}
	]
};
var MONTHLY_TARGET = {
	achieved: 721700,
	target: 9e5,
	daysLeft: 5
};
var config$1 = {
	collection: {
		label: "Daily Collection",
		color: "var(--chart-1)"
	},
	expenses: {
		label: "Expenses",
		color: "var(--chart-3)"
	},
	net: {
		label: "Net Income",
		color: "var(--chart-2)"
	}
};
function ManagerRevenueTrend() {
	const [range, setRange] = (0, import_react.useState)("week");
	const data = REVENUE_TREND[range];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
		title: "Revenue Trend",
		description: "Collection, expenses and net income for this branch",
		icon: TrendingUp,
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
			value: range,
			onValueChange: (value) => setRange(value),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
				className: "h-9 w-[140px]",
				"aria-label": "Select revenue period",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
				align: "end",
				children: MANAGER_RANGES.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: option.key,
					children: option.label
				}, option.key))
			})]
		}),
		contentClassName: "flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-5 flex flex-wrap items-center gap-x-6 gap-y-2",
			children: Object.entries(config$1).map(([key, item]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-2 text-[12.5px] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-2 w-2 rounded-full",
					style: { backgroundColor: item.color },
					"aria-hidden": "true"
				}), item.label]
			}, key))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
			config: config$1,
			className: "aspect-auto h-[300px] w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
				data,
				margin: {
					left: 4,
					right: 8,
					top: 4,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						vertical: false,
						strokeDasharray: "4 4",
						className: "stroke-border"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "period",
						tickLine: false,
						axisLine: false,
						tickMargin: 10,
						fontSize: 12
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tickLine: false,
						axisLine: false,
						tickMargin: 8,
						fontSize: 12,
						width: 54,
						tickFormatter: (value) => `${Math.round(value / 1e3)}k`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, { formatter: (value) => formatTaka(Number(value)) }) }),
					Object.entries(config$1).map(([key, item]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: key,
						stroke: item.color,
						strokeWidth: 2,
						dot: false,
						activeDot: { r: 4 },
						isAnimationActive: false
					}, key))
				]
			})
		})]
	});
}
function TherapySummary() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Today's Therapy Summary",
		description: "Session delivery against today's plan",
		icon: Activity,
		contentClassName: "pb-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: THERAPY_SUMMARY.map((item) => {
				const Icon = item.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-border bg-background p-4 transition-enterprise hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-[18px] w-[18px]",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-medium text-foreground",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate text-[12.5px] text-muted-foreground",
									children: [
										item.count,
										" of ",
										item.target,
										" planned"
									]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							tone: item.status.tone,
							label: item.status.label
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
							value: item.progress,
							className: "h-1.5 flex-1",
							"aria-label": `${item.label} completion`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "w-9 shrink-0 text-right text-[12px] tabular-nums text-muted-foreground",
							children: [item.progress, "%"]
						})]
					})]
				}, item.id);
			})
		})
	});
}
var stateLabel = {
	completed: "Completed",
	"in-progress": "In progress",
	upcoming: "Upcoming"
};
function AppointmentSchedule() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Today's Appointment Schedule",
		description: "Session timeline for Dhaka Main Branch",
		icon: CalendarClock,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "relative space-y-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-[7px] top-2 bottom-2 w-px bg-border",
				"aria-hidden": "true"
			}), TODAY_SCHEDULE.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative flex gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("relative z-10 mt-1.5 h-[15px] w-[15px] shrink-0 rounded-full ring-4 ring-card", slot.state === "completed" ? "bg-success" : slot.state === "in-progress" ? "bg-primary" : "bg-muted-foreground/35"),
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-0 flex-1 rounded-lg px-2 py-1 transition-enterprise hover:bg-surface-hover",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate text-sm font-medium text-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums text-muted-foreground",
										children: slot.time
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mx-2 text-border",
										"aria-hidden": "true",
										children: "·"
									}),
									slot.title
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate text-[12.5px] text-muted-foreground",
								children: [
									slot.patient,
									" · ",
									slot.room
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
							tone: slot.tone,
							label: stateLabel[slot.state]
						})]
					})
				})]
			}, slot.id))]
		})
	});
}
var columns$2 = [
	{
		key: "time",
		header: "Time",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular-nums text-muted-foreground",
			children: row.time
		})
	},
	{
		key: "patient",
		header: "Patient",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium text-foreground",
			children: row.patient
		})
	},
	{
		key: "therapy",
		header: "Therapy type",
		cell: (row) => row.therapy
	},
	{
		key: "therapist",
		header: "Therapist",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: row.therapist
		})
	},
	{
		key: "status",
		header: "Status",
		align: "right",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: row.status.tone,
			label: row.status.label
		})
	}
];
function UpcomingAppointments() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Upcoming Appointments",
		description: "Next scheduled sessions for today",
		icon: CalendarDays,
		contentClassName: "px-0 pb-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			columns: columns$2,
			rows: UPCOMING_APPOINTMENTS,
			getRowId: (row) => row.id,
			caption: "Upcoming appointments",
			className: "rounded-none border-0 shadow-none",
			emptyTitle: "No upcoming appointments"
		})
	});
}
var columns$1 = [
	{
		key: "code",
		header: "Patient ID",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[12.5px] text-muted-foreground",
			children: row.code
		})
	},
	{
		key: "name",
		header: "Patient name",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium text-foreground",
			children: row.name
		})
	},
	{
		key: "guardian",
		header: "Guardian",
		cell: (row) => row.guardian
	},
	{
		key: "phone",
		header: "Phone",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular-nums text-muted-foreground",
			children: row.phone
		})
	},
	{
		key: "package",
		header: "Current package",
		cell: (row) => row.packageName
	},
	{
		key: "status",
		header: "Status",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: row.status.tone,
			label: row.status.label
		})
	},
	{
		key: "action",
		header: "Action",
		align: "right",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "sm",
			"aria-label": `View ${row.name}`,
			children: "View"
		})
	}
];
function RecentPatients() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Recent Patients",
		description: "Latest registrations and visits at this branch",
		icon: Users,
		contentClassName: "px-0 pb-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			columns: columns$1,
			rows: RECENT_PATIENTS,
			getRowId: (row) => row.id,
			caption: "Recent patients",
			className: "rounded-none border-0 shadow-none",
			emptyTitle: "No patients yet"
		})
	});
}
function FollowUpList() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Pending Follow-up List",
		description: "Patients awaiting a follow-up call",
		icon: PhoneCall,
		contentClassName: "pb-2",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-3",
			children: PENDING_FOLLOW_UPS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl border border-border bg-background p-4 transition-enterprise hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-sm font-medium text-foreground",
							children: item.patient
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[12.5px] tabular-nums text-muted-foreground",
							children: item.phone
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						tone: item.priority.tone,
						label: item.priority.label
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "min-w-0 truncate text-[12.5px] text-muted-foreground",
						children: [
							"Last visit ",
							item.lastVisit,
							" ·",
							" ",
							item.daysRemaining < 0 ? `${Math.abs(item.daysRemaining)} days overdue` : item.daysRemaining === 0 ? "Due today" : `${item.daysRemaining} days remaining`
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						"aria-label": `Call ${item.patient}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Call"]
					})]
				})]
			}, item.id))
		})
	});
}
var toneClass$2 = {
	primary: "bg-primary/10 text-primary",
	success: "bg-success/12 text-success",
	warning: "bg-warning/15 text-warning"
};
function PaymentSummary() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Payment Summary",
		description: "Collections and outstanding dues in BDT",
		icon: Wallet,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: PAYMENT_SUMMARY.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-background p-4 transition-enterprise hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "min-w-0 truncate text-[13px] font-medium text-muted-foreground",
							children: card.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("grid h-8 w-8 shrink-0 place-items-center rounded-lg", toneClass$2[card.tone]),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[22px] font-semibold leading-none tracking-tight tabular-nums text-foreground",
						children: formatTaka(card.amount)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 truncate text-[12.5px] text-muted-foreground",
						children: card.hint
					})
				]
			}, card.id))
		})
	});
}
var config = Object.fromEntries(PACKAGE_DISTRIBUTION.map((slice) => [slice.name, {
	label: slice.name,
	color: slice.token
}]));
function PackageDistribution() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
		title: "Payment Package Distribution",
		description: "Share of collections by package type",
		icon: ChartPie,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
				config,
				className: "aspect-auto h-[200px] w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, {
					formatter: (value) => `${value}%`,
					hideIndicator: true
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
					data: PACKAGE_DISTRIBUTION,
					dataKey: "value",
					nameKey: "name",
					innerRadius: 58,
					outerRadius: 88,
					paddingAngle: 2,
					strokeWidth: 0,
					isAnimationActive: false,
					children: PACKAGE_DISTRIBUTION.map((slice) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: slice.token }, slice.name))
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xl font-semibold tabular-nums text-foreground",
					children: "100%"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[12px] text-muted-foreground",
					children: "Packages"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-5 space-y-2.5",
			children: PACKAGE_DISTRIBUTION.map((slice) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-2.5 text-[13px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-2.5 w-2.5 shrink-0 rounded-full",
						style: { backgroundColor: slice.token },
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1 truncate text-muted-foreground",
						children: slice.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 font-medium tabular-nums text-foreground",
						children: [slice.value, "%"]
					})
				]
			}, slice.name))
		})]
	});
}
var columns = [
	{
		key: "item",
		header: "Item",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium text-foreground",
			children: row.item
		})
	},
	{
		key: "stock",
		header: "Stock",
		align: "right",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular-nums",
			children: row.stock
		})
	},
	{
		key: "minimum",
		header: "Minimum stock",
		align: "right",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular-nums text-muted-foreground",
			children: row.minimum
		})
	},
	{
		key: "status",
		header: "Status",
		align: "right",
		cell: (row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
			tone: row.status.tone,
			label: row.status.label
		})
	}
];
function InventoryAlerts() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Inventory Alert",
		description: "Items at or below minimum stock level",
		icon: Package,
		contentClassName: "px-0 pb-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
			columns,
			rows: INVENTORY_ALERTS,
			getRowId: (row) => row.id,
			caption: "Inventory alerts",
			className: "rounded-none border-0 shadow-none",
			emptyTitle: "Stock levels are healthy"
		})
	});
}
var toneClass$1 = {
	success: "bg-success/12 text-success",
	warning: "bg-warning/15 text-warning",
	danger: "bg-danger/12 text-danger",
	info: "bg-primary/10 text-primary",
	neutral: "bg-muted text-muted-foreground"
};
function ManagerActivities() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Recent Activities",
		description: "Latest events at Dhaka Main Branch",
		icon: History,
		action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "sm",
			children: "View log"
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "relative space-y-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-[15px] top-2 bottom-2 w-px bg-border",
				"aria-hidden": "true"
			}), MANAGER_ACTIVITIES.map((item) => {
				const Icon = item.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative flex gap-3.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full ring-4 ring-card", toneClass$1[item.tone]),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-medium text-foreground",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-[12.5px] text-muted-foreground",
								children: item.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[12px] text-muted-foreground/80",
								children: item.time
							})
						]
					})]
				}, item.id);
			})]
		})
	});
}
function ManagerQuickActions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Quick Actions",
		description: "Frequently used branch operations",
		icon: Zap,
		showMenu: false,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4",
			children: MANAGER_QUICK_ACTIONS.map((action) => {
				const Icon = action.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "group flex items-start gap-3 rounded-xl border border-border bg-background p-4 text-left transition-enterprise hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-hover hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-enterprise group-hover:bg-primary group-hover:text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-[18px] w-[18px]",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-sm font-medium text-foreground",
							children: action.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-[12.5px] text-muted-foreground",
							children: action.description
						})]
					})]
				}, action.id);
			})
		})
	});
}
var toneClass = {
	success: "bg-success/12 text-success",
	warning: "bg-warning/15 text-warning",
	danger: "bg-danger/12 text-danger",
	info: "bg-primary/10 text-primary",
	neutral: "bg-muted text-muted-foreground"
};
function TodayGoals() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Today's Goals",
		description: "Progress against daily targets",
		icon: Target,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-4",
			children: TODAY_GOALS.map((goal) => {
				const percent = Math.min(100, Math.round(goal.current / goal.target * 100));
				const isMoney = goal.current > 1e3;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 text-[13px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 truncate text-muted-foreground",
						children: goal.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 font-medium tabular-nums text-foreground",
						children: [
							isMoney ? formatTaka(goal.current) : goal.current,
							" /",
							" ",
							isMoney ? formatTaka(goal.target) : goal.target
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
					value: percent,
					className: "mt-2 h-1.5",
					"aria-label": `${goal.label} progress`
				})] }, goal.id);
			})
		})
	});
}
function RecentNotifications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WidgetCard, {
		title: "Recent Notifications",
		description: "Branch alerts and updates",
		icon: Bell,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-4",
			children: MANAGER_NOTIFICATIONS.map((item) => {
				const Icon = item.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("grid h-8 w-8 shrink-0 place-items-center rounded-lg", toneClass[item.tone]),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-medium leading-snug text-foreground",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-[12px] text-muted-foreground",
							children: item.time
						})]
					})]
				}, item.id);
			})
		})
	});
}
function PerformanceScore() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
		title: "Branch Performance Score",
		description: "Composite operational score",
		icon: Trophy,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-success/12 text-success",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xl font-semibold tabular-nums",
					children: PERFORMANCE_SCORE.score
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-semibold text-foreground",
					children: [
						"Grade ",
						PERFORMANCE_SCORE.grade,
						" · ",
						PERFORMANCE_SCORE.label
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12.5px] text-muted-foreground",
					children: "Rolling 30-day average"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-5 space-y-3",
			children: PERFORMANCE_SCORE.breakdown.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 text-[12.5px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "min-w-0 truncate text-muted-foreground",
					children: row.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "shrink-0 font-medium tabular-nums text-foreground",
					children: [row.value, "%"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: row.value,
				className: "mt-1.5 h-1.5",
				"aria-label": row.label
			})] }, row.id))
		})]
	});
}
function MonthlyTarget() {
	const percent = Math.round(MONTHLY_TARGET.achieved / MONTHLY_TARGET.target * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(WidgetCard, {
		title: "Monthly Target Progress",
		description: "July 2026 collection target",
		icon: Gauge,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[26px] font-semibold leading-none tracking-tight tabular-nums text-foreground",
				children: formatTaka(MONTHLY_TARGET.achieved)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-[12.5px] text-muted-foreground",
				children: [
					"of ",
					formatTaka(MONTHLY_TARGET.target),
					" target · ",
					MONTHLY_TARGET.daysLeft,
					" days left"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
				value: percent,
				className: "mt-4 h-2",
				"aria-label": "Monthly target progress"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-[12.5px] font-medium tabular-nums text-success",
				children: [percent, "% achieved"]
			})
		]
	});
}
function ManagerDashboard() {
	const today = new Intl.DateTimeFormat("en-GB", {
		weekday: "long",
		day: "numeric",
		month: "short",
		year: "numeric"
	}).format(/* @__PURE__ */ new Date("2026-07-31T09:00:00Z"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Branch Dashboard",
				description: "Welcome back! Here's your branch overview for today.",
				breadcrumbs: [{
					label: "Branch Manager",
					to: "/manager"
				}, { label: "Dashboard" }],
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden rounded-lg border border-border bg-muted/40 px-3 py-2 text-[12.5px] font-medium text-muted-foreground sm:inline-block",
						children: [
							BRANCH_NAME,
							" · ",
							today
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), "Daily report"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "New Appointment"] })
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				"aria-label": "Key metrics",
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: MANAGER_KPIS.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, { kpi }, kpi.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 2xl:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 2xl:col-span-9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 lg:grid-cols-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManagerRevenueTrend, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TherapySummary, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppointmentSchedule, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpcomingAppointments, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentPatients, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FollowUpList, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentSummary, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageDistribution, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InventoryAlerts, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManagerActivities, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ManagerQuickActions, {})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					"aria-label": "Branch highlights",
					className: "grid gap-6 md:grid-cols-2 2xl:col-span-3 2xl:grid-cols-1 2xl:content-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodayGoals, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonthlyTarget, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PerformanceScore, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentNotifications, {})
					]
				})]
			})
		]
	});
}
//#endregion
export { ManagerDashboard as component };
