import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
// Geist, Geist_Mono

const font = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Tai Profolio",
  description: "Portfolio to showcase me and my projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
