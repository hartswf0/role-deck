# TILTH Negotiation Field

**Ethical Practice Simulator for Agricultural Technology Workers**

---

## What Is This?

TILTH Negotiation Field is an interactive simulation tool for practicing ethical negotiations in agricultural technology workplaces. It uses conversational AI to model power-asymmetric conflicts where individual practitioners must navigate structural constraints.

The name **TILTH** refers to the condition of soil for supporting plant growth—emphasizing cultivation, care, and preparation of the ground for future work.

---

## Quick Start

1. **Open `cb-box.html` in a web browser**
2. **Add your OpenAI API key** (click ∑ ▾ menu → enter API Key)
3. **Select a scenario** (click the logo ⬢ → choose from dropdown)
4. **Begin negotiation** and engage with the ethical dilemma

---

## Components

### Core Files
- **`cb-box.html`** — Main application (single-file, runs in browser)
- **`feedloop-scenarios.js`** — 8 Feed Loop scenario definitions
- **`character-profiles.js`** — Character data for TILTH card system
- **`CENTAUR-BOX-PAPER.md`** — IEEE-style academic paper documenting the system
- **`CENTAUR-BOX-INTEGRATION.md`** — Integration guide for scenario design

### Character Card System
- **`tilth-identity-cards.html`** — Modern practitioner cards
- **`tilth-parts-catalog.html`** — 1960s parts catalog aesthetic
- **`tilth-nebraska-test.html`** — Nebraska Test Report format
- **`tilth-almanac.html`** — Old Farmer's Almanac format
- **`tilth-parts-manual.html`** — Equipment parts manual format
- **`tilth-pocket-reference.html`** — Compact pocket reference format

---

## Scenarios

All 8 Feed Loop scenarios explore ethical conflicts in agricultural technology:

| Episode | Character | Role | Conflict |
|---------|-----------|------|----------|
| 01 | Maya Chen | L&D Lead | Addictive engagement design vs. metrics |
| 02 | Dev Patel | ML Engineer | Algorithmic bias vs. launch deadline |
| 03 | Priya Sharma | Junior UX Designer | Security vulnerability vs. organizational hierarchy |
| 04 | Jordan Lee | UX Designer | Deceptive consent patterns vs. conversion goals |
| 05 | Maria Santos | QA Tester (H-2A) | Worker organizing vs. visa-based retaliation |
| 06 | Dr. Sarah Kim | Data Scientist | Cultural bias in AI vs. investor pressure |
| 07 | Amit Desai | Engineer (H-1B) | Surveillance ethics vs. visa dependency |
| 08 | Sam Okafor | Founder/CEO | Mission integrity vs. company survival |

Each scenario features:
- **ALLY**: Individual practitioner seeking ethical change
- **KEEPER**: Structural authority representing institutional pressures
- **Core Conflict**: The fundamental tension
- **Current Obstacle**: Immediate negotiation barrier

---

## Color Themes

TILTH Field includes agricultural-themed color modes:

### **TILTH Equipment** (default)
Warm earth tones inspired by vintage farm machinery—rust oranges, aged brass, and weathered wood.

### **Field Green**
Cool greens and browns evoking cultivated soil and growing plants—moss, sage, and forest earth.

### **Seed Catalog**
Vintage cream and brown palette from 1960s agricultural catalogs—yellowed paper, sepia ink, and catalog photography.

### Standard Themes
- **Black**: High-contrast dark mode
- **White**: Clean light mode
- **Newspaper**: Print-inspired aesthetic

*Change themes via the logo menu (⬢) → Theme selector*

---

## How It Works

### Negotiation Structure
Each scenario is a **two-party conversation**:
- User can speak as either party or observe AI-AI dialogue
- Both parties have **personality profiles** (12 dimensions: Big Five + decision traits)
- Personalities shift based on dialogue (visualized via radar charts)
- Conversations are **turn-based** with planning/thinking/speaking phases

### AI System
- Uses OpenAI API (GPT-4 class models recommended)
- Character-specific **system prompts** define roles and constraints
- **Strategic planning**: AI generates multiple response options before speaking
- **Belief modeling**: Personality profiles update based on conversation
- **Ethics filter**: Optional content moderation

### Flow Modes
- **MANUAL**: User controls each turn
- **CONFIRM**: User approves each AI action
- **AUTO**: Full AI-to-AI dialogue (observation mode)

---

## Educational Use

TILTH Field is designed for:

1. **Ethics education** in technology programs
2. **Professional development** for tech workers
3. **Labor organizing training** (understanding power dynamics)
4. **Research** on human-AI negotiation

### Pedagogical Approach
- **Experiential learning**: Practice negotiation, don't just read about it
- **Structural analysis**: See how power shapes outcomes
- **No easy answers**: Both parties have legitimate constraints
- **Affective engagement**: Feel the emotional weight of ethical conflicts

---

## Technical Details

### Architecture
- **Single-file HTML app** (no build process, runs locally)
- **Event-driven state management** (custom event bus)
- **SVG radar charts** for personality visualization
- **Responsive design** (mobile-first, 3-panel desktop layout)
- **Modular scenario system** (easy to add new cases)

### Browser Requirements
- Modern browser with ES6+ JavaScript support
- LocalStorage for settings persistence
- SVG rendering support
- Optional: Web Speech API for text-to-speech

### API Configuration
Requires OpenAI-compatible API:
- Default: `https://api.openai.com/v1`
- Models: `gpt-4o-mini` or better recommended
- API key stored in browser LocalStorage (not sent to any server except OpenAI)

---

## Scenario Design Methodology

Scenarios were developed through **human-AI collaborative authoring**:

1. Human identifies ethical pattern (e.g., "bias vs. deadline pressure")
2. Human sketches character backgrounds and stakes
3. AI generates system prompts, personality profiles, initial messages
4. Human refines for structural clarity and authenticity
5. AI formats as scenario data structure
6. Human tests and iterates

This process is documented in `CENTAUR-BOX-PAPER.md`.

---

## Design Philosophy

### Why "Centaur Box"?
The original name referenced the "centaur" model of human-AI collaboration—neither party has complete autonomy; both must negotiate within a shared constraint box.

### Why "TILTH Field"?
Rebranded to emphasize:
- **Cultivation**: Ethics requires preparation and ongoing care
- **Soil health**: Structural conditions enable or prevent growth
- **Agricultural roots**: Grounding in food systems and labor
- **Field work**: Practice happens in real contexts, not abstract theory

### Core Principles
- **Structure matters**: Individual ethics cannot overcome structural constraints
- **Keepers aren't villains**: Authority figures face real pressures
- **Power asymmetry is central**: Negotiation outcomes depend on positional power
- **Practice beats theory**: Experience builds skills that reading cannot

---

## Limitations

- **No user testing**: System developed through design iteration, not empirical validation
- **No assessment**: Does not evaluate negotiation quality or learning outcomes
- **Limited scenarios**: 8 cases focused on agricultural tech (needs expansion)
- **LLM constraints**: Character coherence depends on model quality
- **No collective action**: Scenarios focus on individual-vs-institution (not organizing coalitions)

See `CENTAUR-BOX-PAPER.md` Section VII for detailed limitations discussion.

---

## Future Directions

### Scenario Expansion
- Other technology domains (healthcare, finance, education)
- International contexts (different labor laws, cultural norms)
- Collective action scenarios (union organizing, whistleblower coalitions)
- Historical cases (documented ethics conflicts)

### Assessment & Research
- Negotiation quality rubrics
- Learning outcome measurements
- Comparative studies (vs. traditional case studies)
- Longitudinal skill transfer research

### Technical Enhancements
- Local LLM support (privacy, cost reduction)
- Multi-party negotiations (3+ agents)
- Branching scenario trees (consequence modeling)
- Session replay and analysis tools

---

## Files Guide

```
role-deck/
├── cb-box.html                    # Main application
├── feedloop-scenarios.js          # Scenario definitions
├── character-profiles.js          # Character data
├── CENTAUR-BOX-PAPER.md          # Academic paper
├── CENTAUR-BOX-INTEGRATION.md    # Integration guide
├── TILTH-FIELD-README.md         # This file
├── FINAL-SYSTEM-SUMMARY.md       # Character card system overview
│
├── tilth-identity-cards.html      # Modern practitioner cards
├── tilth-parts-catalog.html       # 1960s catalog aesthetic
├── tilth-nebraska-test.html       # Test report format
├── tilth-almanac.html             # Almanac format
├── tilth-parts-manual.html        # Parts manual format
└── tilth-pocket-reference.html    # Pocket reference format
```

---

## License & Attribution

This system was developed through human-AI collaborative design. Scenarios draw inspiration from documented cases in technology ethics, labor organizing, and critical data studies.

**For academic citation**, see `CENTAUR-BOX-PAPER.md`.

---

## Support & Contact

This is an experimental educational tool. Use at your own discretion.

**For issues**:
- Check browser console for errors
- Verify API key configuration
- Try different LLM models if responses are inconsistent
- Reset state (logo menu → ↻ Reset)

**No warranty provided**. System behavior depends on LLM responses, which can be unpredictable.

---

## Quick Reference

### Keyboard Shortcuts
- **Tab cycling**: `⇆` button (mobile) or click panel headers (desktop)
- **Next turn**: Logo menu → ➤ Next
- **Pause/Resume**: Logo menu → ‖ / ▶

### Status Indicators
- **Φ IDLE**: No active scenario
- **Φ PLAN**: AI generating response options
- **Φ THINK**: AI deliberating between options
- **Φ SPEAK**: AI generating final message
- **T[n]**: Turn number
- **[time]**: Elapsed time

### Panel Layout
- **Left**: ALLY chat & controls
- **Center**: KEEPER chat & controls
- **Right**: OBSERVER log & personality radars

Mobile: Swipe or use ⇆ to switch between panels.

---

**Welcome to the TILTH Negotiation Field. Practice changes systems.**
