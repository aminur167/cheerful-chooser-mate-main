import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BadgeDollarSign,
  Bell,
  Boxes,
  BriefcaseMedical,
  CalendarPlus,
  CalendarRange,
  ClipboardCheck,
  ClipboardList,
  CreditCard,
  FileBarChart,
  Megaphone,
  Package,
  PhoneCall,
  Stethoscope,
  UserPlus,
  Users,
  UsersRound,
  Wallet,
} from "lucide-react";
import type { StatusTone } from "@/components/common/status-badge";
import type { Kpi } from "@/constants/dashboard-data";

/**
 * Static demo data for the Branch Manager dashboard (Dhaka Main Branch).
 * Shapes mirror the future Django REST payloads.
 */

export const BRANCH_NAME = "Dhaka Main Branch";

export const MANAGER_KPIS: Kpi[] = [
  {
    id: "patients-today",
    label: "Today's Patients",
    value: "48",
    icon: Users,
    tone: "primary",
    delta: { value: "+6 from yesterday", direction: "up" },
  },
  {
    id: "sessions-today",
    label: "Today's Therapy Sessions",
    value: "31",
    icon: Activity,
    tone: "primary",
    hint: "22 completed · 9 upcoming",
  },
  {
    id: "revenue-today",
    label: "Today's Revenue",
    value: "৳ 28,500",
    icon: Wallet,
    tone: "success",
    delta: { value: "+9%", direction: "up" },
  },
  {
    id: "pending-due",
    label: "Pending Due",
    value: "৳ 15,200",
    icon: BadgeDollarSign,
    tone: "warning",
    hint: "12 unsettled invoices",
  },
  {
    id: "follow-ups",
    label: "Pending Follow-ups",
    value: "14",
    icon: PhoneCall,
    tone: "warning",
    hint: "4 overdue",
  },
  {
    id: "assessments",
    label: "New Assessments",
    value: "8",
    icon: ClipboardCheck,
    tone: "primary",
    hint: "3 awaiting report",
  },
  {
    id: "online-bookings",
    label: "Online Bookings",
    value: "11",
    icon: CalendarPlus,
    tone: "primary",
    delta: { value: "+2 today", direction: "up" },
  },
  {
    id: "low-stock",
    label: "Low Stock Alerts",
    value: "5",
    icon: Package,
    tone: "danger",
    hint: "2 items critical",
  },
];

export type ManagerRangeKey = "today" | "week" | "month";

export const MANAGER_RANGES: { key: ManagerRangeKey; label: string }[] = [
  { key: "today", label: "Today" },
  { key: "week", label: "This week" },
  { key: "month", label: "This month" },
];

export type TrendPoint = {
  period: string;
  collection: number;
  expenses: number;
  net: number;
};

export const REVENUE_TREND: Record<ManagerRangeKey, TrendPoint[]> = {
  today: [
    { period: "9 AM", collection: 3200, expenses: 1400, net: 1800 },
    { period: "11 AM", collection: 6800, expenses: 2600, net: 4200 },
    { period: "1 PM", collection: 11400, expenses: 4100, net: 7300 },
    { period: "3 PM", collection: 17900, expenses: 5600, net: 12300 },
    { period: "5 PM", collection: 23600, expenses: 7200, net: 16400 },
    { period: "7 PM", collection: 28500, expenses: 8400, net: 20100 },
  ],
  week: [
    { period: "Sat", collection: 24100, expenses: 8900, net: 15200 },
    { period: "Sun", collection: 26800, expenses: 9300, net: 17500 },
    { period: "Mon", collection: 31200, expenses: 10100, net: 21100 },
    { period: "Tue", collection: 28700, expenses: 9600, net: 19100 },
    { period: "Wed", collection: 33400, expenses: 11200, net: 22200 },
    { period: "Thu", collection: 29900, expenses: 10400, net: 19500 },
    { period: "Fri", collection: 28500, expenses: 8400, net: 20100 },
  ],
  month: [
    { period: "Week 1", collection: 168000, expenses: 61000, net: 107000 },
    { period: "Week 2", collection: 182500, expenses: 66500, net: 116000 },
    { period: "Week 3", collection: 174800, expenses: 63200, net: 111600 },
    { period: "Week 4", collection: 196400, expenses: 71800, net: 124600 },
  ],
};

export type TherapySummaryItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  count: number;
  target: number;
  progress: number;
  status: { label: string; tone: StatusTone };
};

export const THERAPY_SUMMARY: TherapySummaryItem[] = [
  {
    id: "individual",
    label: "Individual Therapy",
    icon: Stethoscope,
    count: 18,
    target: 22,
    progress: 82,
    status: { label: "On track", tone: "success" },
  },
  {
    id: "group",
    label: "Group Therapy",
    icon: UsersRound,
    count: 7,
    target: 10,
    progress: 70,
    status: { label: "In progress", tone: "info" },
  },
  {
    id: "assessment",
    label: "Assessment",
    icon: ClipboardCheck,
    count: 6,
    target: 8,
    progress: 75,
    status: { label: "In progress", tone: "info" },
  },
  {
    id: "follow-up",
    label: "Follow-up Calls",
    icon: PhoneCall,
    count: 9,
    target: 23,
    progress: 39,
    status: { label: "Behind", tone: "warning" },
  },
];

export type ScheduleItem = {
  id: string;
  time: string;
  title: string;
  patient: string;
  room: string;
  tone: StatusTone;
  state: "completed" | "in-progress" | "upcoming";
};

export const TODAY_SCHEDULE: ScheduleItem[] = [
  { id: "s1", time: "09:00 AM", title: "Assessment", patient: "Ayaan Rahman", room: "Room 1", tone: "success", state: "completed" },
  { id: "s2", time: "09:45 AM", title: "Individual Therapy", patient: "Nabila Haque", room: "Room 3", tone: "success", state: "completed" },
  { id: "s3", time: "10:30 AM", title: "Group Therapy", patient: "Batch A · 6 children", room: "Hall B", tone: "success", state: "completed" },
  { id: "s4", time: "11:15 AM", title: "Follow-up Call", patient: "Sumaiya Islam", room: "Front desk", tone: "success", state: "completed" },
  { id: "s5", time: "12:00 PM", title: "Individual Therapy", patient: "Rafid Chowdhury", room: "Room 2", tone: "info", state: "in-progress" },
  { id: "s6", time: "02:00 PM", title: "Assessment", patient: "Tahmid Alam", room: "Room 1", tone: "neutral", state: "upcoming" },
  { id: "s7", time: "03:15 PM", title: "Group Therapy", patient: "Batch C · 5 children", room: "Hall B", tone: "neutral", state: "upcoming" },
  { id: "s8", time: "04:30 PM", title: "Individual Therapy", patient: "Zarin Tasnim", room: "Room 4", tone: "neutral", state: "upcoming" },
  { id: "s9", time: "05:45 PM", title: "Follow-up Call", patient: "Mahmudul Karim", room: "Front desk", tone: "neutral", state: "upcoming" },
  { id: "s10", time: "06:30 PM", title: "Individual Therapy", patient: "Ishrat Jahan", room: "Room 3", tone: "neutral", state: "upcoming" },
];

export type UpcomingAppointment = {
  id: string;
  time: string;
  patient: string;
  therapy: string;
  therapist: string;
  status: { label: string; tone: StatusTone };
};

export const UPCOMING_APPOINTMENTS: UpcomingAppointment[] = [
  { id: "u1", time: "02:00 PM", patient: "Tahmid Alam", therapy: "Assessment", therapist: "Dr. Sabrina Yasmin", status: { label: "Confirmed", tone: "success" } },
  { id: "u2", time: "03:15 PM", patient: "Batch C", therapy: "Group Therapy", therapist: "Rezwan Kabir", status: { label: "Confirmed", tone: "success" } },
  { id: "u3", time: "04:30 PM", patient: "Zarin Tasnim", therapy: "Individual Therapy", therapist: "Dr. Sabrina Yasmin", status: { label: "Pending", tone: "warning" } },
  { id: "u4", time: "05:45 PM", patient: "Mahmudul Karim", therapy: "Follow-up", therapist: "Nafisa Anjum", status: { label: "Rescheduled", tone: "info" } },
  { id: "u5", time: "06:30 PM", patient: "Ishrat Jahan", therapy: "Individual Therapy", therapist: "Rezwan Kabir", status: { label: "Confirmed", tone: "success" } },
];

export type RecentPatient = {
  id: string;
  code: string;
  name: string;
  guardian: string;
  phone: string;
  packageName: string;
  status: { label: string; tone: StatusTone };
};

export const RECENT_PATIENTS: RecentPatient[] = [
  { id: "p1", code: "PT-10428", name: "Ayaan Rahman", guardian: "Farhana Rahman", phone: "+880 1711-204488", packageName: "Monthly Package", status: { label: "Active", tone: "success" } },
  { id: "p2", code: "PT-10427", name: "Nabila Haque", guardian: "Imran Haque", phone: "+880 1811-337290", packageName: "12-Session Package", status: { label: "Active", tone: "success" } },
  { id: "p3", code: "PT-10426", name: "Rafid Chowdhury", guardian: "Sadia Chowdhury", phone: "+880 1911-556621", packageName: "Daily Payment", status: { label: "Due", tone: "warning" } },
  { id: "p4", code: "PT-10425", name: "Zarin Tasnim", guardian: "Kamrul Hasan", phone: "+880 1611-889012", packageName: "Monthly Package", status: { label: "Active", tone: "success" } },
  { id: "p5", code: "PT-10424", name: "Tahmid Alam", guardian: "Nusrat Alam", phone: "+880 1511-442078", packageName: "Assessment Only", status: { label: "New", tone: "info" } },
  { id: "p6", code: "PT-10423", name: "Ishrat Jahan", guardian: "Jubayer Alam", phone: "+880 1311-670145", packageName: "8-Session Package", status: { label: "Inactive", tone: "neutral" } },
];

export type FollowUpItem = {
  id: string;
  patient: string;
  phone: string;
  lastVisit: string;
  daysRemaining: number;
  priority: { label: string; tone: StatusTone };
};

export const PENDING_FOLLOW_UPS: FollowUpItem[] = [
  { id: "f1", patient: "Sumaiya Islam", phone: "+880 1712-990183", lastVisit: "18 Jul 2026", daysRemaining: -2, priority: { label: "Overdue", tone: "danger" } },
  { id: "f2", patient: "Mahmudul Karim", phone: "+880 1819-441026", lastVisit: "21 Jul 2026", daysRemaining: 0, priority: { label: "High", tone: "danger" } },
  { id: "f3", patient: "Arisha Noor", phone: "+880 1913-772540", lastVisit: "24 Jul 2026", daysRemaining: 2, priority: { label: "Medium", tone: "warning" } },
  { id: "f4", patient: "Sabbir Ahmed", phone: "+880 1614-208931", lastVisit: "26 Jul 2026", daysRemaining: 4, priority: { label: "Medium", tone: "warning" } },
  { id: "f5", patient: "Rumana Akter", phone: "+880 1515-663472", lastVisit: "28 Jul 2026", daysRemaining: 6, priority: { label: "Low", tone: "info" } },
];

export type PaymentSummaryCard = {
  id: string;
  label: string;
  amount: number;
  hint: string;
  tone: "primary" | "success" | "warning";
};

export const PAYMENT_SUMMARY: PaymentSummaryCard[] = [
  { id: "today", label: "Today's Collection", amount: 28500, hint: "34 transactions", tone: "success" },
  { id: "week", label: "This Week", amount: 202600, hint: "218 transactions", tone: "primary" },
  { id: "month", label: "This Month", amount: 721700, hint: "912 transactions", tone: "primary" },
  { id: "due", label: "Pending Due", amount: 15200, hint: "12 invoices unsettled", tone: "warning" },
];

export type PackageSlice = { name: string; value: number; token: string };

export const PACKAGE_DISTRIBUTION: PackageSlice[] = [
  { name: "Daily Package", value: 34, token: "var(--chart-1)" },
  { name: "Session-wise Package", value: 29, token: "var(--chart-2)" },
  { name: "Monthly Package", value: 24, token: "var(--chart-3)" },
  { name: "Online Booking", value: 13, token: "var(--chart-5)" },
];

export type InventoryItem = {
  id: string;
  item: string;
  stock: number;
  minimum: number;
  status: { label: string; tone: StatusTone };
};

export const INVENTORY_ALERTS: InventoryItem[] = [
  { id: "i1", item: "Articulation Flash Cards", stock: 4, minimum: 20, status: { label: "Critical", tone: "danger" } },
  { id: "i2", item: "Therapy Mirrors", stock: 2, minimum: 6, status: { label: "Critical", tone: "danger" } },
  { id: "i3", item: "Oral Motor Kits", stock: 9, minimum: 15, status: { label: "Low", tone: "warning" } },
  { id: "i4", item: "Assessment Forms (pad)", stock: 12, minimum: 25, status: { label: "Low", tone: "warning" } },
  { id: "i5", item: "Sanitiser 500ml", stock: 14, minimum: 20, status: { label: "Low", tone: "warning" } },
];

export type ManagerActivity = {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: LucideIcon;
  tone: StatusTone;
};

export const MANAGER_ACTIVITIES: ManagerActivity[] = [
  { id: "ma1", title: "New patient registered", description: "Tahmid Alam added by front desk", time: "8 minutes ago", icon: UserPlus, tone: "info" },
  { id: "ma2", title: "Assessment completed", description: "Ayaan Rahman · report pending review", time: "42 minutes ago", icon: ClipboardCheck, tone: "success" },
  { id: "ma3", title: "Payment collected", description: "৳ 4,500 from Nabila Haque", time: "1 hour ago", icon: CreditCard, tone: "success" },
  { id: "ma4", title: "Therapy session completed", description: "Group Therapy Batch A · Hall B", time: "2 hours ago", icon: Activity, tone: "info" },
  { id: "ma5", title: "Package created", description: "New 8-session fluency package", time: "4 hours ago", icon: Boxes, tone: "neutral" },
  { id: "ma6", title: "Follow-up completed", description: "Nafisa Anjum closed 5 calls", time: "Yesterday, 7:10 PM", icon: PhoneCall, tone: "warning" },
];

export type ManagerQuickAction = {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

export const MANAGER_QUICK_ACTIONS: ManagerQuickAction[] = [
  { id: "register-patient", label: "Register New Patient", description: "Add a patient record", icon: UserPlus },
  { id: "new-assessment", label: "New Assessment", description: "Start a speech assessment", icon: ClipboardCheck },
  { id: "individual-therapy", label: "Individual Therapy", description: "Log a one-to-one session", icon: Stethoscope },
  { id: "group-therapy", label: "Group Therapy", description: "Log a batch session", icon: UsersRound },
  { id: "schedule-appointment", label: "Schedule Appointment", description: "Book a new slot", icon: CalendarPlus },
  { id: "create-package", label: "Create Payment Package", description: "Bundle sessions & pricing", icon: Boxes },
  { id: "collect-payment", label: "Collect Payment", description: "Record a collection", icon: CreditCard },
  { id: "outdoor-entry", label: "Outdoor Register Entry", description: "Walk-in consultation log", icon: ClipboardList },
  { id: "daily-report", label: "View Daily Report", description: "Today's operations", icon: FileBarChart },
  { id: "monthly-report", label: "Monthly Report", description: "Branch performance", icon: CalendarRange },
  { id: "inventory", label: "Inventory", description: "Stock & consumables", icon: Package },
  { id: "marketing", label: "Marketing", description: "Campaigns & outreach", icon: Megaphone },
];

export type GoalItem = { id: string; label: string; current: number; target: number };

export const TODAY_GOALS: GoalItem[] = [
  { id: "g1", label: "Sessions completed", current: 31, target: 40 },
  { id: "g2", label: "Collection target", current: 28500, target: 35000 },
  { id: "g3", label: "Follow-up calls", current: 9, target: 23 },
];

export type NotificationItem = {
  id: string;
  title: string;
  time: string;
  tone: StatusTone;
  icon: LucideIcon;
};

export const MANAGER_NOTIFICATIONS: NotificationItem[] = [
  { id: "n1", title: "2 inventory items hit critical stock", time: "10 min ago", tone: "danger", icon: Package },
  { id: "n2", title: "Online booking received for 4:30 PM", time: "35 min ago", tone: "info", icon: CalendarPlus },
  { id: "n3", title: "Therapist Rezwan Kabir marked leave for Friday", time: "2 hours ago", tone: "warning", icon: BriefcaseMedical },
  { id: "n4", title: "Weekly report is ready to review", time: "Yesterday", tone: "neutral", icon: Bell },
];

export const PERFORMANCE_SCORE = {
  score: 87,
  grade: "A",
  label: "Excellent",
  breakdown: [
    { id: "attendance", label: "Attendance", value: 92 },
    { id: "collection", label: "Collection rate", value: 88 },
    { id: "satisfaction", label: "Patient satisfaction", value: 84 },
    { id: "followup", label: "Follow-up closure", value: 78 },
  ],
};

export const MONTHLY_TARGET = {
  achieved: 721700,
  target: 900000,
  daysLeft: 5,
};
