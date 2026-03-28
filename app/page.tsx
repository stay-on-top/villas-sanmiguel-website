"use client";

const PHONE = "9562276922";
const PHONE_DISPLAY = "(956) 227-6922";
const AGENT = "Yoli San Miguel";

const features = [
  { label: "Lot Size", value: "½ Acre" },
  { label: "Price", value: "$105,000" },
  { label: "Lots Available", value: "8 Remaining" },
  { label: "Location", value: "Mile 5.5, Weslaco TX" },
  { label: "Type", value: "Residential" },
  { label: "Utilities", value: "Contact for details" },
];

const highlights = [
  "Half-acre lots — room to build your dream home",
  "Prime location on Mile 5.5 in Weslaco, TX",
  "Residential subdivision in the Rio Grande Valley",
  "Close to schools, shopping, and major highways",
  "Flexible financing options available",
  "Only 8 lots remaining — don't miss out",
];

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav-wrap" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 48px", background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#D4AF37", marginBottom: 2 }}>Villas San Miguel</p>
          <p style={{ fontSize: 11, color: "#999", letterSpacing: "1px" }}>Weslaco, TX</p>
        </div>
        <ul className="nav-links" style={{ display: "flex", gap: 28, listStyle: "none", margin: 0, padding: 0 }}>
          {[["#lots","Available Lots"],["#details","Details"],["#location","Location"],["#contact","Contact"]].map(([href, label]) => (
            <li key={href}><a href={href} style={{ color: "#cccccc", textDecoration: "none", fontSize: 12, fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase" }}>{label}</a></li>
          ))}
        </ul>
        <a href={`tel:${PHONE}`} style={{ background: "#D4AF37", color: "#0a0a0a", textDecoration: "none", padding: "12px 28px", fontSize: 12, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>Call Now</a>
      </nav>

      {/* HERO */}
      <section id="home" style={{ position: "relative", height: "100vh", minHeight: 640, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#0a0a0a" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0a0a0a 0%, #1a1400 50%, #0a0a0a 100%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 60% 50%, rgba(212,175,55,0.08) 0%, transparent 70%)" }} />
        <div style={{ position: "relative", textAlign: "center", maxWidth: 860, padding: "0 24px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#D4AF37", marginBottom: 20 }}>Weslaco, TX · Mile 5.5 · Rio Grande Valley</p>
          <h1 style={{ fontSize: "clamp(42px,7vw,86px)", fontWeight: 900, lineHeight: 0.95, letterSpacing: "-2px", textTransform: "uppercase", marginBottom: 24 }}>Villas <span style={{ color: "#D4AF37" }}>San Miguel</span></h1>
          <p style={{ fontSize: "clamp(15px,2vw,18px)", color: "#cccccc", maxWidth: 520, margin: "0 auto 16px", fontWeight: 300 }}>Half-acre residential lots in one of Weslaco's most desirable locations. Build the home you've always envisioned.</p>
          <div style={{ display: "inline-block", background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)", padding: "10px 24px", marginBottom: 40 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#D4AF37", letterSpacing: "1px" }}>8 Lots Remaining · Starting at $105,000</span>
          </div>
          <div className="hero-btns" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${PHONE}`} style={{ background: "#D4AF37", color: "#0a0a0a", textDecoration: "none", padding: "18px 44px", fontSize: 14, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Call {AGENT}</a>
            <a href="#lots" style={{ background: "transparent", color: "white", textDecoration: "none", padding: "18px 44px", fontSize: 14, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", border: "1.5px solid rgba(255,255,255,0.3)" }}>View Lots</a>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-row" style={{ background: "#D4AF37", padding: "20px 48px", display: "flex", justifyContent: "center", gap: 64, flexWrap: "wrap" }}>
        {[["8","Lots Available"],["½ Acre","Per Lot"],["$105K","Starting Price"],["Weslaco TX","Mile 5.5"]].map(([n, l]) => (
          <div key={l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.5px", color: "#0a0a0a" }}>{n}</div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(0,0,0,0.6)", marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* LOTS / DETAILS */}
      <section id="lots" className="section-pad" style={{ padding: "100px 48px", background: "#141414" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#D4AF37", marginBottom: 16 }}>Available Lots</p>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, lineHeight: 1, letterSpacing: "-1.5px", textTransform: "uppercase", marginBottom: 16 }}>Build Your <span style={{ color: "#D4AF37" }}>Dream Home</span></h2>
          <p style={{ fontSize: 17, color: "#999", maxWidth: 560, marginBottom: 56, fontWeight: 300 }}>Only 8 half-acre lots remain in this exclusive Weslaco subdivision. Once they're gone, they're gone.</p>

          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 48 }}>
            {/* Lot details card */}
            <div style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.07)", padding: "40px 36px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#D4AF37", marginBottom: 28 }}>Lot Details</p>
              {features.map(({ label, value }) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ fontSize: 14, color: "#999" }}>{label}</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "white" }}>{value}</span>
                </div>
              ))}
              <a href={`tel:${PHONE}`} style={{ display: "block", textAlign: "center", marginTop: 32, background: "#D4AF37", color: "#0a0a0a", textDecoration: "none", padding: "16px", fontSize: 13, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Inquire Now</a>
            </div>

            {/* Highlights card */}
            <div style={{ background: "#0e0e00", border: "1px solid rgba(212,175,55,0.2)", padding: "40px 36px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#D4AF37", marginBottom: 28 }}>Why Villas San Miguel</p>
              {highlights.map(h => (
                <div key={h} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ width: 6, height: 6, background: "#D4AF37", flexShrink: 0, marginTop: 6 }} />
                  <span style={{ fontSize: 14, color: "#cccccc", lineHeight: 1.5 }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Home being built callout */}
          <div style={{ background: "#1a1a1a", border: "1px solid rgba(212,175,55,0.25)", padding: "36px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#D4AF37", marginBottom: 10 }}>See It in Action</p>
              <h3 style={{ fontSize: "clamp(18px,3vw,28px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.5px", marginBottom: 8 }}>Model Home Coming Soon</h3>
              <p style={{ fontSize: 15, color: "#999", fontWeight: 300 }}>A beautiful custom home is currently being built in the subdivision — valued at approximately $400,000. The perfect example of what's possible on your lot.</p>
            </div>
            <a href={`tel:${PHONE}`} style={{ background: "transparent", color: "#D4AF37", textDecoration: "none", padding: "14px 32px", fontSize: 13, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", border: "1.5px solid rgba(212,175,55,0.5)", whiteSpace: "nowrap" }}>Schedule a Visit</a>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="section-pad" style={{ padding: "100px 48px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#D4AF37", marginBottom: 16 }}>Location</p>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, lineHeight: 1, letterSpacing: "-1.5px", textTransform: "uppercase", marginBottom: 16 }}>Right in the <span style={{ color: "#D4AF37" }}>Heart of the Valley</span></h2>
          <p style={{ fontSize: 17, color: "#999", maxWidth: 520, marginBottom: 48, fontWeight: 300 }}>Located on Mile 5.5 in Weslaco, TX — minutes from schools, shopping, and the best of the Rio Grande Valley.</p>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              {[["Address","711 Urie Drive, Weslaco, TX 78596"],["Area","Mile 5.5, West Weslaco"],["Nearby","Schools, Shopping, Expressway 83"],["Agent",`${AGENT} · ${PHONE_DISPLAY}`]].map(([l, v]) => (
                <div key={l} style={{ display: "flex", gap: 16, padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ fontWeight: 700, color: "#D4AF37", minWidth: 80, fontSize: 13, letterSpacing: "0.5px" }}>{l}</span>
                  <span style={{ fontSize: 14, color: "#cccccc" }}>{v}</span>
                </div>
              ))}
              <a href="https://www.google.com/maps/dir/?api=1&destination=711+Urie+Drive+Weslaco+TX+78596" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 32, background: "#D4AF37", color: "#0a0a0a", textDecoration: "none", padding: "14px 32px", fontSize: 13, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Get Directions</a>
            </div>
            <div>
              <iframe src="https://maps.google.com/maps?q=711+Urie+Drive+Weslaco+TX+78596&output=embed&z=15" width="100%" height="360" style={{ border: "none", display: "block", filter: "grayscale(30%) invert(90%) hue-rotate(180deg)" }} allowFullScreen loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-pad" style={{ padding: "100px 48px", background: "#141414" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#D4AF37", marginBottom: 16 }}>Get In Touch</p>
          <h2 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, lineHeight: 1, letterSpacing: "-1.5px", textTransform: "uppercase", marginBottom: 16 }}>Only <span style={{ color: "#D4AF37" }}>8 Lots Left</span></h2>
          <p style={{ fontSize: 17, color: "#999", marginBottom: 48, fontWeight: 300 }}>These won't last. Call or text Yoli San Miguel today to ask questions, schedule a visit, or reserve your lot.</p>
          <div style={{ background: "#1a1a1a", border: "1px solid rgba(212,175,55,0.2)", padding: "48px 40px", marginBottom: 32 }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#D4AF37", marginBottom: 12 }}>Your Agent</div>
            <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: "-0.5px", marginBottom: 8 }}>{AGENT}</div>
            <div style={{ fontSize: 16, color: "#999", marginBottom: 32 }}>Licensed Real Estate Agent · Rio Grande Valley</div>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={`tel:${PHONE}`} style={{ background: "#D4AF37", color: "#0a0a0a", textDecoration: "none", padding: "16px 40px", fontSize: 14, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>Call Now</a>
              <a href={`sms:${PHONE}`} style={{ background: "transparent", color: "white", textDecoration: "none", padding: "16px 40px", fontSize: 14, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", border: "1.5px solid rgba(255,255,255,0.25)" }}>Send a Text</a>
            </div>
          </div>
          <p style={{ fontSize: 13, color: "#666" }}>{PHONE_DISPLAY} · Weslaco, TX</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "36px 48px" }}>
        <div className="footer-inner" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#D4AF37" }}>Villas San Miguel</p>
            <p style={{ fontSize: 12, color: "#666", marginTop: 4 }}>Weslaco, TX · Rio Grande Valley</p>
          </div>
          <p style={{ fontSize: 12, color: "#666" }}>© 2026 Villas San Miguel · All rights reserved</p>
          <a href={`tel:${PHONE}`} style={{ fontSize: 13, color: "#D4AF37", textDecoration: "none", fontWeight: 600 }}>{PHONE_DISPLAY}</a>
        </div>
      </footer>
    </>
  );
}
