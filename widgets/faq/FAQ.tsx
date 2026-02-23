"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "What is Aplix?",
    answer:
      "Aplix is a lightweight API monitoring tool that gives you real-time visibility into traffic, performance, errors, and usage. It’s built to help teams understand what’s happening across their APIs without complex setup or noisy dashboards.",
  },
  {
    question: "Can I upgrade my plan at any time?",
    answer:
      "Yes, you can upgrade, downgrade, or cancel your plan at any time from your account settings. Changes are reflected immediately.",
  },
  {
    question: "Is there a discount for annual subscriptions?",
    answer:
      "Yes, if you choose to pay annually, you save 20% compared to the monthly billing cycle.",
  },
  {
    question: "What is included in the free trial?",
    answer:
      "Our 14-day free trial gives you full access to all Pro features so you can experience the power of Aplix before committing.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 30-day money-back guarantee for all our paid plans. If you are not satisfied, contact our support team.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="section"
      id="faq"
      ref={ref}
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="container-main">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: "4rem",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Left — title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2
              style={{
                fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: "1rem",
                maxWidth: 300,
              }}
            >
              Your Questions. Clearly answered.
            </h2>
            <p
              className="text-secondary"
              style={{ fontSize: "0.9rem", lineHeight: 1.6, maxWidth: 320 }}
            >
              Fast, clear, and easy to understand.
            </p>
          </motion.div>

          {/* Right — accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "1.2rem 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    color: open === i ? "#fff" : "rgba(255,255,255,0.7)",
                    transition: "color 0.2s",
                  }}
                >
                  <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                    {faq.question}
                  </span>
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        className="text-secondary"
                        style={{
                          fontSize: "0.82rem",
                          lineHeight: 1.6,
                          paddingBottom: "1.5rem",
                          maxWidth: "90%",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
