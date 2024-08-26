import type { Metadata } from "next";
import localFont from '@next/font/local'
import "./globals.css";


const robotoRounded = localFont({
  src: [
    {
      path: '../../public/fonts/Roboto-Rounded/Roboto-Black.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Roboto-Rounded/Roboto-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-roboto-rounded'
})


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
