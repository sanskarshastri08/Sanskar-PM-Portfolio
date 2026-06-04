"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import React from "react";

/* ── Brand Colors ─────────────────────────────────────────── */
const ACCENT = "#226BF9";    // Primary Brand Blue
const BORDER = "#e5e7eb";    // Clean Light Gray Border
const TEXT_DARK = "#111827"; // Dark Charcoal Text
const TEXT_MUTED = "#4b5563"; // Muted Gray Text
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

const MongoDBIcon = () => (
  <svg width="24" height="24" viewBox="0 0 256 256" fill="none" style={{ flexShrink: 0 }}>
    <path d="M128 0c-35.8 54.3-39 122.9 5.3 162.7 10 9 21.6 15.6 34.7 19.8V256l-13-13v-53.5C214.2 165.7 207 108.6 128 0z" fill="#47A248" />
    <path d="M128 0c35.8 54.3 39 122.9-5.3 162.7-10 9-21.6 15.6-34.7 19.8V256l13-13v-53.5C41.8 165.7 49 108.6 128 0z" fill="#3F3F3F" />
  </svg>
);

const GitIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M2.3 10.7l9 9c.4.4 1 .4 1.4 0l9-9c.4-.4.4-1 0-1.4l-9-9c-.4-.4-1-.4-1.4 0l-9 9c-.4.4-.4 1 0 1.4zm9.3-5.2c.2.2.2.6 0 .8l-2 2v4.8c.4.2.7.6.7 1.1 0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3c0-.5.3-.9.7-1.1V9.5c-.4-.2-.7-.6-.7-1.1 0-.7.6-1.3 1.3-1.3.4 0 .7.2.9.5l2-2c.2-.2.6-.2.8 0zm-2 9.2c-.3 0-.6.3-.6.6s.3.6.6.6.6-.3.6-.6-.3-.6-.6-.6z" fill="#F05032" />
  </svg>
);

/* ── Custom SVGs for BElink ── */
const TripleWaveIcon = ({ color = ACCENT }: { color?: string }) => (
  <svg width="36" height="12" viewBox="0 0 32 12" fill="none" style={{ display: "inline-block", flexShrink: 0 }}>
    <path d="M0 6 L4 2 L8 6 L12 2 L16 6 L20 2 L24 6 L28 2 L32 6" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M0 10 L4 6 L8 10 L12 6 L16 10 L20 6 L24 10 L28 6 L32 10" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BelinkLogoIcon = ({ color = ACCENT, size = 24 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const CheckboxIcon = ({ color = ACCENT }: { color?: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <rect width="20" height="20" x="2" y="2" fill={color} />
    <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
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
      { component: <MongoDBIcon />, name: "MongoDB" },
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
    title: "URL SHORTENING",
    desc: "Instantly create short, memorable URLs that are easy to share and manage."
  },
  {
    title: "CUSTOM URL ALIASES",
    desc: "Tailor your shortened URLs with custom aliases that reflect your brand or campaign."
  },
  {
    title: "ADVANCED ANALYTICS",
    desc: "Track clicks, geographic data, and referral sources with detailed analytics to measure the performance of your links."
  },
  {
    title: "LINK MANAGEMENT",
    desc: "Organize and manage your links with tags, folders, and bulk editing options for efficient handling."
  },
  {
    title: "QR CODE GENERATION",
    desc: "Generate QR codes for your shortened URLs, making it easier to share and promote across various channels."
  },
  {
    title: "API INTEGRATION",
    desc: "Seamlessly integrate URL shortening capabilities into your existing platforms with our robust API."
  }
];

const AUDIENCE = [
  "Digital Marketers",
  "Social Media Managers",
  "Small Business Owners",
  "Content Creators"
];

const DESIGN_ATTRS = [
  "Bold typography",
  "Vibrant accents",
  "Modern",
  "Contemporary",
  "Tech-Chic",
  "Clean"
];

const SWATCHES = [
  { hex: "#226BF9", rgb: "RGB 34, 107, 249", cmyk: "CMYK 86, 57, 0, 2", name: "BE BLUE" },
  { hex: "#040404", rgb: "RGB 4, 4, 4", cmyk: "CMYK 0, 0, 0, 98", name: "CHARCOAL" },
  { hex: "#F5F5F5", rgb: "RGB 245, 245, 245", cmyk: "CMYK 0, 0, 0, 4", name: "COOL GRAY" },
  { hex: "#FFFFFF", rgb: "RGB 255, 255, 255", cmyk: "CMYK 0, 0, 0, 0", name: "PURE WHITE" }
];

/* ── Section Header Component ── */
const SectionHeader = ({ num, label, title, color = ACCENT }: { num: string; label: string; title: React.ReactNode; color?: string }) => (
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

export default function BelinkCaseStudy({ project }: { project: Project }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", background: BG_WHITE, width: "100%" }}>

      {/* ── 1. INTRODUCTION SECTION ── */}
      <motion.div {...fade(0)} style={{ padding: "54px 48px", borderBottom: `1px solid ${BORDER}`, background: BG_WHITE }}>
        <div style={{ textAlign: "center", marginBottom: "44px" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
            <TripleWaveIcon />
          </div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.8rem", fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase", color: TEXT_DARK, margin: "0 0 24px 0" }}>
            Introduction
          </h1>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontSize: "0.98rem", color: TEXT_MUTED, lineHeight: 1.85, margin: 0 }}>
              Our URL Shortener offers a seamless way to create, manage, and track shortened URLs. Designed with ease of use and powerful analytics in mind, this all-in-one platform provides businesses and individuals with the tools they need to optimize their link management strategies. Whether you're looking to simplify your URLs, track engagement, or gain insights into your audience's behavior, this platform delivers comprehensive solutions in a sleek, user-friendly interface.
            </p>
          </div>
        </div>

        {/* Unified Dashboard Stats Row */}
        <div style={{ display: "flex", border: `1.5px solid ${BORDER}`, background: BG_WHITE, borderRadius: "0", overflow: "hidden", marginBottom: "36px", flexWrap: "wrap" }}>
          {[
            { label: "My Role", value: project.role || "Product Manager", accent: false },
            { label: "Timeline", value: project.timeline || "3 Months", accent: false },
            { label: "Impact", value: project.impact || "Processed 50M+ requests per month with 99.99% uptime; improved marketing CTRs by 18% for clients.", accent: true }
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
              <span style={{ fontSize: "0.98rem", fontWeight: 700, color: s.accent ? ACCENT : TEXT_DARK, lineHeight: 1.45 }}>
                {s.value}
              </span>
            </div>
          ))}
        </div>

        {/* Tech Stacks Used horizontal bar (bright blue background) */}
        <div style={{
          background: ACCENT,
          padding: "36px 40px",
          borderRadius: "0",
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
          gap: "24px"
        }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: BG_WHITE, margin: 0, fontFamily: "'Outfit', sans-serif", letterSpacing: "0.02em", textTransform: "uppercase" }}>
            Tech Stacks Used
          </h3>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px 60px" }}>
            {TOOL_CATEGORIES.map((cat) => (
              <div key={cat.name} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#93c5fd", textTransform: "uppercase", letterSpacing: "0.05em" }}>
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
                        border: "none",
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
      </motion.div>

      {/* ── 2. KEY FEATURES SECTION ── */}
      <motion.div {...fade(0.05)} style={{ padding: "54px 48px", borderBottom: `1px solid ${BORDER}`, background: BG_WHITE }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "36px" }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.45rem", fontWeight: 800, color: TEXT_DARK, margin: 0, textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px" }}>
            Key Features <span style={{ fontSize: "1.6rem" }}>🔥</span>
          </h2>
          <TripleWaveIcon />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {KEY_FEATURES.map((f) => (
            <div key={f.title} style={{ background: BG_LIGHT, border: `1.5px solid ${BORDER}`, padding: "28px 32px", borderRadius: "0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", borderBottom: `1.5px solid ${BORDER}`, paddingBottom: "10px" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: TEXT_DARK, margin: 0, letterSpacing: "0.02em" }}>
                  {f.title}:
                </h3>
                {/* Accent blue bar */}
                <div style={{ width: "40px", height: "4px", backgroundColor: ACCENT }} />
              </div>
              <p style={{ fontSize: "0.88rem", color: TEXT_MUTED, lineHeight: 1.65, margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── 3. TARGET AUDIENCE SECTION ── */}
      <motion.div {...fade(0.1)} style={{ padding: "54px 48px", borderBottom: `1px solid ${BORDER}`, background: BG_WHITE }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
          <TripleWaveIcon />
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.45rem", fontWeight: 800, color: TEXT_DARK, margin: 0, textTransform: "uppercase" }}>
            Target Audience
          </h2>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {AUDIENCE.map((a) => (
            <span
              key={a}
              style={{
                padding: "16px 36px",
                background: BG_WHITE,
                borderRadius: "0",
                border: `1.5px solid ${BORDER}`,
                color: TEXT_DARK,
                fontSize: "0.9rem",
                fontWeight: 800,
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "none"
              }}
            >
              {/* Blue circle user icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              {a}
            </span>
          ))}
        </div>
      </motion.div>

      {/* ── 4. TARGET PERSONAS SECTION ── */}
      <motion.div {...fade(0.15)} style={{ padding: "54px 48px", borderBottom: `1px solid ${BORDER}`, background: BG_WHITE }}>
        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.45rem", fontWeight: 800, color: TEXT_DARK, marginBottom: "36px", textTransform: "uppercase" }}>
          Target Personas
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "32px" }}>
          
          {/* Ava's Dossier Card */}
          <div style={{ display: "flex", flexDirection: "column", border: `1.5px solid ${BORDER}`, borderRadius: "0", overflow: "hidden" }}>
            {/* White Profile Header */}
            <div style={{ background: BG_WHITE, padding: "24px 28px", borderBottom: `1.5px solid ${BORDER}`, display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEXT_DARK, margin: 0 }}>
                  Ava
                </h3>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: ACCENT }}>
                  Digital Marketer
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
                  <span style={{ padding: "4px 8px", background: BG_LIGHT, border: `1px solid ${BORDER}`, fontSize: "0.72rem", fontWeight: 700, color: TEXT_DARK, display: "flex", alignItems: "center", gap: "4px" }}>
                    🎂 29
                  </span>
                  <span style={{ padding: "4px 8px", background: BG_LIGHT, border: `1px solid ${BORDER}`, fontSize: "0.72rem", fontWeight: 700, color: TEXT_DARK, display: "flex", alignItems: "center", gap: "4px" }}>
                    💼 Digital Marketing Specialist
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
                alt="Ava"
                style={{ width: "68px", height: "68px", border: `2.5px solid ${ACCENT}`, objectFit: "cover", flexShrink: 0, borderRadius: "0" }}
              />
            </div>

            {/* Dark Gray Details Section */}
            <div style={{ background: "#374151", padding: "28px", flex: 1, display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 6px 0" }}>
                  Goals:
                </h4>
                <p style={{ fontSize: "0.9rem", color: BG_WHITE, lineHeight: 1.6, margin: 0 }}>
                  To track the effectiveness of her marketing campaigns and optimize engagement.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 10px 0" }}>
                  Challenges:
                </h4>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <CheckboxIcon color={ACCENT} />
                  <p style={{ fontSize: "0.88rem", color: BG_WHITE, lineHeight: 1.5, margin: 0 }}>
                    Needs a reliable tool to manage a large volume of links while gathering detailed analytics.
                  </p>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 12px 0" }}>
                  How the URL Shortener Helps:
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    { title: "Advanced Analytics", desc: "Provides insights into click-through rates, geographic locations, and referral sources, helping her refine her campaigns." },
                    { title: "Custom URL Aliases", desc: "Allows her to create branded, recognizable links that resonate with her target audience." },
                    { title: "Link Management", desc: "Offers efficient tools to organize and categorize her links for easy access and reporting." }
                  ].map((h, i) => (
                    <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <CheckboxIcon color={ACCENT} />
                      <p style={{ fontSize: "0.85rem", color: BG_WHITE, lineHeight: 1.5, margin: 0 }}>
                        <span style={{ fontWeight: 800 }}>{h.title}:</span> {h.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ethan's Dossier Card */}
          <div style={{ display: "flex", flexDirection: "column", border: `1.5px solid ${BORDER}`, borderRadius: "0", overflow: "hidden" }}>
            {/* White Profile Header */}
            <div style={{ background: BG_WHITE, padding: "24px 28px", borderBottom: `1.5px solid ${BORDER}`, display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: TEXT_DARK, margin: 0 }}>
                  Ethan
                </h3>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: ACCENT }}>
                  Small Business Owner
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
                  <span style={{ padding: "4px 8px", background: BG_LIGHT, border: `1px solid ${BORDER}`, fontSize: "0.72rem", fontWeight: 700, color: TEXT_DARK, display: "flex", alignItems: "center", gap: "4px" }}>
                    🎂 38
                  </span>
                  <span style={{ padding: "4px 8px", background: BG_LIGHT, border: `1px solid ${BORDER}`, fontSize: "0.72rem", fontWeight: 700, color: TEXT_DARK, display: "flex", alignItems: "center", gap: "4px" }}>
                    💼 E-commerce Store Owner
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80"
                alt="Ethan"
                style={{ width: "68px", height: "68px", border: `2.5px solid ${ACCENT}`, objectFit: "cover", flexShrink: 0, borderRadius: "0" }}
              />
            </div>

            {/* Dark Gray Details Section */}
            <div style={{ background: "#374151", padding: "28px", flex: 1, display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 6px 0" }}>
                  Goals:
                </h4>
                <p style={{ fontSize: "0.9rem", color: BG_WHITE, lineHeight: 1.6, margin: 0 }}>
                  To simplify and brand his product URLs for better customer engagement.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 10px 0" }}>
                  Challenges:
                </h4>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <CheckboxIcon color={ACCENT} />
                  <p style={{ fontSize: "0.88rem", color: BG_WHITE, lineHeight: 1.5, margin: 0 }}>
                    Struggles with long, complex URLs that are difficult to share and remember.
                  </p>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 12px 0" }}>
                  How the URL Shortener Helps:
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    { title: "URL Shortening", desc: "Transforms long, cumbersome product links into short, easy-to-share URLs." },
                    { title: "QR Code Generation", desc: "Enables him to create QR codes for his products, making it easier for customers to access his store." },
                    { title: "API Integration", desc: "Seamlessly integrates with his e-commerce platform, allowing for automated link generation." }
                  ].map((h, i) => (
                    <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <CheckboxIcon color={ACCENT} />
                      <p style={{ fontSize: "0.85rem", color: BG_WHITE, lineHeight: 1.5, margin: 0 }}>
                        <span style={{ fontWeight: 800 }}>{h.title}:</span> {h.desc}
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
        <SectionHeader num="05" label="UI Design" title="Visual Styles" color={ACCENT} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>

          {/* Left Column — Logo Mockups and Swatches */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* Top row: Logo panels */}
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "16px" }}>
              
              {/* White panel with Belink logo wordmark */}
              <div style={{
                background: BG_WHITE,
                border: `1.5px solid ${BORDER}`,
                padding: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0",
                minHeight: "120px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <BelinkLogoIcon size={32} />
                  <span style={{ fontWeight: 900, fontSize: "1.6rem", fontFamily: "'Outfit', sans-serif", color: TEXT_DARK, letterSpacing: "0.02em" }}>BELINK</span>
                </div>
              </div>

              {/* Blue panel with white logo icon */}
              <div style={{
                background: ACCENT,
                padding: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0",
                minHeight: "120px"
              }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <BelinkLogoIcon color="white" size={36} />
                </div>
              </div>
            </div>

            {/* Bottom row: Color Pantone cards */}
            <div style={{ background: BG_WHITE, border: `1.5px solid ${BORDER}`, padding: "24px", borderRadius: "0" }}>
              <h4 style={{ fontSize: "0.72rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "20px" }}>
                Brand Colors
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
                {SWATCHES.map((c, index) => (
                  <div key={index} style={{ border: `1px solid ${BORDER}`, borderRadius: "0", background: BG_WHITE, overflow: "hidden", display: "flex", flexDirection: "column" }}>
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
                      <span style={{ fontSize: "0.4rem", fontWeight: 700, color: ACCENT, letterSpacing: "0.02em" }}>
                        {c.cmyk}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column — Typography and Design Attributes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* Typography Card Specimen (Outfit) */}
            <div style={{ background: BG_WHITE, border: `1.5px solid ${BORDER}`, padding: "24px", borderRadius: "0", fontFamily: "'Outfit', sans-serif" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: ACCENT }} />
                  <span style={{ fontSize: "0.72rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Typography Specimen
                  </span>
                </div>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  OUTFIT
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

            {/* Design Attributes Pills */}
            <div style={{ background: BG_WHITE, border: `1.5px solid ${BORDER}`, padding: "24px", borderRadius: "0" }}>
              <h4 style={{ fontSize: "0.72rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
                Attributes
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {DESIGN_ATTRS.map((a) => (
                  <div
                    key={a}
                    style={{
                      padding: "8px 16px",
                      background: BG_WHITE,
                      border: `1.5px solid ${ACCENT}`,
                      borderRadius: "0", // sharp rectangular outline pill
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: ACCENT,
                      textAlign: "center"
                    }}
                  >
                    {a}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </motion.div>

    </div>
  );
}
