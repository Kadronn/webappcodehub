import "./globals.css";
import React from "react";

export const metadata = {
  title: "MiraMisi | Web Site Yapma, Mobil Uygulama ve Bot Hizmetleri",
  description: "MiraMisi ile hayalinizdeki projeyi hayata geçirin! Profesyonel web site yapma, web site açma, mobil uygulama geliştirme, akıllı bot yapma ve hazır uygulama satın al seçenekleriyle hizmetinizdeyiz.",
  keywords: "web site yapma, web site açma, uygulama yapma, bot yapma, uygulama satin al, miramisi, yazılım ajansı",
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
