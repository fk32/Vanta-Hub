import "./globals.css";

export const metadata = {
  title: "Vanta Hub - VRFS",
  description: "Vanta Hub - Match Centre, Leagues, Stats",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body style={{ margin: 0, background: "#0A0A0A" }}>{children}</body>
    </html>
  );
}
