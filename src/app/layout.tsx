import type { Metadata } from "next";
import { Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import FloatingNav from "@/components/FloatingNav";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tyson's Portfolio",
  description: "Super Cool Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${geistMono.variable} antialiased relative`}
        style={{ backgroundColor: '#0a0118' }}
      >
        {/* Global Background */}
        <div className="fixed inset-0 w-full h-full -z-10">
          <Background />
        </div>
        
        {/* Floating Navigation */}
        <FloatingNav />
        
        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
