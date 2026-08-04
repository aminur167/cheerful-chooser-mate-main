import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BadgeCheck,
  Banknote,
  Boxes,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  LineChart,
  Package,
  PhoneCall,
  Settings2,
  UserCog,
  Users,
  Wallet,
} from "lucide-react";
import type { StatusTone } from "@/components/common/status-badge";

/**
 * Static demo data for the Super Admin dashboard.
 * Replaced by the Django REST API later — shape mirrors the intended payloads.
 */

export type KpiTone = "primary" | "success" | "warning" | "danger";

export type Kpi = {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
  tone: KpiTone;
  hint?: string;
  delta?: { value: string; direction: "up" | "down" | "flat" };
};

export const KPIS: Kpi[] = [
  {
    id: "branches",
    label: "Total Branches",
    value: "15",
    icon: Building2,
    tone: "primary",
    hint: "Across 6 divisions",
    delta: { value: "+2 this month", direction: "up" },
  },
  {
    id: "active-branches",
    label: "Active Branches",
    value: "14",
    icon: CheckCircle2,
    tone: "success",
    hint: "1 branch under renovation",
  },
  {
    id: "patients",
    label: "Total Patients",
    value: "1,245",
    icon: Users,
    tone: "primary",
    hint: "Registered organisation-wide",
    delta: { value: "+8%", direction: "up" },
  },
  {
    id: "sessions",
    label: "Today's Sessions",
    value: "138",
    icon: CalendarCheck,
    tone: "primary",
    hint: "96 completed · 42 upcoming",
  },
  {
    id: "revenue",
    label: "Monthly Revenue",
    value: "৳ 8,45,000",
    icon: Wallet,
    tone: "success",
    hint: "July 2026 to date",
    delta: { value: "+12%", direction: "up" },
  },
  {
    id: "follow-ups",
    label: "Pending Follow-ups",
    value: "64",
    icon: PhoneCall,
    tone: "warning",
    hint: "18 overdue by 3+ days",
  },
  {
    id: "staff",
    label: "Staff Members",
    value: "85",
    icon: UserCog,
    tone: "primary",
    hint: "52 therapists · 33 support",
  },
  {
    id: "inventory",
    label: "Low Inventory Alerts",
    value: "7",
    icon: Package,
    tone: "danger",
    hint: "3 items critical",
  },
];

export type RangeKey = "30d" | "6m" | "1y";

export const REVENUE_RANGES: { key: RangeKey; label: string }[] = [
  { key: "30d", label: "Last 30 days" },
  { key: "6m", label: "Last 6 months" },
  { key: "1y", label: "Last year" },
];

export type RevenuePoint = { period: string; revenue: number; collection: number; expenses: number };

export const REVENUE_SERIES: Record<RangeKey, RevenuePoint[]> = {
  "30d": [
    { period: "1 Jul", revenue: 268000, collection: 242000, expenses: 148000 },
    { period: "5 Jul", revenue: 292000, collection: 264000, expenses: 152000 },
    { period: "10 Jul", revenue: 311000, collection: 288000, expenses: 161000 },
    { period: "15 Jul", revenue: 356000, collection: 318000, expenses: 172000 },
    { period: "20 Jul", revenue: 402000, collection: 371000, expenses: 178000 },
    { period: "25 Jul", revenue: 438000, collection: 405000, expenses: 186000 },
    { period: "30 Jul", revenue: 471000, collection: 442000, expenses: 191000 },
  ],
  "6m": [
    { period: "Feb", revenue: 612000, collection: 561000, expenses: 348000 },
    { period: "Mar", revenue: 658000, collection: 604000, expenses: 361000 },
    { period: "Apr", revenue: 701000, collection: 655000, expenses: 372000 },
    { period: "May", revenue: 744000, collection: 692000, expenses: 389000 },
    { period: "Jun", revenue: 793000, collection: 738000, expenses: 401000 },
    { period: "Jul", revenue: 845000, collection: 781000, expenses: 418000 },
  ],
  "1y": [
    { period: "Aug", revenue: 462000, collection: 421000, expenses: 288000 },
    { period: "Sep", revenue: 495000, collection: 452000, expenses: 296000 },
    { period: "Oct", revenue: 528000, collection: 486000, expenses: 305000 },
    { period: "Nov", revenue: 551000, collection: 508000, expenses: 318000 },
    { period: "Dec", revenue: 604000, collection: 559000, expenses: 336000 },
    { period: "Jan", revenue: 587000, collection: 541000, expenses: 331000 },
    { period: "Feb", revenue: 612000, collection: 561000, expenses: 348000 },
    { period: "Mar", revenue: 658000, collection: 604000, expenses: 361000 },
    { period: "Apr", revenue: 701000, collection: 655000, expenses: 372000 },
    { period: "May", revenue: 744000, collection: 692000, expenses: 389000 },
    { period: "Jun", revenue: 793000, collection: 738000, expenses: 401000 },
    { period: "Jul", revenue: 845000, collection: 781000, expenses: 418000 },
  ],
};

export type BranchPerformance = {
  id: string;
  name: string;
  city: string;
  manager: string;
  revenue: number;
  patients: number;
  target: number;
  status: { label: string; tone: StatusTone };
};

export const BRANCH_RANGES: { key: RangeKey; label: string }[] = [
  { key: "30d", label: "Last 30 days" },
  { key: "6m", label: "Last 6 months" },
  { key: "1y", label: "Last year" },
];

/**
 * Top branches by revenue for each reporting period.
 * Keyed by the same RangeKey used by Revenue Overview so both widgets
 * can share a consistent time-range experience.
 */
export const BRANCH_PERFORMANCE_SERIES: Record<RangeKey, BranchPerformance[]> = {
  "30d": [
    {
      id: "dhanmondi",
      name: "Dhanmondi Centre",
      city: "Dhaka",
      manager: "Farhana Rahman",
      revenue: 184000,
      patients: 214,
      target: 92,
      status: { label: "Excellent", tone: "success" },
    },
    {
      id: "gulshan",
      name: "Gulshan Clinic",
      city: "Dhaka",
      manager: "Imran Hossain",
      revenue: 162500,
      patients: 198,
      target: 86,
      status: { label: "Excellent", tone: "success" },
    },
    {
      id: "chattogram",
      name: "Chattogram Hub",
      city: "Chattogram",
      manager: "Nusrat Jahan",
      revenue: 128400,
      patients: 165,
      target: 74,
      status: { label: "On track", tone: "info" },
    },
    {
      id: "sylhet",
      name: "Sylhet Centre",
      city: "Sylhet",
      manager: "Tanvir Ahmed",
      revenue: 96200,
      patients: 131,
      target: 61,
      status: { label: "Watchlist", tone: "warning" },
    },
    {
      id: "rajshahi",
      name: "Rajshahi Branch",
      city: "Rajshahi",
      manager: "Sadia Karim",
      revenue: 71800,
      patients: 104,
      target: 48,
      status: { label: "Below target", tone: "danger" },
    },
  ],
  "6m": [
    {
      id: "dhanmondi",
      name: "Dhanmondi Centre",
      city: "Dhaka",
      manager: "Farhana Rahman",
      revenue: 986000,
      patients: 1194,
      target: 94,
      status: { label: "Excellent", tone: "success" },
    },
    {
      id: "gulshan",
      name: "Gulshan Clinic",
      city: "Dhaka",
      manager: "Imran Hossain",
      revenue: 874500,
      patients: 1082,
      target: 89,
      status: { label: "Excellent", tone: "success" },
    },
    {
      id: "chattogram",
      name: "Chattogram Hub",
      city: "Chattogram",
      manager: "Nusrat Jahan",
      revenue: 692800,
      patients: 902,
      target: 78,
      status: { label: "On track", tone: "info" },
    },
    {
      id: "sylhet",
      name: "Sylhet Centre",
      city: "Sylhet",
      manager: "Tanvir Ahmed",
      revenue: 521400,
      patients: 704,
      target: 63,
      status: { label: "Watchlist", tone: "warning" },
    },
    {
      id: "rajshahi",
      name: "Rajshahi Branch",
      city: "Rajshahi",
      manager: "Sadia Karim",
      revenue: 387600,
      patients: 556,
      target: 51,
      status: { label: "Below target", tone: "danger" },
    },
  ],
  "1y": [
    {
      id: "dhanmondi",
      name: "Dhanmondi Centre",
      city: "Dhaka",
      manager: "Farhana Rahman",
      revenue: 2018000,
      patients: 2450,
      target: 96,
      status: { label: "Excellent", tone: "success" },
    },
    {
      id: "gulshan",
      name: "Gulshan Clinic",
      city: "Dhaka",
      manager: "Imran Hossain",
      revenue: 1789000,
      patients: 2198,
      target: 91,
      status: { label: "Excellent", tone: "success" },
    },
    {
      id: "chattogram",
      name: "Chattogram Hub",
      city: "Chattogram",
      manager: "Nusrat Jahan",
      revenue: 1426000,
      patients: 1834,
      target: 81,
      status: { label: "On track", tone: "info" },
    },
    {
      id: "sylhet",
      name: "Sylhet Centre",
      city: "Sylhet",
      manager: "Tanvir Ahmed",
      revenue: 1084000,
      patients: 1472,
      target: 69,
      status: { label: "Watchlist", tone: "warning" },
    },
    {
      id: "rajshahi",
      name: "Rajshahi Branch",
      city: "Rajshahi",
      manager: "Sadia Karim",
      revenue: 812000,
      patients: 1108,
      target: 57,
      status: { label: "Watchlist", tone: "warning" },
    },
  ],
};

export type GrowthPoint = { month: string; patients: number; newPatients: number };

export const PATIENT_GROWTH: GrowthPoint[] = [
  { month: "Feb", patients: 812, newPatients: 64 },
  { month: "Mar", patients: 889, newPatients: 77 },
  { month: "Apr", patients: 964, newPatients: 75 },
  { month: "May", patients: 1058, newPatients: 94 },
  { month: "Jun", patients: 1152, newPatients: 94 },
  { month: "Jul", patients: 1245, newPatients: 93 },
];

export type PaymentSlice = { name: string; value: number; token: string };

export const PAYMENT_DISTRIBUTION: PaymentSlice[] = [
  { name: "Daily Payment", value: 38, token: "var(--chart-1)" },
  { name: "Session Package", value: 27, token: "var(--chart-2)" },
  { name: "Monthly Package", value: 21, token: "var(--chart-3)" },
  { name: "Online Booking", value: 14, token: "var(--chart-5)" },
];

export type TherapyStat = { name: string; sessions: number };

export const THERAPY_STATS: TherapyStat[] = [
  { name: "Individual Therapy", sessions: 682 },
  { name: "Group Therapy", sessions: 341 },
  { name: "Assessment", sessions: 218 },
  { name: "Follow-up", sessions: 164 },
];

export type RecentBranch = {
  id: string;
  name: string;
  city: string;
  manager: string;
  managerRole: string;
  patients: number;
  revenue: number;
  status: { label: string; tone: StatusTone };
};

export const RECENT_BRANCHES: RecentBranch[] = [
  {
    id: "uttara",
    name: "Uttara Centre",
    city: "Dhaka",
    manager: "Rezaul Haque",
    managerRole: "Branch Manager",
    patients: 86,
    revenue: 54200,
    status: { label: "Active", tone: "success" },
  },
  {
    id: "khulna",
    name: "Khulna Clinic",
    city: "Khulna",
    manager: "Maliha Sultana",
    managerRole: "Branch Manager",
    patients: 72,
    revenue: 41800,
    status: { label: "Active", tone: "success" },
  },
  {
    id: "bogura",
    name: "Bogura Branch",
    city: "Bogura",
    manager: "Arif Chowdhury",
    managerRole: "Acting Manager",
    patients: 45,
    revenue: 26400,
    status: { label: "Onboarding", tone: "info" },
  },
  {
    id: "cumilla",
    name: "Cumilla Centre",
    city: "Cumilla",
    manager: "Shirin Akter",
    managerRole: "Branch Manager",
    patients: 38,
    revenue: 19750,
    status: { label: "Pending setup", tone: "warning" },
  },
  {
    id: "barishal",
    name: "Barishal Branch",
    city: "Barishal",
    manager: "Jubayer Alam",
    managerRole: "Branch Manager",
    patients: 21,
    revenue: 8900,
    status: { label: "Renovation", tone: "neutral" },
  },
];

export type ActivityItem = {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: LucideIcon;
  tone: StatusTone;
};

export const RECENT_ACTIVITIES: ActivityItem[] = [
  {
    id: "a1",
    title: "Branch created",
    description: "Uttara Centre was added by Dr. Amara Whitfield",
    time: "12 minutes ago",
    icon: Building2,
    tone: "info",
  },
  {
    id: "a2",
    title: "Payment collected",
    description: "৳ 24,500 collected at Dhanmondi Centre",
    time: "48 minutes ago",
    icon: Banknote,
    tone: "success",
  },
  {
    id: "a3",
    title: "Assessment completed",
    description: "18 speech assessments finalised at Gulshan Clinic",
    time: "2 hours ago",
    icon: ClipboardCheck,
    tone: "info",
  },
  {
    id: "a4",
    title: "Package created",
    description: "New 12-session articulation package published",
    time: "5 hours ago",
    icon: Boxes,
    tone: "neutral",
  },
  {
    id: "a5",
    title: "Follow-up completed",
    description: "Nusrat Jahan closed 9 pending follow-up calls",
    time: "Yesterday, 6:20 PM",
    icon: PhoneCall,
    tone: "warning",
  },
];

export type QuickAction = { id: string; label: string; description: string; icon: LucideIcon };

export const QUICK_ACTIONS: QuickAction[] = [
  { id: "create-branch", label: "Create Branch", description: "Add a new location", icon: Building2 },
  { id: "view-reports", label: "View Reports", description: "Operational summaries", icon: ClipboardCheck },
  { id: "view-analytics", label: "View Analytics", description: "Trends & forecasts", icon: LineChart },
  { id: "manage-packages", label: "Manage Packages", description: "Therapy bundles", icon: Boxes },
  { id: "system-settings", label: "System Settings", description: "Organisation config", icon: Settings2 },
  { id: "branch-performance", label: "Branch Performance", description: "Scorecards", icon: Activity },
];

export type SystemStat = {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
  tone: StatusTone;
};

export const SYSTEM_OVERVIEW: SystemStat[] = [
  { id: "server", label: "Server Status", value: "Healthy", icon: Activity, tone: "success" },
  { id: "database", label: "Database", value: "Connected", icon: BadgeCheck, tone: "success" },
  { id: "backup", label: "Today's Backup", value: "Completed", icon: CheckCircle2, tone: "info" },
  { id: "version", label: "System Version", value: "v1.0", icon: Package, tone: "neutral" },
];

/** Formats an amount as Bangladeshi Taka with lakh/crore digit grouping. */
export function formatTaka(amount: number) {
  return `৳ ${new Intl.NumberFormat("en-IN").format(amount)}`;
}
