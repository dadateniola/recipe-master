// Import the type for metadata from Next.js
import type { Metadata } from "next";
// Import the Inter font from Google Fonts using Next.js font optimization
import { Inter } from "next/font/google";
// Import global CSS styles
import "./globals.css";

// Configure the Inter font to include the Latin subset
const inter = Inter({ subsets: ["latin"] });

// Define and export the metadata for the webpage
export const metadata: Metadata = {
  title: "Recipe Master", // Title of the web page
  description: "RecipeMaster emphasizes expertise and mastery in the kitchen, making it an attractive choice for users looking to refine their culinary skills and manage their recipes efficiently.", // Description meta tag for SEO and sharing
  icons: {
    icon: "/logo/favicon.png", // Path to the favicon icon
  }
};

// Define the RootLayout component which wraps the entire application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Define the type for children prop as React.ReactNode
}>) {
  return (
    // Set the language of the document to English
    <html lang="en">
      {/* Apply the Inter font class to the body element */}
      <body className={inter.className}>
        {/* Render any nested components or content passed to this layout */}
        {children}
      </body>
    </html>
  );
}
