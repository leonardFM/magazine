import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/layouts/Navbar";
import Footer from "./component/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Magazine",
  description: "Magazine - voi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
          {children}
        <Footer />
        </body>
    </html>
  );
}
