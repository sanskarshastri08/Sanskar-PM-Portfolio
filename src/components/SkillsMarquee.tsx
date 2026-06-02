"use client";

import { motion } from "framer-motion";
import { 
  Target, 
  Search, 
  Code, 
  Layout, 
  BarChart, 
  Settings, 
  Zap, 
  Users, 
  Cpu, 
  Layers,
  Database,
  Globe,
  TrendingUp,
  Workflow
} from "lucide-react";

const SKILLS = [
  { name: "MVP Roadmap", icon: <Target size={16} />, color: "#e9d5ff" },
  { name: "SaaS Prototyping", icon: <Layers size={16} />, color: "#fef3c7" },
  { name: "AI Product Management", icon: <Cpu size={16} />, color: "#ccfbf1" },
  { name: "Cross-functional Leadership", icon: <Users size={16} />, color: "#fbcfe8" },
  { name: "User Segmentation", icon: <Search size={16} />, color: "#dcfce7" },
  { name: "Journey Mapping", icon: <Workflow size={16} />, color: "#ffedd5" },
  { name: "Wireframing", icon: <Layout size={16} />, color: "#e0f2fe" },
  { name: "Success Metrics", icon: <BarChart size={16} />, color: "#ede9fe" },
  { name: "Agile Delivery", icon: <Zap size={16} />, color: "#fae8ff" },
  { name: "GTM Strategy", icon: <TrendingUp size={16} />, color: "#ffe4e6" },
  { name: "Usability Testing", icon: <Search size={16} />, color: "#f1f5f9" },
  { name: "Product Lifecycle", icon: <Globe size={16} />, color: "#ecfeff" },
];

export default function SkillsMarquee() {
  // Duplicate the skills array to create a seamless loop
  const marqueeItems = [...SKILLS, ...SKILLS];

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        background: "#2d2a2a",
        padding: "20px 0",
        borderTop: "3px solid #2d2a2a",
        borderBottom: "3px solid #2d2a2a",
        display: "flex",
        alignItems: "center",
        position: "relative",
        zIndex: 10,
        // Re-applied negative margin for overlap with HeroSection
        marginTop: "-40px",
        transform: "translateY(-10px) rotate(-1.2deg)",
        marginBottom: "0px",
      }}
    >
      <motion.div
        animate={{
          x: ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "linear",
          },
        }}
        style={{
          display: "flex",
          gap: "24px",
          paddingLeft: "24px",
          whiteSpace: "nowrap",
        }}
      >
        {marqueeItems.map((skill, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              background: skill.color,
              border: "2.5px solid #2d2a2a",
              borderRadius: "12px",
              boxShadow: "4px 4px 0px #000",
              fontSize: "0.85rem",
              fontWeight: 900,
              color: "#2d2a2a",
              textTransform: "uppercase",
              letterSpacing: "0.03em",
            }}
          >
            <span 
              style={{ 
                display: "flex", 
                alignItems: "center",
                padding: "6px",
                background: "rgba(45, 42, 42, 0.1)",
                borderRadius: "6px"
              }}
            >
              {skill.icon}
            </span>
            {skill.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
