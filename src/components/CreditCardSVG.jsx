import { T } from "../tokens";

export default function CreditCardSVG({ gradient = ["#a83900", "#ff6d2e"], label = "", small = false }) {
  const id = `grad-${label.replace(/\s/g, "")}`;
  const w = small ? 160 : 220, h = small ? 100 : 138;
  return (
    <svg width={w} height={h} viewBox="0 0 220 138" fill="none" style={{ borderRadius: 12, filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.18))" }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={gradient[0]} />
          <stop offset="100%" stopColor={gradient[1]} />
        </linearGradient>
      </defs>
      <rect width="220" height="138" rx="14" fill={`url(#${id})`} />
      <rect x="16" y="52" width="38" height="28" rx="4" fill="rgba(255,255,255,0.35)" />
      <rect x="16" y="88" width="90" height="8" rx="4" fill="rgba(255,255,255,0.45)" />
      <rect x="16" y="104" width="60" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
      <circle cx="190" cy="110" r="18" fill="rgba(255,255,255,0.15)" />
      <circle cx="175" cy="110" r="18" fill="rgba(255,255,255,0.2)" />
      <text x="16" y="36" fontFamily="Plus Jakarta Sans" fontWeight="700" fontSize="13" fill="rgba(255,255,255,0.9)">{label || "freechargeBizz"}</text>
    </svg>
  );
}
