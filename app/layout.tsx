import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import './styles.css'

const poppins = Poppins({
  weight:["400", "500", "600", "700"],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Gerador de QR Code",
  description: "Gerador de QR Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins}`}
      >
        {children}
      </body>
    </html>
  );
}
