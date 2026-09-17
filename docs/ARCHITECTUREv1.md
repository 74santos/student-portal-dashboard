# Student Portal SaaS Architecture

## Overview

The Student Portal is designed using a modular engine-based architecture.

Rather than placing business logic inside React components, each major responsibility is isolated into its own engine. React components are responsible only for rendering the UI, while engines calculate, analyze, and transform application data.

This approach keeps the application scalable, testable, and easy to extend as new features are introduced.

---

# Architectural Principles

The project follows several core engineering principles:

* Separation of Concerns
* Single Responsibility Principle
* Composition over Duplication
* Pure Functions whenever possible
* UI driven by View Models instead of raw state
* Feature-first organization

Every engine owns one responsibility.

No engine is responsible for rendering UI.

React components consume prepared data instead of calculating it.

---

# Data Flow

```
AppContext
    │
    ▼
AcademicEngine
    │
    ▼
DashboardEngine
    │
    ▼
AnalyticsEngine
    │
    ▼
React Components
```

The AppContext stores application state.

Engines transform state into business models.

Components simply display those models.

---

# AppContext

## Responsibility

Central application state.

Stores:

* User
* Student
* Courses
* Assignments
* Activities
* Notifications
* Theme
* Authentication

The AppContext should not contain business logic beyond state management.

---

# AcademicEngine

## Responsibility

Produces a complete academic snapshot of the student's current status.

### Inputs

* Student
* Courses
* Assignments
* Activities

### Outputs

* Metrics
* Core Analysis
* Academic Analysis
* Recommendations
* Decisions
* Achievements
* Insights
* Academic Report

The AcademicEngine is the foundation for every other engine.

---

# DashboardEngine

## Responsibility

Transforms the academic snapshot into UI-ready dashboard data.

Produces:

* Hero
* Statistics Cards
* Overview
* Focus Cards

The DashboardEngine never performs calculations.

It simply converts academic information into presentation models.

---

# AnalyticsEngine

## Responsibility

Creates visualization datasets.

Produces:

* Weekly Study Dataset
* Course Progress Dataset
* Assignment Completion Dataset
* Analytics Insights

The AnalyticsEngine knows nothing about charts.

It simply returns datasets that any chart library can consume.

---

# Future Engines

## GoalEngine

Responsible for:

* GPA Goals
* Weekly Study Goals
* Completion Goals
* Habit Goals
* Academic Targets

---

## RecommendationEngine

Responsible for:

* Personalized Suggestions
* Study Recommendations
* Priority Ordering
* Daily Recommendations

---

## NotificationEngine

Responsible for:

* Assignment Alerts
* Deadline Warnings
* Goal Progress
* Achievement Notifications
* Academic Events

---

## CalendarEngine

Responsible for:

* Weekly Schedule
* Study Sessions
* Exams
* Assignment Timeline
* Calendar Views

---

## SearchEngine

Responsible for:

* Global Search
* Course Search
* Assignment Search
* Intelligent Filtering

---

## AIEngine

Responsible for:

* AI Study Coach
* Academic Summaries
* Assignment Suggestions
* Personalized Feedback

---

## DataEngine (Future)

The DataEngine is intentionally not implemented yet.

It becomes necessary only when multiple data providers exist.

Examples include:

* LocalStorage
* REST APIs
* Supabase
* Firebase
* IndexedDB
* Offline Cache

Current architecture does not require this abstraction.

---

# Folder Structure

```
engines/

AcademicEngine/

DashboardEngine/

AnalyticsEngine/

GoalEngine (future)

RecommendationEngine (future)

NotificationEngine (future)

CalendarEngine (future)

SearchEngine (future)

AIEngine (future)

DataEngine (future)
```

Each engine follows a similar internal structure.

```
Engine/

index.ts

types.ts

builders/

datasets/

analysis/

report/

insights/
```

Every engine exports a single public API through its `index.ts`.

Internal implementation details remain private to the engine.

---

# Engineering Philosophy

This project intentionally separates business logic from presentation.

React components should remain small and focused.

Business rules belong inside engines.

As the application grows, new features should be added by creating or extending engines rather than increasing component complexity.

This architecture is designed to support long-term maintainability, easier testing, and future migration to external data sources or backend services without major UI changes.
