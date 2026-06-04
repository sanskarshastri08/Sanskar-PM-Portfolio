"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS, Project } from "@/data/projects";
import ProjectDetailModal from "@/components/ProjectDetailModal";

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
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
              <p style={{ color: "#4a4a4a", maxWidth: "560px", margin: "20px auto 0", fontWeight: 500, fontSize: "1rem" }}>
                Click any project to explore the full case study.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {PROJECTS.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <motion.article
                    onClick={() => setActiveProject(project)}
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
                      margin: "0 auto",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </motion.article>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>

      {/* Popup Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
