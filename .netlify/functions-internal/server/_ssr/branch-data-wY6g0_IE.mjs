import { $t as ClipboardCheck, an as CircleCheck, kn as Banknote, o as Users, p as UserCog, rn as CirclePause, u as UserPlus, xn as Building2, yn as CalendarCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/branch-data-wY6g0_IE.js
var BRANCH_STATUS_TONE = {
	Active: "success",
	Inactive: "neutral",
	Pending: "warning",
	Suspended: "danger"
};
var BRANCHES = [
	{
		id: "dhaka-main",
		code: "BR-DHK-001",
		name: "Dhaka Main Branch",
		manager: {
			name: "Farhana Rahman",
			phone: "+880 1711-204588",
			email: "farhana.rahman@speecherp.com.bd",
			since: "2023-02-14"
		},
		phone: "+880 2-9611230",
		email: "dhaka.main@speecherp.com.bd",
		city: "Dhaka",
		division: "Dhaka",
		district: "Dhaka",
		address: "House 42, Road 8, Dhanmondi R/A, Dhaka 1209",
		patients: 314,
		staff: 26,
		therapists: 15,
		monthlyRevenue: 184e3,
		todaysCollection: 21450,
		sessions: 48,
		status: "Active",
		createdAt: "2023-02-10",
		workingHours: "09:00 — 20:00 (Sat–Thu)"
	},
	{
		id: "gulshan",
		code: "BR-DHK-002",
		name: "Gulshan Branch",
		manager: {
			name: "Imran Hossain",
			phone: "+880 1712-889034",
			email: "imran.hossain@speecherp.com.bd",
			since: "2023-06-01"
		},
		phone: "+880 2-9884471",
		email: "gulshan@speecherp.com.bd",
		city: "Dhaka",
		division: "Dhaka",
		district: "Dhaka",
		address: "Plot 11, Road 71, Gulshan 2, Dhaka 1212",
		patients: 268,
		staff: 22,
		therapists: 13,
		monthlyRevenue: 162500,
		todaysCollection: 18900,
		sessions: 41,
		status: "Active",
		createdAt: "2023-05-22",
		workingHours: "09:00 — 20:00 (Sat–Thu)"
	},
	{
		id: "chattogram",
		code: "BR-CTG-003",
		name: "Chattogram Branch",
		manager: {
			name: "Nusrat Jahan",
			phone: "+880 1819-447120",
			email: "nusrat.jahan@speecherp.com.bd",
			since: "2024-01-08"
		},
		phone: "+880 31-2556710",
		email: "chattogram@speecherp.com.bd",
		city: "Chattogram",
		division: "Chattogram",
		district: "Chattogram",
		address: "GEC Circle, 1259 CDA Avenue, Chattogram 4000",
		patients: 212,
		staff: 18,
		therapists: 11,
		monthlyRevenue: 128400,
		todaysCollection: 14320,
		sessions: 34,
		status: "Active",
		createdAt: "2023-12-19",
		workingHours: "09:30 — 19:30 (Sat–Thu)"
	},
	{
		id: "sylhet",
		code: "BR-SYL-004",
		name: "Sylhet Branch",
		manager: {
			name: "Tanvir Ahmed",
			phone: "+880 1730-556218",
			email: "tanvir.ahmed@speecherp.com.bd",
			since: "2024-04-17"
		},
		phone: "+880 821-728840",
		email: "sylhet@speecherp.com.bd",
		city: "Sylhet",
		division: "Sylhet",
		district: "Sylhet",
		address: "Zindabazar Point, Shahjalal Road, Sylhet 3100",
		patients: 148,
		staff: 14,
		therapists: 8,
		monthlyRevenue: 96200,
		todaysCollection: 9840,
		sessions: 26,
		status: "Active",
		createdAt: "2024-04-02",
		workingHours: "10:00 — 19:00 (Sat–Thu)"
	},
	{
		id: "rajshahi",
		code: "BR-RAJ-005",
		name: "Rajshahi Branch",
		manager: {
			name: "Sadia Karim",
			phone: "+880 1745-330192",
			email: "sadia.karim@speecherp.com.bd",
			since: "2024-09-05"
		},
		phone: "+880 721-774510",
		email: "rajshahi@speecherp.com.bd",
		city: "Rajshahi",
		division: "Rajshahi",
		district: "Rajshahi",
		address: "Shaheb Bazar Zero Point, Boalia, Rajshahi 6100",
		patients: 104,
		staff: 11,
		therapists: 6,
		monthlyRevenue: 71800,
		todaysCollection: 6420,
		sessions: 19,
		status: "Pending",
		createdAt: "2024-08-28",
		workingHours: "10:00 — 18:00 (Sat–Thu)"
	},
	{
		id: "khulna",
		code: "BR-KHL-006",
		name: "Khulna Branch",
		manager: {
			name: "Maliha Sultana",
			phone: "+880 1766-901255",
			email: "maliha.sultana@speecherp.com.bd",
			since: "2025-01-20"
		},
		phone: "+880 41-812340",
		email: "khulna@speecherp.com.bd",
		city: "Khulna",
		division: "Khulna",
		district: "Khulna",
		address: "Sonadanga Residential Area, KDA Avenue, Khulna 9100",
		patients: 92,
		staff: 10,
		therapists: 6,
		monthlyRevenue: 58400,
		todaysCollection: 5210,
		sessions: 16,
		status: "Active",
		createdAt: "2025-01-11",
		workingHours: "10:00 — 18:00 (Sat–Thu)"
	},
	{
		id: "barishal",
		code: "BR-BAR-007",
		name: "Barishal Branch",
		manager: {
			name: "Jubayer Alam",
			phone: "+880 1788-114073",
			email: "jubayer.alam@speecherp.com.bd",
			since: "2025-05-12"
		},
		phone: "+880 431-64220",
		email: "barishal@speecherp.com.bd",
		city: "Barishal",
		division: "Barishal",
		district: "Barishal",
		address: "Sadar Road, Band Road Junction, Barishal 8200",
		patients: 47,
		staff: 7,
		therapists: 4,
		monthlyRevenue: 28900,
		todaysCollection: 2180,
		sessions: 9,
		status: "Inactive",
		createdAt: "2025-05-04",
		workingHours: "10:00 — 17:00 (Sat–Thu)"
	},
	{
		id: "cumilla",
		code: "BR-CUM-008",
		name: "Cumilla Branch",
		manager: {
			name: "Shirin Akter",
			phone: "+880 1799-620884",
			email: "shirin.akter@speecherp.com.bd",
			since: "2025-11-03"
		},
		phone: "+880 81-76455",
		email: "cumilla@speecherp.com.bd",
		city: "Cumilla",
		division: "Chattogram",
		district: "Cumilla",
		address: "Kandirpar Circle, Race Course, Cumilla 3500",
		patients: 38,
		staff: 6,
		therapists: 3,
		monthlyRevenue: 19750,
		todaysCollection: 1640,
		sessions: 7,
		status: "Suspended",
		createdAt: "2025-10-21",
		workingHours: "10:00 — 17:00 (Sat–Thu)"
	}
];
var DIVISIONS = [
	"Dhaka",
	"Chattogram",
	"Sylhet",
	"Rajshahi",
	"Khulna",
	"Barishal",
	"Rangpur",
	"Mymensingh"
];
var BRANCH_STATUSES = [
	"Active",
	"Inactive",
	"Pending",
	"Suspended"
];
var MANAGERS = BRANCHES.map((branch) => branch.manager.name);
var DATE_RANGES = [
	{
		key: "all",
		label: "All time"
	},
	{
		key: "30d",
		label: "Last 30 days"
	},
	{
		key: "90d",
		label: "Last 90 days"
	},
	{
		key: "1y",
		label: "Last 12 months"
	}
];
var BRANCH_KPIS = [
	{
		id: "total",
		label: "Total Branches",
		value: String(BRANCHES.length),
		icon: Building2,
		tone: "primary",
		hint: "Across 6 divisions",
		delta: {
			value: "+2 this quarter",
			direction: "up"
		}
	},
	{
		id: "active",
		label: "Active Branches",
		value: String(BRANCHES.filter((b) => b.status === "Active").length),
		icon: CircleCheck,
		tone: "success",
		hint: "Operating normally"
	},
	{
		id: "inactive",
		label: "Inactive Branches",
		value: String(BRANCHES.filter((b) => b.status !== "Active").length),
		icon: CirclePause,
		tone: "warning",
		hint: "Pending, inactive or suspended"
	},
	{
		id: "patients",
		label: "Total Patients",
		value: new Intl.NumberFormat("en-IN").format(BRANCHES.reduce((sum, b) => sum + b.patients, 0)),
		icon: Users,
		tone: "primary",
		hint: "Registered organisation-wide",
		delta: {
			value: "+8%",
			direction: "up"
		}
	},
	{
		id: "revenue",
		label: "Monthly Revenue",
		value: `৳ ${new Intl.NumberFormat("en-IN").format(BRANCHES.reduce((sum, b) => sum + b.monthlyRevenue, 0))}`,
		icon: Banknote,
		tone: "success",
		hint: "July 2026 to date",
		delta: {
			value: "+12%",
			direction: "up"
		}
	},
	{
		id: "staff",
		label: "Total Staff",
		value: String(BRANCHES.reduce((sum, b) => sum + b.staff, 0)),
		icon: UserCog,
		tone: "primary",
		hint: "66 therapists · 48 support"
	}
];
var BRANCH_ACTIVITIES = [
	{
		id: "b1",
		title: "Payment collected",
		description: "৳ 12,400 collected from 9 patients",
		time: "35 minutes ago",
		icon: Banknote,
		tone: "success"
	},
	{
		id: "b2",
		title: "New patient registered",
		description: "Ayaan Chowdhury enrolled for articulation therapy",
		time: "2 hours ago",
		icon: UserPlus,
		tone: "info"
	},
	{
		id: "b3",
		title: "Assessment completed",
		description: "6 speech assessments finalised by the clinical team",
		time: "4 hours ago",
		icon: ClipboardCheck,
		tone: "info"
	},
	{
		id: "b4",
		title: "Session schedule published",
		description: "Next week's therapist roster confirmed",
		time: "Yesterday, 5:40 PM",
		icon: CalendarCheck,
		tone: "neutral"
	},
	{
		id: "b5",
		title: "Manager assigned",
		description: "Branch manager permissions were updated",
		time: "3 days ago",
		icon: UserCog,
		tone: "warning"
	}
];
var BRANCH_REVENUE_TREND = [
	{
		month: "Feb",
		revenue: 128e3,
		collection: 118400
	},
	{
		month: "Mar",
		revenue: 139500,
		collection: 127800
	},
	{
		month: "Apr",
		revenue: 146200,
		collection: 138100
	},
	{
		month: "May",
		revenue: 158900,
		collection: 147600
	},
	{
		month: "Jun",
		revenue: 171300,
		collection: 160200
	},
	{
		month: "Jul",
		revenue: 184e3,
		collection: 172500
	}
];
function findBranch(id) {
	return BRANCHES.find((branch) => branch.id === id);
}
//#endregion
export { BRANCH_STATUSES as a, DIVISIONS as c, BRANCH_REVENUE_TREND as i, MANAGERS as l, BRANCH_ACTIVITIES as n, BRANCH_STATUS_TONE as o, BRANCH_KPIS as r, DATE_RANGES as s, BRANCHES as t, findBranch as u };
