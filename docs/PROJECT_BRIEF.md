# PROJECT_BRIEF.md - Wu Haiwen Portfolio Website

## 1. Project Overview

This website is Wu Haiwen's personal portfolio and digital exhibition system, focused on landscape architecture, spatial design, ecological thinking, and visual narrative.

It should not feel like a generic portfolio template. It should communicate a designed reading experience: calm, structured, atmospheric, and editorial.

The website supports professional presentation, academic review, internship or job applications, and long-term personal branding.

---

## 2. Audience

The website is intended for:

* landscape architecture studios
* architecture and spatial design offices
* academic reviewers
* senior designers
* art directors
* collaborators
* internship and job application reviewers

It should balance:

* visual impression
* professional credibility
* clear project information
* design atmosphere
* personal identity

---

## 3. Design Identity

The current default identity can be summarized as:

```text
Systemic Ecologies & Spatial Narratives
```

The website should communicate:

* spatial thinking
* ecological systems
* site-specific design logic
* atmosphere-making
* human experience in space
* material and environmental sensitivity
* multi-scale landscape thinking
* careful visual composition

The tone should be professional but not cold, poetic but not vague, refined but not decorative.

---

## 4. Default Visual Direction

Default visual direction:

* editorial
* minimalist
* cinematic
* academic
* restrained
* quiet
* precise
* spacious
* monographic

The website should feel closer to:

* an architectural monograph
* a printed portfolio
* a design research archive
* an exhibition catalogue

rather than:

* a commercial landing page
* a colorful agency website
* a generic template portfolio
* an animation demo

---

## 5. Visual Flexibility

The visual direction above is the default foundation, not a permanent limitation.

Future pages, projects, or sections may become more experimental if the user requests it.

Possible future changes may include:

* stronger color systems for specific projects
* new interaction structures
* expressive page transitions
* experimental media layouts
* video-based project storytelling
* WebGL or canvas-based visual systems
* new archive logic
* new project page templates

Such changes should still respect file safety, routing, i18n logic, and maintainability.

---

## 6. Typography Direction

Preferred typography logic:

* serif display type for titles, statements, and poetic emphasis
* sans-serif type for UI, navigation, metadata, captions, and structured information
* small uppercase labels with wide letter spacing for refined interface details
* readable body text with generous line height

Typography should support both academic clarity and atmospheric storytelling.

---

## 7. Color Direction

Default color system:

* black
* white
* grey
* transparent black
* transparent white
* subtle opacity layers

The site should generally rely on:

* contrast
* spacing
* hierarchy
* image composition
* typography

rather than decorative color.

Project-specific color systems are allowed when requested or when they support the concept of a page.

---

## 8. Spacing and Layout

Whitespace is an important part of the website's design language.

The layout should generally preserve:

* generous margins
* slow reading rhythm
* clear hierarchy
* precise alignment
* careful image-text relationships
* breathing space around drawings and project images

Avoid compressing content only to show more information above the fold.

The site should not feel crowded unless the user intentionally requests a denser or more archival layout.

---

## 9. Image and Drawing Philosophy

Architectural and landscape drawings are primary content.

Plans, sections, diagrams, model photos, and project images should normally be shown with respect for their full composition.

Default principle:

```text
Protect drawing integrity.
```

Preferred behavior:

* preserve aspect ratio
* use contained image display for drawings
* provide enough margin around drawings
* avoid aggressive cropping
* use lightbox or large-view systems when helpful

Cropping can be used for atmospheric, decorative, or preview images, but not for core technical drawings unless the user requests that effect.

---

## 10. Site Structure

The current site is organized around several core modules.

### Home

Expected role:

* first impression
* personal identity
* atmosphere
* conceptual entry point
* contact or entry navigation

### Archive

Expected role:

* project index
* selected works
* other works
* chronological or thematic structure
* navigation toward project detail pages

### Project Detail Pages

Expected role:

* immersive project narrative
* complete project presentation
* image and drawing sequence
* metadata
* statement
* captions
* visual storytelling

Typical path pattern:

```text
projects/project_name/index.html
```

### About Me

Expected role:

* biography
* CV
* education
* experience
* awards
* publications
* contact
* design philosophy

This structure may evolve if the user requests new sections, new pages, or a different portfolio system.

---

## 11. Content Logic

Each project should be presented as a design narrative, not just an image collection.

A strong project page may include:

* site problem
* design question
* spatial strategy
* ecological system
* user or behavioral logic
* temporal process
* material or atmospheric idea
* final design outcome

Project metadata may include:

* title
* year
* location
* type
* scale
* role
* status
* collaborators
* academic or professional context

Figure captions should be precise and calm.

Example:

```text
Fig. 01 - Site strategy diagram.
Fig. 02 - Seasonal water movement and planting structure.
```

---

## 12. Bilingual Content Direction

The website may use both English and Chinese.

English tone:

* academic
* professional
* precise
* standard landscape / architecture terminology

Chinese tone:

* fluent
* accurate
* not overly translated
* not casual
* clear in design logic

Avoid stiff machine-translation style.

If a page uses the existing i18n system, English and Chinese content should remain synchronized through the translation structure.

---

## 13. Interaction Direction

Interactions should normally be:

* calm
* precise
* smooth
* lightweight
* purposeful
* low-noise

Preferred interaction types:

* subtle hover
* opacity transition
* fine underline
* scroll reveal
* controlled image preview
* cinematic lightbox
* smooth page rhythm

Avoid by default:

* bouncy animation
* aggressive cursor effects
* noisy parallax
* excessive rotation
* overly decorative motion

More experimental interactions are allowed if the user requests them for a specific concept or page.

---

## 14. Mobile Direction

Mobile experience should remain stable and readable.

Important principles:

* do not rely on hover
* navigation must remain usable
* drawings must remain legible
* grids should collapse cleanly
* text should not become too small
* image aspect ratios should remain protected
* viewport height issues should be handled carefully

---

## 15. Future Development Direction

The website can evolve over time.

Possible future directions:

* new project detail pages
* stronger archive filtering
* journal / research section
* video modules
* process animations
* expanded bilingual project narratives
* refined design system documentation
* improved i18n loading
* experimental visual systems
* canvas or WebGL elements
* more flexible project page templates

Future changes should be intentional and reviewed, not accidental side effects of unrelated edits.

---

## 16. Preserve by Default

Preserve by default:

* static Vanilla HTML/CSS/JS architecture
* existing folder routing
* existing media paths
* i18n logic
* drawing aspect ratio protection
* calm editorial atmosphere
* generous spacing
* restrained interaction tone
* project page narrative structure
* archive as project index
* lightbox or large-view image logic if already present

These can change when the user clearly requests a change.

---

## 17. Avoid by Default

Avoid by default:

* generic template style
* heavy commercial landing-page aesthetics
* careless full-screen image cropping
* excessive color systems
* decorative gradients without purpose
* heavy shadow-based card layouts
* unnecessary frameworks
* rebuilding the website when a local edit is enough
* modifying many unrelated files in one task

---

## 18. Long-Term Principle

This website should remain both stable and evolvable.

The documentation should protect the project from accidental damage, but it should not prevent intentional creative development.

When a new user request conflicts with the current design direction, the new request can override the default direction. In that case, the change should be made deliberately, with awareness of what project rules or systems it affects.
