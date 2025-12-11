---
description: Create and audit a pattern glossary with Void Guardian + Edge Scout + Deep Leverage protocols
---

# Pattern Glossary Audit Workflow

This workflow describes the process used to create `pattern-glossary.html` and fortify it with academic rigor through three audit protocols.

## Overview

The glossary captures recurring design patterns in the Role Deck ethical design toolkit. Each pattern is grounded in verifiable academic literature through a multi-layer audit process.

---

## Phase 1: Initial Scaffolding

1. Create `pattern-glossary.html` with basic structure:
   - Header with title, subtitle, version metadata
   - Table of Contents with anchor links
   - Ontology Types section (D, C, S, T, I, N, A, P)
   - Morphisms section (structure-preserving maps)
   - Pattern cards with standardized layout

2. Define pattern card structure:
   ```html
   <article class="pattern-card" id="pattern-name">
     <div class="pattern-head">
       <div class="pattern-name">pattern-name <span class="audit-badge">STATUS</span></div>
       <div class="pattern-zones">zone chips</div>
     </div>
     <div class="pattern-body">
       <div class="pattern-def">Definition</div>
       <div class="pattern-grounding">Academic grounding</div>
       <dl class="pattern-meta">Mechanism, Source</dl>
       <div class="pattern-refs">Key citations</div>
     </div>
   </article>
   ```

---

## Phase 2: Void Guardian Audit

**Axiom:** "If you can't cite it, you can't claim it."

1. For each pattern, evaluate existing citations:
   - Check if source is archival (peer-reviewed journal, conference proceedings)
   - Verify page numbers, DOI, or specific chapter
   - Check for "category errors" (wrong application of theory)
   - Check for "prestige citations" (famous name without direct relevance)
   - Check for "hallucinated sources" (non-existent papers)

2. Remediation actions:
   - **Replace** weak sources with archival equivalents
   - **Add** `.void-note` explanations for transplants/syntheses
   - **Remove** non-grounded claims or mark as "Novel Synthesis"

3. Apply audit badges:
   - `✓ GROUNDED` — All claims have archival support
   - `⚠ CAUTION` — Valid but with acknowledged scale/domain transplant
   - `⚡ EDGE+` — Includes 2022-2025 cutting-edge research

---

## Phase 3: Edge Scout Fortification

**Focus:** Integrate 2022-2025 research from premier venues (UIST, CHI, Science, IEEE TVCG).

1. For each pattern, identify relevant recent work:
   - **visual-navigation**: Knoll, ImaginationVellum (UIST '25)
   - **negotiation-simulation**: Habermas Machine (Science 2024)
   - **ai-characters**: Generative Agents (UIST '23), Generative Ghosts
   - **phase-sequencing**: Magentic-UI (Microsoft 2025)
   - **belief-modeling**: Dark Patterns Ontology (CHI '24)
   - **trail-awareness**: Persist (EuroVis '24), Loops (TVCG '25)

2. Add `.edge-note` styling (green callout) for each integration.

3. Update bibliography with "Edge Scout Literature (2022-2025)" section.

---

## Phase 4: Deep Leverage Integration

**Focus:** Add philosophical/theoretical foundations from "Undaunted Courage" leverage zones.

1. Key sources to integrate:
   | Leverage Zone | Key Source | Pattern Target |
   |--------------|------------|----------------|
   | Cognition | Frances Yates (Art of Memory, 1966) | visual-navigation |
   | Cognition | David Turnbull (Masons, 2000) | visual-navigation |
   | Cognition | Charles Goodwin (Professional Vision, 1994) | visual-navigation |
   | Agency | Michael Bratman (Intention, 1987) | ai-characters |
   | Communication | Walter Ong (Orality & Literacy, 1982) | trail-awareness |
   | Communication | D.C. Greetham (Textual Scholarship, 1994) | trail-awareness |
   | Politics | Paulo Freire (Pedagogy of the Oppressed, 1970) | belief-modeling |
   | Ethics | Alasdair MacIntyre (After Virtue, 1981) | belief-modeling |
   | Negotiation | Chris Voss (Never Split the Difference, 2016) | negotiation-simulation |

2. Add `.leverage-note` styling (purple callout) for deep theoretical grounding.

3. Add `🏛 DEEP` audit badge for philosophically fortified patterns.

4. Update bibliography with "Deep Leverage Sources" section.

---

## Phase 5: Final Polish

1. Update header metadata:
   ```
   v1.03 · Void Guardian + Edge Scout + Deep Leverage · December 2025 · 10 patterns · 38 sources
   ```

2. Ensure bibliography is organized in three tiers:
   - Foundational Literature
   - Deep Leverage Sources
   - Edge Scout Literature (2022-2025)

3. Add footer with audit axiom:
   ```
   "The front door is locked. Break the basement window." — Undaunted Courage
   ```

// turbo
4. Test locally:
   ```bash
   cd /Users/gaia/role-deck && python3 -m http.server 8001
   ```
   Navigate to: http://localhost:8001/pattern-glossary.html

---

## Output Artifacts

- `pattern-glossary.html` — The audited glossary (38 sources, 10 patterns)
- Links added to `HUB.html` and `index.html`
- Workflow documented in `.agent/workflows/glossary-audit.md`

---

## Audit Report Summary

| Category | Count |
|----------|-------|
| Patterns | 10 |
| Foundational Sources | 21 |
| Deep Leverage Sources | 10 |
| Edge Scout Sources | 8 |
| **Total Citations** | **38** |
| Audit Badges: ✓ GROUNDED | 2 |
| Audit Badges: ⚠ CAUTION | 1 |
| Audit Badges: ⚡ EDGE+ | 4 |
| Audit Badges: 🏛 DEEP | 3 |
