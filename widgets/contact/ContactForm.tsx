"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MessageSquare, Phone } from "lucide-react";

export function ContactForm() {
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
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: "5rem",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2.5rem",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "1.2rem",
                  }}
                >
                  Get in touch
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      color: "var(--text-secondary)",
                      fontSize: "0.9rem",
                    }}
                  >
                    <Mail size={18} style={{ color: "var(--brand)" }} />
                    hello@aplix.com
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      color: "var(--text-secondary)",
                      fontSize: "0.9rem",
                    }}
                  >
                    <Phone size={18} style={{ color: "var(--brand)" }} />
                    +1 (555) 123-4567
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      color: "var(--text-secondary)",
                      fontSize: "0.9rem",
                    }}
                  >
                    <MessageSquare
                      size={18}
                      style={{ color: "var(--brand)" }}
                    />
                    Discord Community
                  </div>
                </div>
              </div>

              <div
                className="corner-bracket"
                style={{
                  padding: "1.5rem",
                  border: "1px solid var(--border)",
                  borderRadius: 4,
                  background: "var(--surface)",
                }}
              >
                <h4
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "0.4rem",
                  }}
                >
                  Enterprise Support
                </h4>
                <p
                  className="text-secondary"
                  style={{ fontSize: "0.75rem", lineHeight: 1.5 }}
                >
                  Need a custom SLA or integration? Our enterprise team is
                  available for direct consulting and setup.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="corner-bracket"
            style={{
              padding: "2.5rem",
              border: "1px solid var(--border)",
              borderRadius: 4,
              background: "var(--surface)",
            }}
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 6 }}
                >
                  <label
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--border)",
                      borderRadius: 4,
                      padding: "0.75rem",
                      color: "#fff",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 6 }}
                >
                  <label
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--border)",
                      borderRadius: 4,
                      padding: "0.75rem",
                      color: "#fff",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border)",
                    borderRadius: 4,
                    padding: "0.75rem",
                    color: "#fff",
                    fontSize: "0.9rem",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help?"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border)",
                    borderRadius: 4,
                    padding: "0.75rem",
                    color: "#fff",
                    fontSize: "0.9rem",
                    outline: "none",
                    resize: "none",
                  }}
                />
              </div>

              <button
                className="btn-brand"
                style={{
                  padding: "0.8rem",
                  justifyContent: "center",
                  marginTop: "0.5rem",
                }}
              >
                SEND MESSAGE ▶
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
