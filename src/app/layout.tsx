import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Workspace",
  description: "AI apps, experts, and projects",
  openGraph: {
    title: "Workspace",
    description: "AI apps, experts, and projects",
    // url: "https://analogfuture.xyz",
    images: [
      {
        url: "/images/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Social Preview Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workspace",
    description: "AI apps, experts, and projects",
    image: "/images/social-preview.png",
  },
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
