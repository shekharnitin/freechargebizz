import { T } from "../tokens";

export default function Footer({ dark }) {
  const borderC = dark ? T.darkOutline : T.outlineVar;
  return (
    <footer style={{
      borderTop: `1px solid ${borderC}`,
      padding: "32px 80px",
      textAlign: "center",
    }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 32, marginBottom: 16 }}>
        {["About Us", "Contact", "Terms", "Privacy", "Careers"].map(l => (
          <a key={l} href="#" style={{ fontSize: 13, color: dark ? "#888" : T.outline, textDecoration: "none" }}>{l}</a>
        ))}
      </div>
      <p style={{ fontSize: 12, color: dark ? "#666" : "#aaa" }}>
        FreechargeBizz is a brand of Freecharge Payment Technologies Pvt. Ltd. · Powered by Axis Bank
      </p>
    </footer>
  );
}
