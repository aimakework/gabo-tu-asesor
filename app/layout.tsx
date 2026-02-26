import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import FormModal from "@/components/FormModal";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Gabo Tu Asesor | Estrategia Financiera",
  description:
    "Diagnóstico de optimización financiera para profesionistas con ingresos desde $55,000 MXN.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ModalProvider>
          <ScrollToTop />
          {children}
          <FormModal />
        </ModalProvider>
      </body>
    </html>
  );
}
