import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kwentong Barbero | Premium Barbershop in the Philippines",
  description:
    "Kwentong Barbero is your go-to barbershop for expert haircuts, shaves, and grooming services. Experience top-notch service, classic styles, and a relaxing atmosphere. Book your appointment today!",
  keywords: [
    "barbershop",
    "haircut",
    "shave",
    "grooming",
    "men's haircut",
    "Philippines barbershop",
    "Kwentong Barbero",
    "hair styling",
    "men's grooming",
    "classic barbershop",
  ],
  metadataBase: new URL("https://kwentongbarbero.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-whtie-bg">
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </Head>
        <section className="sticky top-0 w-full z-40">
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
