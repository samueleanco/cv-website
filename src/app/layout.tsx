import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "Samuele Ancona | Student & Developer";
const description =
  "Computer Science student at FHNW specializing in Security, Platforms & DevOps and Backend Development Intern at KW Software AG.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ancona.dev"),
  title,
  description,
  applicationName: "Samuele Ancona Portfolio",
  authors: [{ name: "Samuele Ancona" }],
  keywords: [
    "Samuele Ancona",
    "Backend Developer",
    "Computer Science",
    "FHNW",
    "C#",
    ".NET",
    "DevOps",
    "Switzerland",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Samuele Ancona — Student & Developer" }],
    locale: "en_US",
    title,
    description,
    siteName: "Samuele Ancona",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0d10",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
