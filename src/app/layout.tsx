import { Background } from "@/components/Background";
import "./globals.css";
// Import Inter font (Next.js handles this better than link tags)
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Material Symbols for icons used in your design */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Background />
        {children}
      </body>
    </html>
  );
}