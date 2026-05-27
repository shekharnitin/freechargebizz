import { useState, useEffect } from "react";
import { T } from "../tokens";

export default function ProcessingPage({ dark, onDone }) {
  const [progress, setProgress] = useState(0);
  const [label, setLabel] = useState("Analysing your profile...");

  const messages = [
    "Analysing your profile...",
    "Matching spending patterns...",
    "Evaluating reward programs...",
    "Checking approval odds...",
    "Finalising your recommendations...",
  ];

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += 2;
      setProgress(p);
      setLabel(messages[Math.min(Math.floor(p / 22), messages.length - 1)]);
      if (p >= 100) { clearInterval(interval); setTimeout(onDone, 400); }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const bg = dark ? T.darkBg : T.surface;
  const dotColor = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)";

  return (
    <div style={{
      background: bg, minHeight: "calc(100vh - 60px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      backgroundImage: `radial-gradient(${dotColor} 1px, transparent 1px)`,
      backgroundSize: "24px 24px",
      position: "relative",
    }}>
      {/* ambient glow */}
      <div style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        background: dark
          ? "radial-gradient(circle, rgba(168,57,0,0.12) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(255,109,46,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="scale-in" style={{
        background: dark ? T.darkSurface : "#fff",
        border: `1px solid ${dark ? T.darkOutline : T.outlineVar}`,
        borderRadius: 24, padding: "56px 64px",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 32,
        minWidth: 420, boxShadow: dark ? "0 8px 60px rgba(0,0,0,0.5)" : "0 8px 60px rgba(0,0,0,0.1)",
      }}>
        {/* dual-tone spinner */}
        <div style={{ position: "relative", width: 100, height: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="100" height="100" style={{ position: "absolute", animation: "spin 1.8s linear infinite" }}>
            <circle cx="50" cy="50" r="42" fill="none" stroke={T.primaryCont} strokeWidth="5"
              strokeDasharray="100 164" strokeLinecap="round" />
            <circle cx="50" cy="50" r="42" fill="none" stroke={T.secondary} strokeWidth="5"
              strokeDasharray="50 214" strokeDashoffset="-112" strokeLinecap="round" />
          </svg>
          <div style={{
            width: 56, height: 56, borderRadius: "50%",
            background: dark ? T.darkSurfaceHigh : T.surfaceLow,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24,
          }}>💳</div>
        </div>

        <div style={{ textAlign: "center" }}>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 22,
            color: dark ? T.darkOnSurface : T.onSurface, marginBottom: 8,
          }}>Finding Your Best Cards</h2>
          <p style={{ fontSize: 14, color: dark ? "#888" : T.outline }}>{label}</p>
        </div>

        {/* Progress bar */}
        <div style={{ width: "100%", height: 6, background: dark ? T.darkSurfaceHigh : T.surfaceHigh, borderRadius: 9999 }}>
          <div style={{
            height: "100%", width: `${progress}%`,
            background: `linear-gradient(90deg, ${T.secondary}, ${T.primaryCont})`,
            borderRadius: 9999, transition: "width 0.1s linear",
          }} />
        </div>
        <p style={{ fontSize: 12, color: dark ? "#666" : "#bbb" }}>{progress}%</p>
      </div>
    </div>
  );
}
