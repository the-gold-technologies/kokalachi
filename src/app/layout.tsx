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
  metadataBase: new URL("https://kokalachi.com"),
  title: {
    default: "Kokalachi — Journeys Become Friendships",
    template: "%s | Kokalachi",
  },
  description:
    "Kokalachi designs immersive, slow-paced group journeys for conscious travelers. Replace tourist traps with authentic human connection and lifelong friendships.",
  keywords: [
    "group travel",
    "slow travel",
    "conscious travel",
    "curated journeys",
    "travel community",
    "Kokalachi",
    "India travel",
    "international travel",
    "travel experiences",
  ],
  authors: [{ name: "Kokalachi", url: "https://kokalachi.com" }],
  creator: "Kokalachi",
  publisher: "Kokalachi",
  icons: {
    icon: "/fevicon.png",
    shortcut: "/fevicon.png",
    apple: "/fevicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kokalachi.com",
    siteName: "Kokalachi",
    title: "Kokalachi — Journeys Become Friendships",
    description:
      "Kokalachi designs immersive, slow-paced group journeys for conscious travelers. Replace tourist traps with authentic human connection and lifelong friendships.",
    images: [
      {
        url: "/fevicon.png",
        width: 512,
        height: 512,
        alt: "Kokalachi Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Kokalachi — Journeys Become Friendships",
    description:
      "Immersive, slow-paced group journeys for conscious travelers. Real connections. Real places. No tourist traps.",
    images: ["/fevicon.png"],
    creator: "@kokalachi",
    site: "@kokalachi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
