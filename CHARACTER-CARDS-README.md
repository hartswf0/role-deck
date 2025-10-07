# Feed Loop Character Profile Cards — Implementation Guide

## ✅ What Was Built

### 1. Character Profile Database (`character-profiles.js`)

**8 complete character profiles** for Feed Loop protagonists:

| Episode | Character | Role | App | Identity Archetype |
|---------|-----------|------|-----|-------------------|
| 01 | Maya Chen | L&D Lead | GrowthPath | The Silenced Educator |
| 02 | Dev Patel | ML Engineer | YieldMatch | The Overruled Engineer |
| 03 | Priya Sharma | Junior UX | TalentFarm | The Bounded Apprentice |
| 04 | Jordan Lee | UX Designer | ConsentGarden | The Compliant Optimizer |
| 05 | Maria Santos | QA Tester | UnionSprout | The Precarious Organizer |
| 06 | Dr. Sarah Kim | Data Scientist | AutoGrow AI | The Epistemic Rusher |
| 07 | Amit Desai | Senior Engineer | MigrantHarvest | The Conditional Person |
| 08 | Sam Okafor | Founder/CEO | GlobalGrow | The Values Treasurer |

### 2. Each Character Has:

**Calculated Metrics:**
- **Ethical Awareness Score** (0-1): How clearly they saw the problem
- **Ethical Action Score** (0-1): How much they acted on awareness
- **Impact Score** (0-1): Actual effect on the system
- **Career Risk Taken** (0-1): Personal cost they accepted

**11-Dimensional Radar Chart:**
1. **Openness** — Curiosity about systemic problems
2. **Conscientiousness** — Documentation/thoroughness
3. **Extraversion** — Public vs. private action
4. **Agreeableness** — Deference to authority
5. **Neuroticism** — Anxiety about consequences
6. **Logic** — Technical/data-driven reasoning
7. **Empathy** — Concern for user/worker harm
8. **Authority** — Institutional power level
9. **Risk** — Willingness to challenge system
10. **Uncertainty** — Comfort with ambiguity
11. **Decisiveness** — Speed of action

**Narrative Data:**
- What they actually chose
- Core drive (motivation)
- Vulnerability (structural constraint)
- Outcome (what happened to them)

---

## 🎨 Visual Component (`character-card-component.js`)

### `renderCharacterCard(character)`

Generates a **full profile card** with:
- Character photo (emoji placeholder)
- Name, role, app, episode number
- Identity archetype badge
- **Radar chart** showing 11-dimensional ethical profile
- Bar charts for awareness, action, impact, career risk
- "What They Did" narrative
- Core drive + vulnerability analysis
- Actual outcome

**Styling:**
- TILTH/Feed Loop aesthetic (tractor green, film grain)
- Color-coded by career risk (red = high, amber = medium, blue = low)
- Radar chart styled as seed cross-section
- Print-ready layout

### `renderComparison(userChoice, character)`

Shows **side-by-side comparison**:
- User's choice vs. character's reality
- Career risk alignment score (0-100%)
- Interpretation: "Nearly identical" / "Similar" / "Different" / "Opposite"
- Analysis: Did user choose higher/lower risk?
- Structural context: Why character's outcome happened

---

## 🔗 Integration (Episode 01 Example)

### Before:
```javascript
function submitResponse() {
    // Show user's choice + generic outcome
}
```

### After:
```javascript
function submitResponse() {
    const chosen = scenario.responses[selectedResponseIndex];
    const character = getCharacter(1); // Get Maya Chen
    
    const resultsHTML = `
        ${userChoiceSection}
        ${renderComparison(chosen, character)}  // NEW
        ${renderCharacterCard(character)}        // NEW
        ${systemicAnalysis}
    `;
}
```

### What Users See:

1. **Their Choice** — Identity, risk level, consequence
2. **What Actually Happened** — In-world outcome
3. **Systemic Analysis** — Why individual action failed
4. **Comparison Card** — User vs. Character side-by-side with alignment score
5. **Character Profile Card** — Full radar chart + metrics + analysis
6. **Infrastructure Critique** — How the system enabled harm

---

## 📊 Radar Chart Calculation Examples

### Maya Chen (The Silenced Educator)

```javascript
radar_metrics: {
    openness: 5,         // High — researched user harm deeply
    conscientiousness: 4, // High — documented everything
    extraversion: 3,     // Moderate — private sharing, not public
    agreeableness: 4,    // High — tried to work within system
    neuroticism: 4,      // High — anxious about user harm
    logic: 5,            // Very high — data-driven approach
    empathy: 5,          // Very high — deep concern for learners
    authority: 2,        // Low — mid-level, blocked by VP
    risk: 3,             // Moderate — shared privately, didn't escalate
    uncertainty: 4,      // High — struggled with "right" path
    decisiveness: 2      // Low — delayed decisive action
}
```

**Interpretation:** High awareness + empathy, moderate action, low power. Classic "constrained educator" pattern.

---

### Maria Santos (The Precarious Organizer)

```javascript
radar_metrics: {
    openness: 5,         // Very high — saw systemic exploitation
    conscientiousness: 5, // Very high — built actual infrastructure
    extraversion: 4,     // High — organized collective action
    agreeableness: 2,    // Low — confrontational to power
    neuroticism: 3,      // Moderate — managed fear to act
    logic: 4,            // High — strategic organizing
    empathy: 5,          // Very high — worker solidarity
    authority: 1,        // Very low — contractor, visa-dependent
    risk: 5,             // Maximum — took existential risk
    uncertainty: 2,      // Low — clear about what needed to happen
    decisiveness: 5      // Very high — signed first, acted fast
}
```

**Interpretation:** Maximum risk + action despite zero power. Visa precarity weaponized against organizing. She acted anyway.

---

## 🔧 How to Use

### For Episode 02-08:

1. **Character profile already exists** in `character-profiles.js`
2. **Add scripts to episode page:**
   ```html
   <script src="character-profiles.js"></script>
   <script src="character-card-component.js"></script>
   ```
3. **Update `submitResponse()`:**
   ```javascript
   const character = getCharacter(2); // Episode number
   // Then use renderComparison() and renderCharacterCard()
   ```

### For Quiz Results:

After completing all 8 episodes, aggregate user's choices:
```javascript
const userProfile = {
    averageRisk: totalRisk / 8,
    dominantIdentity: mostChosenArchetype,
    radarMetrics: calculateUserRadar(allChoices)
};

// Show user's own radar chart compared to characters
```

---

## 📈 What The Radar Shows

**High Openness + Low Risk:**
- Ponderer pattern (Amit, Sarah)
- Sees problems, doesn't act
- Analysis paralysis or structural constraint

**High Risk + Low Authority:**
- Challenger under precarity (Maria)
- Maximum courage, minimum power
- Often results in martyrdom

**High Empathy + Low Decisiveness:**
- Educator pattern (Maya)
- Cares deeply, hesitates to act
- Pedagogy suppressed by growth metrics

**Low Empathy + High Decisiveness:**
- Optimizer pattern (Jordan)
- Ships dark patterns efficiently
- Compliance theater enables harm

**High Authority + Moderate Risk:**
- Executive compromise (Sam)
- Has power but chooses revenue
- Geo-fenced ethics as "pragmatism"

---

## 🎯 Design Rationale

### Why 11 Dimensions?

Based on **Big 5 personality** + **ethical decision-making research**:
- **Personality factors** (openness, conscientiousness, extraversion, agreeableness, neuroticism)
- **Cognitive styles** (logic, empathy)
- **Structural position** (authority)
- **Decision patterns** (risk, uncertainty, decisiveness)

### Why Radar Charts?

- **Visual comparison** across multiple dimensions
- **Seed cross-section metaphor** (fits Feed Loop botanical theme)
- **Pattern recognition** — users see "shapes" of different identities
- **Print-friendly** — works in B&W

### Why Show Character After User Choice?

- **Reveals constraint** — "I chose X, but character did Y because [structural reason]"
- **Builds empathy** — Users understand why people compromise
- **Systemic framing** — Individual ethics ≠ systemic change
- **Educational** — Shows how power, visa status, seniority constrain action

---

## 🖨️ Print Optimization

Character cards are **print-ready**:
- High contrast for B&W printing
- Radar charts work without color
- Clear typography at small sizes
- 4-up layout on Letter/A4

**Use case:** Workshop handouts, case study materials, classroom discussions

---

## 🚀 Next Steps

### To Complete System:

1. ✅ Episode 01 integrated (Maya Chen)
2. ⏳ Episodes 02-08 (copy Episode 01 pattern)
3. ⏳ Aggregate quiz results (show user's own radar after 8 episodes)
4. ⏳ Comparison view (user vs. all 8 characters)
5. ⏳ Print stylesheet for character cards

### Optional Enhancements:

- **Interactive radar** — Hover to see dimension definitions
- **Animated reveal** — Radar fills in as card appears
- **Identity clustering** — Show which characters have similar profiles
- **Historical comparison** — "67% of investigators chose higher risk than Maya"

---

## 📚 Research Basis

**Radar Metrics:**
- Big 5 Personality (Costa & McCrae, 1992)
- Ethical Decision-Making (Rest, 1986)
- Structural Constraint (Chivukula et al., CHI '21)

**Character Profiles:**
- Based on documented HCI ethics cases
- Composites of real scenarios
- Identity archetypes from Gray & Chivukula (2019)

**All profiles are design fiction** transplanted into Feed Loop universe for narrative coherence.

---

*"We study systems by growing them."*  
— TILTH, 2048
