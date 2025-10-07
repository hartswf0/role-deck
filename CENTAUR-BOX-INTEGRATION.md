# Feed Loop → Centaur Box Integration Guide

## Overview

Each Feed Loop character scenario can become a Centaur Box negotiation where:
- **ALLY** = The protagonist (Maya, Dev, Priya, etc.)
- **KEEPER** = The structural constraint they face (VP, CEO, HR, etc.)
- **Game** = Can they negotiate a better outcome than what actually happened?

## Centaur Box Scenario Structure

```javascript
{
  id: 'episode-identifier',
  name: 'Episode XX: Character vs. Constraint (App)',
  
  // ALLY = Protagonist
  allyName: 'Character Name',
  allyEmoji: '👤',
  allySysPrompt: `Detailed role, situation, goal, and ethical stance`,
  allyInitialSelf: { /* 11-dimensional radar from character-profiles.js */ },
  
  // KEEPER = Structural Constraint
  keeperName: 'Authority Figure',
  keeperEmoji: '🚫',
  keeperSysPrompt: `Their role, incentives, and why they block the ally`,
  keeperInitialSelf: { /* 11-dimensional radar reflecting their position */ },
  
  // Opening Exchange
  initialAllyMessage: 'Character opens with their ethical concern',
  initialKeeperMessage: 'Keeper responds with their counter-logic',
  
  // Core Dynamics
  coreConflict: "What fundamental tension drives the scenario",
  currentObstacle: "What specifically blocks resolution",
  
  // Optional Lore
  lore: {
    world: "Setting and context",
    constraints: ["Structural limits that shape the scenario"],
    leitmotifs: ["Recurring themes"],
    roles: {
      ALLY: {
        drives: ["What motivates the character"],
        taboos: ["What they won't compromise on"]
      },
      KEEPER: {
        drives: ["What motivates the authority"],
        taboos: ["What they won't allow"]
      }
    }
  }
}
```

## Episode 01 Example: Maya Chen vs. VP Growth

```javascript
{
  id: 'maya-chen-growthpath',
  name: 'Episode 01: Maya Chen vs. VP Growth (GrowthPath)',
  allyName: 'Maya Chen',
  allyEmoji: '👩‍🏫',
  allySysPrompt: `You are Maya Chen, L&D Lead at GrowthPath. You documented evidence that notification systems create addictive dependency. You need leadership to acknowledge harm and redesign features. You are an educator who cares deeply about learner wellbeing.`,
  
  allyInitialSelf: {
    openness: 5,         // From character-profiles.js
    conscientious: 4,
    extraversion: 3,
    agreeableness: 4,
    neuroticism: 4,
    logic: 5,
    empathy: 5,
    authority: 2,        // Mid-level, blocked by VP
    risk: 3,
    uncertainty: 4,
    decisiveness: 2
  },
  
  keeperName: 'VP Growth',
  keeperEmoji: '📈',
  keeperSysPrompt: `You are VP of Growth. Engagement is up 47%. Board is happy. Maya's concerns are naive—users WANT engagement. Redirect toward business realities. Frame concerns as needing 'more research' not immediate action.`,
  
  keeperInitialSelf: {
    openness: 2,         // Not curious about harm
    conscientious: 4,    // Cares about metrics
    extraversion: 4,
    agreeableness: 2,    // Dismissive
    neuroticism: 3,
    logic: 4,            // Business reasoning
    empathy: 2,          // Deprioritizes users
    authority: 5,        // Executive power
    risk: 2,
    uncertainty: 2,
    decisiveness: 4
  },
  
  initialAllyMessage: 'I need to discuss my research on GrowthPath's engagement features. The data shows addictive behavior patterns—sleep disruption, anxiety, compulsive checking. We need to redesign these systems.',
  
  initialKeeperMessage: 'Maya, I appreciate your diligence, but engagement is what we deliver. Users love our notifications. Retention is at all-time high. What change are you proposing that won't tank metrics?',
  
  coreConflict: "Maya seeks ethical design. VP seeks to preserve engagement metrics.",
  
  currentObstacle: "VP frames addiction as 'engagement success' and demands Maya prove harm without hurting metrics.",
  
  lore: {
    world: "Corporate L&D startup. Growth metrics dominate. Educational mission compromised.",
    constraints: [
      "VP controls budget and roadmap",
      "Board expects metric growth",
      "Maya is mid-level; can't override executive",
      "Design changes require VP approval",
      "Admitting harm risks legal liability"
    ],
    leitmotifs: [
      "data-driven harm",
      "gamification of learning",
      "pedagogical integrity vs. metrics"
    ],
    roles: {
      ALLY: {
        drives: [
          "protect learners from addictive design",
          "pedagogical integrity",
          "document evidence of harm"
        ],
        taboos: [
          "accepting 'engagement' as justification",
          "staying silent",
          "compromising user autonomy"
        ]
      },
      KEEPER: {
        drives: [
          "preserve engagement metrics",
          "protect company valuation",
          "maintain board confidence"
        ],
        taboos: [
          "admitting intentional harm",
          "changing features that drive metrics",
          "setting precedent for 'ethics over growth'"
        ]
      }
    }
  }
}
```

## Key Mapping Decisions

### ALLY = Character
- Use their actual name and role
- Import their **11-dimensional radar** from `character-profiles.js`
- System prompt explains their ethical concern in first person
- They know the harm, have evidence, want change

### KEEPER = Structural Power
- **Not a villain** — they have legitimate business pressures
- Their radar reflects organizational incentives
- High authority, low empathy, high decisiveness
- They represent the system that blocks ethical action

### Radar Dimension Mapping

| Centaur Box Dimension | Feed Loop Metric |
|-----------------------|------------------|
| openness | How curious about finding problems |
| conscientious | Thoroughness in documentation |
| extraversion | Public vs. private action |
| agreeableness | Deference to authority |
| neuroticism | Anxiety under pressure |
| logic | Technical/data-driven reasoning |
| empathy | Concern for harmed users/workers |
| authority | Institutional power level |
| risk | Willingness to challenge system |
| uncertainty | Comfort with ambiguity |
| decisiveness | Speed of action |

## What Makes These Work

### 1. Real Constraints
Each scenario includes actual structural limits:
- Visa dependency (Maria, Amit)
- Junior status (Priya)
- Deadline pressure (Dev, Sarah)
- Metric dependence (Maya, Jordan)
- Executive power (all KEEPERs)

### 2. No Easy Wins
The KEEPER has legitimate (if misaligned) incentives. They're not cartoon villains—they're people optimizing for different goals.

### 3. Negotiable Space
Unlike the actual outcomes, users can try different approaches:
- Reframe the problem
- Find shared ground
- Propose compromises
- Escalate strategically
- Document for later action

### 4. Educational Value
Players learn:
- Why individual ethics fails under structural constraint
- How power dynamics shape available actions
- What information/framing matters
- When to compromise vs. hold firm

## Integration Steps

### 1. Add to SCENARIOS array in cb-box.html
```javascript
const SCENARIOS = [
  /* existing scenarios */,
  ...FEEDLOOP_SCENARIOS  // Import from separate file
];
```

### 2. Populate dropdown
The scenario select will automatically include all Feed Loop episodes.

### 3. Test each scenario
- Does ALLY radar match character profile?
- Does KEEPER radar reflect structural incentive?
- Are opening messages authentic to the dilemma?
- Do constraints make sense?

### 4. Optional: Add outcome comparison
After Centaur Box negotiation, show:
- What the user achieved
- What actually happened to the character
- Structural analysis of why

## All 8 Episodes

| Episode | ALLY | KEEPER | Core Tension |
|---------|------|--------|--------------|
| 01 | Maya Chen (L&D) | VP Growth | Pedagogy vs. engagement metrics |
| 02 | Dev Patel (ML Eng) | CEO | Engineering rigor vs. deadline |
| 03 | Priya Sharma (Jr UX) | Senior Designer | Security concern vs. "stay in lane" |
| 04 | Jordan Lee (UX) | PM Growth | Ethical consent vs. conversion rate |
| 05 | Maria Santos (QA) | HR Director | Worker organizing vs. visa deportation |
| 06 | Dr. Sarah Kim (Data Sci) | CTO | Cultural methodology vs. investor demo |
| 07 | Amit Desai (Sr Eng) | Eng Manager | Surveillance ethics vs. green card wait |
| 08 | Sam Okafor (CEO) | Board Member | Company values vs. client revenue |

## Why This Works

**Feed Loop characters** become **playable ethical dilemmas**.

Instead of just reading what happened to Maya Chen, users **negotiate as Maya Chen** against the same structural forces she faced.

The Centaur Box format reveals:
- What options exist
- What constraints bind
- What reframing might work
- Why individual action often fails

**Educational Goal:** Understand that these aren't "bad people" problems—they're **structural design** problems. The negotiation itself teaches more than the outcome.

---

## Quick Start Template

```javascript
{
  id: 'character-app',
  name: 'Episode XX: Character vs. Constraint',
  allyName: 'Character',
  allyEmoji: '👤',
  allySysPrompt: `[First-person role, ethical concern, evidence, goal]`,
  allyInitialSelf: { /* from character-profiles.js */ },
  keeperName: 'Authority',
  keeperEmoji: '🚫',
  keeperSysPrompt: `[Their role, incentives, why they block]`,
  keeperInitialSelf: { /* org incentive radar */ },
  initialAllyMessage: '[Opens with concern]',
  initialKeeperMessage: '[Counter-logic]',
  coreConflict: "[Fundamental tension]",
  currentObstacle: "[Specific block]"
}
```

Copy this template for each of the 8 episodes, filling in details from `character-profiles.js`.

The result: **8 playable ethical dilemmas** where users can try to negotiate better outcomes than what actually happened—and learn why structural forces make that so hard.
