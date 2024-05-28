// Import the type for metadata from Next.js
import type { Metadata } from "next";
// Import the Inter font from Google Fonts using Next.js font optimization
import { Inter } from "next/font/google";
// Import global CSS styles
import "./globals.css";
// Import the Toaster component from Sonner
import { Toaster } from "sonner";

// Configure the Inter font to include the Latin subset
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Recipe Master",
    default: "Recipe Master",
  },
  description:
    "RecipeMaster emphasizes expertise and mastery in the kitchen, making it an attractive choice for users looking to refine their culinary skills and manage their recipes efficiently.",
  icons: {
    icon: "/logo/favicon.png",
  },
};

// RootLayout component which wraps the entire application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster richColors />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
