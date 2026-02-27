"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";
import { ApixLogo } from "@/shared/components/ApixLogo";
import { Button } from "@/shared/components/Button";
import { MovingDashedBorder } from "@/shared/components/MovingDashedBorder";
import { JoinCornerBacket } from "@/shared/components/JoinCornerBacket";

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Changelog", href: "/changelog" },
];

const SOCIALS = [
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Github, href: "#" },
];

export function Footer() {
  return (
    <footer className="container-main relative">
      <MovingDashedBorder left={false} right={false} bottom={false} />
      <div className="relative px-6">
        <MovingDashedBorder top={false} />
        <JoinCornerBacket />
        <div className="section grid grid-cols-1 md:grid-cols-2 gap-16 ">
          {/* Left — Logo and Links */}

          <div className="flex flex-col gap-10">
            <ApixLogo size={22} />
            <div className="flex flex-wrap gap-6">
              {LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base font-normal text-text-secondary no-underline transition-colors duration-200 leading-[1.4] hover:text-brand"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right — Newsletter */}
          <div className="max-w-[360px] md:ml-auto flex flex-col gap-3">
            <p className="text-base  leading-[1.2] text-white ">
              Join our newsletter
            </p>
            <div className="flex gap-2 p-3 relative justify-between">
              <MovingDashedBorder left={false} right={false} />
              <JoinCornerBacket />
              <div className="relative w-full">
                <JoinCornerBacket color="rgba(255, 255, 255, 0.14)" />
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="flex-1 bg-white/[0.04] border border-white/10 px-3 py-2 w-full text-white text-xs outline-none placeholder:text-white/30 placeholder:text-base focus:border-white/20 transition-colors"
                />
              </div>

              <Button text="SUBSCRIBE" rightIcon={false} />
            </div>
            <p className="text-base text-text-secondary/50 font-[300] leading-[1.2]">
              By clicking, you&apos;re agreeing to our{" "}
              <Link
                href="/#"
                className="text-brand hover:text-text-secondary transition-colors"
              >
                Terms
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative px-6">
        <MovingDashedBorder top={false} bottom={false} />
        <JoinCornerBacket />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 ">
          <div className="flex items-center gap-2 text-[0.75rem] text-white/40">
            <span>
              © 2026 Aplix by{" "}
              <span className="text-brand hover:text-text-secondary cursor-pointer transition-colors">
                AidanCreates
              </span>
            </span>
            <span className="mx-1">·</span>
            <Link
              href="/terms"
              className="text-text-secondary no-underline hover:text-brand transition-colors"
            >
              Terms
            </Link>
            <span className="mx-1">·</span>
            <Link
              href="/privacy"
              className="text-text-secondary no-underline hover:text-brand transition-colors"
            >
              Privacy
            </Link>
          </div>

          <div className="flex gap-4">
            {SOCIALS.map((soc, i) => (
              <Link
                key={i}
                href={soc.href}
                className="text-white/40 transition-colors duration-200 hover:text-white"
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
