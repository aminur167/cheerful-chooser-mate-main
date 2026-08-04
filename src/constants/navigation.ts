import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Boxes,
  Building2,
  CalendarDays,
  ClipboardCheck,
  ClipboardList,
  FileText,

  Cog,
  Gauge,
  LayoutGrid,
  LifeBuoy,
  MapPinned,
  PhoneCall,
  Receipt,
  ShieldCheck,
  ShoppingCart,
  Users,
  UsersRound,
} from "lucide-react";

export type NavItem = {
  label: string;
  icon: LucideIcon;
  /** Route path. Omit for placeholders that are not routed yet. */
  to?: string;
  badge?: string;
  disabled?: boolean;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

export type WorkspaceKey = "super-admin" | "manager";

export const WORKSPACES: Record<
  WorkspaceKey,
  { label: string; description: string; basePath: string; icon: LucideIcon }
> = {
  "super-admin": {
    label: "Super Admin",
    description: "Organisation-wide control",
    basePath: "/super-admin",
    icon: ShieldCheck,
  },
  manager: {
    label: "Branch Manager",
    description: "Single branch operations",
    basePath: "/manager",
    icon: Building2,
  },
};

export const NAVIGATION: Record<WorkspaceKey, NavSection[]> = {
  "super-admin": [
    {
      title: "Workspace",
      items: [
        { label: "Overview", icon: LayoutGrid, to: "/super-admin" },
        { label: "Dashboard", icon: Gauge, to: "/super-admin/dashboard" },
      ],
    },
    {
      title: "Modules",
      items: [
        { label: "Branches", icon: Building2, to: "/super-admin/branches" },
        { label: "Staff", icon: Users, disabled: true, badge: "Soon" },
        { label: "Finance", icon: Receipt, disabled: true, badge: "Soon" },
        { label: "Compliance", icon: ShieldCheck, disabled: true, badge: "Soon" },
      ],
    },
    {
      title: "System",
      items: [
        { label: "Settings", icon: Cog, disabled: true },
        { label: "Support", icon: LifeBuoy, disabled: true },
      ],
    },
  ],
  manager: [
    {
      title: "Workspace",
      items: [
        { label: "Overview", icon: LayoutGrid, to: "/manager" },
        { label: "Dashboard", icon: Gauge, to: "/manager/dashboard" },
      ],
    },
    {
      title: "Modules",
      items: [
        { label: "Patients", icon: UsersRound, to: "/manager/patients" },
        { label: "Assessments", icon: ClipboardCheck, to: "/manager/assessments" },
        { label: "Therapy", icon: Activity, to: "/manager/therapy" },
        { label: "Packages", icon: Receipt, to: "/manager/payments" },
        { label: "Follow-up", icon: PhoneCall, to: "/manager/follow-up" },
        { label: "Materials", icon: Boxes, to: "/manager/materials" },
        { label: "Sales", icon: ShoppingCart, to: "/manager/sales" },
        { label: "Outdoor Service", icon: MapPinned, to: "/manager/outdoor" },
        { label: "Daily Reports", icon: FileText, to: "/manager/daily-reports" },

        { label: "Scheduling", icon: CalendarDays, disabled: true, badge: "Soon" },

        { label: "Caseload", icon: ClipboardList, disabled: true, badge: "Soon" },
        { label: "Team", icon: Users, disabled: true, badge: "Soon" },
      ],
    },
    {
      title: "System",
      items: [
        { label: "Settings", icon: Cog, disabled: true },
        { label: "Support", icon: LifeBuoy, disabled: true },
      ],
    },
  ],
};
