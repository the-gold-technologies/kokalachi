export const metadata = {
  title: "All Journeys",
  description:
    "Explore all our carefully curated group travel journeys and experiences. Find your next adventure with Kokalachi.",
  openGraph: {
    title: "All Journeys | Kokalachi",
    description:
      "Explore all our carefully curated group travel journeys and experiences. Find your next adventure with Kokalachi.",
    url: "https://kokalachi.com/journeys",
    images: [{ url: "/fevicon.png", width: 512, height: 512, alt: "Kokalachi Logo" }],
  },
  twitter: {
    card: "summary",
    title: "All Journeys | Kokalachi",
    description: "Explore all our carefully curated group travel journeys with Kokalachi.",
    images: ["/fevicon.png"],
  },
};

export default function JourneysLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
