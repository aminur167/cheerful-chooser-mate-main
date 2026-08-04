import {
  AlertTriangle,
  CalendarClock,
  CalendarPlus,
  CheckCircle2,
  Flame,
  PhoneCall,
  Repeat2,
  TrendingUp,
} from "lucide-react";
import type { StatusTone } from "@/components/common/status-badge";
import type { Kpi } from "@/constants/dashboard-data";

/**
 * Static demo data for the Follow-up CRM & Patient Retention module.
 * Shapes mirror the payloads expected from the Django REST API later,
 * so screens can switch to live data without structural changes.
 */

export const FOLLOW_UP_TODAY_ISO = "2026-07-31";

export type FollowUpPriority = "High" | "Medium" | "Low";

export type FollowUpStatus =
  | "Pending"
  | "Completed"
  | "Rescheduled"
  | "Cancelled"
  | "Missed";

export type FollowUpReason =
  | "Assessment Review"
  | "Therapy Progress"
  | "Payment Reminder"
  | "Missed Session"
  | "Package Renewal"
  | "General Check-in"
  | "Parent Counseling"
  | "Other";

export type RiskLevel = "Low" | "Moderate" | "High";

export const FOLLOW_UP_PRIORITIES: readonly FollowUpPriority[] = [
  "High",
  "Medium",
  "Low",
];

export const FOLLOW_UP_STATUSES: readonly FollowUpStatus[] = [
  "Pending",
  "Completed",
  "Rescheduled",
  "Cancelled",
  "Missed",
];

export const FOLLOW_UP_REASONS: readonly FollowUpReason[] = [
  "Assessment Review",
  "Therapy Progress",
  "Payment Reminder",
  "Missed Session",
  "Package Renewal",
  "General Check-in",
  "Parent Counseling",
  "Other",
];

export const FOLLOW_UP_BRANCHES: readonly string[] = [
  "Dhaka Main Branch",
  "Chattogram Branch",
  "Sylhet Branch",
  "Khulna Branch",
];

export const CONTACT_TIME_SLOTS: readonly string[] = [
  "Morning (9:00 AM – 12:00 PM)",
  "Afternoon (12:00 PM – 4:00 PM)",
  "Evening (4:00 PM – 8:00 PM)",
  "Any time",
];

export const FOLLOW_UP_DATE_RANGES: { key: string; label: string }[] = [
  { key: "all", label: "All dates" },
  { key: "today", label: "Today" },
  { key: "tomorrow", label: "Tomorrow" },
  { key: "7d", label: "Next 7 days" },
  { key: "overdue", label: "Overdue" },
];

export const FOLLOW_UP_PRIORITY_TONE: Record<FollowUpPriority, StatusTone> = {
  High: "danger",
  Medium: "warning",
  Low: "neutral",
};

export const FOLLOW_UP_STATUS_TONE: Record<FollowUpStatus, StatusTone> = {
  Pending: "warning",
  Completed: "success",
  Rescheduled: "info",
  Cancelled: "neutral",
  Missed: "danger",
};

export const RISK_TONE: Record<RiskLevel, StatusTone> = {
  Low: "success",
  Moderate: "warning",
  High: "danger",
};

/** Serializable icon keys — mapped to Lucide components in the view layer. */
export type CommunicationIcon =
  | "registered"
  | "assessment"
  | "therapy"
  | "call"
  | "package"
  | "completed"
  | "message";

export type CommunicationEvent = {
  id: string;
  title: string;
  description: string;
  date: string;
  by: string;
  icon: CommunicationIcon;
  tone: StatusTone;
};

export type FollowUp = {
  id: string;
  code: string;
  patientId: string;
  patientName: string;
  patientCode: string;
  patientAge: number;
  patientPhoto: string | null;
  guardianName: string;
  guardianRelation: string;
  guardianPhone: string;
  branch: string;
  packageName: string;
  lastVisit: string;
  assignedDate: string;
  nextFollowUp: string;
  preferredTime: string;
  reason: FollowUpReason;
  priority: FollowUpPriority;
  status: FollowUpStatus;
  assignedTo: string;
  notes: {
    summary: string;
    patientResponse: string;
    guardianFeedback: string;
    recommendations: string;
    nextAction: string;
  };
  clinical: {
    assessmentDate: string;
    assessmentSummary: string;
    diagnosis: string;
    severity: string;
    therapyProgram: string;
    therapist: string;
    sessionsCompleted: number;
    sessionsPlanned: number;
    progressNote: string;
  };
  billing: {
    packageName: string;
    totalBilled: number;
    totalPaid: number;
    due: number;
    lastPaymentDate: string;
    paymentStatus: string;
  };
  metrics: {
    risk: RiskLevel;
    attendance: number;
    remainingSessions: number;
    outstandingDue: number;
    nextAppointment: string | null;
  };
  timeline: CommunicationEvent[];
};

function timeline(
  base: {
    registered: string;
    assessment: string;
    therapy: string;
    call: string;
    renewal: string;
    completed?: string;
  },
  patient: string,
): CommunicationEvent[] {
  const events: CommunicationEvent[] = [
    {
      id: "c1",
      title: "Patient registered",
      description: `${patient} was registered at the front desk and a profile was created.`,
      date: base.registered,
      by: "Sadia Afrin (Front Desk)",
      icon: "registered",
      tone: "info",
    },
    {
      id: "c2",
      title: "Assessment completed",
      description: "Initial speech and language assessment completed by the clinical team.",
      date: base.assessment,
      by: "Dr. Nazmul Haque",
      icon: "assessment",
      tone: "warning",
    },
    {
      id: "c3",
      title: "Therapy started",
      description: "Therapy programme started with the assigned therapist.",
      date: base.therapy,
      by: "Farhana Islam (Therapist)",
      icon: "therapy",
      tone: "info",
    },
    {
      id: "c4",
      title: "Phone call completed",
      description: "Guardian contacted for progress review and attendance reminder.",
      date: base.call,
      by: "Tanjila Rahman (CRM)",
      icon: "call",
      tone: "neutral",
    },
    {
      id: "c5",
      title: "Package renewed",
      description: "Guardian renewed the therapy package at the branch counter.",
      date: base.renewal,
      by: "Sadia Afrin (Front Desk)",
      icon: "package",
      tone: "success",
    },
  ];

  if (base.completed) {
    events.push({
      id: "c6",
      title: "Follow-up completed",
      description: "Follow-up call closed with a scheduled next appointment.",
      date: base.completed,
      by: "Tanjila Rahman (CRM)",
      icon: "completed",
      tone: "success",
    });
  }

  return events;
}

export const FOLLOW_UPS: FollowUp[] = [
  {
    id: "fu-2026-1001",
    code: "FU-2026-1001",
    patientId: "rahim-ahmed",
    patientName: "Rahim Ahmed",
    patientCode: "PT-DHK-1001",
    patientAge: 8,
    patientPhoto: null,
    guardianName: "Md. Karim Ahmed",
    guardianRelation: "Father",
    guardianPhone: "+880 1711-458920",
    branch: "Dhaka Main Branch",
    packageName: "Monthly Standard — 12 Sessions",
    lastVisit: "2026-07-27",
    assignedDate: "2026-07-28",
    nextFollowUp: "2026-07-31",
    preferredTime: "Morning (9:00 AM – 12:00 PM)",
    reason: "Therapy Progress",
    priority: "High",
    status: "Pending",
    assignedTo: "Tanjila Rahman",
    notes: {
      summary:
        "Guardian to be briefed on articulation progress after 18 sessions and home practice compliance.",
      patientResponse: "Rahim is comfortable with the therapist and enjoys picture-card drills.",
      guardianFeedback: "Father reports clearer /s/ and /r/ sounds during family conversation.",
      recommendations: "Continue Level 2 articulation drills; add 10 minutes of daily home practice.",
      nextAction: "Confirm attendance for the next four sessions and share the home worksheet.",
    },
    clinical: {
      assessmentDate: "2026-02-18",
      assessmentSummary:
        "Moderate articulation disorder with age-appropriate receptive language.",
      diagnosis: "Articulation disorder (provisional)",
      severity: "Moderate",
      therapyProgram: "Articulation Programme — Level 2",
      therapist: "Farhana Islam",
      sessionsCompleted: 18,
      sessionsPlanned: 24,
      progressNote: "Steady improvement in fricatives; 74% accuracy at word level.",
    },
    billing: {
      packageName: "Monthly Standard — 12 Sessions",
      totalBilled: 14000,
      totalPaid: 11000,
      due: 3000,
      lastPaymentDate: "2026-07-12",
      paymentStatus: "Partially Paid",
    },
    metrics: {
      risk: "Moderate",
      attendance: 92,
      remainingSessions: 6,
      outstandingDue: 3000,
      nextAppointment: "2026-08-03",
    },
    timeline: timeline(
      {
        registered: "2026-02-10",
        assessment: "2026-02-18",
        therapy: "2026-02-24",
        call: "2026-07-14",
        renewal: "2026-07-12",
      },
      "Rahim Ahmed",
    ),
  },
  {
    id: "fu-2026-1002",
    code: "FU-2026-1002",
    patientId: "ayesha-akter",
    patientName: "Ayesha Akter",
    patientCode: "PT-DHK-1002",
    patientAge: 6,
    patientPhoto: null,
    guardianName: "Shahnaz Parvin",
    guardianRelation: "Mother",
    guardianPhone: "+880 1819-772341",
    branch: "Dhaka Main Branch",
    packageName: "10 Session Package",
    lastVisit: "2026-07-29",
    assignedDate: "2026-07-29",
    nextFollowUp: "2026-07-31",
    preferredTime: "Evening (4:00 PM – 8:00 PM)",
    reason: "Assessment Review",
    priority: "Medium",
    status: "Completed",
    assignedTo: "Tanjila Rahman",
    notes: {
      summary: "Reviewed the re-assessment report with the mother over the phone.",
      patientResponse: "Ayesha cooperated fully during the re-assessment session.",
      guardianFeedback: "Mother satisfied with the improvement in sentence formation.",
      recommendations: "Move to Level 3 language stimulation from next cycle.",
      nextAction: "Share the updated therapy plan on the guardian portal.",
    },
    clinical: {
      assessmentDate: "2026-07-22",
      assessmentSummary: "Expressive language delay improving; mean length of utterance up to 4.2.",
      diagnosis: "Expressive language delay",
      severity: "Mild",
      therapyProgram: "Language Stimulation — Level 2",
      therapist: "Rezaul Karim",
      sessionsCompleted: 6,
      sessionsPlanned: 10,
      progressNote: "Vocabulary expanded by 60 new functional words this cycle.",
    },
    billing: {
      packageName: "10 Session Package",
      totalBilled: 9660,
      totalPaid: 9660,
      due: 0,
      lastPaymentDate: "2026-07-22",
      paymentStatus: "Paid",
    },
    metrics: {
      risk: "Low",
      attendance: 96,
      remainingSessions: 4,
      outstandingDue: 0,
      nextAppointment: "2026-08-02",
    },
    timeline: timeline(
      {
        registered: "2026-03-04",
        assessment: "2026-03-11",
        therapy: "2026-03-18",
        call: "2026-07-29",
        renewal: "2026-07-22",
        completed: "2026-07-31",
      },
      "Ayesha Akter",
    ),
  },
  {
    id: "fu-2026-1003",
    code: "FU-2026-1003",
    patientId: "mahin-hasan",
    patientName: "Mahin Hasan",
    patientCode: "PT-DHK-1003",
    patientAge: 9,
    patientPhoto: null,
    guardianName: "Abdul Mannan",
    guardianRelation: "Father",
    guardianPhone: "+880 1755-201884",
    branch: "Dhaka Main Branch",
    packageName: "Monthly Premium Plan",
    lastVisit: "2026-07-18",
    assignedDate: "2026-07-20",
    nextFollowUp: "2026-07-26",
    preferredTime: "Afternoon (12:00 PM – 4:00 PM)",
    reason: "Missed Session",
    priority: "High",
    status: "Missed",
    assignedTo: "Nusaiba Kabir",
    notes: {
      summary: "Two consecutive therapy sessions missed without prior notice.",
      patientResponse: "Not reachable during the scheduled call window.",
      guardianFeedback: "Father mentioned travel to Cumilla for a family programme.",
      recommendations: "Offer a weekend slot to recover the missed sessions.",
      nextAction: "Retry the call in the evening and confirm a make-up session.",
    },
    clinical: {
      assessmentDate: "2026-01-28",
      assessmentSummary: "Childhood apraxia of speech with reduced intelligibility in long phrases.",
      diagnosis: "Childhood apraxia of speech",
      severity: "Severe",
      therapyProgram: "Motor Speech Programme — Level 1",
      therapist: "Farhana Islam",
      sessionsCompleted: 21,
      sessionsPlanned: 32,
      progressNote: "Progress slowed due to irregular attendance in July.",
    },
    billing: {
      packageName: "Monthly Premium Plan",
      totalBilled: 22000,
      totalPaid: 14000,
      due: 8000,
      lastPaymentDate: "2026-06-30",
      paymentStatus: "Overdue",
    },
    metrics: {
      risk: "High",
      attendance: 68,
      remainingSessions: 11,
      outstandingDue: 8000,
      nextAppointment: null,
    },
    timeline: timeline(
      {
        registered: "2026-01-18",
        assessment: "2026-01-28",
        therapy: "2026-02-04",
        call: "2026-07-26",
        renewal: "2026-06-30",
      },
      "Mahin Hasan",
    ),
  },
  {
    id: "fu-2026-1004",
    code: "FU-2026-1004",
    patientId: "nusrat-jahan",
    patientName: "Nusrat Jahan",
    patientCode: "PT-CTG-1004",
    patientAge: 7,
    patientPhoto: null,
    guardianName: "Rokeya Sultana",
    guardianRelation: "Mother",
    guardianPhone: "+880 1911-664520",
    branch: "Chattogram Branch",
    packageName: "5 Session Package",
    lastVisit: "2026-07-24",
    assignedDate: "2026-07-25",
    nextFollowUp: "2026-08-01",
    preferredTime: "Morning (9:00 AM – 12:00 PM)",
    reason: "Package Renewal",
    priority: "Medium",
    status: "Pending",
    assignedTo: "Tanjila Rahman",
    notes: {
      summary: "Five session package finishing this week — renewal discussion required.",
      patientResponse: "Nusrat is responding well to group articulation drills.",
      guardianFeedback: "Mother is considering the monthly plan for better value.",
      recommendations: "Offer the monthly standard plan with the 8% package discount.",
      nextAction: "Send the renewal quotation and confirm before Saturday.",
    },
    clinical: {
      assessmentDate: "2026-05-06",
      assessmentSummary: "Mild phonological delay with strong receptive skills.",
      diagnosis: "Phonological disorder",
      severity: "Mild",
      therapyProgram: "Phonology Programme — Level 1",
      therapist: "Shakil Ahmed",
      sessionsCompleted: 5,
      sessionsPlanned: 5,
      progressNote: "Target sounds generalised to conversation in 3 of 4 contexts.",
    },
    billing: {
      packageName: "5 Session Package",
      totalBilled: 5225,
      totalPaid: 5225,
      due: 0,
      lastPaymentDate: "2026-06-28",
      paymentStatus: "Paid",
    },
    metrics: {
      risk: "Moderate",
      attendance: 88,
      remainingSessions: 0,
      outstandingDue: 0,
      nextAppointment: "2026-08-05",
    },
    timeline: timeline(
      {
        registered: "2026-04-28",
        assessment: "2026-05-06",
        therapy: "2026-05-12",
        call: "2026-07-25",
        renewal: "2026-06-28",
      },
      "Nusrat Jahan",
    ),
  },
  {
    id: "fu-2026-1005",
    code: "FU-2026-1005",
    patientId: "tahsin-rahman",
    patientName: "Tahsin Rahman",
    patientCode: "PT-DHK-1005",
    patientAge: 5,
    patientPhoto: null,
    guardianName: "Mahmuda Rahman",
    guardianRelation: "Mother",
    guardianPhone: "+880 1730-889014",
    branch: "Dhaka Main Branch",
    packageName: "Daily Therapy",
    lastVisit: "2026-07-30",
    assignedDate: "2026-07-30",
    nextFollowUp: "2026-08-01",
    preferredTime: "Evening (4:00 PM – 8:00 PM)",
    reason: "Payment Reminder",
    priority: "High",
    status: "Pending",
    assignedTo: "Nusaiba Kabir",
    notes: {
      summary: "Outstanding balance of ৳ 4,500 pending since the last daily sitting.",
      patientResponse: "Tahsin attending regularly with the grandmother.",
      guardianFeedback: "Mother requested to clear the balance after salary week.",
      recommendations: "Offer a two-instalment plan for the remaining balance.",
      nextAction: "Send a payment reminder and log the promised date.",
    },
    clinical: {
      assessmentDate: "2026-06-12",
      assessmentSummary: "Speech sound disorder with mild oral-motor weakness.",
      diagnosis: "Speech sound disorder",
      severity: "Moderate",
      therapyProgram: "Oral Motor Programme — Level 1",
      therapist: "Rezaul Karim",
      sessionsCompleted: 9,
      sessionsPlanned: 16,
      progressNote: "Lip rounding and tongue elevation improving session over session.",
    },
    billing: {
      packageName: "Daily Therapy",
      totalBilled: 12000,
      totalPaid: 7500,
      due: 4500,
      lastPaymentDate: "2026-07-18",
      paymentStatus: "Due",
    },
    metrics: {
      risk: "High",
      attendance: 84,
      remainingSessions: 7,
      outstandingDue: 4500,
      nextAppointment: "2026-08-01",
    },
    timeline: timeline(
      {
        registered: "2026-06-02",
        assessment: "2026-06-12",
        therapy: "2026-06-16",
        call: "2026-07-30",
        renewal: "2026-07-18",
      },
      "Tahsin Rahman",
    ),
  },
  {
    id: "fu-2026-1006",
    code: "FU-2026-1006",
    patientId: "samiha-chowdhury",
    patientName: "Samiha Chowdhury",
    patientCode: "PT-SYL-1006",
    patientAge: 10,
    patientPhoto: null,
    guardianName: "Kamrul Chowdhury",
    guardianRelation: "Father",
    guardianPhone: "+880 1622-450981",
    branch: "Sylhet Branch",
    packageName: "Monthly Standard — 12 Sessions",
    lastVisit: "2026-07-28",
    assignedDate: "2026-07-28",
    nextFollowUp: "2026-08-01",
    preferredTime: "Afternoon (12:00 PM – 4:00 PM)",
    reason: "Parent Counseling",
    priority: "Medium",
    status: "Rescheduled",
    assignedTo: "Tanjila Rahman",
    notes: {
      summary: "Parent counselling session rescheduled at the guardian's request.",
      patientResponse: "Samiha is confident with reading tasks in therapy.",
      guardianFeedback: "Father wants guidance on managing stammering at school.",
      recommendations: "Share the school-support handout and arrange a teacher briefing.",
      nextAction: "Re-book the counselling call for Saturday afternoon.",
    },
    clinical: {
      assessmentDate: "2026-04-15",
      assessmentSummary: "Moderate fluency disorder with situational avoidance.",
      diagnosis: "Fluency disorder (stammering)",
      severity: "Moderate",
      therapyProgram: "Fluency Shaping — Level 2",
      therapist: "Shakil Ahmed",
      sessionsCompleted: 14,
      sessionsPlanned: 24,
      progressNote: "Stuttering frequency reduced from 12% to 6% of syllables.",
    },
    billing: {
      packageName: "Monthly Standard — 12 Sessions",
      totalBilled: 14000,
      totalPaid: 12500,
      due: 1500,
      lastPaymentDate: "2026-07-10",
      paymentStatus: "Partially Paid",
    },
    metrics: {
      risk: "Low",
      attendance: 94,
      remainingSessions: 10,
      outstandingDue: 1500,
      nextAppointment: "2026-08-04",
    },
    timeline: timeline(
      {
        registered: "2026-04-02",
        assessment: "2026-04-15",
        therapy: "2026-04-21",
        call: "2026-07-28",
        renewal: "2026-07-10",
      },
      "Samiha Chowdhury",
    ),
  },
  {
    id: "fu-2026-1007",
    code: "FU-2026-1007",
    patientId: "arafat-hossain",
    patientName: "Arafat Hossain",
    patientCode: "PT-DHK-1007",
    patientAge: 12,
    patientPhoto: null,
    guardianName: "Jahanara Begum",
    guardianRelation: "Mother",
    guardianPhone: "+880 1799-330277",
    branch: "Dhaka Main Branch",
    packageName: "Online Booking — Single Session",
    lastVisit: "2026-06-29",
    assignedDate: "2026-07-15",
    nextFollowUp: "2026-07-22",
    preferredTime: "Any time",
    reason: "General Check-in",
    priority: "Low",
    status: "Cancelled",
    assignedTo: "Nusaiba Kabir",
    notes: {
      summary: "Guardian requested to pause follow-ups until the school holidays.",
      patientResponse: "Arafat busy with school examinations this month.",
      guardianFeedback: "Mother will contact the branch when therapy resumes.",
      recommendations: "Keep the profile active and re-engage in September.",
      nextAction: "Add to the re-engagement list for the next quarter.",
    },
    clinical: {
      assessmentDate: "2026-03-19",
      assessmentSummary: "Voice disorder with vocal strain after prolonged speaking.",
      diagnosis: "Muscle tension dysphonia",
      severity: "Mild",
      therapyProgram: "Voice Therapy — Level 1",
      therapist: "Rezaul Karim",
      sessionsCompleted: 8,
      sessionsPlanned: 12,
      progressNote: "Vocal hygiene routine followed; hoarseness reduced.",
    },
    billing: {
      packageName: "Online Booking — Single Session",
      totalBilled: 1500,
      totalPaid: 1500,
      due: 0,
      lastPaymentDate: "2026-06-29",
      paymentStatus: "Paid",
    },
    metrics: {
      risk: "Moderate",
      attendance: 72,
      remainingSessions: 4,
      outstandingDue: 0,
      nextAppointment: null,
    },
    timeline: timeline(
      {
        registered: "2026-03-08",
        assessment: "2026-03-19",
        therapy: "2026-03-25",
        call: "2026-07-15",
        renewal: "2026-06-29",
      },
      "Arafat Hossain",
    ),
  },
  {
    id: "fu-2026-1008",
    code: "FU-2026-1008",
    patientId: "farhana-islam",
    patientName: "Farhana Islam",
    patientCode: "PT-KHL-1008",
    patientAge: 11,
    patientPhoto: null,
    guardianName: "Anwar Hossain",
    guardianRelation: "Father",
    guardianPhone: "+880 1580-114763",
    branch: "Khulna Branch",
    packageName: "10 Session Package",
    lastVisit: "2026-07-26",
    assignedDate: "2026-07-27",
    nextFollowUp: "2026-07-31",
    preferredTime: "Morning (9:00 AM – 12:00 PM)",
    reason: "Therapy Progress",
    priority: "Medium",
    status: "Pending",
    assignedTo: "Tanjila Rahman",
    notes: {
      summary: "Mid-package progress review with the father before the next cycle.",
      patientResponse: "Farhana is motivated and completes home tasks regularly.",
      guardianFeedback: "Father noticed clearer speech during family gatherings.",
      recommendations: "Maintain the current programme and add reading-aloud practice.",
      nextAction: "Book the next assessment review for mid-August.",
    },
    clinical: {
      assessmentDate: "2026-05-20",
      assessmentSummary: "Articulation errors limited to multisyllabic words.",
      diagnosis: "Articulation disorder",
      severity: "Mild",
      therapyProgram: "Articulation Programme — Level 3",
      therapist: "Farhana Islam",
      sessionsCompleted: 7,
      sessionsPlanned: 10,
      progressNote: "Word-level accuracy at 88%; ready for sentence-level drills.",
    },
    billing: {
      packageName: "10 Session Package",
      totalBilled: 10500,
      totalPaid: 8000,
      due: 2500,
      lastPaymentDate: "2026-07-14",
      paymentStatus: "Partially Paid",
    },
    metrics: {
      risk: "Low",
      attendance: 90,
      remainingSessions: 3,
      outstandingDue: 2500,
      nextAppointment: "2026-08-02",
    },
    timeline: timeline(
      {
        registered: "2026-05-09",
        assessment: "2026-05-20",
        therapy: "2026-05-26",
        call: "2026-07-27",
        renewal: "2026-07-14",
      },
      "Farhana Islam",
    ),
  },
  {
    id: "fu-2026-1009",
    code: "FU-2026-1009",
    patientId: "zayan-mahmud",
    patientName: "Zayan Mahmud",
    patientCode: "PT-DHK-1009",
    patientAge: 4,
    patientPhoto: null,
    guardianName: "Sabina Yesmin",
    guardianRelation: "Mother",
    guardianPhone: "+880 1841-770256",
    branch: "Dhaka Main Branch",
    packageName: "Monthly Premium Plan",
    lastVisit: "2026-07-30",
    assignedDate: "2026-07-30",
    nextFollowUp: "2026-08-01",
    preferredTime: "Evening (4:00 PM – 8:00 PM)",
    reason: "Assessment Review",
    priority: "High",
    status: "Pending",
    assignedTo: "Nusaiba Kabir",
    notes: {
      summary: "Discuss the new assessment findings and the revised therapy plan.",
      patientResponse: "Zayan needs frequent breaks during long sessions.",
      guardianFeedback: "Mother anxious about the pace of progress.",
      recommendations: "Shorter, more frequent sessions with parent-led home practice.",
      nextAction: "Arrange a joint call with the clinical lead.",
    },
    clinical: {
      assessmentDate: "2026-07-25",
      assessmentSummary: "Global developmental delay affecting expressive language.",
      diagnosis: "Global developmental delay",
      severity: "Severe",
      therapyProgram: "Early Intervention — Level 1",
      therapist: "Shakil Ahmed",
      sessionsCompleted: 4,
      sessionsPlanned: 24,
      progressNote: "Joint attention improving; using 8 consistent gestures.",
    },
    billing: {
      packageName: "Monthly Premium Plan",
      totalBilled: 22000,
      totalPaid: 18000,
      due: 4000,
      lastPaymentDate: "2026-07-20",
      paymentStatus: "Partially Paid",
    },
    metrics: {
      risk: "High",
      attendance: 78,
      remainingSessions: 20,
      outstandingDue: 4000,
      nextAppointment: "2026-08-01",
    },
    timeline: timeline(
      {
        registered: "2026-07-06",
        assessment: "2026-07-25",
        therapy: "2026-07-12",
        call: "2026-07-30",
        renewal: "2026-07-20",
      },
      "Zayan Mahmud",
    ),
  },
  {
    id: "fu-2026-1010",
    code: "FU-2026-1010",
    patientId: "ishrat-binte-noor",
    patientName: "Ishrat Binte Noor",
    patientCode: "PT-CTG-1010",
    patientAge: 9,
    patientPhoto: null,
    guardianName: "Nasima Noor",
    guardianRelation: "Mother",
    guardianPhone: "+880 1966-220314",
    branch: "Chattogram Branch",
    packageName: "5 Session Package",
    lastVisit: "2026-07-21",
    assignedDate: "2026-07-22",
    nextFollowUp: "2026-07-29",
    preferredTime: "Afternoon (12:00 PM – 4:00 PM)",
    reason: "Package Renewal",
    priority: "Low",
    status: "Completed",
    assignedTo: "Tanjila Rahman",
    notes: {
      summary: "Renewal confirmed for another five-session cycle.",
      patientResponse: "Ishrat happy to continue with the same therapist.",
      guardianFeedback: "Mother appreciated the flexible afternoon slots.",
      recommendations: "Continue with the same therapist for continuity.",
      nextAction: "Issue the renewal invoice and confirm the schedule.",
    },
    clinical: {
      assessmentDate: "2026-06-02",
      assessmentSummary: "Receptive-expressive language delay improving steadily.",
      diagnosis: "Mixed receptive-expressive language disorder",
      severity: "Moderate",
      therapyProgram: "Language Stimulation — Level 2",
      therapist: "Shakil Ahmed",
      sessionsCompleted: 5,
      sessionsPlanned: 5,
      progressNote: "Follows three-step instructions with 90% accuracy.",
    },
    billing: {
      packageName: "5 Session Package",
      totalBilled: 5500,
      totalPaid: 5500,
      due: 0,
      lastPaymentDate: "2026-07-21",
      paymentStatus: "Paid",
    },
    metrics: {
      risk: "Low",
      attendance: 98,
      remainingSessions: 5,
      outstandingDue: 0,
      nextAppointment: "2026-08-06",
    },
    timeline: timeline(
      {
        registered: "2026-05-22",
        assessment: "2026-06-02",
        therapy: "2026-06-08",
        call: "2026-07-22",
        renewal: "2026-07-21",
        completed: "2026-07-29",
      },
      "Ishrat Binte Noor",
    ),
  },
];

export const FOLLOW_UP_KPIS: Kpi[] = [
  {
    id: "today",
    label: "Today's Follow-ups",
    value: "12",
    icon: CalendarClock,
    tone: "primary",
    hint: "Across all therapists",
    delta: { value: "+3 vs yesterday", direction: "up" },
  },
  {
    id: "completed-today",
    label: "Completed Today",
    value: "7",
    icon: CheckCircle2,
    tone: "success",
    hint: "58% of today's list",
    delta: { value: "+2 vs yesterday", direction: "up" },
  },
  {
    id: "pending-calls",
    label: "Pending Calls",
    value: "5",
    icon: PhoneCall,
    tone: "warning",
    hint: "Awaiting guardian contact",
    delta: { value: "2 in evening slot", direction: "flat" },
  },
  {
    id: "overdue",
    label: "Overdue Follow-ups",
    value: "4",
    icon: AlertTriangle,
    tone: "danger",
    hint: "Older than the due date",
    delta: { value: "+1 this week", direction: "down" },
  },
  {
    id: "tomorrow",
    label: "Upcoming Tomorrow",
    value: "9",
    icon: CalendarPlus,
    tone: "primary",
    hint: "Scheduled for Aug 01",
    delta: { value: "+4 vs today", direction: "up" },
  },
  {
    id: "month",
    label: "Completed This Month",
    value: "148",
    icon: Repeat2,
    tone: "success",
    hint: "July 2026 to date",
    delta: { value: "+11.4% vs June", direction: "up" },
  },
  {
    id: "high-priority",
    label: "High Priority Patients",
    value: "6",
    icon: Flame,
    tone: "danger",
    hint: "Need manager attention",
    delta: { value: "2 with dues", direction: "flat" },
  },
  {
    id: "retention",
    label: "Retention Rate",
    value: "86%",
    icon: TrendingUp,
    tone: "success",
    hint: "Rolling 90 days",
    delta: { value: "+3.2% vs Q2", direction: "up" },
  },
];

export type RetentionStat = {
  id: string;
  label: string;
  value: string;
  description: string;
  trend: string;
  tone: StatusTone;
};

export const RETENTION_STATS: RetentionStat[] = [
  {
    id: "at-risk",
    label: "Patients At Risk",
    value: "9",
    description: "Low attendance or overdue dues",
    trend: "+2 this week",
    tone: "danger",
  },
  {
    id: "returning",
    label: "Patients Returning",
    value: "17",
    description: "Re-engaged after a break",
    trend: "+5 this month",
    tone: "success",
  },
  {
    id: "renewed",
    label: "Renewed Packages",
    value: "23",
    description: "Renewals closed in July",
    trend: "+8.4% vs June",
    tone: "info",
  },
  {
    id: "inactive",
    label: "Inactive Patients",
    value: "6",
    description: "No visit in the last 45 days",
    trend: "−1 vs last month",
    tone: "warning",
  },
];

export type Reminder = {
  id: string;
  time: string;
  title: string;
  description: string;
  patientId: string;
  followUpId: string;
  priority: FollowUpPriority;
};

export const TODAY_REMINDERS: Reminder[] = [
  {
    id: "r1",
    time: "10:00 AM",
    title: "Call Rahim Ahmed",
    description: "Therapy progress review with Md. Karim Ahmed.",
    patientId: "rahim-ahmed",
    followUpId: "fu-2026-1001",
    priority: "High",
  },
  {
    id: "r2",
    time: "11:30 AM",
    title: "Review Ayesha Akter",
    description: "Share the re-assessment report with the guardian.",
    patientId: "ayesha-akter",
    followUpId: "fu-2026-1002",
    priority: "Medium",
  },
  {
    id: "r3",
    time: "02:00 PM",
    title: "Package renewal reminder",
    description: "Nusrat Jahan — five session package ends this week.",
    patientId: "nusrat-jahan",
    followUpId: "fu-2026-1004",
    priority: "Medium",
  },
  {
    id: "r4",
    time: "04:30 PM",
    title: "Payment reminder — Tahsin Rahman",
    description: "৳ 4,500 outstanding since the last daily sitting.",
    patientId: "tahsin-rahman",
    followUpId: "fu-2026-1005",
    priority: "High",
  },
  {
    id: "r5",
    time: "06:00 PM",
    title: "Counselling call — Samiha Chowdhury",
    description: "School support guidance for the father.",
    patientId: "samiha-chowdhury",
    followUpId: "fu-2026-1006",
    priority: "Low",
  },
];

export function getFollowUp(id: string) {
  return FOLLOW_UPS.find((item) => item.id === id || item.code === id);
}
