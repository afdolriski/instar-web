import type { Metadata } from "next";
import Image from "next/image";
import { Montserrat, Merriweather } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Footer from "@/components/footer";
import { AppNavigation } from "@/components/app-navigation";
import Link from "next/link";

const monsterratFont = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
  variable: '--font-sans',
});

const merriWeatherFont = Merriweather({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
  variable: '--font-secondary',
});

export const metadata: Metadata = {
  title: "INSTAR",
  description: "INSTAR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-TR8G53WZ" />
      <body
        className={`${monsterratFont.variable} ${merriWeatherFont.variable} font-sans antialiased`}
      >
        <SidebarProvider defaultOpen={false}>
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b p-4 md:px-32 sticky top-0 bg-white z-1500">
              <Link href="/">
                <Image
                  src="/images/instar.png"
                  alt="Instar"
                  width={130}
                  height={32}
                  className="w-[128px] h-auto rounded-lg"
                />
              </Link>

              <AppNavigation className="-mr-1 ml-auto hidden md:block z-100" />
              <SidebarTrigger className="-mr-1 ml-auto md:hidden cursor-pointer" />
            </header>
            <main>
              {children}
            </main>
          </SidebarInset>
          <AppSidebar side="right" variant="sidebar" />
        </SidebarProvider>
        <Footer />
      </body>
    </html>
  );
}
