import { ClerkProvider } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerkAppearance";
import { Inter } from "next/font/google";
import AppNavbar from "@/components/ui/AppNavbar";
import "./globals.css";
import BackToTop from "@/components/layout/BackToTop";
import Footer from "@/components/layout/Footer";
import ConsentManager from "@/components/privacy/consent-manager";
import { BeamsBackground } from "@/components/ui/beams-background";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <body className={`${inter.className} antialiased text-white`}>
        <ClerkProvider appearance={clerkAppearance}>
            <BeamsBackground>
                <AppNavbar />
                <main className="pt-20">
                  {children}
                </main>
                <Footer />
                <BackToTop />
                <ConsentManager />
            </BeamsBackground>
        </ClerkProvider>
        </body>
        </html>
    );
}
