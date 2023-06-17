export const metadata = {
    title: "Cadastrar Criador de Conteúdo",
    description: "Desenvolvido pelo @brunofhorn",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full bg-default">
            <body className="h-full bg-default">{children}</body>
        </html>
    );
}
