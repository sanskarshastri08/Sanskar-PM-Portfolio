import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanskar | Product Manager Portfolio",
  description:
    "Portfolio of Sanskar — a product manager crafting user-centric digital products with data-driven strategy, strong cross-functional leadership, and a bias for impact.",
  keywords: [
    "Product Manager",
    "Portfolio",
    "Sanskar",
    "UX Strategy",
    "Roadmapping",
    "Agile",
    "Product Design",
  ],
  authors: [{ name: "Sanskar" }],
  openGraph: {
    title: "Sanskar | Product Manager Portfolio",
    description:
      "Crafting impactful digital products with data-driven strategy and user-centric thinking.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Ambient orbs */}
        <div className="orb orb-1" aria-hidden="true" />
        <div className="orb orb-2" aria-hidden="true" />
        <div className="orb orb-3" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
