/**
 * Site header for Jegisa's Cuisine.
 *
 * - Recreates the scalloped badge from the price-list flyer as the logo mark
 * - Shows a live "Open now / Closed" pill computed from the posted hours
 *   (Mon–Fri 6am–9pm, Sat 8am–9pm, Sun 12pm–6pm)
 * - "Order on WhatsApp" CTA links straight to wa.me with the flyer's number
 *
 * Requires Fraunces + Work Sans. If using next/font, add to your root layout:
 *
 *   import { Fraunces, Work_Sans } from "next/font/google"
 *   const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" })
 *   const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-body" })
 *
 * ...and apply `${fraunces.variable} ${workSans.variable}` on <body>.
 * Tailwind config should map:
 *   fontFamily: { display: ["var(--font-display)"], body: ["var(--font-body)"] }
 */
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  // { label: "About", href: "/about" },
  { label: "Order", href: "/order" },
  // { label: "Contact", href: "/contact" },
]

const WHATSAPP_NUMBER = "233257711328" // 0257711328 in international format

type Hours = { open: number; close: number } // 24hr, e.g. 6 -> 6:00, 21 -> 21:00

const HOURS: Record<number, Hours> = {
  0: { open: 12, close: 18 }, // Sunday
  1: { open: 6, close: 21 }, // Monday
  2: { open: 6, close: 21 },
  3: { open: 6, close: 21 },
  4: { open: 6, close: 21 },
  5: { open: 6, close: 21 }, // Friday
  6: { open: 8, close: 21 }, // Saturday
}

function useOpenStatus() {
  const [isOpen, setIsOpen] = useState<boolean | null>(null)

  useEffect(() => {
    function check() {
      const now = new Date()
      const today = HOURS[now.getDay()]
      const hourFloat = now.getHours() + now.getMinutes() / 60
      setIsOpen(hourFloat >= today.open && hourFloat < today.close)
    }

    check()
    const id = setInterval(check, 60_000)
    return () => clearInterval(id)
  }, [])

  return isOpen
}

function LogoBadge() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      {/* scalloped badge, echoing the flyer's cloud-shaped seal */}
      <path
        d="M22 2c2.6 0 4.8 1.7 6.9 1 2.3-.8 4.7.3 5.9 2.4 1.2 2 3.5 2.9 4.4 5 .9 2.1.2 4.6 1.3 6.6 1.1 2 1.1 4.4 0 6.4-1.1 2-.4 4.5-1.3 6.6-.9 2.1-3.2 3-4.4 5-1.2 2.1-3.6 3.2-5.9 2.4-2.1-.7-4.3 1-6.9 1s-4.8-1.7-6.9-1c-2.3.8-4.7-.3-5.9-2.4-1.2-2-3.5-2.9-4.4-5-.9-2.1-.2-4.6-1.3-6.6-1.1-2-1.1-4.4 0-6.4 1.1-2 .4-4.5 1.3-6.6.9-2.1 3.2-3 4.4-5 1.2-2.1 3.6-3.2 5.9-2.4 2.1.7 4.3-1 6.9-1Z"
        fill="#C9A227"
      />
      <circle cx="22" cy="22" r="15.5" fill="#15120F" />
      <text
        x="22"
        y="27"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="15"
        fontWeight="700"
        fill="#C9A227"
      >
        JC
      </text>
    </svg>
  )
}

function StatusPill() {
  const isOpen = useOpenStatus()

  if (isOpen === null) return null

  return (
    <span
      className="hidden items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide sm:inline-flex"
      style={{
        borderColor: isOpen ? "#C9A227" : "#4a453d",
        color: isOpen ? "#C9A227" : "#8a8378",
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: isOpen ? "#C9A227" : "#A83A2E" }}
      />
      {isOpen ? "Open now" : "Closed"}
    </span>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ backgroundColor: "#15120F", borderColor: "#3a3327" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo lockup */}
        <Link href="/" className="flex items-center gap-3">
          <LogoBadge />
          <div className="leading-none">
            <div
              className="font-display text-xl font-semibold tracking-wide"
              style={{ color: "#C9A227" }}
            >
              Jegisa&apos;s
            </div>
            <div
              className="font-body text-[10px] font-medium tracking-[0.3em]"
              style={{ color: "#8a8378" }}
            >
              CUISINE
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative font-body text-sm font-medium tracking-wide"
              style={{ color: "#F3ECDD" }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "#C9A227" }}
              />
            </Link>
          ))}
        </nav>

        {/* Right side: status + CTA */}
        <div className="flex items-center gap-3">
          <StatusPill />
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full px-4 py-2 font-body text-sm font-semibold transition-transform hover:scale-[1.03] sm:inline-block"
            style={{ backgroundColor: "#C9A227", color: "#15120F" }}
          >
            Order on WhatsApp
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md md:hidden"
            style={{ color: "#F3ECDD" }}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen ? (
                <path
                  d="M4 4l14 14M18 4L4 18"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <line
                    x1="3"
                    y1="6"
                    x2="19"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <line
                    x1="3"
                    y1="11"
                    x2="19"
                    y2="11"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <line
                    x1="3"
                    y1="16"
                    x2="19"
                    y2="16"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          className="border-t px-4 py-4 md:hidden"
          style={{ borderColor: "#3a3327", backgroundColor: "#15120F" }}
        >
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-sm font-medium"
                style={{ color: "#F3ECDD" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-2">
              <StatusPill />
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-4 py-2 font-body text-sm font-semibold"
                style={{ backgroundColor: "#C9A227", color: "#15120F" }}
              >
                Order on WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
