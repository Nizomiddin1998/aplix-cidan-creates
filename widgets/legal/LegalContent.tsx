"use client";

import { motion } from "framer-motion";

export function LegalContent({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="section"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: 800,
            marginInline: "auto",
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "var(--text-secondary)",
          }}
          className="legal-content"
        >
          {children}
          <style jsx global>{`
            .legal-content h2 {
              font-size: 1.5rem;
              font-weight: 700;
              color: #fff;
              margin-top: 3rem;
              margin-bottom: 1.2rem;
            }
            .legal-content p {
              margin-bottom: 1.5rem;
            }
            .legal-content ul {
              margin-bottom: 2rem;
              padding-left: 1.5rem;
              list-style: disc;
            }
            .legal-content li {
              margin-bottom: 0.8rem;
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}
