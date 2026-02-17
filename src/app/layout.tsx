import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christine Nelson",
  description: "Writer, strategist, and creative consultant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
