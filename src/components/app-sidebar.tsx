import * as React from "react"

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
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

// This is sample data.
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
          url: "/events/2025",
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
  return (
    <Sidebar {...props}>
      {/* <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader> */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={true}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <SidebarGroupLabel
                    asChild
                    className="group/label text-sidebar-foreground hover:text-sidebar-accent-foreground text-sm"
                  >
                    {item.items ? (
                      <CollapsibleTrigger>
                        {item.title}{" "}
                        {item.items && (
                          <ChevronRight className="ml-2 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        )}
                      </CollapsibleTrigger>
                    ): (
                      <SidebarMenuButton asChild>
                        <Link href={item.url!}>
                          <div className="font-medium">{item.title}</div>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarGroupLabel>

                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub className="border-none">
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={false}
                            >
                              <a href={item.url}>{item.title}</a>
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
