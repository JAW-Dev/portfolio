import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Components
import Navbar from "../layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason Witt Portfolio",
  description: "Jason Witt's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
