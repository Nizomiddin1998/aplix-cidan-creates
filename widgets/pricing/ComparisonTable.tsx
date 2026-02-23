"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Minus } from "lucide-react";

const FEATURES = [
  { name: "Project Slots", starter: "10", pro: "40", enterprise: "Unlimited" },
  {
    name: "Monthly Requests",
    starter: "50,000",
    pro: "500,000",
    enterprise: "Unlimited",
  },
  { name: "Team Members", starter: "3", pro: "15", enterprise: "Unlimited" },
  {
    name: "Retention",
    starter: "7 Days",
    pro: "30 Days",
    enterprise: "Unlimited",
  },
  { name: "Custom Branding", starter: false, pro: true, enterprise: true },
  { name: "Advanced Permissions", starter: false, pro: true, enterprise: true },
  { name: "SSO Integration", starter: false, pro: false, enterprise: true },
  { name: "24/7 Support", starter: false, pro: true, enterprise: true },
];

export function ComparisonTable() {
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
          <h2 style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>
            Compare Features
          </h2>
        </motion.div>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: "1px solid var(--border)",
              borderRadius: 4,
            }}
          >
            <thead>
              <tr
                style={{
                  background: "var(--surface)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <th
                  style={{
                    padding: "1.5rem",
                    textAlign: "left",
                    color: "var(--text-secondary)",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                  }}
                >
                  Feature
                </th>
                <th
                  style={{
                    padding: "1.5rem",
                    textAlign: "center",
                    color: "#fff",
                    fontSize: "1rem",
                  }}
                >
                  Starter
                </th>
                <th
                  style={{
                    padding: "1.5rem",
                    textAlign: "center",
                    color: "var(--brand)",
                    fontSize: "1rem",
                  }}
                >
                  Pro
                </th>
                <th
                  style={{
                    padding: "1.5rem",
                    textAlign: "center",
                    color: "#fff",
                    fontSize: "1rem",
                  }}
                >
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((feat, i) => (
                <tr
                  key={feat.name}
                  style={{
                    borderBottom: "1px solid var(--border)",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(255,255,255,0.02)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <td
                    style={{
                      padding: "1.2rem 1.5rem",
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {feat.name}
                  </td>
                  <td style={{ padding: "1.2rem", textAlign: "center" }}>
                    {typeof feat.starter === "boolean" ? (
                      feat.starter ? (
                        <Check size={16} color="var(--brand)" />
                      ) : (
                        <Minus size={16} color="var(--text-muted)" />
                      )
                    ) : (
                      <span style={{ fontSize: "0.85rem" }}>
                        {feat.starter}
                      </span>
                    )}
                  </td>
                  <td
                    style={{
                      padding: "1.2rem",
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    {typeof feat.pro === "boolean" ? (
                      feat.pro ? (
                        <Check size={16} color="var(--brand)" />
                      ) : (
                        <Minus size={16} color="var(--text-muted)" />
                      )
                    ) : (
                      <span style={{ fontSize: "0.85rem" }}>{feat.pro}</span>
                    )}
                  </td>
                  <td style={{ padding: "1.2rem", textAlign: "center" }}>
                    {typeof feat.enterprise === "boolean" ? (
                      feat.enterprise ? (
                        <Check size={16} color="var(--brand)" />
                      ) : (
                        <Minus size={16} color="var(--text-muted)" />
                      )
                    ) : (
                      <span style={{ fontSize: "0.85rem" }}>
                        {feat.enterprise}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
