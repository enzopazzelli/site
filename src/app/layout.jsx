import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Montserrat, Roboto } from "next/font/google";
// import { SessionProvider } from 'next-auth/react';
import AuthProvider from "./components/AuthProvider/AuthProvider";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "site.2Raise",
  description: "Generado con create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <ThemeProvider>
          <AuthProvider >
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
