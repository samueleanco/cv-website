import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const title = "Samuele Ancona | Computer Science Student & Backend Developer";
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
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Samuele Ancona — Computer Science Student & Backend Developer" }],
    locale: "en_US",
    title,
    description,
    siteName: "Samuele Ancona",
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#101419" },
  ],
};

// Runs before first paint: explicit choice wins, otherwise follow the OS.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
