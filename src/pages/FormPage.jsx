import { useState, useEffect } from "react";
import { T } from "../tokens";

export default function FormPage({ dark, step, setStep, formData, setFormData, onSubmit, steps }) {
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, [step, formData]);
  const bg = dark ? T.darkBg : T.surfaceLow;
  const cardBg = dark ? T.darkSurface : "#fff";
  const fg = dark ? T.darkOnSurface : T.onSurface;
  const borderC = dark ? T.darkOutline : T.outlineVar;
  const cur = steps[step];
  const progress = ((step + 1) / steps.length) * 100;

  function update(id, val) {
    setFormData(d => ({ ...d, [id]: val }));
  }

  function toggleSector(label) {
    const cur = formData.sectors || [];
    if (cur.includes(label)) {
      update("sectors", cur.filter(s => s !== label));
    } else if (cur.length < 3) {
      update("sectors", [...cur, label]);
    }
  }

  function handleContinue() {
    for (const field of cur.fields) {
      if (field.type === "chips" && !formData[field.id]) {
        setError(`Please select an option for: ${field.label}`);
        return;
      }
      if (field.type === "sector-grid" && (!formData.sectors || formData.sectors.length === 0)) {
        setError(`Please select at least one sector.`);
        return;
      }
      if (field.type === "reward-grid" && !formData.rewardPref) {
        setError(`Please select a reward preference.`);
        return;
      }
    }
    if (step < steps.length - 1) setStep(s => s + 1);
    else onSubmit();
  }

  return (
    <div style={{ background: bg, minHeight: "calc(100vh - 60px)", padding: "48px 80px", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: 760 }}>
        {/* Progress */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: T.primaryCont, letterSpacing: "0.08em" }}>
              STEP {step + 1} OF {steps.length}
            </span>
            <span style={{ fontSize: 12, color: dark ? "#888" : T.outline }}>{Math.round(progress)}% complete</span>
          </div>
          <div style={{ height: 4, background: dark ? T.darkSurfaceHigh : T.surfaceHigh, borderRadius: 9999 }}>
            <div style={{
              height: "100%", width: `${progress}%`,
              background: `linear-gradient(90deg, ${T.secondary}, ${T.primaryCont})`,
              borderRadius: 9999, transition: "width 0.5s ease",
            }} />
          </div>
        </div>

        {/* Card */}
        <div className="scale-in" key={step} style={{
          background: cardBg,
          border: `1px solid ${borderC}`,
          borderRadius: 20, padding: "48px 52px",
          boxShadow: dark ? "0 4px 40px rgba(0,0,0,0.4)" : "0 4px 40px rgba(0,0,0,0.06)",
        }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 28, color: fg, marginBottom: 10 }}>{cur.title}</h2>
          <p style={{ fontSize: 14, color: dark ? "#888" : T.outline, marginBottom: 40, lineHeight: 1.6 }}>{cur.subtitle}</p>

          {cur.fields.map((field, fi) => (
            <div key={fi} style={{ marginBottom: 40 }}>
              <label style={{ display: "block", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 16, color: fg, marginBottom: 6 }}>
                {field.label}
              </label>
              {field.subtitle && <p style={{ fontSize: 12, color: dark ? "#777" : T.outline, marginBottom: 16 }}>{field.subtitle}</p>}

              {field.type === "chips" && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {field.options.map(opt => {
                    const sel = formData[field.id] === opt;
                    return (
                      <button key={opt} onClick={() => update(field.id, opt)} style={{
                        padding: "10px 20px", borderRadius: 9999,
                        border: sel ? `2px solid ${T.secondary}` : `1.5px solid ${borderC}`,
                        background: sel ? (dark ? "rgba(176,40,72,0.15)" : "#fff5f7") : (dark ? T.darkSurfaceHigh : T.surfaceLow),
                        color: sel ? T.secondary : (dark ? "#aaa" : T.onSurfaceVar),
                        fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: sel ? 600 : 400,
                        fontSize: 14, cursor: "pointer",
                        transition: "all 0.15s",
                      }}>{opt}</button>
                    );
                  })}
                </div>
              )}

              {field.type === "slider" && (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14, alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: dark ? "#888" : T.outline }}>₹{(field.min).toLocaleString("en-IN")}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 20, color: T.primaryCont }}>
                      {field.format(formData[field.id] || field.min)}
                    </span>
                    <span style={{ fontSize: 13, color: dark ? "#888" : T.outline }}>₹{(field.max).toLocaleString("en-IN")}+</span>
                  </div>
                  <input
                    type="range"
                    min={field.min} max={field.max} step={field.step}
                    value={formData[field.id] || field.min}
                    onChange={e => update(field.id, +e.target.value)}
                    style={{
                      background: `linear-gradient(90deg, ${T.primaryCont} 0%, ${T.primaryCont} ${((formData[field.id] || field.min) - field.min) / (field.max - field.min) * 100}%, ${dark ? T.darkSurfaceHigh : T.surfaceHigh} ${((formData[field.id] || field.min) - field.min) / (field.max - field.min) * 100}%, ${dark ? T.darkSurfaceHigh : T.surfaceHigh} 100%)`,
                    }}
                  />
                </div>
              )}

              {field.type === "sector-grid" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
                  {field.options.map(opt => {
                    const sel = (formData.sectors || []).includes(opt.label);
                    return (
                      <button key={opt.label} onClick={() => toggleSector(opt.label)} style={{
                        padding: "20px 16px", borderRadius: 12, cursor: "pointer",
                        border: sel ? `2px solid ${T.secondary}` : `1.5px solid ${borderC}`,
                        background: sel ? (dark ? "rgba(176,40,72,0.12)" : "#fff5f7") : (dark ? T.darkSurfaceHigh : T.surfaceLow),
                        display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
                        transition: "all 0.15s",
                        transform: sel ? "scale(1.02)" : "scale(1)",
                      }}>
                        <div style={{
                          width: 48, height: 48, borderRadius: "50%",
                          background: sel ? (dark ? "rgba(176,40,72,0.2)" : "#ffe4e9") : (dark ? T.darkSurface : "#eee"),
                          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
                        }}>{opt.icon}</div>
                        <span style={{ fontSize: 13, fontWeight: 500, color: sel ? T.secondary : (dark ? "#aaa" : T.onSurfaceVar) }}>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {field.type === "reward-grid" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  {field.options.map(opt => {
                    const sel = formData.rewardPref === opt.label;
                    return (
                      <button key={opt.label} onClick={() => update("rewardPref", opt.label)} style={{
                        padding: "24px 20px", borderRadius: 14, cursor: "pointer",
                        border: sel ? `2px solid ${T.secondary}` : `1.5px solid ${borderC}`,
                        background: sel ? (dark ? "rgba(176,40,72,0.12)" : "#fff5f7") : (dark ? T.darkSurfaceHigh : T.surfaceLow),
                        display: "flex", alignItems: "center", gap: 16,
                        transition: "all 0.15s",
                        textAlign: "left",
                      }}>
                        <div style={{
                          width: 52, height: 52, borderRadius: "50%", flexShrink: 0,
                          background: sel ? `linear-gradient(135deg, ${T.secondary}, ${T.primaryCont})` : (dark ? T.darkSurface : "#eee"),
                          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24,
                        }}>{opt.icon}</div>
                        <div>
                          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 15, color: sel ? T.secondary : fg }}>{opt.label}</div>
                          <div style={{ fontSize: 12, color: dark ? "#777" : T.outline, marginTop: 4, lineHeight: 1.4 }}>{opt.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
            {step > 0 ? (
              <button className="btn-secondary" onClick={() => setStep(s => s - 1)}>← Back</button>
            ) : <div />}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              {error && <span style={{ color: T.secondary, fontSize: 13, fontWeight: 600 }}>{error}</span>}
              <button className="btn-primary" onClick={handleContinue}>
                {step < steps.length - 1 ? "Continue →" : "Find My Cards →"}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 48, textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 10 }}>
            {["About Us", "Contact", "Terms", "Privacy", "Careers"].map(l => (
              <a key={l} href="#" style={{ fontSize: 12, color: dark ? "#666" : T.outline, textDecoration: "none" }}>{l}</a>
            ))}
          </div>
          <p style={{ fontSize: 11, color: dark ? "#555" : "#bbb" }}>
            FreechargeBizz is a brand of Freecharge Payment Technologies Pvt. Ltd., Powered by Axis Bank
          </p>
        </div>
      </div>
    </div>
  );
}
