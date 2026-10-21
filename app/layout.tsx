import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{fontFamily: 'Montserrat, system-ui, sans-serif'}}>{children}</body>
    </html>
  );
}
