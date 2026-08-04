export const APP_NAME = "Speech Therapy ERP";
export const APP_SHORT_NAME = "ST ERP";
export const APP_SUBTITLE = "Multi-Branch ERP SaaS";
export const APP_TAGLINE = "Multi-branch clinic management system";

/** Placeholder identity used until the Django REST backend is wired up. */
export const DEMO_USER = {
  name: "Dr. Amara Whitfield",
  email: "amara.whitfield@clinic.example",
  role: "Super Administrator",
  initials: "AW",
} as const;

export const PAGE_SIZE_OPTIONS = [10, 25, 50, 100] as const;
export const DEFAULT_PAGE_SIZE = 25;
