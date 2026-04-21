import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cadet College Pishin | Shaping Future Leaders",
  description:
    "Cadet College Pishin - A premier residential institution providing quality education and character building to the youth of Balochistan since 2011.",
  keywords: [
    "Cadet College Pishin",
    "CCPN",
    "Balochistan Education",
    "Military School",
    "Pakistan Cadet Colleges",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
