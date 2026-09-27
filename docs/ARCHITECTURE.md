# Student Portal SaaS --- Architecture

## Purpose

Student Portal is a portfolio-grade academic productivity SaaS built
with React and TypeScript.

The architecture separates application state, academic/domain
calculations, presentation models, feature hooks, UI components, and the
server-side AI integration.

The goal is to keep React components focused on presentation while
business rules remain reusable and testable.

## High-Level Architecture

``` text
                    Student Portal
                         │
              ┌──────────┴──────────┐
              │                     │
         AppContext            Feature Hooks
              │                     │
              └──────────┬──────────┘
                         │
                  Academic Engine
                         │
        ┌────────────────┼────────────────┐
        │                │                │
   Dashboard         Analytics        Academic Data
     Models            Models           Models
        │                │                │
        └────────────────┼────────────────┘
                         │
                  React Components
                         │
                  AI Academic Coach
                         │
                HttpAcademicAIService
                         │
                    Express API
                         │
                      OpenAI
```

## Architectural Layers

### Application State

`AppContext` provides shared application state and actions to feature
areas.

Examples include:

-   authenticated user
-   student profile
-   courses
-   assignments
-   activities
-   notifications
-   theme
-   privacy/Ninja Mode
-   academic snapshot

The context acts as an application-level source of truth rather than
allowing individual components to maintain duplicated versions of
academic data.

### Domain and Academic Logic

Academic calculations are kept outside presentation components.

The academic engine builds an `AcademicSnapshot` containing:

-   metrics
-   analysis
-   recommendations
-   decisions
-   insights
-   achievements
-   summary information

This allows the same academic information to support multiple UI
features.

### Presentation Models

Dashboard and analytics builders transform domain data into models that
are convenient for React components to render.

This keeps formatting and UI-oriented decisions out of core academic
calculations.

### React Components

Components are responsible primarily for:

-   rendering
-   user interaction
-   accessibility
-   visual states
-   composing feature-level UI

Components should consume prepared models instead of becoming large
containers for business logic.

### AI Service Layer

The AI Academic Coach follows a provider-independent service boundary:

``` text
React
  ↓
useAcademicCoach
  ↓
HttpAcademicAIService
  ↓
POST /api/ai/study-plan
  ↓
Express
  ↓
OpenAI
```

The API key remains server-side.

The browser sends a deliberately scoped academic context rather than the
entire application state.

## AI Data Boundary

The AI context contains:

-   courses
-   assignments
-   target GPA
-   study goal hours
-   workload
-   goal status
-   academic momentum

It does not include:

-   passwords
-   authentication credentials
-   API keys
-   unrelated application state

Application data remains authoritative. For example, assignment IDs and
dates are resolved against the application's assignment data on the
server rather than trusting the model to invent or format authoritative
values.

## Persistence

User-specific academic information is persisted using user-scoped
storage keys.

Conceptually:

``` text
student:<userId>
courses:<userId>
assignments:<userId>
activities:<userId>
notifications:<userId>
```

This prevents one user's academic state from being accidentally reused
for another user.

## Design Principle

The primary architectural rule is:

> Engines and builders prepare domain and presentation data. React
> components consume those models and render the interface.

This separation allows the application to evolve without turning UI
components into large, tightly coupled logic containers.
