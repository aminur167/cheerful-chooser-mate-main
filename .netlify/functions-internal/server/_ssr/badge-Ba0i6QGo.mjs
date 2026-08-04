import "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn } from "./button-BzhkirSF.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-enterprise focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_svg]:size-3 [&_svg]:shrink-0", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground",
		neutral: "border-border bg-muted text-muted-foreground",
		secondary: "border-transparent bg-secondary text-secondary-foreground",
		info: "border-primary/20 bg-primary/10 text-primary",
		success: "border-success/25 bg-success/12 text-success",
		warning: "border-warning/30 bg-warning/15 text-warning",
		danger: "border-danger/25 bg-danger/12 text-danger",
		destructive: "border-transparent bg-destructive text-destructive-foreground",
		outline: "border-border text-foreground"
	} },
	defaultVariants: { variant: "neutral" }
});
function Badge({ className, variant, dot = false, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props,
		children: [dot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "h-1.5 w-1.5 shrink-0 rounded-full bg-current",
			"aria-hidden": "true"
		}) : null, children]
	});
}
//#endregion
export { Badge as t };
