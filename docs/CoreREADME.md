# Student Portal SaaS --- Core Architecture Guide

## What This Project Is

Student Portal is a modular academic management platform designed to
demonstrate production-oriented React and TypeScript engineering.

The application combines:

-   course management
-   assignment management
-   academic analytics
-   student activity tracking
-   notifications
-   themes
-   user-scoped persistence
-   authentication scaffolding
-   AI-assisted academic planning

## Core Mental Model

Think of the application as five cooperating layers:

``` text
State
  ↓
Domain Logic
  ↓
Presentation Models
  ↓
Feature Hooks
  ↓
UI
```

The AI Coach adds a server boundary:

``` text
UI
  ↓
AI Hook
  ↓
AI Service
  ↓
Express API
  ↓
AI Provider
```

## Source of Truth

Academic state should have one authoritative representation.

For example, an assignment should not have one due date in a component
and another due date inside an AI response.

The application assignment remains authoritative.

The AI can recommend what to work on, but it does not become the
database.

## Why This Matters

This architecture supports:

-   predictable state flow
-   easier testing
-   reusable calculations
-   smaller components
-   clearer debugging
-   safer AI integration
-   future backend migration

## Feature Development Rule

When adding a feature:

1.  Identify the source data.
2.  Decide which domain rules belong outside React.
3.  Create or extend the appropriate engine/model.
4.  Expose the result through the existing state or feature layer.
5.  Build the UI around the prepared data.
6.  Test the feature in light and dark themes.
7.  Test persistence and user isolation where applicable.
8.  Document important architectural decisions.

## Avoid

Avoid putting large business rules directly inside JSX.

Avoid duplicating state.

Avoid using AI output as authoritative application data.

Avoid adding an abstraction merely because it sounds architectural.

The goal is useful separation, not abstraction for its own sake.
