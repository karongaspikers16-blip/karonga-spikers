import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karonga Spikers Volleyball Club",
  description: "Official website for Karonga Spikers Volleyball Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
