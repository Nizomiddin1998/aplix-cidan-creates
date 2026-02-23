"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Changelog", href: "/changelog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          width: "90%",
          maxWidth: 900,
        }}
      >
        <div
          className="corner-bracket"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 52,
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 4,
            paddingInline: "1.2rem",
            boxShadow: "0 8px 32px -8px rgba(0,0,0,0.5)",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            <span
              style={{
                width: 20,
                height: 20,
                background: "#fff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M6 1L11 10H1L6 1Z" fill="#000" />
              </svg>
            </span>
            <span
              style={{
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "#fff",
                letterSpacing: "-0.01em",
              }}
            >
              Aplix
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
            className="hidden md:flex"
          >
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  padding: "0.4rem 0.75rem",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.65)")
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link
              href="/pricing"
              className="btn-brand hidden md:inline-flex"
              style={{
                padding: "0.45rem 1rem",
                fontSize: "0.75rem",
              }}
            >
              GET STARTED ▶
            </Link>
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden"
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                padding: 4,
              }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "fixed",
              top: 56,
              left: 0,
              right: 0,
              zIndex: 49,
              background: "rgba(0,0,0,0.96)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              padding: "1rem 1.5rem 1.5rem",
            }}
          >
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  padding: "0.65rem 0",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/pricing"
              className="btn-brand"
              style={{
                marginTop: "1rem",
                width: "100%",
                justifyContent: "center",
              }}
            >
              GET STARTED ▶
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
