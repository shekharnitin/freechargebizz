import { useState } from "react";
import { T } from "../tokens";
import CreditCardSVG from "../components/CreditCardSVG";
import Footer from "../components/Footer";

export default function RecommendationsPage({ dark, cards }) {
  const [active, setActive] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const bg = dark ? T.darkBg : T.surface;
  const fg = dark ? T.darkOnSurface : T.onSurface;
  const cardBg = dark ? T.darkSurface : "#fff";
  const borderC = dark ? T.darkOutline : T.outlineVar;
  const card = cards[active];

  function move(dir) {
    setActive(a => (a + dir + cards.length) % cards.length);
  }

  return (
    <div style={{ background: bg, minHeight: "calc(100vh - 60px)", paddingBottom: 80 }}>
      {/* Header */}
      <div style={{ textAlign: "center", padding: "48px 80px 0" }}>
        <div style={{
          display: "inline-flex", padding: "8px 20px", borderRadius: 9999,
          background: dark ? T.darkSurface : T.surfaceCont,
          border: `1px solid ${borderC}`, marginBottom: 20,
        }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: dark ? "#aaa" : T.onSurfaceVar }}>
            BEST MATCH FOUND
          </span>
        </div>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 30, color: fg, marginBottom: 12 }}>
          Your Personalized Recommendations
        </h1>
        <p style={{ fontSize: 15, color: dark ? "#888" : T.outline }}>
          Based on your needs, we've selected the cards that offer you the maximum value.
        </p>
      </div>

      {/* 3D Carousel */}
      <div style={{ position: "relative", height: 320, margin: "40px 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Left arrow */}
        <button onClick={() => move(-1)} style={{
          position: "absolute", left: 80, zIndex: 10,
          width: 44, height: 44, borderRadius: "50%",
          background: dark ? T.darkSurfaceHigh : "#fff",
          border: `1px solid ${borderC}`,
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, color: fg,
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
          transition: "transform 0.15s",
        }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseLeave={e => e.currentTarget.style.transform = ""}
        >‹</button>

        {/* Cards */}
        <div style={{ position: "relative", width: 700, height: 260, perspective: "1200px" }}>
          {cards.map((c, i) => {
            const offset = i - active;
            const norm = ((offset % cards.length) + cards.length) % cards.length;
            const pos = norm <= cards.length / 2 ? norm : norm - cards.length;
            const isCenter = pos === 0;
            const scale = isCenter ? 1 : 0.82;
            const rotateY = pos * 28;
            const tx = pos * 180;
            const opacity = Math.abs(pos) <= 1 ? 1 - Math.abs(pos) * 0.3 : 0;
            const blur = isCenter ? 0 : Math.abs(pos) * 2;
            return (
              <div key={i} onClick={() => isCenter ? setShowModal(true) : setActive(i)} style={{
                position: "absolute", left: "50%", top: "50%",
                transform: `translate(-50%, -50%) translateX(${tx}px) rotateY(${rotateY}deg) scale(${scale})`,
                transition: "all 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
                opacity, filter: `blur(${blur}px)`,
                zIndex: isCenter ? 10 : 5 - Math.abs(pos),
                cursor: "pointer",
                transformStyle: "preserve-3d",
              }}>
                <CreditCardSVG gradient={c.gradient} label={c.name} />
              </div>
            );
          })}
        </div>

        {/* Right arrow */}
        <button onClick={() => move(1)} style={{
          position: "absolute", right: 80, zIndex: 10,
          width: 44, height: 44, borderRadius: "50%",
          background: dark ? T.darkSurfaceHigh : "#fff",
          border: `1px solid ${borderC}`,
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, color: fg,
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
          transition: "transform 0.15s",
        }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
          onMouseLeave={e => e.currentTarget.style.transform = ""}
        >›</button>
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 40 }}>
        {cards.map((_, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            width: i === active ? 24 : 8, height: 8, borderRadius: 9999,
            background: i === active ? T.primaryCont : (dark ? T.darkSurfaceHigh : T.surfaceHigh),
            border: "none", cursor: "pointer",
            transition: "all 0.3s",
          }} />
        ))}
      </div>

      {/* Card Details */}
      <div className="fade-up" key={active} style={{ display: "flex", justifyContent: "center", padding: "0 80px" }}>
        <div style={{
          width: "100%", maxWidth: 860,
          background: cardBg,
          border: `1px solid ${borderC}`,
          borderRadius: 20, overflow: "hidden",
          boxShadow: dark ? "0 8px 48px rgba(0,0,0,0.4)" : "0 4px 32px rgba(0,0,0,0.08)",
          position: "relative",
        }}>
          {/* accent gradient blob */}
          <div style={{
            position: "absolute", right: -60, top: -60, width: 200, height: 200, borderRadius: "50%",
            background: `radial-gradient(circle, rgba(168,57,0,0.08) 0%, transparent 70%)`,
            pointerEvents: "none",
          }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 0 }}>
            {/* Left pane */}
            <div style={{ padding: "36px 40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 22, color: fg }}>
                  {card.name}
                </h3>
                <span style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", padding: "4px 10px",
                  borderRadius: 9999, background: dark ? T.darkSurfaceHigh : T.surfaceLow,
                  border: `1px solid ${borderC}`, color: dark ? "#aaa" : T.onSurfaceVar,
                }}>{card.tag}</span>
              </div>
              <p style={{ fontSize: 14, color: dark ? "#888" : T.outline, marginBottom: 28 }}>{card.desc}</p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}>
                {[
                  { label: "ANNUAL FEE", value: card.fee, old: card.feeOld, icon: "💳" },
                  { label: "INTEREST RATE", value: card.interest, icon: "📈" },
                ].map((stat, i) => (
                  <div key={i} style={{
                    background: dark ? T.darkSurfaceHigh : T.surfaceLow,
                    border: `1px solid ${borderC}`, borderRadius: 12, padding: "16px 20px",
                    display: "flex", alignItems: "center", gap: 14,
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: dark ? T.darkSurface : "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
                    }}>{stat.icon}</div>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: dark ? "#666" : T.outline }}>{stat.label}</div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 4 }}>
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 18, color: fg }}>{stat.value}</span>
                        {stat.old && <span style={{ fontSize: 12, color: dark ? "#666" : "#bbb", textDecoration: "line-through" }}>{stat.old}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: dark ? "#888" : T.outline, marginBottom: 14 }}>KEY BENEFITS</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {card.benefits.map((b, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div style={{ color: "#22c55e", fontSize: 16, marginTop: 1, flexShrink: 0 }}>✓</div>
                      <p style={{ fontSize: 14, color: dark ? "#bbb" : T.onSurfaceVar, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: b.replace(/(\d+%[^,.]*)/, '<strong>$1</strong>') }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right pane */}
            <div style={{
              padding: "36px 32px",
              background: dark ? T.darkSurfaceHigh : T.surfaceLow,
              borderLeft: `1px solid ${borderC}`,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center",
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                background: dark ? T.darkSurface : "#fff",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28,
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              }}>👍</div>
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 17, color: fg, marginBottom: 6 }}>
                  <span style={{ color: card.approvalColor }}>{card.approval}</span> Approval Odds
                </div>
                <p style={{ fontSize: 12, color: dark ? "#888" : T.outline, lineHeight: 1.5 }}>Based on your credit profile.</p>
              </div>
              <button className="btn-primary" style={{ width: "100%" }}>Apply Now →</button>
              <button className="btn-secondary" style={{ width: "100%" }} onClick={() => setShowModal(true)}>View Full Details</button>
              <p style={{ fontSize: 11, color: dark ? "#666" : "#bbb", lineHeight: 1.5 }}>
                *T&C Apply. No impact on credit score to check offers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: 64 }}>
        <Footer dark={dark} />
      </div>

      {/* Modal */}
      {showModal && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)",
          zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center",
          padding: 24,
        }} onClick={() => setShowModal(false)}>
          <div style={{
            background: cardBg, width: "100%", maxWidth: 600, borderRadius: 24,
            padding: 40, position: "relative", boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            maxHeight: "90vh", overflowY: "auto"
          }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} style={{
              position: "absolute", top: 24, right: 24, width: 36, height: 36, borderRadius: "50%",
              background: dark ? T.darkSurfaceHigh : T.surfaceLow, border: "none",
              color: fg, fontSize: 20, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
            }}>✕</button>
            
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 28, color: fg, marginBottom: 8 }}>{card.name}</h2>
            <p style={{ color: dark ? "#aaa" : T.onSurfaceVar, marginBottom: 24 }}>Full Features & Specifications</p>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
                <div style={{ background: dark ? T.darkSurfaceHigh : T.surfaceLow, padding: 16, borderRadius: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: T.outline, marginBottom: 4 }}>ANNUAL FEE</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: fg }}>{card.fee}</div>
                  {card.feeWaiverSpend > 0 && card.feeWaiverSpend < 9999999 && <div style={{ fontSize: 12, color: T.onSurfaceVar, marginTop: 4 }}>Waived on spend of ₹{(card.feeWaiverSpend).toLocaleString()}</div>}
                </div>
                <div style={{ background: dark ? T.darkSurfaceHigh : T.surfaceLow, padding: 16, borderRadius: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: T.outline, marginBottom: 4 }}>REWARD TYPE</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: fg }}>{card.rewards?.type || "Benefits"}</div>
                </div>
            </div>

            <h3 style={{ fontSize: 14, fontWeight: 700, color: fg, marginBottom: 12, letterSpacing: "0.05em" }}>ALL BENEFITS</h3>
            <ul style={{ paddingLeft: 20, margin: 0, color: dark ? "#bbb" : T.onSurfaceVar, lineHeight: 1.6 }}>
              {card.benefits.map((b, i) => (
                <li key={i} style={{ marginBottom: 12 }}>{b}</li>
              ))}
              {card.loungeAccess && card.loungeAccess.domestic > 0 && (
                <li style={{ marginBottom: 12 }}>{card.loungeAccess.domestic} Domestic Lounge visits (requires ₹{(card.loungeAccess.spendRule || 50000).toLocaleString()} spend in previous 3 months)</li>
              )}
              {card.loungeAccess && card.loungeAccess.international > 0 && (
                <li style={{ marginBottom: 12 }}>{card.loungeAccess.international} International Lounge visits</li>
              )}
            </ul>
            
            {card.netValue !== undefined && (
              <div style={{ marginTop: 24, padding: "16px 20px", background: `linear-gradient(135deg, ${dark ? "rgba(176,40,72,0.15)" : "#fff0f3"}, ${dark ? T.darkSurfaceHigh : T.surfaceLow})`, borderRadius: 12, border: `1px solid ${borderC}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: T.primaryCont, letterSpacing: "0.05em" }}>ESTIMATED NET ANNUAL VALUE</div>
                  <div style={{ fontSize: 11, color: dark ? "#888" : T.outline, marginTop: 4 }}>Based on your selected spends and preferences</div>
                </div>
                <div style={{ fontSize: 24, fontWeight: 700, color: fg }}>₹{card.netValue.toLocaleString("en-IN")}</div>
              </div>
            )}
            
            <div style={{ display: "flex", marginTop: 32 }}>
              <button className="btn-primary" style={{ width: "100%" }} onClick={() => setShowModal(false)}>Apply Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
