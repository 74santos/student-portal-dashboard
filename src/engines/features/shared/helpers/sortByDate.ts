export function sortByDate<T>(
  items: T[],
  getDate: (item: T) => string
): T[] {

  return [...items].sort(

      (a, b) =>

          new Date(getDate(a)).getTime()

          -

          new Date(getDate(b)).getTime()

  );

}