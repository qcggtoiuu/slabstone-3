import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { TempoInit } from "./tempo-init";
import { ThemeProvider } from "@/components/theme-provider";
import { AdminAuthProvider } from "@/components/admin-auth-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Topbar from "@/components/topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Showcase - Admin Panel",
  description:
    "A product showcase website with admin panel for product management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AdminAuthProvider>
            <Topbar />
            <Navbar />
            {children}
            <Footer />
            <TempoInit />
          </AdminAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
