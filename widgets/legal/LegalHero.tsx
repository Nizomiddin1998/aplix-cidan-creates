"use client";

import { motion } from "framer-motion";

export function LegalHero({
  title,
  lastUpdated,
}: {
  title: string;
  lastUpdated: string;
}) {
  return (
    <section className="section" style={{ paddingBottom: "3rem" }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="label" style={{ marginBottom: "1rem" }}>
            Legal
          </p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              marginBottom: "1rem",
              maxWidth: 650,
            }}
          >
            {title}
          </h1>
          <p className="text-muted" style={{ fontSize: "0.85rem" }}>
            Last updated: {lastUpdated}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
