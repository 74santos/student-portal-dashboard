// selectNewest.ts
export function selectNewest<T>(
  items: readonly T[],
  getDate: (item: T) => string
): T | null {

  if (items.length === 0) return null;

  return items.reduce((newest, current) =>
      new Date(getDate(current)) > new Date(getDate(newest))
          ? current
          : newest
  );
}