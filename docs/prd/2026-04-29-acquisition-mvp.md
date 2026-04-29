# PRD — Acquisition MVP: Find Suppliers in Uzbekistan

## Problem Statement
MadeInUzbekistan.org needs a direct acquisition path for high-intent buyers looking for suppliers in Uzbekistan. Without a focused landing page and inquiry flow, SEO traffic cannot convert into leads in a reliable, operator-friendly way.

## Solution
Build an English-first acquisition MVP centered on a public `Find Suppliers in Uzbekistan` landing page. The page should attract buyer-intent search traffic, capture structured inquiries, persist them in the lead system, notify the operator, and provide a minimal internal inbox for follow-up.

## User Stories
1. As a buyer, I want a clear landing page for finding suppliers in Uzbekistan, so that I immediately know the site is relevant to my sourcing goal.
2. As a buyer, I want a strong CTA near the top of the page, so that I can submit my requirement without searching.
3. As a buyer, I want to understand why sourcing from Uzbekistan matters, so that I gain confidence in the opportunity.
4. As a buyer, I want to see a simple explanation of how the process works, so that I know what happens after I submit.
5. As a buyer, I want a short inquiry form, so that I can send my requirement with minimal effort.
6. As a buyer, I want field validation, so that I can fix mistakes before submission fails silently.
7. As a buyer, I want a success message after submission, so that I know my request was received.
8. As an operator, I want each inquiry saved as a lead, so that I do not lose sourcing opportunities.
9. As an operator, I want each lead tagged with a source, so that I know which acquisition path is working.
10. As an operator, I want email notification for new inquiries, so that I can follow up quickly.
11. As an operator, I want a minimal internal inbox view, so that I can review recent inquiries without direct database access.
12. As a search engine, I want title, meta description, canonical, and structured data, so that the page is understandable and indexable.

## Implementation Decisions
- Use a single Next.js application for both the public acquisition page and the minimal internal leads view.
- Use Prisma with Postgres as the persistence layer from the start.
- Keep the first acquisition surface English-first.
- Model inquiry capture as a small server-side submission boundary with schema validation and persistence.
- Use a dedicated lead source value for this landing page to preserve attribution.
- Keep the first internal inbox minimal: recent lead list only.
- Use Resend for operator notifications in the next slice.
- Keep authentication out of this MVP phase.

## Testing Decisions
- Prefer testing external behavior: valid inquiry accepted, invalid inquiry rejected, lead saved, notification attempted, inbox renders expected states.
- Prioritize validation and persistence boundaries first because they protect the money path.
- Verify each slice with lint, build, and direct behavior checks.

## Out of Scope
- Real supplier-matching logic
- Advanced CRM workflows
- Full admin suite
- Multilingual rollout
- Dynamic recommendation engine
- Authentication and role management

## Further Notes
Current progress already includes the landing page scaffold, validated form submission, and lead persistence. Remaining high-priority work includes operator email notification and stronger first-operator workflow polish.
