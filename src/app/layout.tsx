import type { Metadata } from "next";
import { Chakra_Petch, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ignacio Ten | Industrial AI & Data Architecture",
  description:
    "Portfolio of Ignacio Ten, Industrial Engineer and Data Analyst at Enagás specializing in Agentic AI, Power BI semantic optimization, and Power Platform automation.",
  openGraph: {
    title: "Ignacio Ten | Industrial AI & Data Architecture",
    description:
      "Industrial Engineer & Data Analyst specializing in Multi-Agent AI Systems, Advanced Analytics, and Industrial Automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${chakraPetch.variable} ${geistSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased bg-[#090B10] text-[#EAEFF7]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-[#B8E62E] focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-bold focus:text-[#090B10]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
