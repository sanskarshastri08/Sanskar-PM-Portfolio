"use client";

import { useState, useEffect } from "react";
import { Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: "32px",
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        padding: "0 24px",
        pointerEvents: "none",
      }}
    >
      <div
        className="container-xl"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          pointerEvents: "auto",
        }}
      >
        {/* Left Pill — Main Nav */}
        <motion.div
          layout
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(12px)",
            padding: "6px 28px 6px 6px",
            borderRadius: "999px",
            boxShadow: scrolled 
              ? "0 10px 30px -10px rgba(0,0,0,0.12), 0 4px 10px -2px rgba(0,0,0,0.05)"
              : "0 4px 20px -5px rgba(0,0,0,0.08)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            gap: "12px",
            position: "relative",
          }}
        >
          {/* Avatar / Brand Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              cursor: "pointer",
              boxShadow: "0 6px 16px rgba(249, 115, 22, 0.2)",
              border: "2px solid white",
              overflow: "hidden",
              background: "white",
            }}
          >
            <img 
              src="/image.png" 
              alt="Logo" 
              style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.15)" }} 
            />
          </motion.div>

          {/* Desktop Links with Animated Hover State */}
          <nav 
            style={{ display: "flex", gap: "8px", alignItems: "center", position: "relative" }} 
            className="hidden md:flex"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.label)}
                style={{
                  position: "relative",
                  padding: "8px 16px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: hoveredLink === link.label ? "#1e293b" : "#64748b",
                  textDecoration: "none",
                  zIndex: 1,
                  transition: "color 0.3s ease",
                }}
              >
                {link.label}
                {hoveredLink === link.label && (
                  <motion.div
                    layoutId="nav-hover-pill"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0, 0, 0, 0.04)",
                      borderRadius: "999px",
                      zIndex: -1,
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#334155",
              padding: "8px",
              marginLeft: "12px",
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </motion.div>

        {/* Right Section — CTAs */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", gap: "12px" }} 
          className="hidden sm:flex"
        >
          {/* CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: "white",
              padding: "12px 28px",
              borderRadius: "999px",
              boxShadow: "0 8px 20px -6px rgba(0,0,0,0.1), 0 4px 10px -2px rgba(0,0,0,0.05)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "#1e293b",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>Let&apos;s Connect</span>
            <div style={{ width: "6px", height: "6px", background: "#10b981", borderRadius: "50%" }} />
          </motion.a>

          {/* Mail Button */}
          <motion.a
            href="mailto:hello@sanskar.pm"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 20px -6px rgba(0,0,0,0.1)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              color: "var(--accent-primary)",
            }}
          >
            <Mail size={20} strokeWidth={2.5} />
          </motion.a>
        </motion.div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            style={{
              position: "absolute",
              top: "70px",
              left: "24px",
              right: "24px",
              background: "white",
              borderRadius: "28px",
              padding: "16px",
              boxShadow: "0 20px 50px -10px rgba(0,0,0,0.15)",
              border: "1px solid #f1f5f9",
              pointerEvents: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "16px 24px",
                  color: "#334155",
                  textDecoration: "none",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  borderRadius: "18px",
                  background: "#f8fafc",
                  transition: "all 0.2s ease",
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
