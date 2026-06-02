"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Associate Product Manager",
    company: "Webbuddy",
    period: "March 2024 – Present",
    type: "AI-first SaaS",
    color: "#ccfbf1",
    highlights: [
      "Secured $350K in pre-seed funding for Growstack.ai by defining MVP roadmap and business case.",
      "Led a cross-functional team of 20+ engineers and designers through the entire product lifecycle.",
      "Rapidly developed and deployed 20+ functional AI and SaaS prototypes in a 30-day sprint.",
      "Shipped a functional Interview Copilot MVP for a client in just 2 weeks from concept to deployment.",
    ],
  },
  {
    role: "Product Fellow",
    company: "NextLeap",
    period: "July 2023 – August 2023",
    type: "Cohort-based Learning",
    color: "#fbcfe8",
    highlights: [
      "Recognized as a Top Fellow in a competitive 225-person cohort (Top 70% scoring).",
      "Delivered a data-backed proposal to reduce ride cancellations for OLA based on 35+ user studies.",
      "Mastered structured product processes: hypothesis → ideation → wireframing → usability testing.",
    ],
  },
  {
    role: "Product Strategy Intern",
    company: "Self-Directed / Projects",
    period: "May 2023 – July 2023",
    type: "Analysis",
    color: "#fef3c7",
    highlights: [
      "Analyzed 8 different products to break down key features like onboarding and booking systems.",
      "Conducted in-depth UX studies including user segmentation and journey mapping for market leaders.",
      "Proposed feature improvements with success metrics to measure real-world impact.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section" style={{ background: "#F1F1F1", paddingBottom: "100px", paddingTop: "60px" }}>
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
            CAREER JOURNEY
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
            Proven <span style={{ color: "#8b5cf6" }}>Impact</span> & <span style={{ color: "#f97316" }}>Growth</span>
          </h2>
        </div>

        {/* Timeline Content */}
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
          {/* Vertical Line */}
          <div style={{ 
            position: "absolute", 
            left: "24px", 
            top: "0", 
            bottom: "0", 
            width: "3px", 
            background: "#2d2a2a",
            zIndex: 0
          }} />

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                position: "relative",
                paddingLeft: "72px",
                marginBottom: "64px",
              }}
            >
              {/* Timeline Dot */}
              <div style={{
                position: "absolute",
                left: "12px",
                top: "0",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: exp.color,
                border: "2.5px solid #2d2a2a",
                zIndex: 2,
                boxShadow: "3px 3px 0px #2d2a2a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2d2a2a" }} />
              </div>

              {/* Experience Card */}
              <div style={{
                background: "white",
                border: "2.5px solid #2d2a2a",
                borderRadius: "20px",
                padding: "32px",
                boxShadow: "6px 6px 0px #2d2a2a"
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "20px",
                  flexWrap: "wrap",
                  gap: "12px"
                }}>
                  <div>
                    <h3 style={{ 
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 900, 
                      fontSize: "1.2rem", 
                      color: "#2d2a2a", 
                      marginBottom: "4px",
                      textTransform: "uppercase"
                    }}>
                      {exp.role}
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ 
                        color: "#2d2a2a", 
                        fontWeight: 800, 
                        fontSize: "0.9rem",
                        background: exp.color,
                        padding: "2px 8px",
                        borderRadius: "6px",
                        border: "1.5px solid #2d2a2a"
                      }}>
                        {exp.company}
                      </span>
                    </div>
                  </div>
                  <span style={{ 
                    color: "#4a4a4a", 
                    fontSize: "0.75rem", 
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    background: "#f3f4f6",
                    padding: "4px 12px",
                    borderRadius: "99px",
                    border: "1.5px solid #2d2a2a"
                  }}>
                    {exp.period}
                  </span>
                </div>

                <ul style={{ 
                  listStyle: "none", 
                  padding: 0, 
                  margin: 0, 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "12px" 
                }}>
                  {exp.highlights.map((point, j) => (
                    <li
                      key={j}
                      style={{
                        color: "#4a4a4a",
                        fontSize: "0.9rem",
                        lineHeight: 1.5,
                        paddingLeft: "24px",
                        position: "relative",
                        fontWeight: 500
                      }}
                    >
                      <div style={{
                        position: "absolute",
                        left: "0",
                        top: "6px",
                        width: "10px",
                        height: "10px",
                        background: exp.color,
                        border: "1.5px solid #2d2a2a",
                        borderRadius: "2px",
                        transform: "rotate(45deg)"
                      }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
