import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "IMDB CLone",
  description: "This is movie database clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
