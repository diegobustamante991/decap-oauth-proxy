/**
 * Knowledge base for the portfolio AI assistant.
 *
 * This is the ONLY source of facts the assistant is allowed to use. Keep it
 * accurate and in sync with the site content (src/data/* and the case studies).
 * Editing this file changes what the assistant knows. No rebuild of the
 * frontend is required, only a redeploy of this Vercel proxy.
 */
export const KNOWLEDGE = `
# Diego Bustamante: Portfolio Knowledge Base

## Who he is
Diego Bustamante is a Principal Product Designer with 14+ years of experience designing AI systems, developer platforms, agentic assistants, and enterprise products used by millions. He focuses on the moment a person decides to trust a machine, and designs for that moment obsessively. He prototypes in code, thinks in systems, and ships fast.

Born in Argentina. Based in New York City. Open to relocating to California.

Career highlights: two acquired products, $80M+ in combined business impact, 65% conversion lifts, a SUS (System Usability Scale) score of 90 with developers, a platform managing $7B+ in travel revenue, a $30M acquisition, an AI email client with 91% intent-to-use, and a developer portal that collapsed 30-day onboarding to hours.

## Current role
Currently at Amazon, designing AI-native interaction patterns across a 90M+ user ecosystem spanning 31 countries. He is open to principal IC and leadership roles in AI product design and is available for conversations now.

## Background and history
- Amazon: designing AI-native interaction patterns across a 90M+ user ecosystem (current).
- June.ai: founding designer. June.ai was acquired by Nylas.
- AT&T: led developer experience and agentic AI design.
- Co-founded a product agency in Buenos Aires.

## Design philosophy
The best AI design is not impressive, it is invisible. It earns trust by knowing when to surface, when to act, and when to disappear. Every decision reduces friction, increases confidence, and removes the system from the feeling. Diego obsesses over the seam between human intent and machine behavior and sands it down until it is gone.

## What he does (services)
1. Agentic AI and trust design: conversational systems, progressive autonomy, multi-agent orchestration, trust calibration.
2. Product strategy and 0 to 1 definition: rapid validation, evidence-based kill decisions, executive alignment, funding acquisition.
3. End-to-end systems design: mobile and wearable, real-time interfaces, information architecture, design systems.
4. Prototyping and vibe coding: high-fidelity prototypes, code-based exploration, AI-assisted development.

## Speaking and workshops
- AI in Design Panel, Reaktor NYC: featured panelist alongside design leaders from Unqork and Sony Music on agentic AI systems, trust frameworks, and designing for uncertainty in production.
- Conflux 2025, Dublin and Edinburgh: facilitated global design workshops on systems thinking and AI-native product design for cross-functional teams.

## Mentorship
- Top Mentor, ADPList (2024): recognized as a top-rated mentor. Coaches emerging and mid-level designers on AI product design, portfolio strategy, and navigating senior/staff-level career transitions.

## Selected clients and collaborators
Amazon, AT&T, June.ai, Nylas, SION, Reaktor, SmartFlyer, AB InBev, YPF, UNIQLO.

# Case studies and projects

## AT&T AI Personal Receptionist ("Project Ann"), 2025
URL: /work/ai-receptionist
Role: Principal Product Designer, AT&T. Timeline: 90 days, 2025. Solo designer plus cross-functional engineering.
Summary: Designed a generative AI receptionist from concept to validated, public beta in 90 days. Network-embedded agentic call screening.
Problem: Customers face an influx of unrecognized calls, with some receiving 50 to 60 spam calls a day. Standard algorithmic blocking is binary and cannot tell a scammer from an unrecognized doctor's office.
Solution: A network-layer AI receptionist that intercepts, understands, and routes unknown callers in real time. It operates entirely at the carrier network layer (AT&T IMS/TAS infrastructure), so there is no app download, no battery drain, and it works across any phone on the network. Used Apple App Clips for frictionless onboarding, deterministic bypass rules for known contacts, and real-time human-in-the-loop intercept (observe or take over a call mid-conversation).
Validation: High-Speed Validation Framework. A working prototype was put in front of 50 users over 5 days, then an internal beta to 45 AT&T managers. Live stress tests had interns act as aggressive spam callers while testers watched the AI screen calls in real time.
Results: 90 days to validated beta. SUS score of 80/100. 91% intent to use. Unit cost of $0.91/month per user.
The name "Project Ann" honors Ann Syrdal, the AT&T Labs researcher who synthesized the first female computer voice.
Andy Markus, Chief Data and AI Officer at AT&T, championed it as one of the telco industry's first agentic voice AI tools used directly by the customer.
What was killed: SMS-based onboarding (felt spammy, replaced with App Clips); voice persona cloning and premium celebrity voices (broke trust, users preferred a distinct AI identity); granular topic configuration menus (too complex, simplified to real-time feedback loops).

## June.ai: Dismantling 45-Year-Old Email Patterns
URL: /work/june-ai
Role: Founding designer. Acquired by Nylas.
Summary: An AI email assistant that transforms inbox chaos into a clear, intent-driven communication hub.
Key idea: Not all email is the same kind of content, so it should not live in the same kind of interface. June split email into two paradigms: Conversational (human-to-human dialogue in a chat-like thread) and Non-Conversational (automated messages, receipts, newsletters, notifications treated as data and surfaced as a card-based feed you triage at a glance without opening).
Feed cards are parsed by computer vision and an AI engine into structured cards (logo, headline, key data, and the single most likely action) you can clear in under two seconds. Categories include travel, purchases, and more.
Highly interactive messages: rich, tappable experiences (airline check-ins, in-message purchases, appointment confirmations) inside the inbox, answered in one tap.
Results: 15K waitlist, #3 on Product Hunt, acquired by Nylas. 91% intent-to-use.

## SION: Recovering $30M in Lost Travel Commissions
URL: /work/sion
Summary: A two-sided AI fintech marketplace for travel commission reconciliation. Acquired by Bilt for $30M.
Results: $30M recovered, 8,000+ travel advisors, a platform managing $7B+ in travel revenue.

## Amazon A to Z: Designing for millions across the employee lifecycle
URL: /work/amazon-atoz
Summary: Single-threaded design owner across 6 product areas in Amazon's People Experience Technology org, designing AI-native interaction patterns across a 90M+ user ecosystem.
Scale: 90M+ users across 31 countries (jobseekers, employees, families, and alumni), including 800K alumni.

## AT&T Developer Experience (DevEx): From Closed Network to Open Developer Platform
URL: /work/devex
Summary: Designed AT&T's developer-facing ecosystem serving 1,000+ developers across 6 product ecosystems.
Results: onboarding from 30 days to hours, 80% search improvement, SUS score of 90 with developers.

## AT&T Voice Console and Digital Ordering ("Business Center")
URL: /work/voice-console
Summary: Replacing sales rep dependency with self-service at scale. A unified digital platform where AT&T business customers order, configure, and manage services end-to-end. Includes the Digital Buy Flow (self-service ordering), the Voice Console (Aria) for managing voice settings, voicemail, business attendant/IVR, schedules, and call logs, plus order enrichment and a hybrid scheduling solution.
Results: 20,000 orders in month one with no sales reps and no calls. 43% fewer pages. 27% fewer clicks to contract. 4M+ customers, the scale of the platform from day one.

## Generative Interfaces (experimental)
URL: /work/generative-interfaces
Summary: A research prototype exploring AI-driven UI generation through procedural layout algorithms.

# Full Resume (detailed experience)

Title: Principal Product Designer, Consumer AI Experiences. Based in New York, NY. Site: www.diegoezbustamante.com.
Summary: 14+ years designing consumer AI experiences across high-impact digital platforms. Leads design innovation at the intersection of agentic AI, conversational systems, and trust, shipping 0 to 1 products from strategy through validated launch. Track record of driving product strategy (not just execution), designing end-to-end AI systems at scale, and partnering with Product and Engineering leadership to secure $500K+ in funding, reach 20K+ users in month one, and achieve 91% intent-to-use rates. Fluent in LLM integration, multi-agent orchestration, and building AI features that earn user trust at scale.

## Amazon, Senior UX Designer / Design Lead (New York, April 2025 to Present)
Single-threaded design owner serving 90M+ users across 26 countries in Amazon's People Experience Technology org.
- Shipped the global Alumni lifecycle experience in under 2 months, concept to production across 31 countries.
- Integrated adaptive AI summaries into employee workflows, reducing time-to-answer by 40%.
- Leading agentic AI strategy for internal tools built on AWS Bedrock.

## AT&T, Principal Product Designer (August 2023 to April 2025)
Sole design lead for AT&T's first consumer-facing agentic voice AI product, a network-embedded generative AI receptionist, concept to validated beta in 90 days.
- Personal AI Receptionist: led design from concept to validated beta in 90 days. 91% intent-to-use and 80/100 SUS via a progressive autonomy framework across 5 trust levels, plus 85% anxiety reduction in live beta with real consumers.
- Designed behavioral contracts defining when the AI speaks, stays silent, escalates, or expresses uncertainty.
- Shipped network-layer AI at $0.91/user with multi-agent orchestration across IMS/TAS and AKS clusters.
- Intelligence at Scale: designed a natural-language interface synthesizing 400+ enterprise documents in real time for 20,000 users; improved information discovery speed by 80% with a SUS score of 90.
- Developer Experience (developer.att.com): designed a developer portal with API playground, sandbox, and AI code assistant for 1,000+ developers; collapsed 30-day partner onboarding to hours through guided self-service flows.

## Reaktor, Senior Product Designer (Contract) (New York, February 2023 to August 2023)
- Featured panelist on AI in Design alongside leaders from Unqork and Sony Music. Facilitated workshops on systems thinking and AI-native product development for enterprise teams. Advised on agentic AI implementation strategy for enterprise clients.

## Beyond Imagine, Founder & Senior Product Designer (New York, February 2020 to February 2023)
- Led design for SION, an AI-powered commission reconciliation platform, acquired by Bilt for $30M.
- Recovered $20M+ in delinquent commissions through intelligent data matching and automated dispute resolution.
- Designed a platform managing $7B+ in travel revenue; raised $500K pre-seed funding.

## June.ai, Lead Product Designer / Founding Designer (New York, November 2018 to January 2020)
- Designed a progressive autonomy framework for an AI email assistant; 91% of users reached full autonomy within the first month.
- Built detection models using Fast-R-CNN and NER to classify 1B+ emails weekly into actionable cards.
- Reached #3 on Product Hunt with 15,000 users at launch; acquired by Nylas.

## NNIDO, Product Designer & Art Director / Founder (March 2013 to November 2018)
- Founded a design studio serving YPF, Anheuser-Busch InBev, and Yellow Pages across Latin America. Pioneered design sprint methodology in Latin America; 15+ product launches across consumer and enterprise.

## Key achievements
- Two products acquired: June.ai (by Nylas) and SION (by Bilt for $30M). Both built from zero with trust frameworks as core IP.
- $80M+ in combined business impact across acquisitions, recovered revenue, and platform performance ($20M in commissions recovered, $7B+ in travel revenue managed).
- Agentic AI pioneer: designed one of the telco industry's first consumer-facing agentic AI products; AT&T's CDO called it first-of-its-kind, leaving other carriers in the dust.
- 90M+ users at scale: designing for Amazon's full employee lifecycle ecosystem (jobseekers, employees, families, alumni) across 31 countries.
- AT&T Personal AI Receptionist validated at 91% intent-to-use and 85% anxiety reduction in live beta.

## Core competencies
- AI product design: agentic systems, trust frameworks, progressive autonomy, behavioral contracts, multi-agent orchestration, confidence thresholds, human-in-the-loop patterns.
- Technical fluency: prototyping in code (React, GSAP), AWS Bedrock, Fast-R-CNN, NER pipelines, CMS architecture (Payload), API design.
- Strategic: 0 to 1 product development, stakeholder alignment, cross-functional leadership, framework creation, client solutions, field deployment optimization.
- Tools: Figma, Principle, Webflow, VS Code, UserTesting, Maze.

## Education
Bachelor of Arts and Communication in Graphic Design, University of Buenos Aires, 2015.

## Mentorship & speaking
- Top Mentor, ADPList (2024). AI in Design Panel, Reaktor NYC. Conflux 2025 Workshops, Dublin and Edinburgh.

# Contact
- About page: /about
- Email: hello@diegobustamante.com
- LinkedIn: https://www.linkedin.com/in/diegoezbustamante/
- Resume: available to download on the About page.
`;
