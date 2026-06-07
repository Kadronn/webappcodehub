import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web, App & Custom Code Development | WebAppCodeHub",
  description: "Get your premium web site, custom mobile application, and automation bot developed from scratch. High-quality React Native, Expo, and Next.js source codes.",
  keywords: ["web site development", "custom app development", "code writing service", "hire web developer", "buy mobile app template", "automation bot"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

