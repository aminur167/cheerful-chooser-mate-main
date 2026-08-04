import { Tt as LayoutGrid } from "../_libs/lucide-react.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BzhkirSF.mjs";
import { t as PageHeader } from "./page-header-CNVMT5gO.mjs";
import { t as EmptyState } from "./empty-state-Bfa0wIfS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/super-admin.index-BwUJSAE6.js
var import_jsx_runtime = require_jsx_runtime();
function SuperAdminHome() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Super Admin workspace",
			description: "Placeholder route group. Organisation-wide modules will mount here.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				children: "Placeholder action"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {
			icon: LayoutGrid,
			title: "No modules mounted yet",
			description: "The application shell, design tokens and reusable components are ready. Business modules will be added in later iterations.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Primary action" }),
			secondaryAction: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				children: "Learn more"
			})
		})]
	});
}
//#endregion
export { SuperAdminHome as component };
