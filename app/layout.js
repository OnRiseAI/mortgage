import "./globals.css";

export const metadata = {
  title: "1st Property Lawyers UK — AI Receptionist Demo",
  description:
    "Demo: Meet Sophie, the AI receptionist built for 1st Property Lawyers UK. Try the live voice assistant.",
  metadataBase: new URL("https://l.onrise.ai"),
  openGraph: {
    title: "1st Property Lawyers UK — AI Voice Assistant",
    description:
      "Speak with our AI assistant about conveyancing, property law, and remortgaging. Available 24/7.",
    url: "https://l.onrise.ai",
    siteName: "1st Property Lawyers UK",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
