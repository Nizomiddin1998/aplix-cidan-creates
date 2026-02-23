"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const TRUST = [
  "No credit card required",
  "Setup in under 5 minutes",
  "Clean, light interface",
];

export function Hero() {
  return (
    <section
      style={{
        paddingTop: 56,
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle dark-red radial glow at center-top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: 600,
          background:
            "radial-gradient(circle at center 20%, rgba(232,79,23,0.12) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Strong bottom glow behind dashboard */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "120%",
          height: 400,
          background:
            "radial-gradient(circle at center bottom, rgba(232,79,23,0.2) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="container-main"
        style={{
          paddingTop: "6rem",
          paddingBottom: "4rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
            fontWeight: 700,
            maxWidth: 700,
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            marginBottom: "1.4rem",
          }}
        >
          Your API. Fully visible.
          <br />
          Always under control.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.08}
          style={{
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
            maxWidth: 520,
            lineHeight: 1.5,
            marginBottom: "2.2rem",
          }}
        >
          Track API traffic, latency, errors, and usage in real time. A
          streamlined dashboard for teams focused on reliability.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.16}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: "1.8rem",
          }}
        >
          <Link
            href="/pricing"
            className="btn-brand"
            style={{ fontSize: "0.85rem", padding: "0.7rem 1.4rem" }}
          >
            GET STARTED ▶
          </Link>
          <Link
            href="/contact"
            className="btn-outline"
            style={{
              fontSize: "0.85rem",
              padding: "0.7rem 1.4rem",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            REQUEST DEMO
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.22}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
            marginBottom: "5rem",
          }}
        >
          {TRUST.map((t) => (
            <span
              key={t}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: "0.8rem",
                color: "var(--text-muted)",
              }}
            >
              <CheckCircle size={14} color="var(--brand)" />
              {t}
            </span>
          ))}
        </motion.div>

        {/* Dashboard Preview Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          style={{ position: "relative" }}
        >
          <div
            className="corner-bracket"
            style={{
              position: "relative",
              borderRadius: 4,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(4px)",
            }}
          >
            {/* Top corner dots */}
            <span
              style={{
                position: "absolute",
                top: -1,
                left: -1,
                width: 6,
                height: 6,
                background: "var(--brand)",
                borderRadius: 0,
                zIndex: 2,
              }}
            />
            <span
              style={{
                position: "absolute",
                top: -1,
                right: -1,
                width: 6,
                height: 6,
                background: "var(--brand)",
                borderRadius: 0,
                zIndex: 2,
              }}
            />
            <span
              style={{
                position: "absolute",
                bottom: -1,
                left: -1,
                width: 6,
                height: 6,
                background: "var(--brand)",
                borderRadius: 0,
                zIndex: 2,
              }}
            />
            <span
              style={{
                position: "absolute",
                bottom: -1,
                right: -1,
                width: 6,
                height: 6,
                background: "var(--brand)",
                borderRadius: 0,
                zIndex: 2,
              }}
            />

            {/* The actual dashboard image */}
            <Image
              src="https://framerusercontent.com/images/9LKnnWcx8OELyDZDpkOLbWnlkk.webp"
              alt="Aplix dashboard — API monitoring interface"
              width={1632}
              height={1227}
              priority
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                maxHeight: 540,
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
