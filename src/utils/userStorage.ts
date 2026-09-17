export function getUserStorageKey(
  resource: string,
  userId: string
) {
  return `${resource}:${userId}`;
}