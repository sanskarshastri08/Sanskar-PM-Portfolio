"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#2d2a2a",
        padding: "60px 24px",
        color: "white",
        position: "relative",
        zIndex: 10,
        borderTop: "4px solid #2d2a2a",
      }}
    >
      <div className="container-xl">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
            textAlign: "center",
          }}
        >
          {/* Logo/Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 900,
                fontSize: "2.5rem",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              SANSKAR<span style={{ color: "#f97316" }}>.</span>
            </span>
            <p style={{ color: "#9ca3af", fontWeight: 500, maxWidth: "400px", margin: "0 auto", fontSize: "0.9rem" }}>
              AI Product Manager building the future through 0-to-1 launches and strategic innovation.
            </p>
          </div>

          {/* Social Links */}
          <div style={{ display: "flex", gap: "16px" }}>
            {[
              { icon: <GithubIcon />, href: "https://github.com/sanskarshastri08" },
              { icon: <LinkedinIcon />, href: "https://lnk.ink/sanskar-linkedin" },
              { icon: <TwitterIcon />, href: "https://x.com" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  border: "1.5px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.2s ease"
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div style={{ width: "100%", height: "1px", background: "rgba(255, 255, 255, 0.1)", maxWidth: "800px" }} />

          {/* Bottom Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "1100px",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <p
              style={{
                color: "#9ca3af",
                fontSize: "0.8rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.05em"
              }}
            >
              © {year} Sanskar Shastri · Built with
              <Heart size={14} style={{ color: "#f43f5e", fill: "#f43f5e" }} />
              by Antigravity
            </p>

            <nav style={{ display: "flex", gap: "32px" }}>
              {["#about", "#experience", "#projects", "#contact"].map((href) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    fontSize: "0.75rem",
                    color: "#9ca3af",
                    textDecoration: "none",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "white")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9ca3af")}
                >
                  {href.replace("#", "")}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
