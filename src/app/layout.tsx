import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";
import BackToTop from "@/components/layout/BackToTop";
import Footer from "@/components/layout/Footer";
import ConsentManager from "@/components/privacy/consent-manager";
import { AuroraBackground } from "@/components/ui/aurora-background";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ClerkProvider>
          <AuroraBackground>
            <Header />
            {children}
            <Footer />
            <BackToTop />
            <ConsentManager />
          </AuroraBackground>
        </ClerkProvider>
      </body>
    </html>
  );
}
