import { wt as LayoutGrid } from "../_libs/lucide-react.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-Bq9dlKOW.mjs";
import { t as PageHeader } from "./page-header-B70tvyWu.mjs";
import { t as EmptyState } from "./empty-state-Cu0SfqSK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manager.index-bpziogj6.js
var import_jsx_runtime = require_jsx_runtime();
function ManagerHome() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Branch Manager workspace",
			description: "Placeholder route group. Branch-level modules will mount here.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				children: "Placeholder action"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: LayoutGrid,
			title: "No modules mounted yet",
			description: "This workspace reuses the same shell, navigation and component library as every other role.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Primary action" }),
			secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				children: "Learn more"
			})
		})]
	});
}
//#endregion
export { ManagerHome as component };
