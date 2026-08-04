import { n as APP_TAGLINE, t as APP_NAME } from "./app-C79kJ1VZ.mjs";
import { Hn as Activity, In as ArrowRight, bn as Building2, j as ShieldCheck } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { a as CardTitle, n as CardContent, r as CardDescription, t as Card } from "./card-e-zh1EWu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BqwB6Bln.js
var import_jsx_runtime = require_jsx_runtime();
var workspaces = [{
	icon: ShieldCheck,
	title: "Super Admin",
	description: "Organisation-wide management",
	to: "/super-admin"
}, {
	icon: Building2,
	title: "Branch Manager",
	description: "Manage branch operations",
	to: "/manager"
}];
function EntryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4 py-16 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-2xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-auto mb-6 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
						className: "h-6 w-6",
						"aria-hidden": "true"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-semibold tracking-tight text-foreground sm:text-4xl",
					children: APP_NAME
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base text-muted-foreground sm:text-lg",
					children: APP_TAGLINE
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5",
					children: workspaces.map((workspace) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						interactive: true,
						className: "group relative text-left",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 p-5 sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(workspace.icon, {
										className: "h-5 w-5",
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										className: "text-base",
										children: workspace.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, {
										className: "mt-1",
										children: workspace.description
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: workspace.to,
									className: "absolute inset-0 z-10 rounded-xl",
									"aria-label": `${workspace.title} — ${workspace.description}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "sr-only",
										children: ["Open ", workspace.title]
									})
								})
							]
						})
					}, workspace.title))
				})
			]
		})
	});
}
//#endregion
export { EntryPage as component };
