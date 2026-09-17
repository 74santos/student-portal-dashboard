export function filterByCompleted<T>(
  items: T[],
  completed: (item: T) => boolean,
  state: "all" | "active" | "completed"
): T[] {

  switch (state) {

      case "active":
          return items.filter(item => !completed(item));

      case "completed":
          return items.filter(completed);

      default:
          return items;

  }

}