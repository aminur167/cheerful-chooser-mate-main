import { Ln as ArrowLeft } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BzhkirSF.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.therapy._sessionId-XTq76zOH.js
var import_jsx_runtime = require_jsx_runtime();
function TherapySessionNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Therapy session not found",
			description: "This session record no longer exists or has been archived."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			variant: "outline",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/manager/therapy",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					className: "h-4 w-4",
					"aria-hidden": "true"
				}), "Back to therapy sessions"]
			})
		})]
	});
}
//#endregion
export { TherapySessionNotFound as notFoundComponent };
