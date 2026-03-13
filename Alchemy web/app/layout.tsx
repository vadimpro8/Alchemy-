import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-body',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-display',
  display: 'swap',
});

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL ?? 'http://localhost:3000'),
  title: "ALCHEMY: KYRGYZSTAN - Экспедиция-перезагрузка в горы Кыргызстана",
  description: "11 дней трансформации через горы, холод и честность. Экспедиция для тех, кто устал жить на автопилоте. 18-28 августа 2026.",
  keywords: "экспедиция, Кыргызстан, трансформация, биохакинг, горы, Иссык-Куль, перезагрузка, личностный рост",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: "ALCHEMY: KYRGYZSTAN - Экспедиция-перезагрузка",
    description: "11 дней трансформации через горы, холод и честность",
    type: "website",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ALCHEMY: KYRGYZSTAN - Экспедиция-перезагрузка',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <Script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-body antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
