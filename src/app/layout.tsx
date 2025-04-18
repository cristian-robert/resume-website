import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";
import BackToTop from "@/components/layout/BackToTop";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
