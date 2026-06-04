"use client";

import React from "react";
import { PROJECTS } from "@/data/projects";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Terminal, Users, Layers, Palette, ShieldAlert, Award, Star } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

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
    introduction: "HRMS is an enterprise-grade Human Resource Management System designed to automate hiring, onboarding, payroll, and performance tracking. In this project, I served as the Lead Product Manager, leading cross-functional design and engineering sprints to replace a legacy system that generated high administrative overhead and data entry errors.",
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "REST APIs", "OAuth2"],
    keyFeatures: [
      "Frictionless onboarding wizard that guides new hires through document signing and profile setups.",
      "Smart payroll automation engine that calculates taxes, bonuses, and deductibles with 99.9% accuracy.",
      "Real-time attendance and leave tracking dashboard with integrated department calendar views.",
      "Role-based access controls to safeguard sensitive employee logs and financial reports."
    ],
    targetAudience: "Enterprise HR directors, department managers, and operations leads looking to automate repetitive admin work and synchronize team availability.",
    personas: [
      {
        name: "Sarah Jenkins",
        role: "HR Director",
        goal: "Streamline monthly payroll processing and reduce new hire onboarding support requests.",
        painPoint: "Spends up to 15 hours weekly copy-pasting payroll fields between spreadsheets and legacy tax systems."
      },
      {
        name: "David Chen",
        role: "Engineering Manager",
        goal: "Approve team time-offs quickly and maintain resource scheduling transparency for upcoming sprints.",
        painPoint: "Has no visibility on who is out of office, leading to sudden developer resource bottlenecks."
      }
    ],
    wireframes: "We designed dynamic low-fidelity wizard components to streamline complex document upload fields. Traced and tested user flows from initial digital signature submission through backend database sync, which ultimately decreased average onboarding task completion times by 68%.",
    visualStyles: "Focused on high-trust corporate tones including navy and white with brand blue accents. Typography utilizes Inter to support clean spacing in data tables, combined with Outfit for high-impact card headings."
  },
  "layered-ai": {
    introduction: "Layered AI is an intelligent document analysis platform designed to help legal teams speed up high-risk contract audits. Serving as the Lead PM, I guided user research and LLM validation to build a tool that extracts complex liability parameters and generates compliance reports in seconds.",
    techStack: ["React", "Next.js", "FastAPI", "Python", "LangChain", "PostgreSQL", "Tailwind CSS"],
    keyFeatures: [
      "Automated document scanner that reads and highlights high-risk clauses (liability, indemnity, data privacy).",
      "Interactive LLM text editor that drafts customized client compliance memos in real-time.",
      "Template generator that allows risk officers to standardize custom contract audit parameters.",
      "Comprehensive compliance reports with detailed liability scoring for commercial agreements."
    ],
    targetAudience: "Corporate legal departments, contract auditors, risk management teams, and compliance officers.",
    personas: [
      {
        name: "Eleanor Vance",
        role: "General Counsel",
        goal: "Conduct fast, bulletproof audits on commercial vendor agreements and highlight outlier liabilities.",
        painPoint: "Reviewing a single contract takes 4+ hours, creating a massive bottleneck for sales and operations."
      },
      {
        name: "Marcus Kael",
        role: "Compliance Officer",
        goal: "Ensure all incoming vendor agreements match the updated corporate security and privacy policies.",
        painPoint: "Hard-to-read legal jargon makes auditing manual compliance details error-prone and time-consuming."
      }
    ],
    wireframes: "We wireframed side-by-side splitscreen panels where the uploaded contract is shown on the left and the AI compliance panel resides on the right. This layout allowed users to see exact clause highlights while reviewing AI-suggested annotations.",
    visualStyles: "Utilizes deep slate gray backgrounds with purple neon highlights to represent AI intelligence. Used strict borders and clean cards to build a modern, high-tech legal environment."
  },
  "growstack-ai": {
    introduction: "Introducing GrowStack, a comprehensive dashboard designed specifically for reputation managers and businesses. GrowStack empowers users to effectively monitor, analyze, and respond to customer reviews across multiple platforms, ensuring they can maintain and improve their online reputation with ease.",
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
    targetAudience: "Reputation managers, digital marketing agencies, and small business owners looking to monitor reviews across multiple platforms and improve online brand authority.",
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
    wireframes: "We designed dynamic low-fidelity wireframes focusing on the review tracking dashboard. Traced and tested user flows from initial review alert notifications to direct response input fields, which decreased average response action times by 54%.",
    visualStyles: "Focused on a clean reputation-management aesthetic utilizing a deep forest green theme (#034737) as the primary brand color to build high authority. Typography utilizes Poppins to support clean spacing in review lists and dashboard widgets."
  },
  hous: {
    introduction: "Welcome to the landing page for Hous, the premier property management platform designed to streamline the management of properties and tenants. Our platform offers a robust solution for property managers to onboard various properties and sub-units, while also providing tenants with tools to manage their bills and book amenities effortlessly. The landing page is crafted to deliver a seamless user experience, showcasing the key features and benefits of Hous, and setting the stage for an efficient property management journey.",
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
    targetAudience: "Property Managers, Real Estate Professionals, and Tenants looking for unified tools to manage property units and lease amenities.",
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
    wireframes: "Designed structural onboarding blueprints for property lists and tenant profile panels. Conducted user trials for Stripe billing dashboard integrations and reservation sliders, ensuring all key property information remains accessible.",
    visualStyles: "Styled with a vibrant, contemporary mint-to-blue gradient (#4DCFBB to #C4E3FF) theme, supported by clean typography from Jost and minimalist card borders that evoke a modern tech-savvy appeal."
  },
  "ai-policy-generator": {
    introduction: "AI Policy Generator is a lightweight compliance wizard that helps SMBs generate customized GDPR, CCPA, and AI usage policies. As the Sole Product Manager, I built the MVP in 30 days and drove the Product Hunt launch.",
    techStack: ["React", "Next.js", "Tailwind CSS", "OpenAI API", "Vercel", "PDFKit"],
    keyFeatures: [
      "Interactive wizard that gathers business operations details through a simple questionnaire.",
      "Dynamic legal clause mapping that matches business practices with updated regulations.",
      "One-click PDF compliance policy download and web-hosted policy link generation.",
      "Auto-update compliance alerts that notify users when privacy laws require policy renewals."
    ],
    targetAudience: "Small business owners, independent SaaS developers, and agencies needing quick, affordable compliance policies.",
    personas: [
      {
        name: "Lukas Weber",
        role: "SaaS Founder",
        goal: "Generate custom legal privacy policies for a new web app without paying expensive attorney fees.",
        painPoint: "Hiring lawyers for standard privacy drafts costs $1,500+, depleting startup budgets."
      },
      {
        name: "Diana Rossi",
        role: "Agency Owner",
        goal: "Quickly set up compliance and GDPR declarations for multiple client websites.",
        painPoint: "Must manually search privacy rules across multiple regions (EU, CA) to ensure safety."
      }
    ],
    wireframes: "Focused on a wizard UI, testing question progression states. Leveraged back-and-forth controls and progress bars to prevent form fatigue, helping achieve a 92% wizard completion rate.",
    visualStyles: "Minimalist, high-contrast black-and-white theme with soft blue highlights. Used clean form fields and bold typography to make legal compliance feel simple."
  },
  belink: {
    introduction: "BElink is an enterprise deep-linking and link management dashboard built for scale. As the Product Manager, I worked closely with engineering to build high-performance redirection rules and geographic CTR dashboards.",
    techStack: ["Next.js", "Go", "Redis", "PostgreSQL", "Tailwind CSS", "Chart.js", "Docker"],
    keyFeatures: [
      "High-throughput redirect engine that routes requests based on device, location, and language.",
      "Real-time click tracking dashboard showcasing geographic, referrer, and device conversion analytics.",
      "Custom branded short links with automated SSL certificate provisioning.",
      "Developer API keys and webhooks for programmatic campaign tracking."
    ],
    targetAudience: "Marketing managers, digital campaign leads, social media teams, and enterprise developers.",
    personas: [
      {
        name: "Nadia Petrova",
        role: "Campaign Director",
        goal: "Distribute device-specific short links across global ads and monitor live click conversions.",
        painPoint: "Lacks device redirection rules, resulting in mobile users landing on desktop-only site pages."
      },
      {
        name: "Alex Sterling",
        role: "Software Engineer",
        goal: "Programmatically generate branded deep links for transactional email confirmations.",
        painPoint: "Redirection platforms lack scalable developer APIs, causing integration bugs."
      }
    ],
    wireframes: "Wireframed heavy link management tables with quick search filters and detail side drawers, allowing users to edit routing rules quickly without navigating away from the main list view.",
    visualStyles: "Technical theme featuring slate grays and bold crimson highlights. Used clean tabular list displays, clear badge colors, and highly readable status indicators."
  },
  ombre: {
    introduction: "Ombre is a personalized beauty recommendation app that scans users' skin tones to recommend cosmetics. Serving as the Lead PM, I managed the training datasets and facial mapping integrations.",
    techStack: ["React Native", "TensorFlow Lite", "Python", "AWS", "Node.js", "Tailwind CSS"],
    keyFeatures: [
      "AI camera interface that scans facial mapping points and determines exact skin tones.",
      "Personalized cosmetics recommendation engine matched with inventory databases.",
      "User profile diary tracking seasonal skin tone variations and product history.",
      "E-commerce integration allowing users to buy products directly from retail partners."
    ],
    targetAudience: "Cosmetics shoppers, beauty enthusiasts, and skincare leads seeking custom product shade matches.",
    personas: [
      {
        name: "Aaliyah Jackson",
        role: "Beauty Enthusiast",
        goal: "Find foundation shades that match her skin tone without swatching products in stores.",
        painPoint: "Buys cosmetics online that turn out to be the wrong shade, costing money and return effort."
      },
      {
        name: "Sophie Dupont",
        role: "Skincare Specialist",
        goal: "Recommend client makeup routines that adapt to seasonal changes in skin moisture and tone.",
        painPoint: "Hard to track historical skin tone variations manually across different product brands."
      }
    ],
    wireframes: "Wireframed camera overlay guides to ensure users center their face correctly. Added real-time lighting feedback loops to prevent scanning failures caused by bad lighting conditions.",
    visualStyles: "Elegant beauty-focused theme utilizing soft pastel purples, clean whites, and deep gray text. Soft borders and organic shapes are used to build a high-end salon experience."
  },
  vibe: {
    introduction: "Vibe is a location-based social ticketing app for local concerts. Serving as the Product & Growth PM, I led the mobile app lifecycle, optimized event sharing flows, and grew community MAUs.",
    techStack: ["React Native", "Node.js", "Express", "PostgreSQL", "Google Maps API", "Stripe API"],
    keyFeatures: [
      "Interactive geo-located map showcasing live events and ticket availability.",
      "Frictionless mobile ticket checkout and digital QR code scanner for entry.",
      "In-app group chats centered around specific music events and local artists.",
      "Ticket resell portal with fraud protection and custom pricing caps."
    ],
    targetAudience: "Concert goers, local artists, indie event organizers, and student social community coordinators.",
    personas: [
      {
        name: "Jordan Brooks",
        role: "Music Fan",
        goal: "Discover local indie concerts, buy tickets, and meet people with similar music tastes.",
        painPoint: "Buying tickets on large ticketing platforms includes high processing fees and lacks social features."
      },
      {
        name: "Clara Vance",
        role: "Indie Promoter",
        goal: "Sell out local show venues and distribute tickets easily without high platform cuts.",
        painPoint: "Marketing to local crowds is expensive, and tracking RSVPs manually across socials is a mess."
      }
    ],
    wireframes: "We designed wireframes focusing on the interactive maps and geo-fenced event details cards that slide up from the bottom of the map view, maximizing ease of navigation.",
    visualStyles: "Dark mode music aesthetics with neon pink accents. High-contrast ticket badges and neon elements evoke active local nightlife."
  },
  "elite-deals": {
    introduction: "Elite Deals is an invite-only luxury deal aggregator offering exclusive concierge travel and shopping. As the Growth PM, I worked on invitation codes and referral loops to drive premium memberships.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe API", "Tailwind CSS", "Concierge APIs"],
    keyFeatures: [
      "Invite-only membership referral system with queue lists and coupon rewards.",
      "Curated directory of luxury travel packages, Michelin dining, and boutique items.",
      "In-app messaging chat linking members with personal concierge support agents.",
      "Frictionless subscription billing setup integrated with premium tiers."
    ],
    targetAudience: "High-income earners, luxury travelers, corporate executives, and premium lifestyle enthusiasts.",
    personas: [
      {
        name: "Charles Sterling",
        role: "Investment Banker",
        goal: "Access curated luxury travel recommendations and book VIP dining tables instantly.",
        painPoint: "Has no time to browse travel platforms, wanting a single premium booking channel."
      },
      {
        name: "Yasmine Al-Masri",
        role: "Tech Consultant",
        goal: "Share exclusive invites with colleagues and book luxury resort packages with premium discount rates.",
        painPoint: "Standard discounts feel low-tier, and booking premium properties requires calling multiple agents."
      }
    ],
    wireframes: "Wireframed simple, high-end landing pages with card-based concierge booking. Focused on onboarding flows that collect travel preferences to deliver customized deal recommendations.",
    visualStyles: "Premium luxury branding with black backgrounds and gold borders. Typographic choices feature high-contrast Outfit headers and elegant cards."
  },
  "fitness-ai": {
    introduction: "Fitness AI is a camera-assisted mobile app providing form correction. Serving as the Product Manager, I aligned engineering sprints with kinesiologists to optimize posture algorithms.",
    techStack: ["React Native", "CoreML", "Python", "AWS DynamoDB", "Node.js", "Tailwind CSS"],
    keyFeatures: [
      "Real-time posture and joint movement tracking using AI computer vision frameworks.",
      "Instant audio form-correction feedback during workout reps.",
      "Custom routine builders tracking historical weight metrics and muscle fatigue.",
      "Gamified streak trackers and community leaderboard dashboards."
    ],
    targetAudience: "Home workout enthusiasts, gym beginners, and personal trainers searching for virtual coaching tools.",
    personas: [
      {
        name: "Maya Patel",
        role: "Remote Worker",
        goal: "Perform compound lifts safely at home without injuring her lower back.",
        painPoint: "Lacks personal trainer feedback, making it hard to know if her squat form is correct."
      },
      {
        name: "Ethan Wright",
        role: "Gym Novice",
        goal: "Follow a structured workout routine and log progression data without manual notebook logging.",
        painPoint: "Felt intimidated by gym equipment, and manual tracking apps require typing after every single set."
      }
    ],
    wireframes: "Wireframed screens that place the user's camera feed inside a skeletal joint tracking overlay. Created audio feedback settings screens to let users configure when posture alerts fire.",
    visualStyles: "Bright, energetic neon green and dark gray theme representing active health. Monospace fonts are used for workout timers and calorie counters to maintain focus."
  },
  "by-learn": {
    introduction: "By Learn is an adaptive homework platform for K-12 classrooms. As the Lead PM, I mapped curriculum standards to dynamically generated homework tasks to save teachers' grading time.",
    techStack: ["Next.js", "Python", "FastAPI", "MongoDB", "Tailwind CSS", "socket.io"],
    keyFeatures: [
      "Gamified homework portal with interactive math, science, and reading assignments.",
      "Adaptive question engine that adjusts difficulty based on student performance logs.",
      "Automated grading and analytics reports showing teachers class performance metrics.",
      "Real-time virtual classroom sessions with live polling and quick response boards."
    ],
    targetAudience: "Primary school teachers, K-12 students, school administrators, and parents tracking student progress.",
    personas: [
      {
        name: "Karen Davies",
        role: "Math Teacher",
        goal: "Assign aligned homework tasks and view progress reports showing who needs help.",
        painPoint: "Spends 6+ hours weekly grading paper worksheets, leaving little time for focused support."
      },
      {
        name: "Leo Garcia",
        role: "5th Grade Student",
        goal: "Complete homework assignments without feeling bored or stuck on hard questions.",
        painPoint: "uniform worksheets feel either too easy or frustratingly hard, leading to low motivation."
      }
    ],
    wireframes: "Designed wireframes with child-friendly card elements. Prototyped gamified quiz layouts with bright progress bars, immediate visual reward modals, and character avatars.",
    visualStyles: "Friendly theme with a light pastel blue background, yellow highlights, and dark blue typography. Rounded cards make the application feel highly approachable for young students."
  },
  "better-learn": {
    introduction: "Better Learn is an online cohort-based upskilling platform for enterprise training. As the PM, I built cohort discussion boards and live reminder notification matrices to drive course completion rates.",
    techStack: ["Next.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Zoom API"],
    keyFeatures: [
      "Cohort workspaces with group assignments, shared code blocks, and discussion boards.",
      "Live workshop integration with Zoom scheduling and automated calendar updates.",
      "HR analytics dashboards proving course completion and skill progression metrics.",
      "Adaptive career pathing matching finished cohorts with corporate advancement opportunities."
    ],
    targetAudience: "HR heads, enterprise managers, tech professionals upskilling, and professional educators.",
    personas: [
      {
        name: "Victoria Sterling",
        role: "VP of HR",
        goal: "Upskill engineering teams in cloud architectures and track employee course engagement.",
        painPoint: "Pre-recorded training platforms show dismal 15% completion rates with zero team interaction."
      },
      {
        name: "Kenji Sato",
        role: "Full-Stack Developer",
        goal: "Learn advanced system design through cohort projects and complete assignments on time.",
        painPoint: "Balancing work with self-paced learning is hard, and video-only tutorials feel isolated."
      }
    ],
    wireframes: "Wireframed dual-panel cohort workspaces where the class video feeds and team notes are on the same page, allowing students to coordinate notes during live lectures.",
    visualStyles: "Professional, trust-inspiring teal and clean white layouts. Strict borders, clean typography, and badge grids are utilized for corporate analytics displays."
  },
  "ai-tool-finder": {
    introduction: "AI Tool Finder is a semantic directory listing generative AI applications. As the Creator and Solo PM, I built the scrapers, set up vector databases, and grew traffic to 100K+ pageviews.",
    techStack: ["Next.js", "Pinecone", "OpenAI Embeddings", "MongoDB", "Tailwind CSS", "Python (Scrapy)"],
    keyFeatures: [
      "Semantic search bar allowing users to describe workflows in plain text to get tool recommendations.",
      "Automated daily scraper indexing new AI tool launches and categories.",
      "Detailed review pages tracking tool pricing, user reviews, and video guides.",
      "Affiliate links setup and featured sponsorship slots for developers."
    ],
    targetAudience: "Developers, product designers, business owners, and technology leads searching for AI tooling.",
    personas: [
      {
        name: "Sarah Lindqvist",
        role: "Product Designer",
        goal: "Find and compare vector drawing AI tools to accelerate marketing banner mockups.",
        painPoint: "Browsing standard directories is tedious because search filters rely on tag matches instead of workflows."
      },
      {
        name: "Rajesh Malhotra",
        role: "Operations Lead",
        goal: "Source compliance AI tools that match his budget and integrate with current software.",
        painPoint: "AI products lack clear pricing listings, requiring booking sales calls just to see costs."
      }
    ],
    wireframes: "Designed search-first wireframes focusing on a search box and card-based results listings with detailed category tag filters on the sidebar.",
    visualStyles: "Clean tech style utilizing neon violet highlights on dark slate cards. Structured layout with bold borders matches the fast-paced nature of AI releases."
  },
  imaginate: {
    introduction: "Imaginate is a collaborative canvas-based design tool utilizing stable diffusion models. Serving as the PM, I worked on real-time multiplayer cursors and image generation workflows.",
    techStack: ["Next.js", "Socket.io", "Stable Diffusion API", "MongoDB", "Tailwind CSS", "Canvas API"],
    keyFeatures: [
      "Multiplayer design canvas allowing teams to sketch and generate images concurrently.",
      "Stable diffusion prompting interface with custom options for style transfer and image inpainting.",
      "Real-time asset library showing shared brand assets, styles, and prompt templates.",
      "Export wizard supporting multiple resolution file outputs for high-res prints."
    ],
    targetAudience: "Creative agency directors, marketing design teams, brand storyboarders, and freelance illustrators.",
    personas: [
      {
        name: "Emma Thorne",
        role: "Creative Director",
        goal: "Coordinate brand storyboard mockups with remote designers in real-time.",
        painPoint: "Exporting drafts and waiting for email reviews delays project cycles by days."
      },
      {
        name: "Hiroshi Tanaka",
        role: "Brand Designer",
        goal: "Generate high-fidelity ad creative bases using text prompts and edit them with brush tools.",
        painPoint: "Switching between AI generation sites and image editors disrupts focus."
      }
    ],
    wireframes: "Wireframed complex canvas controls with sidebar prompt cards, floating design tools, and list layouts showing active team collaborators at the top right.",
    visualStyles: "Design-centric layout utilizing white backgrounds, deep dark borders, and pastel green accents. Clean geometric cards make the UI feel highly artistic and minimal."
  },
  "journal-ai": {
    introduction: "Journal AI is an encrypted journaling application utilizing sentiment analysis to assist user reflection. Serving as the PM, I worked on privacy frameworks and SEO growth campaigns.",
    techStack: ["Next.js", "Web Crypto API", "Node.js", "MongoDB", "Tailwind CSS", "Natural NLP"],
    keyFeatures: [
      "Client-side encryption using AES-GCM, guaranteeing logs remain private and unreadable to developers.",
      "Lightweight NLP sentiment tracker showing weekly mood trends and trigger lists.",
      "Dynamic prompt engine suggesting therapeutic questions based on historical sentiments.",
      "SEO-optimized mindfulness hub and progress metrics tracker."
    ],
    targetAudience: "Mindfulness practitioners, mental health leads, and privacy-focused consumer app users.",
    personas: [
      {
        name: "Oliver Smith",
        role: "UX Researcher",
        goal: "Write daily logs, view mood progression graphs, and keep thoughts secure.",
        painPoint: "Fears personal logs might get leaked or analyzed by tech giants for targeting ads."
      },
      {
        name: "Mei Ling Chen",
        role: "Mindfulness Coach",
        goal: "Track trigger factors and reflect on questions suggested by sentiment graphs.",
        painPoint: "Standard diaries lack metrics or prompts to help users explore feelings."
      }
    ],
    wireframes: "Wireframed writing interfaces with minimal distractions. Designed smooth mood charting panels that display stress patterns clearly without feeling like cold analytical dashboards.",
    visualStyles: "Calming theme featuring pastel purple accents on soft gray backgrounds. Rounded elements and clean typography evoke focus, safety, and mindfulness."
  }
};

export default function ProjectDetail({ params }: PageProps) {
  const { slug } = React.use(params);
  
  const project = PROJECTS.find((p) => p.slug === slug);
  const caseStudy = CASE_STUDY_DATA[slug];

  if (!project) {
    notFound();
  }

  // Fallbacks if data is missing
  const introduction = caseStudy?.introduction || "Solving user friction points and delivering high-value product iterations as lead Product Manager.";
  const techStack = caseStudy?.techStack || ["Next.js", "React", "Tailwind CSS", "PostgreSQL"];
  const keyFeatures = caseStudy?.keyFeatures || [
    "Defined product requirements (PRDs) and translated business goals into sprint items.",
    "Led cross-functional alignments between design, engineering, and product marketing.",
    "Established product feedback loops using quantitative telemetry and qualitative user surveys."
  ];
  const targetAudience = caseStudy?.targetAudience || "Product teams and users searching for streamlined digital product workflows.";
  const personas = caseStudy?.personas || [
    {
      name: "Standard User",
      role: "Operations Lead",
      goal: "Automate repetitive daily workflows and save administrative time.",
      painPoint: "Spends multiple hours copy-pasting entries across legacy interfaces."
    }
  ];
  const wireframes = caseStudy?.wireframes || "Designed low-fidelity user flowcharts and validated UI screen steps with key testers to reduce conversion drop-offs.";
  const visualStyles = caseStudy?.visualStyles || "Visual styling features a solid grid layout, professional typography, and a cohesive brand color palette.";

  return (
    <main style={{ background: "#F1F1F1", minHeight: "100vh" }}>
      <Navbar />

      <section style={{ paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="container-xl">
          {/* Back Button with Neo-Brutalist design */}
          <div style={{ marginBottom: "32px" }}>
            <Link href="/projects" style={{ textDecoration: "none" }}>
              <motion.button
                whileHover={{ scale: 1.05, x: -5, boxShadow: "4px 4px 0px #2d2a2a" }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  background: "white",
                  color: "#2d2a2a",
                  fontSize: "0.9rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  border: "3px solid #2d2a2a",
                  boxShadow: "5px 5px 0px #2d2a2a",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                <ArrowLeft size={16} strokeWidth={2.5} />
                Back to Archive
              </motion.button>
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
            
            {/* 1. COVER IMAGE (FIRST SECTION) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "21/9",
                minHeight: "260px",
                background: "#2d2a2a",
                borderRadius: "24px",
                border: "4px solid #2d2a2a",
                boxShadow: `12px 12px 0px ${project.color}`,
                overflow: "hidden"
              }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
              {/* Floating overlay title */}
              <div 
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  background: "white",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  border: "3px solid #2d2a2a",
                  boxShadow: "4px 4px 0px #2d2a2a",
                  zIndex: 2
                }}
              >
                <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 900, textTransform: "uppercase", color: "#2d2a2a", margin: 0 }}>
                  {project.title}
                </h1>
              </div>
            </motion.div>

            {/* 2. INTRODUCTION */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                background: "white",
                padding: "40px",
                borderRadius: "24px",
                border: "4px solid #2d2a2a",
                boxShadow: "8px 8px 0px #2d2a2a"
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <span className="pill" style={{ background: "#ccfbf1", border: "2px solid #2d2a2a", color: "#2d2a2a", fontWeight: 800 }}>
                  INTRODUCTION
                </span>
                {project.highlyRated && (
                  <span className="pill" style={{ background: "#FFD700", border: "2px solid #2d2a2a", color: "#2d2a2a", fontWeight: 800 }}>
                    ★ HIGHLY RATED
                  </span>
                )}
              </div>
              
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", fontWeight: 900, textTransform: "uppercase", color: "#2d2a2a", marginBottom: "16px" }}>
                The Project Overview
              </h2>
              <p style={{ color: "#4a4a4a", fontSize: "1.15rem", fontWeight: 500, lineHeight: 1.6, margin: 0 }}>
                {introduction}
              </p>

              {/* Roles and Timeline Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", marginTop: "32px", paddingTop: "24px", borderTop: "2px dashed #e2e8f0" }}>
                <div>
                  <h4 style={{ fontSize: "0.8rem", fontWeight: 800, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>My Role</h4>
                  <span style={{ fontSize: "1.1rem", fontWeight: 900, color: "#2d2a2a" }}>{project.role}</span>
                </div>
                <div>
                  <h4 style={{ fontSize: "0.8rem", fontWeight: 800, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>Timeline</h4>
                  <span style={{ fontSize: "1.1rem", fontWeight: 900, color: "#2d2a2a" }}>{project.timeline}</span>
                </div>
                <div>
                  <h4 style={{ fontSize: "0.8rem", fontWeight: 800, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>Blended Impact</h4>
                  <span style={{ fontSize: "1.1rem", fontWeight: 900, color: project.color }}>{project.impact}</span>
                </div>
              </div>
            </motion.div>

            {/* 3. TECH STACK USED */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                background: "white",
                padding: "40px",
                borderRadius: "24px",
                border: "4px solid #2d2a2a",
                boxShadow: `8px 8px 0px ${project.color}`
              }}
            >
              <div style={{ marginBottom: "20px" }}>
                <span className="pill" style={{ background: "#fbcfe8", border: "2px solid #2d2a2a", color: "#2d2a2a", fontWeight: 800 }}>
                  ENGINEERING
                </span>
              </div>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", fontWeight: 900, textTransform: "uppercase", color: "#2d2a2a", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
                <Cpu size={24} /> Tech Stack Used
              </h2>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "24px" }}>
                {techStack.map((tech) => (
                  <div 
                    key={tech} 
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 20px",
                      borderRadius: "10px",
                      border: "2px solid #2d2a2a",
                      background: "#f1f5f9",
                      fontWeight: 700,
                      color: "#2d2a2a"
                    }}
                  >
                    <Terminal size={14} />
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 4. KEY FEATURES */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                background: "white",
                padding: "40px",
                borderRadius: "24px",
                border: "4px solid #2d2a2a",
                boxShadow: "8px 8px 0px #2d2a2a"
              }}
            >
              <div style={{ marginBottom: "20px" }}>
                <span className="pill" style={{ background: "#fef3c7", border: "2px solid #2d2a2a", color: "#2d2a2a", fontWeight: 800 }}>
                  CAPABILITIES
                </span>
              </div>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", fontWeight: 900, textTransform: "uppercase", color: "#2d2a2a", marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
                <Award size={24} /> Key Features Shipped
              </h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {keyFeatures.map((feature, idx) => (
                  <div key={idx} style={{ display: "flex", gap: "16px", alignItems: "start" }}>
                    <div style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: project.color,
                      border: "2px solid #2d2a2a",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontWeight: 800,
                      color: "white"
                    }}>
                      {idx + 1}
                    </div>
                    <p style={{ color: "#4a4a4a", fontSize: "1.1rem", fontWeight: 500, lineHeight: 1.5, margin: 0, paddingTop: "4px" }}>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 5. TARGET AUDIENCE & PERSONAS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                background: "white",
                padding: "40px",
                borderRadius: "24px",
                border: "4px solid #2d2a2a",
                boxShadow: `8px 8px 0px ${project.color}`
              }}
            >
              <div style={{ marginBottom: "20px" }}>
                <span className="pill" style={{ background: "#ccfbf1", border: "2px solid #2d2a2a", color: "#2d2a2a", fontWeight: 800 }}>
                  USER RESEARCH
                </span>
              </div>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", fontWeight: 900, textTransform: "uppercase", color: "#2d2a2a", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
                <Users size={24} /> Target Audience & Personas
              </h2>

              <p style={{ color: "#4a4a4a", fontSize: "1.1rem", fontWeight: 500, lineHeight: 1.6, marginBottom: "32px" }}>
                <strong>Target Audience Focus:</strong> {targetAudience}
              </p>

              {/* Persona Cards Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
                {personas.map((persona, index) => (
                  <div 
                    key={index} 
                    style={{
                      background: "#f8fafc",
                      padding: "24px",
                      borderRadius: "16px",
                      border: "3px solid #2d2a2a",
                      boxShadow: "4px 4px 0px #2d2a2a"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "16px", gap: "12px" }}>
                      <div>
                        <h4 style={{ fontSize: "1.2rem", fontWeight: 900, color: "#2d2a2a", margin: 0 }}>{persona.name}</h4>
                        <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#6b7280", textTransform: "uppercase" }}>{persona.role}</span>
                      </div>
                    </div>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", borderTop: "2px dashed #e2e8f0", paddingTop: "16px" }}>
                      <div>
                        <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#f97316", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "2px" }}>Goal</span>
                        <p style={{ fontSize: "0.95rem", color: "#4a4a4a", fontWeight: 500, margin: 0 }}>{persona.goal}</p>
                      </div>
                      <div>
                        <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#ef4444", textTransform: "uppercase", letterSpacing: "0.05em", display: "block", marginBottom: "2px" }}>Core Pain Point</span>
                        <p style={{ fontSize: "0.95rem", color: "#4a4a4a", fontWeight: 500, margin: 0 }}>{persona.painPoint}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 6. WIREFRAMING & VISUAL STYLES */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                background: "white",
                padding: "40px",
                borderRadius: "24px",
                border: "4px solid #2d2a2a",
                boxShadow: "8px 8px 0px #2d2a2a",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "40px"
              }}
            >
              {/* Wireframing Column */}
              <div>
                <div style={{ marginBottom: "20px" }}>
                  <span className="pill" style={{ background: "#fef3c7", border: "2px solid #2d2a2a", color: "#2d2a2a", fontWeight: 800 }}>
                    UX WIREFRAMES
                  </span>
                </div>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", fontWeight: 900, textTransform: "uppercase", color: "#2d2a2a", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <Layers size={24} /> Wireframing
                </h2>
                <p style={{ color: "#4a4a4a", fontSize: "1.05rem", fontWeight: 500, lineHeight: 1.6, margin: 0 }}>
                  {wireframes}
                </p>
              </div>

              {/* Visual Styles Column */}
              <div>
                <div style={{ marginBottom: "20px" }}>
                  <span className="pill" style={{ background: "#fbcfe8", border: "2px solid #2d2a2a", color: "#2d2a2a", fontWeight: 800 }}>
                    UI DESIGN
                  </span>
                </div>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", fontWeight: 900, textTransform: "uppercase", color: "#2d2a2a", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <Palette size={24} /> Visual Styles
                </h2>
                <p style={{ color: "#4a4a4a", fontSize: "1.05rem", fontWeight: 500, lineHeight: 1.6, marginBottom: "24px" }}>
                  {visualStyles}
                </p>

                {/* Swatch & Typography display */}
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  {/* Swatches */}
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "8px", border: "2.5px solid #2d2a2a", background: project.color }} />
                    <div style={{ width: "32px", height: "32px", borderRadius: "8px", border: "2.5px solid #2d2a2a", background: "#2d2a2a" }} />
                    <div style={{ width: "32px", height: "32px", borderRadius: "8px", border: "2.5px solid #2d2a2a", background: "#f8fafc" }} />
                  </div>
                  {/* Typography badges */}
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span style={{ padding: "6px 12px", border: "2px solid #2d2a2a", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 800, background: "white", color: "#2d2a2a" }}>Aa (Outfit)</span>
                    <span style={{ padding: "6px 12px", border: "2px solid #2d2a2a", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 800, background: "white", color: "#2d2a2a" }}>Aa (Inter)</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
