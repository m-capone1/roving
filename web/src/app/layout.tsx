import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roving — Banking for AI Agents",
  description: "The financial OS for AI agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="h-full font-sans antialiased bg-background text-on-surface">
        {children}
      </body>
    </html>
  );
}
