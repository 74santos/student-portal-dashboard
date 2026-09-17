export function sortByScore<T extends { score: number }>(
  items: readonly T[]
): T[] {

  return [...items].sort(
      (a, b) => b.score - a.score
  );

}