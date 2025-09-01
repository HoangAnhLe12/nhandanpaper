import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hành trình độc lập Việt Nam",
  description: "Từ Pác Bó đến Ba Đình - Hành trình Độc lập",
  openGraph: {
    type: "website",
    url: "https://yoolife360.com",
    title: "Hành trình độc lập Việt Nam",
    description: "Từ Pác Bó đến Ba Đình - Hành trình Độc lập",
    images: [
      {
        url: "https://cdn.yoolife.com.vn/yootek/1756731879760-9114.jpg",
        width: 1120, // điền đúng width thật của ảnh
        height: 630, // điền đúng height thật của ảnh
        alt: "Hành trình độc lập Việt Nam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hành trình độc lập Việt Nam",
    description: "Từ Pác Bó đến Ba Đình - Hành trình Độc lập",
    images: ["https://cdn.yoolife.com.vn/yootek/1756731879760-9114.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
