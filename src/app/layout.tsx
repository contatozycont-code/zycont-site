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
  title: "Zycont Contabilidade Inteligente | Contador em Russas CE",
  description: "Contabilidade em Russas CE, atendimento online no Ceará e em todo o Brasil para MEI, ME, EPP, abertura de empresa e regularização de CNPJ.",

  verification: {
    google: "FcO5nnT3l2czm6f7CrRFk-a998AntJinMq-ZuBENs94",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
