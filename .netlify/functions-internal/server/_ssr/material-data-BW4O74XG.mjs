import { A as ShoppingCart, Cn as Boxes, Et as Layers, a as Wallet, b as TrendingUp, ot as PackageCheck, rt as PackageX, y as TriangleAlert } from "../_libs/lucide-react.mjs";
import { f as formatTaka } from "./dashboard-data-1VKY94pa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/material-data-BW4O74XG.js
/**
* Static demo data for the Materials & Sales (inventory) module.
* Frontend only — the Django REST API will own these payloads later.
* All money values are Bangladeshi Taka (BDT).
*/
var MATERIALS_TODAY_ISO = "2026-07-31";
var MATERIAL_STATUSES = [
	"Available",
	"Low Stock",
	"Out of Stock",
	"Inactive"
];
var MATERIAL_STATUS_TONE = {
	Available: "success",
	"Low Stock": "warning",
	"Out of Stock": "danger",
	Inactive: "neutral"
};
var MATERIAL_CATEGORIES = [
	{
		id: "speech-cards",
		name: "Speech Cards",
		description: "Articulation and phoneme drill card decks",
		icon: "cards",
		tone: "info",
		itemCount: 3,
		stockUnits: 118,
		value: 62400
	},
	{
		id: "flash-cards",
		name: "Flash Cards",
		description: "Vocabulary and category building flash sets",
		icon: "flash",
		tone: "warning",
		itemCount: 2,
		stockUnits: 74,
		value: 33800
	},
	{
		id: "picture-books",
		name: "Picture Books",
		description: "Narrative and sequencing picture story books",
		icon: "book",
		tone: "success",
		itemCount: 2,
		stockUnits: 46,
		value: 27600
	},
	{
		id: "puzzle-toys",
		name: "Puzzle Toys",
		description: "Fine motor and problem solving puzzle sets",
		icon: "puzzle",
		tone: "info",
		itemCount: 2,
		stockUnits: 38,
		value: 41200
	},
	{
		id: "sensory-toys",
		name: "Sensory Toys",
		description: "Tactile, oral-motor and calming sensory tools",
		icon: "sensory",
		tone: "danger",
		itemCount: 2,
		stockUnits: 22,
		value: 29500
	},
	{
		id: "alphabet-cards",
		name: "Alphabet Cards",
		description: "Bangla and English letter recognition cards",
		icon: "alphabet",
		tone: "warning",
		itemCount: 1,
		stockUnits: 64,
		value: 19200
	},
	{
		id: "educational-books",
		name: "Educational Books",
		description: "Parent guides and home practice workbooks",
		icon: "library",
		tone: "neutral",
		itemCount: 1,
		stockUnits: 30,
		value: 15e3
	},
	{
		id: "therapy-mirror",
		name: "Therapy Mirror",
		description: "Articulation mirrors and oral-motor equipment",
		icon: "mirror",
		tone: "success",
		itemCount: 1,
		stockUnits: 9,
		value: 25200
	}
];
var MATERIAL_CATEGORY_NAMES = MATERIAL_CATEGORIES.map((category) => category.name);
var MATERIAL_UNITS = [
	"Piece",
	"Set",
	"Box",
	"Pack",
	"Dozen"
];
var STORAGE_LOCATIONS = [
	"Rack A — Shelf 1",
	"Rack A — Shelf 2",
	"Rack B — Shelf 1",
	"Rack B — Shelf 3",
	"Therapy Room 2 Cabinet",
	"Store Room — Dhaka Main"
];
var MATERIAL_BRANCHES = [
	"Dhaka Main Branch",
	"Chattogram Branch",
	"Sylhet Branch",
	"Khulna Branch"
];
var MATERIALS = [
	{
		id: "articulation-card-deck",
		code: "MAT-DHK-1001",
		name: "Articulation Card Deck (Bangla)",
		category: "Speech Cards",
		brand: "Shikkha Tools",
		description: "144-card Bangla articulation deck covering initial, medial and final phoneme positions.",
		unit: "Set",
		purchasePrice: 620,
		sellingPrice: 950,
		quantity: 48,
		minStock: 15,
		location: "Rack A — Shelf 1",
		branch: "Dhaka Main Branch",
		supplier: {
			name: "Shikkha Learning Supplies",
			phone: "+880 1711-458920",
			email: "sales@shikkhasupplies.com.bd",
			address: "House 41, Road 7, Dhanmondi, Dhaka 1205"
		},
		status: "Available",
		addedOn: "2025-11-12",
		lastRestocked: "2026-07-14",
		unitsSold: 132,
		salesValue: 125400
	},
	{
		id: "phoneme-practice-cards",
		code: "MAT-DHK-1002",
		name: "Phoneme Practice Cards",
		category: "Speech Cards",
		brand: "SpeechPro BD",
		description: "Minimal pair phoneme practice cards for /r/, /s/, /sh/ and /l/ drills.",
		unit: "Pack",
		purchasePrice: 380,
		sellingPrice: 600,
		quantity: 12,
		minStock: 20,
		location: "Rack A — Shelf 1",
		branch: "Dhaka Main Branch",
		supplier: {
			name: "SpeechPro Bangladesh",
			phone: "+880 1819-772341",
			email: "info@speechprobd.com",
			address: "Level 4, Mirpur DOHS, Dhaka 1216"
		},
		status: "Low Stock",
		addedOn: "2025-12-02",
		lastRestocked: "2026-06-28",
		unitsSold: 96,
		salesValue: 57600
	},
	{
		id: "sentence-builder-cards",
		code: "MAT-DHK-1003",
		name: "Sentence Builder Cards",
		category: "Speech Cards",
		brand: "Shikkha Tools",
		description: "Colour coded cards for building 3–6 word sentences with visual prompts.",
		unit: "Set",
		purchasePrice: 540,
		sellingPrice: 820,
		quantity: 58,
		minStock: 18,
		location: "Rack A — Shelf 2",
		branch: "Dhaka Main Branch",
		supplier: {
			name: "Shikkha Learning Supplies",
			phone: "+880 1711-458920",
			email: "sales@shikkhasupplies.com.bd",
			address: "House 41, Road 7, Dhanmondi, Dhaka 1205"
		},
		status: "Available",
		addedOn: "2026-01-08",
		lastRestocked: "2026-07-21",
		unitsSold: 74,
		salesValue: 60680
	},
	{
		id: "vocabulary-flash-cards",
		code: "MAT-DHK-1004",
		name: "Vocabulary Flash Cards (200 pcs)",
		category: "Flash Cards",
		brand: "Little Learners",
		description: "Everyday vocabulary flash cards in Bangla and English with real photographs.",
		unit: "Box",
		purchasePrice: 450,
		sellingPrice: 700,
		quantity: 62,
		minStock: 20,
		location: "Rack A — Shelf 2",
		branch: "Dhaka Main Branch",
		supplier: {
			name: "Little Learners Trading",
			phone: "+880 1755-201884",
			email: "orders@littlelearners.com.bd",
			address: "Shop 22, New Market, Dhaka 1205"
		},
		status: "Available",
		addedOn: "2025-10-19",
		lastRestocked: "2026-07-09",
		unitsSold: 148,
		salesValue: 103600
	},
	{
		id: "category-sorting-flash-cards",
		code: "MAT-CTG-1005",
		name: "Category Sorting Flash Cards",
		category: "Flash Cards",
		brand: "Little Learners",
		description: "Semantic category sorting cards — food, animals, transport, clothing.",
		unit: "Pack",
		purchasePrice: 340,
		sellingPrice: 520,
		quantity: 12,
		minStock: 15,
		location: "Rack B — Shelf 1",
		branch: "Chattogram Branch",
		supplier: {
			name: "Little Learners Trading",
			phone: "+880 1755-201884",
			email: "orders@littlelearners.com.bd",
			address: "Shop 22, New Market, Dhaka 1205"
		},
		status: "Low Stock",
		addedOn: "2026-02-15",
		lastRestocked: "2026-06-30",
		unitsSold: 61,
		salesValue: 31720
	},
	{
		id: "story-sequencing-book",
		code: "MAT-DHK-1006",
		name: "Story Sequencing Picture Book",
		category: "Picture Books",
		brand: "Ananda Prokashoni",
		description: "Four-step story sequencing book for narrative and expressive language work.",
		unit: "Piece",
		purchasePrice: 380,
		sellingPrice: 620,
		quantity: 26,
		minStock: 10,
		location: "Rack B — Shelf 1",
		branch: "Dhaka Main Branch",
		supplier: {
			name: "Ananda Prokashoni",
			phone: "+880 1911-664520",
			email: "trade@anandaprokashoni.com",
			address: "38 Bangla Bazar, Dhaka 1100"
		},
		status: "Available",
		addedOn: "2025-09-27",
		lastRestocked: "2026-07-02",
		unitsSold: 88,
		salesValue: 54560
	},
	{
		id: "first-words-picture-book",
		code: "MAT-DHK-1007",
		name: "First Words Picture Book",
		category: "Picture Books",
		brand: "Ananda Prokashoni",
		description: "Early lexicon picture book with 120 first words for toddlers.",
		unit: "Piece",
		purchasePrice: 300,
		sellingPrice: 480,
		quantity: 20,
		minStock: 12,
		location: "Rack B — Shelf 1",
		branch: "Dhaka Main Branch",
		supplier: {
			name: "Ananda Prokashoni",
			phone: "+880 1911-664520",
			email: "trade@anandaprokashoni.com",
			address: "38 Bangla Bazar, Dhaka 1100"
		},
		status: "Available",
		addedOn: "2026-03-04",
		lastRestocked: "2026-07-18",
		unitsSold: 52,
		salesValue: 24960
	},
	{
		id: "wooden-shape-puzzle",
		code: "MAT-DHK-1008",
		name: "Wooden Shape Puzzle Board",
		category: "Puzzle Toys",
		brand: "Kathpencil Toys",
		description: "Chunky wooden shape puzzle for fine motor and turn-taking activities.",
		unit: "Piece",
		purchasePrice: 720,
		sellingPrice: 1150,
		quantity: 24,
		minStock: 8,
		location: "Rack B — Shelf 3",
		branch: "Dhaka Main Branch",
		supplier: {
			name: "Kathpencil Toys Ltd.",
			phone: "+880 1730-889014",
			email: "b2b@kathpenciltoys.com",
			address: "Plot 9, BSCIC Estate, Gazipur 1704"
		},
		status: "Available",
		addedOn: "2025-08-30",
		lastRestocked: "2026-06-22",
		unitsSold: 67,
		salesValue: 77050
	},
	{
		id: "matching-puzzle-set",
		code: "MAT-SYL-1009",
		name: "Picture Matching Puzzle Set",
		category: "Puzzle Toys",
		brand: "Kathpencil Toys",
		description: "24-pair matching puzzle set used in receptive language sessions.",
		unit: "Set",
		purchasePrice: 860,
		sellingPrice: 1350,
		quantity: 14,
		minStock: 6,
		location: "Therapy Room 2 Cabinet",
		branch: "Sylhet Branch",
		supplier: {
			name: "Kathpencil Toys Ltd.",
			phone: "+880 1730-889014",
			email: "b2b@kathpenciltoys.com",
			address: "Plot 9, BSCIC Estate, Gazipur 1704"
		},
		status: "Available",
		addedOn: "2026-01-25",
		lastRestocked: "2026-07-11",
		unitsSold: 33,
		salesValue: 44550
	},
	{
		id: "chewy-oral-motor-tool",
		code: "MAT-DHK-1010",
		name: "Chewy Oral-Motor Tool",
		category: "Sensory Toys",
		brand: "SensoryCare",
		description: "Food-grade silicone chewy tool for oral-motor strengthening programmes.",
		unit: "Piece",
		purchasePrice: 480,
		sellingPrice: 780,
		quantity: 0,
		minStock: 10,
		location: "Therapy Room 2 Cabinet",
		branch: "Dhaka Main Branch",
		supplier: {
			name: "SensoryCare Imports",
			phone: "+880 1622-450981",
			email: "support@sensorycarebd.com",
			address: "Road 12, Banani, Dhaka 1213"
		},
		status: "Out of Stock",
		addedOn: "2025-11-05",
		lastRestocked: "2026-05-19",
		unitsSold: 104,
		salesValue: 81120
	},
	{
		id: "tactile-sensory-balls",
		code: "MAT-DHK-1011",
		name: "Tactile Sensory Ball Pack",
		category: "Sensory Toys",
		brand: "SensoryCare",
		description: "Six textured balls used for calming routines and sensory regulation.",
		unit: "Pack",
		purchasePrice: 640,
		sellingPrice: 990,
		quantity: 22,
		minStock: 8,
		location: "Rack B — Shelf 3",
		branch: "Dhaka Main Branch",
		supplier: {
			name: "SensoryCare Imports",
			phone: "+880 1622-450981",
			email: "support@sensorycarebd.com",
			address: "Road 12, Banani, Dhaka 1213"
		},
		status: "Available",
		addedOn: "2026-02-02",
		lastRestocked: "2026-07-25",
		unitsSold: 41,
		salesValue: 40590
	},
	{
		id: "bangla-alphabet-cards",
		code: "MAT-DHK-1012",
		name: "Bangla Alphabet Cards",
		category: "Alphabet Cards",
		brand: "Shikkha Tools",
		description: "Laminated Bangla alphabet cards with tracing guides on the reverse.",
		unit: "Set",
		purchasePrice: 260,
		sellingPrice: 420,
		quantity: 64,
		minStock: 20,
		location: "Rack A — Shelf 2",
		branch: "Dhaka Main Branch",
		supplier: {
			name: "Shikkha Learning Supplies",
			phone: "+880 1711-458920",
			email: "sales@shikkhasupplies.com.bd",
			address: "House 41, Road 7, Dhanmondi, Dhaka 1205"
		},
		status: "Available",
		addedOn: "2025-07-16",
		lastRestocked: "2026-07-27",
		unitsSold: 176,
		salesValue: 73920
	},
	{
		id: "home-practice-workbook",
		code: "MAT-KHL-1013",
		name: "Home Practice Workbook (Parents)",
		category: "Educational Books",
		brand: "Therapy Press BD",
		description: "Weekly home programme workbook for guardians with printable trackers.",
		unit: "Piece",
		purchasePrice: 320,
		sellingPrice: 500,
		quantity: 30,
		minStock: 12,
		location: "Store Room — Dhaka Main",
		branch: "Khulna Branch",
		supplier: {
			name: "Therapy Press Bangladesh",
			phone: "+880 1580-114763",
			email: "hello@therapypress.com.bd",
			address: "Sonadanga R/A, Khulna 9100"
		},
		status: "Available",
		addedOn: "2026-04-11",
		lastRestocked: "2026-07-05",
		unitsSold: 58,
		salesValue: 29e3
	},
	{
		id: "articulation-therapy-mirror",
		code: "MAT-DHK-1014",
		name: "Articulation Therapy Mirror",
		category: "Therapy Mirror",
		brand: "MedEquip BD",
		description: "Shatterproof table-top articulation mirror with adjustable stand.",
		unit: "Piece",
		purchasePrice: 1850,
		sellingPrice: 2800,
		quantity: 9,
		minStock: 4,
		location: "Store Room — Dhaka Main",
		branch: "Dhaka Main Branch",
		supplier: {
			name: "MedEquip Bangladesh",
			phone: "+880 1799-330277",
			email: "sales@medequipbd.com",
			address: "Elephant Road, Dhaka 1205"
		},
		status: "Available",
		addedOn: "2025-06-21",
		lastRestocked: "2026-06-14",
		unitsSold: 26,
		salesValue: 72800
	},
	{
		id: "mirror-training-kit",
		code: "MAT-DHK-1015",
		name: "Mirror Training Kit (Legacy)",
		category: "Therapy Mirror",
		brand: "MedEquip BD",
		description: "Discontinued mirror kit retained for reference — no longer sold.",
		unit: "Set",
		purchasePrice: 1400,
		sellingPrice: 2100,
		quantity: 3,
		minStock: 4,
		location: "Store Room — Dhaka Main",
		branch: "Dhaka Main Branch",
		supplier: {
			name: "MedEquip Bangladesh",
			phone: "+880 1799-330277",
			email: "sales@medequipbd.com",
			address: "Elephant Road, Dhaka 1205"
		},
		status: "Inactive",
		addedOn: "2024-12-09",
		lastRestocked: "2025-11-30",
		unitsSold: 18,
		salesValue: 37800
	}
];
function getMaterial(id) {
	return MATERIALS.find((material) => material.id === id);
}
var SALE_PAYMENT_STATUSES = [
	"Paid",
	"Partial",
	"Due",
	"Refunded"
];
var SALE_STATUS_TONE = {
	Paid: "success",
	Partial: "warning",
	Due: "danger",
	Refunded: "neutral"
};
var PAYMENT_METHODS = [
	"Cash",
	"Card",
	"Mobile Banking",
	"Bank"
];
function totalOf(quantity, unitPrice, discount) {
	return quantity * unitPrice - discount;
}
var SALES = [
	{
		id: "sale-2001",
		invoiceNo: "INV-2026-2001",
		customerName: "Md. Karim Ahmed",
		customerPhone: "+880 1711-458920",
		relation: "Guardian of Rahim Ahmed",
		materialId: "articulation-card-deck",
		materialName: "Articulation Card Deck (Bangla)",
		materialCode: "MAT-DHK-1001",
		quantity: 2,
		unitPrice: 950,
		discount: 100,
		total: totalOf(2, 950, 100),
		status: "Paid",
		method: "Cash",
		date: "2026-07-31",
		soldBy: "Nusrat Jahan (Manager)",
		remarks: "Home practice set advised by therapist."
	},
	{
		id: "sale-2002",
		invoiceNo: "INV-2026-2002",
		customerName: "Shahnaz Parvin",
		customerPhone: "+880 1819-772341",
		relation: "Guardian of Ayesha Akter",
		materialId: "vocabulary-flash-cards",
		materialName: "Vocabulary Flash Cards (200 pcs)",
		materialCode: "MAT-DHK-1004",
		quantity: 1,
		unitPrice: 700,
		discount: 0,
		total: totalOf(1, 700, 0),
		status: "Paid",
		method: "Mobile Banking",
		date: "2026-07-31",
		soldBy: "Tanjila Rahman (Front Desk)",
		remarks: "bKash payment received in full."
	},
	{
		id: "sale-2003",
		invoiceNo: "INV-2026-2003",
		customerName: "Abdul Mannan",
		customerPhone: "+880 1755-201884",
		relation: "Guardian of Mahin Hasan",
		materialId: "wooden-shape-puzzle",
		materialName: "Wooden Shape Puzzle Board",
		materialCode: "MAT-DHK-1008",
		quantity: 1,
		unitPrice: 1150,
		discount: 150,
		total: totalOf(1, 1150, 150),
		status: "Partial",
		method: "Cash",
		date: "2026-07-30",
		soldBy: "Nusrat Jahan (Manager)",
		remarks: "৳ 500 paid now, remainder on next visit."
	},
	{
		id: "sale-2004",
		invoiceNo: "INV-2026-2004",
		customerName: "Rokeya Sultana",
		customerPhone: "+880 1911-664520",
		relation: "Guardian of Nusrat Jahan (patient)",
		materialId: "bangla-alphabet-cards",
		materialName: "Bangla Alphabet Cards",
		materialCode: "MAT-DHK-1012",
		quantity: 3,
		unitPrice: 420,
		discount: 60,
		total: totalOf(3, 420, 60),
		status: "Paid",
		method: "Card",
		date: "2026-07-30",
		soldBy: "Tanjila Rahman (Front Desk)",
		remarks: "Bulk purchase for sibling practice."
	},
	{
		id: "sale-2005",
		invoiceNo: "INV-2026-2005",
		customerName: "Mahmuda Rahman",
		customerPhone: "+880 1730-889014",
		relation: "Guardian of Tahsin Rahman",
		materialId: "chewy-oral-motor-tool",
		materialName: "Chewy Oral-Motor Tool",
		materialCode: "MAT-DHK-1010",
		quantity: 2,
		unitPrice: 780,
		discount: 0,
		total: totalOf(2, 780, 0),
		status: "Paid",
		method: "Cash",
		date: "2026-07-29",
		soldBy: "Nusaiba Kabir (Therapist)",
		remarks: "Last two units — restock required."
	},
	{
		id: "sale-2006",
		invoiceNo: "INV-2026-2006",
		customerName: "Kamrul Chowdhury",
		customerPhone: "+880 1622-450981",
		relation: "Guardian of Samiha Chowdhury",
		materialId: "story-sequencing-book",
		materialName: "Story Sequencing Picture Book",
		materialCode: "MAT-DHK-1006",
		quantity: 1,
		unitPrice: 620,
		discount: 0,
		total: totalOf(1, 620, 0),
		status: "Due",
		method: "Cash",
		date: "2026-07-28",
		soldBy: "Tanjila Rahman (Front Desk)",
		remarks: "Payment promised with next therapy fee."
	},
	{
		id: "sale-2007",
		invoiceNo: "INV-2026-2007",
		customerName: "Jahanara Begum",
		customerPhone: "+880 1799-330277",
		relation: "Guardian of Arafat Hossain",
		materialId: "tactile-sensory-balls",
		materialName: "Tactile Sensory Ball Pack",
		materialCode: "MAT-DHK-1011",
		quantity: 1,
		unitPrice: 990,
		discount: 90,
		total: totalOf(1, 990, 90),
		status: "Paid",
		method: "Mobile Banking",
		date: "2026-07-27",
		soldBy: "Nusrat Jahan (Manager)",
		remarks: "Nagad payment, receipt printed."
	},
	{
		id: "sale-2008",
		invoiceNo: "INV-2026-2008",
		customerName: "Anwar Hossain",
		customerPhone: "+880 1580-114763",
		relation: "Guardian of Farhana Islam",
		materialId: "home-practice-workbook",
		materialName: "Home Practice Workbook (Parents)",
		materialCode: "MAT-KHL-1013",
		quantity: 2,
		unitPrice: 500,
		discount: 50,
		total: totalOf(2, 500, 50),
		status: "Paid",
		method: "Bank",
		date: "2026-07-26",
		soldBy: "Tanjila Rahman (Front Desk)",
		remarks: "Bank transfer — Islami Bank, Khulna."
	},
	{
		id: "sale-2009",
		invoiceNo: "INV-2026-2009",
		customerName: "Shamsul Alam",
		customerPhone: "+880 1712-908455",
		relation: "School procurement — Alokito Shishu",
		materialId: "sentence-builder-cards",
		materialName: "Sentence Builder Cards",
		materialCode: "MAT-DHK-1003",
		quantity: 5,
		unitPrice: 820,
		discount: 400,
		total: totalOf(5, 820, 400),
		status: "Partial",
		method: "Bank",
		date: "2026-07-24",
		soldBy: "Nusrat Jahan (Manager)",
		remarks: "Institutional order — 50% advance received."
	},
	{
		id: "sale-2010",
		invoiceNo: "INV-2026-2010",
		customerName: "Farida Yasmin",
		customerPhone: "+880 1677-221093",
		relation: "Guardian of Tanvir Islam",
		materialId: "articulation-therapy-mirror",
		materialName: "Articulation Therapy Mirror",
		materialCode: "MAT-DHK-1014",
		quantity: 1,
		unitPrice: 2800,
		discount: 200,
		total: totalOf(1, 2800, 200),
		status: "Paid",
		method: "Card",
		date: "2026-07-22",
		soldBy: "Nusaiba Kabir (Therapist)",
		remarks: "Home setup for daily articulation drills."
	},
	{
		id: "sale-2011",
		invoiceNo: "INV-2026-2011",
		customerName: "Rubel Mia",
		customerPhone: "+880 1856-774120",
		relation: "Guardian of Zarif Mia",
		materialId: "phoneme-practice-cards",
		materialName: "Phoneme Practice Cards",
		materialCode: "MAT-DHK-1002",
		quantity: 1,
		unitPrice: 600,
		discount: 0,
		total: totalOf(1, 600, 0),
		status: "Refunded",
		method: "Cash",
		date: "2026-07-20",
		soldBy: "Tanjila Rahman (Front Desk)",
		remarks: "Damaged pack returned and refunded."
	},
	{
		id: "sale-2012",
		invoiceNo: "INV-2026-2012",
		customerName: "Sabina Yeasmin",
		customerPhone: "+880 1935-668401",
		relation: "Guardian of Ishrat Jahan",
		materialId: "first-words-picture-book",
		materialName: "First Words Picture Book",
		materialCode: "MAT-DHK-1007",
		quantity: 2,
		unitPrice: 480,
		discount: 60,
		total: totalOf(2, 480, 60),
		status: "Paid",
		method: "Mobile Banking",
		date: "2026-07-18",
		soldBy: "Nusrat Jahan (Manager)",
		remarks: "Rocket payment confirmed."
	}
];
function salesForMaterial(materialId) {
	return SALES.filter((sale) => sale.materialId === materialId);
}
var MOVEMENT_TYPES = [
	"Stock In",
	"Stock Out",
	"Adjustment",
	"Sale",
	"Damaged"
];
var MOVEMENT_TONE = {
	"Stock In": "success",
	"Stock Out": "warning",
	Adjustment: "info",
	Sale: "info",
	Damaged: "danger"
};
/** Serializable icon keys for the movement timeline. */
var MOVEMENT_ICON = {
	"Stock In": "in",
	"Stock Out": "out",
	Adjustment: "adjust",
	Sale: "sale",
	Damaged: "damaged"
};
var STOCK_MOVEMENTS = [
	{
		id: "mv-3001",
		materialId: "bangla-alphabet-cards",
		materialName: "Bangla Alphabet Cards",
		materialCode: "MAT-DHK-1012",
		type: "Stock In",
		quantity: 40,
		balance: 64,
		reference: "PO-2026-0148",
		by: "Nusrat Jahan (Manager)",
		note: "Quarterly restock from Shikkha Learning Supplies.",
		date: "2026-07-27"
	},
	{
		id: "mv-3002",
		materialId: "tactile-sensory-balls",
		materialName: "Tactile Sensory Ball Pack",
		materialCode: "MAT-DHK-1011",
		type: "Stock In",
		quantity: 15,
		balance: 23,
		reference: "PO-2026-0146",
		by: "Nusrat Jahan (Manager)",
		note: "Received from SensoryCare Imports.",
		date: "2026-07-25"
	},
	{
		id: "mv-3003",
		materialId: "tactile-sensory-balls",
		materialName: "Tactile Sensory Ball Pack",
		materialCode: "MAT-DHK-1011",
		type: "Sale",
		quantity: -1,
		balance: 22,
		reference: "INV-2026-2007",
		by: "Nusrat Jahan (Manager)",
		note: "Sold to guardian of Arafat Hossain.",
		date: "2026-07-27"
	},
	{
		id: "mv-3004",
		materialId: "sentence-builder-cards",
		materialName: "Sentence Builder Cards",
		materialCode: "MAT-DHK-1003",
		type: "Sale",
		quantity: -5,
		balance: 58,
		reference: "INV-2026-2009",
		by: "Nusrat Jahan (Manager)",
		note: "Institutional order — Alokito Shishu School.",
		date: "2026-07-24"
	},
	{
		id: "mv-3005",
		materialId: "chewy-oral-motor-tool",
		materialName: "Chewy Oral-Motor Tool",
		materialCode: "MAT-DHK-1010",
		type: "Sale",
		quantity: -2,
		balance: 0,
		reference: "INV-2026-2005",
		by: "Nusaiba Kabir (Therapist)",
		note: "Stock exhausted — reorder raised with supplier.",
		date: "2026-07-29"
	},
	{
		id: "mv-3006",
		materialId: "phoneme-practice-cards",
		materialName: "Phoneme Practice Cards",
		materialCode: "MAT-DHK-1002",
		type: "Damaged",
		quantity: -3,
		balance: 12,
		reference: "DMG-2026-0031",
		by: "Tanjila Rahman (Front Desk)",
		note: "Water damage in store room during monsoon leak.",
		date: "2026-07-23"
	},
	{
		id: "mv-3007",
		materialId: "wooden-shape-puzzle",
		materialName: "Wooden Shape Puzzle Board",
		materialCode: "MAT-DHK-1008",
		type: "Stock Out",
		quantity: -4,
		balance: 24,
		reference: "TRF-2026-0019",
		by: "Nusrat Jahan (Manager)",
		note: "Transferred to Chattogram Branch therapy room.",
		date: "2026-07-21"
	},
	{
		id: "mv-3008",
		materialId: "vocabulary-flash-cards",
		materialName: "Vocabulary Flash Cards (200 pcs)",
		materialCode: "MAT-DHK-1004",
		type: "Adjustment",
		quantity: 2,
		balance: 62,
		reference: "ADJ-2026-0012",
		by: "Nusrat Jahan (Manager)",
		note: "Physical count correction after monthly audit.",
		date: "2026-07-19"
	},
	{
		id: "mv-3009",
		materialId: "articulation-card-deck",
		materialName: "Articulation Card Deck (Bangla)",
		materialCode: "MAT-DHK-1001",
		type: "Stock In",
		quantity: 30,
		balance: 50,
		reference: "PO-2026-0141",
		by: "Nusrat Jahan (Manager)",
		note: "Restocked ahead of the school admission season.",
		date: "2026-07-14"
	},
	{
		id: "mv-3010",
		materialId: "articulation-card-deck",
		materialName: "Articulation Card Deck (Bangla)",
		materialCode: "MAT-DHK-1001",
		type: "Sale",
		quantity: -2,
		balance: 48,
		reference: "INV-2026-2001",
		by: "Nusrat Jahan (Manager)",
		note: "Sold to guardian of Rahim Ahmed.",
		date: "2026-07-31"
	},
	{
		id: "mv-3011",
		materialId: "first-words-picture-book",
		materialName: "First Words Picture Book",
		materialCode: "MAT-DHK-1007",
		type: "Stock In",
		quantity: 25,
		balance: 22,
		reference: "PO-2026-0139",
		by: "Tanjila Rahman (Front Desk)",
		note: "Received from Ananda Prokashoni.",
		date: "2026-07-18"
	},
	{
		id: "mv-3012",
		materialId: "category-sorting-flash-cards",
		materialName: "Category Sorting Flash Cards",
		materialCode: "MAT-CTG-1005",
		type: "Stock Out",
		quantity: -6,
		balance: 12,
		reference: "TRF-2026-0017",
		by: "Nusrat Jahan (Manager)",
		note: "Issued to Chattogram therapy rooms — below minimum now.",
		date: "2026-07-12"
	}
];
function movementsForMaterial(materialId) {
	return STOCK_MOVEMENTS.filter((movement) => movement.materialId === materialId);
}
var PURCHASE_HISTORY = [
	{
		id: "po-0148",
		materialId: "bangla-alphabet-cards",
		poNumber: "PO-2026-0148",
		supplier: "Shikkha Learning Supplies",
		quantity: 40,
		unitCost: 260,
		total: 10400,
		date: "2026-07-27",
		status: "Received"
	},
	{
		id: "po-0146",
		materialId: "tactile-sensory-balls",
		poNumber: "PO-2026-0146",
		supplier: "SensoryCare Imports",
		quantity: 15,
		unitCost: 640,
		total: 9600,
		date: "2026-07-25",
		status: "Received"
	},
	{
		id: "po-0141",
		materialId: "articulation-card-deck",
		poNumber: "PO-2026-0141",
		supplier: "Shikkha Learning Supplies",
		quantity: 30,
		unitCost: 620,
		total: 18600,
		date: "2026-07-14",
		status: "Received"
	},
	{
		id: "po-0139",
		materialId: "first-words-picture-book",
		poNumber: "PO-2026-0139",
		supplier: "Ananda Prokashoni",
		quantity: 25,
		unitCost: 300,
		total: 7500,
		date: "2026-07-18",
		status: "Received"
	},
	{
		id: "po-0135",
		materialId: "articulation-card-deck",
		poNumber: "PO-2026-0135",
		supplier: "Shikkha Learning Supplies",
		quantity: 25,
		unitCost: 610,
		total: 15250,
		date: "2026-05-09",
		status: "Received"
	},
	{
		id: "po-0152",
		materialId: "chewy-oral-motor-tool",
		poNumber: "PO-2026-0152",
		supplier: "SensoryCare Imports",
		quantity: 30,
		unitCost: 480,
		total: 14400,
		date: "2026-07-30",
		status: "Pending"
	},
	{
		id: "po-0129",
		materialId: "wooden-shape-puzzle",
		poNumber: "PO-2026-0129",
		supplier: "Kathpencil Toys Ltd.",
		quantity: 20,
		unitCost: 720,
		total: 14400,
		date: "2026-06-22",
		status: "Received"
	},
	{
		id: "po-0124",
		materialId: "phoneme-practice-cards",
		poNumber: "PO-2026-0124",
		supplier: "SpeechPro Bangladesh",
		quantity: 25,
		unitCost: 380,
		total: 9500,
		date: "2026-06-28",
		status: "Received"
	}
];
function purchasesForMaterial(materialId) {
	return PURCHASE_HISTORY.filter((purchase) => purchase.materialId === materialId);
}
var LOW_STOCK_PRIORITY_TONE = {
	Critical: "danger",
	High: "warning",
	Medium: "info"
};
var LOW_STOCK_ALERTS = MATERIALS.filter((material) => material.status === "Out of Stock" || material.status === "Low Stock").map((material) => {
	const required = Math.max(material.minStock * 2 - material.quantity, material.minStock);
	const priority = material.quantity === 0 ? "Critical" : material.quantity < material.minStock / 2 ? "High" : "Medium";
	return {
		id: `low-${material.id}`,
		materialId: material.id,
		name: material.name,
		code: material.code,
		category: material.category,
		currentStock: material.quantity,
		minStock: material.minStock,
		required,
		priority,
		supplier: material.supplier.name
	};
});
var MATERIAL_TABS = [
	{
		value: "inventory",
		label: "Inventory"
	},
	{
		value: "sales",
		label: "Sales"
	},
	{
		value: "categories",
		label: "Categories"
	},
	{
		value: "history",
		label: "Stock History"
	}
];
var AVAILABLE_STOCK = MATERIALS.reduce((sum, material) => sum + material.quantity, 0);
var LOW_STOCK_COUNT = MATERIALS.filter((material) => material.status === "Low Stock").length;
var OUT_OF_STOCK_COUNT = MATERIALS.filter((material) => material.status === "Out of Stock").length;
var TODAYS_SALES = SALES.filter((sale) => sale.date === MATERIALS_TODAY_ISO).reduce((sum, sale) => sum + sale.total, 0);
var MONTHLY_SALES = SALES.filter((sale) => sale.date.startsWith("2026-07")).reduce((sum, sale) => sum + sale.total, 0);
var INVENTORY_VALUE = MATERIALS.reduce((sum, material) => sum + material.quantity * material.purchasePrice, 0);
var MATERIAL_KPIS = [
	{
		id: "total-materials",
		label: "Total Materials",
		value: String(MATERIALS.length),
		icon: Boxes,
		tone: "primary",
		delta: {
			value: "+3 this month",
			direction: "up"
		},
		hint: "Across all categories"
	},
	{
		id: "available-stock",
		label: "Available Stock",
		value: `${AVAILABLE_STOCK} units`,
		icon: PackageCheck,
		tone: "success",
		delta: {
			value: "+82 units",
			direction: "up"
		},
		hint: "Ready for therapy and sale"
	},
	{
		id: "low-stock",
		label: "Low Stock",
		value: String(LOW_STOCK_COUNT),
		icon: TriangleAlert,
		tone: "warning",
		delta: {
			value: "+1 this week",
			direction: "up"
		},
		hint: "Below minimum level"
	},
	{
		id: "out-of-stock",
		label: "Out of Stock",
		value: String(OUT_OF_STOCK_COUNT),
		icon: PackageX,
		tone: "danger",
		delta: {
			value: "Reorder raised",
			direction: "flat"
		},
		hint: "Purchase order pending"
	},
	{
		id: "categories",
		label: "Total Categories",
		value: String(MATERIAL_CATEGORIES.length),
		icon: Layers,
		tone: "primary",
		delta: {
			value: "Stable",
			direction: "flat"
		},
		hint: "Materials, toys and equipment"
	},
	{
		id: "todays-sales",
		label: "Today's Sales",
		value: formatTaka(TODAYS_SALES),
		icon: ShoppingCart,
		tone: "success",
		delta: {
			value: "+12.4% vs yesterday",
			direction: "up"
		},
		hint: "3 invoices issued"
	},
	{
		id: "monthly-sales",
		label: "Monthly Sales",
		value: formatTaka(MONTHLY_SALES),
		icon: TrendingUp,
		tone: "success",
		delta: {
			value: "+8.6% vs June",
			direction: "up"
		},
		hint: "July 2026 to date"
	},
	{
		id: "inventory-value",
		label: "Inventory Value",
		value: formatTaka(INVENTORY_VALUE),
		icon: Wallet,
		tone: "primary",
		delta: {
			value: "At purchase cost",
			direction: "flat"
		},
		hint: "Current stock on hand"
	}
];
//#endregion
export { movementsForMaterial as C, getMaterial as S, salesForMaterial as T, SALES as _, MATERIAL_BRANCHES as a, STOCK_MOVEMENTS as b, MATERIAL_KPIS as c, MATERIAL_TABS as d, MATERIAL_UNITS as f, PAYMENT_METHODS as g, MOVEMENT_TYPES as h, MATERIALS_TODAY_ISO as i, MATERIAL_STATUSES as l, MOVEMENT_TONE as m, LOW_STOCK_PRIORITY_TONE as n, MATERIAL_CATEGORIES as o, MOVEMENT_ICON as p, MATERIALS as r, MATERIAL_CATEGORY_NAMES as s, LOW_STOCK_ALERTS as t, MATERIAL_STATUS_TONE as u, SALE_PAYMENT_STATUSES as v, purchasesForMaterial as w, STORAGE_LOCATIONS as x, SALE_STATUS_TONE as y };
