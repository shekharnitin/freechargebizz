// ─── Design Tokens ────────────────────────────────────────────
export const T = {
  primary: "#a83900",
  primaryCont: "#ff6d2e",
  secondary: "#b02848",
  secondaryCont: "#fe637f",
  tertiary: "#3e5e95",
  surface: "#f7f9fc",
  surfaceLow: "#f2f4f7",
  surfaceCont: "#eceef1",
  surfaceHigh: "#e6e8eb",
  onSurface: "#191c1e",
  onSurfaceVar: "#594139",
  outline: "#8d7167",
  outlineVar: "#e1bfb3",
  // dark
  darkBg: "#111214",
  darkSurface: "#1c1e21",
  darkSurfaceHigh: "#26292c",
  darkOnSurface: "#e0e3e6",
  darkOutline: "#44474a",
};

// ─── Google Fonts & Global Styles ──────────────────────────────
export function FontLink() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Hanken+Grotesk:wght@400;500;600&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { font-family: 'Hanken Grotesk', sans-serif; }
      h1,h2,h3,h4,h5 { font-family: 'Plus Jakarta Sans', sans-serif; }

      .btn-primary {
        background: #ff6d2e;
        color: #fff;
        border: none;
        border-radius: 9999px;
        padding: 14px 28px;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0.04em;
        cursor: pointer;
        transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
      }
      .btn-primary:hover { background: #e85e22; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(168,57,0,0.35); }
      .btn-secondary {
        background: transparent;
        color: #b02848;
        border: 1.5px solid #b02848;
        border-radius: 9999px;
        padding: 13px 28px;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        transition: background 0.15s, color 0.15s;
      }
      .btn-secondary:hover { background: #b02848; color: #fff; }

      /* dark variants */
      .dark .btn-secondary { border-color: #fe637f; color: #fe637f; }
      .dark .btn-secondary:hover { background: #fe637f; color: #fff; }

      @keyframes spin { to { transform: rotate(360deg); } }
      @keyframes shimmer {
        0% { background-position: -400px 0; }
        100% { background-position: 400px 0; }
      }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(24px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        from { opacity: 0; } to { opacity: 1; }
      }
      @keyframes scaleIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }
      @keyframes pulse-ring {
        0% { box-shadow: 0 0 0 0 rgba(168,57,0,0.4); }
        70% { box-shadow: 0 0 0 12px rgba(168,57,0,0); }
        100% { box-shadow: 0 0 0 0 rgba(168,57,0,0); }
      }
      .fade-up { animation: fadeUp 0.5s ease both; }
      .fade-in { animation: fadeIn 0.4s ease both; }
      .scale-in { animation: scaleIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both; }

      input[type=range] { -webkit-appearance: none; width: 100%; height: 4px; border-radius: 9999px; outline: none; cursor: pointer; }
      input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 22px; height: 22px; border-radius: 50%; background: #ff6d2e; cursor: pointer; box-shadow: 0 2px 8px rgba(255,109,46,0.4); transition: transform 0.15s; }
      input[type=range]::-webkit-slider-thumb:hover { transform: scale(1.15); }

      .card-carousel { perspective: 1200px; }
      .carousel-track { transform-style: preserve-3d; transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94); }

      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: #e1bfb3; border-radius: 3px; }
    `}</style>
  );
}
