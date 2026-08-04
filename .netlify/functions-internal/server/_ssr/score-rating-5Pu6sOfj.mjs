import { m as SCORE_TONE, p as SCORE_LABELS } from "./assessment-data-VYEbB3BS.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn } from "./button-BzhkirSF.mjs";
import { t as StatusBadge } from "./status-badge-DmL8wdwi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/score-rating-5Pu6sOfj.js
var import_jsx_runtime = require_jsx_runtime();
var SCORES = [
	1,
	2,
	3,
	4,
	5
];
var activeTone = {
	1: "border-danger/50 bg-danger/12 text-danger",
	2: "border-danger/50 bg-danger/12 text-danger",
	3: "border-warning/50 bg-warning/15 text-warning",
	4: "border-info/50 bg-info/12 text-info",
	5: "border-success/50 bg-success/12 text-success"
};
/** Compact 1—5 clinical rating selector used across the evaluation step. */
function ScoreRating({ id, label, value, onChange, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-card p-4 shadow-card transition-enterprise hover:bg-surface-hover",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					id: `${id}-label`,
					className: "truncate text-[13px] font-medium text-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-[12px] text-muted-foreground",
					children: hint ?? SCORE_LABELS[value]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
				tone: SCORE_TONE[value],
				label: `${value}/5`,
				dot: false
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "radiogroup",
			"aria-labelledby": `${id}-label`,
			className: "mt-3 grid grid-cols-5 gap-1.5",
			children: SCORES.map((score) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				role: "radio",
				"aria-checked": value === score,
				"aria-label": `${label}: ${score} — ${SCORE_LABELS[score]}`,
				onClick: () => onChange(score),
				className: cn("h-9 rounded-md border text-[13px] font-semibold tabular-nums transition-enterprise", value === score ? activeTone[score] : "border-border bg-muted/40 text-muted-foreground hover:bg-surface-hover"),
				children: score
			}, score))
		})]
	});
}
/** Read-only representation used on the assessment details page. */
function ScoreMeter({ label, score, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-card p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "min-w-0 truncate text-[13px] font-medium text-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
					tone: SCORE_TONE[score],
					label: `${score}/5`,
					dot: false
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex items-center gap-1.5",
				"aria-hidden": "true",
				children: SCORES.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1.5 flex-1 rounded-full", step <= score ? score <= 2 ? "bg-danger" : score === 3 ? "bg-warning" : score === 4 ? "bg-info" : "bg-success" : "bg-muted") }, step))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[12px] text-muted-foreground",
				children: note ? note : SCORE_LABELS[score]
			})
		]
	});
}
//#endregion
export { ScoreRating as n, ScoreMeter as t };
