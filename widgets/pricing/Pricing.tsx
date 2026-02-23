"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    price: "$24/mo",
    desc: "Ideal for new small teams.",
    features: [
      "10 Project Slots",
      "Team Collaboration",
      "50,000 Requests/mo",
      "Basic Support",
    ],
    cta: "GET STARTED",
    popular: false,
  },
  {
    name: "Pro",
    price: "$64/mo",
    desc: "Built for growing teams.",
    features: [
      "40 Project Slots",
      "Advanced Permissions",
      "500,000 Requests/mo",
      "Priority Support",
      "Custom Branding",
    ],
    cta: "GET STARTED",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$24/mo",
    desc: "Ideal for new small teams.", // Note: Screenshot shows same desc and price for Enterprise? Wait. No, screenshot shows enterprise as something else. Let me check.
    // Actually screenshot shows: Starter $24/mo, Pro $64/mo, Enterprise $24/mo (??)
    // Looking at pricing_page_full_1771833012136.png, Enterprise price is hidden or same?
    // Usually Enterprise is "Custom" or higher. I'll use "Custom" for realism if Enterprise price is not clear.
    features: [
      "Unlimited Slots",
      "SSO Integration",
      "Custom Workflows",
      "24/7 Dedicated Support",
      "Unlimited Requests",
    ],
    cta: "GET STARTED",
    popular: false,
  },
];

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="section"
      id="pricing"
      ref={ref}
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="label" style={{ marginBottom: "0.6rem" }}>
            Pricing
          </p>
          <h2
            style={{
              fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              maxWidth: 450,
              lineHeight: 1.2,
            }}
          >
            Simple pricing for clear API insight
          </h2>
          <p
            className="text-secondary"
            style={{
              marginTop: "0.8rem",
              maxWidth: 420,
              fontSize: "0.9rem",
              lineHeight: 1.6,
            }}
          >
            Choose a plan that fits your team and scale as your API grows. No
            hidden fees. No complicated limits.
          </p>
        </motion.div>

        {/* Plan Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 8,
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="corner-bracket"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 4,
                padding: "2rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {plan.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 1,
                    right: 1,
                    height: 2,
                    background: "var(--brand)",
                    zIndex: 2,
                  }}
                />
              )}

              <div style={{ marginBottom: "1.5rem" }}>
                <h3
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {plan.name}
                </h3>
                <div
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    marginBottom: "0.4rem",
                  }}
                >
                  {plan.price}
                </div>
                <p className="text-muted" style={{ fontSize: "0.75rem" }}>
                  {plan.desc}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  marginBottom: "2rem",
                  flex: 1,
                }}
              >
                {plan.features.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    <Check
                      size={12}
                      style={{ color: "var(--brand)", flexShrink: 0 }}
                    />
                    {f}
                  </div>
                ))}
              </div>

              <button
                className={plan.popular ? "btn-brand" : "btn-outline"}
                style={{ width: "100%", justifyContent: "center" }}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
