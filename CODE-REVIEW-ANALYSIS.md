# Negotiation Field - Code Architecture Analysis

## File: `cb-box.html` (4,337 lines, single-file application)

---

## 🏗️ HIGH-LEVEL ARCHITECTURE

### File Structure Overview
```
cb-box.html
├── [1-460]     CSS/Styling (themes, layout, components)
├── [461-1000]  HTML Structure (header, panels, modals)
├── [1001-4337] JavaScript Application Logic
    ├── Global State & Configuration
    ├── Scenario Definitions (SCENARIOS array)
    ├── Core Classes (Sequencer, Bus, LLM)
    ├── UI Controllers
    ├── Event Handlers
    └── Initialization
```

---

## ✅ STRONG AREAS

### 1. **Theme System** (Lines 8-29)
- **Clean CSS variable system** with 12 color themes
- Well-organized theme categories (Standard, Agricultural, Natural, Developer)
- Consistent variable naming: `--bg`, `--fg`, `--accent`, `--card`, `--line`
- **Status**: ✅ Clear and maintainable

### 2. **Responsive Layout** (Lines 88-107)
- Three-panel desktop layout with mobile tab switching
- Proper viewport handling with sticky header
- Good use of CSS Grid and Flexbox
- **Status**: ✅ Works well

### 3. **Event Bus Pattern** (JavaScript section)
- Decoupled communication between components
- Clean pub/sub for state changes
- **Status**: ✅ Good architectural choice

---

## ⚠️ AREAS NEEDING ATTENTION

### **CRITICAL: No Documentation Comments in JavaScript**

**Problem**: The JavaScript section (2,000+ lines) has almost zero inline comments explaining:
- What each major function does
- What the data flow is
- What the state management strategy is
- How scenarios are loaded and executed

**Impact**: New developers (or future you) will struggle to understand:
- How turns progress through the negotiation
- How personality updates work
- How the LLM integration connects
- What the "Sequencer" class actually does

### **Specific Weak Spots**

#### 1. **Scenario Data Structure** (Lines ~3400-3700)
```javascript
const SCENARIOS = [
  {
    id: 'maya-chen-growthpath',
    name: 'Episode 01: Maya Chen vs. VP Growth',
    allySysPrompt: `...`,  // 300+ word prompts with no structure doc
    // 20+ properties per scenario, no schema documented
  }
]
```

**Issues**:
- No schema documentation for scenario objects
- Required vs. optional properties unclear
- No validation that scenarios are well-formed
- Property names not consistently explained

**Fix Needed**: Add a JSON schema comment block at the top of SCENARIOS explaining:
```javascript
/**
 * SCENARIO DATA STRUCTURE
 * 
 * Each scenario object must include:
 * 
 * @property {string} id - Unique identifier (kebab-case)
 * @property {string} name - Display name for dropdown
 * @property {string} allyName - Name of the ALLY character
 * @property {string} allyEmoji - Emoji for ALLY avatar
 * @property {string} allySysPrompt - System prompt defining ALLY role (200-500 words)
 * @property {Object} allyInitialSelf - 12-dimension personality profile
 *   - openness, conscientious, extraversion, agreeableness, neuroticism (0-5)
 *   - logic, empathy, authority, risk, uncertainty, decisiveness (0-5)
 * @property {string} keeperName - Name of the KEEPER character
 * @property {string} keeperEmoji - Emoji for KEEPER avatar
 * @property {string} keeperSysPrompt - System prompt defining KEEPER role
 * @property {Object} keeperInitialSelf - KEEPER personality profile (same structure)
 * @property {string} initialAllyMessage - ALLY's opening message
 * @property {string} initialKeeperMessage - KEEPER's opening message
 * @property {string} coreConflict - One-sentence summary of the negotiation tension
 * @property {string} currentObstacle - Current barrier to resolution
 * @property {Object} [lore] - Optional additional context (not used in all scenarios)
 */
```

#### 2. **Global State Management** (Scattered throughout)
**Problem**: Global state is managed through multiple patterns:
- LocalStorage for persistence
- Global variables for runtime state
- Event bus for state changes
- DOM as state source-of-truth in some places

**Issues**:
- No single source of truth
- State initialization scattered across multiple functions
- Unclear what gets persisted vs. what's ephemeral
- Hard to debug state-related bugs

**Example** (current code has no map of this):
```javascript
// WHERE IS STATE STORED? (needs documentation)
// 1. LocalStorage: API keys, model names, preferences
// 2. DOM attributes: data-theme, data-tab, current role classes
// 3. Global objects: currentScenario, allyBelief, keeperBelief
// 4. Sequencer instance: turn count, phase, conversation history
// 5. Chat divs: message history (DOM as database)
```

**Fix Needed**: Add a "STATE MANAGEMENT" comment block documenting:
- What state exists
- Where each piece lives
- What triggers state changes
- What gets persisted

#### 3. **Sequencer Class** (Major component, under-documented)
**Problem**: The `Sequencer` class orchestrates the entire negotiation flow but has minimal explanation of:
- What "phases" are (PLAN, THINK, SPEAK)
- How turns are structured
- What the different flow modes do (MANUAL, CONFIRM, AUTO)
- How AI generation fits into the sequence

**Fix Needed**: Add class-level documentation:
```javascript
/**
 * SEQUENCER CLASS - Core negotiation flow controller
 * 
 * Manages turn-based conversation between ALLY and KEEPER.
 * Each turn has 3 phases:
 * 
 * 1. PLAN:  AI generates 3-5 strategic response options
 * 2. THINK: AI selects best option (with reasoning)
 * 3. SPEAK: Selected response is delivered to chat
 * 
 * Flow Modes:
 * - MANUAL:  User manually triggers each step
 * - CONFIRM: System pauses for user confirmation before each action
 * - AUTO:    Fully automated AI-to-AI dialogue
 * 
 * @param {Object} options
 * @param {string} options.mode - Flow mode (MANUAL|CONFIRM|AUTO)
 * @param {Function} options.onPhase - Callback fired on phase transitions
 */
```

#### 4. **LLM Integration** (API calls scattered)
**Problem**: OpenAI API calls happen in multiple places:
- Personality modeling
- Strategic planning
- Response generation
- Belief updates

**Issues**:
- No centralized error handling
- API key validation only happens at init
- No rate limiting or retry logic
- Unclear what happens if API fails mid-conversation

**Fix Needed**: Document the LLM call chain and error handling strategy

#### 5. **Personality Update Logic** (Complex, undocumented)
**Problem**: The personality radar charts update based on message content, but the logic is opaque:
- What triggers an update?
- How are dimensions calculated?
- What's the update algorithm?
- Can dimensions only increase, or do they decrease too?

**Current code** (no explanation of the math):
```javascript
async analyzePersonalityShift(message, currentProfile, role) {
  // What does this actually do?
  // What's the prompt it sends to the LLM?
  // How does it parse the response?
  // What happens if the LLM returns invalid JSON?
}
```

**Fix Needed**: Add comments explaining:
- The prompt used for personality analysis
- How responses are validated
- The update rules (e.g., max shift per turn)
- Fallback behavior on errors

---

## 🎯 RECOMMENDED IMPROVEMENTS

### Priority 1: Add Architectural Overview Comment

At the top of the `<script>` section, add:

```javascript
/**
 * =====================================================
 * NEGOTIATION FIELD - APPLICATION ARCHITECTURE
 * =====================================================
 * 
 * This is a single-file ethical negotiation simulator.
 * Users can practice navigating workplace power dynamics
 * through AI-powered role-play scenarios.
 * 
 * KEY CONCEPTS:
 * 
 * - ALLY:     Individual practitioner seeking ethical change
 * - KEEPER:   Authority figure representing structural constraints
 * - SCENARIO: Pre-defined conflict with character profiles
 * - TURN:     One complete exchange (ALLY speaks, KEEPER responds, or vice versa)
 * - PHASE:    Substep within a turn (PLAN → THINK → SPEAK)
 * 
 * TECH STACK:
 * - Vanilla JS (ES6+)
 * - OpenAI API for LLM responses
 * - LocalStorage for persistence
 * - Event bus for component communication
 * - SVG for personality radar charts
 * 
 * DATA FLOW:
 * 1. User selects scenario → loads character profiles
 * 2. User or AI sends message
 * 3. Sequencer triggers PLAN phase (AI generates response options)
 * 4. Sequencer triggers THINK phase (AI selects best option)
 * 5. Sequencer triggers SPEAK phase (response delivered to chat)
 * 6. Personality profiles updated based on message content
 * 7. Radar charts re-rendered
 * 8. Turn advances, cycle repeats
 * 
 * MAIN CLASSES:
 * - Sequencer: Turn-based flow control
 * - Bus:       Event pub/sub system
 * - (LLM functions): API integration layer
 * 
 * PERSISTENCE:
 * - API keys, model names, theme → LocalStorage
 * - Conversation history → ephemeral (lost on reload)
 * 
 * =====================================================
 */
```

### Priority 2: Add Section Markers

Break up the JavaScript into clearly marked sections:

```javascript
// =====================================================
// SECTION 1: GLOBAL STATE & CONFIGURATION
// =====================================================

// =====================================================
// SECTION 2: SCENARIO DEFINITIONS
// =====================================================

// =====================================================
// SECTION 3: CORE CLASSES (Sequencer, Bus, etc.)
// =====================================================

// =====================================================
// SECTION 4: LLM INTEGRATION (API calls)
// =====================================================

// =====================================================
// SECTION 5: UI CONTROLLERS (chat, radar, panels)
// =====================================================

// =====================================================
// SECTION 6: EVENT HANDLERS (buttons, inputs)
// =====================================================

// =====================================================
// SECTION 7: INITIALIZATION (DOMContentLoaded)
// =====================================================
```

### Priority 3: Document Complex Functions

Add JSDoc-style comments to key functions:

```javascript
/**
 * Sends a planning request to the LLM
 * Generates 3-5 strategic response options for the current speaker
 * 
 * @param {string} role - 'ally' or 'keeper'
 * @param {string} conversationHistory - Full chat transcript
 * @param {Object} currentSelf - Current personality profile (12 dimensions)
 * @returns {Promise<Array>} Array of response options with reasoning
 * @throws {Error} If API key missing or API call fails
 */
async function generateStrategicPlan(role, conversationHistory, currentSelf) {
  // ...
}
```

### Priority 4: Add Inline Clarifications

For confusing logic, add inline comments:

```javascript
// Update personality based on message content
// Only allow max ±0.5 shift per dimension per turn to prevent wild swings
const dampedShift = Math.max(-0.5, Math.min(0.5, rawShift));

// Store in LocalStorage for persistence across sessions
localStorage.setItem('apiKey', apiKey);

// Relay mode: When ALLY speaks, automatically trigger KEEPER response
if (relayMode && role === 'ally') {
  setTimeout(() => triggerKeeperResponse(), 500);
}
```

---

## 📊 CODE METRICS

| Metric | Value | Status |
|--------|-------|--------|
| Total Lines | 4,337 | ⚠️ Large (consider splitting) |
| CSS Lines | ~460 | ✅ Manageable |
| HTML Lines | ~540 | ✅ Manageable |
| JavaScript Lines | ~3,340 | ⚠️ Needs organization |
| Comment Density | <5% | ❌ Too low |
| Function Count | ~80+ | ⚠️ Many undocumented |
| Global Variables | ~30+ | ⚠️ Unclear purpose |

---

## 🔧 SPECIFIC CONFUSING SECTIONS

### 1. **Line ~2800-2900: Radar Chart Generation**
- Complex SVG path calculations
- No explanation of the math (polar coordinates? dodecagon geometry?)
- Hard to modify without breaking

**Needs**: Diagram or comment explaining the coordinate system

### 2. **Line ~3200-3300: Personality Shift Calculation**
- LLM-based personality modeling
- Unclear prompt structure
- No validation of LLM response format

**Needs**: Example input/output showing what the LLM sees and returns

### 3. **Line ~3900-4000: Turn Advancement Logic**
- Complex conditional flow
- Multiple exit points
- Hard to trace execution path

**Needs**: Flowchart comment or state diagram

### 4. **Line ~1500-1600: LocalStorage Management**
- Scattered save/load calls
- No clear schema for what's stored
- Hard to debug persistence issues

**Needs**: Centralized storage interface with clear key naming

---

## 🎨 UI/UX OBSERVATIONS

### Strong Points
- ✅ Theme system is excellent (12 themes, well-organized)
- ✅ Mobile-responsive layout works
- ✅ Radar charts are visually effective
- ✅ Status pills clearly show current phase

### Weak Points
- ⚠️ No loading states (user doesn't know when LLM is working)
- ⚠️ No error messages visible to user (API failures silent?)
- ⚠️ No "undo" or conversation replay
- ⚠️ Conversation history can't be saved/exported easily

---

## 🚀 QUICK WINS (Easy Improvements)

1. **Add a loading spinner** when LLM is generating
2. **Show toast notifications** for errors (API key missing, API failure, etc.)
3. **Add "Export Conversation"** button to save chat as JSON or markdown
4. **Add "Jump to Scenario Start"** button to reset without losing config
5. **Add character count** to user input box (help them write better prompts)

---

## 📝 DOCUMENTATION PRIORITIES

### Must Document:
1. **Scenario schema** (what properties are required?)
2. **Global state map** (where does state live?)
3. **Sequencer flow** (how do turns work?)
4. **LLM integration** (what APIs are called when?)
5. **Personality modeling** (how do dimensions update?)

### Nice to Document:
6. Radar chart math
7. Event bus usage patterns
8. LocalStorage schema
9. Theme customization guide
10. Adding new scenarios

---

## 🎯 FINAL RECOMMENDATIONS

### For End Users
The application is **functional and usable**, but would benefit from:
- Better error messages
- Loading indicators
- Save/export features

### For Developers
The code **works** but is **hard to maintain** due to:
- Lack of comments
- Scattered state management
- No architectural overview
- Unclear data flows

### Immediate Action Items
1. Add architectural overview comment (top of `<script>`)
2. Add scenario schema documentation
3. Add section markers to organize JavaScript
4. Document the 5 most complex functions
5. Add inline comments for confusing logic

### Long-Term Improvements
1. Extract JavaScript into separate file(s)
2. Add TypeScript for type safety
3. Centralize state management (consider using a state machine)
4. Add unit tests for core logic
5. Create developer documentation site

---

## ✅ CONCLUSION

**The code is functional and demonstrates solid engineering**, but it's written for "write-once" use. To make it maintainable for future work, **add ~200 lines of strategic comments** explaining:

- What the architecture is
- How the data flows
- What each major component does
- Where to look for specific features

**Estimated effort**: 2-3 hours to add comprehensive comments that will save dozens of hours in future maintenance.

---

**Review Date**: 2025-10-06  
**File**: `cb-box.html` (4,337 lines)  
**Status**: ⚠️ Functional but under-documented
