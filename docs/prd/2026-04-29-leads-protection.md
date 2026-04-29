# PRD — Protect Internal Leads Inbox

## Problem Statement
The `/leads` route is currently public. That exposes internal buyer inquiries and creates an immediate privacy and business risk.

## Solution
Add a minimal environment-driven protection layer to the internal leads inbox so only authorized operators can access it during the MVP phase.

## User Stories
1. As an operator, I want the leads inbox hidden from the public, so that buyer data is not exposed.
2. As an operator, I want a quick MVP-safe protection method, so that we reduce risk before full auth exists.
3. As a developer, I want the protection to depend on environment configuration, so that deployment stays simple.
4. As a developer, I want unauthorized requests rejected before lead data loads, so that internal data does not leak.
5. As an operator, I want the protection method documented, so that I know how to access the page after deploy.

## Implementation Decisions
- Use HTTP Basic Auth driven by environment variables for the MVP phase.
- Protect the internal leads inbox at request time before lead data loads.
- Keep public acquisition routes untouched.
- Defer full authentication and role management.

## Testing Decisions
- Verify externally visible behavior only: unauthorized blocked, authorized allowed, public routes unaffected.
- Use lint/build and route behavior checks.

## Out of Scope
- Full login system
- User roles
- Session management
- Broader admin protection
