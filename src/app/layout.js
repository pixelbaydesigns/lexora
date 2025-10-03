import "./globals.css";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Lexora Business",
  "url": "https://www.lexoraservices.com",
  "logo": "https://www.lexoraservices.com/images/logo.jpg",
  "description": "Start and grow your business in Qatar with expert setup, legal support, attestation, and certified translation.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mathar Qadeem",
    "addressLocality": "Doha",
    "addressCountry": "QA"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+974 3110 7654",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.linkedin.com/company/lexora",
    "https://www.facebook.com/lexora",
    "https://www.instagram.com/lexoraservices",
  ],
};

export const metadata = {
  title: "Lexora",
  description: "Start and grow your business in Qatar with expert setup, legal support, attestation, and certified translation — all in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.example.com" />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://www.example.com" />
        <meta property="og:image" content="https://www.example.com/images/preview.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://www.example.com/images/preview.jpg" />

        {/* Favicon and Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-white w-full`}>
        <SpeedInsights />
        <main className="bg-gray-50">
          <div className=" mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
