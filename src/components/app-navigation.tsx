"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

const navItems = [
  {
    label: 'Beranda',
    href: '/',
    isActive: true
  },
  {
    label: 'Peringkat INSTAR',
    href: '#',
    items: [
      {
        label: 'Peringkat INSTAR 2025',
        href: '/ranking/2025',
      },
      {
        label: 'Peringkat INSTAR 2024',
        href: '/ranking/2024',
      },
    ]
  },
  {
    label: 'Event',
    href: '#',
    items: [
      {
        label: 'Event INSTAR 2025',
        href: '/event/2025',
      },
      {
        label: 'Event INSTAR 2024',
        href: '/event/2024',
      },
    ]
  },
  {
    label: 'Solusi',
    href: '/solution'
  },
  {
    label: 'Tentang',
    href: '/about'
  },
]

export function AppNavigation({ className }: React.ComponentProps<"div">) {
  return (
    <NavigationMenu viewport={false} className={className}>
      <NavigationMenuList>
        {navItems.map((item, key) => (
          item.items ? (
            <NavigationMenuItem key={key}>
              <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-auto gap-4">
                  <li>
                    {item.items?.map((child, key) => (
                      <NavigationMenuLink asChild key={key}>
                        <Link href={child.href}>
                          <div className="font-medium">{child.label}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={key}>
              <NavigationMenuLink asChild>
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
