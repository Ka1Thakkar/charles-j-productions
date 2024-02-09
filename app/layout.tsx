import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { ThemeProvider } from "./_components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charles J. Films",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider defaultTheme='dark' disableTransitionOnChange enableSystem>
          {/* <Navbar /> */}
          {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
