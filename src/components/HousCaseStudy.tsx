"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import React from "react";

/* ── Brand Colors ─────────────────────────────────────────── */
const ACCENT = "#4dcfbb";    // Primary Brand Mint/Turquoise
const ACCENT_END = "#c4e3ff"; // Gradient End Blue
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

/* ── Custom SVG Dossier Icons ── */
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

const LEFT_COLUMN_FEATURES = [
  {
    title: "Property Onboarding",
    desc: "Easily onboard properties and sub-units, from entire buildings to individual units, through an intuitive interface."
  },
  {
    title: "Dashboard Overview",
    desc: "A comprehensive dashboard for property managers to view and manage multiple properties and tenant details from one central location."
  },
  {
    title: "Billing Management",
    desc: "Provide tenants with a clear overview of their bills, allowing for easy payment and tracking."
  },
  {
    title: "Information Accessibility",
    desc: "Key information about property management and tenant services is readily accessible, making it easy for users to find what they need."
  }
];

const RIGHT_COLUMN_FEATURES = [
  {
    title: "Tenant Management",
    desc: "Simplify tenant management with tools for tracking lease agreements, managing maintenance requests, and more."
  },
  {
    title: "Amenity Booking",
    desc: "Enable tenants to book amenities directly through the platform, ensuring a smooth and convenient experience."
  },
  {
    title: "User-Friendly Design",
    desc: "A clean, modern design that enhances usability and ensures that users can navigate the platform effortlessly."
  }
];

const AUDIENCE = ["Property Managers", "Real Estate Professionals", "Tenants"];

const DESIGN_ATTRS = [
  "Vibrant",
  "Contemporary",
  "Gradient",
  "Clean Typography",
  "Minimalist",
  "Tech-Savvy Appeal"
];

const SWATCHES = [
  {
    bg: "linear-gradient(180deg, #4DCFBB 0%, #C4E3FF 100%)",
    isGradient: true,
    name: "GRADIENT MINT",
    hexLabel: "#4DCFBB",
    hexLabel2: "#C4E3FF",
    rgb: "RGB 77, 207, 187",
    cmyk: "CMYK 63, 0, 10, 19"
  },
  {
    bg: "#111c18", // visually black/dark green matches the mockup block
    isGradient: false,
    name: "DARK GREEN",
    hexLabel: "#B164C4", // hex text exactly copied from the mockup typo
    rgb: "RGB 177, 100, 196",
    cmyk: "CMYK 10, 49, 0, 23"
  },
  {
    bg: "#f3f5f4", // visually light gray matches the mockup block
    isGradient: false,
    name: "LIGHT GRAY",
    hexLabel: "#171618", // hex text exactly copied from the mockup typo
    rgb: "RGB 23, 22, 24",
    cmyk: "CMYK 4, 8, 0, 91"
  },
  {
    bg: "#FFFFFF",
    isGradient: false,
    name: "PURE WHITE",
    hexLabel: "#FFFFFF",
    rgb: "RGB 255, 255, 255",
    cmyk: "CMYK 0, 0, 0, 0"
  }
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

export default function HousCaseStudy({ project }: { project: Project }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", background: BG_WHITE, width: "100%" }}>

      {/* ── 1. INTRODUCTION SECTION ── */}
      <motion.div {...fade(0)} style={{ padding: "54px 48px", borderBottom: `1px solid ${BORDER}`, background: BG_WHITE }}>
        <SectionHeader num="01" label="Introduction" title="Project Overview" color={ACCENT} />

        {/* Overview Card */}
        <div style={{ background: BG_WHITE, border: `1.5px solid ${BORDER}`, padding: "36px", borderRadius: "0", marginBottom: "32px" }}>
          <p style={{ fontSize: "0.98rem", color: TEXT_MUTED, lineHeight: 1.85, margin: 0 }}>
            Welcome to the landing page for <span style={{ color: ACCENT, fontWeight: 800 }}>Hous</span>, the premier property management platform designed to streamline the management of properties and tenants. Our platform offers a robust solution for property managers to onboard various properties and sub-units, while also providing tenants with tools to manage their bills and book amenities effortlessly. The landing page is crafted to deliver a seamless user experience, showcasing the key features and benefits of Hous, and setting the stage for an efficient property management journey.
          </p>
        </div>

        {/* Unified Dashboard Stats Row */}
        <div style={{ display: "flex", border: `1.5px solid ${BORDER}`, background: BG_WHITE, borderRadius: "0", overflow: "hidden", marginBottom: "44px", flexWrap: "wrap" }}>
          {[
            { label: "My Role", value: project.role || "Senior Product Manager", accent: false },
            { label: "Timeline", value: project.timeline || "5 Months", accent: false },
            { label: "Impact", value: project.impact || "Streamlined multi-unit onboarding and simplified tenant billing/amenity bookings globally.", accent: true }
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

        {/* Tech Stacks Used - Single Horizontal Dark Card with Floating Logo */}
        <div style={{
          background: "#0d1512", // dark forest green-black matching the image mockup
          border: `1.5px solid ${TEXT_DARK}`,
          padding: "36px 40px",
          position: "relative",
          borderRadius: "0",
          boxShadow: "none",
          overflow: "hidden",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "40px",
          marginTop: "24px",
          minHeight: "180px"
        }}>
          {/* Left Side Content */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px", zIndex: 1 }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: ACCENT, margin: 0, fontFamily: "'Outfit', sans-serif", letterSpacing: "0.02em" }}>
              Tech Stacks Used
            </h3>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
              {TOOL_CATEGORIES.map((cat) => (
                <div key={cat.name} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {cat.name}
                  </span>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {cat.tools.map((t, idx) => (
                      <div
                        key={idx}
                        style={{
                          width: "48px",
                          height: "48px",
                          background: BG_WHITE,
                          border: "1px solid #e5e7eb",
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

          {/* Right Side - Giant Floating Logo sticking out */}
          <div style={{
            position: "absolute",
            right: "40px",
            top: "-20px",
            zIndex: 0,
            opacity: 0.95,
            pointerEvents: "none"
          }}>
            <svg width="100" height="130" viewBox="0 0 100 130" fill="none">
              <defs>
                <linearGradient id="giant-h-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4DCFBB" />
                  <stop offset="100%" stopColor="#C4E3FF" />
                </linearGradient>
              </defs>
              <path
                d="M15 10v110h22V70c0-15 10-25 25-25s25 10 25 25v50h22V70c0-28-20-48-48-48-18 0-33 10-41 24V10H15z"
                fill="url(#giant-h-grad)"
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* ── 2. KEY FEATURES SECTION ── */}
      <motion.div {...fade(0.05)} style={{ padding: "54px 48px", borderBottom: `1px solid ${BORDER}`, background: BG_WHITE }}>
        <SectionHeader num="02" label="Capabilities" title={
          <span>
            Main Features of the <span style={{ color: ACCENT }}>Landing Page</span>
          </span>
        } color={ACCENT} />

        {/* Simple & Clean 2-Column List with left mint borders */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px 48px", marginTop: "16px" }}>
          
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {LEFT_COLUMN_FEATURES.map((f) => (
              <div
                key={f.title}
                style={{
                  borderLeft: `3px solid ${ACCENT}`,
                  paddingLeft: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px"
                }}
              >
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: TEXT_DARK, margin: 0, fontFamily: "Jost, sans-serif" }}>
                  {f.title}:
                </h3>
                <p style={{ fontSize: "0.88rem", color: TEXT_MUTED, lineHeight: 1.65, margin: 0, fontFamily: "Jost, sans-serif" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {RIGHT_COLUMN_FEATURES.map((f) => (
              <div
                key={f.title}
                style={{
                  borderLeft: `3px solid ${ACCENT}`,
                  paddingLeft: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px"
                }}
              >
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: TEXT_DARK, margin: 0, fontFamily: "Jost, sans-serif" }}>
                  {f.title}:
                </h3>
                <p style={{ fontSize: "0.88rem", color: TEXT_MUTED, lineHeight: 1.65, margin: 0, fontFamily: "Jost, sans-serif" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </motion.div>

      {/* ── 3. TARGET AUDIENCE SECTION ── */}
      <motion.div {...fade(0.1)} style={{ padding: "54px 48px", borderBottom: `1px solid ${BORDER}`, background: BG_WHITE }}>
        <SectionHeader num="03" label="User Research" title="Target Audience" color={ACCENT} />

        <div style={{
          background: "#0d1512", // dark forest green-black
          border: `1.5px solid ${TEXT_DARK}`,
          padding: "48px 32px",
          borderRadius: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "36px",
          position: "relative"
        }}>
          {/* Target Audience Title in Mint */}
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: ACCENT, margin: 0, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'Outfit', sans-serif" }}>
            Target Audience
          </h3>

          {/* White Rectangular Selector Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", width: "100%" }}>
            {AUDIENCE.map((a) => (
              <span
                key={a}
                style={{
                  padding: "16px 36px",
                  background: BG_WHITE,
                  borderRadius: "0", // Strict sharp corners
                  border: "1.5px solid #2d2a2a",
                  color: TEXT_DARK,
                  fontSize: "0.9rem",
                  fontWeight: 800,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "none"
                }}
              >
                {/* Custom User/Audience Icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                {a}
              </span>
            ))}
          </div>

          {/* Chevron Transition Icon at the bottom center */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", marginTop: "10px" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="7 13 12 18 17 13" />
              <polyline points="7 6 12 11 17 6" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* ── 4. TARGET PERSONAS SECTION ── */}
      <motion.div {...fade(0.15)} style={{ padding: "54px 48px", borderBottom: `1px solid ${BORDER}`, background: BG_WHITE }}>
        <SectionHeader num="04" label="Personas" title={
          <span>
            Target <span style={{ color: ACCENT }}>Personas</span>
          </span>
        } color={ACCENT} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "32px" }}>
          
          {/* Gabe's Persona Card */}
          <div style={{
            background: "linear-gradient(135deg, #4dcfbb 0%, #c4e3ff 100%)",
            padding: "16px",
            borderRadius: "0",
            boxShadow: "none",
            display: "flex",
            flexDirection: "column"
          }}>
            {/* Header Box (Profile) */}
            <div style={{
              background: BG_WHITE,
              padding: "20px",
              borderRadius: "0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px"
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: TEXT_DARK, margin: 0, fontFamily: "Jost, sans-serif" }}>
                  Gabe
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "4px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", fontWeight: 600, color: TEXT_MUTED }}>
                    {/* Cake Icon */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
                      <path d="M4 16h16" />
                      <path d="M12 11V3" />
                      <path d="M12 3c1 0 2-1 2-2-1 0-2 1-2 2z" />
                    </svg>
                    38
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", fontWeight: 600, color: TEXT_MUTED }}>
                    {/* Briefcase Icon */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                    Property Manager
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
                alt="Gabe"
                style={{ width: "68px", height: "68px", border: `2.5px solid ${ACCENT}`, objectFit: "cover", flexShrink: 0, borderRadius: "0" }}
              />
            </div>

            {/* Details Box */}
            <div style={{
              background: BG_WHITE,
              padding: "24px",
              marginTop: "16px",
              borderRadius: "0",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}>
              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: TEXT_DARK, margin: "0 0 6px 0", fontFamily: "Jost, sans-serif" }}>
                  Goals:
                </h4>
                <p style={{ fontSize: "0.88rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>
                  Streamline property management tasks and improve tenant satisfaction.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: TEXT_DARK, margin: "0 0 6px 0", fontFamily: "Jost, sans-serif" }}>
                  Challenges:
                </h4>
                <p style={{ fontSize: "0.88rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>
                  Managing multiple properties and keeping track of various tenant needs and maintenance requests.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: TEXT_DARK, margin: "0 0 10px 0", fontFamily: "Jost, sans-serif" }}>
                  How the Landing Page Helps:
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    "Provides a clear overview of the platform's features and benefits.",
                    "Highlights tools for efficient property onboarding and management.",
                    "Demonstrates the ease of use and accessibility of the dashboard."
                  ].map((bullet, idx) => (
                    <div key={idx} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{
                        width: "6px",
                        height: "6px",
                        background: ACCENT,
                        marginTop: "6px",
                        flexShrink: 0
                      }} />
                      <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, lineHeight: 1.5, margin: 0 }}>
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Kelly's Persona Card */}
          <div style={{
            background: "linear-gradient(135deg, #4dcfbb 0%, #c4e3ff 100%)",
            padding: "16px",
            borderRadius: "0",
            boxShadow: "none",
            display: "flex",
            flexDirection: "column"
          }}>
            {/* Header Box (Profile) */}
            <div style={{
              background: BG_WHITE,
              padding: "20px",
              borderRadius: "0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px"
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: TEXT_DARK, margin: 0, fontFamily: "Jost, sans-serif" }}>
                  Kelly
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "4px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", fontWeight: 600, color: TEXT_MUTED }}>
                    {/* Cake Icon */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
                      <path d="M4 16h16" />
                      <path d="M12 11V3" />
                      <path d="M12 3c1 0 2-1 2-2-1 0-2 1-2 2z" />
                    </svg>
                    29
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", fontWeight: 600, color: TEXT_MUTED }}>
                    {/* Briefcase Icon */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                    Tenant
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
                alt="Kelly"
                style={{ width: "68px", height: "68px", border: `2.5px solid ${ACCENT}`, objectFit: "cover", flexShrink: 0, borderRadius: "0" }}
              />
            </div>

            {/* Details Box */}
            <div style={{
              background: BG_WHITE,
              padding: "24px",
              marginTop: "16px",
              borderRadius: "0",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}>
              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: TEXT_DARK, margin: "0 0 6px 0", fontFamily: "Jost, sans-serif" }}>
                  Goals:
                </h4>
                <p style={{ fontSize: "0.88rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>
                  Easily manage bills, book amenities, and communicate with property management.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: TEXT_DARK, margin: "0 0 6px 0", fontFamily: "Jost, sans-serif" }}>
                  Challenges:
                </h4>
                <p style={{ fontSize: "0.88rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>
                  Finding a user-friendly platform that simplifies bill payments and amenity bookings.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: TEXT_DARK, margin: "0 0 10px 0", fontFamily: "Jost, sans-serif" }}>
                  How the Landing Page Helps:
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    "Showcases features that benefit tenants, such as billing management and amenity booking.",
                    "Emphasizes the simplicity and convenience of the user interface.",
                    "Provides a comprehensive overview of how the platform enhances the tenant experience."
                  ].map((bullet, idx) => (
                    <div key={idx} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{
                        width: "6px",
                        height: "6px",
                        background: ACCENT,
                        marginTop: "6px",
                        flexShrink: 0
                      }} />
                      <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, lineHeight: 1.5, margin: 0 }}>
                        {bullet}
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
        <SectionHeader num="05" label="UI Design" title={
          <span>
            Visual <span style={{ color: ACCENT }}>Styles</span>
          </span>
        } color={ACCENT} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>

          {/* Left Column — Logo Mockups and Pantone Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* Top row: Logo panels */}
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "16px" }}>
              
              {/* White panel with Hous logo text */}
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
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "32px", height: "32px", background: "#111827", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px" }}>
                    <svg width="18" height="18" viewBox="0 0 32 32" fill="none" style={{ color: "#4dcfbb" }}>
                      <path d="M8 6v20h5V16c0-4 3-6 7-6s7 2 7 6v10h5V16c0-7-5-12-12-12-5 0-9 3-10 7V6H8z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span style={{ fontWeight: 800, fontSize: "1.45rem", fontFamily: "Jost, sans-serif", color: "#111827", letterSpacing: "-0.03em" }}>hous</span>
                </div>
              </div>

              {/* Gradient panel with floating white logo square */}
              <div style={{
                background: "linear-gradient(135deg, #4dcfbb 0%, #c4e3ff 100%)",
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
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                  boxShadow: "none"
                }}>
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" style={{ color: "#4dcfbb" }}>
                    <path d="M8 6v20h5V16c0-4 3-6 7-6s7 2 7 6v10h5V16c0-7-5-12-12-12-5 0-9 3-10 7V6H8z" fill="currentColor"/>
                  </svg>
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
                    <div style={{ background: c.bg, width: "100%", height: "80px", borderBottom: `1px solid ${BORDER}` }} />
                    <div style={{ padding: "8px 10px", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "0.52rem", fontWeight: 800, color: TEXT_DARK, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {c.name}
                      </span>
                      <span style={{ fontSize: "0.45rem", fontWeight: 600, color: TEXT_MUTED }}>
                        {c.hexLabel}
                      </span>
                      {c.isGradient && c.hexLabel2 && (
                        <span style={{ fontSize: "0.45rem", fontWeight: 600, color: TEXT_MUTED }}>
                          {c.hexLabel2}
                        </span>
                      )}
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
            
            {/* Typography Card Specimen (Jost) */}
            <div style={{ background: BG_WHITE, border: `1.5px solid ${BORDER}`, padding: "24px", borderRadius: "0", fontFamily: "Jost, sans-serif" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: ACCENT }} />
                  <span style={{ fontSize: "0.72rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Typography Specimen
                  </span>
                </div>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  JOST
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
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
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
