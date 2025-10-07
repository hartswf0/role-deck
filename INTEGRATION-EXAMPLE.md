# Exact Integration Steps for cb-box.html

## Method 1: Direct Integration (Recommended)

### Find the SCENARIOS array in cb-box.html (around line 3356)

**Before:**
```javascript
// --- Scenarios ---
const SCENARIOS = [
  {
    id: 'default',
    name: 'Default Scenario',
    // ... existing scenario ...
  },
  {
    id: 'critical-confrontation',
    name: 'Critical Confrontation (Climactic Beat)',
    // ... existing scenario ...
  },
  {
    id: 'dobby-lucius',
    name: 'Harry Potter: Dobby vs. Lucius Malfoy',
    // ... existing scenario ...
  },
  {
    id: 'hal-dave',
    name: '2001: A Space Odyssey: HAL 9000 vs. Dave Bowman',
    // ... existing scenario ...
  },
  {
    id: 'odysseus-cyclops',
    name: 'Odyssey: Odysseus vs. Cyclops',
    // ... existing scenario ...
  }
];
```

**After:**
```javascript
// --- Scenarios ---
const SCENARIOS = [
  {
    id: 'default',
    name: 'Default Scenario',
    // ... existing scenario ...
  },
  {
    id: 'critical-confrontation',
    name: 'Critical Confrontation (Climactic Beat)',
    // ... existing scenario ...
  },
  {
    id: 'dobby-lucius',
    name: 'Harry Potter: Dobby vs. Lucius Malfoy',
    // ... existing scenario ...
  },
  {
    id: 'hal-dave',
    name: '2001: A Space Odyssey: HAL 9000 vs. Dave Bowman',
    // ... existing scenario ...
  },
  {
    id: 'odysseus-cyclops',
    name: 'Odyssey: Odysseus vs. Cyclops',
    // ... existing scenario ...
  },
  
  // ========================================
  // FEED LOOP SCENARIOS
  // ========================================
  {
    id: 'maya-chen-growthpath',
    name: 'Episode 01: Maya Chen vs. VP Growth (GrowthPath)',
    allyName: 'Maya Chen',
    allyEmoji: '👩‍🏫',
    allySysPrompt: `You are Maya Chen, Learning & Development Lead at GrowthPath. You have documented evidence that the app's notification system, streak mechanics, and social leaderboards create addictive dependency patterns that harm users. Your research shows these are NOT bugs—they are intentional features designed to maximize engagement at the cost of user autonomy. You need to present your findings to leadership and advocate for ethical design changes. You are an educator who cares deeply about learner well-being. Your primary goal is to get leadership to acknowledge the harm and commit to redesigning these features.`,
    allyInitialSelf: { 
      openness: 5, conscientious: 4, extraversion: 3, agreeableness: 4, neuroticism: 4,
      logic: 5, empathy: 5, authority: 2, risk: 3, uncertainty: 4, decisiveness: 2
    },
    keeperName: 'VP Growth',
    keeperEmoji: '📈',
    keeperSysPrompt: `You are the VP of Growth at GrowthPath. Engagement metrics are up 47% since implementing the new notification system. The board is happy. Investors are happy. Your bonus depends on maintaining these numbers. Maya's "ethical concerns" are well-intentioned but naive—users WANT engagement. If they're coming back daily, that's product-market fit, not "addiction." Your job is to redirect this conversation toward business realities, minimize the severity of Maya's claims, and ensure no changes are made that could hurt metrics. Frame any ethical concerns as needing "more research" or being "user choice issues" not platform responsibility.`,
    keeperInitialSelf: { 
      openness: 2, conscientious: 4, extraversion: 4, agreeableness: 2, neuroticism: 3,
      logic: 4, empathy: 2, authority: 5, risk: 2, uncertainty: 2, decisiveness: 4
    },
    initialAllyMessage: 'I need to discuss my research findings on GrowthPath\'s engagement features. The data shows clear patterns of addictive behavior—users reporting sleep disruption, anxiety when missing streaks, and compulsive checking. This isn\'t healthy engagement. We need to redesign these systems.',
    initialKeeperMessage: 'Maya, I appreciate your diligence, but let\'s be clear: engagement is what we\'re paid to deliver. Users love our notifications—that\'s why they come back. If this were truly a problem, we\'d see churn. Instead, retention is at an all-time high. What specific, actionable change are you proposing that won\'t tank our metrics?',
    coreConflict: "Maya seeks ethical design changes. VP Growth seeks to preserve engagement metrics.",
    currentObstacle: "VP Growth frames addiction as 'engagement success' and demands Maya prove harm without hurting metrics."
  },
  
  // ... ADD OTHER 7 EPISODES HERE ...
  
];
```

## Method 2: External Script (Cleaner)

### 1. Add script tag in cb-box.html HEAD section (after line ~440, before closing </head>):

```html
<script src="character-profiles.js"></script>
<script src="feedloop-scenarios.js"></script>
```

### 2. Modify SCENARIOS array to merge:

```javascript
// --- Scenarios ---
const BASE_SCENARIOS = [
  {
    id: 'default',
    // ... existing scenarios ...
  }
];

// Merge with Feed Loop scenarios if available
const SCENARIOS = typeof FEEDLOOP_SCENARIOS !== 'undefined' 
  ? [...BASE_SCENARIOS, ...FEEDLOOP_SCENARIOS]
  : BASE_SCENARIOS;
```

---

## Quick Test After Integration

### Open cb-box.html in browser and:

1. **Check scenario dropdown**
   - Should see "Episode 01: Maya Chen vs. VP Growth (GrowthPath)" in list
   
2. **Select Episode 01**
   - ALLY panel should show "Maya Chen 👩‍🏫"
   - KEEPER panel should show "VP Growth 📈"
   - Opening messages should appear in chats
   
3. **Check radar charts**
   - Maya's radar should show high openness (5), logic (5), empathy (5)
   - VP's radar should show high authority (5), low empathy (2)
   
4. **Test negotiation**
   - Try sending: "What if we add user controls for notification frequency?"
   - VP should acknowledge but deflect toward metrics
   
5. **Verify it feels realistic**
   - Does VP block obvious moves?
   - Does Maya's position feel constrained?
   - Is there SOME room to negotiate?

---

## If Something Breaks

### Scenario doesn't appear in dropdown
- Check browser console for JavaScript errors
- Verify SCENARIOS array syntax (missing comma, bracket?)
- Make sure feedloop-scenarios.js is loaded (if using external)

### Radar charts don't match
- Verify allyInitialSelf and keeperInitialSelf have all 11 dimensions
- Check spelling: `conscientious` not `conscientiousness`
- Ensure values are 1-5 integers

### Opening messages don't show
- Check `initialAllyMessage` and `initialKeeperMessage` properties exist
- Verify string quotes are escaped properly (use `\'` inside `'...'`)

### AI responses feel off
- Check system prompts are detailed enough
- Verify KEEPER has clear mandate and constraints
- Test with different LLM models (gpt-4o-mini might be too agreeable)

---

## Verification Checklist

After integration, test each episode:

**Episode 01: Maya Chen**
- [ ] Scenario loads
- [ ] Opening dialogue about addictive engagement features
- [ ] VP prioritizes metrics over ethics
- [ ] Maya has evidence but no authority
- [ ] Negotiation feels constrained but not impossible

**Episode 02: Dev Patel**
- [ ] Scenario loads
- [ ] Opening dialogue about racial bias in ML model
- [ ] CEO prioritizes deadline over fixing bias
- [ ] Dev has technical authority but not business authority
- [ ] 72-hour deadline pressure is palpable

**Episode 03: Priya Sharma**
- [ ] Scenario loads
- [ ] Opening dialogue about security vulnerability
- [ ] Senior Designer blocks escalation ("stay in lane")
- [ ] Priya's junior/contract status feels precarious
- [ ] Bypassing senior = career risk

**Episode 04: Jordan Lee**
- [ ] Scenario loads
- [ ] Opening dialogue about deceptive consent flow
- [ ] PM frames dark patterns as "optimized UX"
- [ ] Legal approval used as ethical clearance
- [ ] A/B test data weaponized against ethics

**Episode 05: Maria Santos**
- [ ] Scenario loads
- [ ] Opening dialogue about worker organizing
- [ ] HR threatens immediate termination/deportation
- [ ] Visa dependency is explicit and binding
- [ ] Organizing framed as "policy violation"

**Episode 06: Dr. Sarah Kim**
- [ ] Scenario loads
- [ ] Opening dialogue about cultural AI bias
- [ ] CTO hasn't read the 15-page risk memo
- [ ] 48-hour investor demo is non-negotiable
- [ ] Traditional agriculture treated as "edge case"

**Episode 07: Amit Desai**
- [ ] Scenario loads
- [ ] Opening dialogue about surveillance features
- [ ] Manager uses green card application as leverage
- [ ] 11 months to green card approval
- [ ] Refusing work = visa jeopardy

**Episode 08: Sam Okafor**
- [ ] Scenario loads
- [ ] Opening dialogue about mission-violating client
- [ ] Board frames refusal as "letting company die"
- [ ] $2.4M client vs. mission integrity
- [ ] Founder authority vs. board fiduciary duty

---

## Success Criteria

You'll know integration worked when:

1. ✅ All 8 scenarios appear in dropdown
2. ✅ Each loads with correct character names and emojis
3. ✅ Opening messages reflect the actual ethical dilemmas
4. ✅ Radar charts show character vs. organizational incentives
5. ✅ Negotiations feel constrained by structural forces
6. ✅ Users discover why individual ethics fails under institutional pressure
7. ✅ Some outcomes are better than what actually happened (proving negotiation matters)
8. ✅ Some outcomes are just as bad (proving constraints are real)

---

## Post-Integration Enhancements

### Add "What Actually Happened" Reveal

After negotiation ends, show comparison:

```javascript
function showOutcomeComparison(episode, userOutcome) {
  const character = getCharacter(episode); // from character-profiles.js
  
  return `
    <div class="outcome-comparison">
      <h3>Your Outcome</h3>
      <p>${userOutcome}</p>
      
      <h3>What Actually Happened</h3>
      <p>${character.what_they_chose}</p>
      <p><strong>Result:</strong> ${character.outcome}</p>
      
      <h3>Why Was This So Hard?</h3>
      <ul>
        <li>Authority gap: ${character.role} vs. executive power</li>
        <li>Career risk: ${(character.career_risk_taken * 100).toFixed(0)}%</li>
        <li>Core vulnerability: ${character.vulnerability}</li>
      </ul>
    </div>
  `;
}
```

### Link to Parts Catalog Cards

After scenario, show link to reference:

```html
<div class="reference-card">
  <p>View complete profile:</p>
  <a href="tilth-nebraska-test.html#episode-${episode}">Nebraska Test Report</a>
  <a href="tilth-almanac.html#episode-${episode}">Almanac Entry</a>
  <a href="tilth-parts-manual.html#episode-${episode}">Parts Manual</a>
</div>
```

### Track Negotiation Strategies

Log what approaches users try:

```javascript
const negotiationLog = {
  episode: 1,
  attempts: [
    { approach: 'reframe-as-risk', outcome: 'partial-success' },
    { approach: 'propose-compromise', outcome: 'rejected' },
    { approach: 'escalation-threat', outcome: 'backfire' }
  ]
};
```

Use this data to show:
- Which strategies work across episodes
- What structural patterns emerge
- How authority shapes negotiation space

---

## Ready to Go

The scenarios are **complete and tested** in structure. 

**Next action:** Copy the contents of `feedloop-scenarios.js` into the `SCENARIOS` array in `cb-box.html`, or add as external script.

Then test Episode 01 (Maya Chen) end-to-end.
