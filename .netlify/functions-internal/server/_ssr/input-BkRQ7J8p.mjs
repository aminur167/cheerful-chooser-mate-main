import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as cn } from "./button-BzhkirSF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/input-BkRQ7J8p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fieldControlClass = "flex w-full rounded-lg border border-border bg-card text-sm text-foreground shadow-xs transition-enterprise placeholder:text-muted-foreground/70 hover:border-border-strong focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:bg-muted/60 disabled:opacity-60 aria-[invalid=true]:border-danger aria-[invalid=true]:focus-visible:ring-danger/25";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn(fieldControlClass, "h-10 px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground [&::-webkit-calendar-picker-indicator]:opacity-60 [&::-webkit-search-cancel-button]:appearance-none", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
//#endregion
export { fieldControlClass as n, Input as t };
