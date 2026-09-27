# Release Notes

## Current Portfolio Release

The current Student Portal release represents the transition from a
dashboard prototype into a modular academic productivity SaaS.

### Product

-   Responsive academic dashboard
-   Course management
-   Assignment management
-   Academic analytics
-   Notifications
-   Activity tracking
-   Light, dark, and system themes
-   Ninja Mode
-   User-scoped persistence
-   Authentication scaffolding

### Architecture

-   Engine-driven domain logic
-   Presentation builders
-   Feature hooks
-   Shared application state through AppContext
-   User-scoped persistence
-   Separation between UI and domain logic

### AI Academic Coach

The AI Academic Coach is now integrated into the application.

It provides:

-   AI-generated study plans
-   Assignment prioritization
-   Recommended study time
-   Academic workload context
-   Goal-aware recommendations
-   Structured study-plan responses

### AI Engineering

-   Server-side AI provider integration
-   Express API endpoint
-   Frontend AI service abstraction
-   Narrow AI context
-   Structured response handling
-   Server-side date normalization
-   No authentication credentials in AI context
-   Application data remains authoritative

## Recent AI Reliability Improvements

### AI Request Lifecycle

The AI Coach was updated so unrelated AppContext changes, such as theme
changes, do not automatically trigger a new AI request.

### Date Normalization

AI-generated assignment dates are no longer trusted as authoritative
display data.

The server matches each recommendation to the source assignment and
formats the date from the application's own `dueDate` and `dueTime`
values.

## Portfolio Status

The project is now positioned as a portfolio-grade SaaS application
demonstrating:

-   frontend engineering
-   UI/UX design
-   TypeScript architecture
-   state management
-   data modeling
-   analytics
-   responsive design
-   server-side AI integration
