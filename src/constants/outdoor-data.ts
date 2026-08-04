import {
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  CheckCircle2,
  House,
  School,
  Stethoscope,
  UsersRound,
  XCircle,
} from "lucide-react";
import type { Kpi } from "@/constants/dashboard-data";
import type { StatusTone } from "@/components/common/status-badge";

/**
 * Outdoor Service Management — UI-only dummy data.
 * Nothing here is persisted; the Django REST API will own these models later.
 */

export const OUTDOOR_TODAY_ISO = "2026-07-31";

/* ------------------------------------------------------------------ */
/* Enumerations                                                        */
/* ------------------------------------------------------------------ */

export type VisitType =
  | "Home Visit"
  | "School Visit"
  | "Community Program"
  | "Awareness Program"
  | "Special Camp";

export const VISIT_TYPES: VisitType[] = [
  "Home Visit",
  "School Visit",
  "Community Program",
  "Awareness Program",
  "Special Camp",
];

export type VisitStatus =
  | "Scheduled"
  | "In Progress"
  | "Completed"
  | "Cancelled"
  | "Rescheduled";

export const VISIT_STATUSES: VisitStatus[] = [
  "Scheduled",
  "In Progress",
  "Completed",
  "Cancelled",
  "Rescheduled",
];

export const VISIT_STATUS_TONE: Record<VisitStatus, StatusTone> = {
  Scheduled: "info",
  "In Progress": "warning",
  Completed: "success",
  Cancelled: "danger",
  Rescheduled: "neutral",
};

export type VisitOutcome =
  | "Successful"
  | "Needs Follow-up"
  | "Rescheduled"
  | "Cancelled"
  | "Emergency Referral"
  | "Pending";

export const VISIT_OUTCOMES: VisitOutcome[] = [
  "Successful",
  "Needs Follow-up",
  "Rescheduled",
  "Cancelled",
  "Emergency Referral",
];

export const VISIT_OUTCOME_TONE: Record<VisitOutcome, StatusTone> = {
  Successful: "success",
  "Needs Follow-up": "warning",
  Rescheduled: "info",
  Cancelled: "danger",
  "Emergency Referral": "danger",
  Pending: "neutral",
};

export type VisitPriority = "Normal" | "High" | "Urgent";

export const VISIT_PRIORITIES: VisitPriority[] = ["Normal", "High", "Urgent"];

export const VISIT_PRIORITY_TONE: Record<VisitPriority, StatusTone> = {
  Normal: "neutral",
  High: "warning",
  Urgent: "danger",
};

export type OutdoorPatientStatus = "Active" | "On Hold" | "Completed" | "Discontinued";

export const OUTDOOR_PATIENT_STATUSES: OutdoorPatientStatus[] = [
  "Active",
  "On Hold",
  "Completed",
  "Discontinued",
];

export const OUTDOOR_PATIENT_STATUS_TONE: Record<OutdoorPatientStatus, StatusTone> = {
  Active: "success",
  "On Hold": "warning",
  Completed: "info",
  Discontinued: "neutral",
};

export type TherapistAvailability = "Available" | "On Visit" | "Travelling" | "On Leave";

export const THERAPIST_STATUS_TONE: Record<TherapistAvailability, StatusTone> = {
  Available: "success",
  "On Visit": "warning",
  Travelling: "info",
  "On Leave": "neutral",
};

/* ------------------------------------------------------------------ */
/* Location reference data (Bangladesh)                                */
/* ------------------------------------------------------------------ */

export const DIVISIONS = [
  "Dhaka",
  "Chattogram",
  "Sylhet",
  "Rajshahi",
  "Khulna",
  "Barishal",
  "Rangpur",
  "Mymensingh",
] as const;

export const DISTRICTS_BY_DIVISION: Record<string, string[]> = {
  Dhaka: ["Dhaka", "Gazipur", "Narayanganj", "Munshiganj", "Tangail"],
  Chattogram: ["Chattogram", "Cox's Bazar", "Cumilla", "Feni", "Noakhali"],
  Sylhet: ["Sylhet", "Moulvibazar", "Habiganj", "Sunamganj"],
  Rajshahi: ["Rajshahi", "Bogura", "Pabna", "Natore", "Naogaon"],
  Khulna: ["Khulna", "Jashore", "Satkhira", "Kushtia", "Bagerhat"],
  Barishal: ["Barishal", "Patuakhali", "Bhola", "Pirojpur"],
  Rangpur: ["Rangpur", "Dinajpur", "Kurigram", "Thakurgaon"],
  Mymensingh: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"],
};

export const OUTDOOR_AREAS = [
  "Dhanmondi",
  "Uttara",
  "Mirpur",
  "Gulshan",
  "Bashundhara R/A",
  "Mohammadpur",
  "Zindabazar",
  "Agrabad",
  "Nasirabad",
  "Boalia",
  "Sonadanga",
] as const;

export const SUPPORT_STAFF = [
  "Nusrat Jahan (Assistant)",
  "Shahin Alam (Assistant)",
  "Farhana Yasmin (Coordinator)",
  "Rakib Hasan (Attendant)",
] as const;

export const VEHICLES = [
  "Toyota Noah — DHAKA METRO GHA 11-2345",
  "Toyota Hiace — DHAKA METRO CHA 13-8890",
  "Suzuki Ciaz — SYLHET METRO GA 11-0421",
  "Own transport / Ride share",
] as const;

export const EQUIPMENT_OPTIONS = [
  "Speech Cards Set",
  "Articulation Kit",
  "Oral Motor Tools",
  "AAC Tablet",
  "Sensory Toy Box",
  "Portable Mirror",
  "Assessment Forms",
  "Hearing Screener",
] as const;

/* ------------------------------------------------------------------ */
/* Therapists                                                          */
/* ------------------------------------------------------------------ */

export type OutdoorTherapist = {
  id: string;
  name: string;
  designation: string;
  phone: string;
  status: TherapistAvailability;
  todayVisits: number;
  completedVisits: number;
  areas: string[];
  branch: string;
  experience: string;
};

export const OUTDOOR_THERAPISTS: OutdoorTherapist[] = [
  {
    id: "thr-01",
    name: "Dr. Tasnim Rahman",
    designation: "Senior Speech & Language Therapist",
    phone: "+880 1711-204561",
    status: "On Visit",
    todayVisits: 3,
    completedVisits: 148,
    areas: ["Dhanmondi", "Mohammadpur", "Lalmatia"],
    branch: "Dhanmondi Branch",
    experience: "9 years",
  },
  {
    id: "thr-02",
    name: "Sadia Islam",
    designation: "Speech Therapist",
    phone: "+880 1819-337742",
    status: "Available",
    todayVisits: 2,
    completedVisits: 96,
    areas: ["Uttara", "Airport", "Tongi"],
    branch: "Uttara Branch",
    experience: "5 years",
  },
  {
    id: "thr-03",
    name: "Mahmudul Hasan",
    designation: "Occupational Therapist",
    phone: "+880 1913-556621",
    status: "Travelling",
    todayVisits: 2,
    completedVisits: 74,
    areas: ["Mirpur", "Pallabi", "Kazipara"],
    branch: "Mirpur Branch",
    experience: "4 years",
  },
  {
    id: "thr-04",
    name: "Farzana Akter",
    designation: "Child Language Specialist",
    phone: "+880 1730-889012",
    status: "Available",
    todayVisits: 1,
    completedVisits: 62,
    areas: ["Gulshan", "Banani", "Bashundhara R/A"],
    branch: "Gulshan Branch",
    experience: "6 years",
  },
  {
    id: "thr-05",
    name: "Dr. Imran Chowdhury",
    designation: "Clinical Audiologist",
    phone: "+880 1611-445509",
    status: "On Visit",
    todayVisits: 2,
    completedVisits: 88,
    areas: ["Zindabazar", "Ambarkhana", "Subid Bazar"],
    branch: "Sylhet Branch",
    experience: "8 years",
  },
  {
    id: "thr-06",
    name: "Nusrat Jahan Mim",
    designation: "Speech Therapist",
    phone: "+880 1521-330018",
    status: "On Leave",
    todayVisits: 0,
    completedVisits: 51,
    areas: ["Agrabad", "Nasirabad", "Khulshi"],
    branch: "Chattogram Branch",
    experience: "3 years",
  },
];

export function getTherapist(id: string) {
  return OUTDOOR_THERAPISTS.find((therapist) => therapist.id === id);
}

/* ------------------------------------------------------------------ */
/* Outdoor patients                                                    */
/* ------------------------------------------------------------------ */

export type OutdoorPatient = {
  id: string;
  code: string;
  name: string;
  age: number;
  gender: "Male" | "Female";
  guardian: string;
  relation: string;
  phone: string;
  diagnosis: string;
  therapyProgram: string;
  lastVisit: string;
  nextVisit: string;
  totalVisits: number;
  area: string;
  district: string;
  division: string;
  status: OutdoorPatientStatus;
};

export const OUTDOOR_PATIENTS: OutdoorPatient[] = [
  {
    id: "opt-01",
    code: "OPD-2026-001",
    name: "Rahim Ahmed",
    age: 6,
    gender: "Male",
    guardian: "Md. Karim Ahmed",
    relation: "Father",
    phone: "+880 1712-345678",
    diagnosis: "Speech Delay (Expressive)",
    therapyProgram: "Home-based Articulation Program",
    lastVisit: "2026-07-24",
    nextVisit: "2026-07-31",
    totalVisits: 14,
    area: "Dhanmondi",
    district: "Dhaka",
    division: "Dhaka",
    status: "Active",
  },
  {
    id: "opt-02",
    code: "OPD-2026-002",
    name: "Ayesha Akter",
    age: 5,
    gender: "Female",
    guardian: "Salma Begum",
    relation: "Mother",
    phone: "+880 1818-993214",
    diagnosis: "Autism Spectrum Disorder",
    therapyProgram: "School Integration Support",
    lastVisit: "2026-07-22",
    nextVisit: "2026-07-31",
    totalVisits: 21,
    area: "Uttara",
    district: "Dhaka",
    division: "Dhaka",
    status: "Active",
  },
  {
    id: "opt-03",
    code: "OPD-2026-003",
    name: "Tanvir Hossain",
    age: 8,
    gender: "Male",
    guardian: "Md. Jashim Uddin",
    relation: "Father",
    phone: "+880 1922-110045",
    diagnosis: "Stuttering (Moderate)",
    therapyProgram: "Fluency Shaping — Home Practice",
    lastVisit: "2026-07-18",
    nextVisit: "2026-08-01",
    totalVisits: 9,
    area: "Mirpur",
    district: "Dhaka",
    division: "Dhaka",
    status: "Active",
  },
  {
    id: "opt-04",
    code: "OPD-2026-004",
    name: "Mim Chowdhury",
    age: 7,
    gender: "Female",
    guardian: "Nasima Chowdhury",
    relation: "Mother",
    phone: "+880 1611-772230",
    diagnosis: "Hearing Impairment (Mild)",
    therapyProgram: "Auditory Verbal Therapy",
    lastVisit: "2026-07-20",
    nextVisit: "2026-08-03",
    totalVisits: 17,
    area: "Zindabazar",
    district: "Sylhet",
    division: "Sylhet",
    status: "Active",
  },
  {
    id: "opt-05",
    code: "OPD-2026-005",
    name: "Sabbir Rahman",
    age: 4,
    gender: "Male",
    guardian: "Rokeya Sultana",
    relation: "Mother",
    phone: "+880 1533-668821",
    diagnosis: "Global Developmental Delay",
    therapyProgram: "Early Intervention (Home)",
    lastVisit: "2026-07-15",
    nextVisit: "2026-08-05",
    totalVisits: 6,
    area: "Agrabad",
    district: "Chattogram",
    division: "Chattogram",
    status: "On Hold",
  },
  {
    id: "opt-06",
    code: "OPD-2026-006",
    name: "Nusaiba Tabassum",
    age: 9,
    gender: "Female",
    guardian: "Md. Aminul Islam",
    relation: "Father",
    phone: "+880 1745-221190",
    diagnosis: "Learning Disability",
    therapyProgram: "School Support Program",
    lastVisit: "2026-07-26",
    nextVisit: "2026-08-02",
    totalVisits: 12,
    area: "Boalia",
    district: "Rajshahi",
    division: "Rajshahi",
    status: "Active",
  },
  {
    id: "opt-07",
    code: "OPD-2026-007",
    name: "Arif Mahmud",
    age: 11,
    gender: "Male",
    guardian: "Shahnaz Parvin",
    relation: "Mother",
    phone: "+880 1990-334412",
    diagnosis: "Voice Disorder",
    therapyProgram: "Voice Hygiene Coaching",
    lastVisit: "2026-06-29",
    nextVisit: "2026-08-08",
    totalVisits: 4,
    area: "Sonadanga",
    district: "Khulna",
    division: "Khulna",
    status: "Completed",
  },
  {
    id: "opt-08",
    code: "OPD-2026-008",
    name: "Zarin Tasnim",
    age: 3,
    gender: "Female",
    guardian: "Md. Faruk Hossain",
    relation: "Father",
    phone: "+880 1877-556610",
    diagnosis: "Speech Sound Disorder",
    therapyProgram: "Parent Coaching Program",
    lastVisit: "2026-07-27",
    nextVisit: "2026-07-31",
    totalVisits: 8,
    area: "Bashundhara R/A",
    district: "Dhaka",
    division: "Dhaka",
    status: "Active",
  },
  {
    id: "opt-09",
    code: "OPD-2026-009",
    name: "Rafid Islam",
    age: 10,
    gender: "Male",
    guardian: "Ferdous Ara",
    relation: "Mother",
    phone: "+880 1712-889977",
    diagnosis: "Cerebral Palsy (Dysarthria)",
    therapyProgram: "Home Motor-Speech Program",
    lastVisit: "2026-07-11",
    nextVisit: "2026-08-04",
    totalVisits: 23,
    area: "Mohammadpur",
    district: "Dhaka",
    division: "Dhaka",
    status: "Active",
  },
  {
    id: "opt-10",
    code: "OPD-2026-010",
    name: "Samira Noor",
    age: 6,
    gender: "Female",
    guardian: "Md. Shahidul Alam",
    relation: "Father",
    phone: "+880 1682-443301",
    diagnosis: "Selective Mutism",
    therapyProgram: "School Based Desensitisation",
    lastVisit: "2026-07-08",
    nextVisit: "2026-08-06",
    totalVisits: 5,
    area: "Nasirabad",
    district: "Chattogram",
    division: "Chattogram",
    status: "Discontinued",
  },
];

export function getOutdoorPatient(id: string) {
  return OUTDOOR_PATIENTS.find((patient) => patient.id === id);
}

/* ------------------------------------------------------------------ */
/* Outdoor visits                                                      */
/* ------------------------------------------------------------------ */

export type OutdoorVisit = {
  id: string;
  visitId: string;
  date: string;
  time: string;
  duration: string;
  patientId: string;
  patientName: string;
  patientCode: string;
  diagnosis: string;
  guardian: string;
  guardianRelation: string;
  guardianPhone: string;
  therapistId: string;
  therapistName: string;
  supportStaff: string;
  vehicle: string;
  equipment: string[];
  type: VisitType;
  priority: VisitPriority;
  purpose: string;
  division: string;
  district: string;
  area: string;
  address: string;
  mapLink: string;
  locationNotes: string;
  distanceKm: number;
  travelTime: string;
  status: VisitStatus;
  outcome: VisitOutcome;
  notes: string;
  recommendations: string[];
  remarks: string;
};

export const OUTDOOR_VISITS: OutdoorVisit[] = [
  {
    id: "ov-1001",
    visitId: "OV-2026-1001",
    date: "2026-07-31",
    time: "09:30 AM",
    duration: "60 min",
    patientId: "opt-01",
    patientName: "Rahim Ahmed",
    patientCode: "OPD-2026-001",
    diagnosis: "Speech Delay (Expressive)",
    guardian: "Md. Karim Ahmed",
    guardianRelation: "Father",
    guardianPhone: "+880 1712-345678",
    therapistId: "thr-01",
    therapistName: "Dr. Tasnim Rahman",
    supportStaff: "Nusrat Jahan (Assistant)",
    vehicle: "Toyota Noah — DHAKA METRO GHA 11-2345",
    equipment: ["Speech Cards Set", "Articulation Kit"],
    type: "Home Visit",
    priority: "High",
    purpose: "Weekly articulation therapy and parent coaching at home.",
    division: "Dhaka",
    district: "Dhaka",
    area: "Dhanmondi",
    address: "House 42, Road 9/A, Dhanmondi, Dhaka 1209",
    mapLink: "https://maps.google.com/?q=Dhanmondi+Road+9A",
    locationNotes: "4th floor, lift available. Call guardian before arrival.",
    distanceKm: 5.4,
    travelTime: "22 min",
    status: "In Progress",
    outcome: "Pending",
    notes: "Session running; focusing on /s/ and /sh/ sound production with picture cards.",
    recommendations: ["Continue daily 15-min home practice", "Guardian to record practice videos"],
    remarks: "Guardian very cooperative.",
  },
  {
    id: "ov-1002",
    visitId: "OV-2026-1002",
    date: "2026-07-31",
    time: "11:00 AM",
    duration: "90 min",
    patientId: "opt-02",
    patientName: "Ayesha Akter",
    patientCode: "OPD-2026-002",
    diagnosis: "Autism Spectrum Disorder",
    guardian: "Salma Begum",
    guardianRelation: "Mother",
    guardianPhone: "+880 1818-993214",
    therapistId: "thr-02",
    therapistName: "Sadia Islam",
    supportStaff: "Farhana Yasmin (Coordinator)",
    vehicle: "Toyota Hiace — DHAKA METRO CHA 13-8890",
    equipment: ["AAC Tablet", "Sensory Toy Box", "Assessment Forms"],
    type: "School Visit",
    priority: "Normal",
    purpose: "Classroom observation and teacher briefing at Uttara Ideal School.",
    division: "Dhaka",
    district: "Dhaka",
    area: "Uttara",
    address: "Uttara Ideal School, Sector 7, Uttara, Dhaka 1230",
    mapLink: "https://maps.google.com/?q=Uttara+Sector+7",
    locationNotes: "Report at the school reception; visitor pass required.",
    distanceKm: 14.2,
    travelTime: "48 min",
    status: "Scheduled",
    outcome: "Pending",
    notes: "",
    recommendations: [],
    remarks: "Teacher meeting scheduled after observation.",
  },
  {
    id: "ov-1003",
    visitId: "OV-2026-1003",
    date: "2026-07-31",
    time: "02:00 PM",
    duration: "45 min",
    patientId: "opt-08",
    patientName: "Zarin Tasnim",
    patientCode: "OPD-2026-008",
    diagnosis: "Speech Sound Disorder",
    guardian: "Md. Faruk Hossain",
    guardianRelation: "Father",
    guardianPhone: "+880 1877-556610",
    therapistId: "thr-04",
    therapistName: "Farzana Akter",
    supportStaff: "Rakib Hasan (Attendant)",
    vehicle: "Own transport / Ride share",
    equipment: ["Speech Cards Set", "Portable Mirror"],
    type: "Home Visit",
    priority: "Normal",
    purpose: "Parent coaching session and progress review.",
    division: "Dhaka",
    district: "Dhaka",
    area: "Bashundhara R/A",
    address: "Block C, Road 5, House 118, Bashundhara R/A, Dhaka 1229",
    mapLink: "https://maps.google.com/?q=Bashundhara+Block+C",
    locationNotes: "Gate pass needed at Block C entrance.",
    distanceKm: 11.8,
    travelTime: "36 min",
    status: "Scheduled",
    outcome: "Pending",
    notes: "",
    recommendations: [],
    remarks: "",
  },
  {
    id: "ov-1004",
    visitId: "OV-2026-1004",
    date: "2026-07-30",
    time: "10:15 AM",
    duration: "60 min",
    patientId: "opt-03",
    patientName: "Tanvir Hossain",
    patientCode: "OPD-2026-003",
    diagnosis: "Stuttering (Moderate)",
    guardian: "Md. Jashim Uddin",
    guardianRelation: "Father",
    guardianPhone: "+880 1922-110045",
    therapistId: "thr-03",
    therapistName: "Mahmudul Hasan",
    supportStaff: "Nusrat Jahan (Assistant)",
    vehicle: "Toyota Noah — DHAKA METRO GHA 11-2345",
    equipment: ["Assessment Forms"],
    type: "Home Visit",
    priority: "Normal",
    purpose: "Fluency practice with family participation.",
    division: "Dhaka",
    district: "Dhaka",
    area: "Mirpur",
    address: "House 7, Road 3, Mirpur DOHS, Dhaka 1216",
    mapLink: "https://maps.google.com/?q=Mirpur+DOHS",
    locationNotes: "Parking available inside DOHS.",
    distanceKm: 9.1,
    travelTime: "31 min",
    status: "Completed",
    outcome: "Successful",
    notes:
      "Child completed 3 fluency drills with 80% smooth speech. Family joined the last 15 minutes.",
    recommendations: ["Slow-speech modelling by parents", "Next review in 2 weeks"],
    remarks: "Noticeable improvement since last visit.",
  },
  {
    id: "ov-1005",
    visitId: "OV-2026-1005",
    date: "2026-07-29",
    time: "09:00 AM",
    duration: "120 min",
    patientId: "opt-06",
    patientName: "Nusaiba Tabassum",
    patientCode: "OPD-2026-006",
    diagnosis: "Learning Disability",
    guardian: "Md. Aminul Islam",
    guardianRelation: "Father",
    guardianPhone: "+880 1745-221190",
    therapistId: "thr-02",
    therapistName: "Sadia Islam",
    supportStaff: "Farhana Yasmin (Coordinator)",
    vehicle: "Suzuki Ciaz — SYLHET METRO GA 11-0421",
    equipment: ["Assessment Forms", "Speech Cards Set"],
    type: "School Visit",
    priority: "High",
    purpose: "IEP review meeting with class teacher at Rajshahi Collegiate School.",
    division: "Rajshahi",
    district: "Rajshahi",
    area: "Boalia",
    address: "Rajshahi Collegiate School, Boalia, Rajshahi 6100",
    mapLink: "https://maps.google.com/?q=Rajshahi+Collegiate+School",
    locationNotes: "Meet the head teacher first.",
    distanceKm: 6.7,
    travelTime: "18 min",
    status: "Completed",
    outcome: "Needs Follow-up",
    notes: "Teacher reported difficulty with written expression; classroom seating adjusted.",
    recommendations: ["Weekly literacy support", "Follow-up school visit in 3 weeks"],
    remarks: "School administration supportive.",
  },
  {
    id: "ov-1006",
    visitId: "OV-2026-1006",
    date: "2026-07-28",
    time: "04:00 PM",
    duration: "180 min",
    patientId: "opt-04",
    patientName: "Mim Chowdhury",
    patientCode: "OPD-2026-004",
    diagnosis: "Hearing Impairment (Mild)",
    guardian: "Nasima Chowdhury",
    guardianRelation: "Mother",
    guardianPhone: "+880 1611-772230",
    therapistId: "thr-05",
    therapistName: "Dr. Imran Chowdhury",
    supportStaff: "Rakib Hasan (Attendant)",
    vehicle: "Suzuki Ciaz — SYLHET METRO GA 11-0421",
    equipment: ["Hearing Screener", "Assessment Forms"],
    type: "Special Camp",
    priority: "Urgent",
    purpose: "Free hearing screening camp at Zindabazar community centre.",
    division: "Sylhet",
    district: "Sylhet",
    area: "Zindabazar",
    address: "Community Centre, Zindabazar, Sylhet 3100",
    mapLink: "https://maps.google.com/?q=Zindabazar+Sylhet",
    locationNotes: "Camp registration desk at the main hall.",
    distanceKm: 3.2,
    travelTime: "12 min",
    status: "Completed",
    outcome: "Emergency Referral",
    notes: "Screened 34 children. Mim required ENT referral for recurring ear infection.",
    recommendations: ["ENT consultation within 7 days", "Repeat audiometry after treatment"],
    remarks: "Referral letter handed to guardian.",
  },
  {
    id: "ov-1007",
    visitId: "OV-2026-1007",
    date: "2026-07-27",
    time: "11:30 AM",
    duration: "60 min",
    patientId: "opt-09",
    patientName: "Rafid Islam",
    patientCode: "OPD-2026-009",
    diagnosis: "Cerebral Palsy (Dysarthria)",
    guardian: "Ferdous Ara",
    guardianRelation: "Mother",
    guardianPhone: "+880 1712-889977",
    therapistId: "thr-01",
    therapistName: "Dr. Tasnim Rahman",
    supportStaff: "Nusrat Jahan (Assistant)",
    vehicle: "Toyota Noah — DHAKA METRO GHA 11-2345",
    equipment: ["Oral Motor Tools", "Portable Mirror"],
    type: "Home Visit",
    priority: "High",
    purpose: "Oral motor strengthening and positioning guidance.",
    division: "Dhaka",
    district: "Dhaka",
    area: "Mohammadpur",
    address: "Flat 5B, Shyamoli Housing, Mohammadpur, Dhaka 1207",
    mapLink: "https://maps.google.com/?q=Mohammadpur+Shyamoli+Housing",
    locationNotes: "Narrow lane; car should park on main road.",
    distanceKm: 7.5,
    travelTime: "27 min",
    status: "Completed",
    outcome: "Successful",
    notes: "Completed full oral motor routine; guardian trained on positioning.",
    recommendations: ["Twice daily oral motor exercises", "Review posture support chair"],
    remarks: "Family requested evening slots going forward.",
  },
  {
    id: "ov-1008",
    visitId: "OV-2026-1008",
    date: "2026-07-26",
    time: "03:30 PM",
    duration: "120 min",
    patientId: "opt-05",
    patientName: "Sabbir Rahman",
    patientCode: "OPD-2026-005",
    diagnosis: "Global Developmental Delay",
    guardian: "Rokeya Sultana",
    guardianRelation: "Mother",
    guardianPhone: "+880 1533-668821",
    therapistId: "thr-06",
    therapistName: "Nusrat Jahan Mim",
    supportStaff: "Rakib Hasan (Attendant)",
    vehicle: "Own transport / Ride share",
    equipment: ["Sensory Toy Box", "Speech Cards Set"],
    type: "Awareness Program",
    priority: "Normal",
    purpose: "Parent awareness session on early speech milestones at Agrabad.",
    division: "Chattogram",
    district: "Chattogram",
    area: "Agrabad",
    address: "Agrabad Community Hall, Chattogram 4100",
    mapLink: "https://maps.google.com/?q=Agrabad+Community+Hall",
    locationNotes: "Projector available at the venue.",
    distanceKm: 8.9,
    travelTime: "34 min",
    status: "Cancelled",
    outcome: "Cancelled",
    notes: "Cancelled due to heavy rainfall and venue waterlogging.",
    recommendations: ["Reschedule in the first week of August"],
    remarks: "Guardians informed over phone.",
  },
  {
    id: "ov-1009",
    visitId: "OV-2026-1009",
    date: "2026-07-25",
    time: "10:00 AM",
    duration: "90 min",
    patientId: "opt-07",
    patientName: "Arif Mahmud",
    patientCode: "OPD-2026-007",
    diagnosis: "Voice Disorder",
    guardian: "Shahnaz Parvin",
    guardianRelation: "Mother",
    guardianPhone: "+880 1990-334412",
    therapistId: "thr-03",
    therapistName: "Mahmudul Hasan",
    supportStaff: "Farhana Yasmin (Coordinator)",
    vehicle: "Toyota Hiace — DHAKA METRO CHA 13-8890",
    equipment: ["Assessment Forms", "Portable Mirror"],
    type: "Community Program",
    priority: "Normal",
    purpose: "Voice care workshop for madrasa teachers in Sonadanga.",
    division: "Khulna",
    district: "Khulna",
    area: "Sonadanga",
    address: "Sonadanga Model School Hall, Khulna 9100",
    mapLink: "https://maps.google.com/?q=Sonadanga+Khulna",
    locationNotes: "Session hall on the ground floor.",
    distanceKm: 4.6,
    travelTime: "16 min",
    status: "Rescheduled",
    outcome: "Rescheduled",
    notes: "Postponed at the community organiser's request.",
    recommendations: ["New date to be confirmed with organiser"],
    remarks: "Moved to 8 August 2026 (tentative).",
  },
  {
    id: "ov-1010",
    visitId: "OV-2026-1010",
    date: "2026-07-24",
    time: "09:45 AM",
    duration: "60 min",
    patientId: "opt-01",
    patientName: "Rahim Ahmed",
    patientCode: "OPD-2026-001",
    diagnosis: "Speech Delay (Expressive)",
    guardian: "Md. Karim Ahmed",
    guardianRelation: "Father",
    guardianPhone: "+880 1712-345678",
    therapistId: "thr-01",
    therapistName: "Dr. Tasnim Rahman",
    supportStaff: "Nusrat Jahan (Assistant)",
    vehicle: "Toyota Noah — DHAKA METRO GHA 11-2345",
    equipment: ["Speech Cards Set"],
    type: "Home Visit",
    priority: "Normal",
    purpose: "Routine home therapy session.",
    division: "Dhaka",
    district: "Dhaka",
    area: "Dhanmondi",
    address: "House 42, Road 9/A, Dhanmondi, Dhaka 1209",
    mapLink: "https://maps.google.com/?q=Dhanmondi+Road+9A",
    locationNotes: "4th floor, lift available.",
    distanceKm: 5.4,
    travelTime: "22 min",
    status: "Completed",
    outcome: "Successful",
    notes: "Vocabulary expanded to 12 new functional words this month.",
    recommendations: ["Continue picture-card routine", "Introduce two-word phrases"],
    remarks: "Excellent home compliance.",
  },
  {
    id: "ov-1011",
    visitId: "OV-2026-1011",
    date: "2026-07-22",
    time: "12:30 PM",
    duration: "90 min",
    patientId: "opt-02",
    patientName: "Ayesha Akter",
    patientCode: "OPD-2026-002",
    diagnosis: "Autism Spectrum Disorder",
    guardian: "Salma Begum",
    guardianRelation: "Mother",
    guardianPhone: "+880 1818-993214",
    therapistId: "thr-04",
    therapistName: "Farzana Akter",
    supportStaff: "Nusrat Jahan (Assistant)",
    vehicle: "Toyota Hiace — DHAKA METRO CHA 13-8890",
    equipment: ["AAC Tablet", "Sensory Toy Box"],
    type: "School Visit",
    priority: "High",
    purpose: "AAC device training with the classroom teacher.",
    division: "Dhaka",
    district: "Dhaka",
    area: "Uttara",
    address: "Uttara Ideal School, Sector 7, Uttara, Dhaka 1230",
    mapLink: "https://maps.google.com/?q=Uttara+Sector+7",
    locationNotes: "Visitor pass required.",
    distanceKm: 14.2,
    travelTime: "48 min",
    status: "Completed",
    outcome: "Needs Follow-up",
    notes: "Teacher trained on 24-symbol AAC board; child used 6 symbols independently.",
    recommendations: ["Daily AAC use in class", "Follow-up visit in 3 weeks"],
    remarks: "School requested a printed guide.",
  },
  {
    id: "ov-1012",
    visitId: "OV-2026-1012",
    date: "2026-07-20",
    time: "05:00 PM",
    duration: "60 min",
    patientId: "opt-04",
    patientName: "Mim Chowdhury",
    patientCode: "OPD-2026-004",
    diagnosis: "Hearing Impairment (Mild)",
    guardian: "Nasima Chowdhury",
    guardianRelation: "Mother",
    guardianPhone: "+880 1611-772230",
    therapistId: "thr-05",
    therapistName: "Dr. Imran Chowdhury",
    supportStaff: "Rakib Hasan (Attendant)",
    vehicle: "Suzuki Ciaz — SYLHET METRO GA 11-0421",
    equipment: ["Hearing Screener"],
    type: "Home Visit",
    priority: "Normal",
    purpose: "Auditory verbal therapy and hearing aid check.",
    division: "Sylhet",
    district: "Sylhet",
    area: "Zindabazar",
    address: "House 11, Kumarpara Road, Zindabazar, Sylhet 3100",
    mapLink: "https://maps.google.com/?q=Kumarpara+Sylhet",
    locationNotes: "Ground floor residence.",
    distanceKm: 2.8,
    travelTime: "10 min",
    status: "Completed",
    outcome: "Successful",
    notes: "Hearing aid functioning well; listening tasks completed at 85% accuracy.",
    recommendations: ["Continue listening games", "Battery check every fortnight"],
    remarks: "",
  },
];

export function getOutdoorVisit(id: string) {
  return OUTDOOR_VISITS.find((visit) => visit.id === id || visit.visitId === id);
}

export function visitsForPatient(patientId: string) {
  return OUTDOOR_VISITS.filter((visit) => visit.patientId === patientId).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function visitsForTherapist(therapistId: string) {
  return OUTDOOR_VISITS.filter((visit) => visit.therapistId === therapistId);
}

export const VISIT_HISTORY = OUTDOOR_VISITS.filter(
  (visit) => visit.status === "Completed" || visit.status === "Cancelled" ||
    visit.status === "Rescheduled",
).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const TODAYS_VISITS = OUTDOOR_VISITS.filter(
  (visit) => visit.date === OUTDOOR_TODAY_ISO,
).sort((a, b) => a.time.localeCompare(b.time));

export const UPCOMING_VISITS = OUTDOOR_VISITS.filter(
  (visit) => visit.date > OUTDOOR_TODAY_ISO || (visit.date === OUTDOOR_TODAY_ISO && visit.status === "Scheduled"),
).sort((a, b) => a.date.localeCompare(b.date));

/* ------------------------------------------------------------------ */
/* Area coverage                                                       */
/* ------------------------------------------------------------------ */

export type AreaCoverage = {
  area: string;
  district: string;
  visits: number;
  therapists: number;
};

export const AREA_COVERAGE: AreaCoverage[] = [
  { area: "Dhanmondi", district: "Dhaka", visits: 26, therapists: 3 },
  { area: "Uttara", district: "Dhaka", visits: 19, therapists: 2 },
  { area: "Mirpur", district: "Dhaka", visits: 15, therapists: 2 },
  { area: "Zindabazar", district: "Sylhet", visits: 12, therapists: 1 },
  { area: "Agrabad", district: "Chattogram", visits: 9, therapists: 1 },
  { area: "Boalia", district: "Rajshahi", visits: 7, therapists: 1 },
  { area: "Sonadanga", district: "Khulna", visits: 5, therapists: 1 },
];

/* ------------------------------------------------------------------ */
/* Tabs + KPIs                                                         */
/* ------------------------------------------------------------------ */

export const OUTDOOR_TABS = [
  { value: "visits", label: "Outdoor Visits" },
  { value: "patients", label: "Patients" },
  { value: "therapists", label: "Therapists" },
  { value: "history", label: "Visit History" },
] as const;

const WEEK_START = "2026-07-27";
const WEEK_VISITS = OUTDOOR_VISITS.filter((visit) => visit.date >= WEEK_START).length;
const HOME_VISITS = OUTDOOR_VISITS.filter((visit) => visit.type === "Home Visit").length;
const SCHOOL_VISITS = OUTDOOR_VISITS.filter((visit) => visit.type === "School Visit").length;
const COMPLETED = OUTDOOR_VISITS.filter((visit) => visit.status === "Completed").length;
const CANCELLED = OUTDOOR_VISITS.filter((visit) => visit.status === "Cancelled").length;
const ASSIGNED_THERAPISTS = new Set(OUTDOOR_VISITS.map((visit) => visit.therapistId)).size;

export const OUTDOOR_KPIS: Kpi[] = [
  {
    id: "today-visits",
    label: "Today's Outdoor Visits",
    value: String(TODAYS_VISITS.length),
    icon: CalendarDays,
    tone: "primary",
    delta: { value: "+1 vs yesterday", direction: "up" },
    hint: "Scheduled for 31 Jul 2026",
  },
  {
    id: "week-visits",
    label: "This Week Visits",
    value: String(WEEK_VISITS),
    icon: CalendarClock,
    tone: "primary",
    delta: { value: "+12%", direction: "up" },
    hint: "27 Jul – 02 Aug",
  },
  {
    id: "home-visits",
    label: "Home Visits",
    value: String(HOME_VISITS),
    icon: House,
    tone: "success",
    delta: { value: "+4 this month", direction: "up" },
    hint: "Family residences",
  },
  {
    id: "school-visits",
    label: "School Visits",
    value: String(SCHOOL_VISITS),
    icon: School,
    tone: "success",
    delta: { value: "+2 this month", direction: "up" },
    hint: "Partner institutions",
  },
  {
    id: "outdoor-patients",
    label: "Outdoor Patients",
    value: String(OUTDOOR_PATIENTS.length),
    icon: UsersRound,
    tone: "primary",
    delta: { value: "+3 new", direction: "up" },
    hint: "Enrolled in outdoor care",
  },
  {
    id: "assigned-therapists",
    label: "Assigned Therapists",
    value: String(ASSIGNED_THERAPISTS),
    icon: Stethoscope,
    tone: "primary",
    delta: { value: "Stable", direction: "flat" },
    hint: `${OUTDOOR_THERAPISTS.length} in the field team`,
  },
  {
    id: "completed-visits",
    label: "Completed Visits",
    value: String(COMPLETED),
    icon: CheckCircle2,
    tone: "success",
    delta: { value: "+6 this month", direction: "up" },
    hint: "Marked complete",
  },
  {
    id: "cancelled-visits",
    label: "Cancelled Visits",
    value: String(CANCELLED),
    icon: XCircle,
    tone: "danger",
    delta: { value: "-1 vs last month", direction: "down" },
    hint: "Weather and no-show",
  },
];

export const OUTDOOR_SUMMARY_ICON = CalendarCheck;
