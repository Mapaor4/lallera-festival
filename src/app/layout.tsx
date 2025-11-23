import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Festival La Llera - Festival de Curtmetratges de la Llera del Ter",
  description: "Festival de curtmetratges de la Llera del Ter. Descobreix el talent cinematogràfic dels pobles de Bordils, Celrà, Cervià de Ter, Flaçà, Juià, Madremanya, Medinyà, Sant Joan de Mollet, Sant Jordi Desvalls, Sant Llorenç de les Arenes, Sant Martí Vell i Viladasens.",
  keywords: ["festival", "curtmetratges", "cinema", "Llera del Ter", "Celrà", "Girona", "Catalunya", "audiovisual", "cinema local"],
  authors: [{ name: "Associació Cultural La Llera del Ter" }],
  openGraph: {
    title: "Festival La Llera",
    description: "Festival de curtmetratges de la Llera del Ter",
    type: "website",
    locale: "ca_ES",
  },
  robots: {
    index: false, // Més endavant canviar-ho
    follow: false, // Més endavant canviar-ho
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ca">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Kedebideri:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
