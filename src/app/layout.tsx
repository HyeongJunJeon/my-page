import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "전형준's Portfolio",
    template: "전형준 | %s",
  },
  description: "welcome to 전형준's Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="flex min-h-screen flex-col">
        <Navbar />
        <main className="mt-16 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
