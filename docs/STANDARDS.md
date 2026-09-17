# Student Portal Standards

## Feature Rules
- Every feature uses hooks/, sections/, and types/.
- Pages compose sections only.
- Pages do not render business logic.

## Engine Rules
- Engines own calculations.
- Builders are pure functions.
- UI never computes metrics.

## Section Rules
- One responsibility per section.
- No business logic.
- Receive presentation-ready models.

## Component Rules
- Components render only.
- No filtering.
- No sorting.
- No engine calls.