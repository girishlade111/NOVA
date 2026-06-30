import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NOVA — Creative Studio for Brands That Move",
  description:
    "NOVA is an independent creative studio crafting brand systems, digital products, and motion design for ambitious teams worldwide.",
  keywords: [
    "NOVA",
    "creative studio",
    "brand design",
    "digital products",
    "motion design",
    "agency",
  ],
  authors: [{ name: "NOVA Studio" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "NOVA — Creative Studio",
    description:
      "Brand systems, digital products, and motion design for ambitious teams.",
    siteName: "NOVA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOVA — Creative Studio",
    description:
      "Brand systems, digital products, and motion design for ambitious teams.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${display.variable} antialiased bg-background text-foreground grain`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
