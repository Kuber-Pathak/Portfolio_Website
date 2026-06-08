import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Caveat,
  Bricolage_Grotesque,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Kuber Pathak — AI Developer & Full-Stack Engineer",
  description:
    "Portfolio of Kuber Pathak — AI Developer and Full-Stack Engineer building scalable, intelligent applications.",
  keywords: ["AI", "Machine Learning", "Next.js", "Full Stack Developer"],
  metadataBase: new URL("https://www.kuberpathak.com.np"),
  icons: {
    icon: "/favicon1.png",
    shortcut: "/favicon1.png",
    apple: "/favicon1.png",  
  },
  openGraph: {
    title: "Kuber Pathak — AI Developer & Full-Stack Engineer",
    description:
      "Portfolio of Kuber Pathak — AI Developer and Full-Stack Engineer building scalable, intelligent applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} ${caveat.variable} ${bricolage.variable}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}