import type { Metadata } from "next";
import "./globals.css";
import Header from "@/ui/header/Header";
import Footer from "@/ui/footer/Footer";

export const metadata: Metadata = {
  title: "World Atlas",
  description: "An informative site about different countries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/pngfind.com-the-earth-png-4605525.png" />
      </head>
      <body className="bg-black text-white flex flex-col min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
