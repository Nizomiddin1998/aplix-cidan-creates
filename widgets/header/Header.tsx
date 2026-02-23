"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Navigation items ─── */
const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Changelog", href: "/changelog" },
  { label: "Contact", href: "/contact" },
];

/* ─── Orange L-shaped corner bracket ─── */
function CornerBracket({
  position,
  size = 8,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: number;
}) {
  const color = "#f54900";
  const styles: Record<string, React.CSSProperties> = {
    "top-left": {
      top: -1,
      left: -1,
      borderTop: `1.5px solid ${color}`,
      borderLeft: `1.5px solid ${color}`,
    },
    "top-right": {
      top: -1,
      right: -1,
      borderTop: `1.5px solid ${color}`,
      borderRight: `1.5px solid ${color}`,
    },
    "bottom-left": {
      bottom: -1,
      left: -1,
      borderBottom: `1.5px solid ${color}`,
      borderLeft: `1.5px solid ${color}`,
    },
    "bottom-right": {
      bottom: -1,
      right: -1,
      borderBottom: `1.5px solid ${color}`,
      borderRight: `1.5px solid ${color}`,
    },
  };

  return (
    <span
      style={{
        position: "absolute",
        width: size,
        height: size,
        pointerEvents: "none",
        zIndex: 5,
        ...styles[position],
      }}
    />
  );
}

/* ─── Bottom glow line ─── */
function GlowLine() {
  return (
    <span
      style={{
        position: "absolute",
        bottom: 0,
        left: 20,
        right: 20,
        height: 1,
        background:
          "linear-gradient(90deg, transparent 0%, rgba(245,73,0,0.45) 50%, transparent 100%)",
        pointerEvents: "none",
      }}
    />
  );
}

/* ─── Aplix Logo ─── */
function ApixLogo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        textDecoration: "none",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          width: 26,
          height: 26,
          background: "#fff",
          borderRadius: "50%",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
          <path d="M6 1.5L10.5 10H1.5L6 1.5Z" fill="#000" />
        </svg>
      </span>
      <span
        style={{
          fontWeight: 700,
          fontSize: "1.05rem",
          color: "#fff",
          letterSpacing: "-0.02em",
        }}
      >
        Aplix
      </span>
    </Link>
  );
}

/* ═══════════════════════════════════════════════════ */
/* ═══  MAIN HEADER COMPONENT                    ═══ */
/* ═══════════════════════════════════════════════════ */

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 810);
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [checkMobile]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ───── Floating Navbar ───── */}
      <div
        style={{
          position: "fixed",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          width: isMobile ? "calc(100% - 32px)" : "auto",
          pointerEvents: "none",
        }}
      >
        <motion.header
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ pointerEvents: "auto" }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: isMobile ? 0 : 20,
              justifyContent: "space-between",
              height: 52,
              padding: isMobile ? "0 16px" : "0 6px 0 20px",
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderRadius: 3,
            }}
          >
            {/* Corner brackets */}
            <CornerBracket position="top-left" />
            <CornerBracket position="top-right" />
            <CornerBracket position="bottom-left" />
            <CornerBracket position="bottom-right" />
            <GlowLine />

            {/* Logo */}
            <ApixLogo />

            {/* Desktop nav links */}
            {!isMobile && (
              <nav style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="header-nav-link"
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      fontSize: "0.78rem",
                      fontWeight: 400,
                      padding: "6px 10px",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            )}

            {/* Desktop CTA */}
            {!isMobile && (
              <div style={{ position: "relative", marginLeft: 8 }}>
                <CornerBracket position="top-left" size={6} />
                <CornerBracket position="top-right" size={6} />
                <CornerBracket position="bottom-left" size={6} />
                <CornerBracket position="bottom-right" size={6} />
                <Link
                  href="/pricing"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    height: 38,
                    padding: "0 18px",
                    background: "#f54900",
                    color: "#fff",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textDecoration: "none",
                    borderRadius: 2,
                    whiteSpace: "nowrap",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#dc4200")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#f54900")
                  }
                >
                  GET STARTED{" "}
                  <span style={{ fontSize: "0.75em", marginLeft: 2 }}>▶</span>
                </Link>
              </div>
            )}

            {/* Mobile hamburger */}
            {isMobile && (
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 8,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 5,
                }}
              >
                <span style={hamburgerLineStyle} />
                <span style={hamburgerLineStyle} />
                <span style={hamburgerLineStyle} />
              </button>
            )}
          </div>
        </motion.header>
      </div>

      {/* ───── Full-screen Mobile Menu Overlay ───── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              background: "rgba(5,5,5,0.97)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Ambient orange glow */}
            <div
              style={{
                position: "absolute",
                top: "18%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "150%",
                height: 280,
                background:
                  "radial-gradient(ellipse at center, rgba(245,73,0,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Top bar: logo + X */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "22px 24px 16px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <ApixLogo onClick={() => setMenuOpen(false)} />
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                style={{
                  background: "none",
                  border: "none",
                  color: "#f54900",
                  cursor: "pointer",
                  padding: 4,
                  lineHeight: 0,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Centered nav links */}
            <nav
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                position: "relative",
                zIndex: 1,
              }}
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{
                    delay: 0.06 + i * 0.05,
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "block",
                      color: "#fff",
                      fontSize: "1.05rem",
                      fontWeight: 400,
                      padding: "12px 32px",
                      textDecoration: "none",
                      textAlign: "center",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#f54900")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTA with corner brackets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                padding: "0 20px 32px",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div style={{ position: "relative" }}>
                <CornerBracket position="top-left" />
                <CornerBracket position="top-right" />
                <CornerBracket position="bottom-left" />
                <CornerBracket position="bottom-right" />
                <GlowLine />
                <Link
                  href="/pricing"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    width: "100%",
                    height: 50,
                    background: "#f54900",
                    color: "#fff",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    borderRadius: 2,
                    textDecoration: "none",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#dc4200")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#f54900")
                  }
                >
                  GET STARTED <span style={{ fontSize: "0.8em" }}>▶</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Shared styles ─── */
const hamburgerLineStyle: React.CSSProperties = {
  width: 22,
  height: 1.5,
  background: "#f54900",
  borderRadius: 1,
  display: "block",
};
