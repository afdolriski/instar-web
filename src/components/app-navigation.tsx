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
    href: '/'
  },
  {
    label: 'Peringkat INSTAR',
    href: '#',
    items: [
      {
        label: 'Peringkat INSTAR 2024',
        href: '#',
      },
      {
        label: 'Peringkat INSTAR 2025',
        href: '#',
      },
    ]
  },
  {
    label: 'Event',
    href: '#',
    items: [
      {
        label: 'Event INSTAR 2024',
        href: '#',
      },
      {
        label: 'Event INSTAR 2025',
        href: '#',
      },
    ]
  },
  {
    label: 'Solusi',
    href: '#'
  },
  {
    label: 'Tentang',
    href: '#'
  },
]

export function AppNavigation({ className }: React.ComponentProps<"div">) {
  return (
    <NavigationMenu viewport={false} className={className}>
      <NavigationMenuList>
        {navItems.map((item, key) => (
          item.items ? (
            <NavigationMenuItem>
              <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>

                    {item.items?.map((child, key) => (
                      <NavigationMenuLink asChild key={key}>
                        <Link href={child.href}>
                          <div className="font-medium">{child.label}</div>
                          {/* <div className="text-muted-foreground">
                            Browse all components in the library.
                          </div> */}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={key}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
