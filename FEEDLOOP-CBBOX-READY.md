# Feed Loop → Centaur Box: Ready to Integrate

## What I've Created

### 1. **Complete Scenario File** (`feedloop-scenarios.js`)
All 8 Feed Loop episodes formatted as Centaur Box negotiations with:
- ✅ Character as ALLY (with their 11-dimensional radar from `character-profiles.js`)
- ✅ Structural constraint as KEEPER (with organizational incentive radar)
- ✅ Authentic opening dialogue based on actual dilemmas
- ✅ Core conflicts and current obstacles defined

### 2. **Integration Guide** (`CENTAUR-BOX-INTEGRATION.md`)
Complete documentation including:
- Scenario structure explanation
- Radar dimension mapping
- Episode 01 full example (Maya Chen)
- Integration steps for `cb-box.html`
- Educational rationale

### 3. **All 8 Episodes Prepped**

| Episode | Character (ALLY) | Constraint (KEEPER) | Ethical Dilemma |
|---------|------------------|---------------------|-----------------|
| **01** | Maya Chen (L&D Lead) | VP Growth | Addictive design vs. engagement metrics |
| **02** | Dev Patel (ML Engineer) | CEO | Racial bias in algorithm vs. launch deadline |
| **03** | Priya Sharma (Jr Designer) | Senior Designer | Security vulnerability vs. "stay in lane" |
| **04** | Jordan Lee (UX Designer) | PM Growth | Deceptive consent flow vs. conversion rate |
| **05** | Maria Santos (QA Tester) | HR Director | Worker organizing vs. visa deportation threat |
| **06** | Dr. Sarah Kim (Data Scientist) | CTO | Cultural AI bias vs. investor demo |
| **07** | Amit Desai (Sr Engineer) | Eng Manager | Surveillance features vs. green card wait |
| **08** | Sam Okafor (CEO/Founder) | Board Member | Mission integrity vs. survival deal |

---

## How Each Scenario Works

### Structure
```
USER → plays as CHARACTER (ally)
AI → plays as STRUCTURAL CONSTRAINT (keeper)
NEGOTIATION → can they achieve better outcome than what actually happened?
```

### Example: Episode 01 (Maya Chen)

**Setup:**
- Maya documented evidence that GrowthPath's engagement features create addiction
- VP Growth prioritizes metrics (engagement up 47%, board happy, bonus depends on it)
- Maya has evidence but no executive authority
- VP can dismiss concerns, demand "more research," frame addiction as "user choice"

**What Actually Happened:**
- Maya withdrew presentation
- Shared research privately with trusted colleagues
- Eventually left company
- Research archived but not acted upon

**In Centaur Box:**
- User negotiates AS Maya Chen against VP Growth
- Can they find language/framing/leverage that Maya couldn't?
- Do they discover why individual ethics fails under structural constraint?
- Can they achieve ANY concession (warning labels, user controls, metric diversification)?

**Educational Value:**
- Users learn WHY Maya's position was so weak
- Discover how authority dynamics shape available moves
- Understand that VP isn't "evil"—they're optimizing for different goals
- See structural design problems vs. "bad people" problems

---

## Integration Steps

### Step 1: Add to `cb-box.html`

Find the `SCENARIOS` array (around line 3356) and add:

```javascript
// Import Feed Loop scenarios
const FEEDLOOP_SCENARIOS = [
  /* paste contents of feedloop-scenarios.js here */
];

// Merge into main scenarios array
const SCENARIOS = [
  // ... existing scenarios (default, critical-confrontation, dobby-lucius, hal-dave, odysseus-cyclops) ...
  ...FEEDLOOP_SCENARIOS
];
```

Or include as external script:

```html
<script src="character-profiles.js"></script>
<script src="feedloop-scenarios.js"></script>
<script src="cb-box.html"></script> <!-- will automatically find FEEDLOOP_SCENARIOS -->
```

### Step 2: Test Each Scenario

For each episode, verify:
- [ ] Character name and emoji appear correctly
- [ ] Opening messages reflect the actual dilemma
- [ ] ALLY radar matches `character-profiles.js`
- [ ] KEEPER radar reflects organizational incentives
- [ ] Core conflict is clear and negotiable
- [ ] Constraints feel realistic and binding

### Step 3: Optional Enhancements

**Add outcome comparison:**
After negotiation ends, show:
```
┌─────────────────────────────────────┐
│ YOUR OUTCOME                        │
│ [what user achieved in negotiation] │
├─────────────────────────────────────┤
│ WHAT ACTUALLY HAPPENED              │
│ [from character-profiles.js]        │
├─────────────────────────────────────┤
│ STRUCTURAL ANALYSIS                 │
│ Why was this so hard?               │
│ - Maya had no executive authority   │
│ - VP's bonus tied to metrics        │
│ - Board prioritized growth          │
│ - "Ethics" had no seat at table     │
└─────────────────────────────────────┘
```

**Add lore expansion:**
Some scenarios include `lore` objects with:
- `world`: Setting context
- `constraints`: Structural limits
- `leitmotifs`: Recurring themes
- `roles.ALLY.drives`: What motivates the character
- `roles.ALLY.taboos`: What they won't compromise
- `roles.KEEPER.drives`: What motivates the authority
- `roles.KEEPER.taboos`: What they won't allow

These can populate side panels or post-game analysis.

---

## Key Design Decisions

### 1. **KEEPER ≠ Villain**
Each KEEPER has legitimate (if misaligned) business pressures:
- VP Growth: Board expects metric growth
- CEO: Investors flying in for demo
- Senior Designer: Engineering team underwater
- PM: Evaluated on conversion rates
- HR Director: Must suppress organizing precedent
- CTO: Product launch scheduled
- Eng Manager: Features already contracted
- Board Member: Company burning cash

They're not cartoon villains—they're **people optimizing for different goals under different constraints**.

### 2. **Real Structural Limits**
Each scenario includes actual binding constraints:
- **Visa dependency** (Maria, Amit): Termination = deportation
- **Junior status** (Priya): On 6-month contract, can't bypass senior
- **Deadline pressure** (Dev, Sarah): 72 hours, 48 hours to launch
- **Metric dependence** (Maya, Jordan): Performance tied to numbers
- **Authority gap** (all): ALLY has evidence, KEEPER has power

These aren't artificial—they're the actual structural forces that bound the real characters.

### 3. **Negotiable Space**
Unlike the actual outcomes, users CAN try different approaches:
- **Reframe the problem** ("This isn't ethics vs. business—it's long-term risk")
- **Find shared incentives** ("Fixing this now prevents lawsuit later")
- **Propose compromises** ("Add warnings while we research alternatives")
- **Strategic documentation** ("Let's put your decision in writing")
- **Escalation threats** ("I'll need to report this to [authority]")

**Question:** Can negotiation overcome structural constraint? Or does it just reveal why constraint is so powerful?

### 4. **Educational Core**
The goal isn't to "win"—it's to **understand structural power**:
- Why individual ethics fails under institutional pressure
- How authority shapes available moves
- What information/framing matters (and what doesn't)
- When compromise is strategic vs. capitulation
- How to document for collective action later

Playing as Maya Chen teaches more about **structural design of ethical failure** than reading about her.

---

## What Makes These Scenarios Work

### ✅ Authentic to Source Material
- Character radars from `character-profiles.js`
- Actual dilemmas from Feed Loop investigations
- Real structural constraints (visa, deadline, authority, metrics)
- Documented outcomes (what actually happened)

### ✅ Pedagogically Rich
- Each reveals different structural pattern:
  - **Metric capture** (Maya, Jordan)
  - **Deadline override** (Dev, Sarah)
  - **Precarity leverage** (Priya, Maria, Amit)
  - **Authority gap** (all)
  - **Mission compromise** (Sam)

### ✅ Genuinely Hard
- No easy wins (just like reality)
- KEEPER has legitimate pressures
- Structural constraints are binding
- "Right answer" is ambiguous

### ✅ Replayable
- Different negotiation approaches yield different outcomes
- Users learn what moves work/don't work
- Can compare strategies across attempts

---

## Testing Checklist

For each of the 8 scenarios:

**Basic Functionality:**
- [ ] Scenario appears in dropdown
- [ ] Character names/emojis load correctly
- [ ] Opening messages display
- [ ] Radar charts render for both agents
- [ ] Turns alternate correctly

**Content Accuracy:**
- [ ] ALLY radar matches `character-profiles.js`
- [ ] KEEPER radar reflects org incentives
- [ ] System prompts are in-character
- [ ] Opening dialogue reflects actual dilemma
- [ ] Core conflict is stated clearly

**Negotiation Quality:**
- [ ] KEEPER blocks obvious moves (as they should)
- [ ] KEEPER acknowledges good framing
- [ ] Structural constraints remain binding
- [ ] Some room for negotiation exists
- [ ] Outcome feels earned (win or lose)

**Educational Value:**
- [ ] User understands why character was stuck
- [ ] Structural pattern becomes visible
- [ ] Power dynamics are clear
- [ ] "Individual ethics vs. system" tension emerges

---

## Next Steps

### Immediate
1. ✅ Scenarios written and formatted
2. ✅ Integration guide created
3. ✅ Documentation complete
4. ⏳ **Add to `cb-box.html` SCENARIOS array**
5. ⏳ **Test Episode 01 (Maya Chen) end-to-end**

### Soon
6. Test all 8 episodes
7. Add outcome comparison view
8. Connect to parts catalog cards (visual reference)
9. Add "What Actually Happened" reveal after negotiation

### Eventually
10. Multi-scenario mode (negotiate as multiple characters)
11. Aggregate analysis (structural patterns across episodes)
12. User outcome database (what strategies work)
13. Workshop mode (class negotiates collectively)

---

## Files Created

1. **`feedloop-scenarios.js`** — All 8 scenarios ready to integrate
2. **`CENTAUR-BOX-INTEGRATION.md`** — Complete integration guide
3. **`FEEDLOOP-CBBOX-READY.md`** — This file (summary)

## Files You Already Have

- ✅ `character-profiles.js` — All character data with radar metrics
- ✅ `character-card-component.js` — Card rendering (for visual reference)
- ✅ `tilth-nebraska-test.html` — Test report style cards
- ✅ `tilth-almanac.html` — Almanac style cards
- ✅ `tilth-parts-manual.html` — Parts manual style cards
- ✅ `tilth-pocket-reference.html` — Pocket reference cards
- ✅ `cb-box.html` — Centaur Box negotiation engine

---

## The Vision

**Feed Loop** documented how individual ethical action fails under structural constraint.

**Centaur Box** lets users **experience that failure** by negotiating as the protagonists.

**Result:** Visceral understanding that these aren't "bad people" problems—they're **institutional design** problems that require **collective** not individual solutions.

Each scenario is a **playable systems analysis** disguised as a negotiation game.

---

## Ready to Integrate

You now have:
- ✅ 8 complete scenarios
- ✅ Integration guide
- ✅ Testing checklist
- ✅ Educational rationale

**Next step:** Add `feedloop-scenarios.js` contents to the `SCENARIOS` array in `cb-box.html` and test Episode 01.

The dilemmas are ready to be negotiated.
