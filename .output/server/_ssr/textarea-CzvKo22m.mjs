import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as fieldControlClass } from "./input-BI0DiUgw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/textarea-CzvKo22m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn(fieldControlClass, "min-h-24 resize-y px-3 py-2.5 leading-relaxed", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
//#endregion
export { Textarea as t };
