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
import { usePathname } from "next/navigation"

const navItems = [
  {
    label: 'Beranda',
    href: '/',
    isActive: true
  },
  {
    label: 'Peringkat INSTAR',
    href: '/ranking',
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
    href: '/events',
    items: [
      {
        label: 'Event INSTAR 2025',
        href: '/events/2025',
      },
      {
        label: 'Event INSTAR 2024',
        href: '/events/2024',
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
  const pathname = usePathname();
  
  return (
    <NavigationMenu viewport={false} className={className}>
      <NavigationMenuList>
        {navItems.map((item, key) => (
          item.items ? (
            <NavigationMenuItem key={key}>
              <NavigationMenuTrigger className={pathname.startsWith(item.href) ? 'font-bold text-primary' : ''}>
                <div>{item.label}</div>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-auto gap-4">
                  <li>
                    {item.items?.map((child, key) => (
                      <NavigationMenuLink asChild key={key} data-active={pathname === child.href}>
                        <Link href={child.href}>
                          {child.label}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={key}>
              <NavigationMenuLink asChild data-active={pathname === item.href}>
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
