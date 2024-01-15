import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Getflix -Gatwech's netflix clone",
  description:
    "This is Gatwech Nguth's netflix clone. Nextjs 14 + Typescript + TMDB api",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="max-w-full mx-auto bg-[#0F1117]">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
