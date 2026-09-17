// selectOldest.ts

export function selectOldest<T>(
    items: readonly T[],
    getDate: (item: T) => string
): T | null {

    if (items.length === 0) return null;

    return items.reduce((oldest, current) =>
        new Date(getDate(current)) < new Date(getDate(oldest))
            ? current
            : oldest
    );
}