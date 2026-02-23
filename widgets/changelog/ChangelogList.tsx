"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const UPDATES = [
  {
    version: "v1.4.0",
    date: "Oct 28, 2026",
    title: "Introducing Custom Alerts",
    description:
      "You can now set custom threshold alerts for any API endpoint. Get notified via Slack or Email when latency spikes.",
    tags: ["New Feature", "Reliability"],
  },
  {
    version: "v1.3.2",
    date: "Oct 15, 2026",
    title: "Improved P95 Calculation",
    description:
      "We refined our percentile calculation for smoother charts at lower volumes.",
    tags: ["Improvement", "Charts"],
  },
  {
    version: "v1.3.1",
    date: "Oct 02, 2026",
    title: "Bug: Dashboard Scroll Fix",
    description:
      "Fixed an issue where the dashboard sidebar was being cut off on smaller resolutions.",
    tags: ["Bug Fix"],
  },
];

export function ChangelogList() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="section"
      ref={ref}
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="container-main">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            maxWidth: 800,
            marginInline: "auto",
          }}
        >
          {UPDATES.map((update, i) => (
            <motion.div
              key={update.version}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "2rem",
              }}
              className="grid-cols-1 md:grid-cols-[120px_1fr]"
            >
              <div style={{ paddingTop: "0.4rem" }}>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--brand)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {update.version}
                </p>
                <p
                  className="text-muted"
                  style={{ fontSize: "0.7rem", marginTop: "0.4rem" }}
                >
                  {update.date}
                </p>
              </div>
              <div
                className="corner-bracket"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 4,
                  padding: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    marginBottom: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  {update.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        padding: "0.2rem 0.6rem",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 100,
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "1rem",
                  }}
                >
                  {update.title}
                </h3>
                <p
                  className="text-secondary"
                  style={{ fontSize: "0.95rem", lineHeight: 1.6 }}
                >
                  {update.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
