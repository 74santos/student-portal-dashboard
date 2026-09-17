import type { StudentPortalAccount } from "../types/studentPortalAccount";

const STORAGE_KEY = "studentPortalAccounts";

export function getStudentPortalAccounts(): StudentPortalAccount[] {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return [];
  }

  try {
    const accounts = JSON.parse(saved);

    return Array.isArray(accounts)
      ? accounts
      : [];
  } catch {
    return [];
  }
}

export function saveStudentPortalAccounts(
  accounts: StudentPortalAccount[]
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(accounts)
  );
}

export function findStudentPortalAccount(
  email: string,
  password: string
): StudentPortalAccount | null {
  const accounts =
    getStudentPortalAccounts();

  return (
    accounts.find(
      (account) =>
        account.user.email.trim().toLowerCase() ===
          email.trim().toLowerCase() &&
        account.password === password
    ) ?? null
  );
}

export function findStudentPortalAccountByEmail(
  email: string
): StudentPortalAccount | null {
  const accounts =
    getStudentPortalAccounts();

  return (
    accounts.find(
      (account) =>
        account.user.email.trim().toLowerCase() ===
        email.trim().toLowerCase()
    ) ?? null
  );
}