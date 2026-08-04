import { findBranchByManagerId, type Branch } from "@/constants/branch-data";

const STORAGE_KEY = "st-erp-manager-session";

export type ManagerSession = {
  managerId: string;
  branchId: string;
  branchName: string;
  managerName: string;
  loggedInAt: string;
};

export function getManagerSession(): ManagerSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ManagerSession) : null;
  } catch {
    return null;
  }
}

export function setManagerSession(session: ManagerSession) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function clearManagerSession() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}

/**
 * Validates a manager unique ID against the branch registry.
 * Returns the matching branch, or null if the key is invalid.
 */
export function loginWithManagerId(managerId: string): Branch | null {
  const branch = findBranchByManagerId(managerId);
  if (!branch) return null;

  setManagerSession({
    managerId: branch.manager.managerId,
    branchId: branch.id,
    branchName: branch.name,
    managerName: branch.manager.name,
    loggedInAt: new Date().toISOString(),
  });

  return branch;
}

export function getActiveBranch(): Branch | null {
  const session = getManagerSession();
  if (!session) return null;
  return findBranchByManagerId(session.managerId) ?? null;
}