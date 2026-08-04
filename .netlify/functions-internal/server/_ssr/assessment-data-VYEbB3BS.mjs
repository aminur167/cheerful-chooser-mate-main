import { Qt as ClipboardList, U as RefreshCcw, an as CircleCheck, u as UserPlus, yn as CalendarCheck, zt as FileClock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/assessment-data-VYEbB3BS.js
var ASSESSMENT_STATUS_TONE = {
	Pending: "warning",
	Completed: "info",
	Approved: "success",
	"Follow-up": "warning",
	Cancelled: "danger"
};
var SEVERITY_TONE = {
	Mild: "success",
	Moderate: "warning",
	Severe: "danger"
};
var ASSESSMENT_TYPES = [
	"Initial Assessment",
	"Re-assessment",
	"Progress Review",
	"Screening",
	"Second Opinion"
];
var DIAGNOSIS_OPTIONS = [
	"Speech Delay",
	"Language Delay",
	"Autism Spectrum Disorder",
	"Stammering",
	"Articulation Disorder",
	"Voice Disorder",
	"Hearing Impairment",
	"Global Developmental Delay",
	"ADHD",
	"Cerebral Palsy"
];
var THERAPY_RECOMMENDATIONS = [
	"Speech Therapy",
	"Language Therapy",
	"Occupational Therapy",
	"Autism Therapy",
	"Behaviour Therapy",
	"Special Education"
];
var ASSESSMENT_STATUSES = [
	"Pending",
	"Completed",
	"Approved",
	"Follow-up",
	"Cancelled"
];
var SEVERITY_OPTIONS = [
	"Mild",
	"Moderate",
	"Severe"
];
var SESSION_FREQUENCIES = [
	"Once a week",
	"Twice a week",
	"Three times a week",
	"Alternate days",
	"Daily"
];
var DURATION_OPTIONS = [
	"1 month",
	"3 months",
	"6 months",
	"9 months",
	"12 months"
];
var PACKAGE_SUGGESTIONS = [
	"Daily",
	"Session Wise",
	"Monthly"
];
var ASSESSORS = [
	"Dr. Sabrina Chowdhury",
	"Nusrat Jahan",
	"Tanvir Hasan",
	"Farhana Islam",
	"Dr. Mahfuzur Rahman"
];
var ASSESSMENT_DATE_RANGES = [
	{
		key: "all",
		label: "All time"
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
	},
	{
		key: "90d",
		label: "Last 90 days"
	}
];
var EVALUATION_SKILLS = [
	{
		key: "speech",
		label: "Speech & Language Skills"
	},
	{
		key: "communication",
		label: "Communication Skills"
	},
	{
		key: "behavior",
		label: "Behaviour"
	},
	{
		key: "attention",
		label: "Attention"
	},
	{
		key: "eyeContact",
		label: "Eye Contact"
	},
	{
		key: "oralMotor",
		label: "Oral Motor Skills"
	},
	{
		key: "voice",
		label: "Voice"
	},
	{
		key: "fluency",
		label: "Fluency"
	},
	{
		key: "cognitive",
		label: "Cognitive Skills"
	},
	{
		key: "social",
		label: "Social Interaction"
	},
	{
		key: "motor",
		label: "Motor Development"
	}
];
var SCORE_LABELS = {
	1: "Significant concern",
	2: "Below expected",
	3: "Emerging",
	4: "Near age level",
	5: "Age appropriate"
};
var SCORE_TONE = {
	1: "danger",
	2: "danger",
	3: "warning",
	4: "info",
	5: "success"
};
function evaluation(scores, notes = []) {
	return EVALUATION_SKILLS.map((skill, index) => ({
		key: skill.key,
		label: skill.label,
		score: scores[index] ?? 3,
		note: notes[index] ?? ""
	}));
}
var ASSESSMENTS = [
	{
		id: "asm-2401",
		code: "ASM-2401",
		patientId: "rahim-ahmed",
		patientName: "Rahim Ahmed",
		patientCode: "PT-1042",
		patientAge: 6,
		patientGender: "Male",
		guardianName: "Md. Karim Ahmed",
		guardianPhone: "+880 1711-284501",
		branch: "Dhanmondi, Dhaka",
		assessor: "Dr. Sabrina Chowdhury",
		assessmentDate: "2026-07-28",
		createdAt: "2026-07-28T09:30:00.000Z",
		assessmentType: "Initial Assessment",
		status: "Approved",
		reasonForVisit: "Guardian reports unclear speech and limited vocabulary for age.",
		chiefComplaint: "Speaks in two-word phrases only; peers struggle to understand him.",
		observationNotes: "Cooperative throughout the session. Responded to name inconsistently. Preferred play-based tasks over structured picture naming.",
		medicalSummary: "Full term birth, no NICU stay. Hearing screening normal. No prior therapy exposure.",
		evaluation: evaluation([
			2,
			2,
			4,
			3,
			4,
			3,
			4,
			3,
			4,
			3,
			4
		], [
			"Vocabulary approximately 60 words, mostly nouns.",
			"Uses gestures to compensate for missing words.",
			"Settles quickly with visual schedule.",
			"Attends structured tasks for 4-5 minutes.",
			"Maintains eye contact during preferred play.",
			"Mild weakness in lateral tongue movement.",
			"Normal pitch and resonance.",
			"Occasional part-word repetition when excited.",
			"Matches shapes and colours accurately.",
			"Parallel play; limited turn taking.",
			"Age appropriate gross and fine motor skills."
		]),
		diagnosis: {
			primary: "Speech Delay",
			secondary: "Articulation Disorder",
			severity: "Moderate",
			summary: "Expressive language is roughly 18 months behind chronological age with multiple phonological process errors. Receptive language is comparatively stronger."
		},
		recommendation: {
			therapy: "Speech Therapy",
			sessionsPerWeek: 3,
			frequency: "Three times a week",
			expectedDuration: "6 months",
			goals: [
				"Expand expressive vocabulary to 250+ functional words",
				"Produce three-word phrases with 80% accuracy",
				"Reduce final consonant deletion in single words"
			],
			homeInstructions: "Daily 15-minute picture book naming, model-and-expand technique, avoid answering on the child's behalf."
		},
		treatmentPlan: {
			package: "Monthly",
			estimatedSessions: 72,
			expectedStart: "2026-08-03",
			expectedReview: "2026-11-02"
		},
		progress: 100,
		nextFollowUp: "2026-11-02",
		reportReady: true
	},
	{
		id: "asm-2402",
		code: "ASM-2402",
		patientId: "ayesha-akter",
		patientName: "Ayesha Akter",
		patientCode: "PT-1043",
		patientAge: 4,
		patientGender: "Female",
		guardianName: "Shirin Akter",
		guardianPhone: "+880 1819-330472",
		branch: "Uttara, Dhaka",
		assessor: "Nusrat Jahan",
		assessmentDate: "2026-07-31",
		createdAt: "2026-07-31T05:10:00.000Z",
		assessmentType: "Initial Assessment",
		status: "Pending",
		reasonForVisit: "Referred by paediatrician for suspected autism spectrum traits.",
		chiefComplaint: "No functional speech, limited response to name, repetitive hand flapping.",
		observationNotes: "Explored the room independently. Strong reaction to sudden sounds. Engaged briefly with cause-and-effect toys.",
		medicalSummary: "Delivered at 36 weeks. Sat at 9 months, walked at 17 months.",
		evaluation: evaluation([
			1,
			1,
			2,
			2,
			1,
			3,
			3,
			3,
			2,
			1,
			3
		]),
		diagnosis: {
			primary: "Autism Spectrum Disorder",
			secondary: "Language Delay",
			severity: "Severe",
			summary: "Pervasive social communication differences with sensory seeking behaviour. Formal ADOS-style scoring pending second visit."
		},
		recommendation: {
			therapy: "Autism Therapy",
			sessionsPerWeek: 4,
			frequency: "Alternate days",
			expectedDuration: "12 months",
			goals: [
				"Establish joint attention for 30 seconds",
				"Respond to name in 4 of 5 trials",
				"Use picture exchange for 5 core requests"
			],
			homeInstructions: "Structured daily routine with visual schedule, sensory diet twice a day, reduce screen exposure."
		},
		treatmentPlan: {
			package: "Monthly",
			estimatedSessions: 192,
			expectedStart: "2026-08-10",
			expectedReview: "2026-10-10"
		},
		progress: 35,
		nextFollowUp: "2026-08-07",
		reportReady: false
	},
	{
		id: "asm-2403",
		code: "ASM-2403",
		patientId: "tanvir-hossain",
		patientName: "Tanvir Hossain",
		patientCode: "PT-1051",
		patientAge: 9,
		patientGender: "Male",
		guardianName: "Anwar Hossain",
		guardianPhone: "+880 1712-556098",
		branch: "Chattogram",
		assessor: "Tanvir Hasan",
		assessmentDate: "2026-07-31",
		createdAt: "2026-07-31T07:45:00.000Z",
		assessmentType: "Re-assessment",
		status: "Completed",
		reasonForVisit: "Three-month review of ongoing fluency therapy.",
		chiefComplaint: "Blocks on initial sounds during classroom reading.",
		observationNotes: "Confident in conversation, dysfluency increases under time pressure. Uses easy-onset strategy when prompted.",
		medicalSummary: "No significant medical history. Family history of stammering (paternal uncle).",
		evaluation: evaluation([
			4,
			4,
			5,
			4,
			5,
			4,
			4,
			2,
			5,
			4,
			5
		]),
		diagnosis: {
			primary: "Stammering",
			secondary: "None",
			severity: "Mild",
			summary: "Dysfluency frequency dropped from 14% to 6% of spoken syllables since the last review. Secondary behaviours reduced."
		},
		recommendation: {
			therapy: "Speech Therapy",
			sessionsPerWeek: 2,
			frequency: "Twice a week",
			expectedDuration: "3 months",
			goals: [
				"Maintain fluency below 5% dysfluent syllables in reading",
				"Generalise easy onset to classroom presentations",
				"Build self-monitoring checklist with guardian"
			],
			homeInstructions: "Daily 10-minute slow-rate reading aloud, weekly recorded speech sample for review."
		},
		treatmentPlan: {
			package: "Session Wise",
			estimatedSessions: 24,
			expectedStart: "2026-08-05",
			expectedReview: "2026-11-05"
		},
		progress: 80,
		nextFollowUp: "2026-11-05",
		reportReady: true
	},
	{
		id: "asm-2404",
		code: "ASM-2404",
		patientId: "sumaiya-islam",
		patientName: "Sumaiya Islam",
		patientCode: "PT-1067",
		patientAge: 3,
		patientGender: "Female",
		guardianName: "Rokeya Islam",
		guardianPhone: "+880 1911-772310",
		branch: "Dhanmondi, Dhaka",
		assessor: "Farhana Islam",
		assessmentDate: "2026-07-24",
		createdAt: "2026-07-24T10:15:00.000Z",
		assessmentType: "Screening",
		status: "Follow-up",
		reasonForVisit: "Nursery teacher flagged limited peer interaction.",
		chiefComplaint: "Understands instructions but rarely initiates speech.",
		observationNotes: "Quiet and observant. Warmed up after 15 minutes and named familiar objects on request.",
		medicalSummary: "Recurrent ear infections between 12 and 24 months, now resolved.",
		evaluation: evaluation([
			3,
			2,
			4,
			4,
			4,
			4,
			4,
			4,
			4,
			2,
			4
		]),
		diagnosis: {
			primary: "Language Delay",
			secondary: "Speech Delay",
			severity: "Mild",
			summary: "Mild expressive delay likely linked to earlier conductive hearing fluctuation. Comprehension within normal limits."
		},
		recommendation: {
			therapy: "Language Therapy",
			sessionsPerWeek: 2,
			frequency: "Twice a week",
			expectedDuration: "3 months",
			goals: [
				"Initiate five requests per session without prompting",
				"Combine two words spontaneously",
				"Participate in one small-group activity per week"
			],
			homeInstructions: "Narrate daily routines, pause and wait five seconds for a response."
		},
		treatmentPlan: {
			package: "Session Wise",
			estimatedSessions: 24,
			expectedStart: "2026-08-12",
			expectedReview: "2026-09-15"
		},
		progress: 60,
		nextFollowUp: "2026-08-14",
		reportReady: false
	},
	{
		id: "asm-2405",
		code: "ASM-2405",
		patientId: "arif-mahmud",
		patientName: "Arif Mahmud",
		patientCode: "PT-1074",
		patientAge: 5,
		patientGender: "Male",
		guardianName: "Selina Mahmud",
		guardianPhone: "+880 1611-908733",
		branch: "Sylhet",
		assessor: "Dr. Mahfuzur Rahman",
		assessmentDate: "2026-07-19",
		createdAt: "2026-07-19T11:00:00.000Z",
		assessmentType: "Initial Assessment",
		status: "Approved",
		reasonForVisit: "Difficulty pronouncing /r/, /s/ and /sh/ sounds.",
		chiefComplaint: "Peers imitate his pronunciation; child avoids speaking in class.",
		observationNotes: "Highly motivated, imitates target sounds accurately with visual cues and a mirror.",
		medicalSummary: "Unremarkable medical history. Normal hearing evaluation in May 2026.",
		evaluation: evaluation([
			4,
			4,
			5,
			4,
			5,
			3,
			4,
			4,
			5,
			4,
			5
		]),
		diagnosis: {
			primary: "Articulation Disorder",
			secondary: "None",
			severity: "Mild",
			summary: "Isolated articulation errors on three phonemes with stimulability at word level. Prognosis excellent."
		},
		recommendation: {
			therapy: "Speech Therapy",
			sessionsPerWeek: 2,
			frequency: "Twice a week",
			expectedDuration: "3 months",
			goals: [
				"Produce /s/ and /sh/ at word level with 90% accuracy",
				"Generalise /r/ to sentence level",
				"Carry over targets to classroom conversation"
			],
			homeInstructions: "Five-minute mirror drill twice daily using the provided word list."
		},
		treatmentPlan: {
			package: "Session Wise",
			estimatedSessions: 24,
			expectedStart: "2026-07-27",
			expectedReview: "2026-10-27"
		},
		progress: 100,
		nextFollowUp: "2026-10-27",
		reportReady: true
	},
	{
		id: "asm-2406",
		code: "ASM-2406",
		patientId: "nusrat-jahan",
		patientName: "Nusrat Jahan Mim",
		patientCode: "PT-1080",
		patientAge: 7,
		patientGender: "Female",
		guardianName: "Kamrul Hasan",
		guardianPhone: "+880 1521-441209",
		branch: "Rajshahi",
		assessor: "Nusrat Jahan",
		assessmentDate: "2026-07-31",
		createdAt: "2026-07-31T04:20:00.000Z",
		assessmentType: "Progress Review",
		status: "Pending",
		reasonForVisit: "Quarterly review of occupational therapy goals.",
		chiefComplaint: "Handwriting fatigue and difficulty with buttons and laces.",
		observationNotes: "Improved pencil grip. Still avoids bilateral coordination tasks without encouragement.",
		medicalSummary: "Born at 34 weeks, low birth weight. Mild hypotonia noted at 2 years.",
		evaluation: evaluation([
			4,
			4,
			4,
			3,
			5,
			4,
			5,
			5,
			4,
			4,
			2
		]),
		diagnosis: {
			primary: "Global Developmental Delay",
			secondary: "None",
			severity: "Moderate",
			summary: "Fine motor skills tracking approximately 18 months behind peers; language and cognition age appropriate."
		},
		recommendation: {
			therapy: "Occupational Therapy",
			sessionsPerWeek: 3,
			frequency: "Three times a week",
			expectedDuration: "6 months",
			goals: [
				"Independently fasten buttons in under 60 seconds",
				"Sustain handwriting for 10 minutes without fatigue",
				"Complete bilateral coordination circuit unaided"
			],
			homeInstructions: "Daily dough and peg-board activity, dressing practice before school, avoid adult over-assistance."
		},
		treatmentPlan: {
			package: "Monthly",
			estimatedSessions: 72,
			expectedStart: "2026-08-08",
			expectedReview: "2026-11-08"
		},
		progress: 45,
		nextFollowUp: "2026-08-21",
		reportReady: false
	},
	{
		id: "asm-2407",
		code: "ASM-2407",
		patientId: "sakib-al-hasan",
		patientName: "Sakib Al Hasan",
		patientCode: "PT-1088",
		patientAge: 8,
		patientGender: "Male",
		guardianName: "Nasreen Sultana",
		guardianPhone: "+880 1731-620145",
		branch: "Khulna",
		assessor: "Tanvir Hasan",
		assessmentDate: "2026-07-12",
		createdAt: "2026-07-12T06:05:00.000Z",
		assessmentType: "Second Opinion",
		status: "Cancelled",
		reasonForVisit: "Family requested a second opinion before starting therapy.",
		chiefComplaint: "Hoarse voice persisting for six months.",
		observationNotes: "Session ended early; family opted to consult ENT before continuing.",
		medicalSummary: "Frequent vocal strain during sports. No reflux history reported.",
		evaluation: evaluation([
			4,
			4,
			4,
			4,
			5,
			4,
			2,
			4,
			5,
			4,
			5
		]),
		diagnosis: {
			primary: "Voice Disorder",
			secondary: "None",
			severity: "Moderate",
			summary: "Suspected vocal nodules — ENT laryngoscopy required before therapy planning."
		},
		recommendation: {
			therapy: "Speech Therapy",
			sessionsPerWeek: 1,
			frequency: "Once a week",
			expectedDuration: "1 month",
			goals: ["Complete ENT referral", "Introduce vocal hygiene routine"],
			homeInstructions: "Hydration schedule, avoid shouting, voice rest after sports."
		},
		treatmentPlan: {
			package: "Session Wise",
			estimatedSessions: 4,
			expectedStart: "2026-08-01",
			expectedReview: "2026-09-01"
		},
		progress: 15,
		nextFollowUp: null,
		reportReady: false
	},
	{
		id: "asm-2408",
		code: "ASM-2408",
		patientId: "farhana-rahman",
		patientName: "Farhana Rahman",
		patientCode: "PT-1090",
		patientAge: 5,
		patientGender: "Female",
		guardianName: "Mizanur Rahman",
		guardianPhone: "+880 1841-119076",
		branch: "Uttara, Dhaka",
		assessor: "Dr. Sabrina Chowdhury",
		assessmentDate: "2026-07-30",
		createdAt: "2026-07-30T08:40:00.000Z",
		assessmentType: "Initial Assessment",
		status: "Completed",
		reasonForVisit: "School referral for attention and listening difficulties.",
		chiefComplaint: "Cannot follow two-step instructions; frequently off-task.",
		observationNotes: "Needed frequent redirection. Performance improved markedly in a distraction-free setup.",
		medicalSummary: "No birth complications. Sleep routine irregular per guardian report.",
		evaluation: evaluation([
			4,
			3,
			2,
			1,
			3,
			4,
			4,
			4,
			3,
			3,
			4
		]),
		diagnosis: {
			primary: "ADHD",
			secondary: "Language Delay",
			severity: "Moderate",
			summary: "Attention regulation is the primary barrier to language performance; formal behavioural rating scales shared with guardians."
		},
		recommendation: {
			therapy: "Behaviour Therapy",
			sessionsPerWeek: 2,
			frequency: "Twice a week",
			expectedDuration: "6 months",
			goals: [
				"Follow two-step instructions in 4 of 5 trials",
				"Sustain a table task for 10 minutes",
				"Reduce off-task episodes by half"
			],
			homeInstructions: "Consistent bedtime routine, timer-based work chunks, immediate positive reinforcement."
		},
		treatmentPlan: {
			package: "Daily",
			estimatedSessions: 48,
			expectedStart: "2026-08-06",
			expectedReview: "2026-11-06"
		},
		progress: 70,
		nextFollowUp: "2026-08-20",
		reportReady: true
	},
	{
		id: "asm-2409",
		code: "ASM-2409",
		patientId: "imran-kabir",
		patientName: "Imran Kabir",
		patientCode: "PT-1094",
		patientAge: 11,
		patientGender: "Male",
		guardianName: "Ruhul Amin Kabir",
		guardianPhone: "+880 1977-503188",
		branch: "Chattogram",
		assessor: "Farhana Islam",
		assessmentDate: "2026-07-31",
		createdAt: "2026-07-31T03:15:00.000Z",
		assessmentType: "Re-assessment",
		status: "Follow-up",
		reasonForVisit: "Six-month review after cerebral palsy therapy programme.",
		chiefComplaint: "Reduced speech intelligibility in longer sentences.",
		observationNotes: "Good motivation. Intelligibility drops from 85% at word level to 55% at sentence level.",
		medicalSummary: "Spastic diplegia, ambulatory with support. Regular physiotherapy ongoing.",
		evaluation: evaluation([
			3,
			3,
			5,
			4,
			5,
			2,
			3,
			3,
			4,
			4,
			1
		]),
		diagnosis: {
			primary: "Cerebral Palsy",
			secondary: "Articulation Disorder",
			severity: "Severe",
			summary: "Dysarthric speech pattern with reduced breath support. Steady gains recorded over the last two review cycles."
		},
		recommendation: {
			therapy: "Speech Therapy",
			sessionsPerWeek: 3,
			frequency: "Three times a week",
			expectedDuration: "9 months",
			goals: [
				"Increase sentence-level intelligibility to 70%",
				"Sustain phonation for 8 seconds",
				"Use pacing board for long utterances"
			],
			homeInstructions: "Breath support exercises twice daily, slow-rate practice with family conversation partners."
		},
		treatmentPlan: {
			package: "Monthly",
			estimatedSessions: 108,
			expectedStart: "2026-08-04",
			expectedReview: "2026-11-04"
		},
		progress: 55,
		nextFollowUp: "2026-08-18",
		reportReady: false
	},
	{
		id: "asm-2410",
		code: "ASM-2410",
		patientId: "mariam-chowdhury",
		patientName: "Mariam Chowdhury",
		patientCode: "PT-1099",
		patientAge: 2,
		patientGender: "Female",
		guardianName: "Tahmina Chowdhury",
		guardianPhone: "+880 1553-778412",
		branch: "Dhanmondi, Dhaka",
		assessor: "Nusrat Jahan",
		assessmentDate: "2026-07-29",
		createdAt: "2026-07-29T09:00:00.000Z",
		assessmentType: "Screening",
		status: "Approved",
		reasonForVisit: "Guardian concerned about absent babbling and limited response to sound.",
		chiefComplaint: "No recognisable words at 26 months.",
		observationNotes: "Responded to visual cues but not to sound from behind. Audiology referral raised on the spot.",
		medicalSummary: "Family history of childhood hearing loss on maternal side.",
		evaluation: evaluation([
			1,
			2,
			4,
			3,
			4,
			4,
			2,
			3,
			4,
			3,
			5
		]),
		diagnosis: {
			primary: "Hearing Impairment",
			secondary: "Speech Delay",
			severity: "Severe",
			summary: "Suspected sensorineural hearing loss. Language intervention to run alongside audiological management."
		},
		recommendation: {
			therapy: "Language Therapy",
			sessionsPerWeek: 3,
			frequency: "Three times a week",
			expectedDuration: "12 months",
			goals: [
				"Complete audiological assessment and amplification fitting",
				"Establish 10 consistent communicative gestures",
				"Guardian training on auditory-verbal strategies"
			],
			homeInstructions: "Face-to-face communication at the child's eye level, reduce background noise, daily listening routine."
		},
		treatmentPlan: {
			package: "Monthly",
			estimatedSessions: 144,
			expectedStart: "2026-08-11",
			expectedReview: "2026-11-11"
		},
		progress: 100,
		nextFollowUp: "2026-08-25",
		reportReady: true
	}
];
var BRANCH_FILTER_OPTIONS = Array.from(new Set(ASSESSMENTS.map((assessment) => assessment.branch))).sort();
function isToday(date) {
	return new Date(date).toDateString() === (/* @__PURE__ */ new Date("2026-07-31")).toDateString();
}
var ASSESSMENT_KPIS = [
	{
		id: "total",
		label: "Total Assessments",
		value: String(ASSESSMENTS.length),
		icon: ClipboardList,
		tone: "primary",
		hint: "All branches",
		delta: {
			value: "+18%",
			direction: "up"
		}
	},
	{
		id: "today",
		label: "Today's Assessments",
		value: String(ASSESSMENTS.filter((item) => isToday(item.assessmentDate)).length),
		icon: CalendarCheck,
		tone: "primary",
		hint: "Scheduled for today",
		delta: {
			value: "+2 vs yesterday",
			direction: "up"
		}
	},
	{
		id: "pending-reports",
		label: "Pending Reports",
		value: String(ASSESSMENTS.filter((item) => !item.reportReady).length),
		icon: FileClock,
		tone: "warning",
		hint: "Awaiting clinical sign-off",
		delta: {
			value: "-1 this week",
			direction: "down"
		}
	},
	{
		id: "completed-reports",
		label: "Completed Reports",
		value: String(ASSESSMENTS.filter((item) => item.reportReady).length),
		icon: CircleCheck,
		tone: "success",
		hint: "Shared with guardians",
		delta: {
			value: "+5 this month",
			direction: "up"
		}
	},
	{
		id: "new-patients",
		label: "New Patients",
		value: String(ASSESSMENTS.filter((item) => item.assessmentType === "Initial Assessment").length),
		icon: UserPlus,
		tone: "success",
		hint: "First-time assessments",
		delta: {
			value: "+3 this month",
			direction: "up"
		}
	},
	{
		id: "follow-up",
		label: "Follow-up Required",
		value: String(ASSESSMENTS.filter((item) => item.status === "Follow-up").length),
		icon: RefreshCcw,
		tone: "warning",
		hint: "Review visit pending",
		delta: {
			value: "Stable",
			direction: "flat"
		}
	}
];
function findAssessment(id) {
	return ASSESSMENTS.find((assessment) => assessment.id === id || assessment.code.toLowerCase() === id.toLowerCase());
}
function averageScore(evaluationScores) {
	if (evaluationScores.length === 0) return 0;
	const total = evaluationScores.reduce((sum, skill) => sum + skill.score, 0);
	return Math.round(total / evaluationScores.length * 10) / 10;
}
//#endregion
export { SEVERITY_TONE as _, ASSESSMENT_STATUS_TONE as a, findAssessment as b, BRANCH_FILTER_OPTIONS as c, EVALUATION_SKILLS as d, PACKAGE_SUGGESTIONS as f, SEVERITY_OPTIONS as g, SESSION_FREQUENCIES as h, ASSESSMENT_STATUSES as i, DIAGNOSIS_OPTIONS as l, SCORE_TONE as m, ASSESSMENT_DATE_RANGES as n, ASSESSMENT_TYPES as o, SCORE_LABELS as p, ASSESSMENT_KPIS as r, ASSESSORS as s, ASSESSMENTS as t, DURATION_OPTIONS as u, THERAPY_RECOMMENDATIONS as v, averageScore as y };
