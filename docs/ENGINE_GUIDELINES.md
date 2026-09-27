# Engine Guidelines

## Purpose

Engines exist to isolate meaningful domain or presentation logic from
React components.

They should make the application easier to reason about, not merely
create another layer of indirection.

## Core Rules

### 1. One Responsibility

An engine should have a clear purpose.

Good:

``` text
AcademicEngine
AnalyticsEngine
DashboardEngine
```

Avoid an engine that becomes a general-purpose utility containing
unrelated logic.

### 2. Prefer Pure Calculations

When possible:

``` text
input → calculation → result
```

should be deterministic.

Avoid hidden dependencies on:

-   localStorage
-   DOM state
-   React state
-   browser APIs

inside pure domain calculations.

### 3. Do Not Render UI

Engines should never return JSX.

They should return:

-   numbers
-   strings
-   domain objects
-   datasets
-   view models
-   recommendations
-   analysis results

### 4. Keep Components Thin

Prefer:

``` ts
const snapshot = buildAcademicSnapshot(...);
```

over placing the calculation directly inside a component.

### 5. Avoid Circular Dependencies

The dependency direction should remain understandable:

``` text
types
  ↓
engines / utilities
  ↓
feature models / hooks
  ↓
components
  ↓
pages
```

Avoid having low-level utilities depend on UI components.

### 6. Preserve the Source of Truth

Derived models should be rebuilt from authoritative state.

For example:

``` text
courses + assignments + activities
             ↓
      AcademicSnapshot
```

Do not persist derived metrics unless there is a specific reason.

### 7. Validate at Boundaries

External data should be treated as untrusted.

This includes:

-   localStorage
-   form input
-   API responses
-   AI responses

### 8. AI Is a Service, Not an Engine

The AI provider should remain behind an explicit service boundary.

``` text
AcademicAIService
        ↓
HttpAcademicAIService
        ↓
Express API
        ↓
Provider
```

This makes it possible to replace the provider without rewriting React
components.

## When Not to Create an Engine

Do not create an engine for:

-   a tiny formatting helper
-   a one-line calculation
-   simple component state
-   a single UI interaction

Use the smallest abstraction that provides meaningful separation.

## Review Checklist

Before adding or changing an engine, ask:

-   What responsibility does it own?
-   What input does it require?
-   What does it return?
-   Can it be tested independently?
-   Does it depend on UI concerns?
-   Is the abstraction actually reducing complexity?
