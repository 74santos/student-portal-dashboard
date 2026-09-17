export function selectFirst<T>(
  items: readonly T[]
): T | null {

  return items.length > 0
      ? items[0]
      : null;

}