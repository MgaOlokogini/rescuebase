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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full m-0 p-0 bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
