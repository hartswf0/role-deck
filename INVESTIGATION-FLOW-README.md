# Feed Loop — Investigation Flow System

## 🎯 Complete Structure

**TILTH Investigation** → **8 Case Files** → **Individual Episode Flows**

Each episode follows a **4-part structure**:

### Flow Architecture

```
1. OPENING SEQUENCE (iframe)
   └─ 8-second TILTH card + episode-specific intro
   
2. SCENARIO VIDEO (placeholder + prompt)
   └─ 60-90 second dramatized scenario film
   
3. TECHNICAL BRIEF (text)
   └─ System architecture + ethical analysis
   
4. DECISION QUIZ (interactive)
   └─ Choose response → See outcome + systemic analysis
```

---

## 📁 File Structure

### Hub Files
- `tilth-investigation.html` — Main case files index (TILTH-framed)
- `openings-index.html` — Opening sequences navigation
- `feed-loop-index.html` — Series overview

### Episode Complete Flows
- `episode-01-complete.html` — Nutrient Lock (complete 4-part flow)
- `episode-02-complete.html` — First Fruit (template ready)
- `episode-03-complete.html` — Apprentice Rows (template ready)
- ... (through episode-08)

### Supporting Files
- `opening-01-nutrient-lock.html` (embedded via iframe)
- `opening-02-first-fruit.html` (embedded via iframe)
- ... (all 8 openings)

### Documentation
- `SCENARIO-VIDEO-PROMPTS.md` — Video generation specs for all 8 scenarios
- `INVESTIGATION-FLOW-README.md` — This file
- `FEED-LOOP-README.md` — Universe bible
- `OPENING-SEQUENCES-README.md` — Opening sequence production guide

---

## 🎬 How It Works

### User Journey

1. **Enter via TILTH Investigation Hub**
   - User sees 8 case files
   - Each labeled with episode title, app name, ethical dilemma
   - "Investigate Case" button for each

2. **Episode Flow Begins**
   - **Section 1 (Opening):** Watch animated title sequence
   - **Section 2 (Scenario):** Watch dramatized scenario film (or read prompt)
   - **Section 3 (Brief):** Read technical architecture + ethical analysis
   - **Section 4 (Quiz):** Choose response → See outcome

3. **Results & Navigation**
   - See what actually happened
   - Read systemic analysis
   - Navigate to next episode or back to hub

### Design Fiction Frame

**WHO PRESENTS THIS?** → **TILTH** (the investigative collective)

- NOT Agronica (they're the subject of investigation)
- NOT FarmOS (it's the infrastructure being examined)
- YES Tilth (investigators who obtained internal docs + built scenarios)

This creates narrative distance and positions users as **investigators**, not employees.

---

## 🎨 Visual Consistency

All episode files share:
- **Color palette:** Tractor green (#5a6c57), loam brown, film grain
- **Typography:** Oswald (headlines), Orbitron (tech accents), serif (body)
- **16mm film aesthetic:** Grain overlay, chromatic aberration
- **Section-based scrolling:** Each flow part = full viewport section

Episode-specific colors appear in:
- Opening sequence visuals
- Quiz interface accents
- Results highlights

---

## 🎵 Audio Integration Points

### Opening Sequence (0:00-0:08)
- Audio cues shown as visual text placeholders
- In production: replace with actual stems

### Scenario Video (0:00-1:30)
- Diegetic office sounds
- Final 5 seconds: episode theme becomes oppressive
- Specs in `SCENARIO-VIDEO-PROMPTS.md`

### Quiz Interface
- Silent (allows reflection)

### Results
- Optional: faint episode theme on loop at -30 LUFS

---

## 📊 Quiz Integration

### Based on Existing `quiz.html`

The original quiz has **8 generic scenarios** mapped to professional identity theory (Chivukula et al., CHI '21).

**New approach:**
- Each episode has **1 specific scenario** from the Feed Loop universe
- Same identity framework (Challenger, Custodian, Educator, etc.)
- Responses mapped to character choices (what Maya/Dev/Priya actually chose)
- "What Actually Happened" reveals the in-world outcome
- "Systemic Analysis" explains why individual choice wasn't enough

### Response Structure

Each quiz option includes:
- **Label:** The action (e.g., "Present anyway despite warning")
- **Identity:** Professional archetype (e.g., "The Challenger")
- **Consequence:** Immediate effect (e.g., "High career risk")
- **Career Risk:** 0.0 - 1.0 score
- **What Happened:** In-world narrative outcome
- **Systemic Analysis:** Why the infrastructure enabled/prevented change

---

## 🔧 Technical Implementation

### Embedding Opening Sequences

```html
<iframe src="opening-01-nutrient-lock.html" 
        class="opening-frame" 
        frameborder="0">
</iframe>
```

### Section Navigation

Uses smooth scroll between full-viewport sections:

```javascript
function goToSection(sectionId) {
    const section = document.getElementById(`section-${sectionId}`);
    section.scrollIntoView({ behavior: 'smooth' });
}
```

### Quiz State Management

Single-page app using vanilla JS:
- Show quiz interface initially
- Hide quiz, show results after submission
- No page reload (smooth UX)

---

## 🎯 Episode Mapping

| # | Title | App | Character | Dilemma Tag | Status |
|---|-------|-----|-----------|-------------|--------|
| 01 | Nutrient Lock | GrowthPath | Maya Chen | Pedagogy Suppression | ✅ Complete |
| 02 | First Fruit | YieldMatch | Dev Patel | Algorithmic Bias | 📝 Template Ready |
| 03 | Apprentice Rows | TalentFarm | Priya Sharma | Voice Suppression | 📝 Template Ready |
| 04 | Consent Harvest | ConsentGarden | Jordan Lee | Dark Patterns | 📝 Template Ready |
| 05 | Root Union | UnionSprout | Maria Santos | Precarious Labor | 📝 Template Ready |
| 06 | Flood Learning | AutoGrow AI | Dr. Sarah Kim | Cultural Blindness | 📝 Template Ready |
| 07 | Conditional Harvest | MigrantHarvest | Amit Desai | Surveillance Under Duress | 📝 Template Ready |
| 08 | Geo-Fencing the Garden | GlobalGrow | Sam Okafor | Geo-Fenced Ethics | 📝 Template Ready |

---

## 🚀 Next Steps

### To Complete System:
1. ✅ Create Episode 01 complete flow
2. ⏳ Create Episodes 02-08 complete flows (use Ep01 as template)
3. ⏳ Generate actual scenario videos (use prompts in `SCENARIO-VIDEO-PROMPTS.md`)
4. ⏳ Record audio stems for opening sequences
5. ⏳ User testing with HCI ethics students/practitioners

### Optional Enhancements:
- **Progress tracking:** Cookie/localStorage to resume investigation
- **Comparative results:** "67% of investigators chose the same response"
- **Identity profile:** Aggregate choices across all 8 episodes
- **Printable case files:** PDF export for classroom use
- **Discussion prompts:** Follow-up questions for group workshops

---

## 🎓 Educational Use Cases

### For HCI/Design Ethics Courses
- Use as case study discussion starters
- Assign episodes as homework → discuss outcomes in class
- Compare student choices to actual industry patterns

### For Corporate Training
- Professional development workshops
- New hire onboarding (set expectations about ethical dilemmas)
- Manager training (understand subordinate constraints)

### For Union Organizing
- Show how individual choices fail without collective power
- Document patterns of retaliation and suppression
- Build solidarity through shared recognition of dilemmas

---

## 📝 Credits & Research Basis

**Design Fiction Framework:** Feed Loop universe (2048 Agronica/FarmOS)  
**Ethical Dilemma Types:** Based on Chivukula et al. (CHI '21) — "A Fork in the Road"  
**Professional Identity Theory:** Gray & Chivukula (2019) — identity work under constraint  
**Dark Pattern Taxonomy:** Mathur et al. (2019) — deceptive design patterns  
**Platform Labor Research:** Roberts (2019), Gray & Suri (2019)  

**All scenarios are composites** of documented real-world cases, transplanted into the Feed Loop universe for narrative coherence.

---

## 🔗 Navigation Map

```
tilth-investigation.html (hub)
├── episode-01-complete.html
│   ├── [iframe] opening-01-nutrient-lock.html
│   ├── [video placeholder + prompt]
│   ├── [technical brief]
│   └── [quiz → results]
├── episode-02-complete.html
│   └── [same structure]
├── ... (episodes 03-08)
└── [back to hub]
```

**Entry points:**
- `feed-loop-index.html` → overview
- `tilth-investigation.html` → investigation hub (recommended start)
- `openings-index.html` → just the title sequences

---

*"We study systems by growing them."*  
— TILTH, 2048
