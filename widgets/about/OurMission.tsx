"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function OurMission() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section" ref={ref}>
      <div className="container-main">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Left — content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Built for developers,
              <br />
              by developers.
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              <p
                className="text-secondary"
                style={{ fontSize: "1rem", lineHeight: 1.7 }}
              >
                Monitoring shouldn&apos;t be a chore. We started Aplix because
                we were tired of context-switching between different tools just
                to find the root cause of an API failure.
              </p>
              <p
                className="text-secondary"
                style={{ fontSize: "1rem", lineHeight: 1.7 }}
              >
                Our goal is to create a single source of truth for your API
                health. Something that feels light enough for a side project,
                but robust enough for enterprise scales.
              </p>
            </div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="corner-bracket"
            style={{
              position: "relative",
              borderRadius: 4,
              overflow: "hidden",
              aspectRatio: "1/1",
            }}
          >
            <Image
              src="https://framerusercontent.com/images/9LKnnWcx8OELyDZDpkOLbWnlkk.webp"
              alt="Our mission"
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
