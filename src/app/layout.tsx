import type { Metadata } from "next";
import { Poppins, Playball, Montserrat, Playfair_Display, Caveat, Satisfy } from "next/font/google";
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

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  weight: ["400", "600", "700", "800"],
  variable: "--font-playfair",
  subsets: ["latin"],
});

const caveat = Caveat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
  subsets: ["latin"],
});

const satisfy = Satisfy({
  weight: "400",
  variable: "--font-satisfy",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kokalachi - Journeys Become Friendships",
  description: "High-fidelity premium travel and tours landing page.",
  icons: {
    icon: "/fevicon.png",
    shortcut: "/fevicon.png",
    apple: "/fevicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playball.variable} ${montserrat.variable} ${playfair.variable} ${caveat.variable} ${satisfy.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
