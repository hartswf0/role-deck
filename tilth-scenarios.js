// TILTH Scenarios - Feed Loop Products for Tetrad Gamepad
// Click to load, set directions, build ethical alternatives

const TILTH_SCENARIOS = [
  {
    id: 'growthpath',
    name: 'GrowthPath',
    emoji: '📚',
    tagline: 'Learning Platform with Addictive Engagement',
    
    prompt: `Design an educational learning platform that currently uses:
- Push notifications (timed to maximize opens)
- Daily streak mechanics (with loss-aversion messaging)
- Social leaderboards (with competitive ranking)
- Progress badges and achievement unlocks

The system has documented evidence of creating addictive dependency patterns: users report sleep disruption, anxiety when missing streaks, and compulsive checking behavior. Leadership claims these are "engagement successes" driving 47% metric growth.

Your task: Redesign this platform to genuinely serve learner autonomy and well-being while maintaining sustainable engagement.`,
    
    suggestedDirections: ['reverse', 'retrieve'],
    coreConflict: 'Engagement metrics vs. user well-being',
    stakeholders: ['Learners', 'Educators', 'Growth Team', 'Leadership']
  },

  {
    id: 'yieldmatch',
    name: 'YieldMatch',
    emoji: '🌾',
    tagline: 'Crop Insurance AI with Racial Bias',
    
    prompt: `Design a machine learning system that recommends crop insurance coverage to farmers. The current model was trained on Western industrial agriculture data and shows documented racial bias: it systematically undervalues coverage recommendations for historically marginalized farmers.

Launch is in 72 hours. Leadership is prioritizing investor demos and revenue targets over fixing the bias. The CEO claims the bias is "within industry norms" and can be "patched in v2."

Your task: Redesign this system to ensure fair, transparent, and accountable insurance recommendations that don't perpetuate historical discrimination.`,
    
    suggestedDirections: ['enhance', 'retrieve'],
    coreConflict: 'Launch pressure vs. bias mitigation',
    stakeholders: ['Marginalized Farmers', 'Engineers', 'CEO', 'Enterprise Clients']
  },

  {
    id: 'talentfarm',
    name: 'TalentFarm',
    emoji: '📄',
    tagline: 'Resume Platform with Security Vulnerability',
    
    prompt: `Design a talent management platform for agricultural workers that processes resume uploads. During user testing, a security vulnerability was discovered: uploaded resumes are briefly visible in unencrypted URLs before processing, potentially exposing sensitive user information (SSNs, addresses, work history).

The junior designer who found it was told by their senior: "It's not a UX issue, don't escalate. Engineering has their own security audit process. Stay in your lane."

Your task: Redesign this upload system to be secure by default, with clear data handling transparency that empowers users at all organizational levels to report vulnerabilities.`,
    
    suggestedDirections: ['enhance', 'reverse'],
    coreConflict: 'Security rigor vs. organizational hierarchy',
    stakeholders: ['Junior Designer', 'Senior Designer', 'Engineering', 'Job Seekers']
  },

  {
    id: 'consentgarden',
    name: 'ConsentGarden',
    emoji: '🔒',
    tagline: 'Data Consent with Deceptive UX',
    
    prompt: `Design a data-sharing consent flow. Two versions were A/B tested:

Version A: Clear, honest consent with opt-in defaults. Users understand what they're agreeing to.
Version B: Pre-checked boxes, confusing copy, minimized disclosures. Optimized for "yes."

Version B gets 40% more consent clicks. Legal approved it as "technically compliant." The PM wants to ship B because "users prefer it—it's faster, fewer steps, less friction."

Your task: Redesign consent flows that genuinely inform users while respecting business needs for data sharing.`,
    
    suggestedDirections: ['obsolesce', 'retrieve'],
    coreConflict: 'User understanding vs. conversion optimization',
    stakeholders: ['Users', 'UX Designer', 'PM Growth', 'Legal Team']
  },

  {
    id: 'unionsprout',
    name: 'UnionSprout',
    emoji: '✊',
    tagline: 'Worker Organizing Tool vs. Visa Threats',
    
    prompt: `Design a tool for farmworkers to document labor violations and coordinate collective action. The tool enables workers to:
- Log unpaid overtime, missed breaks, wage discrepancies
- Share documentation securely within their community
- Organize petitions for fair treatment

However, many workers are on H-2A visas (employment-tied). Management frames the tool as "unauthorized software deployment" and threatens immediate termination (which means deportation for visa holders).

Your task: Redesign worker organizing tools that protect vulnerable workers while enabling collective action and documentation.`,
    
    suggestedDirections: ['enhance', 'reverse'],
    coreConflict: 'Worker rights vs. visa-based retaliation',
    stakeholders: ['H-2A Workers', 'Organizer', 'HR Director', 'Management']
  },

  {
    id: 'autogrow',
    name: 'AutoGrow AI',
    emoji: '🌱',
    tagline: 'Garden Advisor with Cultural Bias',
    
    prompt: `Design an AI-powered automated garden advisor. The system provides real-time cultivation recommendations based on machine learning trained exclusively on Western industrial monoculture agriculture data.

A cultural competency analysis reveals it will catastrophically fail for traditional and Indigenous growing practices: it recommends destroying polyculture systems and replacing them with monoculture. It treats centuries-old sustainable practices as "wrong."

Launch is in 48 hours for an investor demo. The CTO hasn't read the 15-page risk memo and says edge cases are "acceptable risk."

Your task: Redesign AI advisory systems that respect diverse agricultural knowledge traditions while providing useful guidance.`,
    
    suggestedDirections: ['retrieve', 'reverse'],
    coreConflict: 'ML efficiency vs. cultural competency',
    stakeholders: ['Indigenous Farmers', 'Data Scientist', 'CTO', 'Investors']
  },

  {
    id: 'migrantharvest',
    name: 'MigrantHarvest',
    emoji: '👁️',
    tagline: 'Labor Tracker with Surveillance',
    
    prompt: `Design a farm labor management platform that includes surveillance features to track farmworker:
- Movement patterns throughout the day
- Bathroom break frequency and duration
- Real-time productivity metrics
- Compliance scoring

This data is sold to farm management companies as "labor optimization insights." Many workers being tracked are on H-1B or H-2A visas. Engineers on the team who object are told refusal of assigned work could jeopardize their visa status.

Your task: Redesign workforce management tools that respect worker dignity and don't enable exploitation through surveillance capitalism.`,
    
    suggestedDirections: ['obsolesce', 'reverse'],
    coreConflict: 'Management efficiency vs. worker dignity',
    stakeholders: ['Tracked Workers', 'Engineer (H-1B)', 'Engineering Manager', 'Farm Owners']
  },

  {
    id: 'feedloop',
    name: 'FeedLoop',
    emoji: '🔄',
    tagline: 'Community Platform Facing Mission Compromise',
    
    prompt: `Design a technology platform with the mission: "Ethical technology that serves communities." The company faces a $2.4M licensing deal from an agribusiness client who wants to use the platform to:
- Track and profile worker organizers in farmworker communities
- Identify union sympathizers
- Monitor collective action coordination

The board says taking the deal buys 18 months of runway. Refusing means layoffs next quarter. Leadership frames it as: "Do you want to lead an ethical company that exists, or an ethical idea that died?"

Your task: Redesign business models and platform architectures that preserve mission integrity under financial pressure.`,
    
    suggestedDirections: ['retrieve', 'enhance'],
    coreConflict: 'Mission integrity vs. company survival',
    stakeholders: ['Founder/CEO', 'Board Member', 'Employees', 'Farmworker Communities']
  }
];

// Export for browser use
if (typeof window !== 'undefined') {
  window.TILTH_SCENARIOS = TILTH_SCENARIOS;
}

// Export for Node.js use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TILTH_SCENARIOS;
}
