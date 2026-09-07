import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HIV/AIDS & STIs Committee — Case Study Lab",
  description: "A committee workspace for developing an integrated HIV services case study.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
