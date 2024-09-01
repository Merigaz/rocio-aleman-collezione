import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ContextProvider from "@/utils/createContext";
import ButtonWP from "@/components/buttonwp";
import FooterComp from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rocio Aleman Collezione",
  description: "Pijamas, Moda Colombia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <AntdRegistry>
        <body className={inter.className}>
          <ContextProvider>
            <Header />
            {children}
            <ButtonWP />
            <FooterComp />
          </ContextProvider>
        </body>
      </AntdRegistry>
    </html>
  );
}
