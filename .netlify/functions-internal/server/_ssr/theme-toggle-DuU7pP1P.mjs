import { T as Sun, ct as Moon } from "../_libs/lucide-react.mjs";
import { g as useTheme } from "./router-BtnFRLs5.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BzhkirSF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/theme-toggle-DuU7pP1P.js
var import_jsx_runtime = require_jsx_runtime();
var APP_NAME = "Speech Therapy ERP";
var APP_TAGLINE = "Multi-branch clinic operations platform";
/** Placeholder identity used until the Django REST backend is wired up. */
var DEMO_USER = {
	name: "Dr. Amara Whitfield",
	email: "amara.whitfield@clinic.example",
	role: "Super Administrator",
	initials: "AW"
};
function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "ghost",
		size: "icon",
		onClick: toggleTheme,
		"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
		className: "min-h-10 min-w-10 text-muted-foreground hover:text-foreground",
		children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-[18px] w-[18px]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-[18px] w-[18px]" })
	});
}
//#endregion
export { ThemeToggle as i, APP_TAGLINE as n, DEMO_USER as r, APP_NAME as t };
