# 🎓 Student Portal SaaS

A modern academic productivity platform built with React, TypeScript, and an engine-driven architecture.

The Student Portal helps students manage coursework, assignments, academic performance, study habits, and long-term goals through intelligent analytics and a clean, responsive user experience.

---

## Overview

This project began as a simple student dashboard but evolved into a modular academic management platform.

Instead of placing business logic inside React components, the application is built around independent engines responsible for calculations, analytics, recommendations, and presentation models.

The result is a scalable architecture that resembles how production SaaS applications are engineered.

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
* CSS Modules / Modern CSS
* Responsive Layout

## Architecture

* Engine-based Architecture
* Builder Pattern
* Pure Functions
* View Models
* Feature-first Organization

---

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

# Engine Architecture

The application separates business logic from presentation.

```text
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

Every engine owns a single responsibility.

Components render data.

Engines create data.

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

---

# Future Roadmap

Planned engines include:

* GoalEngine
* RecommendationEngine
* NotificationEngine
* CalendarEngine
* SearchEngine
* AIEngine
* DataEngine

These additions will continue expanding the platform while preserving the same architecture.

---

# Engineering Goals

The primary objective of this project is to demonstrate production-quality frontend engineering.

Key design goals include:

* Maintainability
* Scalability
* Separation of Concerns
* Reusable Business Logic
* Strong Type Safety
* Clean UI Architecture

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

# Screenshots

*(Add screenshots as the UI evolves.)*

---

# Learning Goals

This project is an ongoing exploration of modern frontend engineering, UI/UX design, software architecture, and scalable React application development.

Every major feature is intentionally designed to improve both user experience and engineering quality.

---

# License

This project is for educational and portfolio purposes.


I'd eventually add three more sections:
Design Decisions – Explain why you chose an engine architecture instead of putting everything in components.
Case Study – Link to the polished UI/UX case study page you've been planning for hiring managers.
Lessons Learned – Briefly describe architectural challenges you solved during development.
