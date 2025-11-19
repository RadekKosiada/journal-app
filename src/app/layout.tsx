import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Journal App",
    description: "Generated to have fun",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
