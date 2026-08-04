import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Badge } from "./badge-Ba0i6QGo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/status-badge-DmL8wdwi.js
var import_jsx_runtime = require_jsx_runtime();
var toneToVariant = {
	success: "success",
	warning: "warning",
	danger: "danger",
	info: "info",
	neutral: "neutral"
};
/**
* Reusable status pill for tables and detail views.
* Business modules map their own domain statuses onto a tone.
*/
function StatusBadge({ tone = "neutral", label, dot = true, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: toneToVariant[tone],
		dot,
		className,
		children: label
	});
}
//#endregion
export { StatusBadge as t };
