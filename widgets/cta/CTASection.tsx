"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ParticleSphere } from "./ParticleSphere";

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="section"
      ref={ref}
      style={{ position: "relative", overflow: "hidden", paddingBlock: "8rem" }}
    >
      {/* Three.js Background */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "-15%",
          transform: "translateY(-50%)",
          width: 800,
          height: 800,
          zIndex: 0,
          opacity: 0.6,
          pointerEvents: "none",
        }}
      >
        <ParticleSphere />
      </div>

      <div
        className="container-main"
        style={{ position: "relative", zIndex: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 600 }}
        >
          <h2
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              marginBottom: "1.5rem",
            }}
          >
            Start monitoring your API with confidence.
          </h2>
          <p
            className="text-secondary"
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.6,
              marginBottom: "2.5rem",
              maxWidth: 480,
            }}
          >
            Get real-time visibility into traffic, performance, and errors. No
            setup hassle. No hidden complexity.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link
              href="/pricing"
              className="btn-brand"
              style={{ padding: "0.75rem 1.6rem", fontSize: "0.85rem" }}
            >
              GET STARTED ▶
            </Link>
            <Link
              href="/contact"
              className="btn-outline"
              style={{ padding: "0.75rem 1.6rem", fontSize: "0.85rem" }}
            >
              REQUEST DEMO
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
