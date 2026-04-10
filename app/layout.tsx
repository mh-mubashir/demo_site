import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invoy – AI Payment Guardian for Freelancers | Dissolve IT",
  description:
    "Invoy is the AI payment guardian for individual contributors. Automate invoices, guarantee payment accuracy, and reclaim your time.",
  icons: {
    icon: "https://framerusercontent.com/images/gYBeUThdkdqLQ1JWTz45fLcDDc.png",
    apple: "https://framerusercontent.com/images/XOXY9pwgAk8bGvWGFYqMR4dcoxE.png",
  },
  openGraph: {
    title: "Invoy – AI Payment Guardian for Freelancers",
    description:
      "Automate invoices, track billable time, and guarantee revenue with AI.",
    siteName: "Dissolve IT",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
