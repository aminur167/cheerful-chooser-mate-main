import { An as BanknoteArrowUp, Et as Layers, Kt as CreditCard, Pt as Globe, a as Wallet, hn as CalendarRange, jt as Hourglass, y as TriangleAlert } from "../_libs/lucide-react.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-data-DkduNZNP.js
var PAYMENT_STATUS_TONE = {
	Paid: "success",
	Partial: "warning",
	Due: "danger",
	Pending: "info",
	Refunded: "neutral"
};
var INVOICE_STATUS_TONE = {
	Paid: "success",
	Partial: "warning",
	Unpaid: "info",
	Overdue: "danger"
};
var PACKAGE_STATUS_TONE = {
	Active: "success",
	Inactive: "neutral",
	Draft: "warning"
};
var PACKAGE_TYPE_TONE = {
	Daily: "info",
	"Session Wise": "info",
	Monthly: "success",
	"Online Booking": "warning"
};
var PACKAGE_TYPES = [
	"Daily",
	"Session Wise",
	"Monthly",
	"Online Booking"
];
var PACKAGE_STATUSES = [
	"Active",
	"Inactive",
	"Draft"
];
var PAYMENT_METHODS = [
	"Cash",
	"Card",
	"Mobile Banking",
	"Bank Transfer"
];
var PAYMENT_STATUSES = [
	"Paid",
	"Partial",
	"Due",
	"Pending",
	"Refunded"
];
var PAYMENT_DATE_RANGES = [
	{
		key: "all",
		label: "All dates"
	},
	{
		key: "today",
		label: "Today"
	},
	{
		key: "7d",
		label: "Last 7 days"
	},
	{
		key: "30d",
		label: "Last 30 days"
	}
];
var PAYMENT_TABS = [
	{
		value: "packages",
		label: "Payment Packages"
	},
	{
		value: "collection",
		label: "Payment Collection"
	},
	{
		value: "invoices",
		label: "Invoices"
	},
	{
		value: "history",
		label: "Payment History"
	}
];
var COLLECTED_BY = [
	"Nusrat Jahan (Manager)",
	"Tanvir Hasan (Manager)",
	"Sadia Afrin (Front Desk)"
];
var TODAY_ISO = "2026-07-31";
var TODAY = /* @__PURE__ */ new Date(TODAY_ISO);
var PAYMENT_PACKAGES = [
	{
		id: "daily-therapy",
		code: "PKG-DLY-01",
		name: "Daily Therapy",
		type: "Daily",
		description: "Pay-as-you-go single therapy sitting. Ideal for guardians travelling from outside Dhaka.",
		price: 1200,
		registrationFee: 500,
		discount: 0,
		durationLabel: "1 day",
		sessions: 1,
		expiry: "Same day",
		refundPolicy: "Refundable before session start (placeholder)",
		status: "Active",
		enrolledPatients: 34,
		monthlyRevenue: 40800
	},
	{
		id: "session-5",
		code: "PKG-SES-05",
		name: "5 Session Package",
		type: "Session Wise",
		description: "Short course of five therapy sessions with one progress review at the end of the cycle.",
		price: 5500,
		registrationFee: 500,
		discount: 5,
		durationLabel: "1 month",
		sessions: 5,
		expiry: "30 days from purchase",
		refundPolicy: "Unused sessions refundable within 15 days (placeholder)",
		status: "Active",
		enrolledPatients: 41,
		monthlyRevenue: 225500
	},
	{
		id: "session-10",
		code: "PKG-SES-10",
		name: "10 Session Package",
		type: "Session Wise",
		description: "Standard articulation and language course of ten sessions with two guardian counselling slots.",
		price: 10500,
		registrationFee: 500,
		discount: 8,
		durationLabel: "2 months",
		sessions: 10,
		expiry: "60 days from purchase",
		refundPolicy: "Unused sessions refundable within 30 days (placeholder)",
		status: "Active",
		enrolledPatients: 58,
		monthlyRevenue: 609e3
	},
	{
		id: "monthly-premium",
		code: "PKG-MON-01",
		name: "Monthly Premium Plan",
		type: "Monthly",
		description: "Twelve sessions per month, priority scheduling, home-practice plan and monthly progress report.",
		price: 14e3,
		registrationFee: 1e3,
		discount: 10,
		durationLabel: "1 month (auto renew)",
		sessions: 12,
		expiry: "Last day of the billing month",
		refundPolicy: "Pro-rata adjustment on next invoice (placeholder)",
		status: "Active",
		enrolledPatients: 26,
		monthlyRevenue: 364e3
	},
	{
		id: "online-assessment",
		code: "PKG-ONL-01",
		name: "Online Assessment Booking",
		type: "Online Booking",
		description: "Video assessment slot booked online with an advance payment and a written screening summary.",
		price: 2500,
		registrationFee: 0,
		discount: 0,
		durationLabel: "45 minutes",
		sessions: 1,
		expiry: "7 days from booking",
		refundPolicy: "Reschedule once, no cash refund (placeholder)",
		status: "Active",
		enrolledPatients: 19,
		monthlyRevenue: 47500
	},
	{
		id: "monthly-group",
		code: "PKG-MON-02",
		name: "Monthly Group Plan",
		type: "Monthly",
		description: "Eight small-group sessions per month for social communication and play-based language goals.",
		price: 8500,
		registrationFee: 1e3,
		discount: 0,
		durationLabel: "1 month",
		sessions: 8,
		expiry: "Last day of the billing month",
		refundPolicy: "Non refundable after third session (placeholder)",
		status: "Draft",
		enrolledPatients: 0,
		monthlyRevenue: 0
	}
];
function findPackage(id) {
	return PAYMENT_PACKAGES.find((item) => item.id === id);
}
var PAYMENT_RECORDS = [
	{
		id: "pay-1001",
		receiptNo: "RCP-2026-1001",
		invoiceNo: "INV-2026-0741",
		patientId: "rahim-ahmed",
		patientName: "Rahim Ahmed",
		patientCode: "PT-DHK-1001",
		patientAge: 8,
		patientPhone: "+880 1711-458920",
		guardianName: "Md. Karim Ahmed",
		branch: "Dhaka Main Branch",
		packageId: "monthly-premium",
		packageName: "Monthly Premium Plan",
		packageType: "Monthly",
		amount: 14e3,
		discount: 1400,
		paid: 12600,
		due: 0,
		method: "Mobile Banking",
		reference: "bKash TRX 8FJ2K9QP",
		paymentDate: "2026-07-31",
		collectedBy: "Nusrat Jahan (Manager)",
		status: "Paid",
		invoiceStatus: "Paid",
		remarks: "July cycle cleared in full on the first visit of the month.",
		totalSessions: 12,
		remainingSessions: 5,
		daysOverdue: 0,
		reminderStatus: "Not sent",
		nextDueDate: "2026-08-05",
		timeline: [
			{
				id: "t1",
				icon: "registration",
				title: "Registration fee paid",
				description: "One-time enrolment fee received in cash at the front desk.",
				date: "2026-02-18",
				amount: 1e3,
				tone: "info"
			},
			{
				id: "t2",
				icon: "package",
				title: "Monthly Premium Plan purchased",
				description: "Twelve sessions per month with 10% guardian discount applied.",
				date: "2026-02-24",
				amount: 12600,
				tone: "success"
			},
			{
				id: "t3",
				icon: "session",
				title: "Session payment collected",
				description: "June cycle settled via bKash before session 9.",
				date: "2026-06-05",
				amount: 12600,
				tone: "success"
			},
			{
				id: "t4",
				icon: "package",
				title: "July renewal collected",
				description: "Auto renewal confirmed by guardian over phone.",
				date: "2026-07-31",
				amount: 12600,
				tone: "success"
			}
		]
	},
	{
		id: "pay-1002",
		receiptNo: "RCP-2026-1002",
		invoiceNo: "INV-2026-0742",
		patientId: "tahmid-hasan",
		patientName: "Tahmid Hasan",
		patientCode: "PT-DHK-1002",
		patientAge: 6,
		patientPhone: "+880 1819-772341",
		guardianName: "Shahnaz Parvin",
		branch: "Dhaka Main Branch",
		packageId: "session-10",
		packageName: "10 Session Package",
		packageType: "Session Wise",
		amount: 10500,
		discount: 840,
		paid: 6e3,
		due: 3660,
		method: "Cash",
		reference: "—",
		paymentDate: "2026-07-29",
		collectedBy: "Sadia Afrin (Front Desk)",
		status: "Partial",
		invoiceStatus: "Partial",
		remarks: "Guardian requested to clear the balance after salary week.",
		totalSessions: 10,
		remainingSessions: 4,
		daysOverdue: 2,
		reminderStatus: "Reminder sent",
		nextDueDate: "2026-08-02",
		timeline: [
			{
				id: "t1",
				icon: "registration",
				title: "Registration fee paid",
				description: "Enrolment completed after initial screening.",
				date: "2026-03-04",
				amount: 500,
				tone: "info"
			},
			{
				id: "t2",
				icon: "package",
				title: "10 Session Package purchased",
				description: "8% package discount applied by the branch manager.",
				date: "2026-07-12",
				amount: 9660,
				tone: "success"
			},
			{
				id: "t3",
				icon: "session",
				title: "Part payment collected",
				description: "Cash received at reception against receipt RCP-2026-1002.",
				date: "2026-07-29",
				amount: 6e3,
				tone: "warning"
			},
			{
				id: "t4",
				icon: "reminder",
				title: "Due reminder sent",
				description: "SMS reminder for the remaining balance sent to the guardian.",
				date: "2026-07-30",
				tone: "danger"
			}
		]
	},
	{
		id: "pay-1003",
		receiptNo: "RCP-2026-1003",
		invoiceNo: "INV-2026-0743",
		patientId: "ayesha-siddika",
		patientName: "Ayesha Siddika",
		patientCode: "PT-DHK-1003",
		patientAge: 5,
		patientPhone: "+880 1521-330187",
		guardianName: "Rokeya Begum",
		branch: "Dhaka Main Branch",
		packageId: "session-5",
		packageName: "5 Session Package",
		packageType: "Session Wise",
		amount: 5500,
		discount: 275,
		paid: 5225,
		due: 0,
		method: "Card",
		reference: "VISA **** 4417",
		paymentDate: "2026-07-28",
		collectedBy: "Nusrat Jahan (Manager)",
		status: "Paid",
		invoiceStatus: "Paid",
		remarks: "Card payment approved on first attempt.",
		totalSessions: 5,
		remainingSessions: 2,
		daysOverdue: 0,
		reminderStatus: "Not sent",
		nextDueDate: "2026-08-20",
		timeline: [{
			id: "t1",
			icon: "registration",
			title: "Registration fee paid",
			description: "Front desk enrolment with guardian NID verification.",
			date: "2026-05-11",
			amount: 500,
			tone: "info"
		}, {
			id: "t2",
			icon: "package",
			title: "5 Session Package purchased",
			description: "Short articulation course selected after assessment.",
			date: "2026-07-28",
			amount: 5225,
			tone: "success"
		}]
	},
	{
		id: "pay-1004",
		receiptNo: "RCP-2026-1004",
		invoiceNo: "INV-2026-0744",
		patientId: "arafat-rahman",
		patientName: "Arafat Rahman",
		patientCode: "PT-CTG-1004",
		patientAge: 9,
		patientPhone: "+880 1913-664520",
		guardianName: "Mizanur Rahman",
		branch: "Chattogram Branch",
		packageId: "daily-therapy",
		packageName: "Daily Therapy",
		packageType: "Daily",
		amount: 1200,
		discount: 0,
		paid: 1200,
		due: 0,
		method: "Cash",
		reference: "—",
		paymentDate: "2026-07-31",
		collectedBy: "Tanvir Hasan (Manager)",
		status: "Paid",
		invoiceStatus: "Paid",
		remarks: "Walk-in sitting, guardian travelling from Cox's Bazar.",
		totalSessions: 1,
		remainingSessions: 0,
		daysOverdue: 0,
		reminderStatus: "Not sent",
		nextDueDate: "—",
		timeline: [{
			id: "t1",
			icon: "session",
			title: "Daily session payment collected",
			description: "Single sitting paid in cash before the session.",
			date: "2026-07-31",
			amount: 1200,
			tone: "success"
		}]
	},
	{
		id: "pay-1005",
		receiptNo: "RCP-2026-1005",
		invoiceNo: "INV-2026-0745",
		patientId: "nusrat-jahan",
		patientName: "Nusrat Jahan Mim",
		patientCode: "PT-DHK-1005",
		patientAge: 7,
		patientPhone: "+880 1717-889201",
		guardianName: "Abdul Mannan",
		branch: "Dhaka Main Branch",
		packageId: "monthly-premium",
		packageName: "Monthly Premium Plan",
		packageType: "Monthly",
		amount: 14e3,
		discount: 1400,
		paid: 6e3,
		due: 6600,
		method: "Bank Transfer",
		reference: "DBBL NEFT 55210934",
		paymentDate: "2026-07-18",
		collectedBy: "Nusrat Jahan (Manager)",
		status: "Due",
		invoiceStatus: "Overdue",
		remarks: "Guardian confirmed the balance will be transferred next week.",
		totalSessions: 12,
		remainingSessions: 3,
		daysOverdue: 13,
		reminderStatus: "Escalated",
		nextDueDate: "2026-07-18",
		timeline: [
			{
				id: "t1",
				icon: "registration",
				title: "Registration fee paid",
				description: "Enrolment fee received during first consultation.",
				date: "2026-01-22",
				amount: 1e3,
				tone: "info"
			},
			{
				id: "t2",
				icon: "package",
				title: "Monthly Premium Plan purchased",
				description: "Guardian opted for the twelve-session monthly cycle.",
				date: "2026-07-01",
				amount: 12600,
				tone: "success"
			},
			{
				id: "t3",
				icon: "session",
				title: "Part payment collected",
				description: "Partial bank transfer received against July invoice.",
				date: "2026-07-18",
				amount: 6e3,
				tone: "warning"
			},
			{
				id: "t4",
				icon: "reminder",
				title: "Due reminder escalated",
				description: "Second reminder issued; manager follow-up call scheduled.",
				date: "2026-07-27",
				tone: "danger"
			}
		]
	},
	{
		id: "pay-1006",
		receiptNo: "RCP-2026-1006",
		invoiceNo: "INV-2026-0746",
		patientId: "sabbir-ahmed",
		patientName: "Sabbir Ahmed",
		patientCode: "PT-SYL-1006",
		patientAge: 11,
		patientPhone: "+880 1611-224497",
		guardianName: "Farzana Akter",
		branch: "Sylhet Branch",
		packageId: "online-assessment",
		packageName: "Online Assessment Booking",
		packageType: "Online Booking",
		amount: 2500,
		discount: 0,
		paid: 2500,
		due: 0,
		method: "Mobile Banking",
		reference: "Nagad TRX 4KD91LMZ",
		paymentDate: "2026-07-30",
		collectedBy: "Tanvir Hasan (Manager)",
		status: "Paid",
		invoiceStatus: "Paid",
		remarks: "Online slot confirmed for Saturday video assessment.",
		totalSessions: 1,
		remainingSessions: 1,
		daysOverdue: 0,
		reminderStatus: "Not sent",
		nextDueDate: "—",
		timeline: [{
			id: "t1",
			icon: "online",
			title: "Online booking payment received",
			description: "Advance paid through Nagad while booking the video slot.",
			date: "2026-07-30",
			amount: 2500,
			tone: "success"
		}]
	},
	{
		id: "pay-1007",
		receiptNo: "RCP-2026-1007",
		invoiceNo: "INV-2026-0747",
		patientId: "mahiya-chowdhury",
		patientName: "Mahiya Chowdhury",
		patientCode: "PT-DHK-1007",
		patientAge: 4,
		patientPhone: "+880 1755-108833",
		guardianName: "Imran Chowdhury",
		branch: "Dhaka Main Branch",
		packageId: "session-10",
		packageName: "10 Session Package",
		packageType: "Session Wise",
		amount: 10500,
		discount: 840,
		paid: 9660,
		due: 0,
		method: "Card",
		reference: "MASTERCARD **** 9902",
		paymentDate: "2026-07-24",
		collectedBy: "Nusrat Jahan (Manager)",
		status: "Paid",
		invoiceStatus: "Paid",
		remarks: "Full package paid upfront by the guardian.",
		totalSessions: 10,
		remainingSessions: 7,
		daysOverdue: 0,
		reminderStatus: "Not sent",
		nextDueDate: "2026-09-24",
		timeline: [{
			id: "t1",
			icon: "registration",
			title: "Registration fee paid",
			description: "Enrolment completed for early-intervention programme.",
			date: "2026-06-02",
			amount: 500,
			tone: "info"
		}, {
			id: "t2",
			icon: "package",
			title: "10 Session Package purchased",
			description: "Paid in full by card at the branch counter.",
			date: "2026-07-24",
			amount: 9660,
			tone: "success"
		}]
	},
	{
		id: "pay-1008",
		receiptNo: "RCP-2026-1008",
		invoiceNo: "INV-2026-0748",
		patientId: "riyad-hossain",
		patientName: "Riyad Hossain",
		patientCode: "PT-CTG-1008",
		patientAge: 10,
		patientPhone: "+880 1877-540126",
		guardianName: "Shakila Hossain",
		branch: "Chattogram Branch",
		packageId: "session-5",
		packageName: "5 Session Package",
		packageType: "Session Wise",
		amount: 5500,
		discount: 275,
		paid: 0,
		due: 5225,
		method: "Cash",
		reference: "—",
		paymentDate: "2026-07-26",
		collectedBy: "Tanvir Hasan (Manager)",
		status: "Pending",
		invoiceStatus: "Unpaid",
		remarks: "Invoice issued; guardian to pay at the next visit.",
		totalSessions: 5,
		remainingSessions: 5,
		daysOverdue: 5,
		reminderStatus: "Reminder due",
		nextDueDate: "2026-08-01",
		timeline: [{
			id: "t1",
			icon: "package",
			title: "5 Session Package invoiced",
			description: "Package assigned after assessment; payment pending.",
			date: "2026-07-26",
			amount: 5225,
			tone: "info"
		}]
	},
	{
		id: "pay-1009",
		receiptNo: "RCP-2026-1009",
		invoiceNo: "INV-2026-0749",
		patientId: "afsana-mimi",
		patientName: "Afsana Mimi",
		patientCode: "PT-DHK-1009",
		patientAge: 6,
		patientPhone: "+880 1922-771043",
		guardianName: "Jahangir Alam",
		branch: "Dhaka Main Branch",
		packageId: "monthly-premium",
		packageName: "Monthly Premium Plan",
		packageType: "Monthly",
		amount: 14e3,
		discount: 1400,
		paid: 12600,
		due: 0,
		method: "Mobile Banking",
		reference: "Rocket TRX 71PLQ4",
		paymentDate: "2026-07-08",
		collectedBy: "Nusrat Jahan (Manager)",
		status: "Paid",
		invoiceStatus: "Paid",
		remarks: "Monthly cycle paid on schedule.",
		totalSessions: 12,
		remainingSessions: 4,
		daysOverdue: 0,
		reminderStatus: "Not sent",
		nextDueDate: "2026-08-08",
		timeline: [{
			id: "t1",
			icon: "package",
			title: "Monthly Premium Plan renewed",
			description: "July renewal collected via Rocket.",
			date: "2026-07-08",
			amount: 12600,
			tone: "success"
		}]
	},
	{
		id: "pay-1010",
		receiptNo: "RCP-2026-1010",
		invoiceNo: "INV-2026-0750",
		patientId: "zarif-mahmud",
		patientName: "Zarif Mahmud",
		patientCode: "PT-SYL-1010",
		patientAge: 8,
		patientPhone: "+880 1611-905588",
		guardianName: "Nasrin Sultana",
		branch: "Sylhet Branch",
		packageId: "daily-therapy",
		packageName: "Daily Therapy",
		packageType: "Daily",
		amount: 1200,
		discount: 0,
		paid: 1200,
		due: 0,
		method: "Cash",
		reference: "—",
		paymentDate: "2026-07-27",
		collectedBy: "Tanvir Hasan (Manager)",
		status: "Refunded",
		invoiceStatus: "Paid",
		remarks: "Session cancelled due to therapist leave; amount refunded in cash.",
		totalSessions: 1,
		remainingSessions: 1,
		daysOverdue: 0,
		reminderStatus: "Not sent",
		nextDueDate: "—",
		timeline: [{
			id: "t1",
			icon: "session",
			title: "Daily session payment collected",
			description: "Cash received at the Sylhet front desk.",
			date: "2026-07-27",
			amount: 1200,
			tone: "success"
		}, {
			id: "t2",
			icon: "refund",
			title: "Payment refunded",
			description: "Refund approved by branch manager after cancellation.",
			date: "2026-07-28",
			amount: 1200,
			tone: "neutral"
		}]
	},
	{
		id: "pay-1011",
		receiptNo: "RCP-2026-1011",
		invoiceNo: "INV-2026-0751",
		patientId: "samiha-akter",
		patientName: "Samiha Akter",
		patientCode: "PT-DHK-1011",
		patientAge: 5,
		patientPhone: "+880 1733-461209",
		guardianName: "Rafiqul Islam",
		branch: "Dhaka Main Branch",
		packageId: "online-assessment",
		packageName: "Online Assessment Booking",
		packageType: "Online Booking",
		amount: 2500,
		discount: 0,
		paid: 1500,
		due: 1e3,
		method: "Mobile Banking",
		reference: "bKash TRX 22MND8QA",
		paymentDate: "2026-07-31",
		collectedBy: "Sadia Afrin (Front Desk)",
		status: "Partial",
		invoiceStatus: "Partial",
		remarks: "Advance received online, balance payable before the session.",
		totalSessions: 1,
		remainingSessions: 1,
		daysOverdue: 0,
		reminderStatus: "Reminder sent",
		nextDueDate: "2026-08-03",
		timeline: [{
			id: "t1",
			icon: "online",
			title: "Online booking advance received",
			description: "Guardian booked a video assessment slot from the website.",
			date: "2026-07-31",
			amount: 1500,
			tone: "warning"
		}]
	},
	{
		id: "pay-1012",
		receiptNo: "RCP-2026-1012",
		invoiceNo: "INV-2026-0752",
		patientId: "ibrahim-khalil",
		patientName: "Ibrahim Khalil",
		patientCode: "PT-CTG-1012",
		patientAge: 12,
		patientPhone: "+880 1866-330974",
		guardianName: "Sultana Razia",
		branch: "Chattogram Branch",
		packageId: "session-10",
		packageName: "10 Session Package",
		packageType: "Session Wise",
		amount: 10500,
		discount: 1050,
		paid: 5e3,
		due: 4450,
		method: "Bank Transfer",
		reference: "IBBL RTGS 90441266",
		paymentDate: "2026-07-05",
		collectedBy: "Tanvir Hasan (Manager)",
		status: "Due",
		invoiceStatus: "Overdue",
		remarks: "Balance overdue; guardian requested an instalment plan.",
		totalSessions: 10,
		remainingSessions: 2,
		daysOverdue: 26,
		reminderStatus: "Escalated",
		nextDueDate: "2026-07-05",
		timeline: [
			{
				id: "t1",
				icon: "package",
				title: "10 Session Package purchased",
				description: "Special 10% discount approved for sibling enrolment.",
				date: "2026-06-20",
				amount: 9450,
				tone: "success"
			},
			{
				id: "t2",
				icon: "session",
				title: "Part payment collected",
				description: "Bank transfer received against the package invoice.",
				date: "2026-07-05",
				amount: 5e3,
				tone: "warning"
			},
			{
				id: "t3",
				icon: "reminder",
				title: "Due reminder escalated",
				description: "Third reminder sent; instalment request under review.",
				date: "2026-07-25",
				tone: "danger"
			}
		]
	}
];
function isToday(date) {
	return new Date(date).toDateString() === TODAY.toDateString();
}
function isThisMonth(date) {
	const value = new Date(date);
	return value.getMonth() === TODAY.getMonth() && value.getFullYear() === TODAY.getFullYear();
}
var sumBy = (predicate, pick) => PAYMENT_RECORDS.filter(predicate).reduce((total, record) => total + pick(record), 0);
var countBy = (predicate) => PAYMENT_RECORDS.filter(predicate).length;
var TODAYS_COLLECTION = sumBy((record) => isToday(record.paymentDate) && record.status !== "Refunded", (record) => record.paid);
var MONTHLY_COLLECTION = sumBy((record) => isThisMonth(record.paymentDate) && record.status !== "Refunded", (record) => record.paid);
var OUTSTANDING_DUE = sumBy(() => true, (record) => record.due);
function findPaymentRecord(id) {
	return PAYMENT_RECORDS.find((record) => record.id === id) ?? PAYMENT_RECORDS.find((record) => record.patientId === id) ?? PAYMENT_RECORDS.find((record) => record.receiptNo.toLowerCase() === id.toLowerCase());
}
/** Aggregates every payment row of the patient behind the given id. */
function findPaymentProfile(id) {
	const primary = findPaymentRecord(id);
	if (!primary) return void 0;
	const payments = PAYMENT_RECORDS.filter((record) => record.patientId === primary.patientId);
	const totalBilled = payments.reduce((total, record) => total + record.amount - record.discount, 0);
	const totalPaid = payments.reduce((total, record) => total + record.paid, 0);
	return {
		primary,
		payments,
		totalBilled,
		totalPaid,
		totalDue: payments.reduce((total, record) => total + record.due, 0),
		collectionRate: totalBilled === 0 ? 0 : Math.round(totalPaid / totalBilled * 100)
	};
}
var PAYMENT_KPIS = [
	{
		id: "today-collection",
		label: "Today's Collection",
		value: formatTaka(TODAYS_COLLECTION),
		icon: Wallet,
		tone: "primary",
		hint: "Cash, card and mobile banking",
		delta: {
			value: "+12.4% vs yesterday",
			direction: "up"
		}
	},
	{
		id: "monthly-collection",
		label: "Monthly Collection",
		value: formatTaka(MONTHLY_COLLECTION),
		icon: BanknoteArrowUp,
		tone: "success",
		hint: "July 2026 to date",
		delta: {
			value: "+8.9% vs June",
			direction: "up"
		}
	},
	{
		id: "outstanding-due",
		label: "Outstanding Due",
		value: formatTaka(OUTSTANDING_DUE),
		icon: TriangleAlert,
		tone: "danger",
		hint: `${countBy((record) => record.due > 0)} patients with balance`,
		delta: {
			value: "-4.1% vs last month",
			direction: "down"
		}
	},
	{
		id: "paid-patients",
		label: "Paid Patients",
		value: String(countBy((record) => record.status === "Paid")),
		icon: CreditCard,
		tone: "success",
		hint: "Invoices fully settled",
		delta: {
			value: "+5 this month",
			direction: "up"
		}
	},
	{
		id: "session-packages",
		label: "Session Packages",
		value: String(countBy((record) => record.packageType === "Session Wise")),
		icon: Layers,
		tone: "primary",
		hint: "5 and 10 session plans",
		delta: {
			value: "+3 this month",
			direction: "up"
		}
	},
	{
		id: "monthly-packages",
		label: "Monthly Packages",
		value: String(countBy((record) => record.packageType === "Monthly")),
		icon: CalendarRange,
		tone: "primary",
		hint: "Recurring monthly plans",
		delta: {
			value: "+2 this month",
			direction: "up"
		}
	},
	{
		id: "online-bookings",
		label: "Online Bookings",
		value: String(countBy((record) => record.packageType === "Online Booking")),
		icon: Globe,
		tone: "warning",
		hint: "Paid from the public website",
		delta: {
			value: "+1 this week",
			direction: "up"
		}
	},
	{
		id: "pending-payments",
		label: "Pending Payments",
		value: String(countBy((record) => record.status === "Pending" || record.status === "Partial")),
		icon: Hourglass,
		tone: "warning",
		hint: "Awaiting full settlement",
		delta: {
			value: "2 need follow-up",
			direction: "flat"
		}
	}
];
var COLLECTION_SERIES = [
	{
		period: "Feb",
		collection: 386e3,
		due: 62e3
	},
	{
		period: "Mar",
		collection: 412500,
		due: 58400
	},
	{
		period: "Apr",
		collection: 468300,
		due: 71200
	},
	{
		period: "May",
		collection: 512900,
		due: 64800
	},
	{
		period: "Jun",
		collection: 549400,
		due: 55300
	},
	{
		period: "Jul",
		collection: 601200,
		due: 48950
	}
];
var METHOD_SPLIT = [
	{
		method: "Cash",
		amount: 214600
	},
	{
		method: "Mobile Banking",
		amount: 186400
	},
	{
		method: "Card",
		amount: 128900
	},
	{
		method: "Bank Transfer",
		amount: 71300
	}
];
//#endregion
export { TODAY_ISO as _, PACKAGE_STATUSES as a, PACKAGE_TYPE_TONE as c, PAYMENT_METHODS as d, PAYMENT_PACKAGES as f, PAYMENT_TABS as g, PAYMENT_STATUS_TONE as h, METHOD_SPLIT as i, PAYMENT_DATE_RANGES as l, PAYMENT_STATUSES as m, COLLECTION_SERIES as n, PACKAGE_STATUS_TONE as o, PAYMENT_RECORDS as p, INVOICE_STATUS_TONE as r, PACKAGE_TYPES as s, COLLECTED_BY as t, PAYMENT_KPIS as u, findPackage as v, findPaymentProfile as y };
