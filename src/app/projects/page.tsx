"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

export default function ProjectsPage() {
  return (
    <main style={{ background: "#F1F1F1", minHeight: "100vh" }}>
      <Navbar />
      
      <section className="section" style={{ paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <span className="pill" style={{ marginBottom: "16px", display: "inline-flex", background: "#fbcfe8", border: "2px solid #2d2a2a", color: "#2d2a2a", fontWeight: 800 }}>
              ARCHIVE
            </span>
            <h1 
              style={{ 
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(3rem, 10vw, 5rem)",
                fontWeight: 900,
                lineHeight: 0.9,
                color: "#2d2a2a",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
              }}
            >
              All <span style={{ color: "#8b5cf6" }}>Projects</span>
            </h1>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
              gap: "40px",
            }}
          >
            {PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.article
                  whileHover="hover"
                  style={{ 
                    position: "relative",
                    height: "450px",
                    borderRadius: "40px",
                    overflow: "hidden",
                    border: "4px solid #2d2a2a",
                    boxShadow: "12px 12px 0px #2d2a2a",
                    cursor: "pointer",
                    background: "white"
                  }}
                >
                  {/* Highly Rated Badge */}
                  {project.highlyRated && (
                    <div style={{
                      position: "absolute",
                      top: "24px",
                      left: "24px",
                      zIndex: 3,
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "#FFD700",
                      padding: "8px 18px",
                      borderRadius: "99px",
                      border: "2.5px solid #2d2a2a",
                      boxShadow: "4px 4px 0px #2d2a2a",
                    }}>
                      <Star size={16} fill="#2d2a2a" color="#2d2a2a" />
                      <span style={{ fontSize: "0.8rem", fontWeight: 900, color: "#2d2a2a", textTransform: "uppercase" }}>Highly Rated</span>
                    </div>
                  )}

                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <motion.div
                    variants={{
                      hover: { opacity: 1 }
                    }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(45, 42, 42, 0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "40px",
                      zIndex: 2
                    }}
                  >
                    <h3 style={{ 
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "2.4rem", 
                      fontWeight: 900, 
                      color: "white", 
                      textAlign: "center",
                      textTransform: "uppercase",
                    }}>
                      {project.title}
                    </h3>
                  </motion.div>
                </motion.article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
