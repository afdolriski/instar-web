'use client'

import * as React from "react"
import { usePathname } from "next/navigation";
import Image from "next/image"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { ChevronRight, X } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button";

const data = {
  navMain: [
    {
      title: "Beranda",
      url: "/",
    },
    {
      title: "Peringkat INSTAR",
      items: [
        {
          title: "Peringkat INSTAR 2025",
          url: "/ranking/2025",
        },
        {
          title: "Peringkat INSTAR 2024",
          url: "/ranking/2024",
        },
      ],
    },
    {
      title: "Event",
      items: [
        {
          title: "Event INSTAR 2025",
          url: "/events/2025",
        },
        {
          title: "Event INSTAR 2024",
          url: "/events/2024",
        },
      ],
    },
    {
      title: "Solusi",
      url: "/solution",
    },
    {
      title: "Tentang",
      url: "/about",
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathName = usePathname();
  const { toggleSidebar } = useSidebar()

  return (
    <Sidebar {...props} className="w-full">
      <SidebarHeader className="border-b border-neutral-600">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="flex justify-between">
                <Link onClick={() => toggleSidebar()} href="/">
                  <Image
                    src="/images/instar.png"
                    alt="Instar"
                    width={130}
                    height={32}
                    className="w-[128px] h-auto rounded-lg"
                  />
                </Link>
                <Button onClick={() => toggleSidebar()} variant="secondary" size="icon" className="bg-neutral-50 shadow-none border-none hover:bg-neutral-50">
                  <X />
                </Button>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="">
            {data.navMain.map((item) => (
              <Collapsible
                key={item.title}
                defaultOpen={true}
                className="group/collapsible text-base"
              >
                <SidebarMenuItem className="font-sans">
                  <SidebarGroupLabel
                    asChild
                    className="group/label text-sidebar-foreground hover:text-primary-500 text-base font-sans"
                  >
                    {item.items ? (
                      <CollapsibleTrigger className="cursor-pointer font-sans font-normal">
                        {item.title}{" "}
                        {item.items && (
                          <ChevronRight className="ml-2 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        )}
                      </CollapsibleTrigger>
                    ): (
                      <SidebarMenuButton isActive={item.url === pathName} asChild className="font-normal">
                        <Link onClick={() => toggleSidebar()} href={item.url!}>
                          <div className="hover:text-primary-500">{item.title}</div>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarGroupLabel>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub className="border-none list-none  font-sans">
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              className="hover:text-primary-500 text-base"
                              isActive={item.url === pathName}
                            >
                              <Link onClick={() => toggleSidebar()} href={item.url}>{item.title}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
