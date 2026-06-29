import "./globals.css";
import Nav from './_compo/nav/page';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Inter } from "next/font/google";
import ProductsconProvider from "@/context/productscon";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "My App",
  icons: {
    icon: "/mina.jpeg",
  },
};



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body >
        <ProductsconProvider>
          <Nav />
          <div className="mt-15">
            {children}
            <Toaster />
          </div>
        </ProductsconProvider>
      </body>
    </html>
  );
}



