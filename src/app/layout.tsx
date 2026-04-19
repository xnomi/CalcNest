import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "CalcNest — Free Online Calculators: BMI, EMI, Age, GPA & Unit Converter",
  description: "Free online calculators for your everyday needs. Calculate BMI, loan EMI, percentages, age, convert units, and GPA instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${nunito.variable} font-sans antialiased text-text bg-bg`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
