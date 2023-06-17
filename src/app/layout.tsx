import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Grupo de Criadores de Conteúdo Tech",
    description: "Criado por @brunofhorn",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-default h-screen min-h-screen`}>{children}</body>
        </html>
    );
}
