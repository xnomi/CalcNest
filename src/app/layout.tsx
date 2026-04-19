import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Z6MNS4EMX5"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Z6MNS4EMX5');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${nunito.variable} font-sans antialiased text-text bg-bg`}>
        {children}
      </body>
    </html>
  );
}
