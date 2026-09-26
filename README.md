# 🎓 Student Portal SaaS

A portfolio-grade academic productivity SaaS built with React and TypeScript, combining course and assignment management, academic analytics, personalized insights, and an AI Academic Coach.

The Student Portal helps students manage coursework, assignments, academic performance, study habits, and long-term goals through intelligent analytics and a clean, responsive user experience.


[GitHub Repository](https://github.com/74santos/student-portal-dashboard) · [Live Demo](#)
---

## Overview

This project began as a simple student dashboard but evolved into a modular academic management platform.

Instead of placing business logic inside React components, the application is built around independent engines responsible for calculations, analytics, recommendations, and presentation models.

The architecture separates application state, domain calculations, presentation models, and UI components so each layer can evolve independently.

---

## Features

### Academic Dashboard

* Personalized dashboard
* Academic health overview
* Weekly study summary
* Progress tracking
* Today's focus
* Smart insights
* Achievement tracking

<!-- [image] -->

### Course Management

* Create, edit, and delete courses
* Track course progress
* GPA forecasting
* At-risk course detection



### Assignment Management

* Assignment tracking
* Completion status
* Overdue detection
* Upcoming deadlines
* Activity history

### Academic Analytics

* Weekly study analytics
* Course progress visualization
* Assignment completion metrics
* Forecast GPA calculations
* Academic performance trends

### AI Academic Coach

* AI-generated study plans based on current coursework
* Assignment prioritization
* Recommended study time
* Academic workload and goal context
* Server-side AI integration
* Structured AI responses
* Privacy-conscious academic context boundaries

<!-- [image] -->

### Student Experience

* Secure (Ninja) Mode
* Light / Dark / System themes
* Global search
* Notifications
* Activity feed

---

# Technology Stack

## Frontend

* React
* TypeScript
* React Router
* Context API

## UI

* React Icons
* Modern CSS
* Responsive Layout

## Architecture

* Engine-based Architecture
* Builder Pattern
* Pure Functions
* View Models
* Feature-first Organization

---

# AI Architecture

The AI Academic Coach is implemented as a separate service layer rather than placing AI provider logic inside React components.

React
  ↓
useAcademicCoach
  ↓
HttpAcademicAIService
  ↓
Express API
  ↓
OpenAI

The frontend sends a deliberately scoped academic context containing:

- Courses
- Assignments
- Academic goals
- Academic workload
- Goal status
- Academic momentum

Authentication credentials and passwords are not included in the AI context.

AI-generated dates are normalized against the application's source assignment data on the server rather than relying on the model to format dates.

# Project Structure

```text
src/

components/
context/
engines/
hooks/
pages/
types/
utils/
```

---

# Design Decisions

### Why an Engine-Driven Architecture?

Business logic was intentionally separated from React presentation components.

Rather than calculating academic metrics directly inside UI components, the application uses dedicated engines and presentation builders.

This allows:

- Business logic to remain testable
- Components to remain focused on presentation
- Analytics to be reused across features
- UI changes to occur without rewriting core calculations
- The application to scale without turning components into large logic containers

# Engine Architecture

The application separates business logic from presentation.

```text
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

Every engine owns a single responsibility.

Engines and builders prepare domain and presentation data.

React components consume those models and render the interface.

---

# Current Engines

## AcademicEngine

Calculates:

* Academic Metrics
* Core Analysis
* Recommendations
* Decisions
* Academic Report
* Insights

---

## DashboardEngine

Builds dashboard presentation models including:

* Hero
* Stats
* Overview
* Focus Cards

---

## AnalyticsEngine

Produces datasets for:

* Weekly Study
* Course Progress
* Assignment Completion



# Engineering Goals

The primary objective of this project is to demonstrate production-quality frontend engineering.

Key design goals include:

* Maintainability
* Scalability
* Separation of Concerns
* Reusable Business Logic
* Strong Type Safety
* Clean UI Architecture


# Screenshots

*(Add screenshots as the UI evolves.)*

---

# Roadmap

### Completed

- Responsive academic dashboard
- Course management
- Assignment management
- Academic analytics
- Notifications
- Theme system
- Ninja Mode
- User-scoped persistence
- Authentication scaffolding
- AI Academic Coach

### Planned

- Calendar / schedule enhancements
- Expanded AI coaching interactions
- Production-grade authentication and session management
- Backend persistence
- Additional accessibility and usability refinement

---

# Lessons Learned

This project reinforced several architectural lessons:

- Keep business logic outside presentation components.
- Treat application state as a shared source of truth.
- Scope persisted data to the authenticated user.
- Keep AI provider logic on the server.
- Do not rely on AI to return authoritative application data.
- Use the application's data as the source of truth for dates and identifiers.
- Avoid unnecessary re-computation when unrelated application state changes.

---

# Installation

Clone the repository.

```bash
git clone <repository-url>
```

Install dependencies.

```bash
npm install
```

Run the development server.

```bash
npm run dev
```

Build for production.

```bash
npm run build
```

---

# License

This project is for educational and portfolio purposes.


I'd eventually add more sections:

## Case Study

A detailed UX and engineering case study covering the product's design process, information architecture, responsive interface system, accessibility decisions, technical architecture, and AI integration.

<!-- [View the Student Portal Case Study](YOUR_CASE_STUDY_URL) -->

