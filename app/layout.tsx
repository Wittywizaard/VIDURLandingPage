import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VIDUR AI - AI Built For Tax Work",
  description: "VIDUR is a sophisticated, trusted AI workspace for serious tax, legal, corporate, and regulatory work. Trusted by 25,000+ professionals across India.",
  keywords: ["VIDUR", "AI", "Tax", "Legal", "Chartered Accountant", "Company Secretary", "Legal Tech", "India"],
  authors: [{ name: "VIDUR AI" }],
  openGraph: {
    title: "VIDUR AI - AI Built For Tax Work",
    description: "Sophisticated AI workspace for tax and legal professionals",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} scroll-smooth`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
