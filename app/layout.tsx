import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kwentong Barbero",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <section className="sticky top-0 w-full">
          <Navbar />
        </section>
        <section className="flex-1 h-full">{children}</section>
        <section>
          <Footer />
        </section>
      </body>
    </html>
  );
}
