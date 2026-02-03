import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://megoldjukokosba.hu"),
  title: {
    default: "megoldjukokosba - Intelligens Otthon Automatizálás",
    template: "%s | megoldjukokosba"
  },
  description: "Professzionális okos otthon és épületautomatizálási megoldások Magyarországon. Apple HomeKit integráció, intelligens világítás, klímavezérlés, biztonsági rendszerek.",
  keywords: [
    "okos otthon",
    "smart home",
    "otthon automatizálás",
    "Apple HomeKit",
    "intelligens világítás",
    "klímavezérlés",
    "biztonsági rendszer",
    "épületautomatizálás",
    "Budapest",
    "Magyarország"
  ],
  authors: [{ name: "megoldjukokosba" }],
  creator: "megoldjukokosba",
  publisher: "megoldjukokosba",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://megoldjukokosba.hu",
    siteName: "megoldjukokosba",
    title: "megoldjukokosba - Intelligens Otthon Automatizálás",
    description: "Professzionális okos otthon és épületautomatizálási megoldások Magyarországon. Apple HomeKit integráció, intelligens világítás, klímavezérlés.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "megoldjukokosba - Okos Otthon Megoldások",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "megoldjukokosba - Intelligens Otthon Automatizálás",
    description: "Professzionális okos otthon és épületautomatizálási megoldások Magyarországon.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://megoldjukokosba.hu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#00B1E1" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
