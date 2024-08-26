import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Languages List 🇹🇷",
  description: "A Simple List of Languages with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}
