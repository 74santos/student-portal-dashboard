# Student Portal SaaS --- Decision Log

This document records important architectural and product decisions made
during development.

## Decision 001 --- Separate Domain Logic from React Components

### Decision

Academic calculations and business rules should live outside
presentation components.

### Reason

Large React components become difficult to test and maintain when they
contain calculations, business rules, formatting, and rendering at the
same time.

### Result

Academic engines and builders prepare reusable models that components
render.

------------------------------------------------------------------------

## Decision 002 --- Use AppContext as the Shared Application State Boundary

### Decision

Use React Context for shared application state instead of passing
academic data through many layers of props.

### Reason

Courses, assignments, student profile, notifications, theme state, and
derived academic models are used across multiple features.

### Result

Feature components can consume the same source of truth without creating
duplicated state.

------------------------------------------------------------------------

## Decision 003 --- Scope Persisted Academic Data by User

### Decision

User-specific data is stored using user-scoped localStorage keys.

### Reason

A multi-user portfolio application should not accidentally load one
student's courses or assignments for another student.

### Result

Storage follows a pattern such as:

``` text
courses:<userId>
assignments:<userId>
student:<userId>
activities:<userId>
```

------------------------------------------------------------------------

## Decision 004 --- Keep AI Provider Logic on the Server

### Decision

The React application communicates with an Express API instead of
calling the AI provider directly from the browser.

### Reason

API credentials must not be exposed to frontend code.

### Result

The frontend uses `HttpAcademicAIService`, which calls:

``` text
POST /api/ai/study-plan
```

The server communicates with the AI provider.

------------------------------------------------------------------------

## Decision 005 --- Narrow the AI Context

### Decision

Do not send the complete `AcademicSnapshot` or application context to
the AI provider.

### Reason

The AI only needs the information required to produce a study plan.

### Result

The AI context contains:

-   courses
-   assignments
-   student academic goals
-   workload
-   goal status
-   momentum

Authentication credentials and unrelated application data are excluded.

------------------------------------------------------------------------

## Decision 006 --- Application Data Is Authoritative

### Decision

AI output must not become the source of truth for application
identifiers or dates.

### Reason

Language models generate text. They should not be trusted to reproduce
application data exactly.

### Result

The server matches recommendations to real assignments using
`assignmentId` and formats the date using the application's assignment
data.

------------------------------------------------------------------------

## Decision 007 --- Avoid AI Feature Creep

### Decision

The first AI feature is an Academic Coach rather than a collection of
agents, RAG infrastructure, vector databases, or unrelated AI
experiments.

### Reason

The objective is meaningful product integration.

### Result

The AI feature demonstrates:

-   application data integration
-   server-side AI architecture
-   structured output
-   practical recommendations
-   privacy-conscious context design

without unnecessary infrastructure.

------------------------------------------------------------------------

## Decision 008 --- Prevent Unnecessary AI Regeneration

### Decision

The AI Coach hook should depend on academic data rather than the entire
AppContext object.

### Reason

Theme changes and unrelated context updates should not trigger a new AI
request.

### Result

The hook depends on the specific academic state required by the coach.

------------------------------------------------------------------------

## Decision 009 --- Preserve the Existing Date Utilities

### Decision

Create a dedicated `formatCoachDueDate` helper instead of changing the
application's generic date formatting utilities.

### Reason

Existing date helpers may be used throughout the application. Changing
their behavior could create unrelated UI regressions.

### Result

AI Coach date formatting has a dedicated presentation rule while the
rest of the application retains its existing date behavior.
