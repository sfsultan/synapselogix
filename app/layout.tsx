import "./globals.css";
import type { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/nav-bar";
import Footer from "@/components/footer";
import Banner from "@/components/banner";
import {
  APP_NAME,
  APP_DESC,
  APP_URL,
  APP_KEYWORDS,
} from "app-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: APP_NAME,
  description: APP_DESC,

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  generator: APP_NAME,
  applicationName: APP_NAME,
  referrer: "origin-when-cross-origin",
  keywords: APP_KEYWORDS,
  authors: [{ name: "FahdS", url: APP_URL }],
  colorScheme: "dark",
  creator: "Fahd Sultan",
  publisher: APP_NAME,
  category: "technology",
  manifest: APP_URL + "/site.webmanifest",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: APP_NAME,
    description: APP_DESC,
    url: APP_URL,
    siteName: APP_NAME,
    images: [
      {
        url: APP_URL + "/main-image.jpg",
        width: 1400,
        height: 600,
        alt: "Main Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon-16x16.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-touch-icon.png",
  },

  other: {
    "mask-icon": "/safari-pinned-tab.svg",
  },

  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESC,
    siteId: process.env.TWITTER_SITE_ID,
    creator: process.env.TWITTER_CREATOR,
    creatorId: process.env.TWITTER_CREATOR_ID,
    images: [APP_URL + "/main-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " scroll-smooth"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Banner />
          <Navbar />
          <div className="mx-auto max-w-screen-xl">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
