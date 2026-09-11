export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Kokalachi. Ask questions, plan a group trip, or just say hello. We'd love to hear from you.",
  openGraph: {
    title: "Contact Us | Kokalachi",
    description:
      "Get in touch with Kokalachi. Ask questions, plan a group trip, or just say hello.",
    url: "https://kokalachi.com/contact",
    images: [{ url: "/fevicon.png", width: 512, height: 512, alt: "Kokalachi Logo" }],
  },
  twitter: {
    card: "summary",
    title: "Contact Us | Kokalachi",
    description: "Get in touch with Kokalachi. Plan a group trip or just say hello.",
    images: ["/fevicon.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
