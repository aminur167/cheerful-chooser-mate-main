import { $t as ClipboardCheck, Qt as ClipboardList, a as Wallet, o as Users, u as UserPlus, yn as CalendarCheck } from "../_libs/lucide-react.mjs";
import { h as router_exports } from "./router-BtnFRLs5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/patient-data-CmHQxXyw.js
var PATIENT_STATUS_TONE = {
	Active: "success",
	Inactive: "neutral",
	"Assessment Pending": "warning",
	"Therapy Running": "info",
	"Therapy Completed": "success",
	"Follow-up Required": "warning"
};
var PAYMENT_STATUS_TONE = {
	Paid: "success",
	"Partially Paid": "info",
	Due: "warning",
	Overdue: "danger"
};
function timeline(registered, assessment, session, payment, call) {
	return [
		{
			id: "t1",
			title: "Patient registered",
			description: "Registration completed at the front desk and profile created.",
			date: registered,
			icon: "registered",
			tone: "info"
		},
		{
			id: "t2",
			title: "Assessment scheduled",
			description: "Initial speech and language assessment booked with the clinical team.",
			date: assessment,
			icon: "assessment",
			tone: "warning"
		},
		{
			id: "t3",
			title: "First therapy session",
			description: "Therapy programme started with the assigned therapist.",
			date: session,
			icon: "therapy",
			tone: "info"
		},
		{
			id: "t4",
			title: "Payment received",
			description: "Package instalment collected at the branch counter.",
			date: payment,
			icon: "payment",
			tone: "success"
		},
		{
			id: "t5",
			title: "Follow-up call",
			description: "Guardian contacted for progress review and next appointment.",
			date: call,
			icon: "call",
			tone: "neutral"
		}
	];
}
var PATIENTS = [
	{
		id: "rahim-ahmed",
		code: "PT-DHK-1001",
		name: "Rahim Ahmed",
		dob: "2018-03-12",
		age: 8,
		gender: "Male",
		bloodGroup: "B+",
		address: "House 24, Road 7, Dhanmondi R/A, Dhaka 1205",
		phone: "+880 1711-458920",
		email: "rahim.guardian@gmail.com",
		branch: "Dhaka Main Branch",
		guardian: {
			name: "Md. Karim Ahmed",
			relation: "Father",
			phone: "+880 1711-458920",
			email: "karim.ahmed@gmail.com",
			occupation: "Bank Officer"
		},
		emergencyContact: {
			name: "Shamima Ahmed",
			relation: "Mother",
			phone: "+880 1712-330451"
		},
		medical: {
			primaryConcern: "Delayed speech development and unclear articulation",
			diagnosis: "Articulation disorder (provisional)",
			history: "Full-term birth, no hearing impairment. Recurrent ear infections at age 3.",
			referralDoctor: "Dr. Sabrina Chowdhury (Paediatrics)",
			notes: "Responds well to visual cues. Guardian very cooperative with home practice."
		},
		program: {
			therapyType: "Speech Therapy",
			program: "Articulation Programme — Level 2",
			assessmentDate: "2026-02-18",
			therapist: "Farhana Islam",
			expectedStart: "2026-02-24",
			sessionsCompleted: 18,
			sessionsPlanned: 24
		},
		billing: {
			paymentType: "Monthly",
			packageName: "Monthly Standard — 12 Sessions",
			registrationFee: 1e3,
			totalBilled: 42e3,
			totalPaid: 42e3,
			due: 0,
			lastPaymentDate: "2026-07-05",
			lastPaymentAmount: 12e3,
			remarks: "Guardian pays by bKash on the 5th of each month."
		},
		followUp: {
			note: "Progress review call completed — articulation clarity improving steadily.",
			date: "2026-07-22",
			by: "Farhana Islam"
		},
		status: "Therapy Running",
		paymentStatus: "Paid",
		lastVisit: "2026-07-28",
		nextSession: "2026-08-03",
		registeredAt: "2026-02-14",
		timeline: timeline("2026-02-14", "2026-02-18", "2026-02-24", "2026-07-05", "2026-07-22")
	},
	{
		id: "ayesha-akter",
		code: "PT-DHK-1002",
		name: "Ayesha Akter",
		dob: "2020-07-30",
		age: 6,
		gender: "Female",
		bloodGroup: "O+",
		address: "Flat 5B, House 11, Mohammadpur, Dhaka 1207",
		phone: "+880 1819-772140",
		email: "shamima.begum@gmail.com",
		branch: "Dhaka Main Branch",
		guardian: {
			name: "Shamima Begum",
			relation: "Mother",
			phone: "+880 1819-772140",
			email: "shamima.begum@gmail.com",
			occupation: "School Teacher"
		},
		emergencyContact: {
			name: "Abdul Mannan",
			relation: "Father",
			phone: "+880 1815-220963"
		},
		medical: {
			primaryConcern: "Limited vocabulary and difficulty forming sentences",
			diagnosis: "Expressive language delay (provisional)",
			history: "No significant medical history. Hearing screening normal.",
			referralDoctor: "Dr. Anwar Hossain (ENT)",
			notes: "Shy during first sessions; play-based approach recommended."
		},
		program: {
			therapyType: "Language Therapy",
			program: "Early Language Builder — Level 1",
			assessmentDate: "2026-05-06",
			therapist: "Nusrat Kabir",
			expectedStart: "2026-05-12",
			sessionsCompleted: 9,
			sessionsPlanned: 20
		},
		billing: {
			paymentType: "Session Wise",
			packageName: "Session Wise — Pay per visit",
			registrationFee: 1e3,
			totalBilled: 16200,
			totalPaid: 10800,
			due: 5400,
			lastPaymentDate: "2026-07-19",
			lastPaymentAmount: 1800,
			remarks: "Two sessions pending payment from July."
		},
		followUp: {
			note: "Guardian requested an evening slot from next month.",
			date: "2026-07-25",
			by: "Nusrat Kabir"
		},
		status: "Therapy Running",
		paymentStatus: "Partially Paid",
		lastVisit: "2026-07-26",
		nextSession: "2026-08-02",
		registeredAt: "2026-05-02",
		timeline: timeline("2026-05-02", "2026-05-06", "2026-05-12", "2026-07-19", "2026-07-25")
	},
	{
		id: "mahin-hasan",
		code: "PT-DHK-1003",
		name: "Mahin Hasan",
		dob: "2016-11-04",
		age: 9,
		gender: "Male",
		bloodGroup: "A+",
		address: "House 78, Sector 10, Uttara, Dhaka 1230",
		phone: "+880 1730-118845",
		email: "rezaul.hasan@yahoo.com",
		branch: "Dhaka Main Branch",
		guardian: {
			name: "Md. Rezaul Hasan",
			relation: "Father",
			phone: "+880 1730-118845",
			email: "rezaul.hasan@yahoo.com",
			occupation: "Businessman"
		},
		emergencyContact: {
			name: "Nasrin Hasan",
			relation: "Mother",
			phone: "+880 1733-904471"
		},
		medical: {
			primaryConcern: "Stammering that worsens under pressure at school",
			diagnosis: "Fluency disorder (provisional)",
			history: "Stammering noticed from age 5. No neurological findings.",
			referralDoctor: "Dr. Kamrul Islam (Neurology)",
			notes: "School has been informed; classroom strategies shared with the teacher."
		},
		program: {
			therapyType: "Fluency Therapy",
			program: "Fluency Shaping — Level 3",
			assessmentDate: "2026-01-16",
			therapist: "Tanvir Rahman",
			expectedStart: "2026-01-22",
			sessionsCompleted: 32,
			sessionsPlanned: 32
		},
		billing: {
			paymentType: "Monthly",
			packageName: "Monthly Premium — 16 Sessions",
			registrationFee: 1e3,
			totalBilled: 68e3,
			totalPaid: 68e3,
			due: 0,
			lastPaymentDate: "2026-06-04",
			lastPaymentAmount: 14e3,
			remarks: "Programme completed in full. Discharge summary issued."
		},
		followUp: {
			note: "Three-month maintenance review scheduled with the guardian.",
			date: "2026-07-10",
			by: "Tanvir Rahman"
		},
		status: "Therapy Completed",
		paymentStatus: "Paid",
		lastVisit: "2026-06-27",
		nextSession: null,
		registeredAt: "2026-01-12",
		timeline: timeline("2026-01-12", "2026-01-16", "2026-01-22", "2026-06-04", "2026-07-10")
	},
	{
		id: "nusrat-jahan",
		code: "PT-CTG-1004",
		name: "Nusrat Jahan",
		dob: "2019-09-21",
		age: 6,
		gender: "Female",
		bloodGroup: "AB+",
		address: "Flat 3A, Nasirabad Housing Society, Chattogram 4000",
		phone: "+880 1745-660238",
		email: "jahangir.alam@gmail.com",
		branch: "Chattogram Branch",
		guardian: {
			name: "Md. Jahangir Alam",
			relation: "Father",
			phone: "+880 1745-660238",
			email: "jahangir.alam@gmail.com",
			occupation: "Government Service"
		},
		emergencyContact: {
			name: "Rokeya Alam",
			relation: "Mother",
			phone: "+880 1747-551029"
		},
		medical: {
			primaryConcern: "Difficulty following instructions and delayed responses",
			diagnosis: "Pending formal assessment",
			history: "Premature birth at 34 weeks. Milestones slightly delayed.",
			referralDoctor: "Dr. Farzana Haque (Paediatrics)",
			notes: "Awaiting audiology report before starting therapy."
		},
		program: {
			therapyType: "Speech Therapy",
			program: "Awaiting programme assignment",
			assessmentDate: "2026-08-05",
			therapist: "To be assigned",
			expectedStart: "2026-08-12",
			sessionsCompleted: 0,
			sessionsPlanned: 0
		},
		billing: {
			paymentType: "Daily",
			packageName: "Assessment only",
			registrationFee: 1e3,
			totalBilled: 2500,
			totalPaid: 1e3,
			due: 1500,
			lastPaymentDate: "2026-07-24",
			lastPaymentAmount: 1e3,
			remarks: "Assessment fee due on the day of the appointment."
		},
		followUp: {
			note: "Reminder call made for the upcoming assessment appointment.",
			date: "2026-07-29",
			by: "Front Desk"
		},
		status: "Assessment Pending",
		paymentStatus: "Due",
		lastVisit: "2026-07-24",
		nextSession: "2026-08-05",
		registeredAt: "2026-07-22",
		timeline: timeline("2026-07-22", "2026-08-05", "2026-08-12", "2026-07-24", "2026-07-29")
	},
	{
		id: "tahsin-rahman",
		code: "PT-DHK-1005",
		name: "Tahsin Rahman",
		dob: "2014-05-08",
		age: 12,
		gender: "Male",
		bloodGroup: "B-",
		address: "House 3, Road 12, Banani, Dhaka 1213",
		phone: "+880 1766-201947",
		email: "sultana.rahman@gmail.com",
		branch: "Gulshan Branch",
		guardian: {
			name: "Sultana Rahman",
			relation: "Mother",
			phone: "+880 1766-201947",
			email: "sultana.rahman@gmail.com",
			occupation: "Doctor"
		},
		emergencyContact: {
			name: "Ashiqur Rahman",
			relation: "Father",
			phone: "+880 1769-874120"
		},
		medical: {
			primaryConcern: "Voice hoarseness after extended speaking",
			diagnosis: "Muscle tension dysphonia (provisional)",
			history: "Active in school debating. Vocal strain reported by the ENT specialist.",
			referralDoctor: "Dr. Rashedul Karim (ENT)",
			notes: "Vocal hygiene routine shared with the guardian and the school."
		},
		program: {
			therapyType: "Voice Therapy",
			program: "Vocal Hygiene & Resonance — Level 2",
			assessmentDate: "2026-04-09",
			therapist: "Maliha Chowdhury",
			expectedStart: "2026-04-15",
			sessionsCompleted: 14,
			sessionsPlanned: 18
		},
		billing: {
			paymentType: "Online Booking",
			packageName: "Online Booking — 6 Session Bundle",
			registrationFee: 1e3,
			totalBilled: 31500,
			totalPaid: 21e3,
			due: 10500,
			lastPaymentDate: "2026-06-30",
			lastPaymentAmount: 10500,
			remarks: "Last bundle invoice is overdue by 4 weeks."
		},
		followUp: {
			note: "Payment reminder sent along with the next appointment confirmation.",
			date: "2026-07-27",
			by: "Accounts Desk"
		},
		status: "Active",
		paymentStatus: "Overdue",
		lastVisit: "2026-07-21",
		nextSession: "2026-08-04",
		registeredAt: "2026-04-05",
		timeline: timeline("2026-04-05", "2026-04-09", "2026-04-15", "2026-06-30", "2026-07-27")
	},
	{
		id: "samiha-chowdhury",
		code: "PT-SYL-1006",
		name: "Samiha Chowdhury",
		dob: "2021-02-17",
		age: 5,
		gender: "Female",
		bloodGroup: "O-",
		address: "Zindabazar, Shahjalal Upashahar, Sylhet 3100",
		phone: "+880 1788-334019",
		email: "mizanur.chowdhury@gmail.com",
		branch: "Sylhet Branch",
		guardian: {
			name: "Md. Mizanur Chowdhury",
			relation: "Father",
			phone: "+880 1788-334019",
			email: "mizanur.chowdhury@gmail.com",
			occupation: "Engineer"
		},
		emergencyContact: {
			name: "Tahmina Chowdhury",
			relation: "Mother",
			phone: "+880 1780-115562"
		},
		medical: {
			primaryConcern: "Not yet using two-word phrases consistently",
			diagnosis: "Global language delay (provisional)",
			history: "No birth complications. Family history of late talking.",
			referralDoctor: "Dr. Shahnaz Parvin (Paediatrics)",
			notes: "Parent coaching sessions recommended alongside direct therapy."
		},
		program: {
			therapyType: "Language Therapy",
			program: "Early Intervention — Level 1",
			assessmentDate: "2026-06-11",
			therapist: "Sadia Karim",
			expectedStart: "2026-06-17",
			sessionsCompleted: 6,
			sessionsPlanned: 20
		},
		billing: {
			paymentType: "Monthly",
			packageName: "Monthly Basic — 8 Sessions",
			registrationFee: 1e3,
			totalBilled: 18e3,
			totalPaid: 18e3,
			due: 0,
			lastPaymentDate: "2026-07-02",
			lastPaymentAmount: 9e3,
			remarks: "Guardian pays in advance for the full month."
		},
		followUp: {
			note: "Home programme handout shared; guardian to record practice videos.",
			date: "2026-07-20",
			by: "Sadia Karim"
		},
		status: "Therapy Running",
		paymentStatus: "Paid",
		lastVisit: "2026-07-27",
		nextSession: "2026-08-03",
		registeredAt: "2026-06-07",
		timeline: timeline("2026-06-07", "2026-06-11", "2026-06-17", "2026-07-02", "2026-07-20")
	},
	{
		id: "arafat-hossain",
		code: "PT-DHK-1007",
		name: "Arafat Hossain",
		dob: "2013-08-25",
		age: 12,
		gender: "Male",
		bloodGroup: "A-",
		address: "House 41, Mirpur DOHS, Dhaka 1216",
		phone: "+880 1799-450712",
		email: "nazma.hossain@gmail.com",
		branch: "Dhaka Main Branch",
		guardian: {
			name: "Nazma Hossain",
			relation: "Mother",
			phone: "+880 1799-450712",
			email: "nazma.hossain@gmail.com",
			occupation: "Homemaker"
		},
		emergencyContact: {
			name: "Delwar Hossain",
			relation: "Father",
			phone: "+880 1791-668034"
		},
		medical: {
			primaryConcern: "Reading fluency and phonological awareness difficulties",
			diagnosis: "Phonological processing difficulty (provisional)",
			history: "Academic support at school since class 3. Vision and hearing normal.",
			referralDoctor: "Dr. Mahfuza Rahman (Child Psychology)",
			notes: "Discontinued sessions during exam period; guardian to resume in August."
		},
		program: {
			therapyType: "Speech Therapy",
			program: "Phonological Awareness — Level 2",
			assessmentDate: "2025-11-13",
			therapist: "Farhana Islam",
			expectedStart: "2025-11-19",
			sessionsCompleted: 22,
			sessionsPlanned: 30
		},
		billing: {
			paymentType: "Session Wise",
			packageName: "Session Wise — Pay per visit",
			registrationFee: 1e3,
			totalBilled: 39600,
			totalPaid: 39600,
			due: 0,
			lastPaymentDate: "2026-05-18",
			lastPaymentAmount: 1800,
			remarks: "No outstanding balance at the time of pause."
		},
		followUp: {
			note: "Guardian to confirm restart date after school examinations.",
			date: "2026-07-15",
			by: "Front Desk"
		},
		status: "Inactive",
		paymentStatus: "Paid",
		lastVisit: "2026-05-18",
		nextSession: null,
		registeredAt: "2025-11-09",
		timeline: timeline("2025-11-09", "2025-11-13", "2025-11-19", "2026-05-18", "2026-07-15")
	},
	{
		id: "farhana-islam",
		code: "PT-KHL-1008",
		name: "Farhana Islam",
		dob: "2017-12-02",
		age: 8,
		gender: "Female",
		bloodGroup: "B+",
		address: "Sonadanga R/A, KDA Avenue, Khulna 9100",
		phone: "+880 1710-889423",
		email: "shafiqul.islam@gmail.com",
		branch: "Khulna Branch",
		guardian: {
			name: "Md. Shafiqul Islam",
			relation: "Father",
			phone: "+880 1710-889423",
			email: "shafiqul.islam@gmail.com",
			occupation: "College Lecturer"
		},
		emergencyContact: {
			name: "Ruma Islam",
			relation: "Mother",
			phone: "+880 1713-220884"
		},
		medical: {
			primaryConcern: "Nasal speech quality noted after surgery",
			diagnosis: "Resonance disorder (provisional)",
			history: "Cleft palate repair completed at age 2. Regular ENT follow-up.",
			referralDoctor: "Dr. Nasir Uddin (Plastic Surgery)",
			notes: "Coordinated care plan shared with the surgical team."
		},
		program: {
			therapyType: "Voice Therapy",
			program: "Resonance Balancing — Level 1",
			assessmentDate: "2026-03-19",
			therapist: "Jubayer Alam",
			expectedStart: "2026-03-25",
			sessionsCompleted: 16,
			sessionsPlanned: 24
		},
		billing: {
			paymentType: "Monthly",
			packageName: "Monthly Standard — 12 Sessions",
			registrationFee: 1e3,
			totalBilled: 34e3,
			totalPaid: 26e3,
			due: 8e3,
			lastPaymentDate: "2026-07-08",
			lastPaymentAmount: 8e3,
			remarks: "July instalment partially settled; balance promised by 10 August."
		},
		followUp: {
			note: "Post-surgery progress reviewed with the guardian and ENT team.",
			date: "2026-07-23",
			by: "Jubayer Alam"
		},
		status: "Follow-up Required",
		paymentStatus: "Partially Paid",
		lastVisit: "2026-07-25",
		nextSession: "2026-08-06",
		registeredAt: "2026-03-15",
		timeline: timeline("2026-03-15", "2026-03-19", "2026-03-25", "2026-07-08", "2026-07-23")
	},
	{
		id: "zayan-mahmud",
		code: "PT-DHK-1009",
		name: "Zayan Mahmud",
		dob: "2022-01-09",
		age: 4,
		gender: "Male",
		bloodGroup: "O+",
		address: "House 9, Road 3, Bashundhara R/A, Dhaka 1229",
		phone: "+880 1755-330871",
		email: "tanjina.mahmud@gmail.com",
		branch: "Gulshan Branch",
		guardian: {
			name: "Tanjina Mahmud",
			relation: "Mother",
			phone: "+880 1755-330871",
			email: "tanjina.mahmud@gmail.com",
			occupation: "Architect"
		},
		emergencyContact: {
			name: "Sabbir Mahmud",
			relation: "Father",
			phone: "+880 1757-661209"
		},
		medical: {
			primaryConcern: "Minimal eye contact and very few spoken words",
			diagnosis: "Pending multidisciplinary assessment",
			history: "Referred by the paediatrician after an 18-month developmental screening.",
			referralDoctor: "Dr. Tahmid Chowdhury (Developmental Paediatrics)",
			notes: "Occupational therapy assessment requested in parallel."
		},
		program: {
			therapyType: "Speech Therapy",
			program: "Awaiting programme assignment",
			assessmentDate: "2026-08-08",
			therapist: "To be assigned",
			expectedStart: "2026-08-17",
			sessionsCompleted: 0,
			sessionsPlanned: 0
		},
		billing: {
			paymentType: "Online Booking",
			packageName: "Assessment only",
			registrationFee: 1e3,
			totalBilled: 3500,
			totalPaid: 3500,
			due: 0,
			lastPaymentDate: "2026-07-30",
			lastPaymentAmount: 2500,
			remarks: "Assessment fee paid online in advance."
		},
		followUp: {
			note: "Intake questionnaire received from the guardian.",
			date: "2026-07-30",
			by: "Front Desk"
		},
		status: "Assessment Pending",
		paymentStatus: "Paid",
		lastVisit: "2026-07-30",
		nextSession: "2026-08-08",
		registeredAt: "2026-07-28",
		timeline: timeline("2026-07-28", "2026-08-08", "2026-08-17", "2026-07-30", "2026-07-30")
	},
	{
		id: "ishrat-binte-noor",
		code: "PT-CTG-1010",
		name: "Ishrat Binte Noor",
		dob: "2015-06-14",
		age: 11,
		gender: "Female",
		bloodGroup: "AB-",
		address: "Khulshi Hills, Zakir Hossain Road, Chattogram 4225",
		phone: "+880 1722-905513",
		email: "noorul.amin@gmail.com",
		branch: "Chattogram Branch",
		guardian: {
			name: "Md. Noorul Amin",
			relation: "Father",
			phone: "+880 1722-905513",
			email: "noorul.amin@gmail.com",
			occupation: "Garments Manager"
		},
		emergencyContact: {
			name: "Shirin Akter",
			relation: "Mother",
			phone: "+880 1725-440178"
		},
		medical: {
			primaryConcern: "Word-finding difficulty and slow verbal recall",
			diagnosis: "Language processing difficulty (provisional)",
			history: "Head injury at age 8 with full physical recovery.",
			referralDoctor: "Dr. Selim Reza (Neurology)",
			notes: "Making steady gains; school reports improved participation."
		},
		program: {
			therapyType: "Language Therapy",
			program: "Language Processing — Level 3",
			assessmentDate: "2026-02-05",
			therapist: "Nusrat Kabir",
			expectedStart: "2026-02-11",
			sessionsCompleted: 26,
			sessionsPlanned: 28
		},
		billing: {
			paymentType: "Daily",
			packageName: "Daily Visit — Standard Rate",
			registrationFee: 1e3,
			totalBilled: 46800,
			totalPaid: 44e3,
			due: 2800,
			lastPaymentDate: "2026-07-26",
			lastPaymentAmount: 1800,
			remarks: "Two daily visits remain unbilled from last week."
		},
		followUp: {
			note: "Discharge planning discussion scheduled for mid-August.",
			date: "2026-07-28",
			by: "Nusrat Kabir"
		},
		status: "Therapy Running",
		paymentStatus: "Due",
		lastVisit: "2026-07-29",
		nextSession: "2026-08-05",
		registeredAt: "2026-02-01",
		timeline: timeline("2026-02-01", "2026-02-05", "2026-02-11", "2026-07-26", "2026-07-28")
	}
];
var PATIENT_STATUSES = [
	"Active",
	"Inactive",
	"Assessment Pending",
	"Therapy Running",
	"Therapy Completed",
	"Follow-up Required"
];
var THERAPY_TYPES = [
	"Speech Therapy",
	"Language Therapy",
	"Fluency Therapy",
	"Voice Therapy",
	"Swallowing Therapy"
];
var PAYMENT_TYPES = [
	"Daily",
	"Session Wise",
	"Monthly",
	"Online Booking"
];
var GENDERS = ["Male", "Female"];
var BLOOD_GROUPS = [
	"A+",
	"A-",
	"B+",
	"B-",
	"AB+",
	"AB-",
	"O+",
	"O-"
];
var GUARDIAN_RELATIONS = [
	"Father",
	"Mother",
	"Grandparent",
	"Sibling",
	"Uncle",
	"Aunt",
	"Other"
];
var BRANCH_OPTIONS = [
	"Dhaka Main Branch",
	"Gulshan Branch",
	"Chattogram Branch",
	"Sylhet Branch",
	"Khulna Branch"
];
var THERAPISTS = [
	"Farhana Islam",
	"Nusrat Kabir",
	"Tanvir Rahman",
	"Maliha Chowdhury",
	"Sadia Karim",
	"Jubayer Alam"
];
var PROGRAM_OPTIONS = [
	"Early Intervention — Level 1",
	"Early Language Builder — Level 1",
	"Articulation Programme — Level 2",
	"Phonological Awareness — Level 2",
	"Fluency Shaping — Level 3",
	"Language Processing — Level 3",
	"Resonance Balancing — Level 1"
];
var PACKAGE_OPTIONS = [
	"Monthly Basic — 8 Sessions",
	"Monthly Standard — 12 Sessions",
	"Monthly Premium — 16 Sessions",
	"Online Booking — 6 Session Bundle",
	"Session Wise — Pay per visit",
	"Daily Visit — Standard Rate"
];
var PATIENT_DATE_RANGES = [
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
var totalDue = PATIENTS.reduce((sum, patient) => sum + patient.billing.due, 0);
var duePatients = PATIENTS.filter((patient) => patient.billing.due > 0).length;
var PATIENT_KPIS = [
	{
		id: "total",
		label: "Total Patients",
		value: String(PATIENTS.length),
		icon: Users,
		tone: "primary",
		hint: "Across all branches",
		delta: {
			value: "+12%",
			direction: "up"
		}
	},
	{
		id: "active",
		label: "Active Patients",
		value: String(PATIENTS.filter((patient) => [
			"Active",
			"Therapy Running",
			"Follow-up Required"
		].includes(patient.status)).length),
		icon: ClipboardList,
		tone: "success",
		hint: "Currently in care",
		delta: {
			value: "+4 this week",
			direction: "up"
		}
	},
	{
		id: "new",
		label: "New This Month",
		value: String(PATIENTS.filter((patient) => patient.registeredAt >= "2026-07-01").length),
		icon: UserPlus,
		tone: "primary",
		hint: "July 2026 registrations",
		delta: {
			value: "+2 vs June",
			direction: "up"
		}
	},
	{
		id: "assessment",
		label: "Assessment Pending",
		value: String(PATIENTS.filter((patient) => patient.status === "Assessment Pending").length),
		icon: ClipboardCheck,
		tone: "warning",
		hint: "Awaiting first assessment",
		delta: {
			value: "Needs scheduling",
			direction: "flat"
		}
	},
	{
		id: "therapy",
		label: "Therapy Ongoing",
		value: String(PATIENTS.filter((patient) => patient.status === "Therapy Running").length),
		icon: CalendarCheck,
		tone: "primary",
		hint: "Active therapy programmes",
		delta: {
			value: "+1 this week",
			direction: "up"
		}
	},
	{
		id: "due",
		label: "Pending Due Payments",
		value: `৳ ${new Intl.NumberFormat("en-IN").format(totalDue)}`,
		icon: Wallet,
		tone: "danger",
		hint: `${duePatients} patients with balance`,
		delta: {
			value: "Follow up required",
			direction: "down"
		}
	}
];
function findPatient(id) {
	return PATIENTS.find((patient) => patient.id === id);
}
function calculateAge(dob) {
	if (!dob) return "";
	const birth = new Date(dob);
	if (Number.isNaN(birth.getTime())) return "";
	const today = /* @__PURE__ */ new Date();
	let age = today.getFullYear() - birth.getFullYear();
	const monthDelta = today.getMonth() - birth.getMonth();
	if (monthDelta < 0 || monthDelta === 0 && today.getDate() < birth.getDate()) age -= 1;
	return age >= 0 ? String(age) : "";
}
//#endregion
export { calculateAge as _, GUARDIAN_RELATIONS as a, PATIENT_DATE_RANGES as c, PATIENT_STATUS_TONE as d, PAYMENT_STATUS_TONE as f, THERAPY_TYPES as g, THERAPISTS as h, GENDERS as i, PATIENT_KPIS as l, PROGRAM_OPTIONS as m, BLOOD_GROUPS as n, PACKAGE_OPTIONS as o, PAYMENT_TYPES as p, BRANCH_OPTIONS as r, PATIENTS as s, router_exports as t, PATIENT_STATUSES as u, findPatient as v };
