import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RudraaTechSolution",
  description:
    "RudraaTechSolution is a leading software development company in Uttar Pradesh. We create innovative and user-friendly software solutions to help businesses grow.",
  keywords:
    "software development company, web development company, mobile app development India, IT consulting India, Uttar Pradesh software solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className="pt-20">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
