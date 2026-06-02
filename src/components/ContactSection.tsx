"use client";

import { useState } from "react";
import { Mail, X, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "16px",
    borderRadius: "12px",
    background: "#FFFFFF",
    border: "2.5px solid #2d2a2a",
    color: "#2d2a2a",
    fontSize: "1rem",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 500,
    outline: "none",
    transition: "all 0.2s ease",
  };

  return (
    <section id="contact" className="section" style={{ background: "#F1F1F1", paddingBottom: "120px", paddingTop: "60px" }}>
      <div className="container-xl">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
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
            CONTACT
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
            Let&apos;s Build <span style={{ color: "#8b5cf6" }}>Something</span> <span style={{ color: "#f97316" }}>Great</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "64px",
            alignItems: "start",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {/* Left — contact info */}
          <div>
            <h3 style={{ 
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900, 
              fontSize: "1.5rem", 
              marginBottom: "32px", 
              color: "#2d2a2a",
              textTransform: "uppercase"
            }}>
              Get in touch
            </h3>

            {[
              { icon: <Mail size={20} />, label: "Email", value: "sanskarshastri08@gmail.com", href: "mailto:sanskarshastri08@gmail.com", color: "#ccfbf1" },
              { icon: <LinkedinIcon />, label: "LinkedIn", value: "lnk.ink/sanskar-linkedin", href: "https://lnk.ink/sanskar-linkedin", color: "#e9d5ff" },
              { icon: <X size={20} />, label: "Twitter", value: "github.com/sanskarshastri08", href: "https://github.com/sanskarshastri08", color: "#fef3c7" },
            ].map((item, i) => (
              <motion.a 
                key={item.label} 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ textDecoration: "none", display: "block", marginBottom: "16px" }}
                whileHover={{ x: 8 }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    padding: "24px",
                    background: "white",
                    borderRadius: "16px",
                    border: "2.5px solid #2d2a2a",
                    boxShadow: "4px 4px 0px #2d2a2a",
                  }}
                >
                  <div style={{ 
                    width: "48px", 
                    height: "48px", 
                    borderRadius: "12px", 
                    background: item.color, 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    border: "2px solid #2d2a2a",
                    color: "#2d2a2a"
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "#4a4a4a", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.label}</div>
                    <div style={{ fontSize: "1rem", color: "#2d2a2a", fontWeight: 700 }}>{item.value}</div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Right — form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              padding: "40px", 
              background: "white", 
              borderRadius: "24px",
              border: "3px solid #2d2a2a",
              boxShadow: "10px 10px 0px #2d2a2a"
            }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <CheckCircle size={64} style={{ color: "#10b981", margin: "0 auto 24px" }} />
                <h3 style={{ 
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 900, 
                  fontSize: "1.8rem", 
                  marginBottom: "12px",
                  textTransform: "uppercase",
                  color: "#2d2a2a"
                }}>
                  Message sent!
                </h3>
                <p style={{ color: "#4a4a4a", fontWeight: 500 }}>I&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 800, color: "#2d2a2a", marginBottom: "10px", textTransform: "uppercase" }}>Name</label>
                    <input type="text" required placeholder="Your name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 800, color: "#2d2a2a", marginBottom: "10px", textTransform: "uppercase" }}>Email</label>
                    <input type="email" required placeholder="your@email.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 800, color: "#2d2a2a", marginBottom: "10px", textTransform: "uppercase" }}>Message</label>
                    <textarea required rows={5} placeholder="How can I help?" style={{ ...inputStyle, resize: "none" }} />
                  </div>
                  <motion.button 
                    type="submit" 
                    disabled={loading} 
                    whileHover={{ scale: 1.02, boxShadow: "0px 0px 0px #2d2a2a" }}
                    whileTap={{ scale: 0.98 }}
                    style={{ 
                      width: "100%", 
                      justifyContent: "center",
                      background: "#2d2a2a",
                      color: "white",
                      padding: "18px",
                      borderRadius: "14px",
                      fontSize: "1.1rem",
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      border: "3px solid #2d2a2a",
                      boxShadow: "6px 6px 0px #fbcfe8",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}
                  >
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                    {!loading && <Send size={20} />}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
