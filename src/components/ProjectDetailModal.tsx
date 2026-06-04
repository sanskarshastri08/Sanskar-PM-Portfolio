"use client";

import React, { useEffect } from "react";
import LayeredAICaseStudy from "@/components/LayeredAICaseStudy";
import GrowStackCaseStudy from "@/components/GrowStackCaseStudy";
import HousCaseStudy from "@/components/HousCaseStudy";
import AIPolicyGeneratorCaseStudy from "@/components/AIPolicyGeneratorCaseStudy";
import BelinkCaseStudy from "@/components/BelinkCaseStudy";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowLeft,
  Cpu,
  Terminal,
  Users,
  Layers,
  Palette,
  Award,
} from "lucide-react";
import { Project } from "@/data/projects";

/* ─── Case-study data (mirrors the [slug] page) ───────────────────────── */

interface Persona {
  name: string;
  role: string;
  goal: string;
  painPoint: string;
  age?: string;
  about?: string;
}

interface CaseStudy {
  introduction: string;
  techStack: string[];
  keyFeatures: string[];
  targetAudience: string;
  personas: Persona[];
  wireframes: string;
  visualStyles: string;
}

const CASE_STUDY_DATA: Record<string, CaseStudy> = {
  hrms: {
    introduction:
      "HRMS is an enterprise-grade Human Resource Management System designed to automate hiring, onboarding, payroll, and performance tracking. In this project, I served as the Lead Product Manager, leading cross-functional design and engineering sprints to replace a legacy system that generated high administrative overhead and data entry errors.",
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "REST APIs", "OAuth2"],
    keyFeatures: [
      "Frictionless onboarding wizard that guides new hires through document signing and profile setups.",
      "Smart payroll automation engine that calculates taxes, bonuses, and deductibles with 99.9% accuracy.",
      "Real-time attendance and leave tracking dashboard with integrated department calendar views.",
      "Role-based access controls to safeguard sensitive employee logs and financial reports.",
    ],
    targetAudience:
      "Enterprise HR directors, department managers, and operations leads looking to automate repetitive admin work and synchronize team availability.",
    personas: [
      {
        name: "Sarah Jenkins",
        role: "HR Director",
        goal: "Streamline monthly payroll processing and reduce new hire onboarding support requests.",
        painPoint:
          "Spends up to 15 hours weekly copy-pasting payroll fields between spreadsheets and legacy tax systems.",
      },
      {
        name: "David Chen",
        role: "Engineering Manager",
        goal: "Approve team time-offs quickly and maintain resource scheduling transparency for upcoming sprints.",
        painPoint:
          "Has no visibility on who is out of office, leading to sudden developer resource bottlenecks.",
      },
    ],
    wireframes:
      "We designed dynamic low-fidelity wizard components to streamline complex document upload fields. Traced and tested user flows from initial digital signature submission through backend database sync, which ultimately decreased average onboarding task completion times by 68%.",
    visualStyles:
      "Focused on high-trust corporate tones including navy and white with brand blue accents. Typography utilizes Inter to support clean spacing in data tables, combined with Outfit for high-impact card headings.",
  },
  "layered-ai": {
    introduction:
      "Layered AI is an intelligent document analysis platform designed to help legal teams speed up high-risk contract audits. Serving as the Lead PM, I guided user research and LLM validation to build a tool that extracts complex liability parameters and generates compliance reports in seconds.",
    techStack: ["React", "Next.js", "FastAPI", "Python", "LangChain", "PostgreSQL", "Tailwind CSS"],
    keyFeatures: [
      "Automated document scanner that reads and highlights high-risk clauses (liability, indemnity, data privacy).",
      "Interactive LLM text editor that drafts customized client compliance memos in real-time.",
      "Template generator that allows risk officers to standardize custom contract audit parameters.",
      "Comprehensive compliance reports with detailed liability scoring for commercial agreements.",
    ],
    targetAudience:
      "Corporate legal departments, contract auditors, risk management teams, and compliance officers.",
    personas: [
      {
        name: "Eleanor Vance",
        role: "General Counsel",
        goal: "Conduct fast, bulletproof audits on commercial vendor agreements and highlight outlier liabilities.",
        painPoint:
          "Reviewing a single contract takes 4+ hours, creating a massive bottleneck for sales and operations.",
      },
      {
        name: "Marcus Kael",
        role: "Compliance Officer",
        goal: "Ensure all incoming vendor agreements match the updated corporate security and privacy policies.",
        painPoint:
          "Hard-to-read legal jargon makes auditing manual compliance details error-prone and time-consuming.",
      },
    ],
    wireframes:
      "We wireframed side-by-side splitscreen panels where the uploaded contract is shown on the left and the AI compliance panel resides on the right. This layout allowed users to see exact clause highlights while reviewing AI-suggested annotations.",
    visualStyles:
      "Utilizes deep slate gray backgrounds with purple neon highlights to represent AI intelligence. Used strict borders and clean cards to build a modern, high-tech legal environment.",
  },
  "growstack-ai": {
    introduction:
      "Introducing GrowStack, a comprehensive dashboard designed specifically for reputation managers and businesses. GrowStack empowers users to effectively monitor, analyze, and respond to customer reviews across multiple platforms, ensuring they can maintain and improve their online reputation with ease.",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "D3.js",
      "Chart.js",
      "PM2",
      "AWS",
      "GitHub",
      "Figma",
      "Photoshop",
      "Illustrator"
    ],
    keyFeatures: [
      "Comprehensive review monitoring: Track reviews from various sources such as Google, Home Advisor, SuperPages, and Yahoo Local in a single dashboard.",
      "Detailed analytics: Visualize review growth trends, star rating breakdowns, and review sources to gain actionable insights.",
      "Review management: Easily respond to reviews directly from the dashboard, helping maintain a positive online presence.",
      "Customizable filters: Use filters to view reviews by source, rating, and time period for more focused analysis.",
      "Export reviews: Export review data to CSV for further analysis or reporting."
    ],
    targetAudience:
      "Reputation managers, digital marketing agencies, and small business owners looking to monitor reviews across multiple platforms and improve online brand authority.",
    personas: [
      {
        name: "Emily",
        role: "Reputation Manager",
        age: "34 Years Old",
        goal: "Efficiently monitor and manage client reviews, ensure timely responses, and provide reports.",
        painPoint: "Juggling multiple clients and review platforms makes it difficult to keep track of reviews and respond promptly."
      },
      {
        name: "John",
        role: "Small Business Owner",
        age: "45 Years Old",
        goal: "Improve the restaurant's online reputation, attract more customers, and monitor and respond to customer feedback efficiently.",
        painPoint: "Limited time and resources to track reviews with difficulty managing reviews across multiple platforms."
      }
    ],
    wireframes:
      "We designed dynamic low-fidelity wireframes focusing on the review tracking dashboard. Traced and tested user flows from initial review alert notifications to direct response input fields, which decreased average response action times by 54%.",
    visualStyles:
      "Focused on a clean reputation-management aesthetic utilizing a deep forest green theme (#034737) as the primary brand color to build high authority. Typography utilizes Poppins to support clean spacing in review lists and dashboard widgets."
  },
  hous: {
    introduction:
      "Welcome to the landing page for Hous, the premier property management platform designed to streamline the management of properties and tenants. Our platform offers a robust solution for property managers to onboard various properties and sub-units, while also providing tenants with tools to manage their bills and book amenities effortlessly. The landing page is crafted to deliver a seamless user experience, showcasing the key features and benefits of Hous, and setting the stage for an efficient property management journey.",
    techStack: ["React", "Node.js", "MongoDB", "Git", "Figma", "Photoshop", "Illustrator"],
    keyFeatures: [
      "Property Onboarding: Easily onboard properties and sub-units, from entire buildings to individual units, through an intuitive interface.",
      "Dashboard Overview: A comprehensive dashboard for property managers to view and manage multiple properties and tenant details from one central location.",
      "Billing Management: Provide tenants with a clear overview of their bills, allowing for easy payment and tracking.",
      "Tenant Management: Simplify tenant management with tools for tracking lease agreements, managing maintenance requests, and more.",
      "Amenity Booking: Enable tenants to book amenities directly through the platform, ensuring a smooth and convenient experience.",
      "User-Friendly Design: A clean, modern design that enhances usability and ensures that users can navigate the platform effortlessly.",
      "Information Accessibility: Key information about property management and tenant services is readily accessible, making it easy for users to find what they need."
    ],
    targetAudience:
      "Property Managers, Real Estate Professionals, and Tenants looking for unified tools to manage property units and lease amenities.",
    personas: [
      {
        name: "Gabe",
        role: "Property Manager",
        age: "38 Years Old",
        goal: "Streamline property management tasks and improve tenant satisfaction.",
        painPoint: "Managing multiple properties and keeping track of various tenant needs and maintenance requests."
      },
      {
        name: "Kelly",
        role: "Tenant",
        age: "29 Years Old",
        goal: "Easily manage bills, book amenities, and communicate with property management.",
        painPoint: "Finding a user-friendly platform that simplifies bill payments and amenity bookings."
      }
    ],
    wireframes:
      "Designed structural onboarding blueprints for property lists and tenant profile panels. Conducted user trials for Stripe billing dashboard integrations and reservation sliders, ensuring all key property information remains accessible.",
    visualStyles:
      "Styled with a vibrant, contemporary mint-to-blue gradient (#4DCFBB to #C4E3FF) theme, supported by clean typography from Jost and minimalist card borders that evoke a modern tech-savvy appeal."
  },
  "ai-policy-generator": {
    introduction:
      "AI Policy Generator is a lightweight compliance wizard that helps SMBs generate customized GDPR, CCPA, and AI usage policies. As the Sole Product Manager, I built the MVP in 30 days and drove the Product Hunt launch.",
    techStack: ["React", "Next.js", "Tailwind CSS", "OpenAI API", "Vercel", "PDFKit"],
    keyFeatures: [
      "Interactive wizard that gathers business operations details through a simple questionnaire.",
      "Dynamic legal clause mapping that matches business practices with updated regulations.",
      "One-click PDF compliance policy download and web-hosted policy link generation.",
      "Auto-update compliance alerts that notify users when privacy laws require policy renewals.",
    ],
    targetAudience:
      "Small business owners, independent SaaS developers, and agencies needing quick, affordable compliance policies.",
    personas: [
      {
        name: "Lukas Weber",
        role: "SaaS Founder",
        goal: "Generate custom legal privacy policies for a new web app without paying expensive attorney fees.",
        painPoint: "Hiring lawyers for standard privacy drafts costs $1,500+, depleting startup budgets.",
      },
      {
        name: "Diana Rossi",
        role: "Agency Owner",
        goal: "Quickly set up compliance and GDPR declarations for multiple client websites.",
        painPoint: "Must manually search privacy rules across multiple regions (EU, CA) to ensure safety.",
      },
    ],
    wireframes:
      "Focused on a wizard UI, testing question progression states. Leveraged back-and-forth controls and progress bars to prevent form fatigue, helping achieve a 92% wizard completion rate.",
    visualStyles:
      "Minimalist, high-contrast black-and-white theme with soft blue highlights. Used clean form fields and bold typography to make legal compliance feel simple.",
  },
  belink: {
    introduction:
      "BElink is an enterprise deep-linking and link management dashboard built for scale. As the Product Manager, I worked closely with engineering to build high-performance redirection rules and geographic CTR dashboards.",
    techStack: ["Next.js", "Go", "Redis", "PostgreSQL", "Tailwind CSS", "Chart.js", "Docker"],
    keyFeatures: [
      "High-throughput redirect engine that routes requests based on device, location, and language.",
      "Real-time click tracking dashboard showcasing geographic, referrer, and device conversion analytics.",
      "Custom branded short links with automated SSL certificate provisioning.",
      "Developer API keys and webhooks for programmatic campaign tracking.",
    ],
    targetAudience:
      "Marketing managers, digital campaign leads, social media teams, and enterprise developers.",
    personas: [
      {
        name: "Nadia Petrova",
        role: "Campaign Director",
        goal: "Distribute device-specific short links across global ads and monitor live click conversions.",
        painPoint:
          "Lacks device redirection rules, resulting in mobile users landing on desktop-only site pages.",
      },
      {
        name: "Alex Sterling",
        role: "Software Engineer",
        goal: "Programmatically generate branded deep links for transactional email confirmations.",
        painPoint: "Redirection platforms lack scalable developer APIs, causing integration bugs.",
      },
    ],
    wireframes:
      "Wireframed heavy link management tables with quick search filters and detail side drawers, allowing users to edit routing rules quickly without navigating away from the main list view.",
    visualStyles:
      "Technical theme featuring slate grays and bold crimson highlights. Used clean tabular list displays, clear badge colors, and highly readable status indicators.",
  },
  ombre: {
    introduction:
      "Ombre is a personalized beauty recommendation app that scans users' skin tones to recommend cosmetics. Serving as the Lead PM, I managed the training datasets and facial mapping integrations.",
    techStack: ["React Native", "TensorFlow Lite", "Python", "AWS", "Node.js", "Tailwind CSS"],
    keyFeatures: [
      "AI camera interface that scans facial mapping points and determines exact skin tones.",
      "Personalized cosmetics recommendation engine matched with inventory databases.",
      "User profile diary tracking seasonal skin tone variations and product history.",
      "E-commerce integration allowing users to buy products directly from retail partners.",
    ],
    targetAudience:
      "Cosmetics shoppers, beauty enthusiasts, and skincare leads seeking custom product shade matches.",
    personas: [
      {
        name: "Aaliyah Jackson",
        role: "Beauty Enthusiast",
        goal: "Find foundation shades that match her skin tone without swatching products in stores.",
        painPoint:
          "Buys cosmetics online that turn out to be the wrong shade, costing money and return effort.",
      },
      {
        name: "Sophie Dupont",
        role: "Skincare Specialist",
        goal: "Recommend client makeup routines that adapt to seasonal changes in skin moisture and tone.",
        painPoint:
          "Hard to track historical skin tone variations manually across different product brands.",
      },
    ],
    wireframes:
      "Wireframed camera overlay guides to ensure users center their face correctly. Added real-time lighting feedback loops to prevent scanning failures caused by bad lighting conditions.",
    visualStyles:
      "Elegant beauty-focused theme utilizing soft pastel purples, clean whites, and deep gray text. Soft borders and organic shapes are used to build a high-end salon experience.",
  },
  vibe: {
    introduction:
      "Vibe is a location-based social ticketing app for local concerts. Serving as the Product & Growth PM, I led the mobile app lifecycle, optimized event sharing flows, and grew community MAUs.",
    techStack: ["React Native", "Node.js", "Express", "PostgreSQL", "Google Maps API", "Stripe API"],
    keyFeatures: [
      "Interactive geo-located map showcasing live events and ticket availability.",
      "Frictionless mobile ticket checkout and digital QR code scanner for entry.",
      "In-app group chats centered around specific music events and local artists.",
      "Ticket resell portal with fraud protection and custom pricing caps.",
    ],
    targetAudience:
      "Concert goers, local artists, indie event organizers, and student social community coordinators.",
    personas: [
      {
        name: "Jordan Brooks",
        role: "Music Fan",
        goal: "Discover local indie concerts, buy tickets, and meet people with similar music tastes.",
        painPoint:
          "Buying tickets on large ticketing platforms includes high processing fees and lacks social features.",
      },
      {
        name: "Clara Vance",
        role: "Indie Promoter",
        goal: "Sell out local show venues and distribute tickets easily without high platform cuts.",
        painPoint:
          "Marketing to local crowds is expensive, and tracking RSVPs manually across socials is a mess.",
      },
    ],
    wireframes:
      "We designed wireframes focusing on the interactive maps and geo-fenced event details cards that slide up from the bottom of the map view, maximizing ease of navigation.",
    visualStyles:
      "Dark mode music aesthetics with neon pink accents. High-contrast ticket badges and neon elements evoke active local nightlife.",
  },
  "elite-deals": {
    introduction:
      "Elite Deals is an invite-only luxury deal aggregator offering exclusive concierge travel and shopping. As the Growth PM, I worked on invitation codes and referral loops to drive premium memberships.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe API", "Tailwind CSS", "Concierge APIs"],
    keyFeatures: [
      "Invite-only membership referral system with queue lists and coupon rewards.",
      "Curated directory of luxury travel packages, Michelin dining, and boutique items.",
      "In-app messaging chat linking members with personal concierge support agents.",
      "Frictionless subscription billing setup integrated with premium tiers.",
    ],
    targetAudience:
      "High-income earners, luxury travelers, corporate executives, and premium lifestyle enthusiasts.",
    personas: [
      {
        name: "Charles Sterling",
        role: "Investment Banker",
        goal: "Access curated luxury travel recommendations and book VIP dining tables instantly.",
        painPoint: "Has no time to browse travel platforms, wanting a single premium booking channel.",
      },
      {
        name: "Yasmine Al-Masri",
        role: "Tech Consultant",
        goal: "Share exclusive invites with colleagues and book luxury resort packages with premium discount rates.",
        painPoint:
          "Standard discounts feel low-tier, and booking premium properties requires calling multiple agents.",
      },
    ],
    wireframes:
      "Wireframed simple, high-end landing pages with card-based concierge booking. Focused on onboarding flows that collect travel preferences to deliver customized deal recommendations.",
    visualStyles:
      "Premium luxury branding with black backgrounds and gold borders. Typographic choices feature high-contrast Outfit headers and elegant cards.",
  },
  "fitness-ai": {
    introduction:
      "Fitness AI is a camera-assisted mobile app providing form correction. Serving as the Product Manager, I aligned engineering sprints with kinesiologists to optimize posture algorithms.",
    techStack: ["React Native", "CoreML", "Python", "AWS DynamoDB", "Node.js", "Tailwind CSS"],
    keyFeatures: [
      "Real-time posture and joint movement tracking using AI computer vision frameworks.",
      "Instant audio form-correction feedback during workout reps.",
      "Custom routine builders tracking historical weight metrics and muscle fatigue.",
      "Gamified streak trackers and community leaderboard dashboards.",
    ],
    targetAudience:
      "Home workout enthusiasts, gym beginners, and personal trainers searching for virtual coaching tools.",
    personas: [
      {
        name: "Maya Patel",
        role: "Remote Worker",
        goal: "Perform compound lifts safely at home without injuring her lower back.",
        painPoint:
          "Lacks personal trainer feedback, making it hard to know if her squat form is correct.",
      },
      {
        name: "Ethan Wright",
        role: "Gym Novice",
        goal: "Follow a structured workout routine and log progression data without manual notebook logging.",
        painPoint:
          "Felt intimidated by gym equipment, and manual tracking apps require typing after every single set.",
      },
    ],
    wireframes:
      "Wireframed screens that place the user's camera feed inside a skeletal joint tracking overlay. Created audio feedback settings screens to let users configure when posture alerts fire.",
    visualStyles:
      "Bright, energetic neon green and dark gray theme representing active health. Monospace fonts are used for workout timers and calorie counters to maintain focus.",
  },
  "by-learn": {
    introduction:
      "By Learn is an adaptive homework platform for K-12 classrooms. As the Lead PM, I mapped curriculum standards to dynamically generated homework tasks to save teachers' grading time.",
    techStack: ["Next.js", "Python", "FastAPI", "MongoDB", "Tailwind CSS", "socket.io"],
    keyFeatures: [
      "Gamified homework portal with interactive math, science, and reading assignments.",
      "Adaptive question engine that adjusts difficulty based on student performance logs.",
      "Automated grading and analytics reports showing teachers class performance metrics.",
      "Real-time virtual classroom sessions with live polling and quick response boards.",
    ],
    targetAudience:
      "Primary school teachers, K-12 students, school administrators, and parents tracking student progress.",
    personas: [
      {
        name: "Karen Davies",
        role: "Math Teacher",
        goal: "Assign aligned homework tasks and view progress reports showing who needs help.",
        painPoint:
          "Spends 6+ hours weekly grading paper worksheets, leaving little time for focused support.",
      },
      {
        name: "Leo Garcia",
        role: "5th Grade Student",
        goal: "Complete homework assignments without feeling bored or stuck on hard questions.",
        painPoint:
          "Uniform worksheets feel either too easy or frustratingly hard, leading to low motivation.",
      },
    ],
    wireframes:
      "Designed wireframes with child-friendly card elements. Prototyped gamified quiz layouts with bright progress bars, immediate visual reward modals, and character avatars.",
    visualStyles:
      "Friendly theme with a light pastel blue background, yellow highlights, and dark blue typography. Rounded cards make the application feel highly approachable for young students.",
  },
  "better-learn": {
    introduction:
      "Better Learn is an online cohort-based upskilling platform for enterprise training. As the PM, I built cohort discussion boards and live reminder notification matrices to drive course completion rates.",
    techStack: ["Next.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Zoom API"],
    keyFeatures: [
      "Cohort workspaces with group assignments, shared code blocks, and discussion boards.",
      "Live workshop integration with Zoom scheduling and automated calendar updates.",
      "HR analytics dashboards proving course completion and skill progression metrics.",
      "Adaptive career pathing matching finished cohorts with corporate advancement opportunities.",
    ],
    targetAudience:
      "HR heads, enterprise managers, tech professionals upskilling, and professional educators.",
    personas: [
      {
        name: "Victoria Sterling",
        role: "VP of HR",
        goal: "Upskill engineering teams in cloud architectures and track employee course engagement.",
        painPoint:
          "Pre-recorded training platforms show dismal 15% completion rates with zero team interaction.",
      },
      {
        name: "Kenji Sato",
        role: "Full-Stack Developer",
        goal: "Learn advanced system design through cohort projects and complete assignments on time.",
        painPoint:
          "Balancing work with self-paced learning is hard, and video-only tutorials feel isolated.",
      },
    ],
    wireframes:
      "Wireframed dual-panel cohort workspaces where the class video feeds and team notes are on the same page, allowing students to coordinate notes during live lectures.",
    visualStyles:
      "Professional, trust-inspiring teal and clean white layouts. Strict borders, clean typography, and badge grids are utilized for corporate analytics displays.",
  },
  "ai-tool-finder": {
    introduction:
      "AI Tool Finder is a semantic directory listing generative AI applications. As the Creator and Solo PM, I built the scrapers, set up vector databases, and grew traffic to 100K+ pageviews.",
    techStack: ["Next.js", "Pinecone", "OpenAI Embeddings", "MongoDB", "Tailwind CSS", "Python (Scrapy)"],
    keyFeatures: [
      "Semantic search bar allowing users to describe workflows in plain text to get tool recommendations.",
      "Automated daily scraper indexing new AI tool launches and categories.",
      "Detailed review pages tracking tool pricing, user reviews, and video guides.",
      "Affiliate links setup and featured sponsorship slots for developers.",
    ],
    targetAudience:
      "Developers, product designers, business owners, and technology leads searching for AI tooling.",
    personas: [
      {
        name: "Sarah Lindqvist",
        role: "Product Designer",
        goal: "Find and compare vector drawing AI tools to accelerate marketing banner mockups.",
        painPoint:
          "Browsing standard directories is tedious because search filters rely on tag matches instead of workflows.",
      },
      {
        name: "Rajesh Malhotra",
        role: "Operations Lead",
        goal: "Source compliance AI tools that match his budget and integrate with current software.",
        painPoint:
          "AI products lack clear pricing listings, requiring booking sales calls just to see costs.",
      },
    ],
    wireframes:
      "Designed search-first wireframes focusing on a search box and card-based results listings with detailed category tag filters on the sidebar.",
    visualStyles:
      "Clean tech style utilizing neon violet highlights on dark slate cards. Structured layout with bold borders matches the fast-paced nature of AI releases.",
  },
  imaginate: {
    introduction:
      "Imaginate is a collaborative canvas-based design tool utilizing stable diffusion models. Serving as the PM, I worked on real-time multiplayer cursors and image generation workflows.",
    techStack: ["Next.js", "Socket.io", "Stable Diffusion API", "MongoDB", "Tailwind CSS", "Canvas API"],
    keyFeatures: [
      "Multiplayer design canvas allowing teams to sketch and generate images concurrently.",
      "Stable diffusion prompting interface with custom options for style transfer and image inpainting.",
      "Real-time asset library showing shared brand assets, styles, and prompt templates.",
      "Export wizard supporting multiple resolution file outputs for high-res prints.",
    ],
    targetAudience:
      "Creative agency directors, marketing design teams, brand storyboarders, and freelance illustrators.",
    personas: [
      {
        name: "Emma Thorne",
        role: "Creative Director",
        goal: "Coordinate brand storyboard mockups with remote designers in real-time.",
        painPoint: "Exporting drafts and waiting for email reviews delays project cycles by days.",
      },
      {
        name: "Hiroshi Tanaka",
        role: "Brand Designer",
        goal: "Generate high-fidelity ad creative bases using text prompts and edit them with brush tools.",
        painPoint: "Switching between AI generation sites and image editors disrupts focus.",
      },
    ],
    wireframes:
      "Wireframed complex canvas controls with sidebar prompt cards, floating design tools, and list layouts showing active team collaborators at the top right.",
    visualStyles:
      "Design-centric layout utilizing white backgrounds, deep dark borders, and pastel green accents. Clean geometric cards make the UI feel highly artistic and minimal.",
  },
  "journal-ai": {
    introduction:
      "Journal AI is an encrypted journaling application utilizing sentiment analysis to assist user reflection. Serving as the PM, I worked on privacy frameworks and SEO growth campaigns.",
    techStack: ["Next.js", "Web Crypto API", "Node.js", "MongoDB", "Tailwind CSS", "Natural NLP"],
    keyFeatures: [
      "Client-side encryption using AES-GCM, guaranteeing logs remain private and unreadable to developers.",
      "Lightweight NLP sentiment tracker showing weekly mood trends and trigger lists.",
      "Dynamic prompt engine suggesting therapeutic questions based on historical sentiments.",
      "SEO-optimized mindfulness hub and progress metrics tracker.",
    ],
    targetAudience:
      "Mindfulness practitioners, mental health leads, and privacy-focused consumer app users.",
    personas: [
      {
        name: "Oliver Smith",
        role: "UX Researcher",
        goal: "Write daily logs, view mood progression graphs, and keep thoughts secure.",
        painPoint:
          "Fears personal logs might get leaked or analyzed by tech giants for targeting ads.",
      },
      {
        name: "Mei Ling Chen",
        role: "Mindfulness Coach",
        goal: "Track trigger factors and reflect on questions suggested by sentiment graphs.",
        painPoint: "Standard diaries lack metrics or prompts to help users explore feelings.",
      },
    ],
    wireframes:
      "Wireframed writing interfaces with minimal distractions. Designed smooth mood charting panels that display stress patterns clearly without feeling like cold analytical dashboards.",
    visualStyles:
      "Calming theme featuring pastel purple accents on soft gray backgrounds. Rounded elements and clean typography evoke focus, safety, and mindfulness.",
  },
};

/* ─── Props ────────────────────────────────────────────────────────────── */

interface Props {
  project: Project | null;
  onClose: () => void;
}

const ACCENT = "#C52342";

const TargetIcon = ({ color = ACCENT }: { color?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const WarningIcon = ({ color = ACCENT }: { color?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const RocketIcon = ({ color = ACCENT }: { color?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M14 2l.09.09a7.63 7.63 0 0 1 2.22 5.37V10c0 .72-.11 1.43-.32 2.11L14 15l-5-5 2.89-1.91A7.82 7.82 0 0 1 14 2zM9 10l-5 5v3c0 .55.45 1 1 1h3l5-5-4-4z" />
  </svg>
);

const SectionHeader = ({ num, label, title, color = ACCENT }: { num: string; label: string; title: string; color?: string }) => (
  <div style={{ position: "relative", marginBottom: "36px", display: "flex", flexDirection: "column" }}>
    <span style={{ fontSize: "5.5rem", fontWeight: 900, color: "#f3f4f6", fontFamily: "'Outfit', sans-serif", position: "absolute", top: "-40px", left: "-12px", zIndex: 0, lineHeight: 1, userSelect: "none" }}>
      {num}
    </span>
    <div style={{ position: "relative", zIndex: 1 }}>
      <span style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: color, marginBottom: "4px", display: "block" }}>
        {label}
      </span>
      <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.45rem", fontWeight: 800, color: "#111827", margin: 0, textTransform: "uppercase", letterSpacing: "-0.01em" }}>
        {title}
      </h2>
    </div>
  </div>
);

const hexToRgb = (hex: string) => {
  let c = hex.replace(/^#/, "");
  if (c.length === 3) {
    c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
  }
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return { r, g, b };
};

const rgbToCmyk = (r: number, g: number, b: number) => {
  let c = 1 - r / 255;
  let m = 1 - g / 255;
  let y = 1 - b / 255;
  let k = Math.min(c, Math.min(m, y));

  if (k === 1) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }

  c = Math.round(((c - k) / (1 - k)) * 100);
  m = Math.round(((m - k) / (1 - k)) * 100);
  y = Math.round(((y - k) / (1 - k)) * 100);
  k = Math.round(k * 100);

  return { c, m, y, k };
};

const getPantoneDetails = (hex: string) => {
  try {
    const rgb = hexToRgb(hex);
    const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
    return {
      rgbStr: `RGB ${rgb.r}, ${rgb.g}, ${rgb.b}`,
      cmykStr: `${cmyk.c}, ${cmyk.m}, ${cmyk.y}, ${cmyk.k}`
    };
  } catch (e) {
    return {
      rgbStr: "RGB 197, 35, 66",
      cmykStr: "0, 82, 66, 23"
    };
  }
};

/* ─── Component ────────────────────────────────────────────────────────── */

export default function ProjectDetailModal({ project, onClose }: Props) {
  // Lock body scroll while open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (() => {
        const slug = project.slug;
        const cs = CASE_STUDY_DATA[slug];

        const introduction =
          cs?.introduction ||
          "Solving user friction points and delivering high-value product iterations as lead Product Manager.";
        const techStack = cs?.techStack || ["Next.js", "React", "Tailwind CSS", "PostgreSQL"];
        const keyFeatures = cs?.keyFeatures || [
          "Defined product requirements (PRDs) and translated business goals into sprint items.",
          "Led cross-functional alignments between design, engineering, and product marketing.",
          "Established product feedback loops using quantitative telemetry and qualitative user surveys.",
        ];
        const targetAudience =
          cs?.targetAudience ||
          "Product teams and users searching for streamlined digital product workflows.";
        const personas = cs?.personas || [
          {
            name: "Standard User",
            role: "Operations Lead",
            goal: "Automate repetitive daily workflows and save administrative time.",
            painPoint: "Spends multiple hours copy-pasting entries across legacy interfaces.",
          },
        ];
        const wireframes =
          cs?.wireframes ||
          "Designed low-fidelity user flowcharts and validated UI screen steps with key testers to reduce conversion drop-offs.";
        const visualStyles =
          cs?.visualStyles ||
          "Visual styling features a solid grid layout, professional typography, and a cohesive brand color palette.";

        return (
          <>
            {/* ── Overlay wrapper: backdrop + flex-centered panel ── */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={onClose}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.65)",
                backdropFilter: "blur(6px)",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0",
              }}
            >
            {/* ── Panel (stops click so backdrop close doesn't fire) ── */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 60, scale: 0.96 }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                background: "#F1F1F1",
                borderRadius: "0",
                border: "none",
                boxShadow: "none",
                padding: "0 0 48px 0",
                flexShrink: 0,
              }}
            >
              {/* ── Cover Image ── */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "21/9", minHeight: "180px", background: "#2d2a2a", borderRadius: "0", overflow: "hidden" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                {/* Gradient overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }} />

                {/* Floating title badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "24px",
                    background: "white",
                    padding: "10px 22px",
                    borderRadius: "0",
                    border: "3px solid #2d2a2a",
                    boxShadow: "none",
                  }}
                >
                  <h1
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "clamp(1.2rem, 3.5vw, 2rem)",
                      fontWeight: 900,
                      textTransform: "uppercase",
                      color: "#2d2a2a",
                      margin: 0,
                    }}
                  >
                    {project.title}
                  </h1>
                </div>

                {/* Tags */}
                <div style={{ position: "absolute", top: "16px", left: "24px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "4px 12px",
                        borderRadius: "0",
                        background: project.color,
                        border: "2px solid #2d2a2a",
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        color: "white",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Close button */}
                <button
                  onClick={onClose}
                  aria-label="Close project detail"
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "0",
                    background: "white",
                    border: "3px solid #2d2a2a",
                    boxShadow: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#2d2a2a",
                    transition: "transform 0.15s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <X size={18} strokeWidth={2.5} />
                </button>
              </div>

              {/* ── Body ── */}
              {slug === "layered-ai" ? (
                <div style={{ padding: "0" }}>
                  <LayeredAICaseStudy project={project} />
                </div>
              ) : slug === "growstack-ai" ? (
                <div style={{ padding: "0" }}>
                  <GrowStackCaseStudy project={project} />
                </div>
              ) : slug === "hous" ? (
                <div style={{ padding: "0" }}>
                  <HousCaseStudy project={project} />
                </div>
              ) : slug === "ai-policy-generator" ? (
                <div style={{ padding: "0" }}>
                  <AIPolicyGeneratorCaseStudy project={project} />
                </div>
              ) : slug === "belink" ? (
                <div style={{ padding: "0" }}>
                  <BelinkCaseStudy project={project} />
                </div>
              ) : (
              <div style={{ display: "flex", flexDirection: "column", background: "white", width: "100%" }}>

                {/* 1. Introduction */}
                <div style={{ padding: "54px 48px", borderBottom: "1px solid #e5e7eb", background: "white" }}>
                  <SectionHeader num="01" label="Introduction" title="Project Overview" color={project.color} />
                  
                  {/* Overview Card */}
                  <div style={{ background: "white", border: "1.5px solid #e5e7eb", padding: "36px", borderRadius: "0", marginBottom: "32px" }}>
                    <p style={{ fontSize: "0.98rem", color: "#4b5563", lineHeight: 1.85, margin: 0 }}>
                      {introduction}
                    </p>
                  </div>

                  {/* Dashboard Stats Row */}
                  <div style={{ display: "flex", border: "1.5px solid #e5e7eb", background: "white", borderRadius: "0", overflow: "hidden", marginBottom: "44px", flexWrap: "wrap" }}>
                    {[
                      { label: "My Role", value: project.role, accent: false },
                      { label: "Timeline", value: project.timeline, accent: false },
                      { label: "Impact", value: project.impact, accent: true }
                    ].map((s, idx) => (
                      <div
                        key={s.label}
                        style={{
                          flex: "1 1 240px",
                          padding: "24px 28px",
                          borderRight: idx < 2 ? "1.5px solid #e5e7eb" : "none",
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px"
                        }}
                      >
                        <span style={{ fontSize: "0.68rem", fontWeight: 800, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                          {s.label}
                        </span>
                        <span style={{ fontSize: "0.98rem", fontWeight: 700, color: s.accent ? project.color : "#111827", lineHeight: 1.45 }}>
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tools Section */}
                  <h3 style={{ fontSize: "0.68rem", fontWeight: 800, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "18px" }}>
                    Tools Used
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                    {techStack.map((tech) => (
                      <div key={tech} style={{ display: "flex", alignItems: "center", gap: "10px", background: "white", border: "1.5px solid #e5e7eb", padding: "10px 14px" }}>
                        <Terminal size={14} style={{ color: project.color }} />
                        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#111827" }}>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Key Features */}
                <div style={{ padding: "54px 48px", borderBottom: "1px solid #e5e7eb", background: "white" }}>
                  <SectionHeader num="02" label="Capabilities" title="Key Features" color={project.color} />
                  
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
                    {keyFeatures.map((feature, idx) => {
                      const colonIdx = feature.indexOf(":");
                      let title = `Feature 0${idx + 1}`;
                      let desc = feature;
                      if (colonIdx !== -1) {
                        title = feature.substring(0, colonIdx).trim();
                        desc = feature.substring(colonIdx + 1).trim();
                      } else {
                        const words = feature.split(" ");
                        if (words.length > 3) {
                          title = words.slice(0, 3).join(" ");
                          desc = words.slice(3).join(" ");
                          title = title.charAt(0).toUpperCase() + title.slice(1);
                        }
                      }
                      return (
                        <div key={idx} style={{ background: "white", border: "1.5px solid #e5e7eb", padding: "28px 32px", borderRadius: "0", position: "relative", minHeight: "150px" }}>
                          <span style={{ position: "absolute", top: "24px", right: "28px", fontSize: "0.85rem", fontWeight: 900, color: project.color, fontFamily: "'Outfit', sans-serif" }}>
                            {`0${idx + 1}`}
                          </span>
                          <h3 style={{ fontSize: "0.98rem", fontWeight: 800, color: project.color, margin: "0 0 12px", paddingRight: "32px" }}>
                            {title}
                          </h3>
                          <p style={{ fontSize: "0.88rem", color: "#4b5563", lineHeight: 1.65, margin: 0 }}>
                            {desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Target Audience */}
                <div style={{ padding: "54px 48px", borderBottom: "1px solid #e5e7eb", background: "white" }}>
                  <SectionHeader num="03" label="User Research" title="Target Audience" color={project.color} />

                  <div style={{ background: "white", border: "1.5px solid #e5e7eb", padding: "44px 32px", borderRadius: "0", textAlign: "center" }}>
                    <p style={{ color: "#4b5563", fontSize: "0.98rem", fontWeight: 500, lineHeight: 1.7, margin: "0 0 24px" }}>
                      {targetAudience}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
                      {personas.map((p) => (
                        <span
                          key={p.role}
                          style={{
                            padding: "12px 28px",
                            background: `linear-gradient(135deg, ${project.color} 0%, #522843 100%)`,
                            borderRadius: "999px",
                            color: "#ffffff",
                            fontSize: "0.88rem",
                            fontWeight: 700,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                          {p.role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4. Target Personas */}
                <div style={{ padding: "54px 48px", borderBottom: "1px solid #e5e7eb", background: "white" }}>
                  <SectionHeader num="04" label="Personas" title="Target Personas" color={project.color} />

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "32px" }}>
                    {personas.map((persona, index) => {
                      const isRight = index % 2 === 1;
                      const avatarUrl = isRight 
                        ? "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80" 
                        : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80";
                      const bannerBg = isRight ? "#faf5f8" : "#fff5f7";

                      // Generate natural quote based on goal and pain point
                      let pain = persona.painPoint.charAt(0).toLowerCase() + persona.painPoint.slice(1);
                      if (pain.startsWith("spends ")) {
                        pain = "I spend " + pain.slice(7);
                      } else if (pain.startsWith("has ")) {
                        pain = "I have " + pain.slice(4);
                      } else if (pain.startsWith("lacks ")) {
                        pain = "I lack " + pain.slice(6);
                      } else if (pain.startsWith("chasing ")) {
                        pain = "chasing " + pain.slice(8);
                      }
                      const quote = `"I want to ${persona.goal.replace(/\.$/, "")}, but ${pain.replace(/\.$/, "")}."`;

                      // Match features for "How it helps"
                      const helps = index === 0 
                        ? keyFeatures.slice(0, 2)
                        : keyFeatures.slice(2, 4);

                      return (
                        <div 
                          key={index} 
                          style={{ 
                            background: "white", 
                            border: "1.5px solid #e5e7eb", 
                            borderRadius: "0", 
                            overflow: "hidden", 
                            display: "flex", 
                            flexDirection: "column",
                            textAlign: isRight ? "right" : "left"
                          }}
                        >
                          {/* Dossier Banner Header */}
                          <div 
                            style={{ 
                              background: bannerBg, 
                              padding: "28px 32px", 
                              borderBottom: "1.5px solid #e5e7eb", 
                              display: "flex", 
                              flexDirection: isRight ? "row-reverse" : "row", 
                              justifyContent: "space-between", 
                              alignItems: "center", 
                              gap: "20px" 
                            }}
                          >
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: isRight ? "flex-end" : "flex-start" }}>
                              <span style={{ fontSize: "0.62rem", fontWeight: 800, color: project.color, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                                User Dossier 0{index + 1}
                              </span>
                              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#111827", margin: 0 }}>
                                {persona.name}
                              </h3>
                              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: isRight ? "flex-end" : "flex-start", marginTop: "6px" }}>
                                {persona.age && (
                                  <span style={{ padding: "4px 8px", background: "white", border: "1px solid #e5e7eb", fontSize: "0.72rem", fontWeight: 700, color: "#111827" }}>
                                    🎂 {persona.age}
                                  </span>
                                )}
                                <span style={{ padding: "4px 8px", background: "white", border: "1px solid #e5e7eb", fontSize: "0.72rem", fontWeight: 700, color: "#111827" }}>
                                  💼 {persona.role}
                                </span>
                              </div>
                            </div>
                            <img
                              src={avatarUrl}
                              alt={persona.name}
                              style={{ width: "68px", height: "68px", border: `2.5px solid ${project.color}`, objectFit: "cover", flexShrink: 0, borderRadius: "8px" }}
                            />
                          </div>

                          {/* Dossier Content */}
                          <div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>
                            
                            {/* Key Quote */}
                            <div style={{ 
                              borderLeft: !isRight ? `3px solid ${project.color}` : "none", 
                              borderRight: isRight ? `3px solid ${project.color}` : "none", 
                              paddingLeft: !isRight ? "16px" : "0",
                              paddingRight: isRight ? "16px" : "0",
                              margin: "4px 0",
                              textAlign: isRight ? "right" : "left"
                            }}>
                              <p style={{ fontSize: "0.92rem", color: "#4b5563", fontStyle: "italic", lineHeight: 1.5, margin: 0 }}>
                                {quote}
                              </p>
                            </div>

                            <div>
                              <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: isRight ? "flex-end" : "flex-start", marginBottom: "8px" }}>
                                {!isRight && <TargetIcon color={project.color} />}
                                <h4 style={{ fontSize: "0.75rem", fontWeight: 800, color: project.color, textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                                  Goal
                                </h4>
                                {isRight && <TargetIcon color={project.color} />}
                              </div>
                              <p style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
                                {persona.goal}
                              </p>
                            </div>

                            <div>
                              <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: isRight ? "flex-end" : "flex-start", marginBottom: "8px" }}>
                                {!isRight && <WarningIcon color={project.color} />}
                                <h4 style={{ fontSize: "0.75rem", fontWeight: 800, color: project.color, textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                                  Core Pain Point
                                </h4>
                                {isRight && <WarningIcon color={project.color} />}
                              </div>
                              <p style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
                                {persona.painPoint}
                              </p>
                            </div>

                            {helps.length > 0 && (
                              <div>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: isRight ? "flex-end" : "flex-start", marginBottom: "12px" }}>
                                  {!isRight && <RocketIcon color={project.color} />}
                                  <h4 style={{ fontSize: "0.75rem", fontWeight: 800, color: project.color, textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                                    How this Project Helps
                                  </h4>
                                  {isRight && <RocketIcon color={project.color} />}
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: isRight ? "flex-end" : "flex-start" }}>
                                  {helps.map((hStr, idx) => {
                                    const colonIdx = hStr.indexOf(":");
                                    let hTitle = `Capability ${index === 0 ? idx + 1 : idx + 3}`;
                                    let hDesc = hStr;
                                    if (colonIdx !== -1) {
                                      hTitle = hStr.substring(0, colonIdx).trim();
                                      hDesc = hStr.substring(colonIdx + 1).trim();
                                    } else {
                                      const words = hStr.split(" ");
                                      if (words.length > 3) {
                                        hTitle = words.slice(0, 3).join(" ");
                                        hDesc = words.slice(3).join(" ");
                                        hTitle = hTitle.charAt(0).toUpperCase() + hTitle.slice(1);
                                      }
                                    }
                                    return (
                                      <div key={idx} style={{ display: "flex", gap: "10px", alignItems: "flex-start", justifyContent: isRight ? "flex-end" : "flex-start", width: "100%" }}>
                                        {!isRight && <span style={{ color: project.color, fontWeight: "bold", fontSize: "0.95rem", lineHeight: 1.3 }}>✓</span>}
                                        <p style={{ fontSize: "0.85rem", color: "#4b5563", lineHeight: 1.5, margin: 0, textAlign: isRight ? "right" : "left", flexGrow: 1 }}>
                                          <strong style={{ color: "#111827" }}>{hTitle}:</strong> {hDesc}
                                        </p>
                                        {isRight && <span style={{ color: project.color, fontWeight: "bold", fontSize: "0.95rem", lineHeight: 1.3, flexShrink: 0 }}>✓</span>}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}

                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 5. Wireframes & Visual Styles */}
                <div style={{ padding: "54px 48px", background: "white" }}>
                  <SectionHeader num="05" label="UI Design" title="Wireframes & Visual Direction" color={project.color} />
                  
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
                    
                    {/* Left Column — Logo, Mock Mobile Home Dock App Icon & Pantone Color Swatches */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                      
                      {/* Top Logo and Mock Mobile Dock App Icon Block */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                        {/* Logo block */}
                        <div style={{ background: "#111827", border: "1.5px solid #111827", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "0", minHeight: "120px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "white" }}>
                            <div style={{ background: project.color, padding: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <Cpu size={24} style={{ color: "white" }} />
                            </div>
                            <span style={{ fontWeight: 900, fontSize: "1.15rem", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase" }}>{project.title}</span>
                          </div>
                        </div>

                        {/* App Icon block in mock phone dock */}
                        <div style={{ background: "#111827", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "0", minHeight: "120px", position: "relative", overflow: "hidden" }}>
                          <div style={{ background: "rgba(255, 255, 255, 0.08)", backdropFilter: "blur(8px)", border: "1px solid rgba(255, 255, 255, 0.1)", padding: "10px 18px", display: "flex", gap: "12px", alignItems: "center", borderRadius: "14px" }}>
                            <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: "#f8fafc", opacity: 0.2 }} />
                            <div style={{ background: `linear-gradient(135deg, ${project.color} 0%, #522843 100%)`, width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", position: "relative", flexShrink: 0 }}>
                              <Cpu size={16} style={{ color: "white" }} />
                              <span style={{ position: "absolute", top: "-1px", right: "-1px", width: "6px", height: "6px", borderRadius: "50%", background: "#fff" }} />
                            </div>
                            <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: "#f8fafc", opacity: 0.2 }} />
                          </div>
                        </div>
                      </div>

                      {/* Colors Swatches Block (Pantone Cards) */}
                      <div style={{ background: "white", border: "1.5px solid #e5e7eb", padding: "24px", borderRadius: "0" }}>
                        <h4 style={{ fontSize: "0.72rem", fontWeight: 800, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "20px" }}>
                          Brand Colors
                        </h4>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
                          {[
                            { hex: project.color, name: "PROJECT BASE" },
                            { hex: "#2D2A2A", name: "CHARCOAL" },
                            { hex: "#F8FAFC", name: "OFF-WHITE" },
                            { hex: "#FFFFFF", name: "PURE WHITE" }
                          ].map((c) => {
                            const details = getPantoneDetails(c.hex);
                            return (
                              <div key={c.hex} style={{ border: "1px solid #e5e7eb", borderRadius: "0", background: "white", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                                <div style={{ background: c.hex, width: "100%", height: "80px", borderBottom: "1px solid #e5e7eb" }} />
                                <div style={{ padding: "8px 10px", display: "flex", flexDirection: "column", gap: "2px" }}>
                                  <span style={{ fontSize: "0.52rem", fontWeight: 800, color: "#111827", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                    {c.name}
                                  </span>
                                  <span style={{ fontSize: "0.45rem", fontWeight: 600, color: "#6b7280" }}>
                                    {c.hex}
                                  </span>
                                  <span style={{ fontSize: "0.42rem", fontWeight: 700, color: "#6b7280" }}>
                                    {details.rgbStr}
                                  </span>
                                  <span style={{ fontSize: "0.4rem", fontWeight: 700, color: project.color, letterSpacing: "0.02em" }}>
                                    {details.cmykStr}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                    </div>

                    {/* Right Column — Typography Specimen & Design Attributes */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                      
                      {/* Wireframes Description Card */}
                      <div style={{ background: "white", border: "1.5px solid #e5e7eb", padding: "24px", borderRadius: "0" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "16px" }}>
                          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: project.color }} />
                          <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                            Wireframing & Layout
                          </span>
                        </div>
                        <p style={{ color: "#4b5563", fontSize: "0.92rem", fontWeight: 500, lineHeight: 1.7, margin: "0 0 16px" }}>
                          {wireframes}
                        </p>
                        <p style={{ color: "#4b5563", fontSize: "0.92rem", fontWeight: 500, lineHeight: 1.7, margin: 0 }}>
                          {visualStyles}
                        </p>
                      </div>

                      {/* Typography Card Specimen with Sizing Scale */}
                      <div style={{ background: "white", border: "1.5px solid #e5e7eb", padding: "24px", borderRadius: "0" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: project.color }} />
                            <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                              Typography Specimen
                            </span>
                          </div>
                          <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                            INTER
                          </span>
                        </div>

                        {/* Character Set Specimen Sheet */}
                        <div style={{ borderBottom: "1px solid #e5e7eb", paddingBottom: "14px", marginBottom: "14px" }}>
                          <p style={{ fontSize: "0.62rem", fontWeight: 800, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
                            Character Set
                          </p>
                          <p style={{ fontSize: "0.78rem", color: "#111827", fontWeight: 500, letterSpacing: "0.05em", lineHeight: 1.4, margin: 0, fontFamily: "Inter, sans-serif" }}>
                            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
                            a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
                            0 1 2 3 4 5 6 7 8 9 ! @ # $ % & *
                          </p>
                        </div>

                        {/* Sizing Scale breakdown */}
                        <div style={{ borderBottom: "1px solid #e5e7eb", paddingBottom: "14px", marginBottom: "14px" }}>
                          <p style={{ fontSize: "0.62rem", fontWeight: 800, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
                            Type Scale
                          </p>
                          <div style={{ display: "flex", flexDirection: "column", gap: "3px", fontSize: "0.72rem", color: "#111827" }}>
                            <span><strong style={{ color: project.color }}>H1 (Outfit Bold):</strong> 32px / 1.1 LH</span>
                            <span><strong style={{ color: project.color }}>H2 (Outfit Semi):</strong> 24px / 1.2 LH</span>
                            <span><strong style={{ color: project.color }}>H3 (Outfit Med):</strong> 18px / 1.3 LH</span>
                            <span><strong style={{ color: "#6b7280" }}>Body (Inter Reg):</strong> 14px / 1.6 LH</span>
                          </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                            {["Regular (400)", "Medium (500)", "Semi bold (600)", "Bold (700)"].map((w, idx) => (
                              <span key={w} style={{ fontSize: "0.8rem", color: "#111827", fontWeight: [400, 500, 600, 700][idx] }}>
                                {w}
                              </span>
                            ))}
                          </div>
                          <span style={{ fontSize: "4.5rem", fontWeight: 700, color: "#111827", fontFamily: "Inter, sans-serif", lineHeight: 0.9, userSelect: "none" }}>
                            Aa
                          </span>
                        </div>
                      </div>

                      {/* Design Attributes */}
                      <div style={{ background: "white", border: "1.5px solid #e5e7eb", padding: "24px", borderRadius: "0", flexGrow: 1 }}>
                        <h4 style={{ fontSize: "0.72rem", fontWeight: 800, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
                          Design Attributes
                        </h4>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                          {[
                            { label: "Sharp Borders", icon: "📐" },
                            { label: "Light Theme", icon: "☀️" },
                            { label: "High Contrast", icon: "✨" },
                            { label: "Monospace Accents", icon: "💻" },
                            { label: "Intuitive Grid", icon: "🎨" },
                            { label: "Sleek Details", icon: "💎" }
                          ].map((a) => (
                            <div
                              key={a.label}
                              style={{
                                padding: "12px 14px",
                                background: "#fafafa",
                                border: "1px solid #e5e7eb",
                                borderRadius: "0",
                                fontSize: "0.8rem",
                                fontWeight: 700,
                                color: "#111827",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "6px"
                              }}
                            >
                              <span>{a.icon}</span>
                              <span>{a.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
              )}
            </motion.div>
            </motion.div>

          </>
        );
      })()}
    </AnimatePresence>
  );
}
