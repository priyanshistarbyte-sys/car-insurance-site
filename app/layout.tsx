import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Car Insurance - MyExpertAdvisor",
  description: "Comprehensive car insurance coverage information",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
