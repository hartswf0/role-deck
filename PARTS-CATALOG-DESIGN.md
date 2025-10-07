# TILTH Parts Catalog — 1960s Farm Equipment Aesthetic

## 🎯 Design Transformation

**From:** Modern tech worker cards with photos  
**To:** 1960s tractor parts specification sheets with radar diagrams

## 📐 Typography System (Authentic 1960s)

### Headlines (Condensed Punch)
- **Oswald 700** — Modern substitute for Folio Bold Condensed
- All-caps, tight leading, powerful headlines
- Used for: Model names, catalog title
- Example: International Harvester's 1966 "Cadet is for keeps!" ad

### Technical Text (Squared Modernism)
- **Space Grotesk 700** — Eurostile/Microgramma substitute
- Rounded-square forms evoke TV screens and space-age engineering
- Used for: Part numbers, spec labels, botanical codes
- Signifies: 1960s technology, industrial precision

### Body Copy (American Grotesk)
- **Roboto Condensed** — Trade Gothic substitute
- No-nonsense, condensed, headline-ready
- Used for: Specifications, descriptions
- Voice: Industrial, practical, worker-facing

## 🎨 Color Palette (Farm Equipment Heritage)

```css
--harvest-yellow: #F4A520    /* John Deere gold, attention markers */
--tractor-green: #3A5F2A     /* Equipment green, approval stamps */
--machinery-red: #B03528     /* International Harvester, high risk */
--implement-gray: #6B6B5F    /* Steel components, neutral data */
--field-black: #1A1A16       /* Headers, text, chassis */
--parchment: #E8E4D0         /* Paper stock, background */
--spec-blue: #2A4A6B         /* Technical diagrams, low risk */
```

**Risk Color Coding:**
- **Red (#B03528):** High risk (>60%) — machinery red, danger
- **Yellow (#F4A520):** Medium risk (30-60%) — harvest gold, caution
- **Blue (#2A4A6B):** Low risk (<30%) — spec blue, stability

## 🏗️ Layout Structure (1960s Spec Sheet)

### Header Stripe
```
[Perforated edge pattern]
────────────────────────
[BLACK BAR]
PART NO. TILTH-01-2048
MAYA CHEN
[Identity Badge: EDUCATOR]
────────────────────────
```

### Specifications Grid
```
SPECIFICATIONS
─────────────────
Role: Learning & Development Lead
App:  GrowthPath

Awareness: 95%    Action:   45%
Impact:    30%    Risk:     30%
```

### Technical Diagram (Radar Chart)
```
TECHNICAL PROFILE — 11-AXIS SCHEMATIC
    
        [11-point spider diagram]
    Hatched fill pattern (1960s style)
    Bold stroke, junction points marked
```

### Botanical Code (ASCII Plant Pattern)
```
BOTANICAL CLASSIFICATION
────────────────────────
    ┌─┐ CANOPY BALANCED
    │▓│ Root: Moderate
    └─┘ Spread: Controlled
```

### Performance Data (Bar Charts)
```
FIELD PERFORMANCE DATA
──────────────────────
AWARENESS  [████████████████░░] 95%
ACTION     [████████░░░░░░░░░░] 45%
IMPACT     [██████░░░░░░░░░░░░] 30%
CAREER RISK[██████░░░░░░░░░░░░] 30%
```

### Footer Stamp
```
[GREEN BAR]
TILTH CERTIFIED — SERIES 2048
```

## 📊 Visual Elements

### 1. Perforated Edge
```css
repeating-linear-gradient(
    90deg,
    black 0px, black 2px,
    transparent 2px, transparent 12px
)
```
Evokes: Tractor feed printer paper, punch cards

### 2. Dot Matrix Texture
```css
background: url('data:image/svg+xml;...')
```
Halftone dots overlay entire page — mimics 1960s print quality

### 3. Hatched Radar Fill
```svg
<pattern id="hatch">
    <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" />
</pattern>
```
Engineering diagrams used diagonal hatching, not solid fills

### 4. Dashed Borders
```css
border-bottom: 2px dashed var(--implement-gray);
```
Parts catalog dividers between specifications sections

### 5. Box Shadow (Drop Shadow)
```css
box-shadow: 4px 4px 0 rgba(0,0,0,0.2);
```
Print registration offset — authentic 1960s printing artifact

## 🌾 Botanical Code System

**Purpose:** Abstract plant growth pattern replaces human photos

### High Risk Pattern (Thorns)
```
╔═╗ THORNS ENGAGED
║█║ Root: Deep
╚═╝ Spread: Aggressive
```
Characters: Maria Santos (100% risk)

### Medium Risk Pattern (Canopy)
```
┌─┐ CANOPY BALANCED
│▓│ Root: Moderate
└─┘ Spread: Controlled
```
Characters: Maya Chen, Dev Patel, Sarah Kim

### Low Risk Pattern (Dormant)
```
┌─┐ DORMANT STATE
│░│ Root: Shallow
└─┘ Spread: Minimal
```
Characters: Priya Sharma, Jordan Lee, Amit Desai

**Metaphor:** Each practitioner is a cultivar with growth characteristics, not a human face

## 🔧 Technical Diagram (Radar Chart)

### 11-Axis Schematic
- **OPEN** — Openness to finding problems
- **CONSC** — Conscientiousness in documentation
- **EXTRA** — Extraversion (public vs. private action)
- **AGREE** — Agreeableness to authority
- **NEURO** — Neuroticism under pressure
- **LOGIC** — Logical/data-driven reasoning
- **EMPATH** — Empathy for harmed users
- **AUTH** — Authority/institutional power
- **RISK** — Risk tolerance
- **UNCERT** — Comfort with uncertainty
- **DECIS** — Decisiveness speed

**Visual Style:**
- Bold stroke (3px)
- Junction points marked as circles
- Hatched fill (diagonal lines)
- Axes labeled in condensed sans
- Concentric circles for scale (1-5)

**Reads as:** Engineering schematic, not personality test

## 📄 Print Optimization

### 4-Up Layout
```css
@media print {
    .parts-grid {
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
}

@page {
    size: letter;
    margin: 0.5in;
}
```

**Output:** 2 cards per row, 4 per page on standard Letter/A4

### High Contrast
- Black text on white background
- No gradients or complex shading
- Bar charts work in grayscale
- Hatched patterns print clearly

### No Human Photos
- Only radar diagrams and botanical codes
- ASCII plant patterns remain legible when printed
- Worker-facing documentation (not marketing material)

## 🎯 Design Intent

### What It Evokes
- **1960s tractor dealership parts counter**
- Mechanic consulting specification sheets
- Industrial catalog, not consumer brochure
- Worker-to-worker documentation
- "Here's how this unit performs under load"

### What It's NOT
- Not a personality profile
- Not a LinkedIn card
- Not a trading card game
- Not consumer marketing

### Voice & Tone
- **Technical:** Specifications, not narratives
- **Practical:** Field performance data
- **Industrial:** Heavy machinery aesthetic
- **Worker-facing:** Parts catalog, not sales pitch
- **Archival:** TILTH certified, series 2048

## 🏭 Reference Materials

### Authentic 1960s Farm Equipment Ads
- International Harvester Cub Cadet (1966) — Folio Bold Condensed headlines
- John Deere performance ads — squared technical callouts
- Implement dealer catalogs — spec grids and diagrams
- Farm Progress magazine (late 1960s) — product performance framing

### Typography Heritage
- **Folio (1957)** → Oswald (substitute)
- **Eurostile (1962)** → Space Grotesk (substitute)
- **Trade Gothic (1948-1960)** → Roboto Condensed (substitute)
- **Clarendon** → Not used (too decorative for parts sheets)

### Visual References
- Perforated tractor feed paper
- Dot matrix printer output
- Engineering blueprint hatching
- Parts catalog dividers (dashed lines)
- Specification tables (dotted leaders)

## 📐 Grid & Spacing

### Card Dimensions
- **Width:** 380px minimum (fits 2 per row at 800px viewport)
- **Height:** Auto (varies by content, typically 700-800px)
- **Gap:** 0px (cards touch, like catalog pages)
- **Border:** 3px solid black (heavy equipment aesthetic)

### Internal Padding
- **Header:** 20px 25px (tight, industrial)
- **Sections:** 25px (consistent rhythm)
- **Specs grid:** 15px gap (readable but compact)

### Typography Scale
- **Catalog title:** 3.5em (Oswald 700)
- **Model name:** 2em (Oswald 700)
- **Part number:** 0.75em (Space Grotesk 700)
- **Spec labels:** 0.7em (Space Grotesk, all-caps)
- **Body:** 0.85em (Roboto Condensed)

## 🌱 Botanical Classification Logic

```javascript
function generatePlantPattern(character) {
    const risk = character.career_risk_taken;
    
    if (risk > 0.6) {
        // High risk = Thorns (aggressive spread, deep roots)
        return `╔═╗ THORNS ENGAGED\n║█║ Root: Deep\n╚═╝ Spread: Aggressive`;
    }
    
    if (risk > 0.3) {
        // Medium risk = Canopy (balanced, moderate)
        return `┌─┐ CANOPY BALANCED\n│▓│ Root: Moderate\n└─┘ Spread: Controlled`;
    }
    
    // Low risk = Dormant (shallow, minimal)
    return `┌─┐ DORMANT STATE\n│░│ Root: Shallow\n└─┘ Spread: Minimal`;
}
```

**Why ASCII patterns?**
- Evokes punch card computing (1960s data)
- Reads as botanical specimen classification
- No human faces (abstract representation)
- Prints clearly in B&W
- Monospace font aligns naturally

## 🎨 Color Application Strategy

### Black Header Bar
```css
background: var(--field-black);
color: var(--harvest-yellow);
```
Equipment chassis black + high-visibility yellow typography

### Green Footer Stamp
```css
background: var(--tractor-green);
color: #fff;
```
TILTH certification = approved equipment green

### Risk-Based Accent
```css
/* Applied to: radar stroke, risk value, performance bar */
color: risk > 0.6 ? machinery-red : 
       risk > 0.3 ? harvest-yellow : 
                    spec-blue;
```

### Neutral Data Zones
```css
background: #fafaf8; /* Diagram section */
background: #fff;     /* Performance table */
```
Clean technical documentation zones

## 🖨️ Print Usage Scenarios

### Workshop Handouts
- Print 4-up (2x2 grid per page)
- Distribute as case study materials
- Students mark up with notes
- Compare radar patterns across characters

### Field Reference
- Laminate for durability
- Worker-facing specification sheets
- "Which practitioner type am I?"
- Job site documentation

### Archival Documentation
- TILTH investigation records
- Historical case file attachments
- Series 2048 practitioner catalog
- Evidence documentation

## ✨ What Makes It Work

### 1. No Human Photos
Removes personality cult, focuses on data

### 2. Industrial Typography
Oswald + Space Grotesk + Roboto Condensed = 1960s machinery

### 3. Hatched Radar Diagrams
Engineering schematic, not infographic

### 4. ASCII Botanical Codes
Abstract plant growth = professional archetype

### 5. Performance Bar Charts
Field-tested data, not subjective assessment

### 6. Part Numbers
TILTH-01-2048 = catalog item, not person

### 7. Certification Stamps
Official documentation, not marketing

### 8. Dot Matrix Texture
Authentic 1960s print quality

## 🔍 Character Example: Maya Chen

```
PART NO. TILTH-01-2048
MAYA CHEN
[EDUCATOR]

SPECIFICATIONS
──────────────
Learning & Development Lead
GrowthPath

Awareness: 95%    Action:   45%
Impact:    30%    Risk:     30%

TECHNICAL PROFILE
[11-axis radar: high openness, high empathy, 
 low authority, low decisiveness]

BOTANICAL CLASSIFICATION
┌─┐ CANOPY BALANCED
│▓│ Root: Moderate
└─┘ Spread: Controlled

FIELD PERFORMANCE DATA
AWARENESS  [████████████████░░] 95%
ACTION     [████████░░░░░░░░░░] 45%
IMPACT     [██████░░░░░░░░░░░░] 30%
CAREER RISK[██████░░░░░░░░░░░░] 30%

TILTH CERTIFIED — SERIES 2048
```

**Reads as:** Parts specification for a "practitioner unit," not a human biography

---

## 🚀 Implementation Complete

- ✅ 1960s farm equipment typography (Oswald + Space Grotesk + Roboto Condensed)
- ✅ Authentic color palette (harvest yellow, tractor green, machinery red)
- ✅ Parts catalog layout (header stripe, specs grid, diagram, footer stamp)
- ✅ No human photos (only radar diagrams + botanical codes)
- ✅ Hatched radar fills (engineering schematic style)
- ✅ ASCII plant patterns (abstract growth classification)
- ✅ Dot matrix texture (1960s print quality)
- ✅ Print-optimized (4-up, high contrast, Letter/A4)
- ✅ Worker-facing voice (parts counter, not marketing)

**File:** `tilth-parts-catalog.html`  
**Status:** Live and printable

*"TILTH CERTIFIED — SERIES 2048"*
