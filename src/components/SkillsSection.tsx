"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    title: "Product Strategy",
    color: "#e9d5ff",
    skills: [
      { name: "Roadmapping & Prioritisation", pct: 95 },
      { name: "OKR Setting & Alignment", pct: 90 },
      { name: "Market & Competitive Analysis", pct: 88 },
      { name: "Go-to-Market Strategy", pct: 85 },
    ],
  },
  {
    title: "Research & Discovery",
    color: "#ccfbf1",
    skills: [
      { name: "User Interviews & Surveys", pct: 95 },
      { name: "Jobs-to-be-Done Framework", pct: 92 },
      { name: "Usability Testing", pct: 88 },
      { name: "Data Analysis (SQL, Mixpanel)", pct: 82 },
    ],
  },
  {
    title: "Execution & Delivery",
    color: "#fef3c7",
    skills: [
      { name: "Agile / Scrum Facilitation", pct: 93 },
      { name: "PRD & Spec Writing", pct: 95 },
      { name: "A/B Testing & Experimentation", pct: 88 },
      { name: "Sprint Planning & Grooming", pct: 90 },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "#fbcfe8",
    skills: [
      { name: "Jira / Linear / Notion", pct: 96 },
      { name: "Figma (Wireframing)", pct: 78 },
      { name: "Amplitude / Mixpanel", pct: 84 },
      { name: "Confluence / Coda", pct: 90 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section" style={{ background: "#F1F1F1", paddingBottom: "100px", paddingTop: "60px" }}>
      <div className="container-xl">
        {/* Header */}
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
            SKILL SET
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
            Technical <span style={{ color: "#f97316" }}>Arsenal</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ 
                padding: "28px", 
                background: "white", 
                border: "2.5px solid #2d2a2a",
                borderRadius: "20px",
                boxShadow: "5px 5px 0px #2d2a2a"
              }}
            >
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 900,
                  fontSize: "1rem",
                  marginBottom: "24px",
                  color: "#2d2a2a",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em"
                }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    background: group.color,
                    border: "2px solid #2d2a2a",
                    borderRadius: "3px",
                  }}
                />
                {group.title}
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                        fontSize: "0.8rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        color: "#2d2a2a"
                      }}
                    >
                      <span>{skill.name}</span>
                      <span>{skill.pct}%</span>
                    </div>
                    <div style={{ 
                      height: "10px", 
                      background: "#f1f5f9", 
                      borderRadius: "4px",
                      border: "1.5px solid #2d2a2a",
                      overflow: "hidden"
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{
                          height: "100%",
                          background: group.color,
                          borderRight: "1.5px solid #2d2a2a"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
