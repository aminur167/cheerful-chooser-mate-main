import { an as CircleCheck, hn as CalendarRange, l as UserRound, nn as CirclePlay, o as Users, tn as CircleX, vn as CalendarClock, yn as CalendarCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/therapy-data-GYpM_hnG.js
/**
* Static demo data for the Therapy Management module.
* Shapes mirror the payloads expected from the Django REST API later,
* so screens can switch to live data without structural changes.
*/
var TODAY_ISO = "2026-07-31";
var THERAPY_STATUS_TONE = {
	Scheduled: "info",
	Completed: "success",
	Ongoing: "warning",
	Missed: "danger",
	Cancelled: "neutral"
};
var ATTENDANCE_TONE = {
	Present: "success",
	Absent: "danger",
	Late: "warning",
	Rescheduled: "info"
};
var THERAPY_MODES = ["Individual Therapy", "Group Therapy"];
var THERAPY_PROGRAMS = [
	"Speech Therapy",
	"Language Therapy",
	"Occupational Therapy",
	"Autism Therapy"
];
var THERAPY_STATUSES = [
	"Scheduled",
	"Completed",
	"Ongoing",
	"Missed",
	"Cancelled"
];
var THERAPISTS = [
	"Nusrat Jahan Mim",
	"Tanvir Hasan",
	"Farhana Islam",
	"Dr. Sabrina Chowdhury",
	"Ashiqur Rahman",
	"Sadia Afrin"
];
var THERAPY_ROOMS = [
	"Room 101 — Speech Suite",
	"Room 102 — Language Lab",
	"Room 203 — Sensory Room",
	"Room 204 — Group Hall",
	"Room 305 — OT Gym"
];
var THERAPY_EQUIPMENT = [
	"Articulation Card Set",
	"PECS Communication Board",
	"Mirror Station",
	"Oral Motor Kit",
	"Sensory Swing",
	"Therapy Ball",
	"Flashcard Deck",
	"Bubble Kit",
	"Tablet with AAC App"
];
var THERAPY_DATE_RANGES = [
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
		key: "upcoming",
		label: "Upcoming"
	}
];
var SESSION_GOAL_SKILLS = [
	"Communication",
	"Eye Contact",
	"Speech Clarity",
	"Vocabulary",
	"Social Interaction",
	"Attention",
	"Turn Taking",
	"Oral Motor Control"
];
function progressTone(value) {
	if (value >= 75) return "success";
	if (value >= 50) return "info";
	if (value >= 30) return "warning";
	return "danger";
}
function progressStatus(value) {
	if (value >= 85) return "Goal met";
	if (value >= 70) return "On track";
	if (value >= 50) return "Improving";
	if (value >= 30) return "Emerging";
	return "Needs focus";
}
function skills(values) {
	return [
		{
			key: "communication",
			label: "Communication"
		},
		{
			key: "eyeContact",
			label: "Eye Contact"
		},
		{
			key: "speechClarity",
			label: "Speech Clarity"
		},
		{
			key: "vocabulary",
			label: "Vocabulary"
		},
		{
			key: "socialInteraction",
			label: "Social Interaction"
		},
		{
			key: "attention",
			label: "Attention"
		}
	].map((item, index) => ({
		key: item.key,
		label: item.label,
		value: values[index],
		status: progressStatus(values[index]),
		tone: progressTone(values[index])
	}));
}
function timeline(assessmentDate, first, second, current, followUp) {
	return [
		{
			id: "tl-1",
			title: "Assessment completed",
			description: "Initial clinical assessment finished and therapy plan approved.",
			date: assessmentDate,
			tone: "info"
		},
		{
			id: "tl-2",
			title: "Session 1 completed",
			description: "Baseline goals introduced, guardian oriented to home practice.",
			date: first,
			tone: "success"
		},
		{
			id: "tl-3",
			title: "Session 2 completed",
			description: "Target sounds drilled with visual cue support.",
			date: second,
			tone: "success"
		},
		{
			id: "tl-4",
			title: "Current session",
			description: "Scheduled continuation of the running therapy programme.",
			date: current,
			tone: "warning"
		},
		{
			id: "tl-5",
			title: "Follow-up review",
			description: "Progress review with the clinical lead and guardian.",
			date: followUp,
			tone: "neutral"
		}
	];
}
var THERAPY_SESSIONS = [
	{
		id: "ths-1001",
		code: "THS-2026-1001",
		patientId: "rahim-ahmed",
		patientName: "Rahim Ahmed",
		patientCode: "PT-DHK-1001",
		patientAge: 7,
		patientGender: "Male",
		guardianName: "Md. Karim Ahmed",
		guardianPhone: "+880 1711-458920",
		branch: "Dhaka Main Branch",
		mode: "Individual Therapy",
		program: "Speech Therapy",
		sessionNumber: 9,
		totalSessions: 12,
		sessionDate: "2026-07-31",
		startTime: "10:00",
		endTime: "10:45",
		room: "Room 101 — Speech Suite",
		therapist: "Nusrat Jahan Mim",
		equipment: ["Articulation Card Set", "Mirror Station"],
		status: "Ongoing",
		attendance: "Present",
		progress: 72,
		diagnosis: "Articulation disorder (provisional)",
		assessmentSummary: "Consistent substitution of /r/ and /s/ sounds in conversational speech. Comprehension age appropriate.",
		therapyPlan: "Twice weekly articulation therapy for 3 months with guardian-led daily practice at home.",
		packageName: "Monthly Standard — 12 Sessions",
		packageSessionsUsed: 9,
		packageSessionsTotal: 12,
		createdAt: "2026-07-24T09:15:00",
		goals: {
			sessionGoal: "Produce /r/ in initial word position with 80% accuracy.",
			targetSkills: ["Speech Clarity", "Attention"],
			activities: [
				"Mirror drills",
				"Picture naming",
				"Sentence repetition"
			],
			materials: ["Articulation Card Set", "Mirror Station"],
			expectedOutcome: "Independent /r/ production in 8 of 10 target words."
		},
		notes: {
			objectives: "Strengthen initial /r/ production and carry over into short phrases.",
			activitiesPerformed: "Mirror-based articulation drills, 40 picture-naming trials, phrase-level carryover practice.",
			patientResponse: "Highly cooperative, achieved 78% accuracy at word level with occasional visual cues.",
			behavior: "Attentive throughout, minor restlessness in the last 5 minutes.",
			homework: "10 minutes daily card drill with the guardian; record 5 trials per day.",
			recommendations: "Continue current plan; introduce medial /r/ next session.",
			therapistNotes: "Good motivation. Guardian is consistent with practice logs which is accelerating carryover."
		},
		progressSkills: skills([
			74,
			82,
			68,
			71,
			65,
			70
		]),
		group: null,
		timeline: timeline("2026-05-12", "2026-05-19", "2026-05-26", "2026-07-31", "2026-08-14")
	},
	{
		id: "ths-1002",
		code: "THS-2026-1002",
		patientId: "ayesha-akter",
		patientName: "Ayesha Akter",
		patientCode: "PT-DHK-1002",
		patientAge: 5,
		patientGender: "Female",
		guardianName: "Shamima Begum",
		guardianPhone: "+880 1819-772140",
		branch: "Dhaka Main Branch",
		mode: "Individual Therapy",
		program: "Language Therapy",
		sessionNumber: 4,
		totalSessions: 16,
		sessionDate: "2026-07-31",
		startTime: "11:30",
		endTime: "12:15",
		room: "Room 102 — Language Lab",
		therapist: "Farhana Islam",
		equipment: ["Flashcard Deck", "PECS Communication Board"],
		status: "Scheduled",
		attendance: "Rescheduled",
		progress: 38,
		diagnosis: "Expressive language delay (provisional)",
		assessmentSummary: "Vocabulary approximately 18 months behind chronological age. Receptive skills stronger than expressive.",
		therapyPlan: "Language stimulation therapy twice weekly with visual support strategies.",
		packageName: "Session Wise — Pay per visit",
		packageSessionsUsed: 4,
		packageSessionsTotal: 16,
		createdAt: "2026-07-26T14:05:00",
		goals: {
			sessionGoal: "Expand two-word combinations to 15 spontaneous productions.",
			targetSkills: ["Vocabulary", "Communication"],
			activities: [
				"Picture description",
				"Story sequencing",
				"Modelled play"
			],
			materials: ["Flashcard Deck", "PECS Communication Board"],
			expectedOutcome: "Spontaneous two-word phrases during structured play."
		},
		notes: {
			objectives: "Increase spontaneous expressive output during play routines.",
			activitiesPerformed: "Modelled play with expansion, 3 sequencing tasks, snack-time requesting.",
			patientResponse: "Produced 11 spontaneous two-word phrases, improving from 6 last session.",
			behavior: "Shy at the start, warmed up after the play routine.",
			homework: "Guardian to model two-word phrases during daily routines.",
			recommendations: "Continue play-based stimulation; add choice-making opportunities.",
			therapistNotes: "Responds best to routine-based prompts rather than table work."
		},
		progressSkills: skills([
			42,
			55,
			34,
			40,
			36,
			45
		]),
		group: null,
		timeline: timeline("2026-06-02", "2026-06-09", "2026-06-16", "2026-07-31", "2026-08-20")
	},
	{
		id: "ths-1003",
		code: "THS-2026-1003",
		patientId: "mahin-hasan",
		patientName: "Mahin Hasan",
		patientCode: "PT-DHK-1003",
		patientAge: 9,
		patientGender: "Male",
		guardianName: "Md. Rezaul Hasan",
		guardianPhone: "+880 1730-118845",
		branch: "Dhaka Main Branch",
		mode: "Individual Therapy",
		program: "Speech Therapy",
		sessionNumber: 12,
		totalSessions: 12,
		sessionDate: "2026-07-29",
		startTime: "09:00",
		endTime: "09:45",
		room: "Room 101 — Speech Suite",
		therapist: "Tanvir Hasan",
		equipment: ["Oral Motor Kit", "Tablet with AAC App"],
		status: "Completed",
		attendance: "Present",
		progress: 88,
		diagnosis: "Fluency disorder (provisional)",
		assessmentSummary: "Moderate stammering with block-type disfluencies, most prominent in classroom settings.",
		therapyPlan: "Fluency shaping with easy-onset technique and school carryover programme.",
		packageName: "Monthly Premium — 16 Sessions",
		packageSessionsUsed: 12,
		packageSessionsTotal: 16,
		createdAt: "2026-07-22T08:40:00",
		goals: {
			sessionGoal: "Maintain easy onset across 3-minute conversational speech.",
			targetSkills: ["Speech Clarity", "Communication"],
			activities: [
				"Easy onset drills",
				"Conversational practice",
				"Reading aloud"
			],
			materials: ["Oral Motor Kit", "Tablet with AAC App"],
			expectedOutcome: "Under 5% disfluency in structured conversation."
		},
		notes: {
			objectives: "Consolidate fluency technique in longer conversational turns.",
			activitiesPerformed: "Easy onset warm-up, 3-minute monologue, reading passage, role play.",
			patientResponse: "Disfluency reduced to 4% in structured conversation — best score to date.",
			behavior: "Confident and self-monitoring without prompts.",
			homework: "Daily 5-minute reading aloud recording shared with the therapist.",
			recommendations: "Move to maintenance phase with fortnightly reviews.",
			therapistNotes: "Ready for discharge planning after two maintenance sessions."
		},
		progressSkills: skills([
			88,
			90,
			86,
			84,
			80,
			85
		]),
		group: null,
		timeline: timeline("2026-04-08", "2026-04-15", "2026-04-22", "2026-07-29", "2026-08-12")
	},
	{
		id: "ths-1004",
		code: "THS-2026-1004",
		patientId: "nusrat-jahan",
		patientName: "Nusrat Jahan",
		patientCode: "PT-CTG-1004",
		patientAge: 4,
		patientGender: "Female",
		guardianName: "Md. Jahangir Alam",
		guardianPhone: "+880 1745-660238",
		branch: "Chattogram Branch",
		mode: "Group Therapy",
		program: "Autism Therapy",
		sessionNumber: 6,
		totalSessions: 20,
		sessionDate: "2026-07-31",
		startTime: "14:00",
		endTime: "15:00",
		room: "Room 204 — Group Hall",
		therapist: "Dr. Sabrina Chowdhury",
		equipment: [
			"Sensory Swing",
			"Bubble Kit",
			"Therapy Ball"
		],
		status: "Ongoing",
		attendance: "Present",
		progress: 46,
		diagnosis: "Pending formal assessment",
		assessmentSummary: "Limited joint attention and reduced peer interaction. Sensory seeking behaviour observed.",
		therapyPlan: "Weekly group social communication therapy alongside individual sessions.",
		packageName: "Assessment only",
		packageSessionsUsed: 6,
		packageSessionsTotal: 20,
		createdAt: "2026-07-25T10:20:00",
		goals: {
			sessionGoal: "Initiate two peer interactions during the group circle activity.",
			targetSkills: [
				"Social Interaction",
				"Eye Contact",
				"Turn Taking"
			],
			activities: [
				"Circle time greeting",
				"Turn-taking game",
				"Sensory break"
			],
			materials: ["Sensory Swing", "Bubble Kit"],
			expectedOutcome: "Two independent peer initiations within the session."
		},
		notes: {
			objectives: "Build peer-directed communication in a small group setting.",
			activitiesPerformed: "Circle greeting, ball-passing turn taking, shared bubble play.",
			patientResponse: "One independent and two prompted peer initiations recorded.",
			behavior: "Sought sensory input twice; settled quickly after the swing break.",
			homework: "Arrange one short peer play date per week.",
			recommendations: "Continue group therapy; keep sensory breaks scheduled mid-session.",
			therapistNotes: "Group format is producing better initiation rates than one-to-one work."
		},
		progressSkills: skills([
			44,
			38,
			40,
			48,
			52,
			42
		]),
		group: {
			groupName: "Little Talkers — Group B",
			sessionTopic: "Turn taking and greeting peers",
			totalChildren: 6,
			present: 5,
			absent: 1,
			activities: [
				"Circle time greeting song",
				"Ball passing with name calling",
				"Shared bubble play",
				"Group clean-up routine"
			],
			remarks: "Strong engagement overall. One child absent due to illness; guardian informed the front desk.",
			members: [
				{
					id: "nusrat-jahan",
					name: "Nusrat Jahan",
					patientCode: "PT-CTG-1004",
					age: 4,
					attendance: "Present"
				},
				{
					id: "ishrat-binte-noor",
					name: "Ishrat Binte Noor",
					patientCode: "PT-CTG-1010",
					age: 5,
					attendance: "Present"
				},
				{
					id: "zayan-mahmud",
					name: "Zayan Mahmud",
					patientCode: "PT-DHK-1009",
					age: 6,
					attendance: "Late"
				},
				{
					id: "arafat-hossain",
					name: "Arafat Hossain",
					patientCode: "PT-DHK-1007",
					age: 8,
					attendance: "Present"
				},
				{
					id: "samiha-chowdhury",
					name: "Samiha Chowdhury",
					patientCode: "PT-SYL-1006",
					age: 6,
					attendance: "Present"
				},
				{
					id: "farhana-islam",
					name: "Farhana Islam",
					patientCode: "PT-KHL-1008",
					age: 7,
					attendance: "Absent"
				}
			]
		},
		timeline: timeline("2026-06-10", "2026-06-17", "2026-06-24", "2026-07-31", "2026-08-21")
	},
	{
		id: "ths-1005",
		code: "THS-2026-1005",
		patientId: "tahsin-rahman",
		patientName: "Tahsin Rahman",
		patientCode: "PT-DHK-1005",
		patientAge: 11,
		patientGender: "Male",
		guardianName: "Sultana Rahman",
		guardianPhone: "+880 1766-201947",
		branch: "Gulshan Branch",
		mode: "Individual Therapy",
		program: "Speech Therapy",
		sessionNumber: 3,
		totalSessions: 6,
		sessionDate: "2026-07-28",
		startTime: "16:00",
		endTime: "16:45",
		room: "Room 101 — Speech Suite",
		therapist: "Ashiqur Rahman",
		equipment: ["Mirror Station", "Oral Motor Kit"],
		status: "Missed",
		attendance: "Absent",
		progress: 28,
		diagnosis: "Muscle tension dysphonia (provisional)",
		assessmentSummary: "Hoarse vocal quality with excessive laryngeal tension during speech.",
		therapyPlan: "Voice therapy with resonant voice technique and vocal hygiene education.",
		packageName: "Online Booking — 6 Session Bundle",
		packageSessionsUsed: 3,
		packageSessionsTotal: 6,
		createdAt: "2026-07-21T12:00:00",
		goals: {
			sessionGoal: "Sustain resonant voice for 10 consecutive phrases.",
			targetSkills: ["Speech Clarity", "Attention"],
			activities: [
				"Humming warm-up",
				"Resonant phrase practice",
				"Vocal hygiene review"
			],
			materials: ["Mirror Station"],
			expectedOutcome: "Reduced strain during sustained phonation tasks."
		},
		notes: {
			objectives: "Reduce laryngeal tension during connected speech.",
			activitiesPerformed: "Session not held — patient did not attend.",
			patientResponse: "Not applicable.",
			behavior: "Not applicable.",
			homework: "Carry over previous vocal hygiene checklist.",
			recommendations: "Front desk to reschedule within the same week.",
			therapistNotes: "Second missed session this month. Guardian follow-up call required."
		},
		progressSkills: skills([
			30,
			45,
			26,
			33,
			38,
			29
		]),
		group: null,
		timeline: timeline("2026-06-25", "2026-07-02", "2026-07-14", "2026-07-28", "2026-08-05")
	},
	{
		id: "ths-1006",
		code: "THS-2026-1006",
		patientId: "samiha-chowdhury",
		patientName: "Samiha Chowdhury",
		patientCode: "PT-SYL-1006",
		patientAge: 6,
		patientGender: "Female",
		guardianName: "Md. Mizanur Chowdhury",
		guardianPhone: "+880 1788-334019",
		branch: "Sylhet Branch",
		mode: "Individual Therapy",
		program: "Occupational Therapy",
		sessionNumber: 7,
		totalSessions: 8,
		sessionDate: "2026-08-03",
		startTime: "10:30",
		endTime: "11:15",
		room: "Room 305 — OT Gym",
		therapist: "Sadia Afrin",
		equipment: ["Therapy Ball", "Sensory Swing"],
		status: "Scheduled",
		attendance: "Rescheduled",
		progress: 61,
		diagnosis: "Global language delay (provisional)",
		assessmentSummary: "Fine motor delay with reduced bilateral coordination affecting handwriting readiness.",
		therapyPlan: "Occupational therapy focused on fine motor and sensory regulation goals.",
		packageName: "Monthly Basic — 8 Sessions",
		packageSessionsUsed: 7,
		packageSessionsTotal: 8,
		createdAt: "2026-07-27T11:45:00",
		goals: {
			sessionGoal: "Complete a 6-step bead threading task with minimal support.",
			targetSkills: ["Attention", "Communication"],
			activities: [
				"Bead threading",
				"Balance work",
				"Pencil grip practice"
			],
			materials: ["Therapy Ball", "Sensory Swing"],
			expectedOutcome: "Independent completion of the fine motor sequence."
		},
		notes: {
			objectives: "Improve bilateral coordination and sustained attention on table tasks.",
			activitiesPerformed: "Bead threading, balance board circuit, tripod grip tracing.",
			patientResponse: "Completed 5 of 6 steps independently.",
			behavior: "Engaged and calm; needed one movement break.",
			homework: "Daily 10-minute tracing sheet at home.",
			recommendations: "Plan discharge review after the final package session.",
			therapistNotes: "Ready for a school-readiness handover report."
		},
		progressSkills: skills([
			58,
			66,
			54,
			60,
			63,
			68
		]),
		group: null,
		timeline: timeline("2026-05-20", "2026-05-27", "2026-06-03", "2026-08-03", "2026-08-24")
	},
	{
		id: "ths-1007",
		code: "THS-2026-1007",
		patientId: "arafat-hossain",
		patientName: "Arafat Hossain",
		patientCode: "PT-DHK-1007",
		patientAge: 8,
		patientGender: "Male",
		guardianName: "Nazma Hossain",
		guardianPhone: "+880 1799-450712",
		branch: "Dhaka Main Branch",
		mode: "Group Therapy",
		program: "Language Therapy",
		sessionNumber: 10,
		totalSessions: 24,
		sessionDate: "2026-07-30",
		startTime: "15:00",
		endTime: "16:00",
		room: "Room 204 — Group Hall",
		therapist: "Farhana Islam",
		equipment: ["Flashcard Deck", "PECS Communication Board"],
		status: "Completed",
		attendance: "Present",
		progress: 69,
		diagnosis: "Phonological processing difficulty (provisional)",
		assessmentSummary: "Phonological processing weakness affecting word retrieval and classroom participation.",
		therapyPlan: "Group language enrichment plus weekly individual phonology drill.",
		packageName: "Session Wise — Pay per visit",
		packageSessionsUsed: 10,
		packageSessionsTotal: 24,
		createdAt: "2026-07-23T13:10:00",
		goals: {
			sessionGoal: "Retrieve 12 category words within the group naming game.",
			targetSkills: ["Vocabulary", "Social Interaction"],
			activities: [
				"Category naming race",
				"Group storytelling",
				"Peer feedback round"
			],
			materials: ["Flashcard Deck"],
			expectedOutcome: "Faster word retrieval with peer support."
		},
		notes: {
			objectives: "Improve word retrieval speed in a peer setting.",
			activitiesPerformed: "Category naming race, collaborative story building, peer feedback.",
			patientResponse: "Retrieved 14 category words, exceeding the session target.",
			behavior: "Enthusiastic leader within the group; supported quieter peers.",
			homework: "Category word list practice three times a week.",
			recommendations: "Increase task complexity with multi-syllable targets.",
			therapistNotes: "Peer modelling is a strong motivator for this child."
		},
		progressSkills: skills([
			70,
			72,
			64,
			76,
			74,
			66
		]),
		group: {
			groupName: "Word Builders — Group A",
			sessionTopic: "Category naming and story building",
			totalChildren: 5,
			present: 4,
			absent: 1,
			activities: [
				"Warm-up naming race",
				"Collaborative story building",
				"Peer feedback circle",
				"Closing recap"
			],
			remarks: "Excellent peer dynamics. One child absent with prior notice from the guardian.",
			members: [
				{
					id: "arafat-hossain",
					name: "Arafat Hossain",
					patientCode: "PT-DHK-1007",
					age: 8,
					attendance: "Present"
				},
				{
					id: "rahim-ahmed",
					name: "Rahim Ahmed",
					patientCode: "PT-DHK-1001",
					age: 7,
					attendance: "Present"
				},
				{
					id: "mahin-hasan",
					name: "Mahin Hasan",
					patientCode: "PT-DHK-1003",
					age: 9,
					attendance: "Late"
				},
				{
					id: "zayan-mahmud",
					name: "Zayan Mahmud",
					patientCode: "PT-DHK-1009",
					age: 6,
					attendance: "Present"
				},
				{
					id: "ayesha-akter",
					name: "Ayesha Akter",
					patientCode: "PT-DHK-1002",
					age: 5,
					attendance: "Absent"
				}
			]
		},
		timeline: timeline("2026-04-29", "2026-05-06", "2026-05-13", "2026-07-30", "2026-08-13")
	},
	{
		id: "ths-1008",
		code: "THS-2026-1008",
		patientId: "farhana-islam",
		patientName: "Farhana Islam",
		patientCode: "PT-KHL-1008",
		patientAge: 7,
		patientGender: "Female",
		guardianName: "Md. Shafiqul Islam",
		guardianPhone: "+880 1710-889423",
		branch: "Khulna Branch",
		mode: "Individual Therapy",
		program: "Speech Therapy",
		sessionNumber: 2,
		totalSessions: 12,
		sessionDate: "2026-07-27",
		startTime: "12:00",
		endTime: "12:45",
		room: "Room 102 — Language Lab",
		therapist: "Tanvir Hasan",
		equipment: ["Mirror Station", "Flashcard Deck"],
		status: "Cancelled",
		attendance: "Rescheduled",
		progress: 18,
		diagnosis: "Resonance disorder (provisional)",
		assessmentSummary: "Hypernasal resonance affecting intelligibility in connected speech.",
		therapyPlan: "Resonance therapy with airflow redirection exercises twice weekly.",
		packageName: "Monthly Standard — 12 Sessions",
		packageSessionsUsed: 2,
		packageSessionsTotal: 12,
		createdAt: "2026-07-20T09:30:00",
		goals: {
			sessionGoal: "Establish oral airflow on 10 pressure consonant words.",
			targetSkills: ["Speech Clarity"],
			activities: ["Airflow exercises", "Pressure consonant drills"],
			materials: ["Mirror Station"],
			expectedOutcome: "Reduced nasal emission on target words."
		},
		notes: {
			objectives: "Establish consistent oral airflow.",
			activitiesPerformed: "Session cancelled by the branch due to therapist emergency leave.",
			patientResponse: "Not applicable.",
			behavior: "Not applicable.",
			homework: "Continue previous airflow homework sheet.",
			recommendations: "Rebook with the same therapist within three days.",
			therapistNotes: "Guardian was informed by phone and agreed to a new slot."
		},
		progressSkills: skills([
			20,
			34,
			16,
			22,
			28,
			24
		]),
		group: null,
		timeline: timeline("2026-07-06", "2026-07-13", "2026-07-20", "2026-07-27", "2026-08-06")
	},
	{
		id: "ths-1009",
		code: "THS-2026-1009",
		patientId: "zayan-mahmud",
		patientName: "Zayan Mahmud",
		patientCode: "PT-DHK-1009",
		patientAge: 6,
		patientGender: "Male",
		guardianName: "Tanjina Mahmud",
		guardianPhone: "+880 1755-330871",
		branch: "Gulshan Branch",
		mode: "Individual Therapy",
		program: "Autism Therapy",
		sessionNumber: 15,
		totalSessions: 24,
		sessionDate: "2026-08-04",
		startTime: "09:30",
		endTime: "10:30",
		room: "Room 203 — Sensory Room",
		therapist: "Dr. Sabrina Chowdhury",
		equipment: [
			"Sensory Swing",
			"Tablet with AAC App",
			"Therapy Ball"
		],
		status: "Scheduled",
		attendance: "Rescheduled",
		progress: 55,
		diagnosis: "Pending multidisciplinary assessment",
		assessmentSummary: "Emerging AAC user with sensory regulation needs and limited spontaneous requesting.",
		therapyPlan: "Structured ABA-informed therapy with AAC integration three times a week.",
		packageName: "Assessment only",
		packageSessionsUsed: 15,
		packageSessionsTotal: 24,
		createdAt: "2026-07-29T15:25:00",
		goals: {
			sessionGoal: "Make 8 independent AAC requests during structured play.",
			targetSkills: [
				"Communication",
				"Eye Contact",
				"Attention"
			],
			activities: [
				"AAC requesting",
				"Sensory circuit",
				"Structured play"
			],
			materials: ["Tablet with AAC App", "Sensory Swing"],
			expectedOutcome: "Eight independent device-based requests."
		},
		notes: {
			objectives: "Increase independent AAC requesting across activities.",
			activitiesPerformed: "AAC requesting trials, sensory circuit, motivating play routine.",
			patientResponse: "Six independent requests, two prompted — steady upward trend.",
			behavior: "Calm after the sensory circuit; brief protest at transitions.",
			homework: "Keep the AAC device available during all meals at home.",
			recommendations: "Add a transition visual schedule to reduce protest behaviour.",
			therapistNotes: "Device familiarity has improved noticeably over the last month."
		},
		progressSkills: skills([
			56,
			48,
			44,
			58,
			50,
			52
		]),
		group: null,
		timeline: timeline("2026-03-18", "2026-03-25", "2026-04-01", "2026-08-04", "2026-08-25")
	},
	{
		id: "ths-1010",
		code: "THS-2026-1010",
		patientId: "ishrat-binte-noor",
		patientName: "Ishrat Binte Noor",
		patientCode: "PT-CTG-1010",
		patientAge: 5,
		patientGender: "Female",
		guardianName: "Md. Noorul Amin",
		guardianPhone: "+880 1722-905513",
		branch: "Chattogram Branch",
		mode: "Individual Therapy",
		program: "Language Therapy",
		sessionNumber: 5,
		totalSessions: 12,
		sessionDate: "2026-07-31",
		startTime: "13:00",
		endTime: "13:45",
		room: "Room 102 — Language Lab",
		therapist: "Ashiqur Rahman",
		equipment: ["Flashcard Deck", "Bubble Kit"],
		status: "Scheduled",
		attendance: "Late",
		progress: 44,
		diagnosis: "Receptive language delay (provisional)",
		assessmentSummary: "Difficulty following two-step instructions and reduced vocabulary comprehension.",
		therapyPlan: "Receptive language therapy with visual scaffolding twice weekly.",
		packageName: "Daily Visit — Standard Rate",
		packageSessionsUsed: 5,
		packageSessionsTotal: 12,
		createdAt: "2026-07-30T10:05:00",
		goals: {
			sessionGoal: "Follow 8 of 10 two-step instructions without visual cues.",
			targetSkills: [
				"Communication",
				"Attention",
				"Vocabulary"
			],
			activities: [
				"Instruction following",
				"Object identification",
				"Listening game"
			],
			materials: ["Flashcard Deck", "Bubble Kit"],
			expectedOutcome: "Consistent two-step instruction comprehension."
		},
		notes: {
			objectives: "Improve comprehension of multi-step verbal instructions.",
			activitiesPerformed: "Instruction following circuit, object identification, listening game.",
			patientResponse: "Followed 7 of 10 instructions without cues.",
			behavior: "Arrived late but settled quickly and stayed engaged.",
			homework: "Two-step instruction practice during evening routines.",
			recommendations: "Fade visual cues gradually over the next three sessions.",
			therapistNotes: "Attendance timing should be discussed with the guardian."
		},
		progressSkills: skills([
			46,
			52,
			38,
			42,
			40,
			48
		]),
		group: null,
		timeline: timeline("2026-06-15", "2026-06-22", "2026-06-29", "2026-07-31", "2026-08-19")
	},
	{
		id: "ths-1011",
		code: "THS-2026-1011",
		patientId: "rahim-ahmed",
		patientName: "Rahim Ahmed",
		patientCode: "PT-DHK-1001",
		patientAge: 7,
		patientGender: "Male",
		guardianName: "Md. Karim Ahmed",
		guardianPhone: "+880 1711-458920",
		branch: "Dhaka Main Branch",
		mode: "Individual Therapy",
		program: "Occupational Therapy",
		sessionNumber: 8,
		totalSessions: 12,
		sessionDate: "2026-07-24",
		startTime: "17:00",
		endTime: "17:45",
		room: "Room 305 — OT Gym",
		therapist: "Sadia Afrin",
		equipment: ["Therapy Ball", "Sensory Swing"],
		status: "Completed",
		attendance: "Present",
		progress: 66,
		diagnosis: "Articulation disorder (provisional)",
		assessmentSummary: "Coordination difficulties impacting handwriting endurance at school.",
		therapyPlan: "Weekly occupational therapy alongside the running speech programme.",
		packageName: "Monthly Standard — 12 Sessions",
		packageSessionsUsed: 8,
		packageSessionsTotal: 12,
		createdAt: "2026-07-17T16:00:00",
		goals: {
			sessionGoal: "Sustain a tripod grip for a 10-minute writing task.",
			targetSkills: ["Attention"],
			activities: [
				"Grip strengthening",
				"Writing endurance",
				"Core stability circuit"
			],
			materials: ["Therapy Ball"],
			expectedOutcome: "Ten minutes of continuous legible writing."
		},
		notes: {
			objectives: "Improve grip endurance and postural stability.",
			activitiesPerformed: "Putty grip work, 10-minute writing task, core circuit.",
			patientResponse: "Sustained the grip for 9 minutes before fatigue.",
			behavior: "Motivated, requested to repeat the circuit.",
			homework: "Daily putty exercises for 5 minutes.",
			recommendations: "Add a slanted writing board at school.",
			therapistNotes: "Coordinate goals with the speech therapist for combined reporting."
		},
		progressSkills: skills([
			64,
			70,
			60,
			66,
			62,
			72
		]),
		group: null,
		timeline: timeline("2026-05-12", "2026-05-19", "2026-05-26", "2026-07-24", "2026-08-14")
	},
	{
		id: "ths-1012",
		code: "THS-2026-1012",
		patientId: "ayesha-akter",
		patientName: "Ayesha Akter",
		patientCode: "PT-DHK-1002",
		patientAge: 5,
		patientGender: "Female",
		guardianName: "Shamima Begum",
		guardianPhone: "+880 1819-772140",
		branch: "Dhaka Main Branch",
		mode: "Group Therapy",
		program: "Autism Therapy",
		sessionNumber: 3,
		totalSessions: 16,
		sessionDate: "2026-08-06",
		startTime: "11:00",
		endTime: "12:00",
		room: "Room 204 — Group Hall",
		therapist: "Nusrat Jahan Mim",
		equipment: ["Bubble Kit", "PECS Communication Board"],
		status: "Scheduled",
		attendance: "Rescheduled",
		progress: 32,
		diagnosis: "Expressive language delay (provisional)",
		assessmentSummary: "Reduced peer engagement and limited spontaneous social greetings.",
		therapyPlan: "Weekly social skills group with parallel individual language therapy.",
		packageName: "Session Wise — Pay per visit",
		packageSessionsUsed: 3,
		packageSessionsTotal: 16,
		createdAt: "2026-07-31T09:00:00",
		goals: {
			sessionGoal: "Greet three peers independently at circle time.",
			targetSkills: ["Social Interaction", "Communication"],
			activities: [
				"Greeting circle",
				"Shared play",
				"Group song"
			],
			materials: ["Bubble Kit", "PECS Communication Board"],
			expectedOutcome: "Three independent peer greetings."
		},
		notes: {
			objectives: "Build independent social greetings within the peer group.",
			activitiesPerformed: "Greeting circle, shared bubble play, closing song.",
			patientResponse: "Two independent greetings with one prompted.",
			behavior: "Initially hesitant, participated fully after the first activity.",
			homework: "Practise greetings with family members daily.",
			recommendations: "Pair with a familiar peer to raise confidence.",
			therapistNotes: "Progressing steadily in the group format."
		},
		progressSkills: skills([
			34,
			30,
			28,
			38,
			32,
			36
		]),
		group: {
			groupName: "Social Stars — Group C",
			sessionTopic: "Greeting peers and shared play",
			totalChildren: 4,
			present: 3,
			absent: 1,
			activities: [
				"Greeting circle",
				"Shared bubble play",
				"Group song",
				"Goodbye routine"
			],
			remarks: "Calm group energy. One child rescheduled to the evening batch.",
			members: [
				{
					id: "ayesha-akter",
					name: "Ayesha Akter",
					patientCode: "PT-DHK-1002",
					age: 5,
					attendance: "Present"
				},
				{
					id: "nusrat-jahan",
					name: "Nusrat Jahan",
					patientCode: "PT-CTG-1004",
					age: 4,
					attendance: "Present"
				},
				{
					id: "samiha-chowdhury",
					name: "Samiha Chowdhury",
					patientCode: "PT-SYL-1006",
					age: 6,
					attendance: "Present"
				},
				{
					id: "tahsin-rahman",
					name: "Tahsin Rahman",
					patientCode: "PT-DHK-1005",
					age: 11,
					attendance: "Absent"
				}
			]
		},
		timeline: timeline("2026-06-02", "2026-06-09", "2026-06-16", "2026-08-06", "2026-08-27")
	}
];
Array.from(new Set(THERAPY_SESSIONS.map((session) => session.branch))).sort();
function isToday(date) {
	return new Date(date).toDateString() === (/* @__PURE__ */ new Date(TODAY_ISO)).toDateString();
}
function isUpcoming(date) {
	return new Date(date).getTime() > (/* @__PURE__ */ new Date(TODAY_ISO)).getTime();
}
var countBy = (predicate) => String(THERAPY_SESSIONS.filter(predicate).length);
var THERAPY_KPIS = [
	{
		id: "today",
		label: "Today's Sessions",
		value: countBy((session) => isToday(session.sessionDate)),
		icon: CalendarCheck,
		tone: "primary",
		hint: "Across all therapy rooms",
		delta: {
			value: "+2 vs yesterday",
			direction: "up"
		}
	},
	{
		id: "individual",
		label: "Individual Therapy",
		value: countBy((session) => session.mode === "Individual Therapy"),
		icon: UserRound,
		tone: "primary",
		hint: "One-to-one sessions",
		delta: {
			value: "+6 this month",
			direction: "up"
		}
	},
	{
		id: "group",
		label: "Group Therapy",
		value: countBy((session) => session.mode === "Group Therapy"),
		icon: Users,
		tone: "primary",
		hint: "Small group batches",
		delta: {
			value: "+1 this month",
			direction: "up"
		}
	},
	{
		id: "completed",
		label: "Completed Sessions",
		value: countBy((session) => session.status === "Completed"),
		icon: CircleCheck,
		tone: "success",
		hint: "Notes signed off",
		delta: {
			value: "+8 this month",
			direction: "up"
		}
	},
	{
		id: "ongoing",
		label: "Ongoing Sessions",
		value: countBy((session) => session.status === "Ongoing"),
		icon: CirclePlay,
		tone: "warning",
		hint: "Running right now",
		delta: {
			value: "Live",
			direction: "flat"
		}
	},
	{
		id: "cancelled",
		label: "Cancelled Sessions",
		value: countBy((session) => session.status === "Cancelled" || session.status === "Missed"),
		icon: CircleX,
		tone: "danger",
		hint: "Cancelled or missed",
		delta: {
			value: "-1 this week",
			direction: "down"
		}
	},
	{
		id: "upcoming",
		label: "Upcoming Sessions",
		value: countBy((session) => isUpcoming(session.sessionDate)),
		icon: CalendarClock,
		tone: "primary",
		hint: "Next 7 days",
		delta: {
			value: "+3 booked",
			direction: "up"
		}
	},
	{
		id: "monthly",
		label: "Monthly Sessions",
		value: String(THERAPY_SESSIONS.length),
		icon: CalendarRange,
		tone: "success",
		hint: "July 2026 total",
		delta: {
			value: "+14%",
			direction: "up"
		}
	}
];
function findTherapySession(id) {
	return THERAPY_SESSIONS.find((session) => session.id === id || session.code.toLowerCase() === id.toLowerCase());
}
function averageProgress(sessionSkills) {
	if (sessionSkills.length === 0) return 0;
	const total = sessionSkills.reduce((sum, skill) => sum + skill.value, 0);
	return Math.round(total / sessionSkills.length);
}
function formatTimeRange(start, end) {
	return `${start} – ${end}`;
}
//#endregion
export { THERAPY_EQUIPMENT as a, THERAPY_PROGRAMS as c, THERAPY_STATUSES as d, THERAPY_STATUS_TONE as f, formatTimeRange as g, findTherapySession as h, THERAPY_DATE_RANGES as i, THERAPY_ROOMS as l, averageProgress as m, SESSION_GOAL_SKILLS as n, THERAPY_KPIS as o, TODAY_ISO as p, THERAPISTS as r, THERAPY_MODES as s, ATTENDANCE_TONE as t, THERAPY_SESSIONS as u };
