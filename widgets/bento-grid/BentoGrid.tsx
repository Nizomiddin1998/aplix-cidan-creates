"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const CARDS = [
  {
    id: 1,
    title: "Track API health",
    desc: "Monitor traffic, response times, status codes, and error rates in one clear view.",
    image:
      "https://framerusercontent.com/images/0m7n1838c9KN5e2GNrwCpLgSM.webp",
    wide: false,
  },
  {
    id: 2,
    title: "Backend at a glance",
    desc: "Requests, performance, alerts, and usage, all summarized without losing detail.",
    image:
      "https://framerusercontent.com/images/9LKnnWcx8OELyDZDpkOLbWnlkk.webp",
    wide: true,
  },
  {
    id: 3,
    title: "Spot issues early",
    desc: "Alert thresholds surface anomalies before they become customer problems.",
    image: null,
    wide: false,
    stat: {
      value: "$8,097",
      label: "Monthly",
      value2: "$312,134",
      label2: "Yearly",
    },
  },
  {
    id: 4,
    title: "Set it and forget it",
    desc: "Automated dashboards that update as your API grows — no manual tuning needed.",
    image: null,
    wide: false,
    stat: { value: "99.99%", label: "Uptime SLA" },
  },
];

export function BentoGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section" ref={ref}>
      <div className="container-main">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          custom={0}
          style={{ marginBottom: "2.5rem" }}
        >
          <p className="label" style={{ marginBottom: "0.6rem" }}>
            Features
          </p>
          <h2
            style={{
              fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              maxWidth: 500,
              lineHeight: 1.2,
            }}
          >
            Everything your team needs to stay on top
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 8,
          }}
        >
          {/* Card 1 — narrow */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={1}
            className="corner-bracket"
            style={{
              gridColumn: "1 / 2",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              padding: "1.4rem",
              minHeight: 300,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--brand)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Track API health
            </p>
            <p
              className="text-secondary"
              style={{
                fontSize: "0.8rem",
                lineHeight: 1.5,
                marginBottom: "1rem",
              }}
            >
              Monitor traffic, response times, status codes, and error rates in
              one clear view.
            </p>
            {/* Candlestick chart image */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 160,
              }}
            >
              <Image
                src="https://framerusercontent.com/images/0m7n1838c9KN5e2GNrwCpLgSM.webp"
                alt="API health chart"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center bottom",
                  opacity: 0.8,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, var(--surface) 0%, transparent 50%)",
                }}
              />
            </div>
          </motion.div>

          {/* Card 2 — wide (spans 2 cols) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={2}
            className="corner-bracket"
            style={{
              gridColumn: "2 / 4",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              padding: "1.4rem",
              minHeight: 300,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--brand)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Backend at a glance
            </p>
            <p
              className="text-secondary"
              style={{
                fontSize: "0.8rem",
                lineHeight: 1.5,
                marginBottom: "1rem",
              }}
            >
              Requests, performance, alerts, and usage, all summarized without
              losing detail.
            </p>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 200,
              }}
            >
              <Image
                src="https://framerusercontent.com/images/9LKnnWcx8OELyDZDpkOLbWnlkk.webp"
                alt="Dashboard overview"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top center",
                  opacity: 0.75,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, var(--surface) 0%, transparent 60%)",
                }}
              />
            </div>
          </motion.div>

          {/* Card 3 — stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={3}
            className="corner-bracket"
            style={{
              gridColumn: "1 / 2",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              padding: "1.4rem",
              minHeight: 200,
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--brand)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Spot issues early
            </p>
            <p
              className="text-secondary"
              style={{
                fontSize: "0.8rem",
                lineHeight: 1.5,
                marginBottom: "1.5rem",
              }}
            >
              Alert thresholds surface anomalies before they become customer
              problems.
            </p>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                  }}
                >
                  $8,097
                </div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                  Monthly
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                  }}
                >
                  $312,134
                </div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                  Yearly
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4 — uptime stat */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={4}
            className="corner-bracket"
            style={{
              gridColumn: "2 / 3",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              padding: "1.4rem",
              minHeight: 200,
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--brand)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Set it and forget it
            </p>
            <p
              className="text-secondary"
              style={{
                fontSize: "0.8rem",
                lineHeight: 1.5,
                marginBottom: "1.5rem",
              }}
            >
              Automated dashboards that update as your API grows.
            </p>
            <div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  color: "var(--brand)",
                }}
              >
                99.99%
              </div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                Uptime SLA
              </div>
            </div>
          </motion.div>

          {/* Card 5 — latency */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom={5}
            className="corner-bracket"
            style={{
              gridColumn: "3 / 4",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              padding: "1.4rem",
              minHeight: 200,
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--brand)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Latency tracking
            </p>
            <p
              className="text-secondary"
              style={{
                fontSize: "0.8rem",
                lineHeight: 1.5,
                marginBottom: "1.5rem",
              }}
            >
              P50/P95/P99 breakdown across every endpoint, always fresh.
            </p>
            <div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                }}
              >
                42ms
              </div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                P95 latency
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
