/**
 * Site footer for Jegisa's Cuisine — mirrors the header's black/gold
 * palette and typography, and surfaces the flyer's actual info:
 * address, WhatsApp, and full posted hours.
 */
import Link from "next/link"

const NAV_LINKS = [
  { label: "Menu", href: "/" },
  { label: "About", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
]

const HOURS_TABLE = [
  { day: "Monday – Friday", time: "6:00 AM – 9:00 PM" },
  { day: "Saturday", time: "8:00 AM – 9:00 PM" },
  { day: "Sunday", time: "12:00 PM – 6:00 PM" },
]

const WHATSAPP_NUMBER = "233257711328" // 0257711328 in international format
const WHATSAPP_DISPLAY = "0257711328"
const ADDRESS = "UCC Amamoma, Cape Coast"

function LogoBadge() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M22 2c2.6 0 4.8 1.7 6.9 1 2.3-.8 4.7.3 5.9 2.4 1.2 2 3.5 2.9 4.4 5 .9 2.1.2 4.6 1.3 6.6 1.1 2 1.1 4.4 0 6.4-1.1 2-.4 4.5-1.3 6.6-.9 2.1-3.2 3-4.4 5-1.2 2.1-3.6 3.2-5.9 2.4-2.1-.7-4.3 1-6.9 1s-4.8-1.7-6.9-1c-2.3.8-4.7-.3-5.9-2.4-1.2-2-3.5-2.9-4.4-5-.9-2.1-.2-4.6-1.3-6.6-1.1-2-1.1-4.4 0-6.4 1.1-2 .4-4.5 1.3-6.6.9-2.1 3.2-3 4.4-5 1.2-2.1 3.6-3.2 5.9-2.4 2.1.7 4.3-1 6.9-1Z"
        fill="#C9A227"
      />
      <circle cx="22" cy="22" r="15.5" fill="#0F0D0B" />
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

function PinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="mt-0.5 shrink-0"
    >
      <path
        d="M8 1.5c-2.5 0-4.5 2-4.5 4.5 0 3.4 4.5 8.5 4.5 8.5s4.5-5.1 4.5-8.5c0-2.5-2-4.5-4.5-4.5Z"
        stroke="#C9A227"
        strokeWidth="1.2"
      />
      <circle cx="8" cy="6" r="1.6" stroke="#C9A227" strokeWidth="1.2" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="mt-0.5 shrink-0"
    >
      <path
        d="M8 1.5a6.5 6.5 0 0 0-5.6 9.8L1.5 14.5l3.3-.9A6.5 6.5 0 1 0 8 1.5Z"
        stroke="#C9A227"
        strokeWidth="1.2"
      />
      <path
        d="M5.5 5.8c.1-.4.4-.5.6-.5h.4c.2 0 .3 0 .4.3l.5 1.1c0 .2 0 .3-.1.4l-.4.4c-.1.1-.1.2 0 .4.3.5.9 1.2 1.7 1.6.1.1.3.1.4 0l.4-.5c.1-.1.3-.2.4-.1l1.1.5c.2.1.2.3.2.4v.4c0 .3-.3.6-.6.7-.9.3-2.2 0-3.6-1.3-1.2-1.1-1.7-2.1-1.8-2.8-.1-.4 0-.7.2-.9Z"
        fill="#C9A227"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#0F0D0B" }}
      className="border-t"
      data-border="#3a3327"
    >
      <div
        className="mx-auto grid max-w-6xl gap-10 border-t px-4 py-12 sm:px-6 md:grid-cols-4"
        style={{ borderColor: "#3a3327" }}
      >
        {/* Brand column */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <LogoBadge />
            <div className="leading-none">
              <div
                className="font-display text-lg font-semibold tracking-wide"
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
          </div>
          <p
            className="mt-4 font-body text-sm leading-relaxed"
            style={{ color: "#8a8378" }}
          >
            Where taste meets perfection to create nutritious meals.
          </p>
        </div>

        {/* Nav column */}
        <div>
          <h3
            className="font-body text-xs font-semibold tracking-[0.2em]"
            style={{ color: "#C9A227" }}
          >
            EXPLORE
          </h3>
          <nav className="mt-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm transition-colors hover:opacity-80"
                style={{ color: "#F3ECDD" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact column */}
        <div>
          <h3
            className="font-body text-xs font-semibold tracking-[0.2em]"
            style={{ color: "#C9A227" }}
          >
            VISIT / ORDER
          </h3>
          <div className="mt-4 flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <PinIcon />
              <span className="font-body text-sm" style={{ color: "#F3ECDD" }}>
                {ADDRESS}
              </span>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 transition-colors hover:opacity-80"
            >
              <WhatsAppIcon />
              <span className="font-body text-sm" style={{ color: "#F3ECDD" }}>
                WhatsApp: {WHATSAPP_DISPLAY}
              </span>
            </a>
          </div>
        </div>

        {/* Hours column */}
        <div>
          <h3
            className="font-body text-xs font-semibold tracking-[0.2em]"
            style={{ color: "#C9A227" }}
          >
            HOURS
          </h3>
          <dl className="mt-4 flex flex-col gap-2">
            {HOURS_TABLE.map((row) => (
              <div
                key={row.day}
                className="flex justify-between gap-4 font-body text-sm"
              >
                <dt style={{ color: "#8a8378" }}>{row.day}</dt>
                <dd style={{ color: "#F3ECDD" }}>{row.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "#3a3327" }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-center sm:flex-row sm:px-6 sm:text-left">
          <p className="font-body text-xs" style={{ color: "#6b655a" }}>
            © {new Date().getFullYear()} Jegisa&apos;s Cuisine. All rights
            reserved.
          </p>
          <p className="font-body text-xs" style={{ color: "#6b655a" }}>
            Cape Coast, Ghana
          </p>
        </div>
      </div>
    </footer>
  )
}
