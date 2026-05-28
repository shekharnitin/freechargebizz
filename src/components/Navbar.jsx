import { useState } from "react";
import { T } from "../tokens";

function Logo({ dark }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
      <span style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 800,
        fontSize: 20,
        color: dark ? "#ff6d2e" : T.primary,
        letterSpacing: "-0.03em",
      }}>
        freecharge<span style={{ color: dark ? "#fe637f" : T.secondary }}>Bizz</span>
      </span>
      <span style={{ fontSize: 9, fontWeight: 600, color: dark ? "#aaa" : T.outline, letterSpacing: "0.08em", marginTop: 2 }}>
        POWERED BY <span style={{ fontWeight: 800, color: dark ? "#ff6d2e" : T.primary }}>AXIS BANK</span>
      </span>
    </div>
  );
}

export default function Navbar({ dark, setDark, onStart, mode, setMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" style={{
      position: "sticky", top: 0, zIndex: 100,
      background: dark ? T.darkBg : "rgba(247,249,252,0.92)",
      backdropFilter: "blur(16px)",
      borderBottom: `1px solid ${dark ? T.darkOutline : T.outlineVar}`,
      display: "flex", alignItems: "center", justifyContent: "space-between", height: 60,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
        <Logo dark={dark} />
        {/* tab group */}
        <div className="desktop-only" style={{ display: "flex", gap: 4 }}>
          {["Business", "Personal"].map((t, i) => (
            <button key={t} onClick={() => setMode(i===0?"business":"personal")} style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "6px 14px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600, fontSize: 13,
              color: (i===0?"business":"personal") === mode ? T.primaryCont : (dark ? "#aaa" : T.outline),
              borderBottom: (i===0?"business":"personal") === mode ? `2px solid ${T.primaryCont}` : "2px solid transparent",
            }}>{t}</button>
          ))}
        </div>
      </div>
      
      {/* Desktop Links */}
      <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: 28 }}>
        {["Cards", "Loans", "Support"].map(n => (
          <button key={n} style={{
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 14, fontWeight: 500,
            color: dark ? T.darkOnSurface : T.onSurface,
          }}>{n}</button>
        ))}
        {/* dark toggle */}
        <button onClick={() => setDark(d => !d)} style={{
          background: dark ? T.darkSurfaceHigh : T.surfaceHigh,
          border: `1px solid ${dark ? T.darkOutline : T.outlineVar}`,
          borderRadius: 9999, padding: "6px 12px",
          display: "flex", alignItems: "center", gap: 6, cursor: "pointer",
          transition: "background 0.2s",
        }}>
          <span style={{ fontSize: 14 }}>{dark ? "🌙" : "☀️"}</span>
          <div style={{
            width: 28, height: 16, borderRadius: 9999,
            background: dark ? T.primaryCont : T.surfaceCont,
            position: "relative", transition: "background 0.2s",
          }}>
            <div style={{
              width: 12, height: 12, borderRadius: 9999,
              background: dark ? "#fff" : T.outline,
              position: "absolute", top: 2,
              left: dark ? 14 : 2,
              transition: "left 0.2s",
            }} />
          </div>
        </button>
        <button className="btn-primary" style={{ padding: "10px 20px", fontSize: 13 }}>
          Login/Sign Up
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="mobile-only">
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          background: "none", border: "none", cursor: "pointer", fontSize: 24, color: dark ? T.darkOnSurface : T.onSurface
        }}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mobile-only" style={{
          position: "absolute", top: 60, left: 0, right: 0,
          background: dark ? T.darkBg : "#fff",
          borderBottom: `1px solid ${dark ? T.darkOutline : T.outlineVar}`,
          padding: "20px 5%", display: "flex", flexDirection: "column", gap: 16,
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: dark ? T.darkOnSurface : T.onSurface }}>Mode</span>
            <div style={{ display: "flex", gap: 4 }}>
              {["Business", "Personal"].map((t, i) => (
                <button key={t} onClick={() => { setMode(i===0?"business":"personal"); setMenuOpen(false); }} style={{
                  background: "none", border: "none", cursor: "pointer",
                  padding: "6px 14px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600, fontSize: 13,
                  color: (i===0?"business":"personal") === mode ? T.primaryCont : (dark ? "#aaa" : T.outline),
                  borderBottom: (i===0?"business":"personal") === mode ? `2px solid ${T.primaryCont}` : "2px solid transparent",
                }}>{t}</button>
              ))}
            </div>
          </div>
          <hr style={{ border: "none", borderTop: `1px solid ${dark ? T.darkOutline : T.outlineVar}`, margin: "4px 0" }} />
          {["Cards", "Loans", "Support"].map(n => (
            <button key={n} style={{
              background: "none", border: "none", cursor: "pointer", textAlign: "left",
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 16, fontWeight: 500, padding: "8px 0",
              color: dark ? T.darkOnSurface : T.onSurface,
            }}>{n}</button>
          ))}
          <hr style={{ border: "none", borderTop: `1px solid ${dark ? T.darkOutline : T.outlineVar}`, margin: "4px 0" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: dark ? T.darkOnSurface : T.onSurface }}>Theme</span>
            <button onClick={() => setDark(d => !d)} style={{
              background: dark ? T.darkSurfaceHigh : T.surfaceHigh,
              border: `1px solid ${dark ? T.darkOutline : T.outlineVar}`,
              borderRadius: 9999, padding: "6px 12px",
              display: "flex", alignItems: "center", gap: 6, cursor: "pointer",
            }}>
              <span style={{ fontSize: 14 }}>{dark ? "🌙" : "☀️"}</span>
              <div style={{
                width: 28, height: 16, borderRadius: 9999,
                background: dark ? T.primaryCont : T.surfaceCont,
                position: "relative",
              }}>
                <div style={{
                  width: 12, height: 12, borderRadius: 9999,
                  background: dark ? "#fff" : T.outline,
                  position: "absolute", top: 2,
                  left: dark ? 14 : 2,
                }} />
              </div>
            </button>
          </div>
          <button className="btn-primary" style={{ padding: "12px 20px", fontSize: 15, width: "100%", marginTop: 8 }}>
            Login/Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
