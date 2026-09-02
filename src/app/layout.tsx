import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "IEEE RF IC Design Micro-Specialization",
  description: "Master RF IC Design for 5G/6G on Open-Source Silicon",
  openGraph: {
    title: "IEEE RF IC Design Micro-Specialization",
    description: "An 8-Module Masterclass bridging high-frequency architectural theory, FOSS EDA pipelines, and open-source MPW shuttle tape-outs.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans bg-[#0B0F19] text-gray-200 antialiased select-none`}>
        {children}
      </body>
    </html>
  );
}
