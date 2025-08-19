import type { Metadata } from "next";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Footer from "@/components/footer";
import { AppNavigation } from "@/components/app-navigation";

const monsterratFont = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
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
      <body
        className={`${monsterratFont.className} antialiased`}
      >
        <SidebarProvider defaultOpen={false}>
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
              <Image
                src="/images/instar.png"
                alt="Instar"
                width={130}
                height={32}
                className="w-[128px] h-auto rounded-lg"
                priority
              />

              <AppNavigation className="-mr-1 ml-auto hidden md:block z-100" />
              <SidebarTrigger className="-mr-1 ml-auto md:hidden" />
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
