import { T } from "../tokens";
import CreditCardSVG from "../components/CreditCardSVG";
import Footer from "../components/Footer";

export default function LandingPage({ dark, onStart }) {
  const bg = dark ? T.darkBg : T.surface;
  const fg = dark ? T.darkOnSurface : T.onSurface;
  const cardBg = dark ? T.darkSurface : "#fff";
  const borderC = dark ? T.darkOutline : T.outlineVar;

  return (
    <div className="page-container" style={{ background: bg, minHeight: "calc(100vh - 60px)" }}>
      {/* Hero */}
      <section className="header-padding grid-2-col" style={{
        paddingBottom: 100,
        alignItems: "center",
        background: dark
          ? "linear-gradient(135deg, #111214 0%, #1a1215 50%, #111214 100%)"
          : "linear-gradient(135deg, #f7f9fc 0%, #fff5f0 50%, #f7f9fc 100%)",
      }}>
        <div className="fade-up">
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800, fontSize: 52, lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: dark ? T.darkOnSurface : T.onSurface,
            marginBottom: 24,
          }}>
            FIND THE PERFECT<br />
            <span style={{ color: T.primaryCont }}>CREDIT CARD</span><br />
            FOR YOUR<br />
            LIFE AND BUSINESS
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: dark ? "#9aa" : T.onSurfaceVar, marginBottom: 36, maxWidth: 400 }}>
            Get a personalized recommendation in 2 minutes. Maximize your rewards, grow your business, and unlock exclusive benefits.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}>
            <button className="btn-primary" onClick={onStart} style={{ fontSize: 13, letterSpacing: "0.08em", padding: "16px 32px" }}>
              START YOUR PERSONALIZED SEARCH
            </button>
            <span style={{ fontSize: 12, color: dark ? "#777" : T.outline, display: "flex", alignItems: "center", gap: 6 }}>
              <span>🔒</span> Free &amp; No impact on your credit score
            </span>
          </div>
        </div>
        {/* Hero visual */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", height: 340 }}>
          <div style={{
            position: "absolute", width: 280, height: 280,
            borderRadius: "50%",
            background: dark
              ? "radial-gradient(circle, rgba(168,57,0,0.15) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(255,109,46,0.1) 0%, transparent 70%)",
          }} />
          <div style={{ transform: "rotate(-8deg) translateY(-20px)", position: "absolute" }}>
            <CreditCardSVG gradient={["#b02848", "#fe637f"]} label="Bizz Elite" />
          </div>
          <div style={{ transform: "rotate(6deg) translateX(40px) translateY(30px)", position: "absolute" }}>
            <CreditCardSVG gradient={["#a83900", "#ff6d2e"]} label="Bizz Pro" />
          </div>
          <div style={{ transform: "rotate(-2deg) translateX(-30px) translateY(60px)", position: "absolute" }}>
            <CreditCardSVG gradient={["#3e5e95", "#7c9bd6"]} label="Bizz Rewards" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="page-container" style={{ background: dark ? T.darkSurface : "#fff" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "0.05em", color: dark ? T.darkOnSurface : T.onSurface }}>
            HOW IT WORKS
          </h2>
          <p style={{ marginTop: 10, color: dark ? "#888" : T.outline, fontSize: 15 }}>Simplified, elegant card recommendation quiz</p>
        </div>
        <div className="grid-3-col">
          {[
            { n: 1, title: "TELL US YOUR NEEDS", icons: ["✉️", "✈️", "💰", "📈"], desc: "Personal Spend · Business Travel · Cashback · Grow Business" },
            { n: 2, title: "GET MATCHED", visual: "spinner", desc: "Our engine analyses 50+ parameters to find your best match" },
            { n: 3, title: "COMPARE & APPLY", visual: "cards", desc: "Compare top picks side-by-side and apply in seconds" },
          ].map((step, i) => (
            <div key={i} style={{
              background: dark ? T.darkBg : T.surfaceLow,
              border: `1px solid ${borderC}`,
              borderRadius: 16, padding: "32px 28px",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 20,
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: T.primaryCont, color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 18,
                animation: "pulse-ring 2s infinite",
              }}>{step.n}</div>
              <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", color: dark ? T.darkOnSurface : T.onSurface }}>{step.title}</div>
              {step.icons && (
                <div className="grid-2-col" style={{ marginTop: 40 }}>
                  {step.icons.map((ic, j) => (
                    <div key={j} style={{
                      background: dark ? T.darkSurfaceHigh : "#fff",
                      border: `1px solid ${borderC}`, borderRadius: 10,
                      padding: "14px", textAlign: "center", fontSize: 22,
                    }}>{ic}</div>
                  ))}
                </div>
              )}
              {step.visual === "spinner" && (
                <div style={{ position: "relative", width: 80, height: 80, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="80" height="80" style={{ position: "absolute", animation: "spin 2s linear infinite" }}>
                    <circle cx="40" cy="40" r="34" fill="none" stroke={T.primaryCont} strokeWidth="4" strokeDasharray="80 134" strokeLinecap="round" />
                    <circle cx="40" cy="40" r="34" fill="none" stroke={T.secondary} strokeWidth="4" strokeDasharray="40 174" strokeDashoffset="-90" strokeLinecap="round" />
                  </svg>
                  <span style={{ fontSize: 24 }}>💳</span>
                </div>
              )}
              {step.visual === "cards" && (
                <div style={{ display: "flex", gap: -20 }}>
                  {[["#b02848", "#fe637f"], ["#3e5e95", "#7c9bd6"]].map((g, j) => (
                    <div key={j} style={{ transform: `rotate(${j === 0 ? -8 : 5}deg) translateX(${j === 0 ? 0 : -20}px)` }}>
                      <CreditCardSVG gradient={g} small />
                    </div>
                  ))}
                </div>
              )}
              <p style={{ fontSize: 13, color: dark ? "#888" : T.outline, textAlign: "center", lineHeight: 1.5 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="page-container" style={{ background: dark ? T.darkBg : T.surface }}>
        <div className="grid-2-col">
          {[
            { title: "PERSONALIZED FOR YOU & YOUR BIZ", icon: "👤", content: "Smart profiling that matches your spending patterns with the right rewards." },
            { title: "POWERED BY AXIS BANK", icon: "🏦", content: "Institutional trust of Axis Bank with the agility of Freecharge.", tag: "AXIS BANK" },
            { title: "ACCESS FREE CREDIT SCORE", icon: "📊", content: "Check your Experian credit score instantly, for free, with zero impact.", tag: "experian." },
            { title: "WIDE PARTNER NETWORK", icon: "🌐", content: "Accepted on Visa, RuPay, Mastercard & JCB networks globally." },
          ].map((f, i) => (
            <div key={i} style={{
              background: dark ? T.darkSurface : "#fff",
              border: `1px solid ${borderC}`,
              borderRadius: 16, padding: "36px 32px",
              display: "flex", gap: 20,
            }}>
              <div style={{ fontSize: 32, flexShrink: 0 }}>{f.icon}</div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: dark ? "#888" : T.outline, marginBottom: 10 }}>{f.title}</div>
                <p style={{ fontSize: 14, color: dark ? "#aaa" : T.onSurfaceVar, lineHeight: 1.6 }}>{f.content}</p>
                {f.tag === "AXIS BANK" && (
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 16 }}>
                    <div style={{ width: 0, height: 0, borderLeft: "12px solid transparent", borderRight: "12px solid transparent", borderBottom: `20px solid ${T.secondary}` }} />
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 18, color: T.secondary }}>AXIS BANK</span>
                  </div>
                )}
                {f.tag === "experian." && (
                  <div style={{ marginTop: 16 }}>
                    <div style={{ position: "relative", width: 80, height: 40 }}>
                      <svg width="80" height="40" viewBox="0 0 80 40">
                        <path d="M4 36 A36 36 0 0 1 76 36" fill="none" stroke="#eee" strokeWidth="6" />
                        <path d="M4 36 A36 36 0 0 1 50 8" fill="none" stroke="url(#sg)" strokeWidth="6" strokeLinecap="round" />
                        <defs>
                          <linearGradient id="sg" x1="0" y1="1" x2="1" y2="0">
                            <stop stopColor="#e53935" /><stop offset="0.5" stopColor="#ffd600" /><stop offset="1" stopColor="#43a047" />
                          </linearGradient>
                        </defs>
                        <circle cx="50" cy="8" r="4" fill={T.primaryCont} />
                      </svg>
                    </div>
                    <span style={{ fontSize: 13, color: dark ? "#aaa" : T.onSurfaceVar }}>experian.</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: "0 5%", paddingBottom: 80, background: dark ? T.darkBg : T.surface }}>
        <div style={{
          background: dark ? T.darkSurface : "#fff",
          border: `1px solid ${borderC}`,
          borderRadius: 16, padding: "28px 32px",
          display: "flex", alignItems: "flex-start", gap: 20,
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%", flexShrink: 0,
            background: "linear-gradient(135deg, #ff6d2e, #b02848)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24,
          }}>👤</div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: T.outline, marginBottom: 10 }}>CONCEPT</div>
            <p style={{ fontSize: 15, color: dark ? "#ccc" : T.onSurface, lineHeight: 1.7, fontStyle: "italic" }}>
              "FreechargeBizz helped me find a card that gives me cashback on my business purchases, and now I'm also eligible for a digital loan!"
            </p>
            <p style={{ marginTop: 12, fontWeight: 700, fontSize: 14, color: dark ? T.darkOnSurface : T.onSurface }}>Sagar,</p>
            <p style={{ fontSize: 12, color: T.outline }}>Motor Repair Merchant</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ margin: "0 5% 80px", borderRadius: 20, overflow: "hidden" }}>
        <div style={{
          background: `linear-gradient(135deg, ${T.secondary} 0%, #8b001e 100%)`,
          padding: "56px 8%",
          display: "flex", flexWrap: "wrap", alignItems: "center", gap: 60,
        }}>
          <div style={{ flexShrink: 0, transform: "rotate(-10deg)" }}>
            <CreditCardSVG gradient={["#ff6d2e", "#ffa500"]} label="Bizz Gold" />
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 32, color: "#fff", marginBottom: 12 }}>
              READY TO UNLOCK YOUR POTENTIAL?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, marginBottom: 28 }}>Find your best-fit card today.</p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={onStart} style={{ background: "#fff", color: T.secondary }}>
                FIND MY CARD
              </button>
              <button className="btn-secondary" style={{ borderColor: "rgba(255,255,255,0.6)", color: "#fff" }}>
                EXPLORE BUSINESS CARDS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer dark={dark} />
    </div>
  );
}
