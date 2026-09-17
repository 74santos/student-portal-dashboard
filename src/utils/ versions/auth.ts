import type { StoredAccount } from "../types/auth";

const ACCOUNTS_KEY = "studentPortalAccounts";

export function getAccounts(): StoredAccount[] {
  const saved = localStorage.getItem(ACCOUNTS_KEY);

  if (!saved) {
    return [];
  }

  try {
    return JSON.parse(saved);
  } catch {
    return [];
  }
}

export function saveAccounts(
  accounts: StoredAccount[]
) {
  localStorage.setItem(
    ACCOUNTS_KEY,
    JSON.stringify(accounts)
  );
}

export function findAccountByEmail(
  email: string
): StoredAccount | undefined {

  const accounts = getAccounts();

  return accounts.find(
    (account) =>
      account.user.email.toLowerCase() ===
      email.toLowerCase()
  );
}