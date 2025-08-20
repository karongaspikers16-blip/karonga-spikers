import "./globals.css";
import "./globals-enhanced.css";
import HeaderEnhanced from "@/components/layout/Header-enhanced";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karonga Spikers Volleyball Club",
  description: "Official website for Karonga Spikers Volleyball Club",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#1e40af",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="flex flex-col min-h-screen antialiased">
        {/* Header */}
        <HeaderEnhanced />

        {/* Page Content */}
        <main className="flex-grow bg-gradient-to-br from-slate-50 to-blue-50">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
