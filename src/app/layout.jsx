"use client";
import Footer from "../components/footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar/Navbar";
import { ThemeProvider } from "../context/ThemeContext";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="contain">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
