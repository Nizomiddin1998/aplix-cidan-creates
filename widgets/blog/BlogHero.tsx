"use client";

import { motion } from "framer-motion";

export function BlogHero() {
  return (
    <section className="section" style={{ paddingBottom: "3rem" }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="label" style={{ marginBottom: "1rem" }}>
            Journal
          </p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              marginBottom: "1.5rem",
              maxWidth: 600,
            }}
          >
            Insights on API Reliability.
          </h1>
          <p
            className="text-secondary"
            style={{ fontSize: "1.2rem", lineHeight: 1.6, maxWidth: 650 }}
          >
            Stories from the front lines of backend engineering, product
            updates, and industry trends.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
