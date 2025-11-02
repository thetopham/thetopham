import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import MatrixRainingCode from './components/MatrixRainingCode';


export const metadata: Metadata = {
  title: {
    default: "Matt Topham | thetopham.com",
    template: "%s | thetopham.com",
  },
  description:
    "Robotics • AR/VR • AI/Finance — Building clean, useful tools and learning in public.",
  openGraph: {
    title: "Matt Topham | thetopham.com",
    description:
      "Robotics • AR/VR • AI/Finance — Building clean, useful tools and learning in public.",
    url: "https://thetopham.com",
    siteName: "thetopham.com",
    images: [
      {
        url: "https://thetopham.com/og1.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
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
  twitter: {
    title: "Matt Topham",
    description:
      "Robotics • AR/VR • AI/Finance — Building clean, useful tools and learning in public.",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head></head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        <MatrixRainingCode /> 
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
