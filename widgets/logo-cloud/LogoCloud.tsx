"use client";

import { motion } from "framer-motion";

const LOGOS = [
  { name: "base", icon: "⬡" },
  { name: "Shape", icon: "◈" },
  { name: "Audlabs", icon: "◎" },
  { name: "Atlas", icon: "❋" },
  { name: "Astro", icon: "✦" },
  { name: "Imagine AI", icon: "◉" },
];

// Double for seamless loop
const DOUBLED = [...LOGOS, ...LOGOS, ...LOGOS];

export function LogoCloud() {
  return (
    <section
      style={{
        paddingBlock: "3.5rem",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        overflow: "hidden",
      }}
    >
      <div
        className="container-main"
        style={{ textAlign: "center", marginBottom: "1.5rem" }}
      >
        <p className="label">Powering the world&apos;s best teams</p>
      </div>

      {/* Marquee */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Fade edges */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: 120,
            background: "linear-gradient(to right, #000, transparent)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: 120,
            background: "linear-gradient(to left, #000, transparent)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        <motion.div
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
            width: "max-content",
          }}
        >
          {DOUBLED.map((logo, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                color: "rgba(255,255,255,0.35)",
                fontSize: "0.85rem",
                fontWeight: 500,
                whiteSpace: "nowrap",
                userSelect: "none",
                transition: "color 0.2s",
                padding: "0 0.75rem",
              }}
            >
              <span style={{ fontSize: "1.1rem", opacity: 0.5 }}>
                {logo.icon}
              </span>
              {logo.name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
