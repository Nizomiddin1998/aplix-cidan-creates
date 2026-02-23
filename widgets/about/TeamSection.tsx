"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TEAM = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    image:
      "https://framerusercontent.com/images/0m7n1838c9KN5e2GNrwCpLgSM.webp",
  },
  {
    name: "Sarah Chen",
    role: "Head of Engineering",
    image:
      "https://framerusercontent.com/images/9LKnnWcx8OELyDZDpkOLbWnlkk.webp",
  },
  {
    name: "Marcus Jones",
    role: "Product Design",
    image:
      "https://framerusercontent.com/images/0m7n1838c9KN5e2GNrwCpLgSM.webp",
  },
  {
    name: "Elena Vance",
    role: "Developer Relations",
    image:
      "https://framerusercontent.com/images/9LKnnWcx8OELyDZDpkOLbWnlkk.webp",
  },
];

export function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="section"
      ref={ref}
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3.5rem", textAlign: "center" }}
        >
          <p className="label" style={{ marginBottom: "0.6rem" }}>
            The Team
          </p>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>
            Meet the minds behind Aplix
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="corner-bracket"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 4,
                overflow: "hidden",
                padding: "0.4rem",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "1/1.1",
                  borderRadius: 2,
                  overflow: "hidden",
                  marginBottom: "0.8rem",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "0.5rem 0.8rem 1rem" }}>
                <h3
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "0.2rem",
                  }}
                >
                  {member.name}
                </h3>
                <p className="text-muted" style={{ fontSize: "0.75rem" }}>
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
