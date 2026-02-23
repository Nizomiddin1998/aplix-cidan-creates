"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const POSTS = [
  {
    title: "How we scaled our API to 1 billion requests",
    excerpt:
      "The architecture decisions and infrastructure changes that allowed us to handle massive traffic spikes.",
    date: "Oct 24, 2026",
    image:
      "https://framerusercontent.com/images/9LKnnWcx8OELyDZDpkOLbWnlkk.webp",
    slug: "scaling-api-1-billion",
  },
  {
    title: "The future of REST in a GraphQL world",
    excerpt:
      "Why we still believe in REST for most use cases, and where GraphQL fits into our toolkit.",
    date: "Oct 12, 2026",
    image:
      "https://framerusercontent.com/images/0m7n1838c9KN5e2GNrwCpLgSM.webp",
    slug: "future-of-rest",
  },
  {
    title: "Debugging P99 latency issues",
    excerpt:
      "A deep dive into the elusive causes of tail latency and how to systematically eliminate them.",
    date: "Sep 28, 2026",
    image:
      "https://framerusercontent.com/images/9LKnnWcx8OELyDZDpkOLbWnlkk.webp",
    slug: "debugging-p99-latency",
  },
];

export function BlogGrid() {
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
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {POSTS.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="corner-bracket"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 4,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link
                href={`/blog/${post.slug}`}
                style={{
                  position: "relative",
                  aspectRatio: "16/10",
                  overflow: "hidden",
                  display: "block",
                }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.5s" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </Link>
              <div
                style={{
                  padding: "1.2rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  className="text-muted"
                  style={{ fontSize: "0.7rem", marginBottom: "0.6rem" }}
                >
                  {post.date}
                </p>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "0.6rem",
                    lineHeight: 1.3,
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {post.title}
                  </Link>
                </h3>
                <p
                  className="text-secondary"
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                    marginBottom: "1.5rem",
                    flex: 1,
                  }}
                >
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-brand"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  Read more <span style={{ fontSize: "0.7rem" }}>▶</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
