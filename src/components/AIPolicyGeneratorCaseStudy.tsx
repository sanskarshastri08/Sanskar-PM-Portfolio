"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import React from "react";

/* ── Brand Colors ─────────────────────────────────────────── */
const ACCENT_GREEN = "#EDF49B";
const ACCENT_BLUE = "#7FE4FE";
const ACCENT_ORANGE = "#FFB400";
const BORDER = "#e5e7eb";
const TEXT_DARK = "#111827";
const TEXT_MUTED = "#4b5563";
const BG_WHITE = "#ffffff";
const BG_LIGHT = "#fafafa";

/* ── Inline SVG Brand Icons ──────────────────────────────── */
const FigmaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 38 57" fill="none" style={{ flexShrink: 0 }}>
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABC9C"/>
    <path d="M0 47.5C0 42.2533 4.2533 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.2533 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
    <path d="M19 0H9.5C4.2533 0 0 4.2533 0 9.5C0 14.7467 4.2533 19 9.5 19H19V0Z" fill="#F24E1E"/>
    <path d="M19 19H9.5C4.2533 19 0 23.2533 0 28.5C0 33.7467 4.2533 38 9.5 38H19V19Z" fill="#A259FF"/>
    <path d="M19 0H28.5C33.7467 0 38 4.2533 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262"/>
  </svg>
);

const PhotoshopIcon = () => (
  <svg width="24" height="24" viewBox="0 0 256 256" style={{ flexShrink: 0 }}>
    <rect width="256" height="256" rx="40" fill="#001e36"/>
    <path d="M82.8 159.2h15c15 0 23.6-7.3 23.6-18.8 0-11-8-17.5-22.3-17.5H82.8v36.3zm0-56h12.8c12.7 0 20.3-6 20.3-16 0-9.6-7.6-15.2-19.7-15.2H82.8V103.2zM60 68h39.7c31.3 0 49 14 49 37.8 0 17-9 28.7-24 33.7 18.2 4.4 28.5 18 28.5 38.3 0 27-21.7 42.2-53.7 42.2H60V68zM177.3 162.7c3.8 8.8 12.8 14.5 24.3 14.5 12.7 0 18.5-5.5 18.5-13.8 0-21.5-39.8-13-39.8-39.7 0-14.7 11.8-25.7 31-25.7 17.3 0 27.2 7.7 31.8 17.7l-15.7 9c-3.3-6.2-9-10-16.2-10-10.7 0-14.7 5-14.7 11 0 19.3 39.8 11 39.8 39 0 17-13.2 27.7-34.8 27.7-21.3 0-33.8-10.3-39.7-22l15.7-7.7z" fill="#00c8ff"/>
  </svg>
);

const IllustratorIcon = () => (
  <svg width="24" height="24" viewBox="0 0 256 256" style={{ flexShrink: 0 }}>
    <rect width="256" height="256" rx="40" fill="#261300"/>
    <path d="M103.3 168.3H74.8l-6 19.7H46.7L80 84h19l33.3 104H110l-6.7-19.7zm-23.7-18.7h18.8L88.2 119l-8.6 30.6zM157.3 107c0-9 6.7-15.3 16-15.3s16 6.3 16 15.3c0 9-6.7 15.3-16 15.3s-16-6.3-16-15.3zm4 81v-52h24v52h-24z" fill="#ff9a00"/>
  </svg>
);

const ReactIcon = () => (
  <svg width="24" height="24" viewBox="-11.5 -10.23174 23 20.46348" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const NodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 256 256" style={{ flexShrink: 0 }}>
    <path d="M128 32a10 10 0 0 0-5-1.34l-80 46.19a10 10 0 0 0-5 8.66v92.38a10 10 0 0 0 5 8.66l80 46.19a10 10 0 0 0 10 0l80-46.19a10 10 0 0 0 5-8.66V85.51a10 10 0 0 0-5-8.66l-80-46.19A10 10 0 0 0 128 32zm-10 167.34l-60-34.64V95.3l60 34.64zm20 0V129.94l60-34.64v69.28z" fill="#339933"/>
  </svg>
);

const PythonIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M12 2c-5.5 0-5 2-5 4v2h5v1H5c-2 0-3 1-3 3.5s1 3.5 3 3.5h2v-2.5c0-1.5 1-2.5 2.5-2.5h5c1.5 0 2.5-1 2.5-2.5V6c0-2-1.5-4-5-4zm-2 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 18c5.5 0 5-2 5-4v-2h-5v-1h7c2 0 3-1 3-3.5s-1-3.5-3-3.5h-2v2.5c0 1.5-1 2.5-2.5 2.5h-5c-1.5 0-2.5 1-2.5 2.5V18c0 2 1.5 4 5 4zm2-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#3776AB" />
  </svg>
);

const GitIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M2.3 10.7l9 9c.4.4 1 .4 1.4 0l9-9c.4-.4.4-1 0-1.4l-9-9c-.4-.4-1-.4-1.4 0l-9 9c-.4.4-.4 1 0 1.4zm9.3-5.2c.2.2.2.6 0 .8l-2 2v4.8c.4.2.7.6.7 1.1 0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3c0-.5.3-.9.7-1.1V9.5c-.4-.2-.7-.6-.7-1.1 0-.7.6-1.3 1.3-1.3.4 0 .7.2.9.5l2-2c.2-.2.6-.2.8 0zm-2 9.2c-.3 0-.6.3-.6.6s.3.6.6.6.6-.3.6-.6-.3-.6-.6-.6z" fill="#F05032" />
  </svg>
);

const MakeMyPolicyLogo = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ flexShrink: 0 }}>
    {/* Page background */}
    <path d="M6 3h14l6 6v20H6V3z" fill="white" stroke="#111827" strokeWidth="2.2" strokeLinejoin="round"/>
    {/* Folded corner */}
    <path d="M20 3v6h6" fill="#f3f4f6" stroke="#111827" strokeWidth="2.2" strokeLinejoin="round"/>
    {/* Shield outline */}
    <path d="M10 15v3.5c0 3 2 4.5 4 5.5l2 1 2-1c2-1 4-2.5 4-5.5V15H10z" fill="#7FE4FE" stroke="#111827" strokeWidth="1.8" strokeLinejoin="round"/>
    {/* Green cross */}
    <path d="M16 11v8M12 15h8" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

/* ── Content Data ─────────────────────────────────────────── */
const TOOL_CATEGORIES = [
  {
    name: "Design Tools",
    tools: [
      { component: <FigmaIcon />, name: "Figma" },
      { component: <PhotoshopIcon />, name: "Photoshop" },
      { component: <IllustratorIcon />, name: "Illustrator" },
    ],
  },
  {
    name: "Development Tools",
    tools: [
      { component: <ReactIcon />, name: "React" },
      { component: <NodeIcon />, name: "Node.js" },
      { component: <PythonIcon />, name: "Python" },
    ],
  },
  {
    name: "Version Control",
    tools: [
      { component: <GitIcon />, name: "Git" },
    ],
  },
];

const KEY_FEATURES = [
  {
    title: "AI-Powered Generation",
    desc: "An AI-driven mechanism that intelligently crafts tailored policy documents necessary for various business needs.",
    bg: "#FFF9E6", // Light Orange/Yellow
    border: "#FFECA1",
    numColor: "#D97706"
  },
  {
    title: "Compliance Check",
    desc: "A dedicated section illustrating the tool's capability to analyze and adjust generated policies to meet the specific compliance standards required by law.",
    bg: "#EBFBFF", // Light Blue
    border: "#C2F2FF",
    numColor: "#0284C7"
  },
  {
    title: "Customization Capabilities",
    desc: "Users can customize their documents using the AI tool to ensure their policies not only comply with legal standards but also align with their brand voice and ethos.",
    bg: "#F5EFFF", // Light Purple
    border: "#E1D0FF",
    numColor: "#7C3AED"
  },
  {
    title: "Trust and Safety Features",
    desc: "Integrated with mechanisms like regular updates to policies as per changing laws and secure data handling processes that fortify user trust in the platform.",
    bg: "#F9FFE6", // Light Lime
    border: "#ECFFA1",
    numColor: "#65a30d"
  }
];

const AUDIENCE = [
  { name: "Small Business Owners", color: "#FF9800" },
  { name: "HR Managers", color: "#03A9F4" },
  { name: "Legal Consultants", color: "#8BC34A" },
  { name: "Corporate Executives", color: "#3F51B5" }
];

const DESIGN_ATTRS = [
  "Minimalist Aesthetic",
  "User-Centric Design",
  "Professional Theme",
  "Corporate Color Palette",
  "Interactive Elements",
  "Elegant"
];

const SWATCHES = [
  { hex: "#EDF49B", rgb: "RGB 237, 244, 155", cmyk: "CMYK 3, 0, 36, 4", name: "LIME-YELLOW" },
  { hex: "#7FE4FE", rgb: "RGB 127, 228, 254", cmyk: "CMYK 50, 10, 0, 0", name: "LIGHT BLUE" },
  { hex: "#FFB400", rgb: "RGB 255, 180, 0", cmyk: "CMYK 0, 29, 100, 0", name: "ORANGE" },
  { hex: "#FFFFFF", rgb: "RGB 255, 255, 255", cmyk: "CMYK 0, 0, 0, 0", name: "PURE WHITE" }
];

/* ── Section Header Component ── */
const SectionHeader = ({ num, label, title, color = ACCENT_ORANGE }: { num: string; label: string; title: React.ReactNode; color?: string }) => (
  <div style={{ position: "relative", marginBottom: "36px", display: "flex", flexDirection: "column" }}>
    <span style={{ fontSize: "5.5rem", fontWeight: 900, color: "#f3f4f6", fontFamily: "'Outfit', sans-serif", position: "absolute", top: "-40px", left: "-12px", zIndex: 0, lineHeight: 1, userSelect: "none" }}>
      {num}
    </span>
    <div style={{ position: "relative", zIndex: 1 }}>
      <span style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: color, marginBottom: "4px", display: "block" }}>
        {label}
      </span>
      <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.45rem", fontWeight: 800, color: TEXT_DARK, margin: 0, textTransform: "uppercase", letterSpacing: "-0.01em" }}>
        {title}
      </h2>
    </div>
  </div>
);

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, delay },
});

export default function AIPolicyGeneratorCaseStudy({ project }: { project: Project }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", background: BG_WHITE, width: "100%" }}>

      {/* ── 1. INTRODUCTION SECTION ── */}
      <motion.div {...fade(0)} style={{ padding: "54px 48px", borderBottom: `1px solid ${BORDER}`, background: BG_WHITE }}>
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.8rem", fontWeight: 900, letterSpacing: "0.45em", textTransform: "uppercase", color: TEXT_DARK, margin: "0 0 24px 0" }}>
            Introduction
          </h1>
          <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>
            <p style={{ fontSize: "0.98rem", color: TEXT_MUTED, lineHeight: 1.85, margin: 0 }}>
              Check out our latest landing page design for a new project, <span style={{ fontWeight: 800, color: TEXT_DARK }}>Make My Policy</span>. The project is an AI policy generator that aims to help businesses automate their policy-making tasks. This tool helps businesses focus on their core policy-making decisions while the document drafting part is handled by the artificial intelligence module.
            </p>
            <p style={{ fontSize: "0.98rem", color: TEXT_MUTED, lineHeight: 1.85, margin: 0 }}>
              The tool reduces human errors and increases the efficiency of business policies. It also reduces the time taken to produce policies that ultimately help faster implementation.
            </p>
          </div>
        </div>

        {/* Unified Dashboard Stats Row */}
        <div style={{ display: "flex", border: `1.5px solid ${BORDER}`, background: BG_WHITE, borderRadius: "0", overflow: "hidden", marginBottom: "20px", flexWrap: "wrap" }}>
          {[
            { label: "My Role", value: project.role || "Solo Product Manager", accent: false },
            { label: "Timeline", value: project.timeline || "2 Months", accent: false },
            { label: "Impact", value: project.impact || "Generated over 5,000+ policies within the first month; featured as Product of the Day on Product Hunt.", accent: true }
          ].map((s, idx) => (
            <div
              key={s.label}
              style={{
                flex: "1 1 240px",
                padding: "24px 28px",
                borderRight: idx < 2 ? `1.5px solid ${BORDER}` : "none",
                display: "flex",
                flexDirection: "column",
                gap: "6px"
              }}
            >
              <span style={{ fontSize: "0.68rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {s.label}
              </span>
              <span style={{ fontSize: "0.98rem", fontWeight: 700, color: s.accent ? ACCENT_ORANGE : TEXT_DARK, lineHeight: 1.45 }}>
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── 2. KEY FEATURES & TECH STACKS SPLIT SECTION ── */}
      <motion.div {...fade(0.05)} style={{ padding: "54px 48px", borderBottom: `1px solid ${BORDER}`, background: BG_WHITE }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "54px" }}>
          
          {/* Left Column — Features list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.2rem", fontWeight: 900, color: TEXT_DARK, letterSpacing: "0.02em", margin: "0 0 8px 0", textTransform: "uppercase" }}>
              Key Features of Make My Policy
            </h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {KEY_FEATURES.map((f, idx) => (
                <div
                  key={f.title}
                  style={{
                    background: f.bg,
                    border: `1.5px solid ${f.border}`,
                    padding: "24px 28px",
                    borderRadius: "0",
                    position: "relative"
                  }}
                >
                  <span style={{ position: "absolute", top: "20px", right: "24px", fontSize: "0.8rem", fontWeight: 950, color: f.numColor, fontFamily: "'Outfit', sans-serif" }}>
                    {`0${idx + 1}`}
                  </span>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: TEXT_DARK, margin: "0 0 8px 0" }}>
                    {f.title}
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Tech Stacks Used & Brand Logo Card */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.2rem", fontWeight: 900, color: TEXT_DARK, letterSpacing: "0.02em", margin: 0, textTransform: "uppercase" }}>
                Tech Stacks Used
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {TOOL_CATEGORIES.map((cat) => (
                  <div key={cat.name} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <span style={{ fontSize: "0.68rem", fontWeight: 700, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {cat.name}
                    </span>
                    <div style={{ display: "flex", gap: "10px" }}>
                      {cat.tools.map((t, idx) => (
                        <div
                          key={idx}
                          style={{
                            width: "48px",
                            height: "48px",
                            background: BG_WHITE,
                            border: `1px solid ${BORDER}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "0",
                            boxShadow: "none"
                          }}
                          title={t.name}
                        >
                          {t.component}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slogan Logo Card Box */}
            <div style={{
              background: BG_LIGHT,
              border: `1.5px solid ${BORDER}`,
              padding: "24px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginTop: "auto"
            }}>
              <MakeMyPolicyLogo size={48} />
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontWeight: 800, fontSize: "1.2rem", color: TEXT_DARK }}>
                  Make My Policy
                </span>
                <span style={{ fontSize: "0.72rem", color: TEXT_MUTED, fontWeight: 500 }}>
                  Infinite Options, One PerfectPolicy.
                </span>
              </div>
            </div>

          </div>

        </div>
      </motion.div>

      {/* ── 3. TARGET AUDIENCE SECTION ── */}
      <motion.div {...fade(0.1)} style={{ padding: "54px 48px", borderBottom: `1px solid ${BORDER}`, background: BG_WHITE }}>
        <SectionHeader num="03" label="User Research" title="Target Audience" color={ACCENT_ORANGE} />

        <div style={{
          background: "#f0f7f7", // light pastel blue/gray
          border: `1.5px solid ${BORDER}`,
          padding: "44px 32px",
          borderRadius: "0",
          display: "flex",
          flexDirection: "column",
          gap: "28px"
        }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: TEXT_DARK, margin: 0, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'Outfit', sans-serif" }}>
            Target Audience
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", width: "100%" }}>
            {AUDIENCE.map((a) => (
              <div
                key={a.name}
                style={{
                  padding: "16px 20px",
                  background: BG_WHITE,
                  borderRadius: "0",
                  border: `1.5px solid ${BORDER}`,
                  color: TEXT_DARK,
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "none"
                }}
              >
                {/* Custom colored user avatar icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={a.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                {a.name}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── 4. TARGET PERSONAS SECTION ── */}
      <motion.div {...fade(0.15)} style={{ padding: "54px 48px", borderBottom: `1px solid ${BORDER}`, background: BG_WHITE }}>
        <SectionHeader num="04" label="Personas" title="Target Personas" color={ACCENT_ORANGE} />

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          
          {/* Persona 1: Lisa */}
          <div style={{
            background: "#fffdf0", // Subtle orange-yellow container background
            border: `1.5px solid ${ACCENT_ORANGE}`,
            padding: "28px",
            borderRadius: "0"
          }}>
            {/* Header info bar */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "24px", paddingBottom: "20px", borderBottom: `1px solid ${BORDER}` }}>
              <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
                  alt="Lisa"
                  style={{ width: "80px", height: "80px", border: `2px solid ${ACCENT_ORANGE}`, objectFit: "cover", borderRadius: "0" }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEXT_DARK, margin: 0 }}>
                    Lisa
                  </h3>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: ACCENT_ORANGE }}>
                    Small Business Owner
                  </span>
                </div>
              </div>

              {/* About card section */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase" }}>
                  About
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "0.8rem", color: TEXT_DARK, fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
                    🎂 34
                  </span>
                  <span style={{ fontSize: "0.8rem", color: TEXT_DARK, fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
                    💼 Owner of a tech startup
                  </span>
                </div>
              </div>
            </div>

            {/* Goals Banner */}
            <div style={{ marginTop: "20px" }}>
              <span style={{
                background: ACCENT_ORANGE,
                color: BG_WHITE,
                padding: "4px 16px",
                fontSize: "0.75rem",
                fontWeight: 800,
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "10px"
              }}>
                Goals:
              </span>
              <p style={{ fontSize: "0.95rem", color: TEXT_DARK, fontWeight: 700, margin: 0, lineHeight: 1.5 }}>
                To implement effective business policies quickly and efficiently.
              </p>
            </div>

            {/* Split Details columns */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", marginTop: "24px" }}>
              
              {/* Challenges list */}
              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: TEXT_DARK, margin: "0 0 12px 0", textTransform: "uppercase", letterSpacing: "0.02em" }}>
                  Challenges:
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    "Limited time and resources to draft detailed policies.",
                    "Ensuring policies comply with legal standards without hiring a full-time legal team.",
                    "Balancing policy creation with other critical business operations."
                  ].map((c, i) => (
                    <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                      <span style={{ color: ACCENT_ORANGE, fontSize: "1.1rem", lineHeight: 0.9 }}>•</span>
                      <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, lineHeight: 1.5, margin: 0 }}>
                        {c}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How Tool Helps list */}
              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: TEXT_DARK, margin: "0 0 12px 0", textTransform: "uppercase", letterSpacing: "0.02em" }}>
                  How Make My Policy Helps:
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    "Provides an AI-driven solution to quickly generate tailored policy documents.",
                    "Ensures compliance with legal standards through built-in compliance checks.",
                    "Offers an intuitive and user-friendly interface, simplifying the policy creation process.",
                    "Allows customization of documents to align with her brand voice and ethos."
                  ].map((h, i) => (
                    <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                      <span style={{ color: ACCENT_ORANGE, fontSize: "1.1rem", lineHeight: 0.9 }}>•</span>
                      <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, lineHeight: 1.5, margin: 0 }}>
                        {h}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Persona 2: David */}
          <div style={{
            background: "#f0f9ff", // Subtle blue container background
            border: `1.5px solid ${ACCENT_BLUE}`,
            padding: "28px",
            borderRadius: "0"
          }}>
            {/* Header info bar */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "24px", paddingBottom: "20px", borderBottom: `1px solid ${BORDER}` }}>
              <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
                  alt="David"
                  style={{ width: "80px", height: "80px", border: `2px solid ${ACCENT_BLUE}`, objectFit: "cover", borderRadius: "0" }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEXT_DARK, margin: 0 }}>
                    David
                  </h3>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0284C7" }}>
                    HR Manager
                  </span>
                </div>
              </div>

              {/* About card section */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase" }}>
                  About
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "0.8rem", color: TEXT_DARK, fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
                    🎂 42
                  </span>
                  <span style={{ fontSize: "0.8rem", color: TEXT_DARK, fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
                    💼 HR Manager at a mid-sized corporation
                  </span>
                </div>
              </div>
            </div>

            {/* Goals Banner */}
            <div style={{ marginTop: "20px" }}>
              <span style={{
                background: ACCENT_BLUE,
                color: TEXT_DARK,
                padding: "4px 16px",
                fontSize: "0.75rem",
                fontWeight: 800,
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "10px"
              }}>
                Goals:
              </span>
              <p style={{ fontSize: "0.95rem", color: TEXT_DARK, fontWeight: 700, margin: 0, lineHeight: 1.5 }}>
                To create and update company policies efficiently and ensure compliance.
              </p>
            </div>

            {/* Split Details columns */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", marginTop: "24px" }}>
              
              {/* Challenges list */}
              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: TEXT_DARK, margin: "0 0 12px 0", textTransform: "uppercase", letterSpacing: "0.02em" }}>
                  Challenges:
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    "Keeping up with frequent changes in compliance standards and regulations.",
                    "Ensuring that all policies are up-to-date and accurately reflect current laws.",
                    "Managing multiple policy documents and ensuring consistency across them."
                  ].map((c, i) => (
                    <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                      <span style={{ color: "#0284C7", fontSize: "1.1rem", lineHeight: 0.9 }}>•</span>
                      <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, lineHeight: 1.5, margin: 0 }}>
                        {c}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How Tool Helps list */}
              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: TEXT_DARK, margin: "0 0 12px 0", textTransform: "uppercase", letterSpacing: "0.02em" }}>
                  How Make My Policy Helps:
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    "Provides regular updates to policies as per changing laws, ensuring compliance.",
                    "Facilitates easy customization and updates of policy documents.",
                    "Offers a comprehensive tool to manage and organize multiple policy documents.",
                    "Ensures secure data handling, building trust in the platform."
                  ].map((h, i) => (
                    <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                      <span style={{ color: "#0284C7", fontSize: "1.1rem", lineHeight: 0.9 }}>•</span>
                      <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, lineHeight: 1.5, margin: 0 }}>
                        {h}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </motion.div>

      {/* ── 5. VISUAL STYLES SECTION ── */}
      <motion.div {...fade(0.2)} style={{ padding: "54px 48px", background: BG_WHITE }}>
        <SectionHeader num="05" label="UI Design" title="Visual Styles" color={ACCENT_ORANGE} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>

          {/* Left Column — Lifestyle Image with styled labels */}
          <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", border: `1.5px solid ${BORDER}`, overflow: "hidden", borderRadius: "0", minHeight: "360px" }}>
            <img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
              alt="Collaboration Workspace" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* Absolute Badges on Image */}
            <span style={{ position: "absolute", top: "10%", left: "10%", padding: "6px 14px", background: "#FFEAA7", border: "1.5px solid #2d2a2a", color: "#2d2a2a", fontSize: "0.72rem", fontWeight: 800 }}>
              Minimalist Aesthetic
            </span>
            <span style={{ position: "absolute", top: "10%", right: "10%", padding: "6px 14px", background: BG_WHITE, border: "1.5px solid #2d2a2a", color: "#2d2a2a", fontSize: "0.72rem", fontWeight: 800 }}>
              User-Centric Design
            </span>
            <span style={{ position: "absolute", top: "28%", left: "10%", padding: "6px 14px", background: BG_WHITE, border: "1.5px solid #2d2a2a", color: "#2d2a2a", fontSize: "0.72rem", fontWeight: 800 }}>
              Professional Theme
            </span>
            <span style={{ position: "absolute", top: "28%", right: "8%", padding: "6px 14px", background: "#C2F2FF", border: "1.5px solid #2d2a2a", color: "#2d2a2a", fontSize: "0.72rem", fontWeight: 800 }}>
              Corporate Color Palette
            </span>
            <span style={{ position: "absolute", top: "46%", left: "10%", padding: "6px 14px", background: "#FFD2D2", border: "1.5px solid #2d2a2a", color: "#2d2a2a", fontSize: "0.72rem", fontWeight: 800 }}>
              Interactive Elements
            </span>
            <span style={{ position: "absolute", top: "46%", right: "32%", padding: "6px 14px", background: "#F5FEE7", border: "1.5px solid #2d2a2a", color: "#2d2a2a", fontSize: "0.72rem", fontWeight: 800 }}>
              Elegant
            </span>
          </div>

          {/* Right Column — Brand Colors, Logo and Typography Specimen */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* Logo grid panels */}
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "16px" }}>
              {/* White panel with full logo */}
              <div style={{
                background: BG_WHITE,
                border: `1.5px solid ${BORDER}`,
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0",
                minHeight: "120px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <MakeMyPolicyLogo size={36} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontWeight: 800, fontSize: "1.1rem", color: TEXT_DARK }}>Make My Policy</span>
                    <span style={{ fontSize: "0.62rem", color: TEXT_MUTED, fontWeight: 500 }}>Infinite Options, One PerfectPolicy.</span>
                  </div>
                </div>
              </div>

              {/* Light Green panel with logo icon only */}
              <div style={{
                background: ACCENT_GREEN,
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0",
                minHeight: "120px"
              }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  background: BG_WHITE,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1.5px solid ${BORDER}`,
                  borderRadius: "12px",
                  boxShadow: "none"
                }}>
                  <MakeMyPolicyLogo size={32} />
                </div>
              </div>
            </div>

            {/* Colors Swatches Block (Pantone Cards) */}
            <div style={{ background: BG_WHITE, border: `1.5px solid ${BORDER}`, padding: "24px", borderRadius: "0" }}>
              <h4 style={{ fontSize: "0.72rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "20px" }}>
                Brand Colors
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
                {SWATCHES.map((c) => (
                  <div key={c.hex} style={{ border: `1px solid ${BORDER}`, borderRadius: "0", background: BG_WHITE, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                    <div style={{ background: c.hex, width: "100%", height: "80px", borderBottom: `1px solid ${BORDER}` }} />
                    <div style={{ padding: "8px 10px", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "0.52rem", fontWeight: 800, color: TEXT_DARK, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {c.name}
                      </span>
                      <span style={{ fontSize: "0.45rem", fontWeight: 600, color: TEXT_MUTED }}>
                        {c.hex}
                      </span>
                      <span style={{ fontSize: "0.42rem", fontWeight: 700, color: TEXT_MUTED }}>
                        {c.rgb}
                      </span>
                      <span style={{ fontSize: "0.4rem", fontWeight: 700, color: ACCENT_ORANGE, letterSpacing: "0.02em" }}>
                        {c.cmyk}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Card Specimen (Inter) */}
            <div style={{ background: BG_WHITE, border: `1.5px solid ${BORDER}`, padding: "24px", borderRadius: "0", fontFamily: "Inter, sans-serif" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: ACCENT_ORANGE }} />
                  <span style={{ fontSize: "0.72rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Typography Specimen
                  </span>
                </div>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  INTER
                </span>
              </div>

              <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: "14px", marginBottom: "14px" }}>
                <p style={{ fontSize: "0.62rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
                  Character Set
                </p>
                <p style={{ fontSize: "0.78rem", color: TEXT_DARK, fontWeight: 500, letterSpacing: "0.05em", lineHeight: 1.4, margin: 0 }}>
                  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
                  a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
                  0 1 2 3 4 5 6 7 8 9 ! @ # $ % & *
                </p>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  {["Regular", "Medium", "Semi bold", "Bold"].map((w, idx) => (
                    <span key={w} style={{ fontSize: "0.8rem", color: TEXT_DARK, fontWeight: [400, 500, 600, 700][idx] }}>
                      {w}
                    </span>
                  ))}
                </div>
                <span style={{ fontSize: "4.5rem", fontWeight: 700, color: TEXT_DARK, lineHeight: 0.9, userSelect: "none" }}>
                  Aa
                </span>
              </div>
            </div>

          </div>

        </div>
      </motion.div>

    </div>
  );
}
