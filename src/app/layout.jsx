import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WixClientContextProvider } from "@/context/wixContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chaudhry Mobiles",
  description: "Discover the latest smartphones and accessories at Chaudhry Mobiles your one-stop online shop for top mobile brands unbeatable prices and exceptional customer service. Shop now for fast shipping and exclusive deals.",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?=v4'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClientContextProvider>
          <Navbar />
          {children}

        </WixClientContextProvider>
      </body>
    </html>
  );
}
