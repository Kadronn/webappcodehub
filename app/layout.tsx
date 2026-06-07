import "./globals.css";
import React from "react";

export const metadata = {
  title: "Web App Code Hub",
  description: "Premium Software & Automation Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
