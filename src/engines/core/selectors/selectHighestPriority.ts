export function selectHighestPriority<
    T extends { priority: number }
>(
    items: readonly T[]
): T | null {

    if (items.length === 0) {
        return null;
    }

    return items.reduce((highest, current) =>
        current.priority > highest.priority
            ? current
            : highest
    );

}