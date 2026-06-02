"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const PROJECTS = [
  {
    title: "HRMS",
    image: "/Users/webbuddy/.gemini/antigravity/brain/a605ecfb-78eb-4d5d-9bfa-34f0df795e4a/hrms_mockup_1778003453697.png",
    color: "#3b82f6",
  },
  {
    title: "Layered AI",
    image: "/Users/webbuddy/.gemini/antigravity/brain/a605ecfb-78eb-4d5d-9bfa-34f0df795e4a/layered_ai_mockup_1778003467545.png",
    color: "#8b5cf6",
  },
  {
    title: "Growstack Ai",
    image: "/Users/webbuddy/.gemini/antigravity/brain/a605ecfb-78eb-4d5d-9bfa-34f0df795e4a/growstack_mockup_1777959964444.png",
    color: "#2dd4bf",
  },
  {
    title: "HOUS",
    image: "/Users/webbuddy/.gemini/antigravity/brain/a605ecfb-78eb-4d5d-9bfa-34f0df795e4a/hous_mockup_1778003482527.png",
    color: "#f59e0b",
  },
  {
    title: "AI Policy Generator",
    image: "/Users/webbuddy/.gemini/antigravity/brain/a605ecfb-78eb-4d5d-9bfa-34f0df795e4a/policy_gen_mockup_1778003499607.png",
    color: "#3b82f6",
  },
  {
    title: "BElink",
    image: "/Users/webbuddy/.gemini/antigravity/brain/a605ecfb-78eb-4d5d-9bfa-34f0df795e4a/belink_mockup_1778003524595.png",
    color: "#f43f5e",
  },
  {
    title: "Ombre",
    image: "/Users/webbuddy/.gemini/antigravity/brain/a605ecfb-78eb-4d5d-9bfa-34f0df795e4a/ombre_mockup_1778003870372.png",
    color: "#8b5cf6",
    highlyRated: true,
  },
  {
    title: "Vibe",
    image: "/Users/webbuddy/.gemini/antigravity/brain/a605ecfb-78eb-4d5d-9bfa-34f0df795e4a/vibe_mockup_1778003892473.png",
    color: "#f43f5e",
    highlyRated: true,
  },
  {
    title: "Elite Deals",
    image: "/Users/webbuddy/.gemini/antigravity/brain/a605ecfb-78eb-4d5d-9bfa-34f0df795e4a/elitedeals_mockup_1778003908661.png",
    color: "#f59e0b",
    highlyRated: true,
  },
  {
    title: "Fitness AI",
    image: "/Users/webbuddy/.gemini/antigravity/brain/a605ecfb-78eb-4d5d-9bfa-34f0df795e4a/fitness_ai_mockup_1778003924454.png",
    color: "#10b981",
    highlyRated: true,
  },
  {
    title: "By Learn",
    image: "/Users/webbuddy/.gemini/antigravity/brain/a605ecfb-78eb-4d5d-9bfa-34f0df795e4a/bylearn_mockup_1778003938548.png",
    color: "#3b82f6",
    highlyRated: true,
  },
  {
    title: "Better Learn",
    image: "/Users/webbuddy/.gemini/antigravity/brain/a605ecfb-78eb-4d5d-9bfa-34f0df795e4a/betterlearn_mockup_1778003953337.png",
    color: "#2dd4bf",
    highlyRated: true,
  },
  {
    title: "AI Tool Finder",
    image: "/Users/webbuddy/.gemini/antigravity/brain/a605ecfb-78eb-4d5d-9bfa-34f0df795e4a/aitool_mockup_1778003979251.png",
    color: "#8b5cf6",
    highlyRated: true,
  },
  {
    title: "Imaginate",
    image: "/Users/webbuddy/.gemini/antigravity/brain/a605ecfb-78eb-4d5d-9bfa-34f0df795e4a/imaginate_mockup_1778003539985.png",
    color: "#10b981",
  },
  {
    title: "Journal AI",
    image: "/Users/webbuddy/.gemini/antigravity/brain/a605ecfb-78eb-4d5d-9bfa-34f0df795e4a/journal_ai_mockup_1778003555070.png",
    color: "#8b5cf6",
  },
];

export default function ProjectsSection() {
  const featuredProjects = PROJECTS.slice(0, 6);

  return (
    <section id="projects" className="section" style={{ background: "#F1F1F1", paddingTop: "40px", paddingBottom: "100px" }}>
      <div className="container-xl">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="pill" style={{ marginBottom: "12px", display: "inline-flex", background: "#fbcfe8", border: "2px solid #2d2a2a", color: "#2d2a2a", fontWeight: 800 }}>
            SELECTED WORKS
          </span>
          <h2 
            style={{ 
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2rem, 6vw, 3.2rem)",
              fontWeight: 900,
              lineHeight: 1,
              color: "#2d2a2a",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              marginBottom: "12px"
            }}
          >
            Featured <span style={{ color: "#8b5cf6" }}>Impact</span>
          </h2>
          <p style={{ color: "#4a4a4a", maxWidth: "600px", margin: "12px auto 0", fontWeight: 500, fontSize: "1rem" }}>
            Leading strategy, design, and execution from 0 to 1.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "32px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {featuredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                style={{ position: "relative" }}
              >
                <motion.article
                  whileHover="hover"
                  style={{ 
                    position: "relative",
                    height: "400px",
                    borderRadius: "32px",
                    overflow: "hidden",
                    border: "3px solid #2d2a2a",
                    boxShadow: "10px 10px 0px #2d2a2a",
                    cursor: "pointer",
                    background: "white"
                  }}
                >
                  {/* Highly Rated Badge */}
                  {project.highlyRated && (
                    <div style={{
                      position: "absolute",
                      top: "20px",
                      left: "20px",
                      zIndex: 3,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "#FFD700",
                      padding: "6px 14px",
                      borderRadius: "99px",
                      border: "2px solid #2d2a2a",
                      boxShadow: "3px 3px 0px #2d2a2a",
                    }}>
                      <Star size={14} fill="#2d2a2a" color="#2d2a2a" />
                      <span style={{ fontSize: "0.7rem", fontWeight: 900, color: "#2d2a2a", textTransform: "uppercase" }}>Highly Rated</span>
                    </div>
                  )}

                  {/* Project Image */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease"
                    }}
                  />

                  {/* Overlay Content */}
                  <motion.div
                    variants={{
                      hover: { opacity: 1 }
                    }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(45, 42, 42, 0.85)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "32px",
                      zIndex: 2
                    }}
                  >
                    <h3 style={{ 
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "2rem", 
                      fontWeight: 900, 
                      color: "white", 
                      textAlign: "center",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em"
                    }}>
                      {project.title}
                    </h3>
                  </motion.div>
                </motion.article>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <div style={{ textAlign: "center", marginTop: "64px" }}>
          <Link href="/projects" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 0px #2d2a2a" }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "16px 48px",
                borderRadius: "16px",
                background: "#2d2a2a",
                color: "white",
                fontSize: "1.1rem",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                border: "3px solid #2d2a2a",
                boxShadow: "8px 8px 0px #fbcfe8",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              View All Projects
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
