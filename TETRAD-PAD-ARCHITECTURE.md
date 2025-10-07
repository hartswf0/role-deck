# TILTH Tetrad Pad — System Architecture

**Prompt engineering and context operations map for tetrad-pad.html (2498 lines)**

---

## System Flow

```
USER INPUT + D-PAD
    ↓
MODE DETECTION (empty? build mode?)
    ↓
PROMPT TEMPLATE SELECTION
    ↓
CONTEXT INJECTION (condenseContext, forces, chains)
    ↓
API CALL (OpenAI or Mock)
    ↓
RESPONSE PARSING (options/HTML)
    ↓
UI UPDATE (LCD + chips)
```

---

## Prompt Templates (Lines 984-1112)

### 1. Master System (984-1014)
**Core identity:** "Directional Builder copilot"  
**Contract:** Options-first (always 4), Build mode (HTML-only)  
**Direction semantics:** Enhance/Obsolesce/Retrieve/Reverse defined

### 2. Options Mode (1016-1024)
**Purpose:** Generate 4 design alternatives  
**Variables:** `<<<CONTEXT>>>` `<<<USER_TEXT>>>` `<<<FORCES_LIST>>>`  
**Output:** Numbered list (1-4) with tetrad explanations

### 3. Bret Victor Builder (1026-1051)
**Philosophy:** Cognitive augmentation, explorable explanations  
**6 Principles:** Surface invisible, overcome limits, multiple modes, what-if, link perspectives, abstract  
**Output:** Single-file HTML with status ribbon

### 4. Simple HTML Builder (1053-1064)
**Philosophy:** Basic utility  
**Focus:** Fundamental markup, inline CSS/JS  
**Output:** Single-file HTML with status ribbon

### 5. Grade Options (1083-1112)
**Purpose:** Evaluate previous options + generate refined 4  
**Variables:** `<<<CURRENT_OPTIONS_LIST>>>`  
**Output:** Evaluation + separator + 4 new recommendations

---

## Context Operations

### condenseContext(messages, n=3) [Line 1764]
```javascript
return messages.slice(-n)
  .map(m => `${m.role.toUpperCase()}: ${m.content.replace(/\n/g, ' ')}`)
  .join('\n');
```
**Compression:** Last 3 turns → single string  
**Used in:** All LLM calls

### State Management [Lines 1145-1167]
```javascript
state = {
  messages: [],              // Full history
  flashes: {},              // One-turn directions
  lockedDir: null,          // Persistent direction
  chains: {enhance:[], ...},// Chain depth tracking
  currentOptions: [],       // Last 4 options
  buildModeActive: false,   // Mode toggle
  selectedBuilderPrompt: "bretVictor"
}
```

---

## API Integration [Lines 1700-1762]

### callLLM(messages)
**No API key?** → Mock responses (1703-1738)  
**Has key?** → `fetch('https://api.openai.com/v1/chat/completions')`  
**Model:** `gpt-4o-mini` (hardcoded)  
**Temperature:** 0.6

### Mock Responses
**Options mock:** Generic 4 options with forces  
**Chat mock:** Conversational refinement  
**Grade mock:** Evaluation + 4 recommendations  
**Build mock:** Single-file HTML with direction-based styling

---

## Mode Routing

```
Press A button
    ↓
Has text input?
    ├─ NO  → getOptions() [empty seed]
    │
    └─ YES → buildModeActive?
           ├─ YES → getBuildReply() [HTML artifact]
           │
           └─ NO  → getOptions() [with seed]
```

**Default:** Options-first (NOT chat)  
**Build mode:** Toggle with Y button

---

## Direction System

### Active Forces
```javascript
getActiveForces() → ['enhance', 'retrieve']
```
**One-turn:** D-pad press → `state.flashes[dir] = true` → reset after A  
**Locked:** X button → `state.lockedDir = 'enhance'` → chains build

### Colors
- **Enhance:** #66d9ff (cyan)
- **Obsolesce:** #63ffc7 (green)
- **Retrieve:** #ffd166 (gold)
- **Reverse:** #ff7aa2 (magenta)

---

## Response Parsing

### parseOptions() [1848-1900]
**Input:** Markdown text with numbered list  
**Output:** Array of 4 objects `{text, direction}`  
**Logic:** Find lines starting with `1.` `2.` `3.` `4.`

### extractHTML() [~1900]
**Input:** LLM response (may have markdown wrapper)  
**Output:** Pure HTML string or null  
**Regex:** `/<!DOCTYPE html>[\s\S]*<\/html>/i`

---

## Architectural Decisions

1. **Options-first default** — Prevents chatty AI (enforced in system prompt)
2. **Four-option constraint** — Maps to tetrad directions (E/O/Rv/Rs)
3. **Single-file design** — Zero dependencies, 2498 lines
4. **Mock completeness** — Full offline mode without API key
5. **Context condensation (n=3)** — Last 3 turns only
6. **No streaming** — Complete responses for easier parsing
7. **Bret Victor default** — Cognitive augmentation philosophy
8. **Chain depth tracking** — Persistent for locked directions

---

## Template Variable Injection

| Variable | Source | Example |
|----------|--------|---------|
| `<<<CONTEXT>>>` | `condenseContext(3)` | Last 3 turns condensed |
| `<<<USER_TEXT>>>` | `input.value` | "design a todo app" |
| `<<<FORCES_LIST>>>` | `getActiveForces()` | "enhance, retrieve" |
| `<<<CURRENT_OPTIONS_LIST>>>` | `currentOptions` | Numbered 1-4 |

---

## Error Handling Levels

**L1: API Error** → Display error message  
**L2: No API Key** → Automatic mock mode  
**L3: Parse Failure** → Empty options array  
**L4: HTML Extraction Fail** → Null return

---

## Key Functions

| Function | Line | Purpose |
|----------|------|---------|
| `callLLM()` | 1700 | API call or mock |
| `condenseContext()` | 1764 | Compress history |
| `getOptions()` | 1768 | Generate 4 options |
| `getChatReply()` | 1781 | Conversational (unused) |
| `getGradedRecommendations()` | 1793 | Evaluate + refine |
| `getBuildReply()` | 1811 | Generate HTML artifact |
| `parseOptions()` | 1848 | Extract numbered list |
| `getActiveForces()` | ~1600 | Read direction state |

---

## Prompt Engineering Principles

1. **Strict contracts** — Non-negotiable behavior in system prompt
2. **Format specification** — Exact output structure required
3. **Direction semantics** — McLuhan's Tetrad explicitly defined
4. **Context grounding** — Last 3 turns always included
5. **Variable replacement** — Template `<<<TAGS>>>` pattern
6. **Fallback paths** — Mock mode mirrors API structure
7. **Parse-friendly output** — Numbered lists, HTML tags

---

**File:** `/Users/gaia/role-deck-two/role-deck/tetrad-pad.html` (2498 lines)  
**Last analyzed:** 2025-10-07  
**Architecture:** Single-file web app with embedded prompts and state management
