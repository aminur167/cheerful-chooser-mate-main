import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { yt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { l as Slot, p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-BzhkirSF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium cursor-pointer transition-enterprise select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none active:translate-y-px [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 hover:shadow-card",
			secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/70",
			outline: "border border-border bg-card text-foreground shadow-xs hover:border-border-strong hover:bg-surface-hover",
			ghost: "text-foreground/80 hover:bg-accent hover:text-accent-foreground",
			danger: "bg-danger text-danger-foreground shadow-xs hover:bg-danger/90 focus-visible:ring-danger",
			destructive: "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-3.5",
			sm: "h-8 rounded-md px-3 text-[13px]",
			lg: "h-11 rounded-lg px-6",
			icon: "h-9 w-9",
			"icon-sm": "h-8 w-8 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, loading = false, children, disabled, ...props }, ref) => {
	const Comp = asChild ? Slot : "button";
	if (asChild) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Comp, {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		disabled: disabled || loading,
		"aria-busy": loading || void 0,
		...props,
		children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
			className: "animate-spin",
			"aria-hidden": "true"
		}) : null, children]
	});
});
Button.displayName = "Button";
//#endregion
export { cn as n, Button as t };
