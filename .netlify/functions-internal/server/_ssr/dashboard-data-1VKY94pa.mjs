import { $ as PhoneCall, $t as ClipboardCheck, Cn as Boxes, Hn as Activity, N as Settings2, Nn as BadgeCheck, a as Wallet, an as CircleCheck, kn as Banknote, nt as Package, o as Users, p as UserCog, pn as ChartLine, xn as Building2, yn as CalendarCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-data-1VKY94pa.js
var KPIS = [
	{
		id: "branches",
		label: "Total Branches",
		value: "15",
		icon: Building2,
		tone: "primary",
		hint: "Across 6 divisions",
		delta: {
			value: "+2 this month",
			direction: "up"
		}
	},
	{
		id: "active-branches",
		label: "Active Branches",
		value: "14",
		icon: CircleCheck,
		tone: "success",
		hint: "1 branch under renovation"
	},
	{
		id: "patients",
		label: "Total Patients",
		value: "1,245",
		icon: Users,
		tone: "primary",
		hint: "Registered organisation-wide",
		delta: {
			value: "+8%",
			direction: "up"
		}
	},
	{
		id: "sessions",
		label: "Today's Sessions",
		value: "138",
		icon: CalendarCheck,
		tone: "primary",
		hint: "96 completed · 42 upcoming"
	},
	{
		id: "revenue",
		label: "Monthly Revenue",
		value: "৳ 8,45,000",
		icon: Wallet,
		tone: "success",
		hint: "July 2026 to date",
		delta: {
			value: "+12%",
			direction: "up"
		}
	},
	{
		id: "follow-ups",
		label: "Pending Follow-ups",
		value: "64",
		icon: PhoneCall,
		tone: "warning",
		hint: "18 overdue by 3+ days"
	},
	{
		id: "staff",
		label: "Staff Members",
		value: "85",
		icon: UserCog,
		tone: "primary",
		hint: "52 therapists · 33 support"
	},
	{
		id: "inventory",
		label: "Low Inventory Alerts",
		value: "7",
		icon: Package,
		tone: "danger",
		hint: "3 items critical"
	}
];
var REVENUE_RANGES = [
	{
		key: "30d",
		label: "Last 30 days"
	},
	{
		key: "6m",
		label: "Last 6 months"
	},
	{
		key: "1y",
		label: "Last year"
	}
];
var REVENUE_SERIES = {
	"30d": [
		{
			period: "1 Jul",
			revenue: 268e3,
			collection: 242e3,
			expenses: 148e3
		},
		{
			period: "5 Jul",
			revenue: 292e3,
			collection: 264e3,
			expenses: 152e3
		},
		{
			period: "10 Jul",
			revenue: 311e3,
			collection: 288e3,
			expenses: 161e3
		},
		{
			period: "15 Jul",
			revenue: 356e3,
			collection: 318e3,
			expenses: 172e3
		},
		{
			period: "20 Jul",
			revenue: 402e3,
			collection: 371e3,
			expenses: 178e3
		},
		{
			period: "25 Jul",
			revenue: 438e3,
			collection: 405e3,
			expenses: 186e3
		},
		{
			period: "30 Jul",
			revenue: 471e3,
			collection: 442e3,
			expenses: 191e3
		}
	],
	"6m": [
		{
			period: "Feb",
			revenue: 612e3,
			collection: 561e3,
			expenses: 348e3
		},
		{
			period: "Mar",
			revenue: 658e3,
			collection: 604e3,
			expenses: 361e3
		},
		{
			period: "Apr",
			revenue: 701e3,
			collection: 655e3,
			expenses: 372e3
		},
		{
			period: "May",
			revenue: 744e3,
			collection: 692e3,
			expenses: 389e3
		},
		{
			period: "Jun",
			revenue: 793e3,
			collection: 738e3,
			expenses: 401e3
		},
		{
			period: "Jul",
			revenue: 845e3,
			collection: 781e3,
			expenses: 418e3
		}
	],
	"1y": [
		{
			period: "Aug",
			revenue: 462e3,
			collection: 421e3,
			expenses: 288e3
		},
		{
			period: "Sep",
			revenue: 495e3,
			collection: 452e3,
			expenses: 296e3
		},
		{
			period: "Oct",
			revenue: 528e3,
			collection: 486e3,
			expenses: 305e3
		},
		{
			period: "Nov",
			revenue: 551e3,
			collection: 508e3,
			expenses: 318e3
		},
		{
			period: "Dec",
			revenue: 604e3,
			collection: 559e3,
			expenses: 336e3
		},
		{
			period: "Jan",
			revenue: 587e3,
			collection: 541e3,
			expenses: 331e3
		},
		{
			period: "Feb",
			revenue: 612e3,
			collection: 561e3,
			expenses: 348e3
		},
		{
			period: "Mar",
			revenue: 658e3,
			collection: 604e3,
			expenses: 361e3
		},
		{
			period: "Apr",
			revenue: 701e3,
			collection: 655e3,
			expenses: 372e3
		},
		{
			period: "May",
			revenue: 744e3,
			collection: 692e3,
			expenses: 389e3
		},
		{
			period: "Jun",
			revenue: 793e3,
			collection: 738e3,
			expenses: 401e3
		},
		{
			period: "Jul",
			revenue: 845e3,
			collection: 781e3,
			expenses: 418e3
		}
	]
};
var TOP_BRANCHES = [
	{
		id: "dhanmondi",
		name: "Dhanmondi Centre",
		city: "Dhaka",
		manager: "Farhana Rahman",
		revenue: 184e3,
		patients: 214,
		target: 92,
		status: {
			label: "Excellent",
			tone: "success"
		}
	},
	{
		id: "gulshan",
		name: "Gulshan Clinic",
		city: "Dhaka",
		manager: "Imran Hossain",
		revenue: 162500,
		patients: 198,
		target: 86,
		status: {
			label: "Excellent",
			tone: "success"
		}
	},
	{
		id: "chattogram",
		name: "Chattogram Hub",
		city: "Chattogram",
		manager: "Nusrat Jahan",
		revenue: 128400,
		patients: 165,
		target: 74,
		status: {
			label: "On track",
			tone: "info"
		}
	},
	{
		id: "sylhet",
		name: "Sylhet Centre",
		city: "Sylhet",
		manager: "Tanvir Ahmed",
		revenue: 96200,
		patients: 131,
		target: 61,
		status: {
			label: "Watchlist",
			tone: "warning"
		}
	},
	{
		id: "rajshahi",
		name: "Rajshahi Branch",
		city: "Rajshahi",
		manager: "Sadia Karim",
		revenue: 71800,
		patients: 104,
		target: 48,
		status: {
			label: "Below target",
			tone: "danger"
		}
	}
];
var PATIENT_GROWTH = [
	{
		month: "Feb",
		patients: 812,
		newPatients: 64
	},
	{
		month: "Mar",
		patients: 889,
		newPatients: 77
	},
	{
		month: "Apr",
		patients: 964,
		newPatients: 75
	},
	{
		month: "May",
		patients: 1058,
		newPatients: 94
	},
	{
		month: "Jun",
		patients: 1152,
		newPatients: 94
	},
	{
		month: "Jul",
		patients: 1245,
		newPatients: 93
	}
];
var PAYMENT_DISTRIBUTION = [
	{
		name: "Daily Payment",
		value: 38,
		token: "var(--chart-1)"
	},
	{
		name: "Session Package",
		value: 27,
		token: "var(--chart-2)"
	},
	{
		name: "Monthly Package",
		value: 21,
		token: "var(--chart-3)"
	},
	{
		name: "Online Booking",
		value: 14,
		token: "var(--chart-5)"
	}
];
var THERAPY_STATS = [
	{
		name: "Individual Therapy",
		sessions: 682
	},
	{
		name: "Group Therapy",
		sessions: 341
	},
	{
		name: "Assessment",
		sessions: 218
	},
	{
		name: "Follow-up",
		sessions: 164
	}
];
var RECENT_BRANCHES = [
	{
		id: "uttara",
		name: "Uttara Centre",
		city: "Dhaka",
		manager: "Rezaul Haque",
		managerRole: "Branch Manager",
		patients: 86,
		revenue: 54200,
		status: {
			label: "Active",
			tone: "success"
		}
	},
	{
		id: "khulna",
		name: "Khulna Clinic",
		city: "Khulna",
		manager: "Maliha Sultana",
		managerRole: "Branch Manager",
		patients: 72,
		revenue: 41800,
		status: {
			label: "Active",
			tone: "success"
		}
	},
	{
		id: "bogura",
		name: "Bogura Branch",
		city: "Bogura",
		manager: "Arif Chowdhury",
		managerRole: "Acting Manager",
		patients: 45,
		revenue: 26400,
		status: {
			label: "Onboarding",
			tone: "info"
		}
	},
	{
		id: "cumilla",
		name: "Cumilla Centre",
		city: "Cumilla",
		manager: "Shirin Akter",
		managerRole: "Branch Manager",
		patients: 38,
		revenue: 19750,
		status: {
			label: "Pending setup",
			tone: "warning"
		}
	},
	{
		id: "barishal",
		name: "Barishal Branch",
		city: "Barishal",
		manager: "Jubayer Alam",
		managerRole: "Branch Manager",
		patients: 21,
		revenue: 8900,
		status: {
			label: "Renovation",
			tone: "neutral"
		}
	}
];
var RECENT_ACTIVITIES = [
	{
		id: "a1",
		title: "Branch created",
		description: "Uttara Centre was added by Dr. Amara Whitfield",
		time: "12 minutes ago",
		icon: Building2,
		tone: "info"
	},
	{
		id: "a2",
		title: "Payment collected",
		description: "৳ 24,500 collected at Dhanmondi Centre",
		time: "48 minutes ago",
		icon: Banknote,
		tone: "success"
	},
	{
		id: "a3",
		title: "Assessment completed",
		description: "18 speech assessments finalised at Gulshan Clinic",
		time: "2 hours ago",
		icon: ClipboardCheck,
		tone: "info"
	},
	{
		id: "a4",
		title: "Package created",
		description: "New 12-session articulation package published",
		time: "5 hours ago",
		icon: Boxes,
		tone: "neutral"
	},
	{
		id: "a5",
		title: "Follow-up completed",
		description: "Nusrat Jahan closed 9 pending follow-up calls",
		time: "Yesterday, 6:20 PM",
		icon: PhoneCall,
		tone: "warning"
	}
];
var QUICK_ACTIONS = [
	{
		id: "create-branch",
		label: "Create Branch",
		description: "Add a new location",
		icon: Building2
	},
	{
		id: "view-reports",
		label: "View Reports",
		description: "Operational summaries",
		icon: ClipboardCheck
	},
	{
		id: "view-analytics",
		label: "View Analytics",
		description: "Trends & forecasts",
		icon: ChartLine
	},
	{
		id: "manage-packages",
		label: "Manage Packages",
		description: "Therapy bundles",
		icon: Boxes
	},
	{
		id: "system-settings",
		label: "System Settings",
		description: "Organisation config",
		icon: Settings2
	},
	{
		id: "branch-performance",
		label: "Branch Performance",
		description: "Scorecards",
		icon: Activity
	}
];
var SYSTEM_OVERVIEW = [
	{
		id: "server",
		label: "Server Status",
		value: "Healthy",
		icon: Activity,
		tone: "success"
	},
	{
		id: "database",
		label: "Database",
		value: "Connected",
		icon: BadgeCheck,
		tone: "success"
	},
	{
		id: "backup",
		label: "Today's Backup",
		value: "Completed",
		icon: CircleCheck,
		tone: "info"
	},
	{
		id: "version",
		label: "System Version",
		value: "v1.0",
		icon: Package,
		tone: "neutral"
	}
];
/** Formats an amount as Bangladeshi Taka with lakh/crore digit grouping. */
function formatTaka(amount) {
	return `৳ ${new Intl.NumberFormat("en-IN").format(amount)}`;
}
//#endregion
export { RECENT_ACTIVITIES as a, REVENUE_SERIES as c, TOP_BRANCHES as d, formatTaka as f, QUICK_ACTIONS as i, SYSTEM_OVERVIEW as l, PATIENT_GROWTH as n, RECENT_BRANCHES as o, PAYMENT_DISTRIBUTION as r, REVENUE_RANGES as s, KPIS as t, THERAPY_STATS as u };
