import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar"; 
import { Footer } from "@/components/Footer";
import "./globals.css";
import Script from 'next/script';
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
        <Navbar /> 
        <div className="pt-20"> {/* Add padding top so content isn't hidden under fixed nav */}
          {children}
        </div>
        <Footer />
         <Script 
          src="https://omnichat-ai-flame.vercel.app/omnichat.js" 
          data-api-key="user_3Hut70rMhshLyNcMTGewB1GFmuS"
          strategy="afterInteractive" 
        />
      </body>
    </html>
  );
}