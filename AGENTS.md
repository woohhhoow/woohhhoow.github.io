# AGENTS.md - Codex Instructions

## 1. Project Context

This is Wu Haiwen's personal portfolio website for landscape architecture, spatial design, ecological thinking, and visual narrative.

The project was initially developed with Gemini assistance and then manually refined by the user. Codex should treat it as an existing authored website, not as a blank project.

Work from the current file structure, naming habits, visual logic, and interaction systems. Do not rewrite or rebuild the project unless the user explicitly asks.

---

## 2. Instruction Priority

This file provides long-term project guidance.

The user's current explicit instruction always takes priority over the default directions in this document.

This document is project memory and a safety guide, not a creative limitation.

The website is allowed to evolve. Future user requests may intentionally change the site structure, visual system, interaction style, page hierarchy, project display logic, content strategy, or overall experience.

If a current user request conflicts with this document, briefly point out the conflict or risk, then continue according to the user's confirmation or explicit instruction.

If the requested change may affect file structure, routing, i18n, deployment, global CSS, global JS, image paths, or Git workflow, briefly point out the possible impact before editing.

---

## 3. Technical Stack

Default stack:

* Vanilla HTML
* Vanilla CSS
* Vanilla JavaScript
* Static folder-based routing
* GitHub Pages-compatible deployment
* Custom bilingual system through `js/i18n.js`

Do not introduce frameworks or build systems unless the user explicitly requests it.

Avoid adding:

* React
* Vue
* Vite
* Tailwind
* Bootstrap
* jQuery
* TypeScript
* npm build tools
* CMS or server-side dependencies

If a technical migration is requested, first explain its impact on file structure, deployment, and maintainability.

---

## 4. File Structure Rules

Always inspect the real project structure before editing.

Current expected structure:

```text
/
├── index.html
├── archive/
│   └── index.html
├── about_me/
│   └── index.html
├── projects/
│   └── project_name/
│       └── index.html
├── css/
├── js/
├── asset/
├── docs/
└── AGENTS.md
```

Rules:

* Do not move, rename, or delete existing folders unless explicitly requested.
* The real media folder in this project is `asset/`, not `assets/`.
* Do not change `asset/` to `assets/`, or the reverse, unless explicitly requested.
* New project pages should normally follow:

```text
projects/project_name/index.html
```

* When editing links, check relative path depth carefully:

  * root pages
  * `archive/`
  * `about_me/`
  * `projects/project_name/`

If the user asks to restructure the website, first describe the proposed new structure and list affected paths.

---

## 5. Naming Conventions

Preserve existing naming habits unless the user requests a new convention.

Default conventions:

* Project folders use lowercase or snake_case.
* CSS classes use semantic, hyphenated names.
* Image files follow the existing naming pattern in each folder.

Examples:

```text
project_subtraction_of_land
project_breath_of_the_wilderness
project-hero
single-img-section
archive-list-item
reveal-fade
01.jpg
02.jpg
03.jpg
```

Do not globally rename files, folders, or classes unless the user explicitly requests a cleanup or refactor.

---

## 6. i18n / Bilingual Rules

The website uses a custom bilingual system.

Before editing bilingual content, inspect:

```text
js/i18n.js
```

and the relevant HTML files.

Rules:

* Do not break the language switch.
* Do not remove existing translation keys without confirmation.
* If a page uses `data-i18n`, new visible text should also use `data-i18n`.
* New bilingual content should include both English and Chinese.
* Avoid large hard-coded bilingual text blocks in HTML if the page already uses `js/i18n.js`.
* If a page does not currently use i18n, do not force-migrate it unless requested.

If the user requests changes to the i18n system, explain the impact first.

---

## 7. Image and Asset Rules

Project images, drawings, plans, sections, diagrams, and model images are core content.

Rules:

* Do not distort image proportions.
* Do not crop important architectural or landscape drawings.
* Do not move or rename project image folders unless requested.
* Do not replace carefully prepared image layouts with generic templates.

Default behavior for technical drawings:

```css
object-fit: contain;
```

Use `object-fit: cover` only for decorative or atmospheric images, not for core drawings.

If a page uses a lightbox, new project images should remain compatible with the existing lightbox logic.

---

## 8. Visual Direction

Default visual direction:

* editorial
* minimal
* quiet
* premium
* spatial
* academic
* restrained
* breathable
* cinematic

Default visual system:

* black / white / grey
* generous whitespace
* refined typography
* clear hierarchy
* subtle motion
* drawing-centered layouts

Avoid by default:

* cheap template aesthetics
* excessive shadows
* decorative gradients without purpose
* crowded layouts
* bouncy animations
* careless image cropping

These are default preferences, not fixed limitations. If the user requests a different visual direction, follow the request while preserving technical stability.

---

## 9. Interaction Rules

Before editing JavaScript, inspect the relevant existing scripts, such as:

```text
js/global.js
js/home.js
js/project.js
js/i18n.js
```

Preserve existing interaction systems unless the user asks to change them:

* language switching
* mobile navigation
* archive accordion
* scroll reveal
* lightbox
* smooth scrolling
* homepage canvas or visual effects
* marquee or scrolling text systems
* mobile viewport fixes such as `100svh`

Default interaction tone:

* lightweight
* smooth
* calm
* precise
* transform / opacity based
* easy to maintain

If the user requests new interactions, implement them without breaking existing global behavior.

---

## 10. Editing Workflow

Before editing, briefly state:

* which files will likely be affected
* what type of change it is:

  * visual
  * content
  * structure
  * interaction
  * i18n
  * deployment
  * documentation

During editing:

* keep scope narrow
* do not modify unrelated files
* do not rewrite whole pages unless requested
* do not delete existing content unless requested
* do not move files unless requested
* do not introduce frameworks unless requested

After editing, always provide:

```text
Changed Files:
- path/to/file
- path/to/file
```

Also include:

* what changed
* how to preview locally
* whether i18n keys changed
* whether manual checking is needed

---

## 11. Git Workflow

Default assumptions:

* Small edits may happen on the current branch.
* Larger edits should use a new branch or worktree.

Suggest a new branch or worktree for:

* major visual redesigns
* new page systems
* archive restructuring
* global CSS changes
* global JS changes
* i18n restructuring
* deployment changes

Example branch names:

```text
codex/homepage-refinement
codex/archive-redesign
codex/project-page-system
codex/mobile-navigation-fix
```

Commit rules:

* Do not commit unless the user asks.
* Do not push unless the user explicitly confirms.
* Use clear commit messages.

Examples:

```text
docs: add project guidance documents
feat: add new project detail page
fix: adjust mobile archive spacing
refactor: simplify lightbox initialization
```

Never run `git push` without explicit confirmation.

---

## 12. Documentation Rules

Required long-term documents:

```text
AGENTS.md
docs/PROJECT_BRIEF.md
```

Roles:

* `AGENTS.md` contains Codex / AI assistant working rules.
* `docs/PROJECT_BRIEF.md` contains design direction, content logic, and portfolio positioning.

Future documentation should usually be placed inside:

```text
docs/
```

Examples:

```text
docs/DESIGN_SYSTEM.md
docs/CONTENT_GUIDE.md
docs/DEPLOYMENT_NOTES.md
docs/CHANGELOG_NOTES.md
```

Do not scatter Markdown files in the root directory unless requested.

Before major visual, structural, content, or interaction work, read:

```text
AGENTS.md
docs/PROJECT_BRIEF.md
```

If the user introduces a new long-term rule, ask whether it should be added to `AGENTS.md` or `docs/PROJECT_BRIEF.md`.

Temporary task instructions do not need to be added to documentation.

---

## 13. Flexibility

This website is allowed to evolve.

The user may later request changes to:

* visual system
* page structure
* navigation logic
* interaction style
* project presentation format
* content hierarchy
* media strategy

These changes are valid when clearly requested.

Use this document to protect the project from accidental damage, not to prevent intentional creative development.

---

## 14. Reference Documents

* `docs/PROJECT_BRIEF.md` is the long-term reference for design direction, content logic, and visual atmosphere.
* Before future visual, structural, content, interaction, or page-system changes, read both `AGENTS.md` and `docs/PROJECT_BRIEF.md`.
* Other long-term Markdown documents should be placed consistently inside the `docs/` folder.
* Do not scatter Markdown files in the project root unless the user explicitly requests it.
