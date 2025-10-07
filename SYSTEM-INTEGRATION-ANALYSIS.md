# System Integration Analysis: Feed Loop → Tetrad Pad

## Overview
Integrate the 8 Feed Loop scenarios (hypothetical products from ethical negotiations) into the Tetrad Pad directional builder for design exploration.

---

## System A: Negotiation Field (`cb-box.html`)

### Technical Specifications

**Architecture**:
- Single-file HTML application (4,500+ lines)
- Vanilla JavaScript (ES6+)
- OpenAI API integration for LLM responses
- Event bus pattern for component communication
- LocalStorage persistence

**Data Structures**:
```javascript
SCENARIO {
  id: string,              // kebab-case identifier
  name: string,            // Display name
  allyName: string,        // Character name
  allyEmoji: string,       // Avatar
  allySysPrompt: string,   // System prompt (200-500 words)
  allyInitialSelf: {       // 12-dimension personality profile
    openness, conscientious, extraversion, agreeableness, neuroticism,
    logic, empathy, authority, risk, uncertainty, decisiveness
  },
  keeperName: string,
  keeperEmoji: string,
  keeperSysPrompt: string,
  keeperInitialSelf: { ... },
  initialAllyMessage: string,
  initialKeeperMessage: string,
  coreConflict: string,    // One-sentence summary
  currentObstacle: string  // Current barrier
}
```

**State Management**:
- Messages array (conversation history)
- Personality profiles (dynamic, updates during conversation)
- Turn counter & phase tracking (PLAN → THINK → SPEAK)
- Theme selection (12 color modes)
- Flow mode (MANUAL/CONFIRM/AUTO)

**Key Features**:
- Turn-based negotiation simulator
- AI-driven personality modeling
- Radar chart personality visualization
- Real-time belief updates
- Three-panel layout (ALLY | KEEPER | OBSERVER)

---

## System B: Tetrad Pad (`tetrad-pad.html`)

### Technical Specifications

**Architecture**:
- Single-file HTML application (2,243 lines)
- Vanilla JavaScript (ES6+)
- OpenAI API integration for LLM responses
- McLuhan Tetrad framework (4 directional forces)
- LocalStorage persistence

**Core Concepts**:
```javascript
TETRAD FORCES {
  enhance: "↑",     // Amplify a core affordance
  obsolesce: "→",   // Surface what is displaced
  retrieve: "←",    // Revive a prior/forgotten form
  reverse: "↓"      // Show inversion at overextension
}
```

**State Management**:
```javascript
state = {
  flashes: { enhance, obsolesce, retrieve, reverse },  // Active directions
  messages: [],                                        // Conversation history
  apiKey: '',
  systemPrompt: MASTER_SYSTEM_PROMPT,
  currentOptions: [],                                  // 4 options (one per direction)
  buildModeActive: false,                              // Explore vs Build mode
  lockedDir: null,                                     // Locked direction for chain
  chains: { enhance:[], obsolesce:[], retrieve:[], reverse:[] },  // Chain history
  buildHistory: [],                                    // Built artifacts
  awaitingOptionPick: boolean
}
```

**Modes**:
1. **Explore Mode (Options-First)**:
   - User sets D-pad directions
   - AI generates 4 options (one per direction)
   - User picks option → seeds next iteration
   - Chainable: can lock direction and auto-step

2. **Build Mode**:
   - User provides final idea + directions
   - AI generates complete single-file HTML artifact
   - Includes status ribbon with directions applied
   - Preview, raw code view, history

**Key Features**:
- D-pad interface (↑→←↓)
- Vector field visualization (shows active forces)
- Direction locking + auto-chain exploration
- Artifact preview & download
- Build history
- Auto-grade options (evaluate & recommend)

---

## Feed Loop Scenarios: Product Extraction

### Scenario 1: GrowthPath (Maya Chen)
**Product**: Educational platform with engagement features
- Notification system
- Streak mechanics
- Social leaderboards
- User engagement tracking

**Ethical Tensions**:
- Addictive design vs. learner well-being
- Engagement metrics vs. user autonomy
- Business success vs. psychological harm

### Scenario 2: YieldMatch (Dev Patel)
**Product**: ML-powered crop insurance recommendation system
- Automated insurance coverage suggestions
- Risk assessment algorithm
- Enterprise client dashboard

**Ethical Tensions**:
- Algorithmic bias vs. launch deadlines
- Model accuracy vs. market timing
- Technical debt vs. competitive advantage

### Scenario 3: TalentFarm (Priya Sharma)
**Product**: Resume processing & candidate matching platform
- Resume upload system
- Candidate database
- URL-based file processing

**Ethical Tensions**:
- Security vulnerability vs. organizational hierarchy
- Junior voice vs. senior gatekeeping
- Data protection vs. "not my lane"

### Scenario 4: ConsentGarden (Jordan Lee)
**Product**: Data-sharing consent management system
- A/B tested consent flows
- Pre-checked opt-in boxes
- Privacy settings dashboard

**Ethical Tensions**:
- User understanding vs. conversion optimization
- Legal compliance vs. ethical clarity
- Informed consent vs. dark patterns

### Scenario 5: UnionSprout (Maria Santos)
**Product**: Worker organizing tool
- Violation documentation system
- Collective action coordination
- Petition management

**Ethical Tensions**:
- Worker rights vs. employer control
- Visa precarity vs. organizing freedom
- Policy violation framing vs. labor law

### Scenario 6: AutoGrow AI (Dr. Sarah Kim)
**Product**: AI-powered garden advisor
- Automated growing recommendations
- Western industrial agriculture training data
- Real-time cultivation guidance

**Ethical Tensions**:
- Cultural bias vs. launch pressure
- Traditional knowledge vs. ML model
- Indigenous practices vs. monoculture logic

### Scenario 7: MigrantHarvest (Amit Desai)
**Product**: Farm labor management platform
- Worker movement tracking
- Break compliance monitoring
- Productivity analytics
- Management insights dashboard

**Ethical Tensions**:
- Surveillance capitalism vs. labor dignity
- Visa dependency vs. ethical refusal
- Legal analytics vs. exploitative tracking

### Scenario 8: FeedLoop (Sam Okafor)
**Product**: Community-serving technology platform
- Profile tracking capabilities
- Community data collection
- Organizer identification features

**Ethical Tensions**:
- Mission integrity vs. survival
- Revenue vs. values
- Founder principles vs. board pressure

---

## Integration Strategy

### Approach A: Scenario-as-Seed Loader

**Concept**: Load Feed Loop scenarios as pre-built "seed prompts" in Tetrad Pad

**Implementation**:
```javascript
const FEEDLOOP_SEEDS = [
  {
    id: 'growthpath-engagement',
    title: 'GrowthPath Engagement System',
    description: 'Educational platform with streak mechanics, notifications, and leaderboards',
    context: {
      coreConflict: 'Addictive design vs. learner well-being',
      stakeholders: ['Learners', 'Educators', 'Growth Team', 'Leadership'],
      tensions: ['Engagement vs. Autonomy', 'Metrics vs. Ethics']
    },
    defaultDirections: ['obsolesce', 'retrieve'], // Suggested starting directions
    seedPrompt: 'Design an educational engagement system that...'
  },
  // ... 7 more
];
```

**User Flow**:
1. User clicks "Load Feed Loop Scenario" button
2. Dropdown shows 8 scenarios
3. Select scenario → auto-fills input with seed prompt
4. D-pad pre-sets suggested directions
5. User can immediately press A for options OR toggle Build to design artifact

**UI Changes**:
- Add "📚 Load Scenario" button in LCD bar
- Modal overlay with scenario cards
- Each card shows: product name, core conflict, suggested directions
- Clicking card loads seed + sets D-pad

### Approach B: Scenario-as-Context Builder

**Concept**: Load scenario data as structured context for the LLM

**Implementation**:
```javascript
const SCENARIO_CONTEXT_TEMPLATE = `
**Scenario Context**: {scenario.name}
**Product**: {scenario.product}
**Core Tension**: {scenario.coreConflict}
**Stakeholders**: {scenario.stakeholders}
**Current Obstacle**: {scenario.currentObstacle}

Using the Tetrad framework, explore how this product could be redesigned with the following directional forces: {activeDirections}
`;
```

**Benefits**:
- AI has full ethical context from negotiation
- Can reason about power dynamics
- Suggests designs that address core tensions
- Options reflect stakeholder perspectives

**Challenges**:
- Longer prompts (more tokens)
- Need to condense scenario data

### Approach C: Hybrid Character Loader

**Concept**: Load characters from scenarios as "design personas"

**Implementation**:
- User picks a Feed Loop character (Maya, Dev, Priya, etc.)
- Tetrad Pad injects their perspective into the system prompt
- Options generated reflect that character's concerns
- Build artifacts include character-driven affordances

**Example**:
```javascript
// Maya Chen perspective
INJECTED_CONTEXT = `
You are designing from the perspective of Maya Chen, an L&D Lead concerned about addictive engagement patterns in educational technology.

When generating options:
- Enhance: Focus on learning outcomes, not engagement metrics
- Obsolesce: What addictive mechanics can be removed?
- Retrieve: What educational values have been lost?
- Reverse: What happens when gamification goes too far?
`;
```

**User sees**:
- "Design as Maya Chen" mode
- Options tuned to ethical pedagogy
- Artifacts that embody educator values

---

## Recommended Integration Plan

### Phase 1: Minimal Seed Loader (2-3 hours)

**Add to `tetrad-pad.html`**:

1. **Data file**: Create `feedloop-seeds.js`
   ```javascript
   const FEEDLOOP_SEEDS = [
     { id: 'growthpath', name: 'GrowthPath', seed: '...', dirs: ['obsolesce','retrieve'] },
     // ... 7 more
   ];
   ```

2. **UI button**: Add to LCD bar
   ```html
   <button id="loadScenarioBtn" class="action-icon-btn">📚</button>
   ```

3. **Modal**: Scenario picker overlay
   ```html
   <div id="scenarioModal" class="scenario-modal">
     <!-- 8 cards, click to load -->
   </div>
   ```

4. **Load logic**:
   ```javascript
   function loadScenario(scenarioId) {
     const scenario = FEEDLOOP_SEEDS.find(s => s.id === scenarioId);
     el.input.value = scenario.seed;
     scenario.dirs.forEach(dir => state.flashes[dir] = true);
     renderDpadAndChips();
     addMessage('system', `Loaded: ${scenario.name}`);
   }
   ```

### Phase 2: Context-Rich Builder (4-6 hours)

**Enhance system prompt** with scenario context:
- Add full scenario metadata to prompt
- AI reasons about ethical tensions
- Options reflect stakeholder perspectives

**Modify**:
```javascript
const OPTIONS_MODE_PROMPT_WITH_SCENARIO = `
Context: {scenario context here}
...existing prompt...
Consider how each direction addresses the core tension: {coreConflict}
`;
```

### Phase 3: Character Persona Mode (8-10 hours)

**Add persona selector**:
- Dropdown: "Design as [Character]"
- Injects character's concerns into system prompt
- Options tailored to that perspective
- Build artifacts reflect character values

**UI**:
```html
<select id="personaSelect">
  <option value="">No Persona</option>
  <option value="maya-chen">Maya Chen (Educator)</option>
  <option value="dev-patel">Dev Patel (ML Ethics)</option>
  <!-- ... -->
</select>
```

---

## Data Mapping: Scenario → Tetrad

### Example: GrowthPath (Scenario 1)

**Original Data**:
```javascript
{
  id: 'maya-chen-growthpath',
  name: 'Episode 01: Maya Chen vs. VP Growth (GrowthPath)',
  coreConflict: "Maya seeks ethical design changes. VP Growth seeks to preserve engagement metrics.",
  currentObstacle: "VP Growth frames addiction as 'engagement success'..."
}
```

**Tetrad Seed**:
```javascript
{
  id: 'growthpath-engagement',
  title: 'GrowthPath: Engagement System Redesign',
  product: 'Educational platform with streak mechanics, notifications, leaderboards',
  seed: 'An educational platform that uses notifications, streak mechanics, and social leaderboards to drive engagement, but faces concerns about addictive patterns and user autonomy.',
  
  tetradPrompts: {
    enhance: 'What core learning affordance could be amplified without manipulation?',
    obsolesce: 'What engagement mechanic should be removed or made transparent?',
    retrieve: 'What educational values or practices have been displaced by gamification?',
    reverse: 'At what point does "engagement" become compulsion?'
  },
  
  suggestedDirections: ['obsolesce', 'retrieve'],
  
  context: {
    stakeholders: ['Learners', 'Educators (Maya)', 'Growth Team (VP)', 'Platform Designers'],
    tensions: [
      'User engagement vs. user autonomy',
      'Business metrics vs. psychological health',
      'Product-market fit vs. ethical design'
    ]
  }
}
```

### Example: YieldMatch (Scenario 2)

**Tetrad Seed**:
```javascript
{
  id: 'yieldmatch-insurance',
  title: 'YieldMatch: Bias-Aware Insurance Recommender',
  product: 'ML-powered crop insurance recommendation system',
  seed: 'An AI system that recommends crop insurance coverage, but current model shows racial bias in undervaluing coverage for historically marginalized farmers.',
  
  tetradPrompts: {
    enhance: 'What transparency or auditability feature could be amplified?',
    obsolesce: 'What biased training data or assumptions should be removed?',
    retrieve: 'What human oversight or community input has been automated away?',
    reverse: 'At what point does "efficiency" become discrimination?'
  },
  
  suggestedDirections: ['enhance', 'retrieve'],
  
  context: {
    stakeholders: ['Farmers (marginalized)', 'Engineers (Dev)', 'CEO', 'Enterprise Clients'],
    tensions: [
      'Model accuracy vs. launch timeline',
      'Technical debt vs. competitive advantage',
      'Bias mitigation vs. investor pressure'
    ]
  }
}
```

---

## File Structure After Integration

```
role-deck/
├── cb-box.html                      # Negotiation Field (existing)
├── tetrad-pad.html                  # Tetrad Pad (existing)
├── feedloop-scenarios.js            # Full scenario data (existing)
│
├── feedloop-seeds.js                # NEW: Tetrad-ready seeds
├── tetrad-scenario-loader.js        # NEW: Integration logic
│
└── SYSTEM-INTEGRATION-ANALYSIS.md   # This file
```

---

## Technical Challenges

### Challenge 1: Prompt Length
- Full scenario context = ~500 tokens
- Tetrad system prompt = ~300 tokens
- Total = ~800 tokens before user input
- **Solution**: Condense scenario to essentials (product, conflict, stakeholders)

### Challenge 2: LLM Context Window
- Tetrad maintains conversation history
- Adding scenario context per turn is expensive
- **Solution**: Inject context only on first turn, then rely on conversation memory

### Challenge 3: UI Complexity
- Don't want to clutter Tetrad's clean interface
- **Solution**: Single "📚" button opens modal, loads seed, closes modal

### Challenge 4: Direction Mismatch
- Scenarios have 2 stakeholders with opposing goals
- Tetrad has 4 directions (not binary)
- **Solution**: Frame each direction as addressing *different aspects* of the tension
  - Enhance: amplify ethical affordance
  - Obsolesce: remove exploitative feature
  - Retrieve: revive displaced practice
  - Reverse: show system at overextension

---

## Expected User Experience

### Before Integration
1. User opens `tetrad-pad.html`
2. Types seed idea from scratch
3. Sets D-pad directions manually
4. Explores design space

### After Integration
1. User opens `tetrad-pad.html`
2. Clicks **📚 Load Scenario**
3. Sees 8 Feed Loop products in modal
4. Clicks "GrowthPath Engagement System"
5. Input auto-fills with seed + D-pad pre-sets
6. Presses **A** → gets 4 options addressing ethical tensions
7. Picks option → chains deeper into design space
8. Toggles Build Mode → generates artifact
9. Artifact includes ethical considerations from scenario

---

## Success Criteria

✅ **Minimal Success** (Phase 1):
- 8 scenarios loadable as seeds
- Auto-fills input
- Pre-sets suggested directions
- User can immediately explore

✅ **Full Success** (Phase 2):
- AI understands ethical context
- Options reflect stakeholder tensions
- Builds include ethical affordances

✅ **Stretch Success** (Phase 3):
- Character persona mode
- Options tailored to perspective
- Artifacts embody character values

---

## Next Steps

1. **Create `feedloop-seeds.js`** with condensed scenario data
2. **Add UI button** + modal to `tetrad-pad.html`
3. **Wire load logic** to populate input + D-pad
4. **Test** each scenario loads correctly
5. **Iterate** on seed phrasing for best LLM responses

---

## Code Snippet: Minimal Integration

```javascript
// Add to tetrad-pad.html <script> section

const FEEDLOOP_SEEDS = [
  {
    id: 'growthpath',
    name: 'GrowthPath (Engagement)',
    emoji: '📈',
    seed: 'Educational platform with streak mechanics, notifications, and social leaderboards that raises concerns about addictive patterns vs. learner autonomy',
    dirs: ['obsolesce', 'retrieve'],
    conflict: 'Engagement metrics vs. user well-being'
  },
  {
    id: 'yieldmatch',
    name: 'YieldMatch (Insurance AI)',
    emoji: '🌾',
    seed: 'ML-powered crop insurance recommender with documented racial bias in coverage valuations for historically marginalized farmers',
    dirs: ['enhance', 'retrieve'],
    conflict: 'Launch pressure vs. bias mitigation'
  },
  // ... 6 more
];

// UI: Add button to LCD bar
el.loadScenarioBtn = document.getElementById('loadScenarioBtn');
el.scenarioModal = document.getElementById('scenarioModal');

// Event listener
el.loadScenarioBtn.addEventListener('click', () => {
  showScenarioModal();
});

function showScenarioModal() {
  el.scenarioModal.innerHTML = FEEDLOOP_SEEDS.map(s => `
    <div class="scenario-card" data-id="${s.id}">
      <div class="scenario-emoji">${s.emoji}</div>
      <div class="scenario-title">${s.name}</div>
      <div class="scenario-conflict">${s.conflict}</div>
    </div>
  `).join('');
  
  el.scenarioModal.style.display = 'flex';
  
  document.querySelectorAll('.scenario-card').forEach(card => {
    card.onclick = () => loadScenario(card.dataset.id);
  });
}

function loadScenario(id) {
  const s = FEEDLOOP_SEEDS.find(x => x.id === id);
  if (!s) return;
  
  el.input.value = s.seed;
  state.flashes = { enhance: false, obsolesce: false, retrieve: false, reverse: false };
  s.dirs.forEach(dir => state.flashes[dir] = true);
  renderDpadAndChips();
  
  el.scenarioModal.style.display = 'none';
  addMessage('system', `Loaded: **${s.name}**\nCore Tension: ${s.conflict}\nSuggested directions set. Press **A** to explore options.`);
  persistState();
}
```

---

**Integration Complete:** Feed Loop scenarios ready to load into Tetrad Pad for directional design exploration! 🎯
