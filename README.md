# HIV/AIDS & STIs Committee Lab

An open-access committee work hub for shaping an integrated HIV services case-study report.

**Live site:** [Integrated Services Case Study Lab](https://hyunji-kim-strategy-portfolio.khyunji914.chatgpt.site)

## What this project does

The site turns strategic direction from the HIV/AIDS & STIs Committee's co-chair discussions into a practical workflow for:

- defining the case-study question, population, setting, and intended users;
- collecting country and programme cases, research, policy sources, and member perspectives;
- comparing proposed cases through a shared evaluation framework; and
- moving evidence toward a case-study report with practical recommendations.

The Committee Lab adds a collaborative evidence board where participants can submit:

- country or programme cases;
- evidence and resources; and
- member perspectives.

Contributions can be filtered by type and reviewed through community voting. The workspace is designed to be usable without a sign-in or invitation code.

## Why it was built

Committee work often produces good ideas across meetings, documents, and individual conversations, but those ideas can be difficult to turn into a shared decision process. This project makes the work visible by combining strategic framing, a decision tracker, an evidence model, and a lightweight contribution workflow in one place.

## Product and strategy contribution

- Translated co-chair meeting direction into a clear case-study information architecture.
- Designed the workplan, decision tracker, output-progress view, and six-lens case evaluation framework.
- Built a public contribution flow for evidence, cases, and member perspectives.
- Implemented visitor-based participation and voting without requiring ChatGPT sign-in or an invite code.
- Refined the layout for readable desktop and mobile use, including wide-screen proportions and responsive evidence-board cards.
- Structured the project as a working prototype that can support real committee scoping and evidence collection.

## Technical implementation

- Next.js / Vinext with React and TypeScript
- Tailwind CSS with a custom editorial grid and high-contrast red, black, and off-white visual system
- Vite and Cloudflare Worker-compatible build
- Cloudflare D1 with Drizzle ORM for contributions and votes
- Server routes for public contributions, visitor identification, and voting
- Responsive landing page and interactive Committee Lab workspace

## Repository structure

```text
app/
  page.tsx                         Committee strategy and case-study landing page
  workspace/                       Evidence board and contribution workspace
  api/                             Public contribution and voting routes
db/                                D1 schema and database access
public/                            Site imagery and static assets
components/ui/                     Reusable interface primitives
worker/                            Cloudflare Worker entry point
.openai/hosting.json               Sites deployment configuration
```

## Run locally

Requirements: Node.js `>=22.13.0`.

```bash
npm ci
npm run dev
```

To create a production build:

```bash
npm run build
```

## Public repository note

This repository is a public-facing prototype and portfolio project. It contains no committed environment files or runtime credentials; `.env*` files and build output are excluded through `.gitignore`. The committee-facing copy and evidence approach should still be reviewed for organisational clearance before being reused outside its intended context.

**Concept and coordination:** Hyunji Kim
