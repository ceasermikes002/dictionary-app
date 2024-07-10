import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const libreFranklin = Libre_Franklin({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Dictionary App",
  description: "Best dictionary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libreFranklin.className}>{children}</body>
      <script src="/uux/unified-ux-web.min.js" async/>
    </html>
  );
}
