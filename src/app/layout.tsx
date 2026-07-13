import type { Metadata } from "next";
import { Poppins, Playball } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const playball = Playball({
  weight: "400",
  variable: "--font-playball",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kokalachi - Journeys Become Friendships",
  description: "High-fidelity premium travel and tours landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playball.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
