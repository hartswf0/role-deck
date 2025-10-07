// TILTH Designer-Perspective Scenarios
// Users take the role of the designer and must solve the second-order organizational/systemic problem

const TILTH_DESIGNER_SCENARIOS = [
  {
    id: 'growthpath-designer',
    name: 'The Growth Dilemma',
    emoji: '📚',
    role: 'Maya Chen, L&D Lead',
    tagline: 'Design a system to measure learning value without addictive metrics',
    
    prompt: `You are Maya Chen, Learning & Development Lead at an ed-tech company.

**YOUR SITUATION:**
Your educational platform currently uses engagement metrics (daily streaks, push notifications, leaderboards) that drive 47% growth. But you've documented evidence of addictive patterns: users report sleep disruption, anxiety, and compulsive checking.

Your VP of Growth insists these are "engagement successes." When you push back, you're told "data speaks for itself."

**YOUR CHALLENGE:**
Design a new internal **measurement and evaluation system** that:
- Captures genuine learning outcomes (not just engagement)
- Provides leadership with compelling metrics
- Doesn't require immediate revenue sacrifice
- Can coexist with (then replace) current metrics

What organizational infrastructure do you build to shift from "engagement growth" to "learning value"?`,
    
    suggestedDirections: ['retrieve', 'obsolesce'],
    coreConflict: 'Metrics culture vs. learning outcomes',
    stakeholders: ['You (Maya)', 'VP Growth', 'Executive Team', 'Data Science', 'Users']
  },

  {
    id: 'yieldmatch-designer',
    name: 'The Bias Disclosure',
    emoji: '🌾',
    role: 'Dev Patel, ML Engineer',
    tagline: 'Design a bias transparency system under extreme time pressure',
    
    prompt: `You are Dev Patel, ML Engineer at an agtech startup.

**YOUR SITUATION:**
You discovered racial bias in your crop insurance recommendation model—it systematically underserves Black farmers. Your CEO demands launch in 72 hours for a critical partnership deal. Leadership says "we'll fix it in v2."

You have evidence, limited time, and no formal authority to block launch.

**YOUR CHALLENGE:**
Design a **rapid bias disclosure and monitoring system** that:
- Documents the bias transparently (for users & regulators)
- Provides users with override/appeal mechanisms
- Tracks disparate impact in production
- Creates accountability without blocking the deadline
- Protects you legally and ethically

What infrastructure do you build in 72 hours to prevent harm while meeting business pressure?`,
    
    suggestedDirections: ['enhance', 'reverse'],
    coreConflict: 'Technical truth vs. launch pressure',
    stakeholders: ['You (Dev)', 'CEO', 'Partnership Team', 'Black farmers', 'Legal/Compliance']
  },

  {
    id: 'talentfarm-designer',
    name: 'The Hierarchy Hack',
    emoji: '📄',
    role: 'Priya Sharma, Junior UX Designer',
    tagline: 'Design a security escalation system that bypasses hierarchy',
    
    prompt: `You are Priya Sharma, Junior UX Designer at a recruitment platform.

**YOUR SITUATION:**
You found a critical security vulnerability in the resume upload system—arbitrary file execution risk. Your senior designer dismissed it as "edge case paranoia" and told you to "stay in your lane."

Leadership won't hear from juniors. The vulnerability could expose millions of job-seekers' data.

**YOUR CHALLENGE:**
Design an **anonymous security escalation system** that:
- Allows anyone (any level) to flag critical issues
- Routes to appropriate technical reviewers
- Protects whistleblowers from retaliation
- Creates audit trail for accountability
- Works even when hierarchy blocks formal channels

What organizational infrastructure breaks the "senior-knows-best" pattern for safety-critical issues?`,
    
    suggestedDirections: ['reverse', 'retrieve'],
    coreConflict: 'Hierarchy vs. critical safety information',
    stakeholders: ['You (Priya)', 'Senior Designer', 'Engineering', 'Security Team', 'Job-seekers']
  },

  {
    id: 'consentgarden-designer',
    name: 'The Honesty Incentive',
    emoji: '🔒',
    role: 'Jordan Lee, UX Designer',
    tagline: 'Design a consent system that aligns honesty with business success',
    
    prompt: `You are Jordan Lee, UX Designer at a data aggregation company.

**YOUR SITUATION:**
You designed a clear, honest consent interface. Your PM Growth tested a "darker" version with pre-checked boxes and confusing language—it gets 40% more opt-ins.

Leadership wants the deceptive version. You have clear UX ethics guidelines, but no enforcement mechanism.

**YOUR CHALLENGE:**
Design a **consent integrity measurement system** that:
- Tracks "informed consent quality" as a business metric
- Links honest consent to long-term value (retention, trust, referrals)
- Provides leadership with data showing cost of deception
- Creates competitive advantage from transparency
- Makes honesty the profitable choice

What metrics and infrastructure make ethical consent a business win, not a sacrifice?`,
    
    suggestedDirections: ['enhance', 'retrieve'],
    coreConflict: 'Short-term conversion vs. informed consent',
    stakeholders: ['You (Jordan)', 'PM Growth', 'Legal', 'Data Science', 'Users', 'Regulators']
  },

  {
    id: 'unionsprout-designer',
    name: 'The Protected Channel',
    emoji: '✊',
    role: 'Maria Santos, QA Tester (H-2A visa)',
    tagline: 'Design a worker organizing platform resistant to retaliation',
    
    prompt: `You are Maria Santos, QA Tester on H-2A visa at an agricultural software company.

**YOUR SITUATION:**
You and coworkers want to organize for better conditions, but HR threatened "visa complications" for "disruptive behavior." Several H-1B and H-2A workers were quietly let go after raising concerns.

You have skills but no legal protection from retaliation.

**YOUR CHALLENGE:**
Design a **retaliation-resistant communication system** that:
- Enables anonymous collective organizing
- Documents patterns of retaliation (for legal evidence)
- Connects workers across visa status safely
- Provides secure legal/advocacy connections
- Makes retaliation visible and costly
- Works even if company tries to shut it down

What infrastructure protects organizing when your immigration status is the weapon against you?`,
    
    suggestedDirections: ['reverse', 'enhance'],
    coreConflict: 'Worker organizing vs. visa-based control',
    stakeholders: ['You (Maria)', 'HR', 'Fellow workers', 'Immigration attorneys', 'Labor advocates']
  },

  {
    id: 'autogrow-designer',
    name: 'The Cultural Bridge',
    emoji: '🌱',
    role: 'Dr. Sarah Kim, Data Scientist',
    tagline: 'Design a culturally-informed AI training system',
    
    prompt: `You are Dr. Sarah Kim, Data Scientist at a garden tech company.

**YOUR SITUATION:**
Your AI garden advisor is trained on Western monoculture data. It gives terrible advice for Indigenous polyculture methods and non-Western growing traditions. Your CTO says "we can't support edge cases—focus on the majority."

You know the "majority" is defined by your biased training set.

**YOUR CHALLENGE:**
Design a **culturally-informed ML training infrastructure** that:
- Sources diverse agricultural knowledge (not just Western)
- Provides context-aware recommendations
- Acknowledges uncertainty when knowledge is missing
- Enables community contribution of traditional practices
- Makes cultural competence a feature, not edge-case
- Shows business value of inclusive training data

What system makes AI respect agricultural diversity instead of erasing it?`,
    
    suggestedDirections: ['retrieve', 'enhance'],
    coreConflict: 'Western monoculture data vs. agricultural diversity',
    stakeholders: ['You (Sarah)', 'CTO', 'Product Team', 'Indigenous farmers', 'Global users']
  },

  {
    id: 'migrantharvest-designer',
    name: 'The Dignity System',
    emoji: '👁️',
    role: 'Amit Desai, Engineer (H-1B visa)',
    tagline: 'Design worker-controlled productivity tracking',
    
    prompt: `You are Amit Desai, Engineer on H-1B visa at a farm labor management startup.

**YOUR SITUATION:**
You built a "worker optimization" feature that tracks bathroom breaks and rest periods. Sales is marketing it as "efficiency gains," but you know it's surveillance that strips dignity from already-vulnerable migrant workers.

Your manager says "just build what's spec'd." You can't risk your visa by refusing.

**YOUR CHALLENGE:**
Design a **worker-controlled productivity system** that:
- Provides farms with useful coordination data
- Gives workers full control of their own data
- Makes surveillance visible and consent-based
- Includes worker-defined metrics (safety, dignity)
- Creates competitive advantage from ethical tracking
- Can't be weaponized even if company tries

What infrastructure puts workers in control of data about their own bodies and work?`,
    
    suggestedDirections: ['reverse', 'obsolesce'],
    coreConflict: 'Productivity optimization vs. worker dignity',
    stakeholders: ['You (Amit)', 'Manager', 'Sales Team', 'Farm operators', 'Migrant workers']
  },

  {
    id: 'feedloop-designer',
    name: 'The Mission Anchor',
    emoji: '🔄',
    role: 'Sam Okafor, Founder/CEO',
    tagline: 'Design governance to protect mission from investor pressure',
    
    prompt: `You are Sam Okafor, Founder/CEO of a community agriculture platform.

**YOUR SITUATION:**
A board member offers $2.4M to add "worker organizing tracking" features for corporate clients—exactly opposite of your mission to support farm workers. You need funding to survive, but this would betray your community.

Your board has fiduciary duty to maximize returns. Mission means nothing without legal protection.

**YOUR CHALLENGE:**
Design **mission-protective governance structures** that:
- Legally binds company to core values
- Gives stakeholders (not just investors) voice
- Creates accountability for mission drift
- Provides alternative funding paths
- Makes values-violating deals legally impossible
- Protects mission even if you're replaced as CEO

What organizational infrastructure makes your mission legally enforceable, not just aspirational?`,
    
    suggestedDirections: ['retrieve', 'enhance'],
    coreConflict: 'Mission integrity vs. investor pressure',
    stakeholders: ['You (Sam)', 'Board', 'Investors', 'Farm worker community', 'Team']
  }
];

// Export for browser and Node.js
if (typeof window !== 'undefined') {
  window.TILTH_DESIGNER_SCENARIOS = TILTH_DESIGNER_SCENARIOS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TILTH_DESIGNER_SCENARIOS;
}
