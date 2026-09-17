export function sortByPriority<T>(
  items: T[],
  getPriority: (item: T) => number
): T[] {

  return [...items].sort(

      (a, b) =>

          getPriority(a)

          -

          getPriority(b)

  );

}