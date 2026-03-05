import "./globals.css";

export const metadata = {
  title: "Mortgage Protection — AI Receptionist Demo",
  description:
    "Demo: Meet Sophie, the AI receptionist built for Mortgage Protection. Try the live voice assistant.",
  metadataBase: new URL("https://mortgage.onrise.ai"),
  openGraph: {
    title: "Mortgage Protection — AI Voice Assistant",
    description:
      "Speak with our AI assistant about life insurance, critical illness cover, and mortgage protection. Available 24/7.",
    url: "https://mortgage.onrise.ai",
    siteName: "Mortgage Protection",
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
