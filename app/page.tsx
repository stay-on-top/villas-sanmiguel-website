"use client";

import { useEffect, useRef, useState } from "react";

const PHONE = "9562276922";
const PHONE_DISPLAY = "(956) 227-6922";
const AGENT = "Yolanda San Miguel";

const lotDetails = [
  { label: "Price",       value: "$105,000 per lot" },
  { label: "Lot size",    value: "Half acre (0.5 ac)" },
  { label: "Type",        value: "Residential lot" },
  { label: "Available",   value: "8 lots remaining" },
  { label: "Water",       value: "North Alamo WSC" },
  { label: "Electric",    value: "Magic Valley Electric" },
  { label: "Septic",      value: "Covered by seller" },
  { label: "HOA",         value: "$500 / year" },
  { label: "Community",   value: "Gated · Sidewalks" },
  { label: "Address",     value: "711 Uriel Dr W, Weslaco TX 78596" },
];

const highlights = [
  "Brand-new gated development in Weslaco, TX",
  "Seller covers full cost of septic tank installation",
  "North Alamo Water & Magic Valley Electric on site",
  "Half-acre lots — room to build exactly what you want",
  "HOA only $500/year — Villas San Miguel Owners Assoc.",
  "Sidewalks throughout the entire community",
  "Model home under construction — valued at ~$400,000",
  "Only 8 lots remaining",
];

const locationRows = [
  ["Address",  "711 Uriel Dr W, Weslaco, TX 78596"],
  ["Area",     "Gated development, mile 5.5 Weslaco"],
  ["Water",    "North Alamo WSC"],
  ["Electric", "Magic Valley Electric"],
  ["Nearby",   "Schools, shopping, Expressway 83"],
  ["Agent",    `${AGENT} · ${PHONE_DISPLAY}`],
];

// ── Scroll reveal hook ────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add("visible");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Home() {
  useReveal();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── MOBILE OVERLAY ──────────────────────────── */}
      <div className={`vsm-mobile-menu${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <a href="#lots"     onClick={closeMenu}>Available Lots</a>
        <a href="#details"  onClick={closeMenu}>Details</a>
        <a href="#location" onClick={closeMenu}>Location</a>
        <a href="#contact"  onClick={closeMenu}>Contact</a>
        <div className="vsm-mobile-cta-wrap">
          <a
            href={`tel:${PHONE}`}
            className="btn-pill"
            onClick={closeMenu}
            style={{ fontSize: 13 }}
          >
            Call Yolanda
            <span className="btn-pill-icon">↗</span>
          </a>
        </div>
      </div>

      {/* ── NAV ─────────────────────────────────────── */}
      <nav className="vsm-nav" aria-label="Site navigation">
        <span style={{
          fontFamily: "var(--font-serif)",
          fontSize: 13,
          fontWeight: 700,
          color: "var(--gold)",
          letterSpacing: "0.04em",
          marginRight: 12,
        }}>
          Villas San Miguel
        </span>

        <ul className="vsm-nav-links">
          {[["#lots","Lots"],["#details","Details"],["#location","Location"],["#contact","Contact"]].map(([href, label]) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>

        <a href={`tel:${PHONE}`} className="vsm-nav-cta">
          Call Yolanda
          <span style={{ width: 28, height: 28, borderRadius: "9999px", background: "rgba(0,0,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>↗</span>
        </a>

        <button
          className={`vsm-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── HERO ────────────────────────────────────── */}
      <section
        id="home"
        style={{
          position: "relative",
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "var(--espresso)",
          padding: "120px 24px 80px",
        }}
      >
        {/* fullscreen video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* dark overlay so text stays readable */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 0, pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 900, width: "100%", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="reveal" style={{ marginBottom: 24 }}>
            <span className="eyebrow">Weslaco, TX · Rio Grande Valley</span>
          </div>

          <h1
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "0.18em",
              color: "var(--cream)",
              marginBottom: 32,
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            <span style={{ display: "block", fontSize: "clamp(32px, 5vw, 64px)" }}>Villas</span>
            <span style={{ display: "block", fontSize: "clamp(52px, 9vw, 110px)", color: "var(--gold)" }}>San Miguel</span>
          </h1>

          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "var(--text-light)",
              maxWidth: 540,
              lineHeight: 1.65,
              fontWeight: 300,
              marginBottom: 20,
              textWrap: "pretty",
            }}
          >
            Brand-new gated development in Weslaco, TX. Half-acre residential lots — water, electric, and septic covered by seller. Build the home you&apos;ve envisioned.
          </p>

          <div
            className="reveal reveal-delay-3"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(212,175,55,0.1)",
              border: "1px solid rgba(212,175,55,0.28)",
              borderRadius: 9999,
              padding: "8px 18px",
              marginBottom: 44,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase" }}>8 lots remaining · $105,000 each</span>
          </div>

          <div className="reveal reveal-delay-4" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={`tel:${PHONE}`} className="btn-pill">
              Call {AGENT}
              <span className="btn-pill-icon">↗</span>
            </a>
            <a href="#lots" className="btn-ghost">
              View Details
            </a>
          </div>
        </div>

        {/* scroll hint */}
        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.35, zIndex: 1 }}>
          <div style={{ width: 1, height: 40, background: "var(--gold)" }} />
          <span style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)" }}>Scroll</span>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────── */}
      <div className="stat-bar">
        {[
          ["8",        "Lots available"],
          ["½ acre",   "Per lot"],
          ["$105K",    "Starting price"],
          ["Gated",    "Community"],
          ["$500/yr",  "HOA"],
        ].map(([n, l]) => (
          <div key={l} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 800, color: "var(--espresso)", letterSpacing: "-0.03em" }}>{n}</div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(13,11,8,0.55)", marginTop: 3 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* ── AGENT CTA ───────────────────────────────── */}
      <section style={{ padding: "120px 48px", background: "var(--espresso)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>

          <div className="reveal" style={{ marginBottom: 16 }}>
            <span className="eyebrow">Your agent</span>
          </div>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(34px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--cream)",
              marginBottom: 16,
              textWrap: "balance",
            }}
          >
            Meet{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Yolanda San Miguel</em>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: 17,
              color: "var(--text-muted)",
              fontWeight: 300,
              maxWidth: 520,
              lineHeight: 1.65,
              marginBottom: 56,
            }}
          >
            With deep roots in the Rio Grande Valley, Yolanda knows this market inside and out. Call or text her today — she&apos;ll answer every question and help you secure your lot.
          </p>

          <div className="reveal reveal-delay-3">
            <div className="bezel-gold-outer">
              <div className="bezel-gold-inner" style={{ padding: "48px 44px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 32 }}>
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 10 }}>Fox Real Estate Pros · Greater McAllen AOR</p>
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--cream)", marginBottom: 6 }}>{AGENT}</p>
                  <p style={{ fontSize: 14, color: "var(--text-muted)" }}>{PHONE_DISPLAY} · MLS# 486729</p>
                </div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href={`tel:${PHONE}`} className="btn-pill">
                    Call Yolanda
                    <span className="btn-pill-icon">↗</span>
                  </a>
                  <a href={`sms:${PHONE}`} className="btn-ghost">
                    Send a text
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── LOTS / BENTO ────────────────────────────── */}
      <section id="lots" style={{ padding: "120px 48px", background: "var(--ink)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>

          <div className="reveal" style={{ marginBottom: 16 }}>
            <span className="eyebrow">Available lots</span>
          </div>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(34px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--cream)",
              marginBottom: 16,
              textWrap: "balance",
            }}
          >
            Build your{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>dream home</em>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: 17,
              color: "var(--text-muted)",
              maxWidth: 560,
              lineHeight: 1.65,
              fontWeight: 300,
              marginBottom: 56,
              textWrap: "pretty",
            }}
          >
            Spacious half-acre lots in a brand-new gated Weslaco development. Only 8 remain.
          </p>

          {/* BENTO GRID */}
          <div id="details" className="bento-grid">

            {/* LOT DETAILS card */}
            <div className="bento-details reveal">
              <div className="bezel-outer" style={{ height: "100%" }}>
                <div className="bezel-inner" style={{ padding: "40px 36px", height: "100%", boxSizing: "border-box" }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 28 }}>Lot details</p>
                  <div>
                    {lotDetails.map(({ label, value }, i) => (
                      <div
                        key={label}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          padding: "13px 0",
                          borderBottom: i < lotDetails.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                          gap: 16,
                        }}
                      >
                        <span style={{ fontSize: 12, color: "var(--text-muted)", flexShrink: 0 }}>{label}</span>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--cream)", textAlign: "right" }}>{value}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 36 }}>
                    <a href={`tel:${PHONE}`} className="btn-pill" style={{ width: "100%", justifyContent: "center" }}>
                      Inquire now
                      <span className="btn-pill-icon">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WHY card */}
            <div className="bento-why reveal reveal-delay-1">
              <div className="bezel-gold-outer" style={{ height: "100%" }}>
                <div className="bezel-gold-inner" style={{ padding: "40px 32px", height: "100%", boxSizing: "border-box" }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 28 }}>Why Villas San Miguel</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    {highlights.map((h, i) => (
                      <div
                        key={h}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 12,
                          padding: "11px 0",
                          borderBottom: i < highlights.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                        }}
                      >
                        <div style={{ width: 5, height: 5, background: "var(--gold)", flexShrink: 0, marginTop: 7, borderRadius: "50%" }} />
                        <span style={{ fontSize: 13, color: "var(--text-light)", lineHeight: 1.6 }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* MODEL HOME callout — full width */}
            <div className="bento-model reveal reveal-delay-2">
              <div className="bezel-outer">
                <div
                  className="bezel-inner"
                  style={{
                    padding: "40px 44px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 28,
                    background: "linear-gradient(110deg, var(--ink-mid) 0%, var(--ink-card) 100%)",
                  }}
                >
                  <div>
                    <span className="eyebrow" style={{ marginBottom: 12 }}>See the potential</span>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(20px, 3vw, 30px)",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        color: "var(--cream)",
                        marginBottom: 10,
                      }}
                    >
                      Model home coming soon
                    </h3>
                    <p style={{ fontSize: 15, color: "var(--text-muted)", fontWeight: 300, maxWidth: 520, lineHeight: 1.65, textWrap: "pretty" }}>
                      A custom home is currently being built inside Villas San Miguel — valued at approximately $400,000. Come see exactly what&apos;s possible on your lot.
                    </p>
                  </div>
                  <a href={`tel:${PHONE}`} className="btn-ghost" style={{ whiteSpace: "nowrap" }}>
                    Schedule a visit
                  </a>
                </div>
              </div>
            </div>

          </div>{/* /bento-grid */}
        </div>
      </section>

      {/* ── LOCATION ────────────────────────────────── */}
      <section id="location" style={{ padding: "120px 48px", background: "var(--espresso)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>

          <div className="reveal" style={{ marginBottom: 16 }}>
            <span className="eyebrow">Location</span>
          </div>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(34px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--cream)",
              marginBottom: 16,
              textWrap: "balance",
            }}
          >
            Right in the{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>heart of the Valley</em>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: 17,
              color: "var(--text-muted)",
              maxWidth: 480,
              lineHeight: 1.65,
              fontWeight: 300,
              marginBottom: 56,
              textWrap: "pretty",
            }}
          >
            Weslaco, TX — close to schools, shopping, and major highways throughout the Rio Grande Valley.
          </p>

          <div className="location-grid">
            <div className="reveal">
              {locationRows.map(([l, v], i) => (
                <div
                  key={l}
                  style={{
                    display: "flex",
                    gap: 20,
                    padding: "15px 0",
                    borderBottom: i < locationRows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  <span style={{ fontWeight: 700, color: "var(--gold)", minWidth: 72, fontSize: 12, flexShrink: 0, paddingTop: 1 }}>{l}</span>
                  <span style={{ fontSize: 14, color: "var(--text-light)", lineHeight: 1.55 }}>{v}</span>
                </div>
              ))}
              <div style={{ marginTop: 36 }}>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=26.2071327,-97.9975637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill"
                >
                  Get directions
                  <span className="btn-pill-icon">↗</span>
                </a>
              </div>
            </div>

            <div className="reveal reveal-delay-1">
              <div className="bezel-outer">
                <div className="bezel-inner" style={{ overflow: "hidden" }}>
                  <iframe
                    src="https://maps.google.com/maps?q=26.2071327,-97.9975637&output=embed&z=16"
                    width="100%"
                    height="380"
                    style={{ border: "none", display: "block", filter: "grayscale(40%) invert(88%) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    title="Villas San Miguel location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────── */}
      <section id="contact" style={{ padding: "120px 48px", background: "var(--ink)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>

          <div className="reveal" style={{ marginBottom: 16 }}>
            <span className="eyebrow">Contact</span>
          </div>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(34px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--cream)",
              marginBottom: 16,
              textWrap: "balance",
            }}
          >
            Only{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>8 lots left</em>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: 17,
              color: "var(--text-muted)",
              lineHeight: 1.65,
              fontWeight: 300,
              marginBottom: 48,
              textWrap: "pretty",
            }}
          >
            These won&apos;t last long. Call or text {AGENT} today to ask questions, schedule a visit, or reserve your lot.
          </p>

          <div className="reveal reveal-delay-3">
            <div className="bezel-gold-outer">
              <div className="bezel-gold-inner" style={{ padding: "48px 40px" }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 14 }}>Your agent</p>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(22px, 4vw, 34px)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--cream)",
                    marginBottom: 6,
                  }}
                >
                  {AGENT}
                </p>
                <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 4 }}>Fox Real Estate Pros · Greater McAllen AOR</p>
                <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 36 }}>MLS# 486729</p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                  <a href={`tel:${PHONE}`} className="btn-pill">
                    Call now
                    <span className="btn-pill-icon">↗</span>
                  </a>
                  <a href={`sms:${PHONE}`} className="btn-ghost">
                    Send a text
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="reveal reveal-delay-4" style={{ marginTop: 28, fontSize: 13, color: "rgba(154,145,136,0.6)" }}>
            {PHONE_DISPLAY} · Weslaco, TX 78599
          </p>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer style={{ background: "var(--espresso)", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "32px 48px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: 14, fontWeight: 700, color: "var(--gold)", letterSpacing: "0.04em" }}>Villas San Miguel</p>
            <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 3 }}>Weslaco, TX · Gated community · Rio Grande Valley</p>
          </div>
          <p style={{ fontSize: 11, color: "rgba(154,145,136,0.5)" }}>© 2026 Villas San Miguel · All rights reserved</p>
          <a href={`tel:${PHONE}`} style={{ fontSize: 13, color: "var(--gold)", textDecoration: "none", fontWeight: 600 }}>{PHONE_DISPLAY}</a>
        </div>
      </footer>
    </>
  );
}
