import { Itim, Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const itim = Itim({
  weight: "400", 
  variable: "--font-itim",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RescueBase",
  description: "Modern shelter management for animal adoption, staff workflows, and manager dashboards.",
};

// app/layout.js

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${itim.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}