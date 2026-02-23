"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="section" style={{ paddingBottom: "3rem" }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="label" style={{ marginBottom: "1rem" }}>
            Support
          </p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              marginBottom: "1.5rem",
              maxWidth: 650,
            }}
          >
            We&apos;re here to help you build better.
          </h1>
          <p
            className="text-secondary"
            style={{ fontSize: "1.2rem", lineHeight: 1.6, maxWidth: 600 }}
          >
            Have questions about our enterprise plans, custom integrations, or
            just want to say hi? We&apos;d love to hear from you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
