The next step is to turn the **Branch Management** module into a real working CRUD feature. The page currently looks complete but is static demo data: creating a branch only simulates a network call, and the Edit / Deactivate actions do nothing. Making it fully functional is the quickest win that moves the ERP from a shell to a real MVP feature.

## What we will build

- A local-storage backed branch store so changes survive refresh.
- Real branch creation from the existing three-step form.
- Edit an existing branch through the same dialog.
- Deactivate / reactivate a branch from the table row menu.
- Live KPI cards that update as branches change.
- A status toggle on the Branch Detail page so the detail view is also editable.

## Technical approach

1. Add `src/hooks/use-branches.ts` to manage the branch list in state and localStorage (seeded from `BRANCHES`).
2. Update `src/constants/branch-data.ts` with helpers to generate a new branch code/id and default values.
3. Refactor `src/components/branches/create-branch-dialog.tsx` into a `BranchDialog` that supports both create and edit modes, with controlled form fields and validation.
4. Update `src/components/branches/branch-table.tsx` to accept `onEdit`, `onDeactivate`, and `onActivate` callbacks.
5. Update `src/routes/super-admin.branches.index.tsx` to use the hook and pass callbacks to the table and dialog.
6. Update `src/routes/super-admin.branches.$branchId.tsx` to read from the live branch store and add an Edit + status toggle action.

## Why this is the right next step

- Branch Management is the only non-placeholder module in the Super Admin nav, so finishing it is the highest-impact immediate improvement.
- It does not require a backend decision yet — localStorage keeps it demo-friendly while still functional.
- The patterns created here (list → form → detail → local state) can be reused for Staff, Scheduling, and other modules later.
- The existing UI is already polished; we only need to wire behavior and state.

## Out of scope

- Backend API integration (Django REST later).
- Authentication or role-based access.
- Real file uploads for the branch logo.
- Export to CSV (the button remains as a UI placeholder).
