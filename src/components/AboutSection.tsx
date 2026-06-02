"use client";

import { User, Sun, Zap, Monitor } from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
  { value: "0→1", label: "Launch Specialist" },
  { value: "20+", label: "AI Prototypes" },
  { value: "$350K", label: "Funding Secured" },
  { value: "Top", label: "NextLeap Fellow" },
];

const HIGHLIGHTS = [
  {
    icon: <User size={24} />,
    title: "AI-First Product Thinking",
    desc: "Leveraging LLMs, prompt engineering, and AI-assisted tools to accelerate product discovery, prototyping, and delivery.",
  },
  {
    icon: <Sun size={24} />,
    title: "Funding & Investor Strategy",
    desc: "Proven track record writing product strategies and business cases that secure investor confidence — $350K raised, $1M seed in progress.",
  },
  {
    icon: <Zap size={24} />,
    title: "Rapid Execution",
    desc: "Specialising in quick 0-to-1 launches — Interview Copilot went from concept to deployable MVP in just 2 weeks.",
  },
  {
    icon: <Monitor size={24} />,
    title: "Enterprise SaaS Builder",
    desc: "Built CRM, HRMS, and LMS products — deep experience across Sales Tech, HR Tech, and EdTech domains.",
  },
];

const TAGS = [
  "PRODUCT STRATEGY", "AI DEVELOPMENT", "PROMPT ENGINEERING", 
  "USER RESEARCH", "AGILE", "IOT", "ENTERPRISE SAAS", "0-TO-1 LAUNCHES"
];

export default function AboutSection() {
  return (
    <section id="about" className="section" style={{ background: "#F1F1F1", paddingBottom: "100px", paddingTop: "60px" }}>
      <div className="container-xl">
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="pill" style={{ 
            marginBottom: "16px", 
            display: "inline-flex",
            background: "#fbcfe8",
            border: "2.5px solid #2d2a2a",
            color: "#2d2a2a",
            fontWeight: 800,
            fontSize: "0.7rem",
            letterSpacing: "0.05em",
            padding: "6px 16px",
            boxShadow: "3px 3px 0px #2d2a2a"
          }}>
            CAPABILITIES
          </span>
          <h2 style={{ 
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(2rem, 6vw, 3.2rem)",
            fontWeight: 900,
            lineHeight: 1,
            color: "#2d2a2a",
            textTransform: "uppercase",
            marginBottom: "0",
            letterSpacing: "-0.01em"
          }}>
            Building products through <br />
            <span style={{ color: "#8b5cf6" }}>AI</span> & <span style={{ color: "#f97316" }}>Strategy</span>
          </h2>
        </div>

        {/* Content grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "48px",
            alignItems: "start",
            marginBottom: "80px",
          }}
        >
          {/* Bio */}
          <div>
            <p style={{ 
              color: "#2d2a2a", 
              lineHeight: 1.5, 
              marginBottom: "24px", 
              fontSize: "1.1rem",
              fontWeight: 800,
              textTransform: "uppercase"
            }}>
              I&apos;m Sanskar Shastri, an AI-first Product Manager who turns ambiguous ideas into funded, shipped digital products.
            </p>
            <p style={{ 
              color: "#4a4a4a", 
              lineHeight: 1.6, 
              marginBottom: "32px", 
              fontSize: "0.95rem",
              fontWeight: 500
            }}>
              My Electrical Engineering (IoT) background gives me a rare technical edge in AI product work — I bridge the gap between LLM complexity and real business value. From securing $350K in pre-seed funding to shipping 20+ prototypes in a single month, I thrive at 0-to-1 and move fast without losing the user.
            </p>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {TAGS.map((tag) => (
                <span key={tag} style={{ 
                  background: "white", 
                  border: "2px solid #2d2a2a",
                  color: "#2d2a2a",
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  padding: "5px 12px",
                  borderRadius: "8px",
                  boxShadow: "2px 2px 0px #2d2a2a",
                  textTransform: "uppercase"
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Highlight cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  padding: "20px", 
                  display: "flex", 
                  gap: "16px", 
                  alignItems: "flex-start", 
                  background: "white", 
                  borderRadius: "16px",
                  border: "2.5px solid #2d2a2a",
                  boxShadow: "5px 5px 0px #2d2a2a"
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: i === 0 ? "#ccfbf1" : i === 1 ? "#fef3c7" : i === 2 ? "#e9d5ff" : "#fbcfe8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#2d2a2a",
                    flexShrink: 0,
                    border: "2px solid #2d2a2a"
                  }}
                >
                  {h.icon}
                </div>
                <div>
                  <h3 style={{ 
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 900, 
                    marginBottom: "6px", 
                    fontSize: "0.95rem", 
                    color: "#2d2a2a",
                    textTransform: "uppercase"
                  }}>
                    {h.title}
                  </h3>
                  <p style={{ color: "#4a4a4a", fontSize: "0.85rem", lineHeight: 1.5, fontWeight: 500 }}>{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
          }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: "32px 20px",
                textAlign: "center",
                background: "white",
                borderRadius: "20px",
                border: "2.5px solid #2d2a2a",
                boxShadow: "6px 6px 0px #2d2a2a"
              }}
            >
              <div style={{ 
                fontFamily: "'Outfit', sans-serif",
                fontSize: "2.8rem", 
                fontWeight: 900, 
                marginBottom: "4px", 
                color: "#2d2a2a",
                lineHeight: 1
              }}>
                {stat.value}
              </div>
              <div style={{ 
                color: "#4a4a4a", 
                fontSize: "0.7rem", 
                fontWeight: 800, 
                textTransform: "uppercase", 
                letterSpacing: "0.05em" 
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
