import { Separator } from "@/components/ui/separator"
import { AppSidebar } from "@/components/app-sidebar"
import Hero from "@/components/home/hero"
import Methodology from "@/components/home/methodology"
import Newsroom from "@/components/home/newsroom"
import Section1 from "@/components/home/section1"
import Solution from "@/components/home/solution"
import Timeline from "@/components/home/timeline"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-mr-1 ml-auto rotate-180" />
        </header>
        <div className="flex flex-1 flex-col gap-4">
          {/* <Hero /> */}
          <Section1 />
          <Separator />
          <Methodology />
          <Separator />
          <Solution />
          <Separator />
          <Timeline />
          <Separator />
          <Newsroom />
        </div>
      </SidebarInset>
      <AppSidebar side="right" />
    </SidebarProvider>
  )
}
