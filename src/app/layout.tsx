import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ThinkBuild | Web & App Development Agency",
  description: "We craft stunning websites and powerful applications that elevate your brand and drive business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-transition" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
