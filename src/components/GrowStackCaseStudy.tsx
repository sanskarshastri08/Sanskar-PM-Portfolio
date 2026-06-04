"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import React from "react";
import { Terminal, Cpu, Layers, Palette } from "lucide-react";

/* ── Brand Colors ─────────────────────────────────────────── */
const ACCENT = "#034737";    // Primary Brand Forest Green
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

const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#24292e"/>
  </svg>
);

const MongoDBIcon = () => (
  <svg width="24" height="24" viewBox="0 0 256 256" fill="none" style={{ flexShrink: 0 }}>
    <path d="M128 0c-35.8 54.3-39 122.9 5.3 162.7 10 9 21.6 15.6 34.7 19.8V256l-13-13v-53.5C214.2 165.7 207 108.6 128 0z" fill="#47A248" />
    <path d="M128 0c35.8 54.3 39 122.9-5.3 162.7-10 9-21.6 15.6-34.7 19.8V256l13-13v-53.5C41.8 165.7 49 108.6 128 0z" fill="#3F3F3F" />
  </svg>
);

const D3Icon = () => (
  <svg width="24" height="24" viewBox="0 0 256 256" fill="none" style={{ flexShrink: 0 }}>
    <path d="M128 0c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm68 128c0 37.6-30.4 68-68 68H88v-40h40c15.5 0 28-12.5 28-28s-12.5-28-28-28H88V60h40c37.6 0 68 30.4 68 68z" fill="#F9A825" />
  </svg>
);

const ChartJSIcon = () => (
  <svg width="24" height="24" viewBox="0 0 256 256" fill="none" style={{ flexShrink: 0 }}>
    <path d="M224 16H32A16 16 0 0 0 16 32v192a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V32a16 16 0 0 0-16-16zM80 192H48v-64h32zm48 0H96V96h32zm48 0h-32V64h32zm48 0h-32v-96h32z" fill="#FF6384" />
  </svg>
);

const PM2Icon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" fill="#2d2a2a" />
    <text x="12" y="16.5" fontSize="13" fontWeight="900" fontFamily="monospace" fill="white" textAnchor="middle">2</text>
  </svg>
);

const AWSIcon = () => (
  <svg width="24" height="24" viewBox="0 0 256 256" fill="none" style={{ flexShrink: 0 }}>
    <rect width="256" height="256" rx="40" fill="#232F3E"/>
    <path d="M96.7 114c-1.8-6.1-5.7-10.4-11.7-10.4-5.2 0-8.8 3.5-8.8 8.8 0 10.9 23.3 9.4 23.3 27.5 0 8.4-6.6 15.3-17.1 15.3-11.4 0-16.7-5.5-17.9-13.8l7.5-1c.9 5.3 4.2 8.7 10.4 8.7 5.7 0 9-3.3 9-8.4 0-12.7-23.3-9.5-23.3-27.4 0-9.6 7.6-15.8 17.1-15.8 9.9 0 15.8 5.2 17 11.8l-7.8 1.4zm54.1 41.7H143V127c0-6-2.5-9.3-7.5-9.3-5.2 0-8.6 3.6-8.6 9v29h-7.8V82.7h7.8v29.5c2.4-3.6 6.8-6.5 12.3-6.5 9 0 13.9 5.5 13.9 14.6v35.4zm-75.1-16.3c0 7 4.2 10.8 10 10.8 4.6 0 8-2.6 9.8-6.4v5.6h7.5V111h-7.5v5.8c-1.8-3.9-5.2-6.5-9.8-6.5-5.8 0-10 3.8-10 10.9zm7.7.1c0-4.4 2.1-7.1 5.9-7.1 3.5 0 5.8 2.6 5.8 7s-2.3 7-5.8 7c-3.8.1-5.9-2.6-5.9-6.9zM194 135c3.2-1.7 5.2-4.9 5.2-9 0-7-5.5-11-13.9-11H168v40.7h7.7v-15.5h8l7.6 15.5h8.4l-8.5-16.7zm-18.3-4.5v-10.4h9c4 0 6.2 1.8 6.2 5.2 0 3.3-2.2 5.2-6.2 5.2h-9zm-131 34.6c16.3 11 39.8 16.9 60 16.9 31.7 0 57.5-12.9 57.5-28.7 0-3.3-1.2-6.5-3.5-9.4l-5.3 4.4c1.8 2.2 2.6 4.4 2.6 6.5 0 11.2-22.3 20.9-51.3 20.9-18.4 0-39.7-5.3-54.6-15.3l-5.4 4.7zm116.7-5.3c1.7 2.3 1.1 4.7-1.3 5.4l-11.4 3.4c-2.4.7-4.4-.7-4.3-3.2l.6-11.8c.1-2.5 1.9-3.7 4-2.6l3.3 1.8c2.1 1.2 5.3.7 7-1.6l3.3-4.3c1.7-2.3 4.2-1.6 5.6 1.5l3.4 7.6c1.4 3.1-.2 5.1-2.6 5.8l-7.6 2z" fill="#FF9900" />
  </svg>
);

const GrowStackLogoGraphic = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path d="M12 2A10 10 0 0 1 22 12A10 10 0 0 0 12 2" fill="white" opacity="0.3" />
    <path d="M12 22A10 10 0 0 1 2 12A10 10 0 0 0 12 22" fill="white" opacity="0.6" />
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
      rgbStr: "RGB 3, 71, 55",
      cmykStr: "96, 0, 23, 72"
    };
  }
};

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
      { component: <D3Icon />, name: "D3.js" },
      { component: <ChartJSIcon />, name: "Chart.js" },
      { component: <PM2Icon />, name: "PM2" },
      { component: <AWSIcon />, name: "AWS" },
    ],
  },
  {
    name: "Version Control",
    tools: [
      { component: <GitHubIcon />, name: "GitHub" },
    ],
  },
];

const KEY_FEATURES = [
  { 
    title: "Comprehensive review monitoring", 
    desc: "Track reviews from various sources such as Google, Home Advisor, SuperPages, and Yahoo Local in a single dashboard.",
    bg: "#F0F9FF",
    border: "#BAE6FD",
    numColor: "#0284C7"
  },
  { 
    title: "Detailed analytics", 
    desc: "Visualize review growth trends, star rating breakdowns, and review sources to gain actionable insights.",
    bg: "#FFFBEB",
    border: "#FDE68A",
    numColor: "#D97706"
  },
  { 
    title: "Review management", 
    desc: "Easily respond to reviews directly from the dashboard, helping maintain a positive online presence.",
    bg: "#ECFDF5",
    border: "#A7F3D0",
    numColor: "#059669"
  },
  { 
    title: "Customizable filters", 
    desc: "Use filters to view reviews by source, rating, and time period for more focused analysis.",
    bg: "#FDF2F8",
    border: "#FBCFE8",
    numColor: "#DB2777"
  },
  { 
    title: "Export reviews", 
    desc: "Export review data to CSV for further analysis or reporting.",
    bg: "#F0FDF4",
    border: "#BBF7D0",
    numColor: "#16A34A"
  },
];

/* ── Section Header Component ── */
const SectionHeader = ({ num, label, title, color = ACCENT }: { num: string; label: string; title: string; color?: string }) => (
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

export default function GrowStackCaseStudy({ project }: { project: Project }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", background: BG_WHITE, width: "100%" }}>

      {/* ── 1. INTRODUCTION SECTION ── */}
      <motion.div {...fade(0)} style={{ padding: "54px 48px", borderBottom: `1px solid ${BORDER}`, background: BG_WHITE }}>
        <SectionHeader num="01" label="Introduction" title="Project Overview" color={ACCENT} />

        {/* Overview Card */}
        <div style={{ background: BG_WHITE, border: `1.5px solid ${BORDER}`, padding: "36px", borderRadius: "0", marginBottom: "32px" }}>
          <p style={{ fontSize: "0.98rem", color: TEXT_MUTED, lineHeight: 1.85, margin: 0 }}>
            Introducing <span style={{ color: ACCENT, fontWeight: 800 }}>GrowStack</span>, a comprehensive dashboard designed specifically for reputation managers and businesses. GrowStack empowers users to monitor, analyze, and respond to customer reviews across multiple platforms, ensuring they can maintain and improve their online reputation with ease.
          </p>
        </div>

        {/* Unified Dashboard Stats Row */}
        <div style={{ display: "flex", border: `1.5px solid ${BORDER}`, background: BG_WHITE, borderRadius: "0", overflow: "hidden", marginBottom: "44px", flexWrap: "wrap" }}>
          {[
            { label: "My Role", value: project.role || "Co-founder & Head of Product", accent: false },
            { label: "Timeline", value: project.timeline || "8 Months", accent: false },
            { label: "Impact", value: project.impact || "Centralized review monitoring across 5+ platforms, reducing response time by 54%", accent: true }
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
          Tech Stacks Used
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
        <SectionHeader num="02" label="Capabilities" title="Key Features of GrowStack" color={ACCENT} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {KEY_FEATURES.map((f, idx) => (
            <div key={f.title} style={{ background: f.bg, border: `1.5px solid ${f.border}`, padding: "28px 32px", borderRadius: "0", position: "relative", minHeight: "170px" }}>
              {/* Feature index number */}
              <span style={{ position: "absolute", top: "24px", right: "28px", fontSize: "0.85rem", fontWeight: 900, color: f.numColor, fontFamily: "'Outfit', sans-serif" }}>
                {`0${idx + 1}`}
              </span>
              <h3 style={{ fontSize: "0.98rem", fontWeight: 800, color: ACCENT, margin: "0 0 12px", paddingRight: "32px", display: "flex", alignItems: "center", gap: "6px" }}>
                {f.title}
                <span style={{ color: f.numColor, fontSize: "0.9rem" }}>┐</span>
              </h3>
              <p style={{ fontSize: "0.88rem", color: TEXT_MUTED, lineHeight: 1.65, margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── 3. TARGET AUDIENCE & PERSONAS SECTION ── */}
      <motion.div {...fade(0.1)} style={{ padding: "54px 48px", borderBottom: `1px solid ${BORDER}`, background: BG_WHITE }}>
        <SectionHeader num="03" label="User Research" title="Target Audience" color={ACCENT} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "32px" }}>
          
          {/* Emily's Dossier Card (Left Aligned) */}
          <div style={{ background: BG_WHITE, border: `1.5px solid ${BORDER}`, borderRadius: "0", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            {/* Dossier Banner Header */}
            <div style={{ background: "#fff5f7", padding: "28px 32px", borderBottom: `1.5px solid ${BORDER}`, display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "0.62rem", fontWeight: 800, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  User Dossier 01
                </span>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: TEXT_DARK, margin: 0 }}>
                  Emily
                </h3>
                <span style={{ fontSize: "0.78rem", color: "#0d9488", fontWeight: 700, textTransform: "uppercase" }}>
                  the Reputation Manager
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "6px" }}>
                  <span style={{ padding: "4px 8px", background: BG_WHITE, border: `1px solid ${BORDER}`, fontSize: "0.72rem", fontWeight: 700, color: TEXT_DARK }}>
                    🎂 34 Years Old
                  </span>
                  <span style={{ padding: "4px 8px", background: BG_WHITE, border: `1px solid ${BORDER}`, fontSize: "0.72rem", fontWeight: 700, color: TEXT_DARK }}>
                    💼 Reputation Manager at agency
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
                alt="Emily"
                style={{ width: "68px", height: "68px", border: `2.5px solid ${ACCENT}`, objectFit: "cover", flexShrink: 0, borderRadius: "8px" }}
              />
            </div>

            {/* Dossier Content */}
            <div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Key Quote */}
              <div style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "16px", margin: "4px 0" }}>
                <p style={{ fontSize: "0.92rem", color: TEXT_MUTED, fontStyle: "italic", lineHeight: 1.5, margin: 0 }}>
                  "I want to efficiently monitor and manage client reviews, but juggling multiple clients and review platforms makes it difficult to keep track of reviews and respond promptly."
                </p>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <TargetIcon color={ACCENT} />
                  <h4 style={{ fontSize: "0.75rem", fontWeight: 800, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                    Goals
                  </h4>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>• Efficiently monitor and manage client reviews.</p>
                  <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>• Ensure timely responses to maintain a positive online reputation.</p>
                  <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>• Provide comprehensive review reports to clients.</p>
                </div>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <WarningIcon color={ACCENT} />
                  <h4 style={{ fontSize: "0.75rem", fontWeight: 800, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                    Challenges
                  </h4>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>• Juggling multiple clients and review platforms.</p>
                  <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>• Difficulty in keeping track of all reviews and responding promptly.</p>
                  <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>• Difficulty in creating engaging content consistently.</p>
                </div>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <RocketIcon color={ACCENT} />
                  <h4 style={{ fontSize: "0.75rem", fontWeight: 800, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                    How GrowStack helps
                  </h4>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    "Centralizes review monitoring across various platforms.",
                    "Offers customizable filters for focused analysis.",
                    "Simplifies response management with easy-to-use tools."
                  ].map((h, i) => (
                    <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: ACCENT, fontWeight: "bold", fontSize: "0.95rem", lineHeight: 1.3 }}>✓</span>
                      <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, lineHeight: 1.5, margin: 0 }}>
                        {h}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* John's Dossier Card (Right Aligned) */}
          <div style={{ background: BG_WHITE, border: `1.5px solid ${BORDER}`, borderRadius: "0", overflow: "hidden", display: "flex", flexDirection: "column", textAlign: "right" }}>
            {/* Dossier Banner Header */}
            <div style={{ background: "#faf5f8", padding: "28px 32px", borderBottom: `1.5px solid ${BORDER}`, display: "flex", flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "flex-end" }}>
                <span style={{ fontSize: "0.62rem", fontWeight: 800, color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  User Dossier 02
                </span>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: TEXT_DARK, margin: 0 }}>
                  John
                </h3>
                <span style={{ fontSize: "0.78rem", color: "#0d9488", fontWeight: 700, textTransform: "uppercase" }}>
                  the Small Business Owner
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "flex-end", marginTop: "4px" }}>
                  <span style={{ padding: "4px 8px", background: BG_WHITE, border: `1px solid ${BORDER}`, fontSize: "0.72rem", fontWeight: 700, color: TEXT_DARK }}>
                    45 Years Old 🎂
                  </span>
                  <span style={{ padding: "4px 8px", background: BG_WHITE, border: `1px solid ${BORDER}`, fontSize: "0.72rem", fontWeight: 700, color: TEXT_DARK }}>
                    Owner of local restaurant 💼
                  </span>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80"
                alt="John"
                style={{ width: "68px", height: "68px", border: `2.5px solid ${ACCENT}`, objectFit: "cover", flexShrink: 0, borderRadius: "8px" }}
              />
            </div>

            {/* Dossier Content */}
            <div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Key Quote */}
              <div style={{ borderRight: `3px solid ${ACCENT}`, paddingRight: "16px", margin: "4px 0", textAlign: "right" }}>
                <p style={{ fontSize: "0.92rem", color: TEXT_MUTED, fontStyle: "italic", lineHeight: 1.5, margin: 0 }}>
                  "I want to improve the restaurant's online reputation, but I have limited time and resources to track reviews with difficulty managing reviews across multiple platforms."
                </p>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "flex-end", marginBottom: "8px" }}>
                  <h4 style={{ fontSize: "0.75rem", fontWeight: 800, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                    Goals
                  </h4>
                  <TargetIcon color={ACCENT} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "flex-end" }}>
                  <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>Improve the restaurant's online reputation. •</p>
                  <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>Attract more customers through positive reviews. •</p>
                  <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>Monitor and respond to customer feedback efficiently. •</p>
                </div>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "flex-end", marginBottom: "8px" }}>
                  <h4 style={{ fontSize: "0.75rem", fontWeight: 800, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                    Challenges
                  </h4>
                  <WarningIcon color={ACCENT} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "flex-end" }}>
                  <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>Limited time and resources for tracking reviews. •</p>
                  <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>Difficulty in managing reviews across multiple platforms. •</p>
                  <p style={{ fontSize: "0.9rem", color: TEXT_MUTED, lineHeight: 1.6, margin: 0 }}>Ensuring timely responses to maintain customer satisfaction. •</p>
                </div>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "flex-end", marginBottom: "12px" }}>
                  <h4 style={{ fontSize: "0.75rem", fontWeight: 800, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                    How GrowStack helps
                  </h4>
                  <RocketIcon color={ACCENT} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-end" }}>
                  {[
                    "Provides an easy-to-use dashboard to track and manage reviews.",
                    "Visualizes review trends for actionable insights.",
                    "Facilitates direct responses to reviews from the platform."
                  ].map((h, i) => (
                    <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", justifyContent: "flex-end" }}>
                      <p style={{ fontSize: "0.85rem", color: TEXT_MUTED, lineHeight: 1.5, margin: 0, textAlign: "right" }}>
                        {h}
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

      {/* ── 4. VISUAL STYLES SECTION ── */}
      <motion.div {...fade(0.15)} style={{ padding: "54px 48px", background: BG_WHITE }}>
        <SectionHeader num="04" label="UI Design" title="Visual Styles" color={ACCENT} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>

          {/* Left Column — Moodboard Image with styled labels */}
          <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", border: `1.5px solid ${BORDER}`, overflow: "hidden", borderRadius: "0", minHeight: "360px" }}>
            <img 
              src="/growstack_visual_moodboard.png" 
              alt="GrowStack Moodboard" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* Absolute Badges on Image */}
            <span style={{ position: "absolute", top: "40%", left: "10%", padding: "6px 14px", background: "#FEF3C7", border: "2px solid #2d2a2a", color: "#2d2a2a", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.02em" }}>
              Leadership
            </span>
            <span style={{ position: "absolute", top: "15%", right: "12%", padding: "6px 14px", background: "#EEF2FF", border: "2px solid #2d2a2a", color: "#2d2a2a", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.02em" }}>
              Teamleading
            </span>
            <span style={{ position: "absolute", bottom: "35%", left: "8%", padding: "6px 14px", background: "#FCE7F3", border: "2px solid #2d2a2a", color: "#2d2a2a", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.02em" }}>
              Empathy
            </span>
            <span style={{ position: "absolute", bottom: "18%", right: "10%", padding: "6px 14px", background: "#DCFCE7", border: "2px solid #2d2a2a", color: "#2d2a2a", fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.02em" }}>
              Problem Solving
            </span>
          </div>

          {/* Right Column — Brand Colors, Logo and Typography Specimen */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* Logo and Brand Swatches */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "16px" }}>
              {/* Logo block */}
              <div style={{ background: ACCENT, border: `1.5px solid ${ACCENT}`, padding: "20px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "0", minHeight: "120px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "white" }}>
                  <GrowStackLogoGraphic />
                  <span style={{ fontWeight: 900, fontSize: "1.15rem", fontFamily: "'Outfit', sans-serif", letterSpacing: "0.08em" }}>GrowStack</span>
                </div>
              </div>

              {/* Square Green Logo block */}
              <div style={{ background: "#012e23", padding: "20px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "0", minHeight: "120px" }}>
                <div style={{ background: ACCENT, width: "56px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center", color: BG_WHITE }}>
                  <GrowStackLogoGraphic />
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
                  { hex: "#034737", name: "GROW GREEN" },
                  { hex: "#000000", name: "CHARCOAL" },
                  { hex: "#F4F4F4", name: "OFF-WHITE" },
                  { hex: "#FFFFFF", name: "PURE WHITE" }
                ].map((c) => {
                  const details = getPantoneDetails(c.hex);
                  return (
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
                          {details.rgbStr}
                        </span>
                        <span style={{ fontSize: "0.4rem", fontWeight: 700, color: ACCENT, letterSpacing: "0.02em" }}>
                          CMYK {details.cmykStr}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Typography Card Specimen (Poppins) */}
            <div style={{ background: BG_WHITE, border: `1.5px solid ${BORDER}`, padding: "24px", borderRadius: "0", fontFamily: "Poppins, sans-serif" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: ACCENT }} />
                  <span style={{ fontSize: "0.72rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Typography Specimen
                  </span>
                </div>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: TEXT_MUTED, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  POPPINS
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
                  {["Regular (400)", "Medium (500)", "Semi bold (600)", "Bold (700)"].map((w, idx) => (
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
