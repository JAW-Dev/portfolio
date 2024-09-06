import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Components
import Navbar from "@/layout/Navbar";
import Sidebar from "@/layout/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason Witt Portfolio",
  description: "Jason Witt's portfolio",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-auto p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;