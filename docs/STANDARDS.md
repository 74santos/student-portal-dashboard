# Engineering Standards

## Purpose

This document defines the standards used when extending Student Portal.

The goal is consistent, maintainable, accessible frontend engineering.

## TypeScript

-   Prefer explicit types for domain models.
-   Avoid `any` when a meaningful type can be created.
-   Keep shared domain types in the `types` layer.
-   Avoid duplicating the same data shape across features.

## React

-   Keep components focused on presentation and interaction.
-   Avoid large components containing unrelated business rules.
-   Use hooks for reusable feature behavior.
-   Keep Context focused on application-level shared state.
-   Avoid unnecessary Context dependencies that trigger unrelated
    re-renders or effects.

## State

-   Maintain a single source of truth for shared academic data.
-   Derive analytics from authoritative state.
-   Scope persisted data by authenticated user.
-   Do not persist derived values unless necessary.

## Architecture

-   Engines own domain calculations.
-   Builders create presentation models.
-   Components render models.
-   Hooks coordinate reusable feature behavior.
-   Services isolate external systems.

## AI

-   Never expose API keys in frontend code.
-   Keep provider calls on the server.
-   Send only the minimum context required.
-   Never include passwords or authentication credentials.
-   Treat AI output as untrusted external data.
-   Validate AI responses before using them.
-   Use application data as the source of truth for identifiers, dates,
    and other authoritative values.
-   Keep provider-specific logic behind a service boundary.

## CSS / UI

-   Maintain consistent spacing and typography.
-   Use the established design tokens where applicable.
-   Preserve light/dark/system theme behavior.
-   Avoid one-off styles when an existing reusable pattern exists.
-   Test responsive behavior at desktop, tablet, and mobile widths.

## Accessibility

-   Use semantic HTML.
-   Provide accessible labels for controls.
-   Preserve visible keyboard focus.
-   Use sufficient color contrast.
-   Use `aria-*` attributes only when they provide meaningful additional
    information.
-   Ensure interactive controls are keyboard accessible.

## Forms

-   Validate required fields.
-   Provide clear error messages.
-   Keep validation close to the relevant form boundary.
-   Normalize user-entered values such as email addresses where
    appropriate.

## Persistence

-   Use stable, predictable storage keys.
-   Scope user-specific records by user ID.
-   Handle malformed stored JSON safely.
-   Do not assume persisted data is valid.

## Error Handling

-   External failures should not crash the UI.
-   Show useful user-facing fallback states.
-   Log server-side errors appropriately.
-   Avoid exposing sensitive implementation details to users.

## Testing / QA

Before considering a feature complete:

-   Test the primary user flow.
-   Test refresh/persistence.
-   Test light mode.
-   Test dark mode.
-   Test mobile layout.
-   Test keyboard interaction where applicable.
-   Check the browser console.
-   Check the API/server console when relevant.
-   Confirm no unrelated features regressed.

## Portfolio Standard

A feature is not complete simply because it works.

It should also demonstrate:

> coherent product thinking + good visual hierarchy + real state/data +
> thoughtful interaction + clean architecture.
