import { Et as Layers, Hn as Activity, In as ArrowRight, O as Sparkles, j as ShieldCheck, lt as MoonStar, xn as Building2 } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as Button } from "./button-BzhkirSF.mjs";
import { i as ThemeToggle, n as APP_TAGLINE, t as APP_NAME } from "./theme-toggle-DuU7pP1P.mjs";
import { t as Badge } from "./badge-Ba0i6QGo.mjs";
import { a as CardTitle, i as CardHeader, n as CardContent, r as CardDescription, t as Card } from "./card-Ce78aY8w.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CMMlSmB0.js
var import_jsx_runtime = require_jsx_runtime();
var foundations = [
	{
		icon: Layers,
		title: "Application shell",
		body: "Collapsible dark sidebar, sticky top bar, breadcrumbs, global search and profile menu."
	},
	{
		icon: Sparkles,
		title: "Component library",
		body: "Buttons, cards, inputs, tables, dialogs, drawers, badges, pagination, skeletons and empty states."
	},
	{
		icon: MoonStar,
		title: "Theming",
		body: "Inter typography with light and dark colour tokens for primary, success, warning and danger."
	}
];
var workspaces = [{
	icon: ShieldCheck,
	title: "Super Admin",
	body: "Organisation-wide route group.",
	to: "/super-admin"
}, {
	icon: Building2,
	title: "Branch Manager",
	body: "Single-branch route group.",
	to: "/manager"
}];
function EntryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
								className: "h-[18px] w-[18px]",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 flex-1 truncate text-sm font-semibold",
							children: APP_NAME
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/auth/login",
								children: "Sign in"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								className: "mb-5",
								children: "Frontend foundation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-4xl font-semibold tracking-tight sm:text-5xl",
								children: APP_NAME
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg text-muted-foreground",
								children: APP_TAGLINE
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: "This build contains the architecture only — layout shell, routing groups, theme tokens and reusable UI. Business modules connect to the Django REST backend later."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/super-admin",
										children: ["Open Super Admin", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/manager",
										children: "Open Branch Manager"
									})
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						"aria-labelledby": "foundations",
						className: "mt-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "foundations",
							className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: "What is included"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
							children: foundations.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								className: "shadow-none transition-colors hover:border-primary/40",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mb-2 grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
											className: "h-5 w-5",
											"aria-hidden": "true"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
										className: "text-base",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: item.body })
								] })
							}, item.title))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						"aria-labelledby": "workspaces",
						className: "mt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "workspaces",
							className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Route groups"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-5 sm:grid-cols-2",
							children: workspaces.map((workspace) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								className: "shadow-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
									className: "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 pt-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-muted text-foreground",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(workspace.icon, {
												className: "h-5 w-5",
												"aria-hidden": "true"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-sm font-medium",
												children: workspace.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-sm text-muted-foreground",
												children: workspace.body
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											variant: "ghost",
											size: "sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: workspace.to,
												children: "Open"
											})
										})
									]
								})
							}, workspace.title))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground sm:px-6",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						APP_NAME
					]
				})
			})
		]
	});
}
//#endregion
export { EntryPage as component };
