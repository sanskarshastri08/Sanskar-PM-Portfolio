"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import React from "react";

/* ── Brand Colors ─────────────────────────────────────────── */
const ACCENT = "#C52342";   // Primary Brand Pink/Red
const ACCENT2 = "#C34071";  // Secondary Pink
const PLUM = "#522843";     // Deep Plum
const BORDER = "#e5e7eb";   // Clean Light Gray Border
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
    <g stroke="#61DAFB" stroke-width="1" fill="none">
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

const TensorFlowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path d="M12 2L4 6.5V15.5L12 20L20 15.5V6.5L12 2Z" fill="#FF6F00"/>
    <path d="M12 2V20L20 15.5V6.5L12 2Z" fill="#FFA000"/>
    <path d="M12 6.5L4 11V15.5L12 11V6.5Z" fill="#FFFFFF"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#24292e"/>
  </svg>
);

const LayerdLogoGraphic = () => (
  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" style={{ flexShrink: 0 }}>
    <path d="M6 24L14 8L19 18L21 14L26 24" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Custom SVG Dossier Icons ── */
const TargetIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const WarningIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const RocketIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
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
      { component: <TensorFlowIcon />, name: "TensorFlow" },
    ],
  },
  {
    name: "Project Management",
    tools: [
      { component: <GitHubIcon />, name: "GitHub" },
    ],
  },
];

const KEY_FEATURES = [
  { title: "Multi-Model Integration", desc: "Access a diverse range of AI chatbots, including ChatGPT 4, Google Bard, and Bing Chat, from one unified interface." },
  { title: "Custom GPT", desc: "Tailor your chatbot interactions with personalized GPT models designed to meet specific user needs." },
  { title: "Natural Language Processing", desc: "Leverage cutting-edge NLP to engage in smooth, human-like conversations across various contexts." },
  { title: "Cross-Platform Compatibility", desc: "Seamlessly switch between different chatbot models depending on the task, ensuring optimal performance for each query." },
  { title: "AI-Assisted Conversations", desc: "Utilize AI to enhance user interactions, providing more accurate and context-aware responses." },
  { title: "Analytics Dashboard", desc: "Monitor chatbot interactions with detailed analytics that provide insights into user behavior and chatbot performance." },
];

const AUDIENCE = ["Customer Support Teams", "Developers", "Tech Enthusiasts", "Business Professionals"];

const DESIGN_ATTRS = [
  { label: "Warm Accents", icon: "☀️" },
  { label: "Dark Theme", icon: "🌙" },
  { label: "Modern Aesthetic", icon: "✨" },
  { label: "Tech-Savvy", icon: "💻" },
  { label: "Intuitive Layout", icon: "🎨" },
  { label: "Modern Gradient", icon: "🌈" }
];

/* ── Section Header Component ── */
const SectionHeader = ({ num, label, title }: { num: string; label: string; title: string }) => (
  <div style={{ position: "relative", marginBottom: "36px", display: "flex", flexDirection: "column" }}>
    <span style={{ fontSize: "5.5rem", fontWeight: 900, color: "#f3f4f6", fontFamily: "'Outfit', sans-serif", position: "absolute", top: "-40px", left: "-12px", zIndex: 0, lineHeight: 1, userSelect: "none" }}>
      {num}
    </span>
    <div style={{ position: "relative", zIndex: 1 }}>
      <span style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: ACCENT, marginBottom: "4px", display: "block" }}>
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

export default function LayeredAICaseStudy({ project }: { project: Project }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", background: BG_WHITE, width: "100%" }}>

      {/* ── 1. INTRODUCTION SECTION ── */}
      <motion.div {...fade(0)} style={{ padding: "54px 48px", borderBottom: `1px solid ${BORDER}`, background: BG_WHITE }}>
        <SectionHeader num="01" label="Introduction" title="Project Overview" />

        {/* Overview Card */}
        <div style={{ background: BG_WHITE, border: `1.5px solid ${BORDER}`, padding: "36px", borderRadius: "0", marginBottom: "32px" }}>
          <p style={{ fontSize: "0.98rem", color: TEXT_MUTED, lineHeight: 1.85, margin: 0 }}>
            <span style={{ color: ACCENT, fontWeight: 800 }}>Layrd Dashboard</span> is a comprehensive AI platform that brings together advanced tools for content creation, image generation, coding, voice processing, custom GPT, and personalized AI. In this showcase, we focus on the AI Chatbot module — a powerhouse feature that integrates multiple leading chatbot technologies including ChatGPT 4 and 3.5, Google Bard, Claude 2.0, DuckDuckGo, and Bing Chat. This module provides users with a versatile and robust chatbot experience, catering to a wide range of needs from casual queries to complex problem-solving.
          </p>
        </div>

        {/* Unified Dashboard Stats Row */}
        <div style={{ display: "flex", border: `1.5px solid ${BORDER}`, background: BG_WHITE, borderRadius: "0", overflow: "hidden", marginBottom: "44px", flexWrap: "wrap" }}>
          {[
            { label: "My Role", value: "Lead PM & UX Strategist", accent: false },
            { label: "Timeline", value: "4 Months", accent: false },
            { label: "Impact", value: "Secured 4 enterprise pilots within 30 days of launch; cut review time by 70%", accent: true }
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

        {/* Tools Section */}
        <h3 style={{ fontSize: "0.68rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "18px" }}>
          Tools Used
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
          {TOOL_CATEGORIES.map((cat) => (
            <div key={cat.name} style={{ background: BG_LIGHT, border: `1.5px solid ${BORDER}`, padding: "24px", borderRadius: "0" }}>
              <h4 style={{ fontSize: "0.72rem", fontWeight: 800, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "16px" }}>
                {cat.name}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {cat.tools.map((t) => (
                  <div key={t.name} style={{ display: "flex", alignItems: "center", gap: "10px", background: BG_WHITE, border: `1px solid ${BORDER}`, padding: "10px 14px" }}>
                    {t.component}
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: TEXT_DARK }}>{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── 2. KEY FEATURES SECTION ── */}
      <motion.div {...fade(0.05)} style={{ padding: "54px 48px", borderBottom: `1px solid ${BORDER}`, background: BG_WHITE }}>
        <SectionHeader num="02" label="Capabilities" title="Key Features" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {KEY_FEATURES.map((f, idx) => (
            <div key={f.title} style={{ background: BG_WHITE, border: `1.5px solid ${BORDER}`, padding: "28px 32px", borderRadius: "0", position: "relative", minHeight: "170px" }}>
              {/* Feature index number */}
              <span style={{ position: "absolute", top: "24px", right: "28px", fontSize: "0.85rem", fontWeight: 900, color: ACCENT2, fontFamily: "'Outfit', sans-serif" }}>
                {`0${idx + 1}`}
              </span>
              <h3 style={{ fontSize: "0.98rem", fontWeight: 800, color: ACCENT, margin: "0 0 12px", paddingRight: "32px" }}>
                {f.title}
              </h3>
              <p style={{ fontSize: "0.88rem", color: TEXT_MUTED, lineHeight: 1.65, margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── 3. TARGET AUDIENCE SECTION ── */}
      <motion.div {...fade(0.1)} style={{ padding: "54px 48px", borderBottom: `1px solid ${BORDER}`, background: BG_WHITE }}>
        <SectionHeader num="03" label="User Research" title="Target Audience" />

        <div style={{ background: BG_WHITE, border: `1.5px solid ${BORDER}`, padding: "44px 32px", borderRadius: "0", textAlign: "center" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            {AUDIENCE.map((a) => (
              <span
                key={a}
                style={{
                  padding: "12px 28px",
                  background: `linear-gradient(135deg, ${ACCENT} 0%, ${PLUM} 100%)`,
                  borderRadius: "999px",
                  color: "#ffffff",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {/* User avatar SVG icon inside pill */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                {a}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── 4. TARGET PERSONAS SECTION ── */}
      <motion.div {...fade(0.15)} style={{ padding: "54px 48px", borderBottom: `1px solid ${BORDER}`, background: BG_WHITE }}>
        <SectionHeader num="04" label="Personas" title="Target Personas" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "32px" }}>
          
          {/* Olivia's Dossier Card (Left Aligned, Photo on Right) */}
          <div style={{ background: BG_WHITE, border: `1.5px solid ${BORDER}`, borderRadius: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            {/* Dossier Banner Header */}
            <div style={{ background: "#fff5f7", padding: "28px 32px", borderBottom: `1.5px solid ${BORDER}`, display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "0.62rem", fontWeight: 800, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  User Dossier 01
                </span>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: TEXT_DARK, margin: 0 }}>
                  Olivia
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "6px" }}>
                  <span style={{ padding: "4px 8px", background: BG_WHITE, border: `1px solid ${BORDER}`, fontSize: "0.72rem", fontWeight: 700, color: TEXT_DARK }}>
                    🎂 34 Years Old
                  </span>
                  <span style={{ padding: "4px 8px", background: BG_WHITE, border: `1px solid ${BORDER}`, fontSize: "0.72rem", fontWeight: 700, color: TEXT_DARK }}>
                    💼 CS Manager
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
                alt="Olivia"
                style={{ width: "68px", height: "68px", border: `2.5px solid ${ACCENT}`, objectFit: "cover", flexShrink: 0, borderRadius: "8px" }}
              />
            </div>

            {/* Dossier Content */}
            <div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Key Quote */}
              <div style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "16px", margin: "4px 0" }}>
                <p style={{ fontSize: "0.92rem", color: TEXT_MUTED, fontStyle: "italic", lineHeight: 1.5, margin: 0 }}>
                  "I want to provide instant, helpful support without losing the personal touch that makes our customers trust us."
                </p>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <TargetIcon />
                  <h4 style={{ fontSize: "0.75rem", fontWeight: 800, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                    Goals
                  </h4>
                </div>
                <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>
                  To improve customer service efficiency and response times using advanced AI chatbots.
                </p>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <WarningIcon />
                  <h4 style={{ fontSize: "0.75rem", fontWeight: 800, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                    Challenges
                  </h4>
                </div>
                <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>
                  Needs a reliable AI tool to handle a high volume of customer inquiries while maintaining a personal touch.
                </p>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <RocketIcon />
                  <h4 style={{ fontSize: "0.75rem", fontWeight: 800, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                    How the AI Chatbot Module Helps
                  </h4>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { f: "Multi-Model Integration", d: "Provides flexibility in handling various customer queries, allowing Olivia to choose the best chatbot for specific scenarios." },
                    { f: "AI-Assisted Conversations", d: "Ensures accurate, context-aware responses that enhance customer satisfaction." },
                    { f: "Analytics Dashboard", d: "Offers insights into chatbot performance, helping her fine-tune the system for better results." }
                  ].map((h) => (
                    <div key={h.f} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: ACCENT, fontWeight: "bold", fontSize: "0.95rem", lineHeight: 1.3 }}>✓</span>
                      <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, lineHeight: 1.5, margin: 0 }}>
                        <strong style={{ color: TEXT_DARK }}>{h.f}:</strong> {h.d}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Leo's Dossier Card (Right Aligned, Photo on Left) */}
          <div style={{ background: BG_WHITE, border: `1.5px solid ${BORDER}`, borderRadius: "0", overflow: "hidden", display: "flex", flexDirection: "column", textAlign: "right" }}>
            {/* Dossier Banner Header */}
            <div style={{ background: "#faf5f8", padding: "28px 32px", borderBottom: `1.5px solid ${BORDER}`, display: "flex", flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "flex-end" }}>
                <span style={{ fontSize: "0.62rem", fontWeight: 800, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  User Dossier 02
                </span>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: TEXT_DARK, margin: 0 }}>
                  Leo
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "flex-end", marginTop: "4px" }}>
                  <span style={{ padding: "4px 8px", background: BG_WHITE, border: `1px solid ${BORDER}`, fontSize: "0.72rem", fontWeight: 700, color: TEXT_DARK }}>
                    29 Years Old 🎂
                  </span>
                  <span style={{ padding: "4px 8px", background: BG_WHITE, border: `1px solid ${BORDER}`, fontSize: "0.72rem", fontWeight: 700, color: TEXT_DARK }}>
                    Freelance AI Dev 💼
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80"
                alt="Leo"
                style={{ width: "68px", height: "68px", border: `2px solid ${ACCENT}`, objectFit: "cover", flexShrink: 0, borderRadius: "8px" }}
              />
            </div>

            {/* Dossier Content */}
            <div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Key Quote */}
              <div style={{ borderRight: `3px solid ${ACCENT}`, paddingRight: "16px", margin: "4px 0", textAlign: "right" }}>
                <p style={{ fontSize: "0.92rem", color: TEXT_MUTED, fontStyle: "italic", lineHeight: 1.5, margin: 0 }}>
                  "I need a flexible developer platform that lets me combine and tweak AI models to solve client-specific problems."
                </p>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "flex-end", marginBottom: "8px" }}>
                  <h4 style={{ fontSize: "0.75rem", fontWeight: 800, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                    Goals
                  </h4>
                  <TargetIcon />
                </div>
                <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>
                  To develop and integrate customized AI chatbots for client projects.
                </p>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "flex-end", marginBottom: "8px" }}>
                  <h4 style={{ fontSize: "0.75rem", fontWeight: 800, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                    Challenges
                  </h4>
                  <WarningIcon />
                </div>
                <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>
                  Requires access to multiple chatbot models to create tailored solutions for different use cases.
                </p>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "flex-end", marginBottom: "12px" }}>
                  <h4 style={{ fontSize: "0.75rem", fontWeight: 800, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                    How the AI Chatbot Module Helps
                  </h4>
                  <RocketIcon />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-end" }}>
                  {[
                    { f: "Custom GPT", d: "Enables Leo to create and train personalized chatbots that meet specific client requirements." },
                    { f: "Cross-Platform Compatibility", d: "Allows him to seamlessly integrate various chatbot models into his development projects." },
                    { f: "NLP Capabilities", d: "Provides advanced language processing tools that enhance the functionality and user experience of his chatbot solutions." }
                  ].map((h) => (
                    <div key={h.f} style={{ display: "flex", gap: "10px", alignItems: "flex-start", justifyContent: "flex-end" }}>
                      <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, lineHeight: 1.5, margin: 0 }}>
                        <strong style={{ color: TEXT_DARK }}>{h.f}:</strong> {h.d}
                      </p>
                      <span style={{ color: ACCENT, fontWeight: "bold", fontSize: "0.95rem", lineHeight: 1.3, flexShrink: 0 }}>✓</span>
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
        <SectionHeader num="05" label="UI Design" title="Visual Styles" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>

          {/* Left Column — Logo, Mobile Home Dock App Icon & Pantone Color Swatches */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* Top Logo and Mock Mobile Dock App Icon Block */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {/* Logo block */}
              <div style={{ background: TEXT_DARK, border: `1.5px solid ${TEXT_DARK}`, padding: "20px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "0", minHeight: "120px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: BG_WHITE }}>
                  <div style={{ background: ACCENT, padding: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <LayerdLogoGraphic />
                  </div>
                  <span style={{ fontWeight: 900, fontSize: "1.15rem", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.08em" }}>LAYERD</span>
                </div>
              </div>

              {/* App Icon block in mock phone dock */}
              <div style={{ background: "#111827", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "0", minHeight: "120px", position: "relative", overflow: "hidden" }}>
                {/* Mock Home Screen Dock */}
                <div style={{ background: "rgba(255, 255, 255, 0.08)", backdropFilter: "blur(8px)", border: "1px solid rgba(255, 255, 255, 0.1)", padding: "10px 18px", display: "flex", gap: "12px", alignItems: "center", borderRadius: "14px" }}>
                  {/* Mock App 1 */}
                  <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: "#f8fafc", opacity: 0.2 }} />
                  {/* Layerd App Icon */}
                  <div style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, ${PLUM} 100%)`, width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: BG_WHITE, boxShadow: "0 4px 12px rgba(197,35,66,0.3)", position: "relative", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
                      <path d="M6 24L14 8L19 18L21 14L26 24" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {/* Small mock notification badge */}
                    <span style={{ position: "absolute", top: "-1px", right: "-1px", width: "6px", height: "6px", borderRadius: "50%", background: "#fff" }} />
                  </div>
                  {/* Mock App 3 */}
                  <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: "#f8fafc", opacity: 0.2 }} />
                </div>
              </div>
            </div>

            {/* Colors Swatches Block (Pantone Cards) */}
            <div style={{ background: BG_WHITE, border: `1.5px solid ${BORDER}`, padding: "24px", borderRadius: "0" }}>
              <h4 style={{ fontSize: "0.72rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "20px" }}>
                Brand Colors
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
                {[
                  { hex: "#C52342", name: "LAYERD RED", rgb: "RGB 197, 35, 66", cmyk: "0, 82, 66, 23" },
                  { hex: "#C34071", name: "PINK GLOW", rgb: "RGB 195, 64, 113", cmyk: "0, 67, 42, 24" },
                  { hex: "#522843", name: "PLUM DEEP", rgb: "RGB 82, 40, 67", cmyk: "0, 51, 18, 68" },
                  { hex: "#FFFFFF", name: "PURE WHITE", rgb: "RGB 255, 255, 255", cmyk: "0, 0, 0, 0" }
                ].map((c) => (
                  <div key={c.hex} style={{ border: `1px solid ${BORDER}`, borderRadius: "0", background: BG_WHITE, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                    {/* Color Block */}
                    <div style={{ background: c.hex, width: "100%", height: "80px", borderBottom: `1px solid ${BORDER}` }} />
                    {/* Pantone Info Label */}
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

          {/* Right Column — Typography Specimen & Design Attributes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* Typography Card Specimen with Sizing Scale */}
            <div style={{ background: BG_WHITE, border: `1.5px solid ${BORDER}`, padding: "24px", borderRadius: "0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: ACCENT }} />
                  <span style={{ fontSize: "0.72rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Typography Specimen
                  </span>
                </div>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  INTER
                </span>
              </div>

              {/* Character Set Specimen Sheet */}
              <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: "14px", marginBottom: "14px" }}>
                <p style={{ fontSize: "0.62rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
                  Character Set
                </p>
                <p style={{ fontSize: "0.78rem", color: TEXT_DARK, fontWeight: 500, letterSpacing: "0.05em", lineHeight: 1.4, margin: 0, fontFamily: "Inter, sans-serif" }}>
                  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
                  a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
                  0 1 2 3 4 5 6 7 8 9 ! @ # $ % & *
                </p>
              </div>

              {/* Sizing Scale breakdown */}
              <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: "14px", marginBottom: "14px" }}>
                <p style={{ fontSize: "0.62rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
                  Type Scale
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px", fontSize: "0.72rem", color: TEXT_DARK }}>
                  <span><strong style={{ color: ACCENT }}>H1 (Outfit Bold):</strong> 32px / 1.1 LH</span>
                  <span><strong style={{ color: ACCENT }}>H2 (Outfit Semi):</strong> 24px / 1.2 LH</span>
                  <span><strong style={{ color: ACCENT }}>H3 (Outfit Med):</strong> 18px / 1.3 LH</span>
                  <span><strong style={{ color: TEXT_MUTED }}>Body (Inter Reg):</strong> 14px / 1.6 LH</span>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  {["Regular (400)", "Medium (500)", "Semi bold (600)", "Bold (700)"].map((w, idx) => (
                    <span key={w} style={{ fontSize: "0.8rem", color: TEXT_DARK, fontWeight: [400, 500, 600, 700][idx] }}>
                      {w}
                    </span>
                  ))}
                </div>
                <span style={{ fontSize: "4.5rem", fontWeight: 700, color: TEXT_DARK, fontFamily: "Inter, sans-serif", lineHeight: 0.9, userSelect: "none" }}>
                  Aa
                </span>
              </div>
            </div>

            {/* Design Attributes */}
            <div style={{ background: BG_WHITE, border: `1.5px solid ${BORDER}`, padding: "24px", borderRadius: "0", flexGrow: 1 }}>
              <h4 style={{ fontSize: "0.72rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
                Design Attributes
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {DESIGN_ATTRS.map((a) => (
                  <div
                    key={a.label}
                    style={{
                      padding: "12px 14px",
                      background: BG_LIGHT,
                      border: `1px solid ${BORDER}`,
                      borderRadius: "0",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: TEXT_DARK,
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
      </motion.div>

    </div>
  );
}
