"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { PROJECTS } from "@/data/projects";

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
                <Link href={`/projects/${project.slug}`} style={{ textDecoration: "none" }}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    style={{ 
                      position: "relative",
                      height: "350px",
                      width: "350px",
                      maxWidth: "100%",
                      aspectRatio: "1/1",
                      borderRadius: "16px",
                      overflow: "hidden",
                      border: "4px solid #2d2a2a",
                      cursor: "pointer",
                      background: "white",
                      margin: "0 auto"
                    }}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </motion.article>
                </Link>
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
