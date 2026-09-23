import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Raksa ID",
    template: "%s | Raksa ID",
  },
  description:
    "Raksa ID is a secure blockchain-based platform for identity, access control, and digital asset management.",
  keywords: [
    "Raksa ID",
    "Blockchain Identity",
    "Access Control",
    "Digital Assets",
    "Web3",
    "NFT",
  ],
  authors: [{ name: "Raksa ID" }],
  creator: "Raksa ID",
  applicationName: "Raksa ID",

  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
