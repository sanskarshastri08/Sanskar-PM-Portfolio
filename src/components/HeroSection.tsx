"use client";

import { motion } from "framer-motion";
import { Users, Zap, Layers, Cpu } from "lucide-react";

const BADGES = [
  { label: "20+ TEAM LED", icon: <Users size={14} />, color: "#e9d5ff" },
  { label: "2-WEEK MVP RECORD", icon: <Zap size={14} />, color: "#fef3c7" },
  { label: "20+ PROTOTYPES BUILT", icon: <Layers size={14} />, color: "#fbcfe8" },
  { label: "FULL STACK AI PM", icon: <Cpu size={14} />, color: "#ccfbf1" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 60px",
        background: "#F1F1F1",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div 
        className="container-xl" 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
          gap: "64px", 
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badges Row */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "32px" }}>
            {BADGES.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "6px 16px",
                  borderRadius: "99px",
                  background: badge.color,
                  border: "2.5px solid #2d2a2a",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  color: "#2d2a2a",
                  boxShadow: "2px 2px 0px #2d2a2a",
                }}
              >
                {badge.icon}
                {badge.label}
              </motion.div>
            ))}
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(3.5rem, 10vw, 6rem)",
              fontWeight: 900,
              lineHeight: 0.9,
              color: "#2d2a2a",
              textTransform: "uppercase",
              marginBottom: "32px",
              letterSpacing: "-0.02em",
            }}
          >
            SANSKAR <br />
            SHASTRI
          </h1>

          {/* Title */}
          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: 800,
              color: "#2d2a2a",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              marginBottom: "24px",
              lineHeight: 1.4,
            }}
          >
            AI PRODUCT MANAGER — 0-to-1 LAUNCHES <br />
            SECURING FUNDING & RAPID PROTOTYPING
          </h2>

          {/* Bio */}
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "#4a4a4a",
              maxWidth: "540px",
              fontWeight: 500,
            }}
          >
            AI-first Product Manager specializing in taking ambiguous ideas to deployable prototypes. 
            Secured $350K in funding for Growstack.ai and shipped 20+ functional AI prototypes in 30 days.
          </p>
        </motion.div>

        {/* Right Column: Stylized Image */}
        <motion.div
          initial={{ x: 50, opacity: 0, rotate: 5 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          style={{ position: "relative", justifySelf: "center" }}
        >
          {/* Layered Backgrounds for Frame Effect */}
          <div
            style={{
              position: "absolute",
              inset: "-12px",
              background: "#fbcfe8",
              borderRadius: "40px",
              transform: "rotate(-3deg)",
              border: "3px solid #2d2a2a",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "-8px",
              background: "#fefce8",
              borderRadius: "35px",
              transform: "rotate(2deg)",
              border: "3px solid #2d2a2a",
              zIndex: 1,
            }}
          />
          
          {/* Main Image Container */}
          <div
            style={{
              position: "relative",
              width: "clamp(280px, 35vw, 420px)",
              aspectRatio: "1/1",
              background: "#2d2a2a",
              borderRadius: "32px",
              border: "4px solid #2d2a2a",
              overflow: "hidden",
              zIndex: 2,
              boxShadow: "10px 10px 0px rgba(45, 42, 42, 0.1)",
            }}
          >
            <img
              src="/image.png"
              alt="Sanskar Singh Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
