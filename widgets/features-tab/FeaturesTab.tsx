"use client";

import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const TABS = [
  {
    id: 0,
    step: "01",
    title: "Sign up and connect",
    desc: "Create an account, paste in your API key, and Aplix starts pulling in data immediately. No complex setup, no DevOps required.",
    image:
      "https://framerusercontent.com/images/9LKnnWcx8OELyDZDpkOLbWnlkk.webp",
  },
  {
    id: 1,
    step: "02",
    title: "Metrics organize themselves",
    desc: "Traffic, latency, errors, and usage patterns are automatically grouped and visualized. You get a clear picture of your API without manually building dashboards.",
    image:
      "https://framerusercontent.com/images/0m7n1838c9KN5e2GNrwCpLgSM.webp",
  },
  {
    id: 2,
    step: "03",
    title: "Act with confidence",
    desc: "Set alert thresholds, share dashboards with your team, and export reports. Aplix keeps you informed so you can move fast and fix issues early.",
    image:
      "https://framerusercontent.com/images/9LKnnWcx8OELyDZDpkOLbWnlkk.webp",
  },
];

export function FeaturesTab() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="section"
      ref={ref}
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="label" style={{ marginBottom: "0.6rem" }}>
            How it works
          </p>
          <h2
            style={{
              fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              maxWidth: 480,
              lineHeight: 1.2,
            }}
          >
            From setup to insight
          </h2>
          <p
            className="text-secondary"
            style={{
              marginTop: "0.8rem",
              maxWidth: 420,
              fontSize: "0.9rem",
              lineHeight: 1.6,
            }}
          >
            Metrics load instantly, charts stay responsive, and the interface
            never gets in the way of your workflow.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Left — tabs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {TABS.map((tab, i) => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                onClick={() => setActive(tab.id)}
                style={{
                  padding: "1.4rem 1.2rem",
                  cursor: "pointer",
                  borderLeft: `2px solid ${active === tab.id ? "var(--brand)" : "rgba(255,255,255,0.08)"}`,
                  background:
                    active === tab.id ? "rgba(232,79,23,0.04)" : "transparent",
                  transition: "all 0.2s",
                  marginBottom: 4,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 10,
                    marginBottom: "0.45rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "var(--brand)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {tab.step}
                  </span>
                  <h3
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color:
                        active === tab.id ? "#fff" : "rgba(255,255,255,0.55)",
                      transition: "color 0.2s",
                    }}
                  >
                    {tab.title}
                  </h3>
                </div>
                <AnimatePresence>
                  {active === tab.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-secondary"
                      style={{
                        fontSize: "0.82rem",
                        lineHeight: 1.6,
                        overflow: "hidden",
                      }}
                    >
                      {tab.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right — dynamic image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="corner-bracket hidden md:block"
            style={{
              border: "1px solid rgba(232,79,23,0.2)",
              borderRadius: 4,
              overflow: "hidden",
              position: "relative",
              aspectRatio: "16/10",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ position: "absolute", inset: 0 }}
              >
                <Image
                  src={TABS[active].image}
                  alt={TABS[active].title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
