import {
  Activity,
  AlertTriangle,
  BadgeCheck,
  Banknote,
  Boxes,
  CalendarCheck,
  CircleDollarSign,
  ClipboardCheck,
  Gauge,
  MapPinned,
  PackageMinus,
  PackagePlus,
  PhoneCall,
  UserPlus,
  UsersRound,
  Wallet,
} from "lucide-react";
import type { Kpi } from "@/constants/dashboard-data";
import { formatTaka } from "@/constants/dashboard-data";
import type { StatusTone } from "@/components/common/status-badge";

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */

export type DailyActivityState = "done" | "pending" | "skipped" | "missed";

export type DailyPatientRow = {
  id: string;
  patientId: string;
  patientName: string;
  registration: DailyActivityState;
  assessment: DailyActivityState;
  therapy: DailyActivityState;
  payment: DailyActivityState;
  followUp: DailyActivityState;
  status: "Completed" | "In Progress" | "Partial" | "No Show";
};

export type TimelineEntry = {
  id: string;
  time: string;
  title: string;
  detail: string;
  icon: string;
  tone: StatusTone;
};

export type ChecklistItem = {
  id: string;
  label: string;
  detail: string;
  done: boolean;
};

export type NoteField = {
  id: keyof DailyNotes;
  label: string;
  placeholder: string;
  hint: string;
};

export type DailyNotes = {
  challenges: string;
  achievements: string;
  events: string;
  recommendations: string;
  tomorrow: string;
};

export type SummaryStat = { id: string; label: string; value: string; hint?: string };

export type DailyReport = {
  id: string;
  code: string;
  date: string;
  branch: string;
  manager: string;
  status: "Closed" | "Draft" | "Open";
  openingTime: string;
  closingTime: string;
  workingHours: string;
  patientsServed: number;
  newRegistrations: number;
  assessments: number;
  individualSessions: number;
  groupSessions: number;
  completedSessions: number;
  missedSessions: number;
  cancelledSessions: number;
  followUps: number;
  outdoorVisits: number;
  collection: number;
  dueCollected: number;
  discounts: number;
  pendingDue: number;
  stockIn: number;
  stockOut: number;
  materialsUsed: number;
  lowStock: number;
  performanceScore: number;
  targetCollection: number;
  pendingTasks: number;
  notes: DailyNotes;
};

/* ------------------------------------------------------------------ */
/* Branch context                                                     */
/* ------------------------------------------------------------------ */

export const DAILY_BRANCH = {
  name: "Dhaka Main Branch",
  code: "BR-DHK-01",
  address: "House 42, Road 11, Dhanmondi, Dhaka 1209",
  phone: "+880 1711-204488",
  manager: "Nusrat Jahan",
  therapists: 9,
  rooms: 6,
};

export const TODAY_ISO = "2026-07-31";
export const TODAY_LABEL = "Friday, 31 July 2026";

/* ------------------------------------------------------------------ */
/* KPI cards (10)                                                     */
/* ------------------------------------------------------------------ */

export const DAILY_KPIS: Kpi[] = [
  {
    id: "patients",
    label: "Today's Patients",
    value: "42",
    icon: UsersRound,
    tone: "primary",
    hint: "38 attended, 4 no-show",
    delta: { value: "+6 vs yesterday", direction: "up" },
  },
  {
    id: "registrations",
    label: "New Registrations",
    value: "7",
    icon: UserPlus,
    tone: "success",
    hint: "5 walk-in, 2 online",
    delta: { value: "+2 vs yesterday", direction: "up" },
  },
  {
    id: "assessments",
    label: "Today's Assessments",
    value: "9",
    icon: ClipboardCheck,
    tone: "primary",
    hint: "6 initial, 3 re-assessment",
    delta: { value: "+1 vs yesterday", direction: "up" },
  },
  {
    id: "individual",
    label: "Individual Therapy",
    value: "24",
    icon: Activity,
    tone: "primary",
    hint: "21 completed, 3 missed",
    delta: { value: "+4 vs yesterday", direction: "up" },
  },
  {
    id: "group",
    label: "Group Therapy",
    value: "6",
    icon: UsersRound,
    tone: "success",
    hint: "4 groups, 19 patients",
    delta: { value: "flat vs yesterday", direction: "flat" },
  },
  {
    id: "collection",
    label: "Today's Collection",
    value: formatTaka(84500),
    icon: Wallet,
    tone: "success",
    hint: "Cash, card, bKash, bank",
    delta: { value: "+11.2% vs yesterday", direction: "up" },
  },
  {
    id: "due",
    label: "Pending Due Collection",
    value: formatTaka(36200),
    icon: CircleDollarSign,
    tone: "warning",
    hint: "11 patients pending",
    delta: { value: "-4.8% vs yesterday", direction: "down" },
  },
  {
    id: "follow-ups",
    label: "Today's Follow-ups",
    value: "15",
    icon: PhoneCall,
    tone: "primary",
    hint: "12 connected, 3 no answer",
    delta: { value: "+3 vs yesterday", direction: "up" },
  },
  {
    id: "outdoor",
    label: "Outdoor Visits",
    value: "5",
    icon: MapPinned,
    tone: "success",
    hint: "3 home, 2 school",
    delta: { value: "+1 vs yesterday", direction: "up" },
  },
  {
    id: "score",
    label: "Performance Score",
    value: "92%",
    icon: Gauge,
    tone: "success",
    hint: "Target achievement 94%",
    delta: { value: "+3 pts vs yesterday", direction: "up" },
  },
];

/* ------------------------------------------------------------------ */
/* Tabs                                                               */
/* ------------------------------------------------------------------ */

export const DAILY_TABS = [
  { value: "overview", label: "Overview" },
  { value: "patients", label: "Patients" },
  { value: "clinical", label: "Clinical Activities" },
  { value: "finance", label: "Finance" },
  { value: "inventory", label: "Inventory" },
  { value: "notes", label: "Manager Notes" },
] as const;

/* ------------------------------------------------------------------ */
/* Overview                                                           */
/* ------------------------------------------------------------------ */

export const TODAYS_SUMMARY: SummaryStat[] = [
  { id: "hours", label: "Working Hours", value: "9h 30m", hint: "08:30 AM – 06:00 PM" },
  { id: "opening", label: "Opening Time", value: "08:30 AM", hint: "Opened by Nusrat Jahan" },
  { id: "closing", label: "Closing Time", value: "06:00 PM", hint: "Scheduled closing" },
  { id: "served", label: "Patients Served", value: "38", hint: "Out of 42 scheduled" },
  { id: "sessions", label: "Sessions Completed", value: "27", hint: "21 individual, 6 group" },
  { id: "revenue", label: "Revenue Collected", value: formatTaka(84500), hint: "94% of target" },
  { id: "tasks", label: "Pending Tasks", value: "4", hint: "2 due calls, 2 reports" },
];

export const PERFORMANCE_RINGS = [
  { id: "completion", label: "Completion", value: 92, caption: "Daily activities completed" },
  { id: "target", label: "Target Achievement", value: 94, caption: "Collection vs ৳ 90,000" },
  { id: "attendance", label: "Attendance", value: 90, caption: "38 of 42 patients attended" },
];

export const DAILY_TIMELINE: TimelineEntry[] = [
  {
    id: "t1",
    time: "08:30 AM",
    title: "Branch Opened",
    detail: "Dhaka Main Branch opened by Nusrat Jahan. Therapy rooms 1–6 prepared.",
    icon: "sunrise",
    tone: "info",
  },
  {
    id: "t2",
    time: "09:00 AM",
    title: "Patient Registration",
    detail: "7 new patients registered — Tanvir Hasan, Sumaiya Islam and 5 others.",
    icon: "user-plus",
    tone: "success",
  },
  {
    id: "t3",
    time: "10:00 AM",
    title: "Assessment Completed",
    detail: "9 clinical assessments finalised by Dr. Farhana Rahman and team.",
    icon: "clipboard",
    tone: "success",
  },
  {
    id: "t4",
    time: "11:30 AM",
    title: "Therapy Session Completed",
    detail: "Morning block closed — 14 individual and 3 group sessions completed.",
    icon: "activity",
    tone: "success",
  },
  {
    id: "t5",
    time: "01:30 PM",
    title: "Payment Collected",
    detail: `${formatTaka(52300)} collected in the afternoon block across 19 invoices.`,
    icon: "wallet",
    tone: "success",
  },
  {
    id: "t6",
    time: "03:00 PM",
    title: "Follow-up Call",
    detail: "15 retention calls made — 12 connected, 3 rescheduled for tomorrow.",
    icon: "phone",
    tone: "info",
  },
  {
    id: "t7",
    time: "05:00 PM",
    title: "Outdoor Visit Completed",
    detail: "5 outdoor visits closed in Mirpur, Uttara and Mohammadpur areas.",
    icon: "map",
    tone: "success",
  },
  {
    id: "t8",
    time: "06:00 PM",
    title: "Branch Closed",
    detail: "Inventory reconciled, cash box verified and daily report generated.",
    icon: "sunset",
    tone: "neutral",
  },
];

/* ------------------------------------------------------------------ */
/* Patients tab                                                       */
/* ------------------------------------------------------------------ */

export const ACTIVITY_STATE_TONE: Record<DailyActivityState, StatusTone> = {
  done: "success",
  pending: "warning",
  skipped: "neutral",
  missed: "danger",
};

export const ACTIVITY_STATE_LABEL: Record<DailyActivityState, string> = {
  done: "Done",
  pending: "Pending",
  skipped: "N/A",
  missed: "Missed",
};

export const DAILY_PATIENT_STATUS_TONE: Record<DailyPatientRow["status"], StatusTone> = {
  Completed: "success",
  "In Progress": "info",
  Partial: "warning",
  "No Show": "danger",
};

export const DAILY_PATIENT_ROWS: DailyPatientRow[] = [
  {
    id: "dp-01",
    patientId: "PT-2401",
    patientName: "Rahim Ahmed",
    registration: "skipped",
    assessment: "done",
    therapy: "done",
    payment: "done",
    followUp: "done",
    status: "Completed",
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
    status: "Partial",
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
    status: "In Progress",
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
    status: "Completed",
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
    status: "No Show",
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
    status: "Completed",
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
    status: "In Progress",
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
    status: "Partial",
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
    status: "Completed",
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
    status: "Partial",
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
    status: "Completed",
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
    status: "No Show",
  },
];

/* ------------------------------------------------------------------ */
/* Clinical tab                                                       */
/* ------------------------------------------------------------------ */

export type ClinicalCard = {
  id: string;
  label: string;
  value: string;
  hint: string;
  icon: string;
  tone: StatusTone;
};

export const CLINICAL_CARDS: ClinicalCard[] = [
  {
    id: "assessments",
    label: "Today's Assessments",
    value: "9",
    hint: "6 initial, 3 re-assessment",
    icon: "clipboard",
    tone: "info",
  },
  {
    id: "individual",
    label: "Today's Individual Therapy",
    value: "24",
    hint: "Articulation, fluency, language",
    icon: "activity",
    tone: "info",
  },
  {
    id: "group",
    label: "Today's Group Therapy",
    value: "6",
    hint: "4 groups · 19 patients",
    icon: "users",
    tone: "info",
  },
  {
    id: "completed",
    label: "Completed Therapy",
    value: "27",
    hint: "90% completion rate",
    icon: "check",
    tone: "success",
  },
  {
    id: "missed",
    label: "Missed Sessions",
    value: "3",
    hint: "Mahfuz Rahman, Meherun Nesa, +1",
    icon: "alert",
    tone: "warning",
  },
  {
    id: "cancelled",
    label: "Cancelled Sessions",
    value: "2",
    hint: "Cancelled by guardian",
    icon: "ban",
    tone: "danger",
  },
];

export const SESSION_DISTRIBUTION = [
  { name: "Completed", value: 27, token: "var(--chart-1)" },
  { name: "In Progress", value: 4, token: "var(--chart-2)" },
  { name: "Missed", value: 3, token: "var(--chart-4)" },
  { name: "Cancelled", value: 2, token: "var(--chart-5)" },
];

export const THERAPY_TYPE_DISTRIBUTION = [
  { name: "Articulation", value: 9, token: "var(--chart-1)" },
  { name: "Language", value: 7, token: "var(--chart-2)" },
  { name: "Fluency", value: 5, token: "var(--chart-3)" },
  { name: "Voice", value: 4, token: "var(--chart-4)" },
  { name: "Feeding", value: 5, token: "var(--chart-5)" },
];

/* ------------------------------------------------------------------ */
/* Finance tab                                                        */
/* ------------------------------------------------------------------ */

export const FINANCE_CARDS = [
  {
    id: "income",
    label: "Today's Income",
    value: formatTaka(84500),
    hint: "32 invoices settled",
    icon: Banknote,
    tone: "success" as StatusTone,
  },
  {
    id: "due-collected",
    label: "Today's Due Collection",
    value: formatTaka(18700),
    hint: "From 7 previous invoices",
    icon: Wallet,
    tone: "info" as StatusTone,
  },
  {
    id: "discounts",
    label: "Today's Discounts",
    value: formatTaka(4300),
    hint: "5 concession cases",
    icon: BadgeCheck,
    tone: "warning" as StatusTone,
  },
  {
    id: "pending",
    label: "Pending Due",
    value: formatTaka(36200),
    hint: "11 patients carried forward",
    icon: AlertTriangle,
    tone: "danger" as StatusTone,
  },
];

export const DAILY_PAYMENT_DISTRIBUTION = [
  { name: "Cash", value: 41200, token: "var(--chart-1)" },
  { name: "Card", value: 16800, token: "var(--chart-2)" },
  { name: "Mobile Banking", value: 21500, token: "var(--chart-3)" },
  { name: "Bank Transfer", value: 5000, token: "var(--chart-5)" },
];

/* ------------------------------------------------------------------ */
/* Inventory tab                                                      */
/* ------------------------------------------------------------------ */

export const INVENTORY_CARDS = [
  {
    id: "stock-in",
    label: "Stock In",
    value: "34 units",
    hint: "3 purchase entries received",
    icon: PackagePlus,
    tone: "success" as StatusTone,
  },
  {
    id: "stock-out",
    label: "Stock Out",
    value: "21 units",
    hint: "12 sales, 9 internal issues",
    icon: PackageMinus,
    tone: "info" as StatusTone,
  },
  {
    id: "used",
    label: "Materials Used",
    value: "9 items",
    hint: "Therapy rooms 1–6",
    icon: Boxes,
    tone: "warning" as StatusTone,
  },
  {
    id: "low",
    label: "Low Stock",
    value: "4 items",
    hint: "Reorder recommended today",
    icon: AlertTriangle,
    tone: "danger" as StatusTone,
  },
];

export type InventoryMovement = {
  id: string;
  item: string;
  category: string;
  type: "Stock In" | "Stock Out" | "Used";
  quantity: string;
  value: string;
  handledBy: string;
  time: string;
};

export const INVENTORY_MOVEMENTS: InventoryMovement[] = [
  {
    id: "im-01",
    item: "Articulation Flash Card Set",
    category: "Therapy Cards",
    type: "Stock In",
    quantity: "+15",
    value: formatTaka(10500),
    handledBy: "Rakib Hasan",
    time: "09:40 AM",
  },
  {
    id: "im-02",
    item: "Oral Motor Exercise Kit",
    category: "Therapy Tools",
    type: "Stock Out",
    quantity: "-6",
    value: formatTaka(7200),
    handledBy: "Sadia Afrin",
    time: "10:55 AM",
  },
  {
    id: "im-03",
    item: "Picture Communication Book",
    category: "Educational",
    type: "Stock In",
    quantity: "+12",
    value: formatTaka(8400),
    handledBy: "Rakib Hasan",
    time: "11:20 AM",
  },
  {
    id: "im-04",
    item: "Chewy Tube (Medium)",
    category: "Feeding Aids",
    type: "Used",
    quantity: "-4",
    value: formatTaka(1600),
    handledBy: "Dr. Farhana Rahman",
    time: "12:15 PM",
  },
  {
    id: "im-05",
    item: "Bubble Blower Pack",
    category: "Play Therapy",
    type: "Used",
    quantity: "-5",
    value: formatTaka(950),
    handledBy: "Nafisa Karim",
    time: "02:30 PM",
  },
  {
    id: "im-06",
    item: "Mirror Board (Small)",
    category: "Therapy Tools",
    type: "Stock In",
    quantity: "+7",
    value: formatTaka(6300),
    handledBy: "Rakib Hasan",
    time: "03:45 PM",
  },
  {
    id: "im-07",
    item: "Speech Sound Workbook",
    category: "Educational",
    type: "Stock Out",
    quantity: "-9",
    value: formatTaka(4050),
    handledBy: "Sadia Afrin",
    time: "04:50 PM",
  },
];

export const LOW_STOCK_TODAY = [
  { id: "ls-1", item: "Chewy Tube (Medium)", remaining: 3, reorder: 15 },
  { id: "ls-2", item: "Bubble Blower Pack", remaining: 4, reorder: 20 },
  { id: "ls-3", item: "Articulation Mirror", remaining: 2, reorder: 10 },
  { id: "ls-4", item: "Sensory Chew Necklace", remaining: 5, reorder: 25 },
];

/* ------------------------------------------------------------------ */
/* Manager notes                                                      */
/* ------------------------------------------------------------------ */

export const NOTE_FIELDS: NoteField[] = [
  {
    id: "challenges",
    label: "Today's Challenges",
    placeholder: "Describe operational challenges faced today…",
    hint: "Staffing, scheduling, equipment or patient issues",
  },
  {
    id: "achievements",
    label: "Achievements",
    placeholder: "Highlight wins and milestones achieved today…",
    hint: "Targets met, patient progress, team performance",
  },
  {
    id: "events",
    label: "Special Events",
    placeholder: "Any camp, workshop, awareness session or VIP visit…",
    hint: "Outdoor camps, school programs, guardian meetings",
  },
  {
    id: "recommendations",
    label: "Recommendations",
    placeholder: "Suggestions for head office or branch improvement…",
    hint: "Process, inventory or training recommendations",
  },
  {
    id: "tomorrow",
    label: "Tomorrow's Plan",
    placeholder: "Priorities for tomorrow's operations…",
    hint: "Appointments, due follow-ups, outdoor visits",
  },
];

export const DEFAULT_NOTES: DailyNotes = {
  challenges:
    "Therapy room 4 air-conditioner stopped working after 2:00 PM, two afternoon sessions were shifted to room 6. Three guardians arrived late due to Dhanmondi traffic.",
  achievements:
    "Collection target exceeded (94% by 1:30 PM). Seven new registrations — highest this week. Rahim Ahmed completed his 20-session articulation package with an 82% progress score.",
  events:
    "Awareness session at Sunshine Kindergarten, Mohammadpur with 34 guardians attending. Two school-visit leads generated.",
  recommendations:
    "Add one more evening slot for group therapy on Fridays. Reorder chewy tubes and bubble blower packs before Sunday. Request maintenance for room 4 AC.",
  tomorrow:
    "18 scheduled sessions, 4 assessments, 5 due-collection calls and 3 home visits in Uttara. Monthly package renewals for 6 patients.",
};

/* ------------------------------------------------------------------ */
/* Sidebar widgets                                                    */
/* ------------------------------------------------------------------ */

export const TODAYS_GOALS = [
  { id: "g1", label: "Patients served", current: 38, target: 42 },
  { id: "g2", label: "Sessions completed", current: 27, target: 30 },
  { id: "g3", label: "Collection", current: 84500, target: 90000, currency: true },
  { id: "g4", label: "Follow-up calls", current: 15, target: 16 },
];

export const PENDING_TASKS = [
  { id: "pt-1", label: "Collect due from Ayesha Akter", detail: `${formatTaka(3500)} · overdue 4 days`, tone: "warning" as StatusTone },
  { id: "pt-2", label: "Complete Arif Mahmud assessment", detail: "Draft saved at 04:10 PM", tone: "info" as StatusTone },
  { id: "pt-3", label: "Approve inventory purchase entry", detail: "3 items pending approval", tone: "info" as StatusTone },
  { id: "pt-4", label: "Submit weekly summary to head office", detail: "Due tomorrow 11:00 AM", tone: "danger" as StatusTone },
];

export const UPCOMING_TOMORROW = [
  { id: "ut-1", time: "09:00 AM", label: "18 therapy sessions scheduled" },
  { id: "ut-2", time: "10:30 AM", label: "Assessment — Sumaiya Islam (re-assessment)" },
  { id: "ut-3", time: "12:00 PM", label: "Group therapy — Fluency Group B" },
  { id: "ut-4", time: "02:00 PM", label: "Home visit — Mirpur 10, Tanvir Hasan" },
  { id: "ut-5", time: "04:30 PM", label: "6 monthly package renewals" },
];

export const WEATHER_TODAY = {
  city: "Dhaka",
  condition: "Light monsoon showers",
  temperature: "31°C",
  feelsLike: "37°C",
  humidity: "84%",
  wind: "12 km/h",
  advisory: "Rain expected after 4:00 PM — outdoor visits may be delayed.",
};

/* ------------------------------------------------------------------ */
/* End of day closing                                                 */
/* ------------------------------------------------------------------ */

export const CLOSING_CHECKLIST: ChecklistItem[] = [
  {
    id: "c1",
    label: "Patient registrations completed",
    detail: "7 registrations verified and filed",
    done: true,
  },
  {
    id: "c2",
    label: "Therapy sessions completed",
    detail: "27 of 30 sessions completed",
    done: true,
  },
  {
    id: "c3",
    label: "Payment collection completed",
    detail: `${formatTaka(84500)} reconciled with cash box`,
    done: true,
  },
  { id: "c4", label: "Follow-up completed", detail: "15 calls logged, 3 rescheduled", done: true },
  { id: "c5", label: "Outdoor visits completed", detail: "5 visits closed with outcomes", done: true },
  { id: "c6", label: "Inventory updated", detail: "Stock movement posted for 7 items", done: false },
  { id: "c7", label: "Daily report generated", detail: "Pending manager sign-off", done: false },
];

/* ------------------------------------------------------------------ */
/* Reports list + detail                                              */
/* ------------------------------------------------------------------ */

export const DAILY_REPORTS: DailyReport[] = [
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
    targetCollection: 90000,
    pendingTasks: 4,
    notes: DEFAULT_NOTES,
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
    collection: 76000,
    dueCollected: 15400,
    discounts: 3100,
    pendingDue: 38000,
    stockIn: 18,
    stockOut: 25,
    materialsUsed: 11,
    lowStock: 3,
    performanceScore: 89,
    targetCollection: 90000,
    pendingTasks: 2,
    notes: {
      challenges: "Two therapists on leave, afternoon slots were tight.",
      achievements: "Zero cancellations in the morning block.",
      events: "Guardian counselling session for 12 families.",
      recommendations: "Maintain a standby therapist roster for Thursdays.",
      tomorrow: "Focus on due collection and new registrations.",
    },
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
    dueCollected: 21000,
    discounts: 5200,
    pendingDue: 33500,
    stockIn: 26,
    stockOut: 19,
    materialsUsed: 8,
    lowStock: 5,
    performanceScore: 95,
    targetCollection: 90000,
    pendingTasks: 1,
    notes: {
      challenges: "Heavy rain delayed two school visits in Uttara.",
      achievements: "Best collection day of the month — 102% of target.",
      events: "Speech awareness camp at Mirpur community centre.",
      recommendations: "Repeat the Mirpur camp next month.",
      tomorrow: "Prepare monthly package renewal reminders.",
    },
  },
];

export const TODAYS_REPORT = DAILY_REPORTS[0];

export function getDailyReport(id: string) {
  return DAILY_REPORTS.find((report) => report.id === id || report.date === id);
}

export const REPORT_STATUS_TONE: Record<DailyReport["status"], StatusTone> = {
  Closed: "success",
  Draft: "warning",
  Open: "info",
};

export const DAILY_REPORT_COLUMNS = [
  "Patient ID",
  "Patient Name",
  "Registration",
  "Assessment",
  "Therapy",
  "Payment",
  "Follow-up",
  "Status",
];

export const CALENDAR_ICON = CalendarCheck;
