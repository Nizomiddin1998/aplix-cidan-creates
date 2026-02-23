"use client";

import Link from "next/link";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Changelog", href: "/changelog" },
];

const SOCIALS = [
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        paddingBlock: "4rem 2rem",
      }}
    >
      <div className="container-main">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            marginBottom: "4rem",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Left — Logo and Links */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  width: 22,
                  height: 22,
                  background: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1L11 10H1L6 1Z" fill="#000" />
                </svg>
              </span>
              <span
                style={{ fontWeight: 700, fontSize: "1rem", color: "#fff" }}
              >
                Aplix
              </span>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
              {LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right — Newsletter */}
          <div
            style={{ maxWidth: 360, marginLeft: "auto" }}
            className="ml-0 md:ml-auto"
          >
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#fff",
                marginBottom: "0.8rem",
              }}
            >
              Join our newsletter
            </p>
            <div style={{ display: "flex", gap: 4 }} className="corner-bracket">
              <input
                type="email"
                placeholder="name@email.com"
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 4,
                  padding: "0.6rem 0.8rem",
                  color: "#fff",
                  fontSize: "0.8rem",
                  outline: "none",
                }}
              />
              <button
                className="btn-brand"
                style={{ padding: "0.6rem 1.1rem", fontSize: "0.75rem" }}
              >
                SUBSCRIBE
              </button>
            </div>
            <p
              style={{
                fontSize: "0.65rem",
                color: "rgba(255,255,255,0.4)",
                marginTop: "0.8rem",
              }}
            >
              By clicking, you&apos;re agreeing to our{" "}
              <Link href="/terms" style={{ color: "inherit" }}>
                Terms
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            flexDirection: "column",
            gap: "1rem",
          }}
          className="md:flex-row"
        >
          <div
            style={{
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.4)",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span>
              © 2026 Aplix bu{" "}
              <span style={{ color: "var(--brand)" }}>AidanCreates</span>
            </span>
            <span style={{ marginInline: 4 }}>·</span>
            <Link
              href="/terms"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Terms
            </Link>
            <span style={{ marginInline: 4 }}>·</span>
            <Link
              href="/privacy"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Privacy
            </Link>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            {SOCIALS.map((soc, i) => (
              <Link
                key={i}
                href={soc.href}
                style={{
                  color: "rgba(255,255,255,0.4)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
                }
              >
                <soc.icon size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
