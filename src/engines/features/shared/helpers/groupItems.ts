export function groupItems<T>(
  items: T[],
  keySelector: (item: T) => string
): Record<string, T[]> {

  return items.reduce(

      (groups, item) => {

          const key = keySelector(item);

          if (!groups[key]) {

              groups[key] = [];

          }

          groups[key].push(item);

          return groups;

      },

      {} as Record<string, T[]>

  );

}