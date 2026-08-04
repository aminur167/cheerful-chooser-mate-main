import { Ln as ArrowLeft } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BzhkirSF.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.follow-up._followUpId-W5DBT6bM.js
var import_jsx_runtime = require_jsx_runtime();
function FollowUpNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Follow-up not found",
			description: "This follow-up record does not exist or has been removed.",
			breadcrumbs: [
				{
					label: "Branch Manager",
					to: "/manager"
				},
				{
					label: "Follow-up Management",
					to: "/manager/follow-up"
				},
				{ label: "Not found" }
			],
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/manager/follow-up",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Back to follow-ups"]
				})
			})
		})
	});
}
//#endregion
export { FollowUpNotFound as notFoundComponent };
