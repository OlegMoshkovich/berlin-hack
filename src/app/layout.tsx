import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orchestrated workspace",
  description: "Orchestration of AI-driven apps, experts, and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="bg-muted/50 flex h-100vh flex-1 flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
