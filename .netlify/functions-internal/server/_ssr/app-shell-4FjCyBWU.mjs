import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { $ as PhoneCall, $t as ClipboardCheck, A as ShoppingCart, Cn as Boxes, Ct as LifeBuoy, Dn as Bell, Ft as Gauge, Hn as Activity, I as Search, K as Receipt, Lt as FileText, M as Settings, Qt as ClipboardList, Tt as LayoutGrid, Yt as Cog, _n as CalendarDays, _t as LogOut, c as User, ft as Menu, j as ShieldCheck, mt as MapPinned, n as X, o as Users, on as ChevronsLeft, s as UsersRound, un as ChevronDown, xn as Building2 } from "../_libs/lucide-react.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as AvatarFallback$1, p as require_jsx_runtime, r as AvatarImage$1, t as Avatar$1 } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Button } from "./button-BzhkirSF.mjs";
import { i as ThemeToggle, r as DEMO_USER } from "./theme-toggle-DuU7pP1P.mjs";
import { t as Input } from "./input-BkRQ7J8p.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Badge } from "./badge-Ba0i6QGo.mjs";
import { t as Breadcrumbs } from "./breadcrumbs-CW6ykn0r.mjs";
import { a as DropdownMenuLabel, i as DropdownMenuItem, o as DropdownMenuSeparator, r as DropdownMenuContent, s as DropdownMenuTrigger, t as DropdownMenu } from "./dropdown-menu-CXFNH1SK.mjs";
import { a as Trigger, i as Root3, n as Portal, r as Provider, t as Content2 } from "../_libs/radix-ui__react-tooltip.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-shell-4FjCyBWU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WORKSPACES = {
	"super-admin": {
		label: "Super Admin",
		description: "Organisation-wide control",
		basePath: "/super-admin",
		icon: ShieldCheck
	},
	manager: {
		label: "Branch Manager",
		description: "Single branch operations",
		basePath: "/manager",
		icon: Building2
	}
};
var NAVIGATION = {
	"super-admin": [
		{
			title: "Workspace",
			items: [{
				label: "Overview",
				icon: LayoutGrid,
				to: "/super-admin"
			}, {
				label: "Dashboard",
				icon: Gauge,
				to: "/super-admin/dashboard"
			}]
		},
		{
			title: "Modules",
			items: [
				{
					label: "Branches",
					icon: Building2,
					to: "/super-admin/branches"
				},
				{
					label: "Staff",
					icon: Users,
					disabled: true,
					badge: "Soon"
				},
				{
					label: "Finance",
					icon: Receipt,
					disabled: true,
					badge: "Soon"
				},
				{
					label: "Compliance",
					icon: ShieldCheck,
					disabled: true,
					badge: "Soon"
				}
			]
		},
		{
			title: "System",
			items: [{
				label: "Settings",
				icon: Cog,
				disabled: true
			}, {
				label: "Support",
				icon: LifeBuoy,
				disabled: true
			}]
		}
	],
	manager: [
		{
			title: "Workspace",
			items: [{
				label: "Overview",
				icon: LayoutGrid,
				to: "/manager"
			}, {
				label: "Dashboard",
				icon: Gauge,
				to: "/manager/dashboard"
			}]
		},
		{
			title: "Modules",
			items: [
				{
					label: "Patients",
					icon: UsersRound,
					to: "/manager/patients"
				},
				{
					label: "Assessments",
					icon: ClipboardCheck,
					to: "/manager/assessments"
				},
				{
					label: "Therapy",
					icon: Activity,
					to: "/manager/therapy"
				},
				{
					label: "Payments",
					icon: Receipt,
					to: "/manager/payments"
				},
				{
					label: "Follow-up",
					icon: PhoneCall,
					to: "/manager/follow-up"
				},
				{
					label: "Materials",
					icon: Boxes,
					to: "/manager/materials"
				},
				{
					label: "Sales",
					icon: ShoppingCart,
					to: "/manager/sales"
				},
				{
					label: "Outdoor Service",
					icon: MapPinned,
					to: "/manager/outdoor"
				},
				{
					label: "Daily Reports",
					icon: FileText,
					to: "/manager/daily-reports"
				},
				{
					label: "Scheduling",
					icon: CalendarDays,
					disabled: true,
					badge: "Soon"
				},
				{
					label: "Caseload",
					icon: ClipboardList,
					disabled: true,
					badge: "Soon"
				},
				{
					label: "Team",
					icon: Users,
					disabled: true,
					badge: "Soon"
				}
			]
		},
		{
			title: "System",
			items: [{
				label: "Settings",
				icon: Cog,
				disabled: true
			}, {
				label: "Support",
				icon: LifeBuoy,
				disabled: true
			}]
		}
	]
};
var TooltipProvider = Provider;
var Tooltip = Root3;
var TooltipTrigger = Trigger;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)", className),
	...props
}) }));
TooltipContent.displayName = Content2.displayName;
function AppSidebar({ workspace, collapsed, onToggleCollapse, onNavigate, isMobile = false }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const sections = NAVIGATION[workspace];
	const meta = WORKSPACES[workspace];
	const isCollapsed = collapsed && !isMobile;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
		delayDuration: 120,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full flex-col bg-sidebar text-sidebar-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex h-16 shrink-0 items-center gap-3 px-4", isCollapsed && "justify-center px-0"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground shadow-xs ring-1 ring-white/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
								className: "h-[18px] w-[18px]",
								"aria-hidden": "true"
							})
						}),
						!isCollapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-[13.5px] font-semibold leading-tight tracking-tight text-sidebar-accent-foreground",
								children: "Speech Therapy ERP"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-[11px] leading-tight text-sidebar-foreground/55",
								children: "Multi-Branch ERP SaaS"
							})]
						}),
						isMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: onNavigate,
							"aria-label": "Close navigation",
							className: "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})
					]
				}),
				!isCollapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-4 pb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-white/8 bg-white/[0.04] px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-semibold uppercase tracking-[0.14em] text-sidebar-foreground/45",
							children: "Workspace"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-[13px] font-medium text-sidebar-accent-foreground",
							children: meta.label
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-4 h-px shrink-0 bg-sidebar-border" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary",
					className: cn("flex-1 overflow-y-auto py-5", isCollapsed ? "px-2" : "px-3"),
					children: sections.map((section, sectionIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn(sectionIndex > 0 && "mt-7 border-t border-sidebar-border pt-6"),
						children: [isCollapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: section.title
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-3 pb-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-sidebar-foreground/40",
							children: section.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-1",
							children: section.items.map((item) => {
								const active = item.to === pathname;
								const base = cn("group relative flex items-center rounded-lg text-[13.5px] transition-enterprise focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar", isCollapsed ? "h-10 w-10 justify-center" : "gap-3 px-3 py-2.5");
								const content = item.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: item.to,
									onClick: onNavigate,
									"aria-current": active ? "page" : void 0,
									className: cn(base, active ? "bg-white/[0.09] font-medium text-sidebar-accent-foreground shadow-xs" : "text-sidebar-foreground/75 hover:bg-white/[0.05] hover:text-sidebar-accent-foreground"),
									children: [
										active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-sidebar-primary",
											"aria-hidden": "true"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
											className: cn("h-[18px] w-[18px] shrink-0 transition-enterprise", active ? "text-sidebar-primary" : "text-sidebar-foreground/60 group-hover:text-sidebar-accent-foreground"),
											"aria-hidden": "true"
										}),
										!isCollapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "min-w-0 flex-1 truncate",
											children: item.label
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									"aria-disabled": "true",
									className: cn(base, "cursor-not-allowed text-sidebar-foreground/35"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
										className: "h-[18px] w-[18px] shrink-0",
										"aria-hidden": "true"
									}), !isCollapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 flex-1 truncate",
										children: item.label
									}), item.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: "border-white/12 px-2 py-0 text-[10px] font-medium text-sidebar-foreground/50",
										children: item.badge
									})] })]
								});
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: isCollapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
									asChild: true,
									children: content
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipContent, {
									side: "right",
									sideOffset: 10,
									children: [item.label, item.badge ? ` · ${item.badge}` : ""]
								})] }) : content }, item.label);
							})
						})]
					}, section.title))
				}),
				!isMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("shrink-0 border-t border-sidebar-border", isCollapsed ? "p-2" : "p-3"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						onClick: onToggleCollapse,
						"aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
						className: cn("text-sidebar-foreground/65 hover:bg-white/[0.06] hover:text-sidebar-accent-foreground", isCollapsed ? "h-10 w-10 p-0" : "w-full justify-start gap-3"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsLeft, {
							className: cn("h-[18px] w-[18px] transition-transform duration-200", collapsed && "rotate-180"),
							"aria-hidden": "true"
						}), !isCollapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[13.5px]",
							children: "Collapse"
						})]
					})
				})
			]
		})
	});
}
var Avatar = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar$1, {
	ref,
	className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
	...props
}));
Avatar.displayName = Avatar$1.displayName;
var AvatarImage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage$1, {
	ref,
	className: cn("aspect-square h-full w-full", className),
	...props
}));
AvatarImage.displayName = AvatarImage$1.displayName;
var AvatarFallback = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback$1, {
	ref,
	className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
	...props
}));
AvatarFallback.displayName = AvatarFallback$1.displayName;
function UserMenu() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "ghost",
			className: "h-10 gap-2.5 rounded-lg px-1.5 sm:pl-1.5 sm:pr-2.5",
			"aria-label": "Open account menu",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
					className: "h-8 w-8 ring-1 ring-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
						className: "bg-primary/10 text-xs font-semibold text-primary",
						children: DEMO_USER.initials
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "hidden min-w-0 flex-col items-start leading-tight lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "max-w-[10rem] truncate text-[13px] font-medium",
						children: DEMO_USER.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "max-w-[10rem] truncate text-[11px] font-normal text-muted-foreground",
						children: DEMO_USER.role
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: "hidden h-4 w-4 text-muted-foreground lg:block",
					"aria-hidden": "true"
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		sideOffset: 10,
		className: "w-64 rounded-xl p-1.5 shadow-overlay",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuLabel, {
				className: "flex items-center gap-3 rounded-lg px-2 py-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
					className: "h-9 w-9 ring-1 ring-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
						className: "bg-primary/10 text-xs font-semibold text-primary",
						children: DEMO_USER.initials
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate text-sm font-medium",
						children: DEMO_USER.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate text-xs font-normal text-muted-foreground",
						children: DEMO_USER.email
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "Profile"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
				className: "h-4 w-4",
				"aria-hidden": "true"
			}), "Preferences"] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/auth/login",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), "Sign out"]
				})
			})
		]
	})] });
}
function Topbar({ onOpenMobileNav }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-30 h-16 border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-full w-full max-w-[1600px] items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "min-h-10 min-w-10 shrink-0 lg:hidden",
					onClick: onOpenMobileNav,
					"aria-label": "Open navigation",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumbs, { className: "hidden min-w-0 flex-1 md:block" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-w-0 flex-1 md:max-w-[260px] md:flex-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "search",
							"aria-label": "Global search",
							placeholder: "Search…",
							className: "h-9 bg-muted/50 pl-9 pr-14 shadow-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
							className: "pointer-events-none absolute right-2.5 top-1/2 hidden -translate-y-1/2 rounded border border-border bg-background px-1.5 py-0.5 font-sans text-[10px] font-medium text-muted-foreground sm:block",
							children: "⌘K"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "Notifications",
							className: "relative min-h-9 min-w-9 text-muted-foreground hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-[18px] w-[18px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-2 top-2 h-2 w-2 rounded-full bg-danger ring-2 ring-background" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-1 hidden h-6 w-px bg-border sm:block",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserMenu, {})
					]
				})
			]
		})
	});
}
var Sheet = Dialog;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var STORAGE_KEY = "st-erp-sidebar-collapsed";
function AppShell({ workspace, children }) {
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setCollapsed(window.localStorage.getItem(STORAGE_KEY) === "true");
	}, []);
	const toggleCollapse = () => setCollapsed((value) => {
		window.localStorage.setItem(STORAGE_KEY, String(!value));
		return !value;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: cn("fixed inset-y-0 left-0 z-40 hidden border-r border-sidebar-border transition-[width] duration-200 ease-out lg:block", collapsed ? "w-[72px]" : "w-64"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSidebar, {
					workspace,
					collapsed,
					onToggleCollapse: toggleCollapse
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: mobileOpen,
				onOpenChange: setMobileOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
					side: "left",
					className: "w-72 border-sidebar-border bg-sidebar p-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
						className: "sr-only",
						children: "Navigation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSidebar, {
						workspace,
						collapsed: false,
						isMobile: true,
						onToggleCollapse: toggleCollapse,
						onNavigate: () => setMobileOpen(false)
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex min-h-screen flex-col transition-[padding] duration-200 ease-out", collapsed ? "lg:pl-[72px]" : "lg:pl-64"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Topbar, { onOpenMobileNav: () => setMobileOpen(true) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-full max-w-[1600px]",
						children
					})
				})]
			})
		]
	});
}
//#endregion
export { AppShell as t };
