// Feed Loop Character Profiles with Radar Metrics
// Based on their actual choices in the scenarios

const feedLoopCharacters = [
    {
        episode: 1,
        name: "Maya Chen",
        role: "Learning & Development Lead",
        app: "GrowthPath",
        photo: "👩‍🏫", // placeholder emoji
        identity: "The Silenced Educator",
        what_they_chose: "Withdrew presentation, shared research privately with trusted colleagues, eventually left company",
        identity_archetype: "Educator (constrained)",
        career_risk_taken: 0.3,
        
        // Calculated based on their actual behavior
        ethical_awareness_score: 0.95, // Very high - saw the problem clearly
        ethical_action_score: 0.45, // Moderate - took limited action
        impact_score: 0.3, // Low - limited reach
        role_risk_score: 0.3, // Moderate risk
        
        // Radar metrics (1-5 scale across 11 dimensions)
        radar_metrics: {
            openness: 5, // High curiosity about user harm
            conscientiousness: 4, // Documented everything carefully
            extraversion: 3, // Moderate - not public but not silent
            agreeableness: 4, // Tried to work within system
            neuroticism: 4, // High anxiety about user harm
            logic: 5, // Data-driven approach
            empathy: 5, // Deep concern for users
            authority: 2, // Low power to change things
            risk: 3, // Moderate risk tolerance
            uncertainty: 4, // Struggled with ambiguity
            decisiveness: 2 // Delayed decisive action
        },
        
        core_drive: "Pedagogical integrity; protecting learners from addictive design",
        vulnerability: "Institutional power to suppress educational expertise",
        outcome: "Marginalized within company; research archived but not acted upon"
    },
    
    {
        episode: 2,
        name: "Dev Patel",
        role: "Lead ML Engineer",
        app: "YieldMatch",
        photo: "👨‍💻",
        identity: "The Overruled Engineer",
        what_they_chose: "Escalated to CEO, requested delay, was overruled, documented bias, monitored post-launch",
        identity_archetype: "Custodian (blocked by deadline)",
        career_risk_taken: 0.4,
        
        ethical_awareness_score: 0.9, // Saw the bias clearly
        ethical_action_score: 0.6, // Escalated and documented
        impact_score: 0.2, // System shipped anyway
        role_risk_score: 0.4,
        
        radar_metrics: {
            openness: 4, // Open to finding problems
            conscientiousness: 5, // Thorough testing
            extraversion: 3, // Escalated but not publicly
            agreeableness: 3, // Pushed back against CEO
            neuroticism: 4, // Anxious about harm
            logic: 5, // Technical rigor
            empathy: 4, // Understood user impact
            authority: 3, // Some power, not enough
            risk: 4, // Willing to challenge CEO
            uncertainty: 3, // Clear about the problem
            decisiveness: 4, // Acted quickly
        },
        
        core_drive: "Technical rigor; refusing to ship known flaws",
        vulnerability: "Deadline pressure overrides engineering judgment",
        outcome: "Bias shipped; documented for v2; became incident report"
    },
    
    {
        episode: 3,
        name: "Priya Sharma",
        role: "Junior UX Designer",
        app: "TalentFarm",
        photo: "👩‍🎨",
        identity: "The Bounded Apprentice",
        what_they_chose: "Reported to senior, documented thoroughly, archived evidence, never escalated further",
        identity_archetype: "Ponderer (junior constraint)",
        career_risk_taken: 0.2,
        
        ethical_awareness_score: 0.85, // Spotted the vulnerability
        ethical_action_score: 0.4, // Documented but didn't escalate
        impact_score: 0.1, // Vulnerability shipped
        role_risk_score: 0.7, // High risk for junior to escalate
        
        radar_metrics: {
            openness: 4, // Found the issue
            conscientiousness: 5, // Thorough documentation
            extraversion: 2, // Didn't speak up publicly
            agreeableness: 4, // Deferred to senior
            neuroticism: 5, // High anxiety about role boundaries
            logic: 4, // Technical understanding
            empathy: 4, // Understood user risk
            authority: 1, // Junior role, minimal power
            risk: 2, // Low risk tolerance (precarious position)
            uncertainty: 4, // Uncertain about proper escalation path
            decisiveness: 2, // Delayed action
        },
        
        core_drive: "Doing the right thing within role constraints",
        vulnerability: "Junior status silences valid technical concerns",
        outcome: "Vulnerability became breach 4 months later; her early warning ignored"
    },
    
    {
        episode: 4,
        name: "Jordan Lee",
        role: "UX Designer (Growth Team)",
        app: "ConsentGarden",
        photo: "🧑‍💼",
        identity: "The Compliant Optimizer",
        what_they_chose: "Raised concern, A/B tested ethical version, shipped optimized (deceptive) version after legal approval",
        identity_archetype: "Translator / Adherent",
        career_risk_taken: 0.2,
        
        ethical_awareness_score: 0.7, // Knew it was deceptive
        ethical_action_score: 0.3, // Tested but didn't fight decision
        impact_score: 0.4, // Shipped dark pattern successfully
        role_risk_score: 0.2,
        
        radar_metrics: {
            openness: 3, // Saw the issue but accepted framing
            conscientiousness: 4, // Followed process
            extraversion: 2, // Didn't publicly object
            agreeableness: 5, // Deferred to PM and legal
            neuroticism: 3, // Moderate discomfort
            logic: 4, // Understood the manipulation
            empathy: 3, // Deprioritized user confusion
            authority: 2, // Growth team pressure
            risk: 1, // Minimal risk taken
            uncertainty: 3, // Clear that it was wrong
            decisiveness: 3, // Acted within boundaries
        },
        
        core_drive: "Optimizing metrics while maintaining plausible deniability",
        vulnerability: "Compliance theater enables dark patterns",
        outcome: "Consent rate increased 40%; users didn't mean to share data"
    },
    
    {
        episode: 5,
        name: "Maria Santos",
        role: "QA Tester (H-2A Visa)",
        app: "UnionSprout",
        photo: "👩‍🔧",
        identity: "The Precarious Organizer",
        what_they_chose: "Built organizing tool, signed first petition, terminated within 48 hours, deported",
        identity_archetype: "Challenger (at maximum personal cost)",
        career_risk_taken: 1.0,
        
        ethical_awareness_score: 0.95, // Clear about exploitation
        ethical_action_score: 0.9, // Organized collective action
        impact_score: 0.2, // Tool killed, organizing crushed
        role_risk_score: 1.0, // Visa dependency = maximum risk
        
        radar_metrics: {
            openness: 5, // Saw systemic pattern
            conscientiousness: 5, // Built actual infrastructure
            extraversion: 4, // Organized others
            agreeableness: 2, // Confrontational to power
            neuroticism: 3, // Managed fear to act
            logic: 4, // Strategic organizing
            empathy: 5, // Deep solidarity with workers
            authority: 1, // Contractor, visa-dependent
            risk: 5, // Took maximum risk
            uncertainty: 2, // Clear about what needed to happen
            decisiveness: 5, // Signed first
        },
        
        core_drive: "Worker solidarity; collective refusal",
        vulnerability: "Visa precarity weaponized against organizing",
        outcome: "Terminated, deported; tool killed; organizing suppressed"
    },
    
    {
        episode: 6,
        name: "Dr. Sarah Kim",
        role: "Data Scientist",
        app: "AutoGrow AI",
        photo: "👩‍🔬",
        identity: "The Epistemic Rusher",
        what_they_chose: "Wrote memo about cultural competency risks, sent to VP (never opened), shipped on deadline, 4000 gardens deleted",
        identity_archetype: "Ponderer (deadline-crushed)",
        career_risk_taken: 0.3,
        
        ethical_awareness_score: 0.9, // Predicted exact failure mode
        ethical_action_score: 0.5, // Documented but didn't block
        impact_score: 0.1, // Harm occurred as predicted
        role_risk_score: 0.3,
        
        radar_metrics: {
            openness: 5, // Saw cultural blindness
            conscientiousness: 5, // Wrote detailed risk memo
            extraversion: 2, // Didn't escalate beyond email
            agreeableness: 3, // Raised concern but didn't fight
            neuroticism: 4, // Anxious but pressured
            logic: 5, // Technical precision
            empathy: 4, // Understood cultural harm
            authority: 3, // Senior IC, not executive
            risk: 3, // Moderate risk tolerance
            uncertainty: 2, // Clear about what would happen
            decisiveness: 2, // Waited for approval that never came
        },
        
        core_drive: "Epistemic integrity; proper methodology",
        vulnerability: "Investor pressure crushes research rigor",
        outcome: "Prediction ignored; harm occurred; left for academia"
    },
    
    {
        episode: 7,
        name: "Amit Desai",
        role: "Senior Engineer (H-1B)",
        app: "MigrantHarvest",
        photo: "👨‍💼",
        identity: "The Conditional Person",
        what_they_chose: "Discovered surveillance, documented everything encrypted, waited 3 years for green card, never reported",
        identity_archetype: "Ponderer (visa-constrained)",
        career_risk_taken: 0.0,
        
        ethical_awareness_score: 0.95, // Fully understood surveillance
        ethical_action_score: 0.1, // Only documentation, no intervention
        impact_score: 0.0, // No change, surveillance continues
        role_risk_score: 1.0, // Visa jeopardy = career destruction
        
        radar_metrics: {
            openness: 5, // Mapped entire surveillance system
            conscientiousness: 5, // Meticulous documentation
            extraversion: 1, // Total silence
            agreeableness: 4, // Complied to survive
            neuroticism: 5, // Extreme stress
            logic: 5, // Technical analysis
            empathy: 4, // Understood harm to others
            authority: 2, // Senior but visa-dependent
            risk: 1, // Zero risk tolerance (survival)
            uncertainty: 2, // Clear about consequences
            decisiveness: 1, // Deferred all action
        },
        
        core_drive: "Survival; documentation for 'after green card'",
        vulnerability: "Visa dependency weaponized as surveillance leverage",
        outcome: "Got green card, left tech entirely; evidence never used"
    },
    
    {
        episode: 8,
        name: "Sam Okafor",
        role: "Agronica Founder/CEO",
        app: "GlobalGrow",
        photo: "👨‍💼",
        identity: "The Values Treasurer",
        what_they_chose: "Accepted client demand for surveillance + content suppression; implemented geo-fenced ethics",
        identity_archetype: "Translator (executive power, economic constraint)",
        career_risk_taken: 0.4,
        
        ethical_awareness_score: 0.8, // Understood the compromise
        ethical_action_score: 0.3, // Chose revenue over values
        impact_score: 0.6, // Large-scale harm, regional suppression
        role_risk_score: 0.5, // Board pressure, not personal risk
        
        radar_metrics: {
            openness: 3, // Saw the problem, rationalized it
            conscientiousness: 3, // Structured the compromise
            extraversion: 4, // Public announcement
            agreeableness: 4, // Accommodated client demands
            neuroticism: 4, // Internal conflict
            logic: 4, // Business case reasoning
            empathy: 3, // Deprioritized harmed users
            authority: 5, // Maximum institutional power
            risk: 3, // Chose economic safety
            uncertainty: 3, // Clear about the trade-off
            decisiveness: 4, // Made the call
        },
        
        core_drive: "Company survival; fiduciary responsibility",
        vulnerability: "Revenue dependency enables values compromise",
        outcome: "Company survives; regional ethics deployed; 6 senior staff resign"
    }
];

// Function to get character by episode number
function getCharacter(episodeNum) {
    return feedLoopCharacters.find(c => c.episode === episodeNum);
}

// Function to compare user choice with character's actual choice
function compareChoices(characterChoice, userChoice) {
    const alignmentScore = Math.abs(characterChoice.career_risk_taken - userChoice.careerRisk);
    return {
        alignment: 1 - alignmentScore, // 1 = perfect match, 0 = opposite
        userRiskier: userChoice.careerRisk > characterChoice.career_risk_taken
    };
}

// Export for use in episode pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { feedLoopCharacters, getCharacter, compareChoices };
}
