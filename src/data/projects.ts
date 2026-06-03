export interface Project {
  title: string;
  slug: string;
  image: string;
  color: string;
  highlyRated?: boolean;
  role: string;
  timeline: string;
  description: string;
  impact: string;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "HRMS",
    slug: "hrms",
    image: "/hrms.png",
    color: "#3b82f6",
    role: "Lead Product Manager",
    timeline: "6 Months",
    description: "An enterprise-grade Human Resource Management System designed to automate hiring, onboarding, payroll, and performance management. Focused on reducing administrative overhead and increasing HR efficiency through smart automation.",
    impact: "Reduced onboarding drop-offs by 45% and automated payroll processing for over 10,000+ employees.",
    tags: ["Enterprise", "HR Tech", "B2B SaaS", "Automation"]
  },
  {
    title: "Layered AI",
    slug: "layered-ai",
    image: "/layered-ai.png",
    color: "#8b5cf6",
    role: "Lead PM & UX Strategist",
    timeline: "4 Months",
    description: "An AI-powered document generation and analysis tool for legal and compliance teams. Enables lawyers and risk officers to upload custom policy templates and parse long agreements in seconds using LLMs.",
    impact: "Secured 4 enterprise pilots within 30 days of launch; slashed contract review cycles by 70%.",
    tags: ["AI/ML", "LegalTech", "LLMs", "B2B SaaS"]
  },
  {
    title: "Growstack Ai",
    slug: "growstack-ai",
    image: "/growstack-ai.png",
    color: "#2dd4bf",
    role: "Co-founder & Head of Product",
    timeline: "8 Months",
    description: "An AI-driven growth marketing automation platform that optimizes ad spend, generates high-converting creative copy, and orchestrates cross-channel campaigns using predictive audience modeling.",
    impact: "Secured $350K in pre-seed funding; scaled platform to $20K MRR in 6 months.",
    tags: ["AI Marketing", "Growth Tech", "Startup", "AdTech"]
  },
  {
    title: "HOUS",
    slug: "hous",
    image: "/hous.png",
    color: "#f59e0b",
    role: "Senior Product Manager",
    timeline: "5 Months",
    description: "A modern co-living and rental marketplace designed for young professionals. Built a frictionless application flow, integrated background checks, and introduced split-payment rent features.",
    impact: "Increased booking conversions by 35% and scaled listed inventory across 4 tier-1 cities.",
    tags: ["PropTech", "Marketplace", "Fintech", "Consumer Web"]
  },
  {
    title: "AI Policy Generator",
    slug: "ai-policy-generator",
    image: "/policy-gen.png",
    color: "#3b82f6",
    role: "Product Manager",
    timeline: "2 Months",
    description: "A lightweight compliance tool designed to help small and medium businesses draft GDPR, CCPA, and custom AI usage policies in minutes based on their operational profile.",
    impact: "Generated over 5,000+ policies within the first month; featured as Product of the Day on Product Hunt.",
    tags: ["Compliance", "LegalTech", "AI Tools", "Growth Loop"]
  },
  {
    title: "BElink",
    slug: "belink",
    image: "/belink.png",
    color: "#f43f5e",
    role: "Product Manager",
    timeline: "3 Months",
    description: "An enterprise link-shortening and deep-linking infrastructure for marketing teams, enabling detailed click-through analytics, geographic routing, and customized social media preview cards.",
    impact: "Processed 50M+ requests per month with 99.99% uptime; improved marketing CTRs by 18% for clients.",
    tags: ["Infrastructure", "Developer Tools", "Analytics", "SaaS"]
  },
  {
    title: "Ombre",
    slug: "ombre",
    image: "/ombre.png",
    color: "#8b5cf6",
    highlyRated: true,
    role: "Lead PM",
    timeline: "4 Months",
    description: "A personalized e-commerce shopping platform leveraging AI skin-tone analysis and facial mapping to recommend custom beauty and cosmetics products.",
    impact: "Boosted cart average order value (AOV) by 24% and reduced product returns by 30%.",
    tags: ["E-Commerce", "BeautyTech", "AI Vision", "Consumer Web"]
  },
  {
    title: "Vibe",
    slug: "vibe",
    image: "/vibe.png",
    color: "#f43f5e",
    highlyRated: true,
    role: "Product & Growth PM",
    timeline: "3 Months",
    description: "A community-driven social networking and event ticketing platform for music enthusiasts and local artists. Features real-time geo-located event maps and smart recommendation engines.",
    impact: "Acquired 50K+ monthly active users (MAUs); ticket sales transaction volume increased by 40% QoQ.",
    tags: ["Social Web", "EventTech", "Geo-location", "Community"]
  },
  {
    title: "Elite Deals",
    slug: "elite-deals",
    image: "/elite-deals.png",
    color: "#f59e0b",
    highlyRated: true,
    role: "Growth Product Manager",
    timeline: "3 Months",
    description: "A high-end invite-only luxury deal aggregator, offering exclusive discounts on premium lifestyle products, travel, and dining with seamless concierge integration.",
    impact: "Achieved 15% user referral conversion rate and $80+ average subscription margins.",
    tags: ["Luxury Tech", "Fintech", "Aggregator", "Invite-only"]
  },
  {
    title: "Fitness AI",
    slug: "fitness-ai",
    image: "/fitness-ai.png",
    color: "#10b981",
    highlyRated: true,
    role: "Product Manager",
    timeline: "5 Months",
    description: "A computer vision-assisted fitness training application that provides real-time form correction, personalized workout routines, and biometric tracking.",
    impact: "Maintained 4.8 star App Store rating; increased 30-day user retention rate to 52%.",
    tags: ["HealthTech", "AI Vision", "Mobile App", "Fitness"]
  },
  {
    title: "By Learn",
    slug: "by-learn",
    image: "/by-learn.png",
    color: "#3b82f6",
    highlyRated: true,
    role: "Lead PM",
    timeline: "6 Months",
    description: "An adaptive learning platform offering gamified curriculum-aligned homework assignments for K-12 students, with automated grading and custom insights reports for teachers.",
    impact: "Saves teachers an average of 6 hours per week; adopted by 200+ schools across the region.",
    tags: ["EdTech", "K-12", "Gamification", "B2B2C"]
  },
  {
    title: "Better Learn",
    slug: "better-learn",
    image: "/better-learn.png",
    color: "#2dd4bf",
    highlyRated: true,
    role: "Product Manager",
    timeline: "4 Months",
    description: "An online cohort-based professional skill development platform designed for corporate training and upskilling in high-demand fields like product management and engineering.",
    impact: "Scaled corporate training revenue by 120% YoY; achieved a 92% course completion rate.",
    tags: ["EdTech", "B2B Corporate", "Cohort Learning", "Upskilling"]
  },
  {
    title: "AI Tool Finder",
    slug: "ai-tool-finder",
    image: "/ai-tool-finder.png",
    color: "#8b5cf6",
    highlyRated: true,
    role: "Creator & Solo PM",
    timeline: "1 Month",
    description: "A curated directory and smart recommendation engine that indexes, categorizes, and filters the latest generative AI tools based on user-described workflows.",
    impact: "Reached 100K+ monthly pageviews; drove $5K in affiliate partner revenue in the first 2 weeks.",
    tags: ["AI Tools", "Generative AI", "Curation", "Growth Loop"]
  },
  {
    title: "Imaginate",
    slug: "imaginate",
    image: "/imaginate.png",
    color: "#10b981",
    role: "Product Manager",
    timeline: "3 Months",
    description: "A collaborative canvas-based design tool utilizing stable diffusion models to help marketing teams storyboard, generate, and edit brand assets in real-time.",
    impact: "Reduced asset turnaround times by 80%; enabled concurrent real-time collaboration for design teams.",
    tags: ["GenAI", "Design Tools", "Collaboration", "B2B SaaS"]
  },
  {
    title: "Journal AI",
    slug: "journal-ai",
    image: "/journal-ai.png",
    color: "#8b5cf6",
    role: "Product Manager",
    timeline: "3 Months",
    description: "A secure, end-to-end encrypted journaling application that uses lightweight sentiment analysis and natural language processing to suggest reflective prompts and identify weekly mood trends.",
    impact: "Grew organic search acquisitions by 110% through a custom-built SEO content hub.",
    tags: ["Mental Health", "AI/NLP", "Consumer Tech", "Privacy"]
  }
];
