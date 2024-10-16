import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Providers from "@/lib/Provider";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next Blog",
  description:
    "Welcome to Next Blog – where innovation meets imagination in the dynamic realm of technology, offering a thrilling journey through the latest trends and groundbreaking discoveries in the world of tech !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={roboto.className}>
        <Providers>
          <Header />
          <div className="min-h-screen">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
