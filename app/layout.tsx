import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import { TailwindIndicator } from "./components/TailwindIndicator";
import Footer from "@/components/ui/Footer";
import AnimatedCursor from "react-animated-cursor";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
      <body className={libreFranklin.className}>
        {children}
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="193, 11, 111"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
        <Footer />
      </body>
      <script src="/uux/unified-ux-web.min.js" async />
    </html>
  );
}
