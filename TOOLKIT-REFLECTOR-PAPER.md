# Role Deck: A Reflective Account

*An ethical design exploration toolkit for practicing workplace negotiation under structural constraint*

---

## 1. Toolkit Description

**Role Deck** is an integrated ethical design exploration toolkit that enables practitioners to navigate workplace dilemmas through simulation, analysis, and reflection. It consists of six interconnected components: 

1. **CB-Box** ("Centaur Box") — a conversational AI negotiation engine where users role-play as practitioners advocating for ethical change against AI-powered structural constraints
2. **Tetrad Pad** — an interactive implementation of McLuhan's Tetrad framework for analyzing technology affordances across four dimensions (Enhance, Obsolesce, Retrieve, Reverse)
3. **Feed Loop Scenarios** — eight deeply researched workplace dilemmas (addiction design, algorithmic bias, visa dependency, dark patterns, union suppression, epistemic rushing, surveillance features, mission drift) grounded in Chivukula et al.'s CHI 2021 research on practitioner identity claims
4. **Pattern Glossary** — a scholarly documentation of recurring design patterns with 38 archival citations audited via "Void Guardian" (citation integrity), "Edge Scout" (2022-2025 research), and "Deep Leverage" (philosophical foundations) protocols
5. **Courage Trail Olog** — a topographic visualization rendering repository structure as navigable terrain, embodying Frances Yates' spatial memory principles
6. **Identity Cards** — character profiles mapping 16 practitioner archetypes onto Bartle's taxonomy (Explorer, Socializer, Achiever, Killer) crossed with four ethical stances

Users interact via single-file HTML interfaces designed for local-first, zero-dependency operation. The toolkit transforms abstract ethical frameworks into embodied, playable experiences.

---

## 2. Issues Addressed

Role Deck addresses three fundamental gaps in ethics education for technology practitioners:

**Visibility Gap**: The structural forces that constrain ethical action (visa dependency, organizational hierarchy, metric pressure) remain invisible in case-study approaches. Users read *about* Maya Chen's silencing; they don't *experience* the negotiation dynamics that produced it.

**Reflection Gap**: Design happens too fast for ethical review. Practitioners rarely pause to analyze affordances systematically. The PLAN → THINK → SPEAK sequencing in CB-Box architecturally enforces deliberation before action.

**Skill Gap**: Practitioners recognize ethical problems but lack negotiation skills to advocate for change. Reading about principled negotiation (Fisher & Ury) differs fundamentally from practicing it against an AI that embodies organizational incentives.

---

## 3. Audiences

**Primary users**: Graduate students and researcher-practitioners in HCI, design research, and technology ethics who need to understand structural constraint dynamics. CB-Box requires only a browser and (optionally) an OpenAI API key.

**Secondary beneficiaries**: Design educators seeking teaching materials that move beyond trolley-problem abstractions to workplace-specific scenarios. The eight Feed Loop episodes provide ready-made case studies with interactive components.

**Tertiary stakeholders**: The practitioners depicted in scenarios (junior designers, visa-dependent engineers, mission-driven founders) whose structural positions the toolkit aims to illuminate—not as heroes or villains, but as system participants.

The toolkit assumes intermediate design literacy but not programming expertise.

---

## 4. Context of Use

This toolkit is designed for use during **design-time ethics education**—after foundational ethics courses but during professional formation. It assumes users have exposure to basic ethical frameworks (deontology, consequentialism, virtue ethics) and produces experiential understanding of why those frameworks often fail under asymmetric power.

The primary context is **educational**: classroom discussion, workshop exercises, individual reflection. Secondary contexts include **advocacy** (building shared vocabulary for ethics discussions within organizations) and **social bonding** (connecting like-minded practitioners who share frustration with structural constraints).

Role Deck produces actionable outputs: negotiation transcripts, Tetrad analyses, pattern documentation, and (most importantly) the experience of systematic failure that motivates systemic critique.

---

## 5. Levers and Leverage Points

Following **Shilton's (2013) values levers framework**, Role Deck operates through three primary mechanisms:

- **Anticipation Lever**: The Tetrad's "Reverse" quadrant forces users to consider what happens when technologies are pushed to extremes. Users cannot complete analysis without articulating reversal risks.
- **Participation Lever**: CB-Box includes stakeholder voices (VP Growth, Board Member, Engineering Manager) as AI characters, surfacing perspectives typically absent from designer-centric ethics.
- **Reflection Lever**: The PLAN → THINK → SPEAK phase sequencing—borrowed from research on Magentic-UI's "glass box" observability—creates architecturally enforced pause points.

Applying **Meadows' leverage point hierarchy** (via Erlichman 2021), the toolkit intervenes at multiple levels:

| Level | Intervention | Mechanism |
|-------|--------------|-----------|
| 9 (Information Flows) | Trail Olog visualization | Makes evolution of project visible |
| 6 (Rules of System) | Phase sequencing | Changes what counts as "turn complete" |
| 4 (Self-Organization) | Pattern Glossary | Enables practitioners to document their own patterns |
| 2 (System Goals) | Structural framing | Shifts from "find the bad guy" to "understand the system" |

Using **Lessig's regulatory modes**, Role Deck operates primarily through **architecture** (UI that requires phase completion before proceeding) and **norms** (making systematic ethics analysis "normal" practice). Market and law modes are deliberately not engaged—the toolkit does not promise ROI or compliance.

---

## 6. Design Process

Role Deck emerged through autoethnographic design research across 16 weeks. The process followed a spiral pattern:

**Discovery**: Literature review of values-in-design (Friedman), identity claims (Chivukula), dark patterns (Gray), and negotiation theory (Fisher & Ury, Voss). Analysis of analogous systems: interactive fiction, debate simulators, personality assessments.

**Ideation**: The central insight emerged from failing to build a "good choices" simulator. Users kept trying to "win" against structural constraints, revealing that *systematic failure* was the pedagogical content, not heroic success. This reframed the toolkit from "ethics training" to "structural analysis."

**Building**: Single-file HTML architecture chosen for portability and resilience. Each component (.html file) operates independently but shares data structures (character profiles, scenarios). The Pattern Glossary emerged late, as a means of grounding claims that had accumulated across 90+ files.

**Testing**: Primarily self-use ("eating one's own cooking") with advisor feedback at milestones. User studies remain a gap.

---

## 7. Learnings and Reflections

Building this toolkit revealed that **constraints are infrastructure, not obstacles**. The "void" (what the user hasn't loaded, what the AI cannot access, what remains uncited) shapes system behavior as powerfully as content does. The Void Guardian audit protocol emerged from this insight.

I initially assumed negotiation simulations should help users *win*. I discovered the pedagogical value lies in *legitimate failure*—experiencing structurally constrained outcomes teaches more than manufactured success.

The hardest part was maintaining coherence across 90+ HTML files and 38 citations while building a system about trail-awareness. The Pattern Glossary became self-referential: a document about patterns that *was itself* a pattern-governed artifact.

If I started over, I would establish the data schema (scenarios, characters, patterns) earlier and build outward from it. Much late-stage work involved retrofitting earlier components to match evolved structures.

---

## 8. Future Directions

**Validation**: User studies with design students and practicing designers to evaluate learning outcomes. Does CB-Box negotiation experience transfer to workplace advocacy?

**Integration**: Connect Trail Olog to actual Git history for automated trail tracking. Currently the visualization requires manual data updates.

**Community**: Open-source release with workshop materials for design educators. Develop facilitator guides for classroom use.

**Generalization**: Abstract Feed Loop scenarios for domains beyond agricultural technology (healthcare, education, finance). The ALLY/KEEPER negotiation frame applies wherever structural constraints bind ethical action.

The ultimate vision is a research practice where systematic ethics analysis becomes as routine as usability testing—not an afterthought, but infrastructure.

---

## References

Chivukula, S.S., Gray, C.M., & Bennett, J. (2021). Identity Claims That Underlie Ethical Awareness and Action. *CHI 2021*.

Erlichman, D. (2021). *Impact Networks*. Berrett-Koehler. [Citing Meadows]

Fisher, R. & Ury, W. (1981). *Getting to Yes*. Penguin.

Friedman, B., Kahn, P.H., & Borning, A. (2006). Value Sensitive Design. In *Information Technology and Moral Philosophy*.

Gray, C.M. et al. (2024). Ontology of Dark Patterns. *CHI 2024*.

Lessig, L. (2006). *Code: And Other Laws of Cyberspace, Version 2.0*. Basic Books.

Meadows, D. (1999). Leverage Points: Places to Intervene in a System. *Sustainability Institute*.

Shilton, K. (2013). Values Levers: Building Ethics Into Design. *Science, Technology, & Human Values*, 38(3), 374–397.

Voss, C. (2016). *Never Split the Difference*. Harper.

---

*Word count: ~1,100*

*"The front door is locked. Break the basement window." — Undaunted Courage*
