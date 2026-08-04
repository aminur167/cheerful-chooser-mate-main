import { T as Sun, ct as Moon } from "../_libs/lucide-react.mjs";
import { g as useTheme } from "./router-qwnO8lIM.mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-Bq9dlKOW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/theme-toggle-ClmPCreq.js
var import_jsx_runtime = require_jsx_runtime();
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
export { ThemeToggle as t };
