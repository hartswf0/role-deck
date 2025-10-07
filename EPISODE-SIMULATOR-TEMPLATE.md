# Episode Simulator Embed Template

**Template for embedding CB-Box simulators into episode case analysis files**

---

## CSS Styles (add to `<style>` section)

```css
/* Simulator Embed */
.simulator-section {
    margin-top: 30px;
    border-top: 2px dashed #5a6c57;
    padding-top: 30px;
}

.simulator-toggle {
    display: block;
    width: 100%;
    background: rgba(90, 108, 87, 0.15);
    color: #5a6c57;
    text-align: center;
    padding: 18px;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.15em;
    border: 3px solid #5a6c57;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 1.1em;
    font-family: 'Oswald', sans-serif;
}

.simulator-toggle:hover {
    background: rgba(90, 108, 87, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(90, 108, 87, 0.3);
}

.simulator-container {
    display: none;
    margin-top: 20px;
    border: 3px solid #5a6c57;
    background: #000;
    height: 700px;
    position: relative;
    box-shadow: 0 0 30px rgba(90, 108, 87, 0.2);
}

.simulator-container.active {
    display: block;
}

.simulator-iframe {
    width: 100%;
    height: 100%;
    border: none;
}

.simulator-note {
    font-size: 0.85em;
    opacity: 0.6;
    text-align: center;
    margin-top: 12px;
    letter-spacing: 0.1em;
    font-family: 'Orbitron', monospace;
}
```

---

## HTML Embed (add to SCENARIO section)

### Episode 01 - Maya Chen / GrowthPath
```html
<div class="simulator-section">
    <button class="simulator-toggle" onclick="toggleSimulator('scenario-sim')">
        ⚡ PRACTICE THIS NEGOTIATION (AI SIMULATOR)
    </button>
    <div id="scenario-sim" class="simulator-container">
        <iframe class="simulator-iframe" src="cb-box.html?scenario=maya-chen-growthpath"></iframe>
    </div>
    <div class="simulator-note">
        Interactive role-play: You are Maya Chen negotiating with VP Growth<br>
        Full CB-Box interface with personality tracking and strategic feedback
    </div>
</div>
```

### Episode 02 - Dev Patel / YieldMatch
```html
<div class="simulator-section">
    <button class="simulator-toggle" onclick="toggleSimulator('scenario-sim')">
        ⚡ PRACTICE THIS NEGOTIATION (AI SIMULATOR)
    </button>
    <div id="scenario-sim" class="simulator-container">
        <iframe class="simulator-iframe" src="cb-box.html?scenario=dev-patel-yieldmatch"></iframe>
    </div>
    <div class="simulator-note">
        Interactive role-play: You are Dev Patel negotiating with CEO<br>
        Full CB-Box interface with personality tracking and strategic feedback
    </div>
</div>
```

### Episode 03 - Priya Sharma / TalentFarm
```html
<div class="simulator-section">
    <button class="simulator-toggle" onclick="toggleSimulator('scenario-sim')">
        ⚡ PRACTICE THIS NEGOTIATION (AI SIMULATOR)
    </button>
    <div id="scenario-sim" class="simulator-container">
        <iframe class="simulator-iframe" src="cb-box.html?scenario=priya-sharma-talentfarm"></iframe>
    </div>
    <div class="simulator-note">
        Interactive role-play: You are Priya Sharma negotiating with Senior Designer<br>
        Full CB-Box interface with personality tracking and strategic feedback
    </div>
</div>
```

### Episode 04 - Jordan Lee / ConsentGarden
```html
<div class="simulator-section">
    <button class="simulator-toggle" onclick="toggleSimulator('scenario-sim')">
        ⚡ PRACTICE THIS NEGOTIATION (AI SIMULATOR)
    </button>
    <div id="scenario-sim" class="simulator-container">
        <iframe class="simulator-iframe" src="cb-box.html?scenario=jordan-lee-consentgarden"></iframe>
    </div>
    <div class="simulator-note">
        Interactive role-play: You are Jordan Lee negotiating with PM Growth<br>
        Full CB-Box interface with personality tracking and strategic feedback
    </div>
</div>
```

### Episode 05 - Maria Santos / UnionSprout
```html
<div class="simulator-section">
    <button class="simulator-toggle" onclick="toggleSimulator('scenario-sim')">
        ⚡ PRACTICE THIS NEGOTIATION (AI SIMULATOR)
    </button>
    <div id="scenario-sim" class="simulator-container">
        <iframe class="simulator-iframe" src="cb-box.html?scenario=maria-santos-unionsprout"></iframe>
    </div>
    <div class="simulator-note">
        Interactive role-play: You are Maria Santos negotiating with HR Director<br>
        Full CB-Box interface with personality tracking and strategic feedback
    </div>
</div>
```

### Episode 06 - Dr. Sarah Kim / AutoGrow AI
```html
<div class="simulator-section">
    <button class="simulator-toggle" onclick="toggleSimulator('scenario-sim')">
        ⚡ PRACTICE THIS NEGOTIATION (AI SIMULATOR)
    </button>
    <div id="scenario-sim" class="simulator-container">
        <iframe class="simulator-iframe" src="cb-box.html?scenario=sarah-kim-autogrow"></iframe>
    </div>
    <div class="simulator-note">
        Interactive role-play: You are Dr. Sarah Kim negotiating with CTO<br>
        Full CB-Box interface with personality tracking and strategic feedback
    </div>
</div>
```

### Episode 07 - Amit Desai / MigrantHarvest
```html
<div class="simulator-section">
    <button class="simulator-toggle" onclick="toggleSimulator('scenario-sim')">
        ⚡ PRACTICE THIS NEGOTIATION (AI SIMULATOR)
    </button>
    <div id="scenario-sim" class="simulator-container">
        <iframe class="simulator-iframe" src="cb-box.html?scenario=amit-desai-migrantharvest"></iframe>
    </div>
    <div class="simulator-note">
        Interactive role-play: You are Amit Desai negotiating with Engineering Manager<br>
        Full CB-Box interface with personality tracking and strategic feedback
    </div>
</div>
```

### Episode 08 - Sam Okafor / FeedLoop
```html
<div class="simulator-section">
    <button class="simulator-toggle" onclick="toggleSimulator('scenario-sim')">
        ⚡ PRACTICE THIS NEGOTIATION (AI SIMULATOR)
    </button>
    <div id="scenario-sim" class="simulator-container">
        <iframe class="simulator-iframe" src="cb-box.html?scenario=sam-okafor-feedloop"></iframe>
    </div>
    <div class="simulator-note">
        Interactive role-play: You are Sam Okafor negotiating with Board Member<br>
        Full CB-Box interface with personality tracking and strategic feedback
    </div>
</div>
```

---

## JavaScript Toggle Function (add to `<script>` section)

```javascript
// Simulator toggle
function toggleSimulator(id) {
    const container = document.getElementById(id);
    if (!container) return;
    
    // Toggle this simulator
    container.classList.toggle('active');
    
    // Scroll into view if opening
    if (container.classList.contains('active')) {
        setTimeout(() => {
            container.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
}
```

---

## Placement in Episode File Structure

```
SECTION 1: OPENING SEQUENCE
    ↓
SECTION 2: SCENARIO VIDEO
    → **INSERT SIMULATOR HERE** (at top of section)
    → Video placeholder (below simulator)
    → Video generation prompt (below video)
    ↓
SECTION 3: TECHNICAL BRIEF
    ↓
SECTION 4: QUIZ / DECISION POINT
    ↓
SECTION 5: RESULTS / ANALYSIS
```

---

## Scenario ID Mapping

| Episode | Scenario ID | Character Names |
|---------|-------------|-----------------|
| 01 | `maya-chen-growthpath` | Maya Chen vs. VP Growth |
| 02 | `dev-patel-yieldmatch` | Dev Patel vs. CEO |
| 03 | `priya-sharma-talentfarm` | Priya Sharma vs. Senior Designer |
| 04 | `jordan-lee-consentgarden` | Jordan Lee vs. PM Growth |
| 05 | `maria-santos-unionsprout` | Maria Santos vs. HR Director |
| 06 | `sarah-kim-autogrow` | Dr. Sarah Kim vs. CTO |
| 07 | `amit-desai-migrantharvest` | Amit Desai vs. Engineering Manager |
| 08 | `sam-okafor-feedloop` | Sam Okafor vs. Board Member |

---

## Implementation Checklist

For each episode file:
- [ ] Add CSS styles to `<style>` section
- [ ] Add simulator HTML to SCENARIO section (before video)
- [ ] Add `toggleSimulator()` function to `<script>` section
- [ ] Update button text with correct character names
- [ ] Verify scenario ID matches cb-box.html scenario
- [ ] Test simulator loads correctly in iframe
- [ ] Test toggle functionality

---

## Mobile Responsiveness

The simulator automatically adapts:
- **Desktop:** 700px height, full width
- **Mobile:** Scrollable iframe, full viewport width
- **Toggle button:** Large touch target (18px padding)
- **Smooth animations:** Transform and scroll-into-view

---

## Future Enhancements

1. **Preload hint:** Add loading state before iframe loads
2. **Collapse on scroll:** Auto-close when scrolling away
3. **Progress persistence:** Save simulator state to localStorage
4. **Analytics:** Track which scenarios users practice most
5. **Direct link:** URL parameter to auto-open simulator on page load
