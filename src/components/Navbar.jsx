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
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: dark ? T.darkBg : "rgba(247,249,252,0.92)",
      backdropFilter: "blur(16px)",
      borderBottom: `1px solid ${dark ? T.darkOutline : T.outlineVar}`,
      padding: "0 80px",
      display: "flex", alignItems: "center", height: 60,
      gap: 40,
    }}>
      <Logo dark={dark} />
      {/* tab group */}
      <div style={{ display: "flex", gap: 4, marginLeft: 16 }}>
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
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 28 }}>
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
    </nav>
  );
}
