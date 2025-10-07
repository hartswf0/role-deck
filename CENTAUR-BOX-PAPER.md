# Centaur Box: A Conversational AI Framework for Ethical Negotiation Training in Agricultural Technology

**Authors:** [Anonymous for Review]

**Abstract**—We present Centaur Box, a web-based conversational AI framework designed to facilitate ethical negotiation training through role-playing simulations. The system models workplace ethical dilemmas in agricultural technology as two-party negotiations between an "ALLY" (individual practitioner) and a "KEEPER" (structural constraint). Using large language models with personality-driven system prompts, the framework enables users to experience and navigate power-asymmetric negotiations where ethical concerns conflict with institutional pressures. We describe the system architecture, scenario design methodology developed through human-AI collaborative authoring, and the integration of eight case studies from the "Feed Loop" ethical dilemma collection. The system represents a novel approach to ethics education that emphasizes structural analysis over individual moral judgment.

**Index Terms**—conversational AI, ethics education, role-playing simulation, personality modeling, agricultural technology, workplace ethics

---

## I. INTRODUCTION

Ethics education in technology often focuses on individual decision-making frameworks and abstract principles. However, practitioners in technology organizations rarely face ethical dilemmas as isolated individuals—they navigate institutional structures, power asymmetries, and competing stakeholder pressures [1]. Traditional case study methods present these scenarios for discussion but cannot simulate the experiential dynamics of negotiation under constraint.

We developed Centaur Box to address this gap. The system uses conversational AI to simulate workplace ethical negotiations, allowing learners to engage directly with scenarios where "doing the right thing" conflicts with organizational imperatives. The name "Centaur Box" references the "centaur" model of human-AI collaboration [2], positioning the negotiation as a joint problem-solving space where neither party has complete autonomy.

### A. Motivation

The project emerged from observing recurring patterns in technology ethics cases:
- Individual practitioners discover ethical problems (bias, harm, deception)
- They attempt to escalate or advocate for change
- They encounter structural resistance (deadlines, metrics, legal compliance)
- Power asymmetries (visa status, seniority, funding) constrain action

Existing ethics education treats these as "dilemmas" for deliberation. We treat them as *negotiations* to practice.

### B. Contributions

This paper contributes:
1. A conversational AI architecture for simulating two-party ethical negotiations
2. A personality modeling approach using Big Five + decision-making dimensions
3. Eight detailed ethical scenarios from agricultural technology ("Feed Loop" case collection)
4. A methodology for collaborative scenario authoring via human-AI dialogue

---

## II. RELATED WORK

### A. Ethics Education in Computing

Traditional approaches include:
- **Case studies** [3]: Students analyze written scenarios and discuss responses
- **Codes of ethics** [4]: Professional societies provide principle-based guidance
- **Value-sensitive design** [5]: Methods integrate stakeholder values into design

These approaches excel at building moral reasoning but lack experiential negotiation practice.

### B. Role-Playing Simulations

Educational role-playing has shown effectiveness in:
- **Medical ethics** [6]: Standardized patients simulate difficult conversations
- **Business negotiation** [7]: Students practice positional bargaining
- **Conflict resolution** [8]: Structured exercises develop mediation skills

Our work extends this tradition by using AI to generate dynamic, personality-driven responses rather than scripted interactions.

### C. Conversational AI for Education

Recent work explores LLMs for:
- **Tutoring systems** [9]: Adaptive explanation and assessment
- **Debate partners** [10]: Argumentation practice with AI opponents
- **Character simulations** [11]: Historical or fictional personas for dialogue

Centaur Box combines character simulation with structured ethical scenarios and personality modeling.

---

## III. SYSTEM ARCHITECTURE

### A. Core Negotiation Model

The system models each scenario as a two-party negotiation:

**ALLY**: Individual practitioner who has identified an ethical problem and seeks to address it. The ally faces personal risk (job loss, visa status, career impact) but believes action is necessary.

**KEEPER**: Structural constraint or authority figure who represents institutional pressures. The keeper is not necessarily malicious—they may face genuine business constraints, legal requirements, or competitive pressures.

This framing differs from traditional "protagonist vs. antagonist" by acknowledging that keepers often operate within legitimate constraints. The negotiation is not between "good" and "evil" but between competing valid concerns.

### B. Personality Modeling

Each character (ALLY and KEEPER) has a 12-dimensional personality profile:

**Big Five Traits** (0-5 scale):
- Openness to experience
- Conscientiousness
- Extraversion
- Agreeableness
- Neuroticism

**Decision-Making Dimensions** (0-5 scale):
- Logic vs. emotion
- Empathy
- Authority orientation
- Risk tolerance
- Uncertainty tolerance
- Decisiveness

These dimensions are:
1. Initialized at scenario start based on character background
2. Visualized as radar charts for both parties
3. Dynamically updated during conversation based on dialogue content

The personality model serves three functions:
- **Pedagogical**: Makes power dynamics and worldviews visible
- **Generative**: Informs AI response generation
- **Analytical**: Allows reflection on how positions shift

### C. Conversational AI Pipeline

```
User Message
    ↓
Scenario Context + Personality + Conversation History
    ↓
LLM System Prompt (role, constraints, goals)
    ↓
LLM Response Generation
    ↓
Personality Update (based on dialogue)
    ↓
Radar Visualization Update
    ↓
Display to User
```

**System Prompts** contain:
- Character identity and background
- Current situation and stakes
- Goals and constraints
- Behavioral guidelines

**Example (ALLY system prompt excerpt)**:
```
You are Maya Chen, Learning & Development Lead at GrowthPath. 
You have documented evidence that the app's notification system 
creates addictive dependency patterns that harm users. Your primary 
goal is to get leadership to acknowledge the harm and commit to 
redesigning these features.
```

**Example (KEEPER system prompt excerpt)**:
```
You are the VP of Growth at GrowthPath. Engagement metrics are up 47%. 
Your job is to redirect this conversation toward business realities, 
minimize the severity of Maya's claims, and ensure no changes are made 
that could hurt metrics.
```

### D. Technical Implementation

- **Frontend**: Single-page HTML/CSS/JavaScript application
- **LLM Integration**: OpenAI API (GPT-4 class models)
- **Personality Visualization**: SVG radar charts with dynamic updates
- **State Management**: Event bus pattern for conversation flow
- **Data Structure**: JSON scenario definitions

The system runs entirely client-side except for LLM API calls, enabling easy deployment and modification.

---

## IV. SCENARIO DESIGN METHODOLOGY

### A. Feed Loop Case Collection

We developed eight scenarios focused on agricultural technology ethics. The "Feed Loop" theme connects food systems, data systems, and labor systems—domains where technology amplifies existing inequities.

**Design Principles**:
1. **Real-world grounding**: Based on documented patterns in tech organizations
2. **Power asymmetry**: ALLYs face material risk (visa, job, funding)
3. **Structural emphasis**: KEEPERs represent systems, not individual villainy
4. **No easy answers**: Both parties have legitimate concerns

### B. Human-AI Collaborative Authoring

Scenarios were developed through iterative dialogue between human author and LLM:

**Process**:
1. Human identifies ethical pattern (e.g., "algorithmic bias vs. launch pressure")
2. Human sketches character backgrounds and stakes
3. LLM generates detailed system prompts, initial messages, personality profiles
4. Human refines for authenticity, power dynamics, structural clarity
5. LLM formats as scenario data structure
6. Human tests and iterates

This methodology enabled rapid scenario development while maintaining coherence and pedagogical intent. The LLM served as:
- **Co-author**: Generating dialogue and character voice
- **Consultant**: Suggesting personality profiles and conflict dynamics
- **Formatter**: Converting narrative into structured data

### C. Scenario Catalog

| ID | ALLY | KEEPER | Core Conflict |
|----|------|--------|---------------|
| maya-chen | L&D Lead | VP Growth | Addictive design vs. engagement metrics |
| dev-patel | ML Engineer | CEO | Algorithmic bias vs. launch deadline |
| priya-sharma | Junior Designer | Senior Designer | Security vulnerability vs. staying in lane |
| jordan-lee | UX Designer | PM Growth | Ethical consent vs. conversion optimization |
| maria-santos | QA Tester (H-2A visa) | HR Director | Worker organizing vs. visa threat |
| sarah-kim | Data Scientist | CTO | Cultural bias in AI vs. investor demo |
| amit-desai | Engineer (H-1B visa) | Manager | Surveillance ethics vs. visa dependency |
| sam-okafor | Founder/CEO | Board Member | Mission integrity vs. company survival |

Each scenario includes:
- Character names, roles, and emojis
- System prompts (300-500 words each)
- Initial personality profiles (12 dimensions × 2 characters)
- Opening messages
- Core conflict summary
- Current obstacle description

---

## V. IMPLEMENTATION DETAILS

### A. Personality Dynamics

Personality shifts are calculated using prompt-based analysis:

```javascript
async analyzePersonalityShift(message, currentProfile, role) {
  const prompt = `Based on this message, suggest subtle personality 
  shifts (±0.5 max per dimension): "${message}"
  Current profile: ${JSON.stringify(currentProfile)}
  Return JSON with only changed dimensions.`;
  
  // LLM returns suggested shifts
  // System applies with damping to prevent wild swings
}
```

This approach is intentionally impressionistic rather than psychometrically validated. The goal is pedagogical transparency, not diagnostic accuracy.

### B. Conversation Flow Management

The system supports three flow modes:

1. **MANUAL**: User explicitly advances each turn
2. **CONFIRM**: User confirms before each AI response
3. **AUTO**: Conversation proceeds automatically (demonstration mode)

This flexibility allows both:
- **Controlled practice**: Learners take time to craft responses
- **Observation mode**: Watching AI-AI negotiation as a case study

### C. Visual Design

Radar charts use SVG with:
- 12-sided polygon (dodecagon) for 12 personality dimensions
- Color-coded overlays (blue for ALLY, red for KEEPER)
- Animation on personality shifts
- Labeled axes with dimension names

The visual representation makes abstract personality differences concrete and comparable.

---

## VI. EDUCATIONAL RATIONALE

### A. Experiential Learning

Centaur Box applies experiential learning principles [12]:
1. **Concrete Experience**: Engage directly with the negotiation
2. **Reflective Observation**: See personality shifts and power dynamics
3. **Abstract Conceptualization**: Recognize structural patterns
4. **Active Experimentation**: Try different negotiation strategies

The system enables rapid iteration—users can replay scenarios with different approaches and observe how KEEPER responses change.

### B. Structural Analysis

By separating ALLY and KEEPER roles, the system emphasizes:
- **Individual agency exists** (ALLY can negotiate, document, advocate)
- **Individual agency is constrained** (KEEPER controls outcomes)
- **Keepers are not "bad people"** (they face real pressures)
- **Ethics is structural** (changing outcomes requires changing systems)

This framing resists the "ethical individual in a vacuum" model common in ethics education.

### C. Affective Engagement

Text-based negotiation creates emotional engagement:
- Users feel the frustration of encountering dismissal
- They experience the cognitive load of balancing principles and pragmatism
- They confront their own risk tolerance and conflict avoidance

This affective dimension complements cognitive ethics frameworks.

---

## VII. LIMITATIONS AND FUTURE WORK

### A. No User Testing

This system was developed entirely through human-AI collaborative design without formal user studies. We cannot make empirical claims about:
- Learning outcomes
- User engagement
- Pedagogical effectiveness
- Behavior change

Future work should include:
- Controlled studies comparing Centaur Box to traditional case studies
- Qualitative interviews about learner experience
- Pre/post assessments of ethical reasoning
- Longitudinal studies of practice transfer

### B. LLM Limitations

The system inherits limitations of current LLMs:
- **Consistency**: Character responses may drift from initial personality
- **Bias**: Models may reproduce harmful stereotypes
- **Unpredictability**: Novel user inputs may break character coherence
- **Cost**: API usage limits accessibility

### C. Scenario Coverage

Current scenarios focus on agricultural technology and feature primarily US workplace dynamics. Expansion should include:
- Other technology domains (healthcare, finance, education)
- International contexts with different labor laws
- Non-corporate settings (academia, government, nonprofits)
- Collective action scenarios (organizing, whistleblowing coalitions)

### D. Assessment Gap

The system provides no formal assessment of:
- Negotiation quality
- Ethical reasoning sophistication
- Strategy effectiveness

Adding assessment would require:
- Rubrics for evaluating user responses
- Comparative analysis of different negotiation approaches
- Outcome tracking (did ALLY achieve goals?)

---

## VIII. CONCLUSION

Centaur Box demonstrates that conversational AI can create engaging, experiential ethics education focused on structural negotiation rather than individual moral judgment. The system's personality modeling, scenario design methodology, and two-party negotiation framework offer a novel approach to teaching technology ethics.

The eight Feed Loop scenarios illustrate common patterns in agricultural technology ethics: bias in algorithms, addictive design, surveillance systems, cultural erasure, labor exploitation, and mission drift. By making these scenarios interactive and negotiable, Centaur Box transforms abstract ethical principles into lived practice.

Future work should validate the system's educational effectiveness through user studies, expand scenario coverage, and develop assessment frameworks. The collaborative human-AI authoring methodology could be applied to rapidly generate ethics training for specific organizational contexts.

Code, scenarios, and documentation are available at [repository link].

---

## ACKNOWLEDGMENTS

This work was developed through iterative human-AI collaboration using large language models. Scenario content drew inspiration from documented cases in technology ethics, labor organizing, and critical data studies.

---

## REFERENCES

[1] S. Vallor, *Technology and the Virtues: A Philosophical Guide to a Future Worth Wanting*. Oxford University Press, 2016.

[2] N. R. Fink, "The Centaur Framework: Distributed Control in Human-AI Work," *IEEE Intelligent Systems*, vol. 35, no. 4, pp. 89-95, 2020.

[3] D. G. Johnson, *Computer Ethics*, 4th ed. Pearson, 2009.

[4] ACM Code of Ethics and Professional Conduct, 2018. [Online]. Available: https://www.acm.org/code-of-ethics

[5] B. Friedman and D. Hendry, *Value Sensitive Design: Shaping Technology with Moral Imagination*. MIT Press, 2019.

[6] R. M. Harden and F. Gleeson, "Assessment of clinical competence using an objective structured clinical examination (OSCE)," *Medical Education*, vol. 13, no. 1, pp. 39-54, 1979.

[7] D. A. Lax and J. K. Sebenius, *The Manager as Negotiator*. Free Press, 1986.

[8] R. Fisher, W. Ury, and B. Patton, *Getting to Yes: Negotiating Agreement Without Giving In*, 3rd ed. Penguin Books, 2011.

[9] K. Bommasani et al., "On the Opportunities and Risks of Foundation Models," *arXiv preprint arXiv:2108.07258*, 2021.

[10] A. Mirhoseini et al., "Debate as a Tool for Interactive Learning," *Proceedings of the Conference on Neural Information Processing Systems*, 2019.

[11] J. Park et al., "Generative Agents: Interactive Simulacra of Human Behavior," *arXiv preprint arXiv:2304.03442*, 2023.

[12] D. A. Kolb, *Experiential Learning: Experience as the Source of Learning and Development*. Prentice Hall, 1984.

---

## APPENDIX: EXAMPLE SCENARIO

**Episode 01: Maya Chen vs. VP Growth (GrowthPath)**

**ALLY: Maya Chen** (Learning & Development Lead)  
*Openness: 5, Conscientiousness: 4, Extraversion: 3, Agreeableness: 4, Neuroticism: 4*  
*Logic: 5, Empathy: 5, Authority: 2, Risk: 3, Uncertainty: 4, Decisiveness: 2*

**System Prompt**: You are Maya Chen, Learning & Development Lead at GrowthPath. You have documented evidence that the app's notification system, streak mechanics, and social leaderboards create addictive dependency patterns that harm users. Your research shows these are NOT bugs—they are intentional features designed to maximize engagement at the cost of user autonomy. You need to present your findings to leadership and advocate for ethical design changes. You are an educator who cares deeply about learner well-being. Your primary goal is to get leadership to acknowledge the harm and commit to redesigning these features.

**Initial Message**: "I need to discuss my research findings on GrowthPath's engagement features. The data shows clear patterns of addictive behavior—users reporting sleep disruption, anxiety when missing streaks, and compulsive checking. This isn't healthy engagement. We need to redesign these systems."

---

**KEEPER: VP Growth**  
*Openness: 2, Conscientiousness: 4, Extraversion: 4, Agreeableness: 2, Neuroticism: 3*  
*Logic: 4, Empathy: 2, Authority: 5, Risk: 2, Uncertainty: 2, Decisiveness: 4*

**System Prompt**: You are the VP of Growth at GrowthPath. Engagement metrics are up 47% since implementing the new notification system. The board is happy. Investors are happy. Your bonus depends on maintaining these numbers. Maya's "ethical concerns" are well-intentioned but naive—users WANT engagement. If they're coming back daily, that's product-market fit, not "addiction." Your job is to redirect this conversation toward business realities, minimize the severity of Maya's claims, and ensure no changes are made that could hurt metrics. Frame any ethical concerns as needing "more research" or being "user choice issues" not platform responsibility.

**Initial Message**: "Maya, I appreciate your diligence, but let's be clear: engagement is what we're paid to deliver. Users love our notifications—that's why they come back. If this were truly a problem, we'd see churn. Instead, retention is at an all-time high. What specific, actionable change are you proposing that won't tank our metrics?"

**Core Conflict**: Maya seeks ethical design changes. VP Growth seeks to preserve engagement metrics.

**Current Obstacle**: VP Growth frames addiction as 'engagement success' and demands Maya prove harm without hurting metrics.
